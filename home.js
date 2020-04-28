console.log('hello');
console.log('hello');
console.log('hello');
console.log('hello');
//alert('Yooooooo!');


//var age = prompt('What is your age')
//document.getElementById('id1').innerHTML = age;
var num1 = 32;
var num2 =  1.5;
console.log(num1*num2);






/*function greeting(){



    var name = prompt('What Is Your Name?');
    var result = 'Hello   ' + name;
    console.log(result);
}

greeting();


for(let num = 0; num<100;num++)
{
    console.log(num);
}
*/


let fruits = ['banana', 'apple', 'orange', 'pineapple'];

console.log(fruits.sort());
let numarray = [1,2,3,4,34,2,42,3534,5432,234,3543,34,35667,78,76,9,65,5435,36457,,8768757,845,7];
console.log(numarray.sort(function(a,b){return b-a}));

let emptyArray = new Array();
for (let num = 0;num<10; num++)
{
    emptyArray.push(num);

}
console.log(emptyArray);

/*let student = {
    
    first: 'Royal', 
    last: 'Sethi', 
    age:20,
    height:165,
    studentInfo: function(){
    return this.first + this.last;
}

};
console.log(student.first);
student.first = 'Rhythm'
console.log(student.studentInfo())