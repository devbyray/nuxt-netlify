<template>
  <section class="container">
    <header class="mfd__header">
      <logo/>
      <navigation />
    </header>
    <Sidebar />
    <div class="mfd__content">
      <nuxt/>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navigation from '~/components/Navigation.vue'
import Sidebar from '~/components/Sidebar.vue'
export default {
  components: {
    Logo,
    Navigation,
    Sidebar
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
    /* grid-template-areas:
     "header header header"
     "content content sidebar"; */
  }

  .mfd__header  {
    grid-row: 1;
  }
  .mfd__content  {
    grid-row: 2;
  }
  .mfd__sidebar {
    grid-row: 3;
  }
  .mfd__header,
  .mfd__content,
  .mfd__sidebar {
    grid-column: 2/12;
  }

  @media screen
    and (min-width: 900px) {
    .mfd__header  {
      grid-row: 1;
      grid-column: 3/11;
    }
    .mfd__content  {
      grid-row: 3;
      grid-column: 3/9;
    }
    .mfd__sidebar {
      grid-row: 3;
      grid-column: 9/11
    }
  }


}
</style>
