export default axios => ({

  async getAllPosts () { 
    const { data } = await axios.get('/posts')
    return data
  },

  async getPost (id) {
    const { data } = await axios.get(`/posts/${id}`)
    return data
  },

  async getDraftPosts () { 
    const { data } = await axios.get('/posts/draft/all')
    return data
  }, 

  async createPost () { 
    const { data } = await axios.post('/posts/')
    return data
  },

  async updatePost (body, post_id) {
    const { data } = await axios.put(`/posts/${post_id}`, body)
    return data
  },

  async deletePost (id) {
    const { data } = await axios.delete(`/posts/${id}`)
    return data
  },  
})