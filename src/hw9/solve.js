export function solve(a, b, c) {
    let answer = ''
    let discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        console.log('Уравнение не имеет реальных корней');
        return answer = 'Уравнение не имеет реальных корней';
    } else if (discriminant === 0) {
        console.log('Уравнение имеет один корень: ' + (-b / (2 * a)));
        return answer = 'Уравнение имеет один корень: ' + (-b / (2 * a));
    } else {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log('Уравнение имеет два корня: ' + root1 + ' и ' + root2);
        return answer = 'Уравнение имеет два корня: ' + root1 + ' и ' + root2;
    }
}