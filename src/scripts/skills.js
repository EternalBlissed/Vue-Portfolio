const skillsData = [
    {
      category: "Operating Systems / Desktop Environments",
      items: [
        { name: "Arch Linux", badge: "https://img.shields.io/badge/Arch_Linux-1793D1?style=for-the-badge&logo=arch-linux&logoColor=white" },
        { name: "Android", badge: "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" },
        { name: "FreeBSD", badge: "https://img.shields.io/badge/freebsd-AB2B28?style=for-the-badge&logo=freebsd&logoColor=white" },
        { name: "NixOS", badge: "https://img.shields.io/badge/NixOS-5277C3?style=for-the-badge&logo=nixos&logoColor=white" },
        { name: "Hyprland", badge: "https://img.shields.io/badge/Hyprland-1C1C1C?style=for-the-badge&logo=rainmeter&logoColor=white" },
      ],
    },
    {
      category: "Languages",
      items: [
        { name: "C", badge: "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" },
        { name: "CSS3", badge: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
        { name: "HTML5", badge: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
        { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" },
        { name: "Lua", badge: "https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white" },
        { name: "Python", badge: "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" },
        { name: "TypeScript", badge: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" },
        { name: "Java", badge: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor" },
        { name: "Rust", badge: "https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white" },
        { name: "Shell Script", badge: "https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white" },
        { name: "Markdown", badge: "https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" },
        { name: "YAML", badge: "https://img.shields.io/badge/yaml-%23ffffff.svg?style=for-the-badge&logo=yaml&logoColor=151515" },
        { name: "PowerShell", badge: "https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white" },
        { name: "Nix", badge: "https://img.shields.io/badge/NIX-5277C3.svg?style=for-the-badge&logo=NixOS&logoColor=white" },
      ],
    },
    {
      category: "Editors",
      items: [
        { name: "VSCodium", badge: "https://img.shields.io/badge/VSCodium-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" },
        { name: "NeoVim", badge: "https://img.shields.io/badge/NeoVim-%2357A143.svg?&style=for-the-badge&logo=neovim&logoColor=white" },
      ],
    },
    {
        category: "Frameworks, Libraries and Services",
        items: [
          { name: "Bun", badge: "https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white" },
          { name: "Vue.js", badge: "https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08" },
          { name: "Flask", badge: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" },
          { name: "Next.js", badge: "https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" },
          { name: "React", badge: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
          { name: "Sass", badge: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" },
          { name: "Vercel", badge: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" },
          { name: "Electron", badge: "https://img.shields.io/badge/Electron-2B2E3A?style=for-the-badge&logo=electron&logoColor=9FEAF9" },
          { name: "Express.js", badge: "https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" },
          { name: "GitHub Pages", badge: "https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white" },
          { name: "npm", badge: "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" },
          { name: "Node.js", badge: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" },
          { name: "ngrok", badge: "https://img.shields.io/badge/ngrok-140648?style=for-the-badge&logo=Ngrok&logoColor=white" },
          { name: "Tailwind CSS", badge: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" },
          { name: "Yarn", badge: "https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" },
          { name: "Docker", badge: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" },
        ],
      },
      {
        category: "Databases",
        items: [
          { name: "MariaDB", badge: "https://img.shields.io/badge/MariaDB-003545?logo=mariadb&logoColor=fff&style=for-the-badge" },
          { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" }
        ],
      },
      {
        category: "Software",
        items: [
          { name: "Firefox", badge: "https://img.shields.io/badge/Firefox-FF7139?logo=firefox&logoColor=fff&style=for-the-badge" },
          { name: "Discord", badge: "https://img.shields.io/badge/Vesktop-5865F2?logo=discord&logoColor=fff&style=for-the-badge" },
          { name: "Obsidian", badge: "https://img.shields.io/badge/Obsidian-16161D?logo=obsidian&logoColor=fff&style=for-the-badge" },
          { name: "Slack", badge: "https://img.shields.io/badge/Slack-4A154B?logo=slack&logoColor=fff&style=for-the-badge" },
          { name: "OBS", badge: "https://img.shields.io/badge/OBS-302E31?style=for-the-badge&logo=obs-studio&logoColor=white" },
          { name: "Bitwarden", badge: "https://img.shields.io/badge/Bitwarden-175DDC?style=for-the-badge&logo=bitwarden&logoColor=white" },
          { name: "mpv", badge: "https://img.shields.io/badge/mpv-8855D4?style=for-the-badge&logo=mpv&logoColor=white" },
          { name: "zsh", badge: "https://img.shields.io/badge/Zsh-F15A24?logo=zsh&logoColor=fff&style=for-the-badge" },
        ],
      },
      {
        category: "Design Tools",
        items: [
          { name: "Adobe Photoshop", badge: "https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black" },
          { name: "GIMP", badge: "https://img.shields.io/badge/gimp-5C5543?style=for-the-badge&logo=gimp&logoColor=white" },
          { name: "Aseprite", badge: "https://img.shields.io/badge/Aseprite-7D929E?style=for-the-badge&logo=aseprite&logoColor=white" },
          { name: "Audacity", badge: "https://img.shields.io/badge/Audacity-0000CC?style=for-the-badge&logo=audacity&logoColor=white" },
        ],
      },
      {
        category: "Workspace",
        items: [
          { name: "Dell Inspiron 16 Plus 7630", badge: "https://img.shields.io/badge/Dell-Inspiron%2016%20Plus%207630-007DB8?style=for-the-badge&logo=dell&logoColor=white" },
          { name: "Dell XPS 9360", badge: "https://img.shields.io/badge/Dell-XPS%209360-007DB8?style=for-the-badge&logo=dell&logoColor=white" },
        ],
      }
]

export default skillsData;
