import { ChatGPTUnofficialProxyAPI } from 'chatgpt'

let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    const text=e.target.elements.text.value.trim()
    e.preventDefault()

    if (text){
    todos.push({
        id: uuid.v4(),
        text,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
}
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
let count=1
const onlyTodos=todos.map((todo)=>todo.text+",")
console.log(process.env.OPENAI_ACCESS_TOKEN)
async function generateResponse() {
    console.log(onlyTodos.join(", "))
    const api = new ChatGPTUnofficialProxyAPI({
      accessToken: 'OPENAI_ACCESS_TOKEN'
    })
    
      const res = await api.sendMessage('Hello World!')
      
const pTag = document.createElement('p');
  pTag.innerHTML = `Feedback: ${res.text}`;
  document.body.appendChild(pTag);

}

const button = document.getElementById('get-advice-btn');
button.addEventListener('click', generateResponse);



