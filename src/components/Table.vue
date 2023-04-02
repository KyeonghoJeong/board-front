<template>
  <div style="margin-top:15px; margin-left:15px; margin-right:15px;">
    <b-table striped hover :items="items" :fields="fields" @row-clicked="getOne" style="border: 3px solid gray;"></b-table>
  </div>
</template>

<script>
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081';

export default {
    name: "TableView",
    data() {
        return {
            // Note `isActive` is left out and will not appear in the rendered table
            fields: [
                { key: 'id', label: '번호', thStyle: { width: "20%", } },
                { key: 'title', label: '제목', thStyle: { width: "60%" } },
                { key: 'writer', label: '작성자', thStyle: { width: "20%" } },
            ],
            items: [],
            post: ''
        }
    },
    mounted(){
        axios.get('/api/board/get/posts')
            .then((response) => {
                this.items = response.data;
                console.log(this.time);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    methods: {
        getOne(item){
            axios.get('/api/board/get/post', {
                    params:{
                        id: item.id
                    }
                }
            )
            .then((response) => {
                this.post = response.data;
                this.$store.commit('setPost', this.post);
                this.$router.push({ name: 'detail', query: { id: item.id } });
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>

<style>

</style>
