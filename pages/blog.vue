<template>
  <section class="container">
    <header>
      <logo/>
      <sidebar />
    </header>
    <div class="mfd__blog-list">
      <h1>BLOGGG</h1>
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

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
