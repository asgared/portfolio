import '@/styles/globals.css'
import type { AppProps } from "next/app"
import { appWithTranslation } from "next-i18next"
import { ChakraProvider } from "@chakra-ui/react"
import { darkTheme } from "@/themes"
import TagManager from "react-gtm-module"
import { useEffect } from "react"



const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		TagManager.initialize({ gtmId: "GTM-WJ8GWQNM" })
	}, [])
	return (
		<ChakraProvider theme={darkTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default appWithTranslation(App)
