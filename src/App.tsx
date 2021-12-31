import React from 'react';
import {
  CSSReset,
  useColorMode,
  VStack,
  IconButton,
  Container
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Home } from './pages/home';

export const App: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW="container.xl">
      <VStack p={4}>
        <IconButton
          icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
          isRound
          aria-label=""
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
        <CSSReset />
      </VStack>
      <Home />
    </Container>
  );
};
