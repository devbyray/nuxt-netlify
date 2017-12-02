<template>
  <div class="mfd__navigation">
      <nav>
          <ul class="mfd__navigation-ul">
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Content</a></li>
          </ul>
      </nav>
  </div>
</template>

<style>

.mfd__logo {
  color: #333;
}
.mfd__logo h1 {
  font-size: 3rem;
}
.mfd__navigation {
  padding-top: 2rem;
}
.mfd__navigation-ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.mfd__navigation a {
  font-size: .8rem;
  text-transform: uppercase;
  display: inline-block;
  background: #efefef;
  padding: .5rem;
  text-decoration: none;
  transition: .3s ease-in-out;
  margin: 0 .2rem;
}
.mfd__navigation a:hover {
  background: #333;
  color: #fff;
}
</style>
