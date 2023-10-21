import { extendTheme } from '@chakra-ui/react'

const config = {
    initialColorMode: 'light',
}

const breakpoints = {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
}

const theme = extendTheme({
    config,
    sizes: {
        breakpoints,
    },
})

export default theme
