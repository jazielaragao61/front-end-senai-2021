

// VERIFICAR CAMPOS

function calcularPesoIdeal (){
    var frmnome = nome.value
    var sexoM = sexoMasculino.checked // true or false
    var sexoF = sexoFeminino.checked // true or false
    var frmaltura = parseFloat(altura.value);
    var fator;
    var peso;

    if(frmnome == ""){
        alert('Favor preencher o campo nome!')
        nome.focus() //direciono o foco do cursor para o campo id=nome
        return // parar a execuxao do script nesse ponto
    }
    if(sexoM === false && sexoF === false){
        alert('Favor preencher o campo sexp!')
        //nome.focus() //direciono o foco do cursor para o campo id=nome
        return // parar a execuxao do script nesse ponto
    }

    if(sexoM === true){
        fator = 22
    }else{
        fator = 21
    }
    peso = fator * Math.pow(frmaltura,2)
    
    pesoIdeal.innerHTML = `${frmnome} O peso ideal é:${peso.toFixed(2)}`
    //calcularPesoIdeal.innerHTML = `${nome} O peso ideal é:${peso.toFixed(2)}`
}
btnCalcular.addEventListener('click', calcularPesoIdeal)



/*btnCalcular.addEventListener("click", function(){

    frmNome = nome.value
    frmAltura = altura.value
    sexoMasculino

if(sexoMasculino.checked === true) {
    fator = 22
} else{
    fator = 21
}
pesoIdeal = fator * Math.pow(frmAltura,2)
}*/