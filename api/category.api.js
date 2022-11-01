export default axios => ({
  async getAllCategory () {
    const { data } = await axios.get('/category/')
    return data
  },

  async getCategory (id) {
    const { data } = await axios.get(`/category/${id}`)
    return data
  },

  async createCategory (body) {
    const { data } = await axios.post(`/category/`, body)
    return data
  },
  async deleteCategory (id) {
    const { data } = await axios.delete(`/category/${id}`)
    return data
  },
  async createChildCategory (body) {
    const { data } = await axios.post(`/category/child`, body)
  },
  async deleteChildCategory (id) {
    const { data } = await axios.delete(`/category/child/${id}`)
    return data
  },

})
