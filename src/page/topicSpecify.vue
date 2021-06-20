<template>
    <div style="height:100%">
        <topic-pie :pieData="pieData" style="height:68%"></topic-pie>
		<el-row style="height:24%;background-color:#99a9bf;border-radius:10px;margin:10px 10px;">
        	<el-col :span='16' style="margin-left:40px;line-height:60px;padding-top:20px">
            	<el-input type=textarea v-model="input" placeholder="请输入推文" :autosize="{ minRows: 4, maxRows: 6}"></el-input>
        	</el-col>
        	<el-col :span='4' style="margin-left:150px;line-height:60px">
            	<el-button @click="sumbitData()">智能识别</el-button>
        	</el-col>
    	</el-row>
    </div>
</template>

<script>
	
    import topicPie from '@/components/topicPie'
	import TopicPie from '../components/topicPie.vue'
    export default {
    	data(){
    		return {
    			pieData: {},
				testData:{},
				input:''
    		}
    	},
    	components: {
    		
            topicPie,
        	TopicPie,
    	},
    	mounted(){
			this.axios.get('/api/test').then((res)=>{
            	
				//this.testData=res.data.main;
				console.log(res);
				this.pieData=res.data.data.result;
            });
    	},
    	methods: {
    		sumbitData () {
				let obj ={
					text:this.input,
					name:'ycm'
				}
				console.log(obj);
				var param = new FormData()
				//dataForm : 后台接受前端数据的参数名称
				param.append('dataForm', JSON.stringify(obj))
				this.axios.post('/api/test', param).then(({ data: res }) => {
	     		if (res.errorcode == 100) {
	     		//msg:后台传到前端的错误信息
				 	console.log(res);
	        		this.pieData=res.data.result;
	      		}
	 		}).catch(() => {})
}

    	}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	
</style>
