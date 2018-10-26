<template lang="pug">
  div
    b-navbar(type='dark', variant='primary' :toggleable='true')
      b-navbar-toggle(target='nav_dropdown_collapse')
      b-collapse(:is-nav='true', id='nav_dropdown_collapse')
        b-navbar-nav
          b-nav-item Home
</template>

<script>
export default {

}
</script>
