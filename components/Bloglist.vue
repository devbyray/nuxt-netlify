<template>
  <div class="mfd__blog-list">
      <nav>
        <ul>
          <li v-for="post in posts">
            <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }"><span v-html="post.title.rendered"></span></nuxt-link>
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    async asyncData ({ params }) {
        // We can use async/await ES6 feature
        let { data } = await axios.get(`https://blog.mrfrontend.org/wp-json/wp/v2/posts/`)
        return { posts: data }
    }
}
</script>


<style>
</style>
