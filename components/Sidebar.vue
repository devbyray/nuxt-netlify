<template>
  <div class="mfd__sidebar">
      <aside>
          <ul class="mfd__sidebar-ul">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Content</a></li>
          </ul>
      </aside>
  </div>
</template>

<style>
.mfd__sidebar-ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
}
.mfd__sidebar-ul li {
  display: block;
  margin-bottom: .2rem;
}
.mfd__sidebar-ul a {
  font-size: .8rem;
  text-transform: uppercase;
  display: block;
  background: #efefef;
  padding: .5rem;
  text-decoration: none;
  transition: .3s ease-in-out;
}
.mfd__sidebar-ul a:hover {
  background: #333;
  color: #fff;
}
</style>
