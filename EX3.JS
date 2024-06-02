function filterEvenNumbers(arr) 
{
    return arr.filter(function(num) 
    {
        return num % 2 === 0;
    });
}

// Пример за използване на функцията
const inputArray = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(inputArray);

console.log(evenNumbers)