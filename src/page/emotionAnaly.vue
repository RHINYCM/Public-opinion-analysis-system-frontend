<template>
    <div>
        <header class="section_title" style="margin-top:100px">情感分析</header>
        <el-row style="margin-top: 20px;">
  			<el-col :span="16" :offset="3">
		        <el-form :model="formData"  ref="formData" label-width="110px" class="demo-formData">
					<el-form-item label="推文内容" prop="name">
						<el-input type="textarea" v-model="formData.text" :autosize="{ minRows: 8, maxRows: 16}"></el-input>
					</el-form-item>

					<el-form-item class="button_submit">
						<el-button type="primary" @click="sumbitData()">分析情感极性</el-button>
					</el-form-item>
					
					<div>
						<p style="float:left;margin-right:50px">正向</p>
						<el-progress style="float:left;width:750px" type="line" :text-inside="true" :stroke-width="27" :percentage="per1" status="success"></el-progress>
					</div>
					<div>
						<br>
					</div>
					<br>
					<div>
						<p style="float:left;margin-right:50px">负向</p>
						<el-progress style="float:left;width: 750px;" :text-inside="true" :stroke-width="27" :percentage="per" status="exception"></el-progress>
					</div>
					
					
				</el-form>
  			</el-col>
  		</el-row>
    </div>
</template>

<script>
    
    import {cityGuess, addShop, searchplace, foodCategory} from '@/api/getData'
    import {baseUrl, baseImgPath} from '@/config/env'
    export default {
    	data(){
    		return {
    			per:0,
				per1:0,
				city: {},
    			formData: {
					text:''
		        },
		        
    		}
    	},
    	components: {
    		
    	},
    	mounted(){
    		
    	},
    	methods: {
    		
			sumbitData(){
				let obj={
					text:this.formData.text,
				}
				console.log(obj);
				var param = new FormData()
				param.append('dataForm',JSON.stringify(obj))
				this.axios.post('/api/emotion',param).then(({data:res})=>{
					if(res.errorcode == 100){
						console.log(res);
						this.per1=res.data.persent;
						this.per=100-this.per1;
					}
				}).catch(()=>{})
			}
		}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.button_submit{
		text-align: center;
	}
	.section_title{
			text-align: center;
			font-size: 25px;
			margin-bottom: 10px;
			margin-top: 10px;
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
	.el-table .info-row {
	    background: #c9e5f5;
	}

	.el-table .positive-row {
	    background: #e2f0e4;
	}
</style>
