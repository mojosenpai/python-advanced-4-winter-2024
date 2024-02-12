import React, { useReducer } from 'react'

let todos = [
    {
        id: 1,
        title: 'mow the lawn',
        done: false
    },
    {
        id: 2,
        title: 'do the homework',
        done: true
    }
]

let reducer = (state, action) => {
    switch(action.type) {
        case 'COMPLETE':
            return state.map(todo => {
                if(todo.id == action.id) {
                    return {...todo, complete: !todo.complete}
                } 
                else {
                    return todo
                }
            })
        default:
            return state
    }
}


function Reducer() {
  let [dispatcher, todos] = useReducer(reducer, todos)
  let handleCompleted = todo => {
    dispatcher({type: 'COMPLETE', id: todo.id})
  }
  return (
    <div>
        {todos.map(todo => {
            <div key={todo.id}>
                <label>
                    <input type="checkbox" checked={todo.complete} onChange={handleCompleted(todo)} />
                    {todo.title}
                </label>
            </div>
        })}
    </div>
  )
}

export default Reducer