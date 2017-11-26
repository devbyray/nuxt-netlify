<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        Mr Frontend Blog
      </h1>
      <div class="links">
        <ul>
          <li v-for="post in posts">
            <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }"><span v-html="post.title.rendered"></span></nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Logo from '~/components/Logo.vue'

export default {
  async asyncData ({ params }) {
    // We can use async/await ES6 feature
    let { data } = await axios.get(`https://blog.mrfrontend.org/wp-json/wp/v2/posts/`)
    return { posts: data }
  },
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
