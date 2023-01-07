import React from 'react'
import Proptypes from 'prop-types'

const Error = ({ message }) => {
  return (
    <p className='my-3 p-4 text-center alert alert-danger'>
      {message}
    </p>
  )
}

Error.propTypes = {
  message: Proptypes.string.isRequired
}

export default Error
