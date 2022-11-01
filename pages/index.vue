<template>
  <main>
    <button @click.prevent="createNewPost()" class="button_newPost">New Post</button>
    <div class="swicherPosts"> 
      <button :class=" `${activeSwitch ? 'active' : ''}` " @click="switchPosts(true)">Активные посты</button>
      <button :class=" `${disactiveSwitch ? 'active' : ''}` " @click="switchPosts(false)">Черновик</button>
    </div>
    <div class="flex">
      <ActivePosts />
      <DraftPosts />
    </div>
</main>
</template>

<script>

import { mapGetters, mapMutations, mapActions } from "vuex"

export default {

  name: 'IndexPage',
  components: {
    ActivePosts: () => import('@/components/ActivePosts'),
    DraftPosts: () => import('@/components/DraftPosts')
  },
  computed:{
  ...mapGetters({
    activeSwitch:'Main/posts'
  }),
  disactiveSwitch(){
    if(this.activeSwitch == false){
      return true;
    }
    return false;
  }
  },

  methods:{
    ...mapMutations({
      switchPosts:'Main/switchPosts',
    }),
    ...mapActions({
      createPost:'posts/createPost',
      draftPostsFetch: 'posts/fetchDraftPosts'
    }),
    async createNewPost(){
      await this.createPost();
      await this.draftPostsFetch();
    }
  },   
}
</script>

<style scoped lang="scss">
  main{
    width: 100%;
    display: flex;
    flex-direction: column;

    .button_newPost{
      align-self:center;
      width: 15%;
      border-radius: 5px;
      color: #fff;
    }
    
    .swicherPosts{
      align-self:center;
      width: 15%;
      display: flex;
      background:rgba(#8B8893, .7);
      border-radius:5px; 
      align-items:center;
      justify-content: center;
      padding: 3px 5px;
      margin-top: 8px;
      transition: .9s all ease;
      button.active{
        background: #4FAAB3;
        color: #fff;
      }

      button{
        background:none;
        border-radius:20px;
        width: 50%;
        margin: 0;
        line-height:12px;
      }button:hover{
        background:#D7D4DF;
      }
    }

    .button_newPost, .swicherPosts{
      @media (max-width:1200px) {
        width: 25%;
      }
      @media (max-width:650px) {
        width: 50%;
      }      
    }

    .flex{
      width: 100%;
      margin-top: 30px;
    }
  }
</style>
