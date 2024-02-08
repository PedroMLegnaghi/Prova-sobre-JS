const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      resposta: [
        "var myVar;",
        "variable myVar;",
        "let myVar;"
      ],
      correta: 2 // Resposta correta é a opção C
    },
    {
      pergunta: "O que o operador '===' faz em comparações em JavaScript?",
      resposta: [
        "Compara apenas os valores, não os tipos",
        "Compara os valores e os tipos",
        "Compara apenas os tipos, não os valores"
      ],
      correta: 1 // Resposta correta é a opção B
    },
    {
      pergunta: "Qual é a função usada para imprimir algo no console do navegador?",
      resposta: [
        "log()",
        "print()",
        "console.log()"
      ],
      correta: 2 // Resposta correta é a opção C
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      resposta: [
        "function myFunction() {}",
        "var myFunction = {}",
        "def myFunction() {}"
      ],
      correta: 0 // Resposta correta é a opção A
    },
    {
      pergunta: "O que o método 'charAt()' faz em uma string em JavaScript?",
      resposta: [
        "Retorna o caractere na posição especificada",
        "Remove o último caractere da string",
        "Concatena duas strings"
      ],
      correta: 0 // Resposta correta é a opção A
    },
    {
      pergunta: "Qual dos seguintes não é um tipo de dado em JavaScript?",
      resposta: [
        "string",
        "number",
        "tuple"
      ],
      correta: 2 // Resposta correta é a opção C
    },
    {
      pergunta: "Como você verifica o tipo de uma variável em JavaScript?",
      resposta: [
        "typeof myVar",
        "typeOf(myVar)",
        "myVar.type()"
      ],
      correta: 0 // Resposta correta é a opção A
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      resposta: [
        "Realiza uma comparação lógica OU",
        "Realiza uma comparação lógica E",
        "Realiza uma comparação lógica XOR"
      ],
      correta: 1 // Resposta correta é a opção B
    },
    {
      pergunta: "Qual é a forma correta de criar um loop 'for' em JavaScript?",
      resposta: [
        "for (var i = 0; i < 10; i++) {}",
        "for (i = 0; i < 10; i++) {}",
        "for (i < 10; i++) {}"
      ],
      correta: 0 // Resposta correta é a opção A
    },
    {
      pergunta: "O que o método 'push()' faz em um array em JavaScript?",
      resposta: [
        "Remove o último elemento do array",
        "Adiciona um elemento no início do array",
        "Adiciona um elemento ao final do array"
      ],
      correta: 2 // Resposta correta é a opção C
    }
   ];
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  //set permite adicioanr e alterar no meio
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent=corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true);
   quizItem.querySelector('h3').textContent=item.pergunta;
  for(let respostas of item.resposta){
    //dentro de um dl procura dt
    const dt=quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent=respostas;
    dt.querySelector('input').setAttribute('name' , 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.resposta.indexOf(respostas)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
    }
    quizItem.querySelector('dl').appendChild(dt)
  }
    quizItem.querySelector('dl dt').remove();
  
   //coloca a pergunta na tela
    quiz.appendChild(quizItem);
  }
  