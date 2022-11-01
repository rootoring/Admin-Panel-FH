<template>
	<div class="wrap">
		<h1>Категории</h1>

		<div class="createCategoryForm">
			<input v-model="parentCategory.title" placeholder="Название новой Категории">
			<button @click.prevent='newCategory({body:parentCategory})'  :disabled="isActiveBut">Создать</button>
		</div>

		<transition-group name="list" tag="div" class="categoryLists">
			<div v-for="category of categories" :key="category._id" class="categoryList" >
				<div class="parentCategory">
					{{category.title}} <button @click.prevent='delCategory(category._id)'><i class="fas fa-trash"></i></button>
				</div>

			<div class="createChildCategoryForm">
			<input v-model.lazy="childCategory.title" placeholder="Название новой Категории">
			<button @click.prevent='newChildCategory(category._id)'  :disabled="false">Создать</button>
		</div>
				<div v-for="child of category.childCategories" :key="child._id"> 
					{{ child.title }} <button @click.prevent='delChildCategory(child._id)'><i class="fas fa-trash"></i></button>
				</div>
			</div>
		</transition-group>

	</div>
</template>

<script>

	import { mapActions, mapGetters } from 'vuex'

	export default{
		name:'Category',
		data(){
			return{
				parentCategory:{
					title:'',
				},
				childCategory:{
					title:'',
					category_id:''
				}
			}
		},
		computed:{
    ...mapGetters({
      categories:'category/categories',
    }),
    isActiveBut(){
    	return this.parentCategory.title === '' 
    }
		},
		methods:{
			...mapActions({
				fetchCategories:'category/fetchCategories',
				createCategory:'category/createCategory',
				deleteCategory:'category/deleteCategory',
				createChildCategory:'category/createChildCategory',
				deleteChildCategory:'category/deleteChildCategory'
			}),

			async delCategory(id){
				await this.deleteCategory(id);
				await this.fetchCategories();
			},

			async delChildCategory(id){
				await this.deleteChildCategory(id);
				await this.fetchCategories();
			},

			async	newCategory(body){
				await this.createCategory(body);
				await this.fetchCategories();
			},

			async	newChildCategory(id){
				this.childCategory.category_id = id
				await this.createChildCategory({body:this.childCategory});
				this.childCategory.title = ''
				await this.fetchCategories();
			}
		},
  async fetch(){
    await this.fetchCategories();
  },
	}
</script>

<style scoped lang="scss">
	button{
		margin:0;
	}
	.wrap{
		width: 100%;
		min-height: 100vh;
		display: flex;
		padding:10px 5px;
		flex-direction: column;

		h1{
			font-size: 45px;
		}

		.createCategoryForm{
			display: flex;
			width: 50%;
			margin: 20px 0 20px 0 ;
 			box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
 			@media(max-width:768px){
						width: 95%;
						align-self:center;
					}
			input{
				width: 90%;
				padding:5px 8px;
				margin-right: 5px;
				border-radius: 3px;

					@media(max-width:768px){
						width: 80%;
					}
				}

			button{
				width: 15%;

				@media(max-width:768px){
				width: 20%;
				}	
			}
		}

		.categoryLists{
			display: flex;
			flex-direction: column;

			@media(max-width:768px){
						align-items:center;
					}		

			.categoryList{			
				display: flex;		
				margin-top: 8px;
				background: #fff;
				padding: 5px 8px;
				width: 50%;
				flex-direction: column;
				border-radius:3px;
				box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
				@media(max-width:768px){
						width: 90%;
					}	
						

      	.parentCategory{
      		display: flex;
      		justify-content: space-between;
	     		&:hover button{
		        opacity:1;
		        visibility:visible;
	    	  } 

					button{
						width: 40px;
						background-color:#FF8484;
						color: #fff;
						transition: .3s all;
						opacity: 0;
						visibility:hidden;

						@media(max-width:768px){
							visibility:visible;
							opacity: 1;
						}	

					}
				}


			}
		}
	}
</style>