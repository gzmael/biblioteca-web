/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useCallback } from 'react'

import { AnimatePresence } from 'framer-motion'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { IoClose, IoDownloadOutline, IoBookOutline } from 'react-icons/io5'

import { Search } from '@components/Search'
import { ComoUsar } from '@components/Sections/ComoUsar'
import { Hero } from '@components/Sections/Hero'
import { Parceiros } from '@components/Sections/Parceiros'
import { SEO } from '@components/SEO'
import { ToTop } from '@components/ToTop'
import { Main } from '@layouts/Main'
import { Book } from '@models/Book'
import { Category } from '@models/Category'
import { request } from '@services/request'

import {
  Container,
  Content,
  Header,
  Books,
  BookItem,
  BotaoCarregar,
  Modal
} from '../styles/busca'

interface IPropsHome {
  categories: Category[]
}

const Home = ({ categories }: IPropsHome) => {
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [countView, setCountView] = useState(0)
  const [books, setBooks] = useState<Book[]>([])
  const [viewBook, setViewBook] = useState<Book>()

  useEffect(() => {
    setLoading(true)
    async function getBooks() {
      const queryFilter = `{
  _allBooksMeta {
    count
  }
  allBooks(
    orderBy: _createdAt_ASC,
    skip: 0,
  ) {
    id
    title
    slug
    author
    categories
    description
    edition
    publishedDate
    pageNumber
    publishingCompany
    language
    isbn13
    _status
    _firstPublishedAt
    cover {
      url
    }
    arquivo {
      url
    }
  }
}`

      const data = await request({
        query: queryFilter
      })

      const newBooks = data.allBooks as Book[]
      if (newBooks) {
        setBooks(newBooks)
        setCountView(newBooks.length)
        setTotal(data._allBooksMeta.count)
      }
    }

    getBooks()
    setLoading(false)
  }, [])

  const handleSearch = useCallback(async () => {
    let filterFields = ''
    setPage(0)

    const allTerms = []

    allTerms.push(`_status:{eq:published}`)

    if (category) {
      allTerms.push(`categories:{matches:{pattern:"${category}"}}`)
    }

    if (search) {
      filterFields = `  ${allTerms.join(',\n')}
      title:{matches:{pattern:"${search}"}}`
    } else {
      filterFields = allTerms.join(',\n')
    }

    const queryFilter = `{
      _allBooksMeta(
        filter: { ${filterFields} }
      ){
        count
      }
      allBooks(
        orderBy: _createdAt_ASC,
        skip: ${page * 20},
        filter: { ${filterFields} }
      ) {
        id
        title
        slug
        author
        categories
        description
        edition
        publishedDate
        pageNumber
        publishingCompany
        language
        isbn13
        downloads
        _status
        _firstPublishedAt
        cover {
          url
        }
        arquivo {
          url
        }
      }
    }`

    setLoading(true)
    const data = await request({
      query: queryFilter
    })

    const newBooks = data.allBooks as Book[]
    setBooks(newBooks)
    setCountView(newBooks.length)
    setTotal(data._allBooksMeta.count)

    setLoading(false)
  }, [category, page, search])

  function handleModal(book?: Book) {
    setViewBook(book)
  }

  async function handleGetMorePage() {
    setPage(prev => prev + 1)
    setLoading(true)
    const queryFilter = `{
      _allBooksMeta {
        count
      }
      allBooks(
        orderBy: _createdAt_ASC,
        skip: ${(page + 1) * 20},
      ) {
        id
        title
        slug
        author
        categories
        description
        edition
        publishedDate
        pageNumber
        publishingCompany
        language
        isbn13
        downloads
        _status
        _firstPublishedAt
        cover {
          url
        }
        arquivo {
          url
        }
      }
    }`

    const data = await request({
      query: queryFilter
    })

    const newBooks = data.allBooks as Book[]
    if (newBooks) {
      setBooks(prev => [...prev, ...newBooks])
      setCountView(prev => prev + newBooks.length)
    }

    setLoading(false)
  }

  return (
    <Main>
      <SEO title="BPM Professor Almino Gabriel Viana" />
      <Hero />

      <Container id="busca" className="element">
        <Content>
          <Header>
            <h2>Buscar Livro</h2>
            <span>Encontre, Baixe e Leia!</span>
          </Header>
          <p>
            {category} {search}
          </p>
          <Search
            categories={categories}
            selected={category}
            setCategory={setCategory}
            search={search}
            setSearch={setSearch}
            getSearch={handleSearch}
          />
          {!books && !loading && 'Nenhum livro encontrado'}
          {books && (
            <Books>
              {books.map((book: Book) => (
                <BookItem key={book.id}>
                  <button type="button" onClick={() => handleModal(book)}>
                    <Image
                      src={book.cover.url}
                      alt={`Capa do livro ${book.title}`}
                      layout="fill"
                      objectFit="cover"
                      quality={95}
                    />
                  </button>
                </BookItem>
              ))}
            </Books>
          )}
          {books && countView < total && (
            <BotaoCarregar type="button" onClick={handleGetMorePage}>
              {loading ? 'Carregando livros...' : 'Carregar mais Livros'}
            </BotaoCarregar>
          )}
        </Content>
      </Container>
      <ComoUsar />
      <Parceiros />
      <AnimatePresence>
        {viewBook && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container">
              <button
                type="button"
                className="close"
                onClick={() => handleModal()}
              >
                <IoClose size={24} />
              </button>
              <div className="content">
                <div className="cover">
                  <Image
                    src={viewBook.cover.url}
                    alt={`Capa do livro ${viewBook.title}`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="description">
                  <h4>{viewBook.title}</h4>
                  <span>
                    por <span className="author">{viewBook.author}</span>
                  </span>
                  <p>{viewBook.description}</p>
                  <ul>
                    <li>
                      <span>Edição:</span> {viewBook.edition}
                    </li>
                    <li>
                      <span>Editora:</span> {viewBook.publishingCompany}
                    </li>
                    <li>
                      <span>Publicação:</span> {viewBook.publishedDate}
                    </li>
                    <li>
                      <span>Idioma:</span> {viewBook.language}
                    </li>
                    <li>
                      <span>Páginas:</span> {viewBook.pageNumber}
                    </li>
                    <li>
                      <span>Ref.:</span> {viewBook.isbn13}
                    </li>
                  </ul>
                  <footer>
                    <span>
                      <IoDownloadOutline size={20} /> {viewBook.downloads || 0}{' '}
                      downloads
                    </span>
                    <a
                      href={viewBook.arquivo.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IoBookOutline size={20} /> Baixar e Ler
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
      <ToTop />
    </Main>
  )
}

const queryCategories = `{
  allCategories {
    id
    title
    _status
    _firstPublishedAt
  }
}`

export const getStaticProps: GetStaticProps<IPropsHome> = async () => {
  const data = await request({
    query: queryCategories
  })

  return {
    props: {
      categories: data.allCategories
    }
  }
}

export default Home
