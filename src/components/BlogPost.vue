<template>
  <div v-html="renderedContent"></div>
</template>

<script>
import grayMatter from 'gray-matter';
import markdownIt from 'markdown-it';

export default {
  props: ['slug'],
  data() {
    return {
      content: '',
    };
  },
  computed: {
    renderedContent() {
      return markdownIt().render(this.content);
    },
  },
  watch: {
    slug(newVal) {
      if (newVal) {
        this.loadPost();
      }
    },
  },
  created() {
    if (this.slug) {
      this.loadPost();
    }
  },
  methods: {
    async loadPost() {
      if (!this.slug) {
        /*eslint-disable*/1
        console.error('Slug is undefined, cannot load post.');
        return;
      }
      const context = require.context('../blog-pages', false, /\.md$/);
      const path = `./${this.slug}.md`;
      try {
        const content = context(path);
        const { content: markdownContent } = grayMatter(content.default);
        this.content = markdownContent;
      } catch (error) {
        console.error('Error loading the post:', error);
      }
    },
  },
};
</script>
