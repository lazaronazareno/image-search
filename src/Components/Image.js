import React from 'react'

const Image = ({ item }) => {
  const { largeImageURL, previewURL, tags, views, likes } = item
  return (
    <div className='card col-2 row-2'>
      <img
        src={previewURL}
        alt={tags}
        className='card-img-top'
      />
      <div className='card-body'>
        <span className='card-text'>{tags}</span>
        <span className='card-text'> Visitas : {views}</span>
        <span className='card-text'>Favoritos : {likes}</span>
      </div>

      <div className='card-footer'>
        <a
          href={largeImageURL}
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-lg btn-dark'
        >Ver imagen
        </a>
      </div>
    </div>
  )
}

export default Image
