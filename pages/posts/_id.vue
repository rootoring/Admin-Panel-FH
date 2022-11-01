<template>
  <div class="contaner">
    <form>
      <textarea v-model="editPost.title" class="forms"> {{ editPost.title }} </textarea>
      <textarea v-model="editPost.data" class="forms"> {{ editPost.data }} </textarea>
      <textarea v-model="editPost.imageurl" class="forms"> {{ editPost.imageurl }} </textarea>
      <textarea v-model="editPost.alt" class="forms"> {{ editPost.alt }} </textarea>
      <textarea v-model="editPost.description" class="forms"> {{ editPost.description }} </textarea>
      <textarea id="" name="" cols="50" rows="10" v-model="editPost.html" v-html="editPost.html"></textarea>
      <div class="radio">
       <input type="checkbox" id="checkbox" v-model=" editPost.actively">
       <label for="checkbox" v-if="editPost.actively">Пост Активен</label>
       <label for="checkbox" v-else>Пост в Черновике</label>
      </div>

      <ul class="forms">
      <li v-for="category of perantCategories" :key='category._id'>
        <input type="checkbox" :id="category._id"  v-model="editPost.categories" :value="category._id">
        <label :for="category._id">{{category.title}}</label>

        <div v-for="child of category.childCategories" :key="child._id"  > 
          <input type="checkbox" :id="child._id"  v-model="editPost.categories" :value="child._id">
          <label :for="child._id">{{child.title}}</label>
      </div>
      </li>
    </ul>

    </form>


    <div class="postButton">
      <button @click.prevent=" updatePost( {body: editPost, post_id: post._id} ) " type="submit">Update POST</button>
      <button @click.prevent=" deletepost( post._id ) " type="submit" class="delete">DELETE POST</button>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Post',

  data(){
    return{
      editPost: {
        title: "",
        description: "",
        data: "",
        imageurl:"",
        alt: "",
        actively:"",
        categories:[]
      },
    }
  },

  computed: {
    ...mapGetters({
      post: 'posts/post',
      perantCategories:'category/categories'
    }) 
  },

  methods:{
    copyPost(){
     this.editPost = JSON.parse(JSON.stringify(this.post))
    },
    ...mapActions({
      updatePost: 'posts/updatePost',
      deletePost: 'posts/deletePost',
      fetchCategories:'category/fetchCategories',
    }),

    async deletepost(id){
      await this.deletePost(id);
      this.$router.push('/')
    } 
  },

  async mounted(){
   await this.copyPost()
   await this.fetchCategories()
  },

  async fetch ({ store, params }) {
    await store.dispatch('posts/fetchPost', params.id)
  } 
}
</script>

<style scoped lang="scss">
.forms{
  background: #262626;
  margin-top: 10px;
  padding: 10px 15px;
  width: 70%;
  color: #fff;
  border-radius:5px;
  @media (max-width:768px) {
    width: 90%;
  }  
}
  .contaner{
    display: flex;
    flex-direction: column;
    width: 100%;
    form{
      display: flex;
      flex-direction: column;

     @media (max-width:768px) {
        align-items: center;
      }  

      textarea{
        background: #262626;
        margin-top: 10px;
        padding: 10px 15px;
        width: 70%;
        color: #fff;
        border-radius:5px;
       @media (max-width:768px) {
        width: 90%;
      }  
  
      }

      .radio{
        display: flex;
        background: #262626;
        width: 20%;
        margin-top: 10px;
        padding:10px 15px;
        border-radius:5px;
        color: #fff;
        @media (max-width:768px) {
        width:50% ;
        }
      }

      ul{
      display: flex;
      flex-direction: column;
        li+li{
          margin-top: 5px;
          padding-top:5px;
          border-top: .5px solid #7A7A7A;
        }
        li{
          label{
            display: inline-block;
            width: 97%;
            transition: .2s all;
            padding: 8px;
            cursor: pointer;
            &:hover{
              background:#626262; 
            }
          }
        }
      }
    }  

  
    .postButton{
      margin-top: 20px;
      display: flex;
      width: 100%;

      @media (max-width:768px) {
       justify-content: center;
      } 
      button{
        border-radius:5px;
        color: #fff;
        margin-left: 5px;
      }

      .delete{
        background: #DF2326;
       }
    }
  }
</style> 