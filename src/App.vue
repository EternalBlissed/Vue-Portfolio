<template>
  <div id="app" class="flex-container">
    <vue-navigation-bar :options="navbarOptions" />

    <transition name="fade" mode="out-in">
      <div class="router-view-container">
        <router-view />
      </div>
    </transition>

    <div id="footer">
      <div id="footer-text">
        <p>
          Built with ♥ and
          <a href="https://vuejs.org/">Vue.js</a>. Proudly deployed on
          <a href="https://vercel.com/">Vercel</a> with APIs hosted on
          <a href="https://www.cloudflare.com/">Cloudflare</a>.
        </p>
        <p>
          This project was meticulously designed, coded, and deployed from scratch by Spencer Woo. It has since been forked by eternal, and is now available as open-source on GitHub. You can explore the repository at 
          <a href="https://github.com/spencerwooo/portfolio">Github</a>.
        </p>
        <p id="footer-copyright">©2024 - {{ getYear() }} Eternal</p>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-navigation-bar/dist/vue-navigation-bar.css'

export default {
  name: 'app',

  data() {
    return {
      navbarOptions: {
        elementId: 'main-navbar',
        mobileBreakpoint: 992,
        ariaLabelMainNav: 'Main Navigation',
        isUsingVueRouter: true,
        menuOptionsRight: [
          {
            type: 'link',
            text: 'HOME',
            path: '/',
          },
          {
            type: 'link',
            text: 'PROJECTS',
            path: '/projects',
          },
          {
            type: 'link',
            text: 'BLOG',
            path: '/blog',
          },
        ],
      },
    }
  },
  methods: {
    getYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style>

.flex-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.router-view-container {
  margin-top: 20px; 
  margin-bottom: 20px; 
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

transition {
  flex: 1;
}

.container {
  margin: 0px auto 0px auto;
  max-width: 664px;
  padding: 0px 20px 40px 20px;
}

#main-navbar {
  padding-right: 5px;
  background-color: rgba(0, 0, 0, 0.4);
}

.vnb__popup {
  background-color: #000;
}

.vnb__popup__bottom {
  background: #000;
}

.vnb__collapse-button img {
  width: 24px;
  height: 24px;
  padding-bottom: 3px;
}

.vnb__menu-options--right {
  margin-left: 0;
  padding-left: 10px;
}

.vnb__popup__top__close-button {
  padding-top: 10px;
}

.vnb__menu-options__option a {
  font-size: 15px;
}

.vnb__menu-options__option a:focus {
  outline: none;
}

.vnb__popup__bottom__menu-options__option__link {
  padding: 6px 24px;
}

.vnb__popup__bottom__menu-options__option__link:focus {
  border-left: 2px solid #fff;
}

.vnb__menu-options__option__link {
  cursor: pointer;
  font-weight: 500;
  color: #fff;
  transition: color 0.2s ease-in;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
}

.vnb__menu-options__option__link:hover {
  color: #fff;
  text-decoration: underline;
}

#footer {
  margin-top: auto;
  padding: 20px 20px;
  background-color: rgba(0, 0, 0, 0.5);
}

#footer p {
  color: var(--footer-color);
  line-height: initial;
}

#footer-text {
  margin: 0px auto;
  max-width: 664px;
  color: #ffffff;
}

#footer-text a,
#busuanzi_value_site_pv,
#footer-copyright {
  color: #ffffff;
  text-decoration: underline;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
