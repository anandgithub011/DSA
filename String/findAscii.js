//* WAP to print the ascii value to the given string;

function printAsciiVal(str){

    for(let i = 0; i < str.length; i++){
        console.log(str.charCodeAt(i));
    }
}
printAsciiVal("z");