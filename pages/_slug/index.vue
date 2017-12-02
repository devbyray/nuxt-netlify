<template>
  <article class="mfd__post">
    <div class="mfd__post-title">
      <h1 class="title" v-html="post.title.rendered"></h1>
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
  }
}
</script>

<style>
@supports (display: grid) {
  .mfd__post-title {
    grid-row: 2;
    grid-column: 1/13
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
.mfd__post-content {
  line-height: 1.6;
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
