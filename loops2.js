

for(i = 0; i < 10; i++) {
    const num = parseInt(prompt('Qual é o número'))

    if(num % 2 == 0) {
        document.write('<br>'`pares ${num}`)
    }
    else{
        document.write('<br>'`impares ${num}`)
    }
}
