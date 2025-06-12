var totalentrevistados = 0 ;
var totalfebril = 0 ;
var totalfebrilp = 0 ;
var grupoderisco = 0 ;
var grupoderiscop = 0 ;
var febrilderisco = 0 ;
var febrilderiscop = 0 ;
var masculino = 0 ;
var feminino = 0 ;
var outro = 0;
var se = 0;
function est() {
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var sexo = document.getElementById('sexo').value;
    var temperatura = document.getElementById('temperatura').value;
    var origem = document.getElementById('origem').value;

    if (nome == "" || idade == "" || sexo == "" || temperatura == "" || origem == "") {
        alert("Por favor, preencha os campos que faltam");
        return; 
    }
    totalentrevistados++

    if (idade>=60){
        grupoderisco++;
    }
if (temperatura>=38) {
    totalfebril++;
}
if (idade>=60 && temperatura>=38) {
    febrilderisco++;
}
if (sexo=="masculino") {
    masculino ++;
}
if (sexo=="feminino") {
    feminino++;
}
if (sexo=="outro"){
    outro++;
}
totalfebrilp = totalentrevistados/totalfebril;
totalfebrilp = 100/totalfebrilp;
grupoderiscop = totalentrevistados/grupoderisco
grupoderiscop = 100/grupoderiscop;
febrilderiscop = totalentrevistados/febrilderisco;
febrilderiscop = 100/febrilderiscop;

    document.getElementById ("entrevistados").innerHTML = totalentrevistados;

    document.getElementById ("grupo-risco").innerHTML = grupoderisco;

    document.getElementById ("total-febril").innerHTML = totalfebril;

    document.getElementById ("febris-risco").innerHTML = febrilderisco;

    document.getElementById ("masculino").innerHTML = masculino;

    document.getElementById ("feminino").innerHTML =  feminino;

    document.getElementById ("outro").innerHTML =  outro;

    document.getElementById ("total-febris-porc").innerHTML =  totalfebrilp.toFixed(2) + "%";
    //tofixed limita para ter apenas duas casas decimais

    document.getElementById ("grupo-risco-porc").innerHTML =  grupoderiscop.toFixed(2) + "%";

    document.getElementById ("febris-risco-porc").innerHTML =  febrilderiscop.toFixed(2) + "%";

    localStorage.setItem("total" + se,totalentrevistados);
		localStorage.setItem("nome" + se,nome);
		localStorage.setItem("idade" + se,idade);
		localStorage.setItem("sexo" + se,sexo);
        localStorage.setItem("temperatura" + se,temperatura);
        localStorage.setItem("origem" + se,origem);
        se++

}
        function retorna(){
            var nomem = "";
            var idadem = "";
            var sexom = "";
            var temperaturam = "";
            var origemm = "";
 for( var i=0; i<=99; i++) { // verifica até 99 produtos registrados na localStorage
 if (localStorage.getItem("nome" + i ) != null){
                nomem +="<p>"+ localStorage.getItem("nome" + i)+"</p>";
                idadem +="<p>"+ localStorage.getItem("idade" + i)+"</p>";
                sexom +="<p>"+ localStorage.getItem("sexo" + i)+"</p>";
                temperaturam +="<p>"+ localStorage.getItem("temperatura" + i)+"</p>";
                origemm +="<p>"+ localStorage.getItem("origem" + i)+"</p>";
                document.getElementById ("nomem").innerHTML =  nomem ;
                document.getElementById ("idadem").innerHTML =  idadem;
                document.getElementById ("temperaturam").innerHTML =  temperaturam;
                document.getElementById ("sexom").innerHTML =  sexom;
                document.getElementById ("origemm").innerHTML =  origemm;
                
				

			}
		}
    }
    function limpar(){
        localStorage.clear();
        alert("Reinicie a pagina para ver as alterações");
    }
        