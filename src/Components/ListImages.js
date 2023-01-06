import React from 'react'
import Image from './Image'

const ListImages = ({ data }) => {
  return (
    <div className='container-fluid my-4 d-flex flex-wrap gap-2'>
      {data.map(item => (
        <Image item={item} key={item.id} />
      ))}
    </div>
  )
}

export default ListImages
