<template>
  <section  :class=" `wrapper ${tooglePosts ? 'active' : ''}` ">

    <h1>Активные Посты:</h1>

    <transition-group name="list" tag="div" class="categoryLists posts">

      <nuxt-link  v-for="post of posts" :key="post._id" tag="a" class=' post' :to="{name:'posts-id', params:{id:`${post._id}`}}">
       {{ post.title }} <button @click.prevent='delPost(post._id)'><i class="fas fa-trash"></i></button>
      </nuxt-link>

    </transition-group>

  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ActivePosts',

  methods: {
    ...mapActions({
      postsFetch: 'posts/fetchPosts',
      deletePost: 'posts/deletePost'
    }),
    async delPost(id){
      await this.deletePost(id)
      await this.PostsFetch()
    }
  },

	  computed: {
    ...mapGetters({
      posts: 'posts/posts',
      tooglePosts:'Main/posts'      
    })
  },

  async fetch () {
  	await this.postsFetch()
  }
}

</script>

<style scoped lang="scss">

		section{
		display: none;
    h1{
      @media (max-width:650px) {
        width: 100%;
      } 
    }
	}
	section.active{
		display: flex;
	}
</style>
