import * as axios from 'axios'

const instance = axios.create({
  withCredentials: false,
  baseURL: 'https://simple-blog-api.crew.red/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const postsAPI = {
  getPosts() {
    return instance.get('posts/')
  },
  savePost(title, body) {
    return instance.post(`posts/`, {title, body})
  },
  getPost(id) {
    return instance.get(`posts/${id}`)
  }
}
