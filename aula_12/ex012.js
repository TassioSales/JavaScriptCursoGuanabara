var idade =  22;
console.log(`Sua idade e ${idade}`);
if(idade < 16){
    console.log("Não vota")
}else if(idade <= 18 || idade >= 70){
    console.log("Opcional")
}else{
    console.log("Obrigatorio")
}