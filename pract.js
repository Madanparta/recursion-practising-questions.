//1PRINT ALL THE GIVEN NUMBERS..
// ANSWER.
function givenRange(first,secound){
    if(first<=secound){
        console.log(first);
        givenRange(first+1,secound);
    }
}
givenRange(10,20);