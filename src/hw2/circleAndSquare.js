export function circleAndSquare (circle, square) {
    let circleDiameter = 2 * Math.sqrt(circle / Math.PI);
    let squareBasis = Math.sqrt(square);

    console.log('Задача 3: ' +((circleDiameter <= squareBasis) ? 'Помещается' : 'Не помещается'))
}