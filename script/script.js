document.addEventListener('DOMContentLoaded', function() {
    const celsiusField = document.getElementById('celsius');
    console.log('celsiusField: ' + celsiusField)
    const fahrenheitField = document.getElementById('fahrenheit');
    console.log('fahrenheitField: ' + fahrenheitField) 

    console.log('DOMContentLoaded\n')
    calculate = document.getElementById('calculate1');
 
    console.log('calculate1\n')
    calculate.addEventListener('click', function() {


        console.log('fahrenheitField: ' + fahrenheitField) 

        console.log('celsiusField.value: ' + celsiusField.value + '\n')        
        console.log('fahrenheitField.value: ' + fahrenheitField.value + '\n')

        console.log('LEN celsiusField.value: ' + (celsiusField.value).length + '\n')
        console.log('LEN fahrenheitField.value: ' + (fahrenheitField.value).length + '\n')                

        if ((celsiusField.value).length > 0) 
            fahrenheitField.value = celciusToFahrenheit(celsiusField.value)
        else if ((fahrenheitField.value).length > 0) 
            celsiusField.value = fahrenheitToCelcius(fahrenheitField.value)


        
    });
    
});

function celciusToFahrenheit(celsius) {
        let cel = parseFloat((parseFloat(celsius)).toFixed(2));
        let temp = (cel * 1.8) + 32; 

        let result = parseFloat((parseFloat(temp)).toFixed(2));
        return result;
    
}

function fahrenheitToCelcius(fahrenheit) {
    let fah = parseFloat((parseFloat(fahrenheit)).toFixed(2));
    let temp = (fah - 32) * 5 / 9;
    let result = parseFloat((parseFloat(temp)).toFixed(2));
    return result;

}

