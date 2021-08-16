interface Book {
  id: number
  title: string
  slug: string
  author: string
  categories: string
  description: string
  edition: string
  publishedDate: Date
  pageNumber: number
  publishingCompany: string
  language: string
  isbn13: string
  downloads: number
  cover: {
    url: string
    blurUpThumb: string
  }
  arquivo: {
    url: string
  }
}

export type { Book }
