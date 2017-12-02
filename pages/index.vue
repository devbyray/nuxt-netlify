<template>
  <section class="container">
    <header class="mfd__header">
      <logo/>
      <sidebar />
    </header>
    <div class="mfd__blog-list">
      <div v-for="post in posts" class="mfd__blog-item" :key="post.id">
          <div class="mfd-post__link">
            <nuxt-link class="mfd__blog-link" :to="{ name: 'slug', params: { slug: post.slug }}">
              <h2 class="mfd-post__link-title" v-html="post.title.rendered"></h2>
            </nuxt-link>
          </div>
          <p class="mfd-post__date"><em>{{moment(post.date).fromNow()}}</em></p>
          <p class="mfd-post__excerpt" v-html="post.excerpt.rendered"></p>
          <p class="mfd-post__readmore">
            <nuxt-link class="mfd-post__readmore-link" :to="{ name: 'slug', params: { slug: post.slug }}">Read more ></nuxt-link>
          </p>
      </div>
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
    let { data } = await axios.get(
      `https://blog.mrfrontend.org/wp-json/wp/v2/posts/`
    )

    return { posts: data }
  },
  data () {
    return {
      moment: moment
    }
  },
  components: {
    Logo,
    Sidebar
  }
}
</script>

<style>
.mfd__blog-item {
  padding-bottom: 2rem;
}
.mfd-post__link-title {
  display: inline;
  line-height: 1.6;
}
.mfd__blog-link,
.mfd-post__readmore-link {
  display: inline;
  text-decoration: none;
  border-bottom: 2px solid #ee2b71;
  padding: .4rem .2rem .2rem .2rem;
  transition: .5s ease-in-out
}
.mfd__blog-link:hover ,
.mfd-post__readmore-link:hover {
  background-color: #ee2b71;
  color: #ffffff;

}
.mfd-post__readmore-link,
.mfd__blog-link,
.mfd-post__date,
.mfd-post__excerpt,
.mfd-post__link {
  margin-bottom: 1rem;
}
</style>
