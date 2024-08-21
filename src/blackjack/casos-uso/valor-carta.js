/**
 * Función para determinar el valor de una carta
 * @param {string} carta 
 * @returns number el valor de la carta
 */
// pedirCarta();
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}