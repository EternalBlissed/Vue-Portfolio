<template>
  <div class="container">
    <div id="name-container">
      <img id="avatar" src="./../assets/images/av.jpg" alt="avatar" />
      <h1>EternalBliss <span class="pronoun-text">he/him</span></h1>
    </div>
    <div class="title-desc-container">
      <a id="github" href="https://github.com/eternalblissed" target="_blank" rel="noopener noreferrer"
        >Developer</a>
      <span>/</span>
      <a id="blog" href="https://blog.3tnl.xyz" target="_blank" rel="noopener noreferrer"
        >Blogger</a>
    </div>
    <div class="article">
    <h2>About Me</h2>
    <p>
        Hi I'm <span class="hover-change" data-original="Eternal!" data-hover="Marc!">Eternal!</span> I'm a self-taught developer and high school student.<br><br>

      I work as a full stack developer and have experience in a variety of languages and frameworks such as Python, Flask, JavaScript, TypeScript, Vue.js, React, Node.js, Express, Rust, C, and more.<br><br>

      You can view my current open source projects at <a href="http://3tnl.xyz/projects">3tnl.xyz/projects</a> and my blog at <a href="http://blog.3tnl.xyz">blog.3tnl.xyz</a>.
    </p>
    <h2>Tech Overview/Stack</h2>
    <div v-for="skillCategory in skills" :key="skillCategory.category">
      <h3>{{ skillCategory.category }}</h3>
      <ul>
        <li v-for="(item, index) in skillCategory.items" :key="`item-${index}`">
          <img :src="item.badge" alt="badge" /> 
        </li>
      </ul>
    </div>
     <h4>Please note I am not perfect in all areas of my tech stack, we're all still learning!</h4>
      <h2>My Public GPG Key</h2>
      <p>
        Below is my public GPG key. You can use it to encrypt messages to me, or verify that messages you receive from me are authentic. 
      </p>
      <p>
        I have my GPG public key located at
        <a href="http://3tnl.xyz/public_key.asc" target="_blank" rel="noopener noreferrer">staticly on this site</a>. You
        can pull and import my GPG public key with:
      </p>
      <pre>curl -L https://3tnl.xyz/public_key.asc | gpg --import</pre>
      <h2>Contacts</h2>
      <ul>
        <li>
          <b>Email：</b>
          <a href="mailto:3tnl-j@proton.me">3tnl-j@proton.me</a>
        </li>
        <li>
          <b>Discord：</b>
          <a href="https://discord.com">3tnl</a>
        </li>
      </ul>
      <div class="button">
        <a href="https://blog.3tnl.xyz" target="_blank" rel="noopener noreferrer">
          <img src="./../assets/images/buttons/noword88.png" alt="button" />
        </a>
        <a href="https://www.vim.org/" target="_blank" rel="noopener noreferrer">
          <img src="./../assets/images/buttons/neovim.gif" alt="button" />
        </a>
        <a href="https://www.nixos.org/" target="_blank" rel="noopener noreferrer">
          <img src="./../assets/images/buttons/gnu-linux.gif" alt="button" />
        </a>
        <a href="https://www.adobe.com/" target="_blank" rel="noopener noreferrer">
          <img src="./../assets/images/buttons/adobesvg.gif" alt="button" />
        </a>
        <a rel="noopener noreferrer">
          <img src="./../assets/images/buttons/anybrow.gif" alt="button" />
        </a>
        <a href="https://9front.org/" rel="noopener noreferrer">
          <img src="./../assets/images/buttons/abort.png" alt="button" />
        </a>
      </div>
      <!--<audio controls>
        <source src="../assets/audio/waves.flac" type="audio/flac">
        Your browser does not support the audio element.
      </audio>-->
    </div>
  </div>
</template>

<script>
import skillsData from '@/scripts/skills.js';

export default {
  name: 'Home',
  data() {
    return {
      skills: skillsData,
    };
  },
  mounted() {
    const hoverElements = document.querySelectorAll('.hover-change');

    hoverElements.forEach(element => {
      const originalText = element.dataset.original;
      const hoverText = element.dataset.hover;

      element.addEventListener('mouseover', function() {
        this.textContent = hoverText;
        });

      element.addEventListener('mouseout', function() {
        this.textContent = originalText;
      });
    })
  }
};

</script>

<style lang="css" scoped>
#name-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

audio {
  margin-top: 8px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0);
}

a {
  color: white; 
  text-decoration: underline; 
}

a:visited {
  color: white; 
}

.pronoun-text {
  font-size: 12px; 
  margin-left: -12.5px;
}

.button {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px; 
  margin-top: 16px;
}


#avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 12px;
}

#copyright:hover {
  border: none;
}

.title-font {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}

.title-desc-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 8px 0;
}

.title-desc-container a {
  display: flex;
  align-items: center;
}

.title-desc-container span {
  margin: 0px 4px;
}

.title-desc-container #github {
  color: #ffffff;
}

.title-desc-container #sspai {
  color: #ca2c2a;
}

.title-desc-container #blog {
  color: #ffffff;
}

.hover-change {
  text-decoration: underline dotted; 
}

h4 {
  font-size: 14px;
  margin-top: 8px;
  font-style: italic;
}

/* Shitty button implementation */
ul {
  display: flex;
  flex-wrap: wrap; 
  gap: 10px;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
}

img {
  display: block;
  width: 100%; 
  height: auto; 
}

</style>
