<template>
  <div class="github-project-card">
    <h3>
      <a :href="link">{{ title }}</a>
    </h3>
    <slot> </slot>

  </div>
</template>

<script>
//import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'GitHubCard',
  //components: {
  //  ContentLoader,
  //},
  props: {
    loading: Boolean,
    title: String,
    link: String,
    info: {
      stargazers_count: Number,
      forks_count: Number,
    },
  },
}
</script>

<style scoped>
h3 {
  font-size: 18px;
  padding: 18px 0 0 0;
  margin: 0;
}

h3 a {
  color: #fff;
}

.github-project-card {
  position: relative;
  background-color: rgba(0,0,0,0.5);
  border-radius: 10px;
  padding: 0 20px 20px 20px;
  transition: 0.3s;
  background-image: -webkit-repeating-radial-gradient(
    center center,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1) 1px,
    transparent 0,
    transparent 100%
  );
  background-size: 20px 20px;
}

.github-project-card:hover {
  -webkit-box-shadow: 0px 10px 40px -10px #e6e6e6;
  -moz-box-shadow: 0px 10px 40px -10px #e6e6e6;
  box-shadow: 0px 10px 40px -10px #e6e6e6;
}

.github-project-card p {
  line-height: 25px;
}

.github-repo-stats {
  height: 16px;
}

.github-repo-stats a {
  color: #000;
  padding-right: 20px;
  font-size: 14px;
}

.github-repo-stats a:hover {
  border: none;
}

#github-stats {
  position: absolute;
  left: 0;
  bottom: 0;
  padding-left: 20px;
  padding-bottom: 20px;
}

.octicon {
  vertical-align: text-top;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
