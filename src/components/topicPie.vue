<template>
    <div class="visitorpie">
        <div id="visitorpie" class="" style="width: 90%;height:500px;"></div>
    </div>
</template>

<script>
    import echarts from 'echarts/lib/echarts';
    // 引入柱状图
    import 'echarts/lib/chart/pie';
    import 'echarts/lib/component/title';
    import 'echarts/lib/component/legend';
    
    export default {
        mounted(){
            this.myChart = echarts.init(document.getElementById('visitorpie'));
            this.initData();
        },
        props: ['pieData'],
        methods: {
            initData(){
                const option = {
                    title : {
                        text: '话题预测',
                        subtext: '',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: [
                            '新疆棉花',
                            '种族灭绝',
                            '集中营',
                            '抵制北京冬奥',
                            '绝育',
                            '人权',
                            '穆斯林国家',
                            '文化信仰',
                            '语言',
                            ]
                    },
                    series : [
                        {
                            name: '话题：',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '50%'],
                            data:[
                                {value:this.pieData.cotton, name:'新疆棉花'},
                                {value:this.pieData.genocide, name:'种族灭绝'},
                                {value:this.pieData.camps, name:'集中营'},
                                {value:this.pieData.olympics, name:'抵制北京冬奥'},
                                {value:this.pieData.sterilizations, name:'绝育'},
                                {value:this.pieData.humanright, name:'人权'},
                                {value:this.pieData.muslim, name:'穆斯林国家'},
                                {value:this.pieData.faith, name:'文化信仰'},
                                {value:this.pieData.language, name:'语言'},
                                
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };

                this.myChart.setOption(option);
            }
        },
        watch:{
            pieData:function(){
                this.initData();
            }
        }
        
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .visitorpie{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
</style>
