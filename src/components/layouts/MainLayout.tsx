import Head from "next/head"
// import { Footer, Header } from "../ui"
interface Props {
	children: React.ReactNode | React.ReactNode[]
	title: string
	pageDescription: string
	imageUrl?: string
}

export default function MainLayout({
	children,
	imageUrl = "https://res.cloudinary.com/ljtdev/image/upload/v1678488373/WhatsApp_Image_2023-03-10_at_17.45.20_xdibu7.jpg",
	pageDescription,
	title,
}: Props) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='title' content={title} />
				<meta name='description' content={pageDescription} />
				<meta name="keywords" content="veterinaria, mascotas, salud animal, consultas veterinarias, cirugía veterinaria" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Alejandro Mendiola" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://univerzoo.mx/" />

				<meta name='og:title' content={title} />
				{imageUrl && <meta name='og:image' content={imageUrl} />}
				<meta name='og:description' content={pageDescription} />

				<meta property='og:title' content={title} />
				{imageUrl && <meta property='og:image' content={imageUrl} />}
				<meta property='og:description' content={pageDescription} />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://univerzoo.mx/' />

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://univerzoo.mx/' />
				<meta property='twitter:title' content={title} />
				<meta property='twitter:description' content={pageDescription} />
				{imageUrl && <meta property='twitter:image' content={imageUrl} />}
				<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>

			</Head>
			{/* <Header /> */}
			{children}
			{/* <Footer /> */}
		</>
	)
}
