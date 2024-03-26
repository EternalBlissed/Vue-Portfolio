<template>
  <div class="container">
    <p>
      Implementation of my old blog into this portfolio is WIP, For now you can find my blog
      <a href="https://blog.3tnl.xyz" target="_blank" rel="noopener noreferrer">here (click me!)</a>
    </p>
    <!--
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <router-link :to="`/blog/${post.slug}`">{{ post.data.title }}</router-link>
      </li>
    </ul>
    -->
  </div>
</template>

<script>
/*import grayMatter from 'gray-matter';

export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.loadPosts();
  },
  methods: {
    async loadPosts() {
      const context = require.context('../blog-pages', false, /\.md$/);
      const posts = context.keys().map((key) => {
        const content = context(key);
        const meta = grayMatter(content.default);
        return {
          slug: key.slice(2, -3),
          data: meta.data,
        };
      });
      this.posts = posts;
    },
  },
};*/
</script>

<style>
a {
  color: white; 
  text-decoration: underline; 
}

a:visited {
  color: white; 
  text-decoration: underline;
}
</style>
