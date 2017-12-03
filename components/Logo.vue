<template>
  <div class="mfd__logo-wrapper">
    <a href="/">
      <img class="mfd__logo" src="~/static/icon.png" alt="">
    </a>
    <h1 class="mfd__title">Mr Frontend Blog</h1>
  </div>
</template>

<style>
.mfd__logo-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}
.mfd__title {
  margin: 0 0;
  font-size: 3rem;
}
.mfd__logo {
  margin-bottom: 1rem;
  max-width: 100px;
}
</style>
