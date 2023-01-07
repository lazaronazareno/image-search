import React from 'react'
import Image from './Image'
import Proptypes from 'prop-types'

const ListImages = ({ data }) => {
  return (
    <div className='container-fluid my-4 d-flex flex-wrap gap-4 justify-content-center'>
      {data.map(item => (
        <Image item={item} key={item.id} />
      ))}
    </div>
  )
}

ListImages.propTypes = {
  data: Proptypes.array.isRequired
}

export default ListImages
