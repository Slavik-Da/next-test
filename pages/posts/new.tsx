import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";
import { postsAPI } from '../../api/api'

const title = 'viiiiiiii'
const body = 'Viiiiiiiiiiiiiiiiiiiiiiiiiiiii'


export default function CreatePost() {
  return (
    <MainLayout title='Create post'>
      <p>Create a post</p>
        <button onClick={() => postsAPI.savePost(title, body)}>Post</button>
      <button onClick={() => Router.push('/')}>Go to latest posts</button>
    </MainLayout>
  )
}
