// GTM.tsx
import TagManager from 'react-gtm-module';

export const initializeGTM = () => {
  if (typeof window !== 'undefined') {
    TagManager.initialize({
      gtmId: 'GTM-WJ8GWQNM', // Reemplaza con tu ID de GTM
    });
  }
};