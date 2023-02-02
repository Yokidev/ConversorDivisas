function Conversor(){
    //Asignamos a las variables los valores de los campos ID
    var valor = document.getElementById("cantidadInicial").value;
    var moneda = document.getElementById("moneda").value;

    //En funcion de los valores asignados procedemos a hacer la conversion
    if(valor!=0){
        //Operamos con centimos para evitar trabajar con decimales y que las operaciones den mal resultados
        switch(moneda){
            case "dollar":
                valor *=110;
                valor /=100;
                document.getElementById("resultado").value = valor + '$';
                break;

            case "yuan":
                valor *=739;
                valor /=100;
                document.getElementById("resultado").value = valor + '¥';
                break;

            case "yen":
                valor *=14184;
                valor /=100;
                document.getElementById("resultado").value = valor + '¥';
                break;

            case "libra":
                valor *=89;
                valor /=100;
                document.getElementById("resultado").value = valor + '£';
                break;
            
            default:
                alert("Selecciona una divisa.")
        }
    }else{
        alert("Se necesita una cantidad mínima para realizar la operación.")
    }
}