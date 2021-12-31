import {
  Button,
  Heading,
  Input,
  Grid,
  GridItem,
  Divider,
  Box
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { TabelaAscii } from '../../components/tabelaAscii';
import { conversorParaBinario } from '../../utils';

function converterParaBinario(
  isLoading: React.Dispatch<React.SetStateAction<boolean>>,
  caracter: number | string,
  binario: React.Dispatch<React.SetStateAction<string>>
) {
  isLoading(true);
  binario(conversorParaBinario(caracter));
  isLoading(false);
}

export const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [binario, setBinario] = useState<string>('');
  const [caracter, setCaracter] = useState<number | string>('');

  return (
    <div>
      <Heading as="h1" size="2xl" isTruncated>
        Insira um Caracter
      </Heading>
      <Grid
        templateColumns="minmax(50px, 300px) 1fr "
        gap={5}
        marginTop={5}
        marginBottom={5}
      >
        <GridItem>
          <Input
            variant="filled"
            placeholder="(char)"
            onChange={event => setCaracter(event.target.value)}
            maxLength={1}
          />
        </GridItem>
        <GridItem>
          <Button
            isLoading={loading}
            loadingText="Convertendo..."
            colorScheme="blue"
            spinnerPlacement="start"
            onClick={() =>
              converterParaBinario(setLoading, caracter, setBinario)
            }
          >
            Converter
          </Button>
        </GridItem>

        <GridItem borderWidth="1px" borderRadius="lg" padding={4}>
          <Heading as="h2" size="md" isTruncated>
            {binario ? `(bin) = ${binario}` : '(bin) = NaN'}
          </Heading>
        </GridItem>
      </Grid>
      <Divider />
      {/* Inicil da tabela */}
      <Box marginTop={5} marginBottom={5}>
        <Heading as="h1" size="2xl" isTruncated>
          Tabela ASCII
        </Heading>
      </Box>
      <TabelaAscii />
    </div>
  );
};
