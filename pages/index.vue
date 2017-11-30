<template>
  <section class="container">
    <header>
      <logo/>
      <sidebar />
    </header>
    <div class="mfd__blog-list">
      <div v-for="post in posts" class="mfd__blog-item" :key="post.id" :style="{'background-image': 'url(' + post.better_featured_image.media_details.sizes.large.source_url +' )'}">
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
  flex: 0 1 100%;
  border: 1px solid #333;
  background-position: top right;
}
@media screen
  and (min-width: 900px) {
    .mfd__blog-item {
      flex-basis: 50%;
      height: 300px;
    }
}
.mfd__blog-content {
  display: flex;
  width: 100%; height: 100%;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-end;
  background: linear-gradient(to top,rgba(0,0,0,0.8), rgba(0,0,0,0.4) 100%);
  padding: 1.5rem;
  flex-direction: column;
  flex-wrap: nowrap;
  transition: .5s ease-in-out;
}
.mfd__blog-item:hover .mfd__blog-content {
  background-color: rgba(0, 0, 0, 0.9);
}
.mfd__blog-content strong {
  margin-bottom: .8rem
}
.mfd__blog-content span {
  font-size: .7rem;
}
.mfd__blog-item a {
  color: #ffffff;
  font-size: 1.3rem;
}
</style>
