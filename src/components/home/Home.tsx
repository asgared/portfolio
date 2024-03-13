/* eslint-disable react/no-unescaped-entities */
import styles from '@/styles/header.module.css'
import { HeaderUniverzoo, Avatar, TextCard } from "@/components/home"

export default function Home() {
  const titleCard = 'Diana Granada';
  const subtitleCard = 'M. V. Z.';
  const textCard = 'Hola soy Diana, médico veterinaria y zootecnista, me encanta la naturaleza y los animales, soy una apasionada porel ccuidado de los animales. Con dedicación y experiencia, estoy aquí para brindarles la mejor atención médica, consejos para su bienestar y mucho más. Siempre lista para mantener a tu mascota sana y feliz.';
  const inviteCard = '¡Cóntactame, con gusto te atenderé!';

  return (
    <main className={styles.main}>
      <HeaderUniverzoo />
      <Avatar />
      <TextCard title={titleCard} subtitle={subtitleCard} text={textCard} invite={inviteCard}/>
    </main>
  )
}