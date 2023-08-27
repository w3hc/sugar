// https://github.com/Web3Auth/web3auth-pnp-examples/blob/main/web-modal-sdk/evm/react-evm-modal-example/src/ethersRPC.ts
import type { SafeEventEmitterProvider } from "@web3auth/base";
import { ethers } from "ethers";

export default class EthereumRpc {
  private provider: SafeEventEmitterProvider;

  constructor(provider: SafeEventEmitterProvider) {
    this.provider = provider;
  }

  async getChainId(): Promise<any> {
    try {
      const ethersProvider = new ethers.BrowserProvider(this.provider);
      const networkDetails = await ethersProvider.getNetwork();
      return Number(networkDetails.chainId);
    } catch (error) {
      return error;
    }
  }

  async getChainName(): Promise<any> {
    try {
      const ethersProvider = new ethers.BrowserProvider(this.provider);
      const networkDetails = await ethersProvider.getNetwork();
      return String(networkDetails.name);
    } catch (error) {
      return error;
    }
  }

  async getAccounts(): Promise<any> {
    try {
      const ethersProvider = new ethers.BrowserProvider(this.provider);
      const signer = await ethersProvider.getSigner();
      const address = signer.getAddress();
      return await address;
    } catch (error) {
      return error;
    }
  }

  async getBalance(): Promise<string> {
    try {
      const ethersProvider = new ethers.BrowserProvider(this.provider);
      const signer = await ethersProvider.getSigner();
      const address = signer.getAddress();
      const balance = ethers.formatEther(
        await ethersProvider.getBalance(address) // Balance is in wei
      );
      return balance;
    } catch (error) {
      return error as string;
    }
  }

  async sendTransaction(): Promise<any> {
    try {
      const ethersProvider = new ethers.BrowserProvider(this.provider);
      const signer = await ethersProvider.getSigner();
      const destination = "0xD8a394e7d7894bDF2C57139fF17e5CBAa29Dd977"; // Alice
      const amount = ethers.parseEther("0.000001");
      const tx = await signer.sendTransaction({
        to: destination,
        value: amount,
      });
      const receipt = await tx.wait();
      return receipt;
    } catch (error) {
      return error as string;
    }
  }

  async signMessage() {
    try {
      const ethersProvider = new ethers.BrowserProvider(this.provider);
      const signer = await ethersProvider.getSigner();
      const originalMessage = "YOUR_MESSAGE";
      const signedMessage = await signer.signMessage(originalMessage);
      return signedMessage;
    } catch (error) {
      return error as string;
    }
  }

  async getPrivateKey(): Promise<any> {
    try {
      const privateKey = await this.provider.request({
        method: "eth_private_key",
      });
      return privateKey;
    } catch (error) {
      return error as string;
    }
  }
}