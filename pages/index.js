import {MainLayout} from "../components/MainLayout";
import Link from "next/link";
import { useState, useEffect } from 'react'

export default function LatestPosts({ posts }) {

  /*const [posts, setPosts] = useState([])

  useEffect(() => {
    async function load() {
      const response = await fetch('https://simple-blog-api.crew.red/posts')
      const json = await response.json()
      setPosts(json)

    }
    load()
  }, [])
*/
  return <MainLayout title={'Latest posts'}>
    <h1>Latest post page</h1>
   <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </MainLayout>
}

// SEO optimisation

LatestPosts.getInitialProps = async ({req}) => {
  const response = await fetch('https://simple-blog-api.crew.red/posts')
  const posts = await response.json()
  return {
    posts
  }

}

