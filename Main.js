const form = document.getElementById('myForm');
const nameInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const messageInput   
 = document.getElementById('mensagem');

form.addEventListener('submit',(event) => {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;


    // Validação básica
    if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, digite um endereço de e-mail válido.');
        return;
    }

    // Se todos os campos forem válidos, você pode enviar os dados para um servidor
    // usando AJAX ou outro método. Por exemplo:
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Mensagem:', message);
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    // Aqui você enviaria os dados para um servidor usando uma biblioteca como Fetch API ou Axios
})

function adicionar() {
    const nome = document.getElementById('lista_tarefa').value;
    const lista = JSON.parse(localStorage.getItem('itens')) || [];
    lista.push(nome);
    localStorage.setItem('itens', JSON.stringify(lista));
    mostrarLista();
  }
  
  function mostrarLista() {
    const lista = JSON.parse(localStorage.getItem('itens')) || [];
    const ul = document.getElementById('lista');
    ul.innerHTML = '';
    lista.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
  }
  
  mostrarLista();

  function deletarItem(id) {
    // Obtém a lista de itens do localStorage
    const lista = JSON.parse(localStorage.getItem('itens')) || [];
  
    // Encontra o índice do item a ser removido
    const indice = lista.findIndex(item => item.id === id);
  
    // Remove o item do array
    if (indice !== -1) {
      lista.splice(indice, 1);
      localStorage.setItem('itens', JSON.stringify(lista));
      mostrarLista(); // Chama a função para atualizar a lista na tela
    } else {
      console.error('Item não encontrado.');
    }
  }

