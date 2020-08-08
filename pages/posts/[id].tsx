import {useState, useEffect} from 'react'
import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Post({post: serverPost}) {

  const [post, setPost] = useState(serverPost)
  const router = useRouter()

  useEffect(() => {
    async function load() {
      const response = await fetch(`https://simple-blog-api.crew.red/posts/${router.query.id}`)
      const data = await response.json()
      setPost(data)
    }

    if (!serverPost) {
      load()
    }
  }, [])

  if (!post) {
    return <MainLayout>
      <p>Loading...</p>
    </MainLayout>
  }

  return <MainLayout>
    <h1>{post.title}</h1>
    <hr/>
    <h3>{post.body}</h3>
    <Link href={'/'}><a>Back to latest posts</a></Link>
  </MainLayout>
}
Post.getInitialProps = async ({query, req}) => {
  if (!req) {
    return {post: null}
  }
  const response = await fetch(`https://simple-blog-api.crew.red/posts/${query.id}`)
  const post = await response.json()
  return {
    post
  }
}
