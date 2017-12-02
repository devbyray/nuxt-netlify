<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=PT+Serif');
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface');
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css');
html {
  font-family: 'PT Serif', sans-serif;
  font-size: 1rem;
  line-height: 1.4;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6 {
  font-family: "Abril Fatface", Helvetica;
}

@media screen
  and (min-width: 600px) {
    html {
      font-size: 1.1rem;
    }
}
@media screen
  and (min-width: 900px) {
    html {
      font-size: 1.2rem;
    }
}
@media screen
  and (min-width: 1600px) {
    html {
      font-size: 1.3rem;
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
  flex-direction: column;
  overflow: hidden;
  padding: 1rem;
}
.mfd__header {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  align-items: center;
}
.mfd__blog-list {
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 724px;
  margin: 0 auto
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
