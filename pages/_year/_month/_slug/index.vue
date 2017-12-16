<template>
  <article class="mfd__post">
    <div class="mfd__post-title">
      <h1 class="title" v-html="post.title.rendered"></h1>
    </div>
    <div class="mfd__post-image" v-if="post.better_featured_image !== undefined">
      <img :src="post.better_featured_image.source_url" :alt="post.title.rendered">
    </div>
    <!-- <div class="mfd__post-video" v-if="post.acf.youtube_url !== undefined">
      <div class="embed-youtube">
        <iframe id="ytplayer" type="text/html" width="640" height="360" :src="getYoutubeEmbedUrl(post.acf.youtube_url)" frameborder="0"></iframe>
      </div>
    </div> -->
    <div class="mfd__post-date">
      <strong>Published: </strong> <em :title="post.date">{{moment(post.date).fromNow()}}</em>
    </div>
    <div class="mfd__post-content">
      <div class="content" v-html="post.content.rendered"></div>
    </div>
    <!-- <div class="mfd__post-comments">
      <h2>Comments</h2>
      <disqus shortname="rsschouwenaar" :identifier="post.id"></disqus>
    </div> -->
  </article>
</template>

<script>
/* Slug page */
import axios from 'axios'
import moment from 'moment'
import Sidebar from '~/components/Sidebar.vue'
import VueDisqus from 'vue-disqus/VueDisqus.vue'
import entities from 'entities'
import stripHtml from 'string-strip-html'

const getYoutubeEmbedUrl = (youtubeUrl) => {
  let yt = 'https://www.youtube.com/watch?v=hFi0hUnvr0s'
  let searchId = yt.indexOf('?v=')
  let VIDEO_ID = yt.substring(searchId + 3)

  return `https://www.youtube.com/embed/${VIDEO_ID}`
}

// const filterYTandSoundcloud = () => {
//   let ytPlayerElement = document.querySelector('.youtube-player')
//   let ytPlayerSpanParent = ytPlayerElement.parentNode
//   let ytPlayerParagraph = ytPlayerSpanParent.parentNode
//   ytPlayerParagraph.outerHTML = ''
// }

// filterYTandSoundcloud();

export default {
  layout: 'post',
  async asyncData ({ params }) {
    // We can use async/await ES6 feature
    let { data } = await axios.get(
      `https://blog.mrfrontend.org/wp-json/wp/v2/posts?slug=${params.slug}`
    )

    return {
      post: data[0],
      permalink: `${params.year}/${params.month}/${params.slug}`
    }
  },
  data () {
    return {
      moment,
      getYoutubeEmbedUrl
    }
  },
  components: {
    Sidebar,
    VueDisqus
  },
  computed: {
    disqusShortname () {
      return 'rsschouwenaar'
    },
    disqusId () { // env used to avoid re-use from dev to production
      return `${process.env.NODE_ENV}-${this.disqusShortname}-${this.post.id}`
    }
  },
  head () {
    let post = this.post
    return {
      title: entities.decodeHTML(post.title.rendered),
      meta: [
        {
          // hid: post.meta.id,
          // name: post.meta.name,
          content: stripHtml(entities.decodeHTML(post.excerpt.rendered))
        }
      ]
    }
  },
  watch: {
    '$route.params.slug' (curr, old) {
      // disqus does not properly reload just based off the
      // disqusId computed property - we need to manually change it
      // when we know it should update
      console.log('current: ', curr)
      console.log('old: ', old)
      this.$refs.disqus.init()
    }
  }

}
</script>

<style>
@supports (display: grid) {
  .mfd__post {
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(5,1fr);
  }
  .mfd__post-title {
    grid-row: 1;
    grid-column: 1/6
  }
  .mfd__post-image,
  .mfd__post-video {
    grid-row: 2;
    grid-column: 1/6
  }
  .mfd__post-date {
    grid-row: 3;
    grid-column: 1/6
  }
  .mfd__post-content {
    grid-row: 4;
    grid-column: 1/6
  }
  .mfd__post-comments {
    grid-row: 5;
    grid-column: 1/6
  }

  @media screen
    and (min-width: 900px) {
      .mfd__post-title {
        text-align: justify;
        grid-row: 1;
        grid-column: 2/5
      }
      .mfd__post-date {
        grid-row: 2;
        grid-column: 2/5
      }
      .mfd__post-image,
      .mfd__post-video {
        grid-column: 1/6;
        grid-row: 3;
      }
      .mfd__post-content {
        grid-row: 4;
        grid-column: 2/5
      }
      .mfd__post-comments {
        grid-row: 5;
        grid-column: 2/5
      }

  }
}
@media screen
  and (min-width: 900px) {
  .mfd__post-title .title {
    font-size: 4rem;
    margin: 0;
  }
}
@media screen
  and (min-width: 1600px) {
  .mfd__post-title .title {
    font-size: 4rem;
  }
}
.mfd__post {
  margin-bottom: 1rem;
}
.mfd__post-title .title {
  font-size: 2rem;
}

.mfd__post-content iframe {
  max-width: 100%;
}
.mfd__post-image {
  text-align: center
}
.mfd__post-content p,
.mfd__post-content ol,
.mfd__post-content ul,
.mfd__post-content pre {
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
  width: 100%;
  padding: .2rem .5rem;
  background: #ccc;
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow-wrap: break-word;
}

</style>
