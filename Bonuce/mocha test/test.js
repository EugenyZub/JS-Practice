let assert = require('chai').assert;
//1 задание
function sum(a, b) {
	return a + b > 10;
}
//sum(2,2);
//Тест с помощью mocha
describe("sum", function() {
    it("Функция sum возвращает true", function(){
        assert.equal(sum(2,10), true);
    });    
});

//2 задание
let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

//Тест с помощью mocha
describe("num", function() {
    it("Пременная num должна быть равна 5", function(){
        assert.equal(num, 5);
    });
});

//3 задание
let each = function(startArr, f){return f(startArr);};
let arr2 = [64, 49, 36, 25, 16];

let myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
};
console.log(each(arr2, myFunc));

//Тест с помощью mocha
describe("each", function() {
    it("функция each должна вернуть массив", function(){
        assert.typeOf(each(arr2, myFunc), 'array');
        assert.lengthOf(each(arr2, myFunc), 5);
    });
});