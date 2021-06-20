<template>
    
    <div class="fillcontain">
    <el-row style="height:60px;background-color:#99a9bf;border-radius:10px;margin:10px 10px;">
        <el-col :span='8' style="margin-left:20px;line-height:60px">
            <el-input v-model="input" placeholder="请输入主题或者关键字"></el-input>
        </el-col>
        <el-col :span='4' style="margin-left:20px;line-height:60px">
            <el-button>爬取</el-button>
        </el-col>
    </el-row>
        <div class="table_container">
            <el-table
                :data="tableData"
                highlight-current-row
                style="width: 100%">
                <el-table-column
                  type="index"
                  width="100">
                </el-table-column>
                <el-table-column
                  property="logId"
                  label="推文id"
                  width="220">
                </el-table-column>
                <el-table-column
                  property="logContent"
                  label="推文内容">
                </el-table-column>
                
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="20"
                  layout="total, prev, pager, next"
                  :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    
    import {getUserList, getUserCount} from '@/api/getData'
    export default {
        data(){
            return {
                input:'',
                currentRow: null,
                offset: 0,
                limit: 8,
                count: 0,
                currentPage: 1,
                tableData: [{
                  logId: "123413241234433",
                  logContent: "Pompeo lifts restrictions on contacts with Taiwan ??US bans imports of products from China's Xinjiang ??Beijing remains on alert for a resurgence of Covid-19 ",
                }, 
                {
                  logId: "135180917910355",
                  logContent: " lol didn't China invade what is now Xinjiang AT LEAST twice? I forget my dates but Han and Tang definitely.",
                }, 
                {
                  logId: "123413241234123",
                  logContent: "-Hypocrisy of #Germany-#German Co Heckler &amp; Koch鈥檚 MP5 submachine guns used by NSG &amp; MARCO -Refused to renew contract stating govt doesn't allow contract because of J&amp;K -However business as usual with #China overlooking genocide in #Xinjiang, #HK, #Tibet &amp; threats to #Taiwan ",
                }, 
                {
                  logId: "123565361842456",
                  logContent: "We must remember that Auschwitz began as a labor camp. What is happening in Xinjiang is a massive Holocaust, and the whole world is too beholden to China to stop it",
                },
                {
                  logId: "134054374322551",
                  logContent: "Abbas backs China's 'legitimate position' on Xinjiang, home to Muslim Uighurs reportedly persecuted by Beijing Translation: Palestine sells out Uighurs for China's support!",
                },
                {
                  logId: "135440378337625",
                  logContent: "Nearly 1.17 million affordable, earthquake-resistant houses have been built in the Xinjiang Uygur autonomous region during the 13th Five-Year Plan period (2016-20), and 97 percent of its administrative villages now have garbage treatment. #Xinjiang #China",
                },
                {
                  logId: "135332781715351",
                  logContent: "You have no idea, that Muslim in China is not equal to Xinjiang. And the news of Xinjiang are also propoganda of western bias",
                },
                {
                  logId: "133581050526124",
                  logContent: "Many Muslims restaurants in China are managed/owned by Muslims from Xinjiang including the Uighurs too. Compare with our Orang Asli &amp; the Uighurs, the Uighurs over there are many times much better. Uighurs is one of the many Muslims ethnics groups in China.",
                },
                {
                  logId: "133433178238104",
                  logContent: "Top story ParamountNashik: US blocks cotton imports from China's Xinjiang region over reported forced-labor abuses - CNNPolitics, see more",
                },
                {
                  logId: "133527419722916",
                  logContent: "Nike and Coca-Cola Lobby Against Xinjiang Forced Labor BillBusiness groups and major companies like Apple have been pressing Congress to alter legislation cracking down on imports of goods made with forced labor from persecuted Muslim minorities in China",
                },
                ]
            }
        },
    	components: {
    		
    	},
        created(){
            this.initData();
        },
        methods: {
            async initData(){
                try{
                    const countData = await getUserCount();
                    if (countData.status == 1) {
                        this.count = countData.count;
                    }else{
                        throw new Error('获取数据失败');
                    }
                    this.getUsers();
                }catch(err){
                    console.log('获取数据失败', err);
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
                //this.getUsers()
            },
            /* async getUsers(){
                const Users = await getUserList({offset: this.offset, limit: this.limit});
                this.tableData = [];
                Users.forEach(item => {
                    const tableData = {};
                    tableData.username = item.username;
                    tableData.registe_time = item.registe_time;
                    tableData.city = item.city;
                    this.tableData.push(tableData);
                })
            } */
        },
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .table_container{
        padding: 20px;
    }
</style>
