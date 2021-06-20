<template>
    <div>
     	<header class="section_title">智能引导</header>
        <el-row style="margin-top: 20px;">
  			<el-col :span="14" :offset="4">
  				
	  			<el-form  label-width="110px" class="form food_form">
	  				<el-form-item label="推文内容" prop="name">
						<el-input type="textarea" v-model="text" :autosize="{ minRows: 6, maxRows: 10}"></el-input>
					</el-form-item>
					<el-form-item label="" style="white-space: nowrap;">
						<span>点赞 </span>
						<el-switch on-text="" off-text="" v-model="like"></el-switch>
						<span>   转发</span>
						<el-switch on-text="" off-text="" v-model="tran"></el-switch>
						
					</el-form-item>
					
					
					<el-form-item label="风格迁移">
						<el-radio class="radio" v-model="radio" label="1">是</el-radio>
  						<el-radio class="radio" v-model="radio" label="2">否</el-radio>
					</el-form-item>

					<el-form-item label="抽取素材库">
						<el-radio class="radio" v-model="db" label="1">是</el-radio>
  						<el-radio class="radio" v-model="db" label="2">否</el-radio>
					</el-form-item>

					<el-form-item>
						<el-button type="primary" @click="getreply()">生成引导评论</el-button>
						<el-row>
							<el-col :span="24">
								<div class="replybox">{{reply}}</div>
							</el-col>
						</el-row>
					</el-form-item>
					
					
					<el-form-item>
						<el-button type="primary" @click="handle()">引导</el-button>
					</el-form-item>
	  			</el-form>
	  			
  			</el-col>
  		</el-row>
    </div>
</template>

<script>
 	
    import {getCategory, addCategory, addFood} from '@/api/getData'
    import {baseUrl, baseImgPath} from '@/config/env'
    export default {
    	data(){
    		return {
    			like:false,
				tran:false,
				radio:'0',
				db:'0',
				text:'',
				reply:'',
    			
    
    		}
    	},
    	components: {
    		
    	},
    	created(){
    		
    		this.initData();
    	},
    	computed: {
    		selectValue: function (){
    			return this.categoryForm.categoryList[this.categoryForm.categorySelect]||{}
    		}
    	},
    	methods: {
    		getreply(){
				let obj ={
					text:this.text,
					radio:this.radio,
					db:this.db,
					name:'ycm'
				}
				if(this.db==1){
					var param = new FormData()
					//dataForm : 后台接受前端数据的参数名称
					param.append('dataForm', JSON.stringify(obj))
					this.axios.post('/api/db', param).then(({ data: res }) => {
					if (res.errorcode == 100) {
					//msg:后台传到前端的错误信息
						console.log(res);
						this.reply=res.data.reply;
						//this.pieData=res.data.result;
					}
				}).catch(() => {})
				}
				else{
					console.log(obj);
					var param = new FormData()
					//dataForm : 后台接受前端数据的参数名称
					param.append('dataForm', JSON.stringify(obj))
					this.axios.post('/api/guide', param).then(({ data: res }) => {
					if (res.errorcode == 100) {
					//msg:后台传到前端的错误信息
						console.log(res);
						this.reply=res.data.reply;
						//this.pieData=res.data.result;
					}
				}).catch(() => {})
				}
				
			},
			handle(){
				this.text='';
				this.reply='';
				this.like=false;
				this.tran=false;
				
			}
		    
		}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.replybox{
		margin-top: 20px;
		min-height: 100px;
		border-radius: 10px;
		border:solid 1px black;
		
	}
	.form{
		min-width: 400px;
		margin-bottom: 30px;
		&:hover{
			box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
			border-radius: 6px;
			transition: all 400ms;
		}
	}
	.section_title{
			text-align: center;
			font-size: 25px;
			margin-bottom: 10px;
			margin-top:10px;
		}
	.food_form{
		border: 1px solid #eaeefb;
		padding: 10px 10px 0;
	}
	.form_header{
		text-align: center;
		margin-bottom: 10px;
	}
	.category_select{
		border: 1px solid #eaeefb;
		padding: 10px 30px 10px 10px;
		border-top-right-radius: 6px;
		border-top-left-radius: 6px;
	}
	.add_category_row{
		height: 0;
		overflow: hidden;
		transition: all 400ms;
		background: #f9fafc;
	}
	.showEdit{
		height: 185px;
	}
	.add_category{
		background: #f9fafc;
		padding: 10px 30px 0px 10px;
		border: 1px solid #eaeefb;
		border-top: none;
	}
	.add_category_button{
		text-align: center;
		line-height: 40px;
		border-bottom-right-radius: 6px;
		border-bottom-left-radius: 6px;
		border: 1px solid #eaeefb;
		border-top: none;
		transition: all 400ms;
		&:hover{
			background: #f9fafc;
			span, .edit_icon{
				color: #20a0ff;
			}
		}
		span{
			.sc(14px, #999);
			transition: all 400ms;
		}
		.edit_icon{
			color: #ccc;
			transition: all 400ms;
		}
	}
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
	    border-color: #20a0ff;
	}
	.avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 120px;
	    height: 120px;
	    line-height: 120px;
	    text-align: center;
	}
	.avatar {
	    width: 120px;
	    height: 120px;
	    display: block;
	}
	.cell{
		text-align: center;
	}
</style>
