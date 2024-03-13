import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useDisclosure,
  HStack,
  Heading,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { Button } from '@chakra-ui/button';
import { Link } from '@chakra-ui/layout';

import {IconUniverzooLogo} from '@/assets/univerzooIcons'

import styles from '@/styles/header.module.css'

const HeaderUniverzoo = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box className={styles.header} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={onToggle}
        />
        <HStack spacing={8} alignItems="center">
          <NextLink href="/" passHref>
            <IconUniverzooLogo/>
          </NextLink>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            <NextLink href="/about" passHref>
              About
            </NextLink>
            {/* Agrega más enlaces según sea necesario */}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Button
            colorScheme="teal"
            variant="solid"
            size="sm"
            mr={4}
            display={{ base: 'none', md: 'inline-flex' }}
          >
            Sign In
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            size="sm"
            display={{ base: 'none', md: 'inline-flex' }}
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pb={4}>
          <Stack as="nav" spacing={4}>
            <NextLink href="/" passHref>
                <Heading size="md">Home</Heading>
            </NextLink>
            <NextLink href="/about" passHref>
              About
            </NextLink>
            {/* Agrega más enlaces según sea necesario */}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default HeaderUniverzoo;
