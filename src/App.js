import { useEffect, useState } from 'react'
import Form from './Components/Form'
import ListImages from './Components/ListImages'

function App () {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  const [actualPage, setActualPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const getApi = async () => {
    const perPage = 30
    const key = process.env.REACT_APP_APIKEY
    const url = `https://pixabay.com/api/?key=${key}&q=${query}&per_page=${perPage}&page=${actualPage}`

    const response = await fetch(url)
    const data = await response.json()

    const trueTotalPages = (Math.ceil(data.totalHits / perPage))
    setTotalPages(trueTotalPages)

    setData(data.hits)

    const headingTitle = document.querySelector('.heading-title')
    headingTitle.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (query === '') return

    getApi()
  }, [query, actualPage])

  const handlePrevPage = () => {
    const newActualPage = actualPage - 1
    if (newActualPage === 0) return

    setActualPage(newActualPage)
  }
  const handleNextPage = () => {
    const newActualPage = actualPage + 1
    if (newActualPage > totalPages) return

    setActualPage(newActualPage)
  }
  return (
    <div className='container-fluid bg-dark'>
      <h1 className='text-center text-light heading-title'>Image Searcher</h1>
      <Form
        setQuery={setQuery}
      />
      <ListImages data={data} />

      {
        actualPage === 1
          ? null
          : (
            <button
              className='btn btn-info m-2'
              onClick={handlePrevPage}
            >&laquo; Anterior
            </button>)
      }
      {
        actualPage === totalPages
          ? null
          : (
            <button
              className='btn btn-info m-2'
              onClick={handleNextPage}
            > Siguiente &raquo;
            </button>)
      }
    </div>
  )
}

export default App
