import React from 'react'

const anecdoteForm = ({dispatch, createAnecdote,notificationCreate }) => {
    const addNewAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(notificationCreate(content, 2))
        
      }
  return (
    <div>
    <h2>create new</h2>
    <form onSubmit={addNewAnecdote}>
      <div><input name="anecdote"/></div>
      <button type="submit">create</button>
    </form>
    </div>
  )
}

export default anecdoteForm