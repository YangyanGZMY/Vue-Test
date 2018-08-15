<template>
    <div>
        <div class="about_content history">
            <h2>时间轴</h2>
            <!-- <p class="about_txt">面包&纽扣诞生于2015年，是苹果装饰集团旗下的全新工装品牌。</p> -->
        </div>
        <div class="event_box">
            <div class="space_div">
                <p class="left_space"></p>
                <p class="right_space"></p>
            </div>
            <div class="parHd clearfix">
                <ul>
                    <li class="act"><span></span>2016.03.05</li>
                    <li><span></span>2016.05.06</li>
                    <li><span></span>2016.06.26</li>
                    <li><span></span>2016.09.04</li>
                    <li><span></span>2016.11.05</li>
                    <li><span></span>2016.12.18</li>
                    <li><span></span>2017.01.13</li>
                    <li><span></span>2017.02.18</li>
                </ul>
                <a class="sPrev"><img src="../assets/left_ico.png" alt="" title=""></a>
                <a class="sNext"><img src="../assets/right_ico.png" alt="" title=""></a>
            </div>
            <div class="parBd clearfix">
                <div class="slideBox">
                    <h4>page 1</h4>
                    <p>成本报价为您节省30%的预算</p>
                </div>
                <div class="slideBox" style="display: none;">
                    <h4>page 2</h4>
                    <p>启动星店计划第一季</p>
                </div>
                <div class="slideBox" style="display: none;">
                    <h4>page 3</h4>
                    <p>星店2.0产品发布会</p>
                </div>
                <div class="slideBox" style="display: none;">
                    <h4>page 4</h4>
                    <p>创“星”体验2016星店星评启动仪式。</p>
                </div>
                <div class="slideBox" style="display: none;">
                    <h4>page 5</h4>
                    <p>跨阅 解读从单店到连锁的商业趋势</p>
                </div>
                <div class="slideBox" style="display: none;">
                    <h4>page 6</h4>
                    <p>咖啡街区发布会，助力打造精品咖啡馆</p>
                </div>
                <div class="slideBox" style="display: none;">
                    <h4>page 7</h4>
                    <p>美团点评好店长生而不凡</p>
                </div>
                <div class="slideBox" style="display: none;">
                    <h4>page 8</h4>
                    <p>第一季星店计划授星仪式</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {

    },
    mounted() {
        $(".event_box").slide({
        titCell: ".parHd li",
        mainCell: ".parBd",
        defaultPlay: false,
        titOnClassName: "act",
        prevCell: ".sPrev",
        nextCell: ".sNext"
        });
        $(".parHd").slide({
        mainCell: " ul",
        vis: 6,
        effect: "leftLoop",
        defaultPlay: false,
        prevCell: ".sPrev",
        nextCell: ".sNext"
        });
    },
    data() {
        return {
        }
    },
    methods: {

    }
}
</script>
<style src="../../static/lib/style.css"></style>