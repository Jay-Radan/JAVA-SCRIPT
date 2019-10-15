let re;
//literal charechter
re =/hello/i;

//metacharecter symboles

re = /^h/i;//means our string must start with h
re = /d$/i;//means our string must end with d
re = /word$/i; // means our string must end with word
re = /^word$/i;//means our string must include this word



//string to match
const str ='Hello'

//log result
const result = re.exec(str);
console.log(result)


function reTest(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} does not match ${re.source}`)
    }
}

reTest(re,str)