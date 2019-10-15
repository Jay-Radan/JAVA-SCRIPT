// let re;
// re = /hello/;
// re = /hello/i;//i = case insensitive
//re=/hello/g; // g = global search




// console.log(re)
// console.log(re.source)

//1)

//exec() - return result in an array or null
//const result = re.exec('i told sacha hello')
// console.log(result)
// console.log(result)
// console.log(result[0])
// console.log(result.index)
// console.log(result.input)

//2))

//test() - returns true or false
//const result = re.test('hello')
//console.log(result);


//3))

//match() - returns the result array or null( result of match and exec are the same)
 //const str = 'there ';
// const result = str.match(re);
// console.log(result)

//4))

// search() - returns index of the first match,
//if not found it returns -1


//5)) replace() - returns new string
//where the pattern is replaced by the new word provided,



//  let re;
//  re = /jay/i;
//  const str = 'jay hello there'
// const newStr = str.replace(re,'hi')
//  console.log(newStr)
//  console.log(str)


// function checked(str,re){
// if(re.test(str)){
//     return `its matched`
// }else{
//     return `its not matched`
// }
// }
// let result = checked(str,re)
// console.log(result)
let start = /9/;
let newStart = '10.30'
let str =' the class starts at 9'
function changeTheTime(str,startTime,newtime){
    if(str.match(startTime)){
       return  str.replace(startTime,newtime) 
    }
return 'match not found'
}

let result = changeTheTime(str,start,newStart)
console.log(result)