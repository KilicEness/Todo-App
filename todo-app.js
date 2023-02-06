const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean the kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

//filter search, searching words
const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
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

document.querySelector('#new-todo').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    renderTodos(todos, filters) // virgül yerine nokta kullanmışım uğraştırdı xd
    e.target.elements.text.value = ''
})