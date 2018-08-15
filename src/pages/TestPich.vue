<template>
    <div>
        <page-render :pagesTotal="pagesTotal"
        ></page-render>
    </div>
</template>

<script>
import PageRender from './pages_render'
export default {
    components: {
        PageRender
    },
    data(){ 
      return{
        // currentPage: 1, //当前页 
        pagesTotal: 666, //总页数 
        // changePage:'',//跳转页 
      }
   }, 
   methods: { 
     logCurrentPage(currentPage) { 
       console.log(currentPage);
     }, 
    //  jumpPage(changePage){
    //    console.log(changePage);
    //  },
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
   line-height: 20px !important; 
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