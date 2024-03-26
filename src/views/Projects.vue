<template>
  <div class="container">
    <h1>Projects</h1>
    <p>Projects I participated in and/or developed.</p>

    <GitHubCard
      title="💚 Vue Portfolio"
      link="https://github.com/eternalblissed/vue-portfolio"
      :info="PortfolioInfo"
      :loading="loading">
      <p>My current portfolio, made using Vue.js 2</p>
    </GitHubCard>

    <GitHubCard
      title="🖥️ Eternal's Terminal"
      link="https://github.com/EternalBlissed/Eternals-Terminal"
      :info="TerminalInfo"
      :loading="loading">
      <p>Terminal based portfolio, made using React, Archived</p>
    </GitHubCard>

    <GitHubCard
      title="💻 Eternal's Desktop"
      link="https://github.com/EternalBlissed/Eternals-Desktop"
      :info="DesktopInfo"
      :loading="loading">
      <p>Void Linux styled portfolio, made using Next.js and Tailwind CSS, Archived</p>
    </GitHubCard>

    <GitHubCard
      title="📖 Eternal's Blog"
      link="https://github.com/EternalBlissed/eternals-blog"
      :info="BlogInfo"
      :loading="loading">
      <p>My Old Blog, Written in NextJs and MDX, Archived</p>
    </GitHubCard>

    <GitHubCard
      title="💡 Rusty Bot"
      link="https://github.com/eternalblissed/Rusty-Bot"
      :info="RustyInfo"
      :loading="loading">
      <p>A Discord bot written in Rust, using serenity</p>
    </GitHubCard>

    <GitHubCard
      title="💻 My dotfiles"
      link="https://github.com/eternalblissed/arch-dots"
      :info="dotfilesInfo"
      :loading="loading">
      <p>Configuration files for my Arch Hyprland Rice.</p>
    </GitHubCard>
  </div>
</template>

<script>
import axios from 'axios'
import GitHubCard from '@/components/GitHubCard.vue'

export default {
  components: {
    GitHubCard,
  },
  data() {
    return {
      loading: true,
      PortfolioInfo: {},
      TerminalInfo: {},
      DesktopInfo: {},
      BlogInfo: {},
      RustyInfo: {},
      dotfilesInfo: {},
    }
  },
  mounted() {
    this.fetchRepositoryInfo([
      { repo: 'eternalblissed/vue-portfolio', prop: 'PortfolioInfo' },
      { repo: 'EternalBlissed/Eternals-Terminal', prop: 'TerminalInfo' },
      { repo: 'EternalBlissed/Eternals-Desktop', prop: 'DesktopInfo' },
      { repo: 'EternalBlissed/eternals-blog', prop: 'BlogInfo' },
      { repo: 'eternalblissed/Rusty-Bot', prop: 'RustyInfo' },
      { repo: 'eternalblissed/arch-dots', prop: 'dotfilesInfo' },
    ])
  },
  methods: {
    fetchRepositoryInfo(repos) {
      const requests = repos.map(repo =>
        axios.get(`https://api.github.com/repos/${repo.repo}`)
      );

      axios.all(requests)
        .then(axios.spread((...responses) => {
          responses.forEach((response, index) => {
            this[repos[index].prop] = response.data;
          });
          this.loading = false;
        }))
    }
  }
}
</script>

<style scoped>
.container .github-project-card:not(:last-child) {
  margin-bottom: 40px;
}
</style>
