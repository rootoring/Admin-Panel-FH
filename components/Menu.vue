<template>
	<article class="menu">
		<ul>
			<li><nuxt-link to='/' exact active-class="active" class="category">Посты</nuxt-link></li>
			<li><nuxt-link to='/category' active-class="active" class="category">Категории</nuxt-link></li>
			<li><nuxt-link to='/' active-class="active" class="category">Пользователи</nuxt-link></li>
		</ul>
	</article>
</template>

<script>
export default{
	name:'Menu',

}	

</script>

<style scoped lang="scss">
	.menu{
		margin-right: 10px;
		display: flex;
		flex-direction: column;
		width: 20%;
		background: #262626;
		min-height: 100vh;

		ul{
			display: flex;
			flex-direction: column;

			li{
				margin-top: 15px;
			  font-family: 'Montserrat', sans-serif; 

				.category{
					padding:5px 10px;
					display: block;
					width: 100%;
					color: #fff;
					font-size: 25px;
					font-weight: 100;
					font-family: 'Exo 2', sans-serif;

					@media (max-width: 873px) {
						font-size: 20px;
					}
				}
				.active{
					background: #4FAAB3;
				}
			}
		}
		@media (max-width: 768px) {
	display: none;
	}
	}
</style>