import Head from "next/head"
import { NextPage } from "next"
import {
  Box,
  Container,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react"
import { ReactNode } from "react"

const CodeBlock = ({ title, code }: { title: string; code: string }) => {
  const background = useColorModeValue("gray.100", "whiteAlpha.200")

  return (
    <Box width="full">
      <Text fontWeight="semibold" mb={1}>
        {title}
      </Text>
      <Box
        as="pre"
        background={background}
        borderRadius="md"
        px={4}
        py={3}
        overflowX="auto"
        fontSize="sm"
        whiteSpace="pre-wrap"
      >
        {code}
      </Box>
    </Box>
  )
}

const Section = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => (
  <Stack spacing={4}>
    <Heading as="h2" size="lg">
      {title}
    </Heading>
    {children}
  </Stack>
)

const RuntimeErrorGuidePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Diagnóstico de errores de runtime en Next.js + Chakra UI</title>
        <meta
          name="description"
          content="Guía para identificar y corregir errores de componentes indefinidos en proyectos Next.js con Chakra UI."
        />
      </Head>

      <Container maxW="4xl" py={{ base: 10, md: 16 }}>
        <Stack spacing={12}>
          <Stack spacing={3}>
            <Heading as="h1" size="xl">
              Guía práctica: Error &ldquo;Element type is invalid&rdquo;
            </Heading>
            <Text color="gray.400">
              Diagnóstico y prevención del error al renderizar componentes indefinidos en aplicaciones Next.js con Chakra UI.
            </Text>
          </Stack>

          <Section title="Diagnóstico Principal">
            <Text>
              Cuando React muestra el mensaje <Text as="span" fontWeight="semibold">“Element type is invalid”</Text>,
              significa que está intentando renderizar algo que no es un componente válido. En proyectos que usan Chakra UI
              suele deberse a una importación incorrecta: por ejemplo, usar una importación por defecto donde Chakra expone
              una exportación nombrada. El resultado es que la referencia al componente termina en <Text as="span" fontWeight="semibold">undefined</Text>
              y React lanza el error en tiempo de ejecución.
            </Text>
          </Section>

          <Divider />

          <Section title="Causas Probables (ordenadas de mayor a menor probabilidad)">
            <OrderedList spacing={2}>
              <ListItem>
                Importar componentes de Chakra UI como si fueran exportaciones por defecto en lugar de exportaciones nombradas.
              </ListItem>
              <ListItem>Errores tipográficos en el nombre del componente importado o exportado.</ListItem>
              <ListItem>Olvidar exportar un componente propio y luego importarlo en otra vista.</ListItem>
              <ListItem>Generar exportaciones circulares que terminan resolviendo la referencia como <Text as="span">undefined</Text>.</ListItem>
              <ListItem>Apuntar a la ruta incorrecta de un paquete o submódulo.</ListItem>
            </OrderedList>
          </Section>

          <Divider />

          <Section title="Ejemplos de Código (error y solución)">
            <Stack spacing={8}>
              <Stack spacing={3}>
                <Heading as="h3" size="md">
                  1. Importación incorrecta (default vs. nombrada)
                </Heading>
                <CodeBlock
                  title="Código Erróneo (jsx)"
                  code={`// Mal: Button no es exportación por defecto de Chakra.
import Button from "@chakra-ui/react";

export function CallToAction() {
  return <Button colorScheme="teal">Comprar ahora</Button>;
}`}
                />
                <CodeBlock
                  title="Código Corregido (jsx)"
                  code={`// Bien: se usa la importación nombrada.
import { Button } from "@chakra-ui/react";

export function CallToAction() {
  return <Button colorScheme="teal">Comprar ahora</Button>;
}`}
                />
              </Stack>

              <Stack spacing={3}>
                <Heading as="h3" size="md">
                  2. Error tipográfico en el nombre del componente
                </Heading>
                <CodeBlock
                  title="Código Erróneo (jsx)"
                  code={`// Mal: se importa con un typo.
import { Buton } from "@chakra-ui/react"; // falta la 't'
`}
                />
                <CodeBlock
                  title="Código Corregido (jsx)"
                  code={`// Bien: se importa el nombre correcto.
import { Button } from "@chakra-ui/react";
`}
                />
              </Stack>

              <Stack spacing={3}>
                <Heading as="h3" size="md">
                  3. Olvidar exportar el componente
                </Heading>
                <CodeBlock
                  title="Código Erróneo (jsx)"
                  code={`// ButtonWrapper.jsx
function ButtonWrapper(props) {
  return <Button {...props} />;
}
// ¡No hay export!

// En otro archivo
import { ButtonWrapper } from "./ButtonWrapper"; // ButtonWrapper es undefined
`}
                />
                <CodeBlock
                  title="Código Corregido (jsx)"
                  code={`// ButtonWrapper.jsx
export function ButtonWrapper(props) {
  return <Button {...props} />;
}
`}
                />
              </Stack>

              <Stack spacing={3}>
                <Heading as="h3" size="md">
                  4. Exportación circular
                </Heading>
                <CodeBlock
                  title="Código Erróneo (jsx)"
                  code={`// components/index.js
export { CTAButton } from "./CTAButton";

// components/CTAButton.jsx
import { CTAButton } from "./index"; // Circular
`}
                />
                <CodeBlock
                  title="Código Corregido (jsx)"
                  code={`// components/CTAButton.jsx
export function CTAButton(props) {
  return <Button {...props} />;
}

// components/index.js
export { CTAButton } from "./CTAButton";
`}
                />
              </Stack>

              <Stack spacing={3}>
                <Heading as="h3" size="md">
                  5. Importar desde la ruta incorrecta
                </Heading>
                <CodeBlock
                  title="Código Erróneo (jsx)"
                  code={`import { Button } from "@chakra-ui/layout"; // Ruta incorrecta
`}
                />
                <CodeBlock
                  title="Código Corregido (jsx)"
                  code={`import { Button } from "@chakra-ui/react"; // Ruta recomendada
`}
                />
              </Stack>
            </Stack>
          </Section>

          <Divider />

          <Section title="Estrategia de Depuración Sistemática">
            <OrderedList spacing={2}>
              <ListItem>
                Aísla el componente problemático: comenta componentes personalizados o reemplázalos por <Text as="span">&lt;div /&gt;</Text>
                hasta que el error desaparezca y puedas identificar al responsable.
              </ListItem>
              <ListItem>
                Revisa cada importación visualmente y confirma en la documentación si la exportación es nombrada o por defecto.
              </ListItem>
              <ListItem>
                Añade <Text as="span" fontFamily="mono">console.log</Text> justo después de las importaciones clave para verificar si
                el valor es <Text as="span">undefined</Text> en tiempo de ejecución.
              </ListItem>
              <ListItem>
                Verifica que el archivo fuente exporte el componente con el mismo nombre que intentas importar.
              </ListItem>
              <ListItem>
                Inspecciona las rutas y evita volver a importar desde archivos de barril (<Text as="span">index.ts</Text>) si eso genera ciclos.
              </ListItem>
            </OrderedList>
          </Section>

          <Divider />

          <Section title="Buenas Prácticas y Prevención">
            <UnorderedList spacing={2}>
              <ListItem>
                Valida la forma de exportación (default vs. nombrada) en la documentación antes de importar un componente.
              </ListItem>
              <ListItem>
                Centraliza exportaciones en archivos de índice, pero evita reimportar desde ellos dentro del mismo módulo para no crear ciclos.
              </ListItem>
              <ListItem>
                Mantén consistencia de nombres entre archivos y componentes usando PascalCase.
              </ListItem>
              <ListItem>
                Configura linters y, si es posible, TypeScript para recibir alertas cuando un import no exista.
              </ListItem>
              <ListItem>
                Observa las advertencias del dev server de Next.js: suelen indicar cuando una importación es inválida.
              </ListItem>
              <ListItem>
                Mantén Chakra UI y sus tipos actualizados para beneficiarte de sugerencias y detección temprana de cambios en la API.
              </ListItem>
            </UnorderedList>
          </Section>
        </Stack>
      </Container>
    </>
  )
}

export default RuntimeErrorGuidePage
