/* eslint-disable react/no-unescaped-entities */
import styles from '@/styles/header.module.css'
import { HeaderUniverzoo, Avatar, TextCard, VideoGallery, Footer } from "@/components/home"

export default function Home() {
  const titleCard = 'Ceci Garnica';
  const subtitleCard = 'CREATIVE DIRECTOR';
  const textCard = 'Hola, soy Ceci, Directora Creativa apasionada por transformar ideas en experiencias visuales impactantes. Mi creatividad, estrategia y amor por el diseño me permiten dar vida a conceptos innovadores que conectan con las personas y marcan la diferencia. Con cada proyecto, busco contar historias auténticas, despertar emociones y crear marcas con propósito. ¡Hagamos que tu visión cobre vida! 🎨✨';
  const inviteCard = '¡Hablemos! Juntos podemos transformar ideas en algo extraordinario.';
  const videos = [
    { thumbnail: "/images/thumbnail/yucatan.jpg", url: "/videos/yucatan.mp4" },
    { thumbnail: "/images/thumbnail/yucatan.jpg", url: "/videos/yucatan.mp4" },
    { thumbnail: "/images/thumbnail/yucatan.jpg", url: "/videos/yucatan.mp4" },
    { thumbnail: "/images/thumbnail/yucatan.jpg", url: "/videos/yucatan.mp4" },
    { thumbnail: "/images/thumbnail/yucatan.jpg", url: "/videos/yucatan.mp4" }
  ];

  return (

    <main className={styles.main}>
      {/* <HeaderUniverzoo /> */}
      <Avatar />
      <TextCard title={titleCard} subtitle={subtitleCard} text={textCard} invite={inviteCard}/>
      <VideoGallery videos={videos} />
      <Footer />
    </main>
  )
}