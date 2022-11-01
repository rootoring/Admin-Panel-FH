<template>
  <section :class=" `wrapper ${statusPost ? 'active' : ''}` ">
    <h1>Черновик:</h1>
    <transition-group name="list" tag="div" class="categoryLists posts">

      <nuxt-link  v-for="post of draftPosts" :key="post._id" tag="a" class='post' :to="{name:'posts-id', params:{id:`${post._id}`}}">
       {{ post.title }} <button @click.prevent='delPost(post._id)'><i class="fas fa-trash"></i></button>
      </nuxt-link>

    </transition-group>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DraftPosts',

  methods: {
    ...mapActions({
      draftPostsFetch: 'posts/fetchDraftPosts',
      deletePost: 'posts/deletePost'
    }),
    async delPost(id){
      await this.deletePost(id)
      await this.draftPostsFetch()
    }
  },

	computed: {
    ...mapGetters({
      draftPosts: 'posts/draftPosts',
      tooglePosts:'Main/posts'
    }),

    statusPost(){
    	if (this.tooglePosts == false) {
    		return true;
    	}else{return false}
    	
    }     
  },

  async fetch () {
  	await this.draftPostsFetch()
  }
}

</script>

<style scoped lang="scss">
	section{
		display: none;
	}
	section.active{
		display: flex;
	}

</style>
