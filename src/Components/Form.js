import React, { useState } from 'react'
import Error from './Error'
import Proptypes from 'prop-types'

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
          placeholder='Search an image...'
          onChange={e => setValue(e.target.value)}
        />

        <button
          className='btn btn-lg btn-primary'
          type='submit'
        >Search
        </button>

      </div>

      {error ? <Error message='The field is required' /> : null}
    </form>
  )
}

Error.proptypes = {
  setQuery: Proptypes.func.isRequired
}

export default Form
