const sliceThis = 'slicing WITH javascript AND PYTHON!';

function toLowerCaseAndSplit(string) {
    const myNewContainer = string.toLowerCase().split(' ');
    for (let i = 0; i < myNewContainer.length; i++) {
        myNewContainer[i] = myNewContainer[i][0].toUpperCase() + myNewContainer[i].slice(1);
    }
return myNewContainer

}
    // console.log(string.slice(0,1) === 's');


console.log(toLowerCaseAndSplit(sliceThis));