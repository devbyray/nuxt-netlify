<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=PT+Serif');
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css');
html {
  font-family: 'PT Serif', sans-serif;
  font-size: 1.1rem;
  line-height: 1.4;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

@media screen
  and (min-width: 600px) {
    html {
      font-size: 1.2rem;
    }
}
@media screen
  and (min-width: 900px) {
    html {
      font-size: 1.3rem;
    }
}
@media screen
  and (min-width: 1600px) {
    html {
      font-size: 1.4rem;
    }
}
body,
a {
  color: #333333;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

@media screen
  and (min-width: 900px)
  and (-webkit-min-device-pixel-ratio: 1) {
  .embed-youtube {
    margin-left: -3rem;
    margin-right: -3rem;
  }

}
.embed-youtube {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
}
.embed-youtube iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.container {
  /* min-height: 100vh; */
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding: 1rem;
}
.mfd__header {
  min-height: 100vh;
  background: #cccccc;
  margin-right: 1rem;
  padding: 1rem 2rem;
}
.mfd__blog-list {
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 8rem;
  max-width: 654px;
}
img {
  max-width: 100%;
}
</style>
