<template>
    <div>
        <div class="page" v-show="show"> 
            <div class="pagelist">
                <span class="jump" @click="firstPage()">首页</span>
                <span class="jump" v-show="current_page>1" @click="clickPage(1)">上一页</span> 
                <span v-show="current_page>5" class="jump" @click="jumpPage(1)">1</span> 
                <span class="ellipsis"  v-show="efont">...</span> 
                <span class="jump" 
                  v-for="num in indexs" 
                  :key="num"
                  :class="{bgprimary:current_page==num}" 
                  @click="jumpPage(num)">{{num}}
                </span> 
                <span class="ellipsis"  v-show="efont&&current_page<pages-4">...</span> 
                <span class="jump" @click="clickPage(2)">下一页</span> 
                <span v-show="current_page<pages-1" class="jump" @click="jumpPage(pages)">末页</span> 
                <span>&nbsp;&nbsp;&nbsp;共{{pagesTotal}}条数据，当前{{current_page}}/{{pages}}页</span>
                <span>，跳到&nbsp;&nbsp;&nbsp;</span> 
                <span class="jumpinp">
                  <input  onkeyup="this.value=this.value.replace(/\D/g,'')"
                          onafterpaste="this.value=this.value.replace(/\D/g,'')"
                          v-model="changePage">
                </span>
                <span class="jumppoint" style="margin-left:8px">页</span> 
                <span class="jump gobtn" @click="jumpPage(changePage)">确定</span> 
            </div> 
        </div>
    </div>
</template>

<script>
export default {
  props: [
    'pagesTotal',
  ],
  data(){ 
    return{
      current_page: 1, //当前页 
      pages: 0, //总页数 
      changePage:'',//跳转页 
    }
  }, 
  
  computed:{ 
      show(){
          this.pages = Math.ceil(this.pagesTotal/20)
          return this.pages && this.pages !=1 
      }, 
      efont() { 
        if (this.pages <= 7) return false; 
        return this.current_page > 5 
      }, 
      indexs() { 
        var left = 1, 
          right = this.pages, 
          ar = []; 
        if (this.pages >= 7) { 
          if (this.current_page > 5 && this.current_page < this.pages - 4) { 
            left = Number(this.current_page) - 3; 
            right = Number(this.current_page) + 3; 
          } else { 
            if (this.current_page <= 5) { 
              left = 1; 
              right = 5; 
            } else { 
              right = this.pages; 
              left = this.pages - 6; 
            } 
          } 
        } 
        while (left <= right) { 
          ar.push(left); 
          left++; 
        } 
        console.log(this.current_page);
        return ar; 
        this.$emit('logCurrentPage',this.current_page)
      }, 
    }, 
  methods: { 
     jumpPage(id) {
       var re = /^[0-9]+.?[0-9]*$/;
       if (!re.test(id)) {
         this.changePage = '';
       }else{
         if (id > this.pages) {
            this.changePage = '';
          }else{
              this.current_page = id; 
              this.$emit('logCurrentPage',this.current_page)
          }
       }
       
       
     }, 
     clickPage(ck){
       if (ck == 1) {
         this.current_page--;
       }else{
         //防止当前页溢出
         if (this.current_page > this.pages-1) {
           this.current_page = this.pages;
         }else{
            this.current_page++;
         }
       }
       this.$emit('logCurrentPage',this.current_page)
     },
     firstPage(){
        this.current_page = 1;
        this.$emit('logCurrentPage',this.current_page)
      },
   }, 
}
 </script>
<style>
.page { 
   font-weight: 900; 
   height: 40px; 
   text-align: center; 
   color: #888; 
   margin: 20px auto 0; 
   background: #f2f2f2; 
 } 
.pagelist { 
   font-size: 0; 
   background: #fff; 
   height: 50px; 
   line-height: 50px; 
 } 
  
.pagelist span { 
   font-size: 14px; 
}
.pagelist .jump { 
   border: 1px solid #ccc; 
   padding: 5px 8px; 
   -webkit-border-radius: 4px; 
   -moz-border-radius: 4px; 
   border-radius: 4px; 
   cursor: pointer; 
   margin-left: 5px; 
} 
.pagelist .bgprimary { 
   cursor: default; 
   color: #fff; 
   background: #337ab7; 
   border-color: #337ab7; 
}   
.jumpinp input { 
   width: 55px; 
   height: 26px; 
   font-size: 13px; 
   border: 1px solid #ccc; 
   -webkit-border-radius: 4px; 
   -moz-border-radius: 4px; 
   border-radius: 4px; 
   text-align: center; 
} 
.ellipsis { 
   padding: 0px 8px; 
} 
.jumppoint { 
   margin-left: 30px; 
} 
.bgprimary { 
   cursor: default; 
   color: #fff; 
   background: #337ab7; 
   border-color: #337ab7; 
}
</style>