<template>
  <div>
    <HeaderView/>
    <TableView/>
    <PageView/>
    <WriteView/>
  </div>
</template>

<script>
import HeaderView from '../components/Header.vue';
import TableView from '../components/Table.vue';
import PageView from '../components/Page.vue';
import WriteView from '../components/Write.vue';

export default{
  name:'BoardView',
  data(){
    return{
      id:TableView.id
    }
  },
  components:{
    HeaderView,
    TableView,
    PageView,
    WriteView,
  }
}
</script>