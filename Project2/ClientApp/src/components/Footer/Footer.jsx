import { Box, Link, Text } from '@chakra-ui/react'

import { footerContainer, footerIconsContainer } from './FooterStyles'

export const Footer = () => {
  return (
    <Box {...footerContainer}>
      <Box>
        <Text>Nicarao Agency © - All Rights Reserved</Text>
      </Box>
      <Box {...footerIconsContainer}>
        <Link href="https://www.nicarao.agency/" isExternal></Link>
        <Link href="https://facebook.com/nicaraodotagency" isExternal></Link>
        <Link href="https://ni.linkedin.com/company/nicaraodotagency"></Link>
      </Box>
    </Box>
  )
}
