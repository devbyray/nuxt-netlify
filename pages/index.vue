<template>
  <section class="container">
    <h1 class="title">
      Mr Frontend Blog
    </h1>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts">
        <p><h2 v-html="post.title.rendered"></h2></p>
        <img :src="post.better_featured_image.media_details.sizes.medium.source_url" />
        <p v-html="post.excerpt.rendered"></p>
        <hr>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  created() {
    axios.get('https://blog.mrfrontend.org/wp-json/wp/v2/posts/')
      .then(posts => {
          // console.log('this: ', this);
          this.posts = posts.data;
      })
      .catch(e => {
        this.errors.push(e)
      });
    }
}
</script>


<style scoped>
.title
{
  margin: 50px 0;
}
</style>
