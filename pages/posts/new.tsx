import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function CreatePost() {
  return (
    <MainLayout title='Create post'>
      <p>Create a post</p>
      <input placeholder={'Your post text'}/>
      <button onClick={() => Router.push('/')}> go to latest posts</button>
    </MainLayout>
  )
}
