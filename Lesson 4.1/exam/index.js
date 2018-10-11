function getFriendlyNumbers(start, end) {
    if( (typeof(start) != 'number') || (typeof(end) != 'number') ||
        start == '' || start == null || end == '' || end == null || 
        start > end || start < 0 || ((start ^ 0) === 0) || ((end ^ 0) === 0)) {
            //console.log('bad choise');
            return false;
    } else {
        //console.log('all right');
        let firstNumber,
            secondNumber,
            firstDividersSum,
            secondDividersSum,
            arr = [],
            allDividers = {
                    nDividers: [],
                    mDividers: []
                };
            
        //Первое число для сравнения
        for(let i = start; i < end; i++) {
            firstNumber = i;
            //Поиск делителей 1 числа
            for(let k = 1; k < i; k++) {
                if( firstNumber%k == 0) {                   
                    allDividers.nDividers.push(k);
                }
            }  
            firstDividersSum = allDividers.nDividers.reduce( function(sum, current) {
                return sum + current;
              }, 0);

            //Второе число для сравнения
            for( let j = i+1; j <= end ; j++) {
                secondNumber = j;

                //Поиск делителей 2 числа
                for(let k = 1; k < j; k++) {
                    if( secondNumber%k == 0) {                   
                        allDividers.mDividers.push(k);
                    }
                } 

                secondDividersSum = allDividers.mDividers.reduce( function(sum, current) {
                    return sum + current;
                  }, 0);
                allDividers.mDividers = [];
               
                if(firstDividersSum == secondNumber && secondDividersSum == firstNumber) {
                    //console.log('Первое число: ' + firstNumber + ', Второе число: ' + secondNumber);
                    arr.push([firstNumber, secondNumber]);    
                } 
            }
            allDividers.nDividers = [];                 
        }    
        //console.log(arr); 
        return arr;
    }
}
getFriendlyNumbers(1, 5000);

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}
