import { IconUniverzooFacebook, IconUniverzooInstagram, IconUniverzooWhatsapp, IconUniverzooTiktok, IconUniverzooTelefono } from '@/src/assets/univerzooIcons';

const SocialMediaLinks = () => {
  const whatsappMessage = encodeURIComponent("Hola, me gustaría recibir más información sobre los servicios de la veterinaria. ¿Podrían ayudarme?");
  const whatsappLink = `https://wa.me/5215540191430?text=${whatsappMessage}`;
  return (
    <div className="social-media-links d-flex justify-content-around align-items-center p-2">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><IconUniverzooWhatsapp /></a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><IconUniverzooFacebook /></a>
      <a href="https://www.facebook.com/univerzooveterinary" target="_blank" rel="noopener noreferrer"><IconUniverzooInstagram /></a>
      <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"><IconUniverzooTiktok /></a>
      <a href="tel:+525519038953"><IconUniverzooTelefono /></a>
    </div>
  );
};

export default SocialMediaLinks;