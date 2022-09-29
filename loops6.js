let num = 0
let soma = 0

do{
     num = parseInt(prompt('Porfavor me informe seu número'))
     if(num % 3==0)
     soma++}while(num !=0)

document.write(`${soma}`)
