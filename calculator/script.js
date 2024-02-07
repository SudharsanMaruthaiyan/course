
var input=document.getElementById("i1")
function display(num){
    var input=document.getElementById("i1")
    input.value+=num
}

function clearr(){
    input.value=""
}

function delet(){
    input.value=input.value.slice(0,-1);
}

function calculate(){
    try{
        input.value=eval(input.value)
    }
    catch{
        alert("invaled")
    }
}

// var num=[1,2,3,4,4,5,7,5]
// console.log(num)
// var nu=num.slice(0,-1)
// console.log(nu)


