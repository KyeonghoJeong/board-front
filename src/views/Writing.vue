<template>
  <div style="margin-top:15px; margin-left:15px; margin-right:15px; border: 1px solid gray;">
    <b-form-input v-model="title" placeholder="제목을 입력하세요"></b-form-input><br>
    <b-form-input v-model="writer" placeholder="작성자를 입력하세요"></b-form-input><br>
    <div>
        <b-form-textarea
        id="textarea"
        v-model="content"
        placeholder="내용을 입력하세요"
        rows="3"
        max-rows="6"
        ></b-form-textarea>
    </div>
    <div style="text-align:right; margin-top:15px; margin-right:15px; margin-bottom:15px;">
        <b-button squared @click="goWriting">등록</b-button>&nbsp;&nbsp;
        <b-button squared @click="goBack">취소</b-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081';

  export default {

    name:'WritingView',
    data() {
      return {
        title: '',
        writer:'',
        content:''
      }
    },
    methods:{
        goWriting(){
            axios.post('/api/board/post', {
              title:this.title,
              writer:this.writer,
              content:this.content
            })
            .then((response) => {
              console.log(response)
              this.$router.push({name:'board'})
            })
            .catch((error) => {
              console.log(error);
            })
        },
        goBack(){
          this.$router.push({name:'board'})
        }
    }
  }
</script>