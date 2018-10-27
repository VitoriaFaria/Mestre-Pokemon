'use strict'

// informa todas rotas cadastradas
const getMenuActive = state => state.routes

const getItemsMenu = state => state.ComNavbar.sidebar.items

export {
  getMenuActive,
  getItemsMenu
}
