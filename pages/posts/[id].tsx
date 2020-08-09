import {useState, useEffect} from 'react'
import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";
import {useRouter} from "next/router";
import {NextPageContext} from "next";
import {MyPost} from "../../interfaces/post";
import {postsAPI} from "../../api/api";

interface PostPageProps {
  post: MyPost
}

export default function Post({post: serverPost}: PostPageProps) {

    const [post, setPost] = useState(serverPost)
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const response = await fetch(`https://simple-blog-api.crew.red/posts/${router.query.id}`)
            const data = await response.json()
            setPost(data)

            /*setPost(postsAPI.getPost(router.query.id))*/
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

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

Post.getInitialProps = async ({query, req}: PostNextPageContext) => {
    if (!req) {
        return {post: null}
    }
   const response = await fetch(`https://simple-blog-api.crew.red/posts/${query.id}`)
    const post: MyPost = await response.json()
/*    const post: MyPost = postsAPI.getPost(query.id)*/
    return {
        post
    }
}
