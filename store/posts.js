export const state = () => ({
  posts: [],
  post: {},
  draftPosts: [],
  draftPost: {}
})

export const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  },
  setPost (state, post) {
    state.post = post
  },
  setDraftPosts (state, posts) {
    state.draftPosts = posts
  },  
}

export const actions = {
  async fetchPosts ({ commit }) {
    const posts = await this.$api.postsApi.getAllPosts()
    commit('setPosts', posts.posts)
  },
  async fetchPost ({ commit, dispatch }, id) {
    const post = await this.$api.postsApi.getPost(id)
    commit('setPost', post)
  },
  async fetchDraftPosts ({ commit }) {
    const posts = await this.$api.postsApi.getDraftPosts()
    commit('setDraftPosts', posts.posts)
  }, 
  async createPost ({ dispatch }) {
    const posts = await this.$api.postsApi.createPost()
  }, 
  async updatePost ({ dispatch },{ body, post_id}) {
    const posts = await this.$api.postsApi.updatePost( body, post_id )
  },   
  async deletePost ({ dispatch }, id ) {
    console.log(id)
    const posts = await this.$api.postsApi.deletePost( id )
    console.log(id)
  },  

}

export const getters = {
  posts (state) {
    return state.posts
  },
  post (state) {
    return state.post
  },
  draftPosts (state) {
    return state.draftPosts
  }
}
