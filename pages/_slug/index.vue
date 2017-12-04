<template>
  <article class="mfd__post">
    <div class="mfd__post-title">
      <h1 class="title" v-html="post.title.rendered"></h1>
    </div>
    <div class="mfd__post-image" v-if="post.better_featured_image !== undefined">
      <img :src="post.better_featured_image.source_url" :alt="post.title.rendered">
    </div>
    <div class="mfd__post-date">
      <strong>Published: </strong> <em :title="post.date">{{moment(post.date).fromNow()}}</em>
    </div>
    <div class="mfd__post-content">
      <div class="content" v-html="post.content.rendered"></div>
    </div>
  </article>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Sidebar from '~/components/Sidebar.vue'

export default {
  layout: 'post',
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
    Sidebar
  }

}
</script>

<style>
@supports (display: grid) {
  .mfd__post {
    display: grid;
    grid-gap: 2em;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(12,1fr);
  }
  .mfd__post-title {
    grid-row: 1;
    grid-column: 2/12
  }
  .mfd__post-image {
    grid-row: 2;
    grid-column: 2/12
  }
  .mfd__post-date {
    grid-row: 3;
    grid-column: 2/12
  }
  .mfd__post-content {
    grid-row: 4;
    grid-column: 2/12
  }

  @media screen
    and (min-width: 900px) {
      .mfd__post-title {
        grid-column: 3/11;
        text-align: justify;
      }
      .mfd__post-image {
        grid-column: 2/12;
      }
      .mfd__post-date {
        grid-column: 3/4
      }
      .mfd__post-content {
        grid-row: 3;
        grid-column: 5/11
      }

  }
}
@media screen
  and (min-width: 900px) {
  .mfd__post-title .title {
    font-size: 4rem;
  }
}
@media screen
  and (min-width: 1600px) {
  .mfd__post-title .title {
    font-size: 4rem;
  }
}
.mfd__post-title .title {
  font-size: 2rem;
}

.mfd__post-content p,
.mfd__post-content ol,
.mfd__post-content ul {
  margin-bottom: 1.6rem;
}
.mfd__post-content code {
  display: inline;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: .8rem;
  font-weight: 800;
}
.mfd__post-content pre {
    font-size: .8rem;
}

</style>
