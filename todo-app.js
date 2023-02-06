let todos = []

//filter search, searching words
const filters = {
    searchText: '',
    hideCompleted: false
}

const todosJSON = localStorage.getItem('todos')

if(todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    //show incompleted todos
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `you have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    //show todos
    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters) // virgül yerine nokta kullanmışım uğraştırdı xd
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})