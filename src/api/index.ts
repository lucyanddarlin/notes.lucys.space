import axios from './axios'
import type { IMeta, IPost, IPostMeta } from '@/typings'

export const reqGetAllPosts = () =>
  axios<{ data: IPostMeta[]; meta: IMeta }>({
    url: '/posts?populate=*',
    method: 'GET',
  })

export const reqGetPostsById = (id: number | string) =>
  axios<{ data: IPost; meta: IMeta }>({
    url: `/posts/${id}?populate=*`,
    method: 'GET',
  })
