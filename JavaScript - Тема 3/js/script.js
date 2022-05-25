const numbers1 = document.querySelector('#input1');
const result1 = document.querySelector('#result1');

function sumArray(arr)
{
    sum = 0;
    arr.forEach(element => {
        sum += parseInt(element);
    });

    return sum;
}

numbers1.addEventListener("input", () => {
    const arr = numbers1.value.split(', ');
    result1.textContent = sumArray(arr);
})

//---------------------------------------------------

const numbers2 = document.querySelector('#input2');
const result2 = document.querySelector('#result2');

function getAboveZero(arr)
{
    return arr.filter(function(element){
        return element > 0;
    })
}

numbers2.addEventListener("input", () => {
    result2.textContent = getAboveZero(numbers2.value.split(', '))
    .map((element) => {
        return ' ' + element;
    });
})

//---------------------------------------------------

const numbers3 = document.querySelector('#input3');
const numbers3_2 = document.querySelector('#input3-2');
const result3 = document.querySelector('#result3');

function getPonies(arr, p){
    return arr.find((element) => {
        return element == p;
    });
}

numbers3_2.addEventListener("input", () => {
    result3.textContent = getPonies(numbers3.value.split(', '), numbers3_2.value)
    == undefined ? false : getPonies(numbers3.value.split(', '), numbers3_2.value);
})

//---------------------------------------------------

const numbers4 = document.querySelector('#input4');
const numbers4_2 = document.querySelector('#input4-2');
const result4 = document.querySelector('#result4');

function isTxIncluded(arr, x){
    return arr.includes(x);
}

numbers4_2.addEventListener("input", () => {
    result4.textContent = isTxIncluded(numbers4.value.split(', '),
    numbers4_2.value)
})

//---------------------------------------------------

const numbers5 = document.querySelector('#input5');
const result5 = document.querySelector('#result5');

function getSizes(arr){
    return arr.map(function (element) {
        return element.length - 2;
    })
}

numbers5.addEventListener("input", () => {
    result5.textContent = getSizes(numbers5.value.split(', '))
})

//---------------------------------------------------

const numbers6 = document.querySelector('#input6');
const result6 = document.querySelector('#result6');

let size;
function getWithSpaces(arr){
    size = arr.join(' ').length;
    return arr.map(function (element){
        return element.replace(/[^a-zа-яё]/gi, '');
    }).join(' ');
}

numbers6.addEventListener("input", () => {
    newArray = getWithSpaces(numbers6.value.split(', '));
    result6.textContent = '"' + newArray + '", '  
    + size;
})

//---------------------------------------------------

const numbers8 = document.querySelector('#input8');
const numbers8_2 = document.querySelector('#input8-2');
const result8 = document.querySelector('#result8');

const anime = {
    title: "",
    episodes: 0
}

function getEpisodes(){
    return "Аниме " + anime.title + " включает "+ anime.episodes + " серий"
}

numbers8_2.addEventListener("input", () => {
    anime.title = numbers8.value;
    anime.episodes = numbers8_2.value;
    result8.textContent = getEpisodes();
})

//---------------------------------------------------

const numbers9 = document.querySelector('#input9');
const result9 = document.querySelector('#result9');

numbers9.addEventListener("input", () => {
    const num = (num) => {
        return num * 3;
    }
    result9.textContent = num(numbers9.value);
})

//---------------------------------------------------

const numbers10 = document.querySelector('#input10');
const result10 = document.querySelector('#result10');

function getAvgGlucose(arr){
    avg = (arr) => {
        temp = 0;
        arr.forEach(element => {
            temp += parseFloat(element);
        })
        console.log(temp);
        return temp /= arr.length;
    }

    return avg(arr);
}

numbers10.addEventListener("input", () => {
    result10.textContent = getAvgGlucose(numbers10.value.split(', '));
})