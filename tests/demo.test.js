test('Esta prueba no debe fallar', () => { 
    if (1 === 0) {
        throw new Error('No se puede dividir entre cero')
    }
 })