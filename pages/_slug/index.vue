<template>
  <section class="container">
    <header>
      <logo/>
      <sidebar />
    </header>
    <div class="mfd__post-title" :style="{'background-image': 'url(' + post.better_featured_image.media_details.sizes.large.source_url +' )'}">
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
    let { data } = await axios.get(
      `https://blog.mrfrontend.org/wp-json/wp/v2/posts?slug=${params.slug}`
    )

    return { post: data[0] }
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
@media screen
  and (min-width: 600px) {
  .mfd__post-content {
    max-width: 500px;
  }
}
@media screen
  and (min-width: 900px) {
  .mfd__post-content {
    padding: 0 3rem;
    max-width: 700px;
  }
  .mfd__post-title-wrapper {
    padding: 0 5rem;
  }
  .mfd__post-title .title {
    font-size: 4rem;
  }
}
@media screen
  and (min-width: 1600px) {
  .mfd__post-content {
    padding: 0 3rem;
    max-width: 800px;
  }
  .mfd__post-title-wrapper {
    padding: 0 5rem;
  }
  .mfd__post-title .title {
    font-size: 4rem;
  }
}
.mfd__post-content {
  width: 100%;
  padding: 0 2rem;
  text-align: left;
  color: #333333;
  line-height: 1.6;
}
.mfd__post-title-wrapper {
  background: linear-gradient(to top,rgba(0,0,0,0.8), rgba(0,0,0,0.6) 100%);
  width: 100%; height: 100%;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.mfd__post-title {
  width: 100%;
  color: #fff;
  margin-bottom: 2rem;
  background-size: cover;
  background-position: center;
}
.mfd__post-title .title {
    font-size: 2rem;
    max-width: 700px;
    text-align: center
}

.mfd__post-content p,
.mfd__post-content ol,
.mfd__post-content ul {
  margin-bottom: 1.2rem;
}
.mfd__post-content code {
  background: #ccc;
  padding: 0 .3rem;
  display: inline-block;
   white-space: pre-wrap;
    word-wrap: break-word;
    font-size: .8rem;
}
.mfd__post-content pre {
  background: #333;
  color: #fff;
    font-size: .8rem;
}

</style>
