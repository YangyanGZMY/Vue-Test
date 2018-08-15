<template>
    <div class="hello">
        <Menu mode="horizontal" theme="dark" active-name="1" class="layout-head">
            <label style="color:green; font-size:25px">青苹果乐园</label>
        </Menu>
        <div class="layout-content"></div>
        <div style="width: 240px; height:100%; background: #495060; position: fixed; left: 0; top: 55px;">
            <div style="height:100%">
                <Menu ref="side_menu" :open-names="[$store.state.openName]" theme="dark" :active-name="$store.state.concatRouter" @on-select="menuSelect">
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
        </div>
        <div :style="{left: isCollapse?'64px':'180px'}" class="main-view">
            <div class="tags-con">
                <tags-page-opened   :pageTagsList="pageTagsList"
                                    v-on:openNameChange="openNameChange"
                                    v-on:menuSelect="menuSelect"></tags-page-opened>
            </div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
import tagsPageOpened from './tagsPageOpened.vue';
import util from './util.js';

export default {
    components: {
        tagsPageOpened
    },
    data(){
        return{
            // 侧边栏开关
            isCollapse: false,
            
        }
    },
    watch: {
      '$route' (to) {
          this.$store.commit('setCurrentPageName', to.name);
          this.checkTag(to.name);
      },
    }, 
    created(){
        this.$store.state.openName = '/manage/test'
        let key = this.$route.path;
        this.menuSelect(key);
    },
    computed: {
        tagsList () {
            return this.$store.state.tagsList;  // 所有页面的页面对象
        },
        pageTagsList () {
            return this.$store.state.pageOpenedList;  // 打开的页面的页面对象
        },
    },
    methods: {
        menuSelect(key){
            if (key == 'clearAll') {
                // this.$nextTick(() => {
                //     this.$refs.side_menu.updateActiveName()
                // })
                
                // this.$store.state.concatRouter = JSON.stringify(Object.assign({}, this.$store.state.concatRouter, ('/manage/testApple')))
                // '/manage/testApple'
                console.log(this.$store.state.concatRouter)
                this.$store.commit('concatRouter',key);
            }else{
                this.$router.push(key);
                let name = key.split('/');
                util.openNewPage(this, name[name.length-1]);
            }
        },
        //点击标签手动展开menu
        openNameChange(){
            this.$nextTick(() => {
                this.$refs.side_menu.updateOpened()
                
            })
        },
    // menu收放
    menuOnOff(){
      this.isCollapse = !this.isCollapse;
    },
    checkTag (name) {
        let openpageHasTag = this.pageTagsList.some(item => {
            if (item.name === name) {
                return true;
            }
        });
        //  解决关闭当前标签后再点击回退按钮会退到当前页时没有标签的问题
        if (!openpageHasTag) {
            util.openNewPage(this, name, this.$route.params || {}, this.$route.query || {});
        }
    }
  }
    
}
</script>
<style>
.hello{
    height: 100%;
    width: 100%;
}
.layout-head{
    position: fixed; 
    z-index:99; 
    width:100%
}
.layout-content{
    overflow: hidden;
    background: rgb(255, 255, 255);
    width: 100%;
    padding-top: 61px;
}
.content-left{
    position: fixed; 
    z-index:9;
    background: #464c5b;;
    height: 100%;
}
.layout-content .ivu-menu{
    width: 252px !important;
}
</style>

