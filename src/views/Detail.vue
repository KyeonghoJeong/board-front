<template>
<div>
  <b-jumbotron>
    <template #header>{{post.title}}</template>

    <template #lead>{{post.content}}</template>

    <hr class="my-4">

    <p>{{post.writer}}</p>

    <b-button variant="primary" @click="goBoard">목록</b-button>&nbsp;
    <b-button variant="primary" @click="goModify">수정</b-button>&nbsp;
    <b-button variant="primary" @click="showMsgBoxTwo">삭제</b-button>
  </b-jumbotron>
</div>
</template>

<script>
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081';

export default{
    name:'DetailView',
    data(){
        return{
            id:this.$store.state.post.id,
            post:'',
        }
    },
    methods:{
        goBoard(){
            this.$router.push('/');
        },
        deletePost(){
            axios.delete('/api/board/delete', {
                    params:{
                        id:this.post.id,
                    }
                }
            )
            .then((response) => {
                console.log(response);
                this.$router.push({name:'board'});
            })
            .catch((error) => {
                console.log(error);
            })
        },
        goModify(){
          this.$router.push({ name: 'modify', query: { id: this.id } });
        },
        showMsgBoxTwo() {
          this.boxTwo = ''
          this.$bvModal.msgBoxConfirm('정말 삭제하시겠습니까?', {
            title: '게시글 삭제',
            size: 'sm',
            buttonSize: 'sm',
            okVariant: 'danger',
            okTitle: '네',
            cancelTitle: '아니오',
            footerClass: 'p-2',
            hideHeaderClose: false,
            centered: true
          })
            .then(value => {
              this.boxTwo = value
              if(value){
                this.deletePost();
              }
            })
            .catch(err => {
              // An error occurred
              console.log(err);
            })
      }
    },
    created(){
      this.post = this.$store.state.post;
    }
}
</script>