<template>
  <section class="container">
    <header class="mfd__header">
      <logo/>
      <navigation />
    </header>
    <div class="mfd__content">
      <nuxt/>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navigation from '~/components/Navigation.vue'
export default {
  components: {
    Logo,
    Navigation
  }
}
</script>


<style>
@supports not (display: grid) {
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .mfd__header {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    align-items: center;
  }
  .mfd__sidebar {
    max-width: 200px;
  }
  .mfd__blog-list {
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 724px;
    margin: 0 auto
  }

}
@supports (display: grid) {

  .container {
    min-height: 100vh;
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(12,1fr);
  }

  .mfd__header  {
    grid-row: 1;
    grid-column: 1/13;
  }
  .mfd__content  {
    grid-row: 2;
    grid-column: 1/13;
  }
}

img {
  max-width: 100%;
}
.mfd__blog-list a,
.mfd__blog-link,
.mfd-post__readmore-link {
  display: inline;
  text-decoration: none;
  border-bottom: 2px solid #ee2b71;
  padding: .4rem .2rem .2rem .2rem;
  transition: .5s ease-in-out
}
.mfd__blog-list a:hover,
.mfd__blog-link:hover ,
.mfd-post__readmore-link:hover {
  background-color: #ee2b71;
  color: #ffffff;
}
</style>
