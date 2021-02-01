// [Español]
// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
//
// [Português]
// Importamos o objeto `cipher`, que contém os métodos `encode` e `decode`

import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      expect(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //

    it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
      expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    
    it('should return "3456789012" for "0123456789" with offset 33', () => {
      expect(cipher.encode(33, '0123456789')).toBe('3456789012');
    });

    it('should return "$" for "!" with offset 33', () => {
      expect(cipher.encode(33, '!' )).toBe('$');
    });

    it('should return ">" for "@" with offset 33', () => {
      expect(cipher.encode(33, '@' )).toBe('>');
    });

    it('should return "" para ""', () => {
      expect(cipher.encode(null, '')).toBe('');
    });

     it('should return " ñ" for " ñ"', () => {
      expect(cipher.encode(33, ' ñ')).toBe(' ñ');
     });

     

     
  });

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      expect(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });




    //
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
     it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
       expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
     });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    
    it('should return "0123456789" for "3456789012" with offset 33', () => {
      expect(cipher.decode(33, '3456789012' )).toBe('0123456789');
    });

    it('should return "!" for "$" with offset 33', () => {
      expect(cipher.decode(33, '$' )).toBe('!');
    });

     it('should return " ñ" para " ñ"', () => {
       expect(cipher.decode(33, ' ñ')).toBe(' ñ');
     });


     it('should return "" para ""', () => {
      expect(cipher.decode(null, '')).toBe('');
    });

     it('should return "@" for ">" with offset 33', () => {
      expect(cipher.decode(33, '>' )).toBe('@');
    });

  });

});
