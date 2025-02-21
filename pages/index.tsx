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
                    title={"Creative Ceci"}
					pageDescription={ "Transformamos ideas en experiencias visuales que cautivan. Desde branding y diseño digital hasta estrategias creativas, damos vida a conceptos innovadores que conectan con tu audiencia." }
				>
					{renderContent()}
				</MainLayout>
			) : (
				<SecondLayout
					title={"Creative Ceci"}
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
