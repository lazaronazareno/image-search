import React, { useState } from 'react'
import Proptypes from 'prop-types'
import styles from './Image.module.css'

const Image = ({ item }) => {
  const [showDiv, setShowDiv] = useState(false)
  const { largeImageURL, previewURL, tags, views, likes } = item

  const newTags = tags.split(', ')

  const handleShowDiv = () => {
    setShowDiv(!showDiv)
  }

  return (
    <div className={styles.image__container}>
      <a
        href={largeImageURL}
        target='_blank'
        rel='noopener noreferrer'
      >
        {showDiv && (
          <div
            className={styles.image__img_text}
            onMouseLeave={handleShowDiv}
          >
            <div>
              <span> Visitas : {views}</span>
              <span>Favoritos : {likes}</span>
            </div>
          </div>
        )}
        <img
          src={previewURL}
          alt={tags}
          className={styles.image__img}
          onMouseEnter={handleShowDiv}
        />
      </a>
      <div className={styles.img__tag_container}>
        {newTags.map(item => (
          <span className={styles.img__tag} key={item}>{item}</span>
        ))}
      </div>
    </div>
  )
}

Image.propTypes = {
  item: Proptypes.object.isRequired
}

export default Image
