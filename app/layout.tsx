import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Navigation from "@/components/Navigation";
import NavigationLogo from "@/components/NavigationLogo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cuidado Veterinario de Calidad para tu Mascota | Especialistas en Salud Animal",
  description: "En UNIVERZOO nos dedicamos a proporcionar cuidado veterinario de calidad para tu mascota. Nuestros especialistas en salud animal están comprometidos con el bienestar y la felicidad de tu compañero peludo. Ofrecemos una amplia gama de servicios veterinarios, incluyendo chequeos de salud, vacunaciones, cirugía, atención dental y más. Confía en nosotros para cuidar a tu mascota como si fuera nuestra propia familia.",
  keywords:'Veterinaria, Cuidado de mascotas, Salud animal, Servicios veterinarios, Consulta veterinaria, Vacunación de mascotas, Cirugía veterinaria, Odontología animal, Desparasitación, Emergencia veterinaria, Chequeo de salud para mascotas, Nutrición animal, Estética canina, Comportamiento animal, Medicina preventiva para mascotas, Tratamiento de enfermedades, Esterilización de mascotas, Control de plagas para mascotas, Terapia física para mascotas, Hospedaje para mascotas',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://bootswatch.com/5/quartz/bootstrap.min.css" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body className={inter.className}>
        {/* <Navigation /> */}
        <NavigationLogo />
        {children}
      </body>
    </html>
  );
}
