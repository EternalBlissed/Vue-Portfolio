<template>
  <div class="container">
    <div id="name-container">
      <img id="avatar" src="./../assets/images/av.jpg" alt="avatar" />
      <h1>EternalBliss <span class="pronoun-text">he/him</span></h1>
    </div>
    <div class="title-desc-container">
      <a id="github" href="https://github.com/eternalblissed" target="_blank" rel="noopener noreferrer"
        >Developer</a
      >
      <span>/</span>
      <a id="blog" href="https://blog.eternalbliss.lol" target="_blank" rel="noopener noreferrer"
        >Blogger</a
      >
    </div>
    <div class="article">
    <h2>Who am I?</h2>
    <p>
      I'm Eternal, a high school student pursuing a career in machine learning.<br>
      I have a special place in my heart for FLOSS and Unix-based operating systems.<br>
      I use <a href="https://archlinux.org/">Arch (btw)</a> with <a href="https://hyprland.com/">Hyprland</a> on my main work laptop and gaming PC, and <a href="https://voidlinux.org/">Void</a> + <a href="https://gentoo.org/">Gentoo</a> with i3 and sway on my secondary laptop.<br>
      I mainly write in <a href="https://www.typescriptlang.org/">Typescript</a> but also <a href="https://www.python.org/">Python</a>, <a href="https://www.rust-lang.org/">C</a>, and <a href="https://www.rust-lang.org/">Rust</a>.
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
    <!-- <h4>Please note I am not perfect in all areas of my tech stack, we're all still learning!</h4> -->
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
  font-size: 12px; /* Adjust the font size as desired */
  margin-left: -12.5px;
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

h4 {
  font-size: 12px;
  font-style: italic;
  margin: 0;
}
</style>
