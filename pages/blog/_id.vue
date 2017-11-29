<template>
  <section class="container">
    <header>
      <logo/>
      <sidebar />
    </header>
    <div class="mfd__post-title">
      <div class="mfd__post-title-wrapper">
        <h1 class="title" v-html="post.title.rendered"></h1>
      </div>
    </div>
    <div class="mfd__post-content">
      <div class="content" v-html="post.content.rendered"></div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
import Logo from '~/components/Logo.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
  async asyncData ({ params }) {
    // We can use async/await ES6 feature
    console.log('params: ', params)
    let { data } = await axios.get(
      `https://blog.mrfrontend.org/wp-json/wp/v2/posts/${params.id}`
    )
    return { post: data }
  },
  data () {
    return {
      moment: moment
    }
  },
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  components: {
    Logo,
    Sidebar
  }
}
</script>

<style>
.mfd__post-content {
  max-width: 70vw;
  text-align: left;
  color: #333333;
  padding: 0 3rem;
}
.mfd__post-title {
  background: #333;
  color: #fff;
  padding: 2rem 0;
  margin-bottom: 2rem;
}
.mfd__post-title-wrapper {
  /* max-width: 70vw; */
  padding: 0 5rem;
}
.mfd__post-content p,
.mfd__post-content ol,
.mfd__post-content ul {
  margin-bottom: 2rem;
}
.mfd__post-content code {
  background: #ccc;
  padding: 0 .3rem;
  display: inline-block;
}
.mfd__post-content pre {
  background: #333;
  color: #fff;
}
.container {
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>
