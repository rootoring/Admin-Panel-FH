<template>
	<header>

		<div class="burger" @click='switchMenu(true)'>
			<span></span>
			<span></span>
			<span></span>
		</div>

	<nuxt-link to="/"><p class="logo">Find<span>hub</span></p></nuxt-link>	

  	<button @click="exit()">Выйти</button></div>

	</header>

</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'

export default{
	name:'Header',
    computed:{
    ...mapGetters({
      user:'login/user',
    })
  },
  methods:{
        ...mapActions({
      logout:'login/logout',
    }),

    ...mapMutations({
      switchMenu:'Main/switchMenu',
    }),	    
        async exit(){
      await this.logout();
      this.$router.push('/Auth')
    },
  }
}	
</script>

<style scoped lang="scss">
header{
	display: flex;
	justify-content: space-between;
	background:#262626;
	padding: 0 15px;
	.burger{
		align-self:center;
		display: none;
		flex-direction: column;
		height: 30px;
		width: 50px;
		justify-content: space-between;
		@media (max-width: 768px) {
	display: flex;
	}
		span{
			height: 3px;
			width: 100%;
			background:#fff;
		}
	}
	.logo{
		padding:10px 10px
	}

	button{
		align-self:center;
		height: 25px;
		width: 50px;
	}
}
</style>