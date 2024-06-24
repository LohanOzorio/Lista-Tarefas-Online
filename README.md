Atividade do conexõoes perifecias 2023.2

Criar lista de tarefas dinamica.

-Adicionar lista
          |-> adicionar tarefa
-Remover lista
-remover tarefa
-Editar nome da lista
-Editar tarefa
-poder adicionar diversas listas

inspirado no TRELLO.
////////////////////////////////////////////////////////////
const addListButton = document.getElementById('add-list');
const listsContainer = document.querySelector('.lists-container');

addListButton.addEventListener('click', () => {
    const newList = createList();
    listsContainer.appendChild(newList);
});
-> adiciona o container da lista assim que é acionado apartir do botao.

"function createList()" -> cria a lista apartir do clique no botao;
"function createTask()" -> cria a tarefa apartir do clique no botao;


"const listDelete" -> excluir/remover lista;
"const taskDelete" -> excluir/remover tarefa;
  
