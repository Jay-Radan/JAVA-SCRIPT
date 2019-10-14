// function greet(){ 
// let name = prompt('please enter your name:');
// txt = `hello ${name}`
// document.write(txt)

// }
// greet();

// function greet(){ 
//   let name = prompt('please enter your name:');
//   if(name==''|| name== null){
//       txt = `u entered no name`
//   }else{
//     txt = `hello ${name}`
//   }
//   document.write(txt)
  
//   }
//   greet();
// function square(a){
//   return a*a
// }




// function squared(){
// let number = prompt('enter a number take the square')
// if(number==''||number==null){
//   txt = 'u entered no number'
// }else{
//   txt=`the result is ${square(number)}`
// }
// document.write(txt)
// }
// squared()


// function checkPass(pass ){
  
//   if(pass.length < 8 ||!pass.includes('$')){
//     return 'u entered a wrong password'
//   }else {
//     return `valid`
//   }
 
//   }
//   let password = prompt('enter ur password')
  
//   document.write(checkPass(password))



// function checkPass(pass){
//   if(pass.includes(letter)){
//     return `yes it is found in position ${pass.indexOf(letter)}`
//   }else{
//     return `doesnt exist`
//   }

//   }
//   let password = prompt('enter ur password')
//   let letter= 'jay'
//   document.write(checkPass(password))


let cities = ['hamburg','dubai','stanbul']

function visitedCities(city,arr){
  let result =''
  for(i=0;i<arr.length;i++){
if(city==arr[i]){
  result =`u have  visited ${city}`
  break

}else{
  result = 'u did not'
}
  }
  return result
}

document.write(visitedCities('berlin',cities))