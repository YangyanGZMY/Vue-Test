<template>
  <div style="height:100%">
        <Menu active-name="/manage/testApple">
            <MenuGroup title="内容管理">
                <Submenu name="/manage/test">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        主要内容
                    </template>
                        <MenuItem name="/manage/testApple">苹果</MenuItem>
                        <MenuItem name="/manage/testBanana">香蕉</MenuItem>
                        <MenuItem name="/manage/testPich">油桃</MenuItem>
                        <MenuItem name="/manage/testPear">南果梨</MenuItem>
                </Submenu>
            </MenuGroup>
            <MenuGroup title="统计分析">
                <MenuItem name="/manage/testOne">
                    <Icon type="document-text"></Icon>
                    文章管理
                </MenuItem>
                <MenuItem name="/manage/testTwo">
                    <Icon type="chatbubbles"></Icon>
                    评论管理
                </MenuItem>
            
                <MenuItem name="/manage/testThere">
                    <Icon type="heart"></Icon>
                    用户留存
                </MenuItem>
                <MenuItem name="/manage/testFour">
                    <Icon type="heart-broken"></Icon>
                    流失用户
                </MenuItem>
            </MenuGroup>
        </Menu>
  </div>
</template>

<script>
import util from './util.js';
export default {
    name: 'sideBarMenu',
    props: {
        isCollapse: Boolean,
    },
    data () {
        return {
            // 当前激活menu
            activeMenu: '',

            // 总览
            overviewMenuFlag: true,
            // 监测管理menu动态样式
            testMenuFlag: false,
            // 巡视
            tourMenuFlag: false,
            // 风险
            riskMenuFlag: false,
            // 警告
            warringMenuFlag: false,
            // 文档
            fileMenuFlag: false,
            // 系统管理menu动态样式
            settingMenuFlag: false,
        }
    },
    watch: {
    },
    created(){
        let key = this.$route.path;
        this.menuSelect(key, ['/main/overviewCenterPage']);
    },
    methods: {
        // 选择menuItem
        menuSelect(key, keyPath) {
            // 左边竖条
            this.activeMenu = key;
            // 系统管理menu动态样式
            if(key=='/main/overviewCenterPage'){

                this.overviewMenuFlag = true;
               
                this.testMenuFlag = false;
                this.tourMenuFlag = false;
                this.riskMenuFlag = false;
                this.warringMenuFlag = false;
                this.fileMenuFlag = false;
                this.settingMenuFlag = false;
            }else if(key == 'sub1' 
                || key=='/main/dataSearchPage' 
                || key=='/main/dataComparePage' 
                || key=='/main/dataStatisticsPage' 
                || key=='/main/workConditionManagePage'){

                this.testMenuFlag = true;

                this.overviewMenuFlag = false;
                this.tourMenuFlag = false;
                this.riskMenuFlag = false;
                this.warringMenuFlag = false;
                this.fileMenuFlag = false;
                this.settingMenuFlag = false;
            }else if(key=='/main/patrolManagePag'){

                this.tourMenuFlag = true;

                this.overviewMenuFlag = false;
                this.testMenuFlag = false;
                this.riskMenuFlag = false;
                this.warringMenuFlag = false;
                this.fileMenuFlag = false;
                this.settingMenuFlag = false;
            }else if(key=='/main/riskManagePage'){

                this.riskMenuFlag = true;

                this.overviewMenuFlag = false;
                this.testMenuFlag = false;
                this.tourMenuFlag = false;
                this.warringMenuFlag = false;
                this.fileMenuFlag = false;
                this.settingMenuFlag = false;
            }else if(key=='/main/redAndYellowWarningPage'){

                this.warringMenuFlag = true;

                this.overviewMenuFlag = false;
                this.testMenuFlag = false;
                this.tourMenuFlag = false;
                this.riskMenuFlag = false;
                this.fileMenuFlag = false;
                this.settingMenuFlag = false;
            }else if(key=='/main/fileManagePage'){

                this.fileMenuFlag = true;

                this.overviewMenuFlag = false;
                this.testMenuFlag = false;
                this.tourMenuFlag = false;
                this.riskMenuFlag = false;
                this.warringMenuFlag = false;
                this.settingMenuFlag = false;
            }else if(key == 'sub2' 
                || key=='/main/worksitePage' 
                || key=='/main/checksitePage'){

                this.settingMenuFlag = true;

                this.overviewMenuFlag = false;
                this.testMenuFlag = false;
                this.tourMenuFlag = false;
                this.riskMenuFlag = false;
                this.warringMenuFlag = false;
                this.fileMenuFlag = false;
            }else {
                this.settingMenuFlag = false;
                this.overviewMenuFlag = false;
                this.testMenuFlag = false;
                this.tourMenuFlag = false;
                this.riskMenuFlag = false;
                this.warringMenuFlag = false;
                this.fileMenuFlag = false;
            }
            if(key!='sub1' && key!='sub2'){
                // 跳转页面
                this.$router.push(key);
                let name = key.split('/');
                util.openNewPage(this, name[name.length-1]);
            }
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidemenu-icon{
  font-size: 18px !important;
}
.sidemenu-line{
    width: 4px;
    background-color: #3f51b5;
    height: inherit;
    position: absolute;
    left: 1px;
}
.firstmenu-active{
   background-color: #e8e7f7;
   color: #3f51b5;
}
.firstmenu{
   background-color: #ffffff;
   color: #303133;
}
</style>
