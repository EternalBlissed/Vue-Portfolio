<template>
 <div class="container">
  <h1>Click <a href="https://blog.3tnl.xyz">here</a> if you're not being redirected</h1>
  </div>
</template>

{ /* Look there's far better management for redirecting users, I just don't know it yet ;) */}
<script>
export default {
  name: 'Blog',
  created() {
    window.location.href = 'https://blog.3tnl.xyz';
  }
}
</script>
