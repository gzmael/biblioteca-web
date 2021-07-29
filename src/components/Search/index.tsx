import React from 'react'

import { IoChevronDown, IoSearch } from 'react-icons/io5'

import { Category } from '@models/Category'

import { Container, DropDown, Button } from './styles'

interface ISearchProps {
  categories: Category[]
  selected?: string
  setCategory: (category: string) => void
  search?: string
  setSearch: (filter: string) => void
  getSearch: () => void
}

const Search = ({
  categories,
  selected,
  setCategory,
  search,
  setSearch,
  getSearch
}: ISearchProps) => {
  function handleSelect(category: string) {
    setCategory(category)
  }
  function handleFilter(value: string) {
    setSearch(value)
  }
  return (
    <Container>
      <div className="wrapper">
        <DropDown>
          <button type="button">
            {selected === '' ? 'Escolha uma Categoria' : selected}
            <IoChevronDown size={20} />
          </button>
          <ul>
            <li>
              <button
                type="button"
                onClick={() => handleSelect('')}
                className={selected === '' ? 'active' : ''}
              >
                Todas
              </button>
            </li>
            {categories.map(category => (
              <li key={category.id}>
                <button
                  type="button"
                  onClick={() => handleSelect(category.title)}
                  className={selected === category.title ? 'active' : ''}
                >
                  {category.title}
                </button>
              </li>
            ))}
          </ul>
        </DropDown>
        <input
          type="search"
          placeholder="Busque por Título, Autor ou Categoria..."
          value={search}
          onChange={e => handleFilter(e.target.value)}
        />
      </div>
      <Button type="button" onClick={getSearch}>
        <IoSearch size={20} /> Buscar
      </Button>
    </Container>
  )
}

export { Search }
