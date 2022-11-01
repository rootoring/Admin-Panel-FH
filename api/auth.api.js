export default axios => ({
  async signUp (body) {
    const { data } = await axios.post('http://localhost:3002/api/v1/auth/signup', body)
    return data
  }
})
