import { MainLayout, SecondLayout } from "@/components/layouts"
import { Home }  from "@/components/home"

function HomePage() {
    const homeStatus = 'READY'

	const renderContent = () => {
		switch (homeStatus) {
			case 'READY':
				return <Home />
			default:
				return null
		}
	}

	return (
        <>
			{homeStatus === 'READY' ? (
				<MainLayout
                    title={"Servicios Veterinarios | Univerzoo"}
					pageDescription={ "Ofrecemos una amplia gama de servicios veterinarios para cuidar la salud y el bienestar de tus mascotas. Desde consultas generales hasta cirugías especializadas, ¡cuenta con nosotros para el mejor cuidado de tus animales!" }
				>
					{renderContent()}
				</MainLayout>
			) : (
				<SecondLayout
					title={"Servicios Veterinarios | Univerzoo"}
					pageDescription={
						"Test"
					}
				>
					{renderContent()}
				</SecondLayout>
			)}
		</>
	)
}

export default (HomePage)
