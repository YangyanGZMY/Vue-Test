import Vue from 'vue'
import Router from 'vue-router'
import Manage from '@/components/Manage'
import TestApple from '../pages/TestApple.vue'
import TestBanana from '../pages/TestBanana.vue'
import TestPich from '../pages/TestPich.vue'
import TestPear from '../pages/TestPear.vue'
import TestOne from '../pages/TestOne.vue'
import TestTwo from '../pages/TestTwo.vue'
import TestThere from '../pages/TestThere.vue'
import TestFour from '../pages/TestFour.vue'

// Vue.use(Router)

export const appRouter = [{
    title: '主页',
    path: '/manage',
    name: 'Manage',
    component: Manage,
    children:[{
        title: '苹果',
        path: 'testApple',
        name: 'testApple',
        component: TestApple
    }, {
        title: '香蕉',
        path: 'testBanana',
        name: 'testBanana',
        component: TestBanana
    }, {
        title: '油桃',
        path: 'testPich',
        name: 'testPich',
        component: TestPich
      }, {
        title: '南果梨',
        path: 'testPear',
        name: 'testPear',
        component: TestPear
      }, {
        title: '文章管理',
        path: 'testOne',
        name: 'testOne',
        component: TestOne
      }, {
        title: '评论管理',
        path: 'testTwo',
        name: 'testTwo',
        component: TestTwo
      }, {
        title: '用户留存',
        path: 'testThere',
        name: 'testThere',
        component: TestThere
      }, {
        title: '流失用户',
        path: 'testFour',
        name: 'testFour',
        component: TestFour
      }]
}]

