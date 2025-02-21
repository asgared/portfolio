/* eslint-disable react/no-unescaped-entities */
import styles from '@/styles/header.module.css'
import { HeaderUniverzoo, Avatar, TextCard, VideoGallery, ImageGallery, Footer } from "@/components/home"

export default function Home() {
  const titleCard = 'Ceci Garnica';
  const subtitleCard = 'CREATIVE DIRECTOR';
  const textCard = 'Hi! I’m Ceci-a Creative Director and Communications Leader passionate about turning ideas into visually compelling experiences. With a blend of creative prowess, strategic insight, and a deep love for design, I transform innovative concepts into authentic stories that captivate, evoke emotion, and build purpose-driven brands. I also offer a comprehensive understanding of your business, ensuring that our creative solutions drive success at every level. 🎨✨';
  // const textCard = 'Hola, soy Ceci, Directora Creativa apasionada por transformar ideas en experiencias visuales impactantes. Mi creatividad, estrategia y amor por el diseño me permiten dar vida a conceptos innovadores que conectan con las personas y marcan la diferencia. Con cada proyecto, busco contar historias auténticas, despertar emociones y crear marcas con propósito. ¡Hagamos que tu visión cobre vida! 🎨✨';
  const inviteCard = 'Let’s connect and bring your vision to life—together, we can turn ideas into something truly extraordinary.';
  // const inviteCard = '¡Hablemos! Juntos podemos transformar ideas en algo extraordinario.';
  const videos = [
    { thumbnail: "/images/thumbnail/tulum.png", url: "https://vimeo.com/1058767476/5902ade8df" },
    { thumbnail: "/images/thumbnail/chiapas.png", url: "https://vimeo.com/1058766039/918bbbc6ac" },
    { thumbnail: "/images/thumbnail/cabos.png", url: "https://vimeo.com/1058767615/1916b56b49" },
    { thumbnail: "/images/thumbnail/yucatan.png", url: "https://vimeo.com/1058769974/7c7e33c637" },
    { thumbnail: "/images/thumbnail/ano_dual.png", url: "https://vimeo.com/1058763925/7b37b84551" }
  ];
  const images = [
    { thumbnail: "/images/out_of_home/01.jpg", url: "/images/out_of_home/01.jpg" },
    { thumbnail: "/images/out_of_home/02.jpg", url: "/images/out_of_home/02.jpg" },
    { thumbnail: "/images/out_of_home/03.jpg", url: "/images/out_of_home/03.jpg" },
    { thumbnail: "/images/out_of_home/04.jpg", url: "/images/out_of_home/04.jpg" },
    { thumbnail: "/images/out_of_home/05.jpg", url: "/images/out_of_home/05.jpg" },
    { thumbnail: "/images/out_of_home/06.jpg", url: "/images/out_of_home/06.jpg" },
    { thumbnail: "/images/out_of_home/07.jpg", url: "/images/out_of_home/07.jpg" }
  ];

  return (

    <main className={styles.main}>
      {/* <HeaderUniverzoo /> */}
      <Avatar />
      <TextCard title={titleCard} subtitle={subtitleCard} text={textCard} invite={inviteCard}/>
      <VideoGallery videos={videos} />
      <ImageGallery images={images} />
      <Footer />
    </main>
  )
}