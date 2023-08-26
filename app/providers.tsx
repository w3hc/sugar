'use client'
import { FleekSdk, ApplicationAccessTokenService } from '@fleekxyz/sdk';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

const applicationService = new ApplicationAccessTokenService({
  clientId: 'client_VdSrZ14DxFUhHNeYnwfw',
})

const fleekSdk = new FleekSdk({ accessTokenService: applicationService })

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}