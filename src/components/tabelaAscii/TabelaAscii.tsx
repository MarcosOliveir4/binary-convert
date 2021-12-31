import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react';
import tabela from './tabelaAcsii.json';

export const TabelaAscii: React.FC = () => {
  return (
    <Table variant="striped" size="md">
      <TableCaption>
        Nesta tabela estão representados os caracteres ASCII e a sua numeração
        octal, decimal e hexadecimal.
      </TableCaption>
      <Thead>
        <Tr>
          <Th>Caracter</Th>
          <Th>Dec</Th>
          <Th>Oct</Th>
          <Th>Hex</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tabela.data.map(({ char, dec, oct, hex }) => (
          <Tr key={dec}>
            <Td>{char}</Td>
            <Td>{dec}</Td>
            <Td>{oct}</Td>
            <Td>{hex}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
