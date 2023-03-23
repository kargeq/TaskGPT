import { ChatGPTUnofficialProxyAPI } from 'chatgpt'
// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}
let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}


// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.classList.add("list-title")
   let s='s'
     if(incompleteTodos.length===1){
        s=''
     }
    summary.textContent = `You have ${incompleteTodos.length} todo${s} left`
    return summary
}
// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const contain=document.createElement('div')
    const todoEl = document.createElement('label')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    contain.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup the todo text
    todoText.textContent = todo.text
    contain.appendChild(todoText)
    //setup container
    todoEl.classList.add('list-item')
    contain.classList.add('list-item__container')
    todoEl.appendChild(contain)

    // Setup the remove button
    removeButton.textContent = 'REMOVE'
    removeButton.classList.add('button','button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}
// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#Todos').innerHTML = ''
    document.querySelector('#Todos').appendChild(generateSummaryDOM(incompleteTodos))
    if (filteredTodos.length>0){
        filteredTodos.forEach((todo) => {
            document.querySelector('#Todos').appendChild(generateTodoDOM(todo))
        })
    }else{
        const noItems=document.createElement('p');
        noItems.classList.add('empty-message')
        noItems.textContent="No items found for you to do";
        document.querySelector('#Todos').appendChild(noItems)
    }
    
}
renderTodos(todos, filters)
//add input to search and render
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})


const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}


//add item to list 
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
// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}

const removeTodo = (id) => {

    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}
//hide any completed items 
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
let count=1
const onlyTodos=todos.map((todo)=>todo.text+",")
async function generateResponse() {
    const api = new ChatGPTUnofficialProxyAPI({
      accessToken: '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'
    })
    
      const res = await api.sendMessage('How are my tasks, '+ onlyTodos.join(", ")+"how can I finish in one week without procrastinating")
      
const pTag = document.createElement('p');
  pTag.innerHTML = `Feedback: ${res.text}`;
  document.body.appendChild(pTag);

}

const button = document.getElementById('get-advice-btn');
button.addEventListener('click', generateResponse);



