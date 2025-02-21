import { Flex, Link, Icon } from '@chakra-ui/react';
import {
  IconUniverzooFacebook,
  IconUniverzooInstagram,
  IconUniverzooWhatsapp,
  IconUniverzooEmail,
  IconUniverzooTiktok,
  IconUniverzooTelefono,
} from '@/assets/univerzooIcons';

const SocialMedia = () => {
    const whatsappMessage = encodeURIComponent("Hola Ceci! me encantaría colaborar contigo. ¿Me podrías ayudar con más información? Me pasaron el link con tu portafolio. Gracias.");
    const whatsappLink = `https://wa.me/5215541924919?text=${whatsappMessage}`;

    const handleClick = (eventCategory: string, eventAction: string) => {
        if ((window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: 'social_media',
                event_category: eventCategory,
                event_action: eventAction,
            });
        }
    };

    return (
        <Flex justifyContent="space-around" alignItems="center" margin={"auto"} p={2} mt={8} wrap="wrap" maxW={{ base: '100%', md: '60%' }}>
            <Link href={whatsappLink} isExternal onClick={() => handleClick('WhatsApp', 'Click')}>
                <Icon as={IconUniverzooWhatsapp} boxSize={['10', '12']} />
            </Link>
            {/* <Link href="https://www.facebook.com/" isExternal onClick={() => handleClick('Facebook', 'Click')}>
                <Icon as={IconUniverzooFacebook} boxSize={['10', '12']} />
            </Link> */}
            {/* <Link href="https://www.instagram.com/" isExternal onClick={() => handleClick('Instagram', 'Click')}>
                <Icon as={IconUniverzooInstagram} boxSize={['10', '12']} />
            </Link> */}
            {/* <Link href="https://www.tiktok.com/" isExternal onClick={() => handleClick('TikTok', 'Click')}>
                <Icon as={IconUniverzooTiktok} boxSize={['10', '12']} />
            </Link> */}
            {/* <Link href="tel:+525580344733" onClick={() => handleClick('Phone', 'Click')}>
                <Icon as={IconUniverzooTelefono} boxSize={['10', '12']} />
            </Link> */}
            <Link href="mailto:garniqui@gmail.com" onClick={() => handleClick('Email', 'Click')}>
                <Icon as={IconUniverzooEmail} boxSize={['10', '12']} />
            </Link>
        </Flex>
    );
};
export default SocialMedia;
