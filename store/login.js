export const state = () => ({
  user: process.server ? {} : localStorage.getItem('user') || {},
})

export const actions = {

  async signIn({commit, dispatch}, body){
    try{
      commit('main/toogleLoader',true, {root: true});   
      const { data } = await this.$auth.loginWith('local', { data: body })
      const loginUser = data;
      commit('main/toogleLoader',false, {root: true});
      commit('main/setMessage',{ text:loginUser.message, color:'#00d1a0', active:true }, { root: true });
    }catch(err){
      commit('main/toogleLoader',false, {root: true});
      commit('main/setMessage',{ text:'Логин или пароль не подходит', color:'red', active:true }, { root: true });
    }
  },

  async logout({commit}){
    try{ 
      commit('main/toogleLoader',true, {root: true});  
      await this.$auth.logout()
      commit('main/toogleLoader',false, {root: true});
      commit('main/setMessage',{ text:logoutUser.message, color:'#00d1a0', active:true }, { root: true });
    }catch(err){
      commit('main/toogleLoader',false, {root: true});
      commit('main/setMessage',{ text:'Вы не авторизованы', color:'red', active:true }, { root: true });
    }
  }
}

export const getters = {
  user(state){
    return state.user;
  },
}  
