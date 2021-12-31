export const conversorParaBinario = (caracter: string | number): string => {
  let caracterChar =
    typeof caracter === 'number' ? caracter : caracter.charCodeAt(0);

  let binario = '';
  let resto = 0;

  while (caracterChar > 0) {
    resto = caracterChar % 2;
    caracterChar = Math.floor(caracterChar / 2);
    binario = resto + binario;
  }
  return binario;
};
