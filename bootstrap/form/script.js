
$("#registeration").hide()
$("#rg").on("click",function(){
    $("#login").hide()
    $("#registeration").show()
})

$("#lg").on("click",function(){
    $("#registeration").hide()
    $("#login").show()
})

$("#lgbt").on("click",function(){
   var usrr= $("#username").val()
   var user_pass=$("#password").val()
   var reg=/^[a-z0-9]/
    if(usrr.length==0){
        alert("Enter the user name")
    }
    else if(!(user_pass.match(reg))){
        alert("Enter the crt password")
    }
    else{
        alert("Thank YOu")
    }
})

$("#Submit").on("click",function(){
    var user_name=$("#Username").val()
    var user_email=$("#E-mail").val()
    var reg_email=/^[a-z0-9]+@[gamil.com]/
    var user_passN=$("#passwordN").val()
    var reg_passN=/^[a-z0-9]+[@#$]/
    var user_passC=$("#c-password").val()


    if(user_name.length==""){
        alert("Enter the user name");
    }
    else if(!(user_email.match(reg_email))){
        alert("Enter the crt mail id")
    }
    else if(!(user_passN.match(reg_passN))){
        alert("Enter the strong password")
    }
    else if(user_passN!=user_passC){
        alert("Enter the crt password")
    }
    else{
        
        alert("Thank you")
    }

})
 
