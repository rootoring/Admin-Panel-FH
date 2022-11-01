<template>
	<section>	
	<p class="logo">Find<span>hub</span></p>
		<div class="auth">
				<form ref="login">
					<h2>Вход</h2>
					<input v-model="signInData.email" placeholder="Email" type="email"/>
					<input v-model="signInData.password" placeholder="Пароль" type="password"/>
					<button @click.prevent="login(signInData)" type="submit">Войти</button>
				</form>
		</div>
	</section>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {			
  name: 'Auth',
  layout:'auth',
  data(){
  	return{
  		signInData:{
  			email:'',
  			password:'',
  		},
  	}
  },
  computed:{
  	...mapGetters({
  		user:'login/user',
  		posts:'posts/posts',
  	})
  },
  methods:{
  	...mapActions({
  		signIn:'login/signIn',
  	}),
  	async login(data){
  		await this.signIn(data);
  		this.$router.push('/')
  	},
  },
	mounted(){
		window.scrollTo(0,0);
	},
	head() {
    return {
      title: "Вход | Findhub",
    }
  }
}
</script>

<style scoped lang="scss">
section{
	display: flex;
	flex-direction: column;
	align-items:center;

	.logo{
		position: absolute;
		margin-top: 50px;
	}
}

.auth{
	width:100%;
	height: 100vh;
	display: flex;
	align-items:center;
	justify-content: center;
	background:#262626;
	flex-direction: column;

	form{
		display: flex;
		flex-direction: column;
		width: 25%;
		@media (max-width: 768px) {
			width: 60%;
		}

		h2{
			font-size: 32px;
			padding-bottom: 15px;
			color: #fff;
		}
		input{
			padding: 0 5px;
			font-size: 16px;
			margin-top: 5px;
			width: 100%;
			height: 30px;
			border-radius:3px
		}
		input:hover{
			background: 	#4FAAB3;
		} 		
	}
}

</style>