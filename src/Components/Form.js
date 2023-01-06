import React, { useState } from 'react'
import Error from './Error'

const Form = ({ setQuery }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    if (value.trim() === '') {
      setError(true)
      return
    }

    setError(false)
    setQuery(value)
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className='d-flex'>
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Busca una imagen...'
          onChange={e => setValue(e.target.value)}
        />

        <button
          className='btn btn-lg btn-primary'
          type='submit'
        >Buscar
        </button>

      </div>

      {error ? <Error message='Hay un error' /> : null}
    </form>
  )
}

export default Form
