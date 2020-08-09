import {MainLayout} from "../components/MainLayout";
import Link from "next/link";
import {useState, useEffect} from 'react'
import {MyPost} from "../interfaces/post";
import {NextPageContext} from "next";
import {postsAPI} from "../api/api";

interface LatestPostsPageProps {
  posts: MyPost[]
}

export default function LatestPosts({posts: serverPosts}: LatestPostsPageProps) {

  const [posts, setPosts] = useState(serverPosts)

  useEffect(() => {
    async function load() {
      const response = await fetch('https://simple-blog-api.crew.red/posts')
      const json = await response.json()
      setPosts(json)
      /*setPosts(postsAPI.getPosts)*/
    }

    if (!serverPosts) {
      load()
    }
  }, [])

  if (!posts) {
    return <MainLayout>
      <p>Loading...</p>
    </MainLayout>
  }

  return <MainLayout title={'Latest posts'}>
    <h1>Latest post page</h1>
    {/*{console.log(posts)}*/}
    <ul>
      {posts.reverse().map(post => (
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

LatestPosts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return {posts: null}
  }
  const response = await fetch('https://simple-blog-api.crew.red/posts')
  const posts: MyPost[] = await response.json()

  /*const posts: MyPost[] = postsAPI.getPosts()*/

  return {
    posts
  }

}

