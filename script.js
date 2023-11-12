const cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

const gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
const selectAnimais = document.getElementById('select_animais');

// Selecionar elemento 'container' ( 1 ponto)
const container = document.getElementById('container');

// Selecionar elemento 'nome' ( 1 ponto)
const nomeAnimal = document.getElementById('nome');

// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
selectAnimais.addEventListener('input', listarAnimais);

// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
container.addEventListener('mouseover', mostrarNome);

// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
container.addEventListener('mouseout', limparNome);



function listarAnimais() { // Implementação da função (10 pontos)
  limparDivContainer();
  // Implementar...
  const selectedOption = selectAnimais.value;


  let animais;
  if (selectedOption === 'dog') {
    animais = cachorros;
  } else if (selectedOption === 'cat') {
    animais = gatos;
  }

  animais.forEach(function (animal) {
    // *  Criar elemento de imagem
    const img = document.createElement('img');
    img.src = 'img/' + animal.imagem + '.jpg';
    img.alt = animal.nome;

    // *  Adicionar imagem ao container
    container.appendChild(img);
  });

}

function mostrarNome(e) { // Implementação da função (4 pontos)
  // Implementar...

  if (e.target.tagName === 'IMG') {
    const nome = e.target.alt;
    nomeAnimal.innerText = nome;
  }
}

function limparNome() {
  const p = document.getElementById("nome")
  p.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  const elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}