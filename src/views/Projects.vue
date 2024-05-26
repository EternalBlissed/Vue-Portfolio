<template>
  <div class="container">
    <h1>Projects</h1>
    <p>Projects I have participated in and/or developed.</p>

    <GitHubCard
      title="💚 Vue Portfolio"
      link="https://github.com/eternalblissed/vue-portfolio"
      :info="PortfolioInfo"
      :loading="loading">
      <p>My current portfolio, made using Vue.js 2.</p>
    </GitHubCard>

    <GitHubCard
      title="📚 Eternal's Blog"
      link="https://github.com/eternalblissed/vue-blog"
      :info="BlogInfo"
      :loading="loading">
      <p>My blog written in Vue.js 2.</p>
    </GitHubCard>

    <GitHubCard
      title="💡 Rusty Bot"
      link="https://github.com/eternalblissed/Rusty-Bot"
      :info="RustyInfo"
      :loading="loading">
      <p>A Discord bot written in Rust, using Serenity.</p>
    </GitHubCard>

    <GitHubCard
      title="👾 Nix Emulation Station"
      link="https://github.com/eternalblissed/emulation-station-nix"
      :info="NixESInfo"
      :loading="loading">
      <p>A Nix Dev-Shell Flake for all your emulation needs.</p>
    </GitHubCard>

    <GitHubCard
      title="❄️ NixOS Flake"
      link="https://github.com/eternalblissed/nixos-config"
      :info="NixOSInfo"
      :loading="loading">
      <p>My NixOS flake.</p>
    </GitHubCard>

    <GitHubCard
      title="📝 Nixvim Config"
      link="https://github.com/eternalblissed/nixvim"
      :info="NixvimInfo"
      :loading="laoding">
      <p>My Nixvim configuration packaged as a flake.</p>
    </GitHubCard>

    <GitHubCard
      title="⚫ Dwm Installer"
      link="https://github.com/EternalBlissed/dwm-installer"
      :info="DWMInfo"
      :loading="loading">
      <p>An automated installer for deploying my dwm configuration.</p>
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
      BlogInfo: {},
      RustyInfo: {},
      NixESInfo: {},
      NixOSInfo: {},
      NixvimInfo: {},
      DWMInfo: {},
    }
  },
  mounted() {
    this.fetchRepositoryInfo([
      { repo: 'eternalblissed/vue-portfolio', prop: 'PortfolioInfo' },
      { repo: 'eternalblissed/vue-blog', prop: 'BlogInfo' },
      { repo: 'eternalblissed/Rusty-Bot', prop: 'RustyInfo' },
      { repo: 'eternalblissed/dwm-installer', prop: 'DWMInfo' },
      { repo: 'eternalblissed/nixos-config', prop: 'NixOsInfo' },
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
