function suma(a, b) {
    return a + b;
  }
  
  test('suma de 2 + 2 debe ser 4', () => {
    expect(suma(2, 2)).toBe(4);
  });
  