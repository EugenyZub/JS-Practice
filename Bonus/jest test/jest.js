const sum = require('./script.js');
const num = require('./script.js');
const each = require('./script.js');

//1 задание, тест с помощью Jest
module.exports = sum;
test('Суммируем a и b и сравниваем с 10', () => {
    expect(sum(5,6)).toBeTruthy();
  });

//2 задание, тест с помощью Jest
module.exports = num;
test('Проверка переменной num', () => {
    expect(num).toBe(5);
});


//3 задание, тест с помощью Jest 
module.exports = each;
test('Проверка функции each', () => {
    expect(Array.isArray([each])).toBe(true);
    expect(each(arr2, myFunc)).toHaveLength(5);
});