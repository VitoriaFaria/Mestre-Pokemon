<template lang="pug">
  div
    b-navbar(type='dark', variant='primary' :toggleable='true')
      b-navbar-toggle(target='nav_dropdown_collapse')
      b-collapse(:is-nav='true', id='nav_dropdown_collapse')
        b-navbar-nav
          b-nav-item-dropdown(:text="$t('navbar.title')")
            b-dropdown-item(v-for='item in getItemsMenu', :key='item.path')
              router-link(:to='item.path')
                | {{ item.title | translate }}
</template>

<script>
// store
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getItemsMenu'
    ])
  }
}
</script>
