<template>
  <section class="container">
    <header>
      <logo/>
      <sidebar />
    </header>
    <div class="mfd__blog-list">
      <div v-for="post in posts" class="mfd__blog-item" :key="post.id">

        <nuxt-link class="mfd__blog-content" :to="{ name: 'slug', params: { slug: post.slug }}" :style="{'background': 'linear-gradient(to top, ' + randomColor({luminosity: 'dark', hue: 'blue', format: 'rgba', alpha: '0.9'}) + ', '  + randomColor({luminosity: 'dark', hue: 'blue', format: 'rgba', alpha: '0.2'}) + ')'}">
          <span>{{moment(post.date).fromNow()}}</span>
          <strong v-html="post.title.rendered"></strong>
        </nuxt-link>
        <div class="mfd__blog-photo" :style="{'background-image': `url( ${post.acf.post_image || post.better_featured_image.media_details.sizes.medium_large.source_url})`}"></div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
import randomcolor from 'randomcolor'
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
      moment: moment,
      randomColor: randomcolor
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
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
}
.mfd__blog-item {
  flex: 0 1 100%;
  border: 1px solid #333;
  overflow: hidden;
  position: relative;
  height: 200px;
}
.mfd__blog-photo {
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  position: absolute;
  height: 110%;
  width: 110%;
  top: -4px;
  left: -4px;
  z-index: -99;
}

@media screen
  and (min-width: 900px) {
    .mfd__blog-item {
      flex-basis: 50%;
      height: 400px;
    }
}
@media screen
  and (min-width: 1600px) {
    .mfd__blog-item {
      flex-basis: calc(100%/3);
    }
}
.mfd__blog-content {
  display: flex;
  width: 100%; height: 100%;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-end;
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
.mfd__blog-content span,
.mfd__blog-content strong {
  text-shadow: 1px 1px 2px #161838;
  max-width: 50%;
}
@media screen
  and (min-width: 600px) {
  .mfd__blog-content span,
  .mfd__blog-content strong {
    max-width: 100%;
  }
}

.mfd__blog-item a {
  color: #ffffff;
  font-size: 1.3rem;
}
</style>
