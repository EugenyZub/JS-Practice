function getFriendlyNumbers(start, end) {
    if( (typeof(start) != 'number') || (typeof(end) != 'number') ||
        start == '' || start == null || end == '' || end == null || 
        start > end || start < 0 || ((start ^ 0) === 0) || ((end ^ 0) === 0)) {
            console.log('bad choise');
            return false;
    } else {
        console.log('all right');
        /*  Формула Сабита ибн Курра:
            p = 3 * 2^(n-1) - 1,
            q = 3 * 2^n - 1,
            r = 9 * 2^(2n -1) - 1
            если при n > 1 p, q и r будут простыми числами, 
            то (2^n)pq и( 2^n)r - это будет пара дружественных чисел
        */
        /*
            Метод Вальтера Бола:
            A = a*u и B = a*s - дружественные числа, 
            если u и p = u + s + 1 - простые числа. 
            И ещё а не делится на p 

        */


        let arr = [];
        return console.log(arr);
    }
}
getFriendlyNumbers(1, 100);

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}