function displaySum(num1,num2){
    return num1+num2;

}
function calcsum(x,y,fn){
console.log(fn(x,y))
}
calcsum(20,10,displaySum)