<template>
    <div>
         <treeselect style="margin-left:20%" valueFormat="object" v-model="value" :options="options" />
         <Button  style="margin-left:20%" @click="aaa">click
         </Button>
    </div>
    
</template>

<script>
  // import the component
  import Treeselect from '@riophae/vue-treeselect'
  // import the styles
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'

  export default {
    // register the component
    components: { Treeselect },
    data() {
      return {
        // define default value
        value: null,
        // define options
        options: [ {
          id: '1',
          label: 'a 🍆',
          children: [ {
            id: '11',
            label: 'aa',
          }, {
            id: '12',
            label: 'ab',
          } ],
        }, {
          id: '2',
          label: 'b',
        }, {
          id: '3',
          label: 'c',
        } ],
      }
    },
    methods:{
        aaa(){
            console.log(this.value);
        },
    }
  }
</script>