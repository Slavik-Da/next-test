import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";

export default function Post({ post }) {

  //const router = useRouter()
  return <MainLayout>
    <h1>{post.title}</h1>
    <hr/>
    <h3>{post.body}</h3>
    <Link href={'/'}><a>Back to latest posts</a></Link>
  </MainLayout>
}
Post.getInitialProps = async (ctx) => {
  const response = await fetch(`https://simple-blog-api.crew.red/posts/${ctx.query.id}`)
  const post = await response.json()
  return {
    post
  }
}
