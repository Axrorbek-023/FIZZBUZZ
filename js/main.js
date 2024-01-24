var elInp = document.querySelector('.inp')
var elTitle = document.querySelector('.title')
var elTitle2 =document.querySelector('.title2')

function fn(){
    var vall = elInp.value
    if(vall % 3 == 0 && vall % 7 == 0){
        elTitle.textContent = 'FIZZBUZZ'
    }else if(vall % 7 == 0){ 
        elTitle.textContent = 'BUZZ'
    }else if(vall % 3 == 0){ 
        elTitle.textContent = 'FIZZ'
    }else{
        elTitle.textContent = "hech qaysi biriga bo'linmaydi"
    }
    elInp.value = ''
    elInp.focus()
}