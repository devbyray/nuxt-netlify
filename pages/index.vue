<template>
  <section class="container">
    <header>
      <logo/>
      <sidebar />
    </header>
    <div class="mfd__blog-list">
      <div v-for="post in posts" class="mfd__blog-item">
        <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">
          <strong v-html="post.title.rendered"></strong>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
import Logo from '~/components/Logo.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
  async asyncData ({ params }) {
    // We can use async/await ES6 feature
    let { data } = await axios.get(
      `https://blog.mrfrontend.org/wp-json/wp/v2/posts/`
    )
    return { posts: data }
  },
  components: {
    Logo,
    Sidebar
  }
}
</script>

<style>
.mfd__blog-list {
  /* min-height: 100vh; */
  max-width: 80vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.mfd__blog-item {
  width: 400px;
  height: 250px;
  display: flex;
  text-align: left;
  align-items: top;
  background: #ffffff;
  color: #333333;
  padding: 1.5rem;
  margin: 1rem;
}
.mfd__blog-item a {
  color: #333333;
  font-size: 1.5rem;
}
.container {
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
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
