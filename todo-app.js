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

/* const r = document.querySelectorAll('p')
r.forEach(function(paragraph){
    if(paragraph.textContent.includes('the')){
       //paragraph.remove()
        paragraph.textContent = '******'
    }
}) */

const incompleteTodos = todos.filter(function(todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `you have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

//Listen for todo creation
document.querySelector('#add-todo').addEventListener('click', function(e){
    e.target.textContent = 'Clicked for add'
})