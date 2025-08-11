var linguagens = Array();

          linguagens[0] = 'Dart';
          linguagens[1] = 'PHP';
          linguagens[2] = 'Java';
          linguagens[3] = 'Pyton';
          linguagens[4] = 'Perl';
          linguagens[5] = 'Ruby on Rails';
          linguagens[6] = 'C ++';

        
        function criaListaLinguagens(){
        	const container = document.getElementById('container1');
 			linguagens.forEach(function(item,index) {
			  container.innerHTML += (index) +  ' - ' +item+'<br>'
			});    	 
     }
	 

	 function posicaoLinguagens(){
		var indice = prompt('Qual posição da lista deseja consultar?');
	 	alert(linguagens[indice]);
	 }

     var frutas = Array();

          frutas[0] = 'Maçã';
          frutas[1] = 'Banana';
          frutas[2] = 'Laranja';
          frutas[3] = 'Melancia';
          frutas[4] = 'Manga';
          frutas[5] = 'Abacaxi';
          frutas[6] = 'Uva';

        
        function criaListaFrutas(){
        	const container = document.getElementById('container2');
 			frutas.forEach(function(item,index) {
			  container.innerHTML += (index) +  ' - ' +item+'<br>'
			});    	 
     }
	 

	 function posicaoFrutas(){
		var indice = prompt('Qual posição da lista deseja consultar?');
	 	alert(frutas[indice]);
	 }

   var lista_generica = {}; 

      lista_generica['frutas'] = ['Maçã', 'Banana', 'Laranja','Melancia','Manga','Abacaxi','Uva'];

      lista_generica['numeros'] = [100,88,39,87,3,52,98,1202];      

      lista_generica['linguagens'] = [];

          lista_generica['linguagens'][0] = 'Dart';
          lista_generica['linguagens'][1] = 'PHP';
          lista_generica['linguagens'][2] = 'Java';
          lista_generica['linguagens'][3] = 'Pyton';
          lista_generica['linguagens'][4] = 'Perl';

          function criaListaGenerica() {
            let categoria = prompt("Informe a categoria (frutas, numeros, linguagens):");
            
            if (lista_generica[categoria]) {
                categoriaSelecionada = categoria;
                let container = document.getElementById("container3");
                container.innerHTML = ""; 
                let ul = document.createElement("ul");
        
                lista_generica[categoria].forEach(function(item, index) {
                    let li = document.createElement("li");
                    li.textContent = index + ": " + item;
                    ul.appendChild(li);
                });
        
                container.appendChild(ul);
            } else {
                alert("Inválida");
            }
        }
        
        function posicaoItens() {
            if (categoriaSelecionada) {
                let posicao = prompt("Informe a posição do item no array:");
        
                
                posicao = parseInt(posicao);
        
                if (!isNaN(posicao) && posicao >= 0 && posicao < lista_generica[categoriaSelecionada].length) {
                    let item = lista_generica[categoriaSelecionada][posicao];
                    alert("O item na posição " + posicao + " é: " + item);
                } else {
                    alert("Invalida");
                }
              }
        }

        var notas = [9.5, 4.2, 8.8, 7.1, 6.5, 2.3, 5.4, 3.8, 10.0, 1.9];
        
        function criaListaNotas() {
            let container = document.getElementById("container4");
            container.innerHTML = "";
            let ul = document.createElement("ul");

                
            notas.forEach(function(nota, index) {
                let li = document.createElement("li");
                li.textContent = "Nota " + (index + 1) + ": " + nota;
                ul.appendChild(li);
            });

            container.appendChild(ul); 
        }
            
            function consultarNotas() {
                let posicao = prompt("Informe a posição da nota:");

                
                posicao = parseInt(posicao) - 1;

                
                if (!isNaN(posicao) && posicao >= 0 && posicao < notas.length) {
                    let nota = notas[posicao];

                
                    if (nota >= 7.0) {
                        alert("A Posição " + (posicao + 1) + " - Nota Aprovativa: " + nota);
                    } else {
                        alert("A Posição " + (posicao + 1) + " - Nota Reprovativa: " + nota);
                    }
                } else {
                    alert("Inválido");
                }
            }

            window.onload = criaListaNotas;

            var lista_boxes = [
                { cor: 'purple', conteudo: 'Box 1', borderRadius: '30px', tamanho: '300px' },
                { cor: 'blue', conteudo: 'Box 2', borderRadius: '25px', tamanho: '250px' },
                { cor: 'green', conteudo: 'Box 3', borderRadius: '20px', tamanho: '200px' },
                { cor: 'orange', conteudo: 'Box 4', borderRadius: '15px', tamanho: '150px' },
                { cor: 'red', conteudo: 'Box 5', borderRadius: '10px', tamanho: '100px' },
            ];
            
            function criaBox(itemBox) {
                var novaBox = document.createElement('div'); 
                novaBox.className = 'box'; 
                novaBox.style.backgroundColor = itemBox.cor;
                novaBox.textContent = itemBox.conteudo;
                novaBox.style.borderRadius = itemBox.borderRadius; 
                novaBox.style.width = itemBox.tamanho; 
                novaBox.style.height = itemBox.tamanho; 
                return novaBox;
            }

            function listaBox() {
                var containerBox = document.getElementById('container5');
                lista_boxes.forEach(function(itemBox) { 
                    var box = criaBox(itemBox);
                    containerBox.appendChild(box);
                });
            }
            
            function verificaCor() {
                var position = prompt('Digite a posição da caixa:'); 
                var index = parseInt(position) - 1; 
                if (!isNaN(index) && index >= 0 && index < lista_boxes.length) {
                    alert('A cor da caixa na posição ' + (index + 1) + ' é ' + lista_boxes[index].cor);
                } else {
                    alert('Inválido');
                }
            }
            
            
            document.getElementById('listaBox').addEventListener('click', listaBox);
            
            
            document.getElementById('verificaCor').addEventListener('click', verificaCor);