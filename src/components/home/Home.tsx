/* eslint-disable react/no-unescaped-entities */
import styles from '@/styles/header.module.css'
import HeaderUniverzoo from "@/components/home/HeaderUniverzoo"
import Avatar from "@/components/home/Avatar"
import TextCard from "@/components/home/TextCard"
import VideoGallery from "@/components/home/VideoGallery"
import CategoryReels from "@/components/home/CategoryReels"
import VideoSection from "@/components/home/VideoSection"
import ImageGallery from "@/components/home/ImageGallery"
import Footer from "@/components/home/Footer"

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
    { thumbnail: "/images/thumbnail/uk_1.png", url: "https://vimeo.com/1058763925/7b37b84551" }
  ];
  const videoUrl="https://player.vimeo.com/video/1058819206?h=02c8d401c4&badge=0&autopause=0&player_id=0&app_id=58479"
  const sectionName="Digital"

  const sectionGraphic = 'Graphic';
  const descriptionGraphic = '';
  const numberGraphic = 2;
  const images_graphic = [
    { thumbnail: "/images/graphic/tulum.png", url: "/images/graphic/tulum.png" },
    { thumbnail: "/images/graphic/chiapas.png", url: "/images/graphic/chiapas.png" },
    { thumbnail: "/images/graphic/cabos.png", url: "/images/graphic/cabos.png" },
    { thumbnail: "/images/graphic/yucatan.png", url: "/images/graphic/yucatan.png" },
    { thumbnail: "/images/graphic/ano_dual.png", url: "/images/graphic/ano_dual.png" }
  ];
  const sectionOutHome = 'Out of Home';
  const descriptionOutHome = 'Time Square';
  const numberOutHome = 4;
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
      <CategoryReels />
      <VideoSection videoUrl={videoUrl} sectionName={sectionName} />
      <ImageGallery numberItems={numberGraphic} sectionName={sectionGraphic} descriptionGallery={descriptionGraphic}images={images_graphic} />
      <ImageGallery numberItems={numberOutHome} sectionName={sectionOutHome} descriptionGallery={descriptionOutHome} images={images} />
      <Footer />
    </main>
  )
}