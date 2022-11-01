export const state = () => ({
  category:{},
  categories:[],
})

export const mutations = {
  setCategory(state, category){
    state.category = category;
  },
  setCategories(state, categories){
    state.categories = categories;
  },  
}

  export const actions = {
    async fetchCategory({commit},{ id }){
      try{ 
      commit('main/toogleLoader',true, {root: true});  
        const category = await this.$api.categoryApi.getCategory(id);
         commit('main/toogleLoader',false, {root: true});
        commit('setCategory', category);
        return category
      }catch(err){
         commit('main/toogleLoader',false, {root: true});
        commit('main/setMessage',{ text:err, color:'red', active:true }, { root: true });
      }
    },

    async fetchCategories({commit}){
      try{  commit('main/toogleLoader',true, {root: true}); 
        const categories = await this.$api.categoryApi.getAllCategory();
         commit('main/toogleLoader',false, {root: true});
        commit('setCategories', categories);
        return categories
      }catch(err){
         commit('main/toogleLoader',false, {root: true});
        commit('main/setMessage',{ text:err, color:'red', active:true }, { root: true });
      }
    },

    async createCategory({dispatch}, {body}){
      try{ 
        const category = await this.$api.categoryApi.createCategory(body);
        return category
      }catch(err){
        console.log(err.message);
        commit('main/toogleLoader',false, {root: true});
        commit('main/setMessage',{ text:err, color:'red', active:true }, { root: true });
      }      
    },

    async deleteCategory({dispatch}, id){
      try{ 
        console.log(id)
        const category = await this.$api.categoryApi.deleteCategory(id);
        return category
      }catch(err){
        console.log(err.message);

      }      
    },

    async createChildCategory({dispatch}, {body}){
      try{ 
        console.log(body.title)
        const category = await this.$api.categoryApi.createChildCategory(body);
        return category
      }catch(err){
        console.log(err.message);
        commit('main/toogleLoader',false, {root: true});
        commit('main/setMessage',{ text:err, color:'red', active:true }, { root: true });
      }  
    }, 
    async deleteChildCategory({dispatch}, id){
      try{ 
        console.log(id)
        const category = await this.$api.categoryApi.deleteChildCategory(id);
        return category
      }catch(err){
        console.log(err.message);

      }      
    },

  }

export const getters = {
  category(state){
    return state.category
  },
  categories(state){
    return state.categories
  },  
}  

