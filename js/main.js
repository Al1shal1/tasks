///////#1
const string = "Привет! Как дела?";
const vv = ["а","у","о","и","э", "ы","я", "ю", "е", "ё" , "А", "У", "О", "И", "Э", "Ы", "Я", "Ю"];
const getVowels = function(stringVovewls) {
    let vowels = "";

    for (let i = 0 ; i<string.length; i++ ){
        const nowElem = string[i];
if (vv.includes(nowElem)) {
vowels= vowels + nowElem;
}
    }
return vowels;
}

    console.log(getVowels(string));

////////#2
const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

const getWorthyWorkers = function (WorkersArr){
    const WorthyWorkers =[];

for (let i = 0; i < WorkersArr.length;i++){
    const worker = WorkersArr[i];
    if (worker.salary >1000) {
        WorthyWorkers.push(worker.name);
    }
}
    return WorthyWorkers;
}
    console.log(getWorthyWorkers(workers));

    ////////#3

    const path = "/users/download/index.html"

    const isHtml = function (path){
        const html = '.html';
        const pathExt = path.slice(-5);

        if (pathExt == html) {
            return true;
        } else {
            return false;
        }
    }
    console.log(isHtml(path))

////////#4

const mixedArray = [3,13,74,14,66,15,22,4];
    const isEven = num => { 
        return num % 2 == 0;
    };
    const filterArray = function(arr,filterFn ){
        const filterArray = [];

        arr.forEach (num => {
            if (filterFn(num)) {
                filterArray.push(num);
            }
        });

        return filterArray;
    };

    
    console.log(filterArray(mixedArray, isEven));