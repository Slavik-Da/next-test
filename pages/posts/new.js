import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";
import React from "react";

export default function CreatePost() {
  return (
    <MainLayout title='Create post'>
      <p>Create a post</p>
      <button onClick={() => Router.push('/')}> go to latest posts</button>
    </MainLayout>
  )
}
