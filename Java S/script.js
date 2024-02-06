
// var username=document.getElementById("i1").value 
// var password=document.getElementById("i2").value

function change(){
    var username=document.getElementById("i1").value 
    var password=document.getElementById("i2").value
    
    // var open=document.getElementById("open")
    // var close=document.getElementById("close")
    // var open1=document.getElementById("box1")
    // var close1=document.getElementById("box2")

        if(password.length==0){
            alert("enter you password")
    }
        else if(password.length<=8)
        {
        
        alert("Password must be 8 character")
    }

    else{
        alert("Thank You ")
    }

    
    // function close(){
        
    // }

}


function open(){
    document.getElementById("close").style.display="block"
    document.getElementById("open").style.display="none"
}