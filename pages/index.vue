<template>
  <section class="container">
    <header>
      <logo/>
      <sidebar />
    </header>
    <div class="mfd__blog-list">
      <div v-for="post in posts" class="mfd__blog-item" :key="post.id">
        <nuxt-link class="mfd__blog-content" :to="'blog/' + post.id">
          <span>{{moment(post.date).fromNow()}}</span>
          <strong v-html="post.title.rendered"></strong>
        </nuxt-link>
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
.mfd__blog-list {
  /* min-height: 100vh; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 1rem;
}
.mfd__blog-item {
  flex: 0 1 50%;
  height: 300px;
  padding: 1px;
}
.mfd__blog-content {
  display: flex;
  width: 100%; height: 100%;;
  text-align: left;
  align-items: flex-start;
  align-content: flex-start;
  background: #ccc;
  color: #333333;
  padding: 1.5rem;
  flex-direction: column;
  flex-wrap: nowrap;
}
.mfd__blog-content strong {
  margin-bottom: .8rem
}
.mfd__blog-content span {
  font-size: .9rem;
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
</style>
