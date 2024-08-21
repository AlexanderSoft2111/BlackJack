import _ from 'underscore';
// Esta función crea un nuevo deck

/**
 * Función para crear un deck
 * @param {Array<String>} tiposCartas ejemplo['C','D','H','S']
 * @param {Array<String>} tiposEspeciales ejemplo = ['A','J','Q','K']
 * @returns Array<String> devuelve el deck 
 */
export const crearDeck = (tiposCartas, tiposEspeciales) => {

    if(!tiposCartas || tiposCartas.length === 0){
        throw new Error('El deck no debe estar vacio')
    }

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}