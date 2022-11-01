export const state = () => ({
  toogleMenu: false,
  tooglePosts: true,
})

export const actions = {

}

export const mutations = {
  switchMenu (state, status) {
    state.toogleMenu = status
  },
  switchPosts (state, status) {
    state.tooglePosts = status
  },  
}

export const getters = {
  menu(state){
    return state.toogleMenu;
  },
  posts(state){
    return state.tooglePosts;
  },  
}  
