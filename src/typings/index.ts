export interface IHeaderItem {
  name: string
  url: string
  id: number
}

export interface Cover {
  data?: any
}

export interface Categories {
  data: {
    id: number
    attributes: {
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
      publishedAt: Date
    }
  }[]
}

export interface IPostMeta {
  id: number
  title: string
  content: string
  desc: string
  visibility: boolean
  slug: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  cover: Cover
  categories: Categories
}

export interface IPost {
  id: number
  attributes: Omit<IPostMeta, 'id'>
}

export interface IMeta {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}
