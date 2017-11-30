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
      font-size: 1.4rem;
    }
}
@media screen
  and (min-width: 1600px) {
    html {
      font-size: 1.6rem;
    }
}
body {
  color: #f9f9f9;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.title {
  display: block;
  font-size: 3rem;
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
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  overflow: hidden;
}
</style>
