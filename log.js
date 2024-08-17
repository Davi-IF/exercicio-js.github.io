function maiorMenor() {
  let a = document.getElementsByName("q1n1")[0].value;
  let b = document.getElementsByName("q1n2")[0].value;
  let c = document.getElementsByName("q1n3")[0].value;
  let d = document.getElementsByName("q1n4")[0].value;
  let e = document.getElementsByName("q1n5")[0].value;

  let maior = Math.max(a, b, c, d, e);
  let menor = Math.min(a, b, c, d, e);

  document.getElementById("res1").innerHTML = `maior: ${maior}, menor: ${menor}`;
}

function Verifica() {
  let a = document.getElementsByName("d1n1")[0].value;

  if (
    a === "a" ||
    a === "A" ||
    a === "e" ||
    a === "E" ||
    a === "i" ||
    a === "I" ||
    a === "o" ||
    a === "O" ||
    a === "u" ||
    a === "U" ) {

    document.getElementById("res2").innerHTML = 1;
  } else{
    document.getElementById("res2").innerHTML = 0;
  }
}
  function limites()  {
    let sup = Number(document.getElementsByName("e1n1")[0].value);
    let inf = Number(document.getElementsByName("e1n2")[0].value);
    let array = [];
    let soma = 0;
    
        for (let i=inf; i<sup+1; i++){
          
            if(i % 2 == 0){
                soma += i;
                array.push(i);
        }
     }
    
     document.getElementById("res33").innerHTML = `a soma: ${soma}, ${JSON.stringify(array)}`;
    }
  
    function ordem(){
        let a = Number (document.getElementsByName("j1j1")[0].value);  
        let b = Number (document.getElementsByName("j1j2")[0].value);
        let c = Number(document.getElementsByName("j1j3")[0].value);
        let aux=0;

          if(a>b){
            aux = a;
            a = b;
            b = aux;
          }
          if(a>c){
            aux = a;
            a = c;
            c = aux;
         } 
         if(b>c){
          aux = b;
          b = c;
          c = aux;
      }
          document.getElementById("res4").innerHTML = `valores: ${a} ${b} ${c}`;
    }
    function Positivo_Negativo() {
          let v = document.getElementsByName("k1k1")[0].value;
          let pos=0;

          if(v > 0){
            pos = true;
          }
          else{
            pos = false;
          }
        
          document.getElementById("res5").innerHTML = `${pos}`;
    }

    function PAR_IMPAR() {
        let n1 = document.getElementsByName("q1q1")[0].value;
        let par = 0;

        if(n1 % 2 == 0){
          par = true;
        }
        else{
          par = false;
        }
        document.getElementById("res6").innerHTML = `${par}`;
    }
    


    
  