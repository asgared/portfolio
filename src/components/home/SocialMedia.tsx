import { Flex, Link, Icon } from '@chakra-ui/react';
import {
  IconUniverzooFacebook,
  IconUniverzooInstagram,
  IconUniverzooWhatsapp,
  IconUniverzooTiktok,
  IconUniverzooTelefono,
} from '@/assets/univerzooIcons';

const SocialMedia = () => {
    const whatsappMessage = encodeURIComponent("Hola, me gustaría conocer más sobre tu trabajo creativo. ¿Me podrías ayudar con más información?");
    const whatsappLink = `https://wa.me/5215580344733?text=${whatsappMessage}`;

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
        <Flex justifyContent="space-around" alignItems="center" p={2} mt={8} wrap="wrap">
            <Link href={whatsappLink} isExternal onClick={() => handleClick('WhatsApp', 'Click')}>
                <Icon as={IconUniverzooWhatsapp} boxSize={['10', '12']} />
            </Link>
            <Link href="https://www.facebook.com/" isExternal onClick={() => handleClick('Facebook', 'Click')}>
                <Icon as={IconUniverzooFacebook} boxSize={['10', '12']} />
            </Link>
            <Link href="https://www.instagram.com/" isExternal onClick={() => handleClick('Instagram', 'Click')}>
                <Icon as={IconUniverzooInstagram} boxSize={['10', '12']} />
            </Link>
            {/* <Link href="https://www.tiktok.com/" isExternal onClick={() => handleClick('TikTok', 'Click')}>
                <Icon as={IconUniverzooTiktok} boxSize={['10', '12']} />
            </Link> */}
            <Link href="tel:+525580344733" onClick={() => handleClick('Phone', 'Click')}>
                <Icon as={IconUniverzooTelefono} boxSize={['10', '12']} />
            </Link>
        </Flex>
    );
};
export default SocialMedia;
