const idade = Math.floor(Math.random() * 100);
console.clear();

console.log(`Idade gerada: ${idade}`);

if(idade <= 13){
    console.log("Criança");
}else if(idade <= 18){
    console.log("Adolescente");
}else if(idade <= 60){
    console.log("Adulto");
}else{
    console.log("Idoso");
}