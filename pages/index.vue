<template>
  <div class="mfd__blog-list">
    <div v-for="post in posts" class="mfd__blog-item" :key="post.id">
        <div class="mfd-post__link">
          <nuxt-link class="mfd__blog-link" :to="{ name: 'year-month-slug', params: { slug: post.slug, year: getYear(post.date), month: getMonth(post.data) }}">
            <h2 class="mfd-post__link-title" v-html="post.title.rendered"></h2>
          </nuxt-link>
        </div>
        <div class="mfd-post__image" v-if="post.better_featured_image.media_details !== undefined">
          <img :src="post.better_featured_image.media_details.sizes.medium_large.source_url" :alt="post.title.rendered">
        </div>
        <p class="mfd-post__date"><strong>Published: </strong> <em :title="post.date">{{moment(post.date).fromNow()}}</em></p>
        <span class="mfd-post__excerpt" v-html="post.excerpt.rendered"></span>
        <p class="mfd-post__readmore">
          <nuxt-link class="mfd-post__readmore-link" :to="{ name: 'year-month-slug', params: { slug: post.slug, year: getYear(post.date), month: getMonth(post.data) }}">Read more ></nuxt-link>
        </p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'

const getYear = (dateInput) => {
  return moment(dateInput).format('YYYY')
}
const getMonth = (dateInput) => {
  return moment(dateInput).format('MM')
}

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
      moment,
      getYear,
      getMonth
    }
  }
}
</script>

<style>
@supports not (display: grid) {}
@supports (display: grid) {}
.mfd__blog-item {
  padding-bottom: 3rem;
}
.mfd-post__link-title {
  display: inline;
}
.mfd-post__excerpt {
  display: block;
}
.mfd-post__readmore-link,
.mfd__blog-link,
.mfd-post__date,
.mfd-post__excerpt,
.mfd-post__link {
  margin-bottom: 1rem;
}
</style>
