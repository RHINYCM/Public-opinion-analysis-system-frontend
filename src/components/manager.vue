<template>
	<div class="manage_page fillcontain">
		<el-row type="flex" justify="space-between" style="height:10% ;width:100%;background-color:#1C1C1C;color:white;font-size:30px;padding-top:13px;padding-left:10px">舆情监管系统beta1.0
			<el-dropdown menu-align='start' class="avator">
				<img src="../assets/img/personal-center.png" class="avator">
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item >首页</el-dropdown-item>
					<el-dropdown-item >退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</el-row>
		<el-row style="height: 90%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="home"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-menu-item index="logList"><i class="el-icon-upload"></i>数据爬取</el-menu-item>
					<el-menu-item index="emotionAnaly"><i class="el-icon-plus"></i>情感分析</el-menu-item>
					<el-menu-item index="topicSpecify"><i class="el-icon-edit"></i>主题挖掘</el-menu-item>
					<el-menu-item index="intelligentGuide"><i class="el-icon-share"></i>智能引导</el-menu-item>
					<el-menu-item index="adminSet"><i class="el-icon-setting"></i>设置</el-menu-item>
					<el-menu-item index="explain"><i class="el-icon-warning"></i>说明</el-menu-item>
					
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>

    export default {
		
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	.manage_page{
		
	}
	.avator{
		.wh(36px, 36px);
		border-radius: 50%;
		margin-right: 10px;
	}
</style>
