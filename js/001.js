function showRandom(){
    let resultdado=document.getElementById('result')
    let number=Math.ceil(Math.random() *100)
    resultdado.innerHTML=`<h3> O número sorteado é ${number} </h3>`
    
}