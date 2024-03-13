import { Flex } from '@chakra-ui/react';
import {IconUniverzooLogo} from '@/assets/univerzooIcons'
import styles from '@/styles/header.module.css'
  
const HeaderUniverzoo = () => {
    return (
        <Flex className={styles.header} h={16} alignItems="center" justifyContent="center">
            <IconUniverzooLogo/>
        </Flex>
    );
};

export default HeaderUniverzoo;
