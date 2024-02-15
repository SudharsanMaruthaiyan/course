
$("#registeration").hide()
$("#rg").on("click",function(){
    $("#login").hide()
    $("#registeration").show()
})

$("#lg").on("click",function(){
    $("#registeration").hide()
    $("#login").show()
})