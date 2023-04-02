<template>
  <div class="mb-2" style="text-align:right; margin-right: 15px; margin-bottom: 15px;">
    <b-button squared @click="goWriting">글쓰기</b-button>
  </div>
</template>

<script>
export default ({
  name: "WriteView",
  methods:{
    goWriting(){
      this.$router.push({name:'writing'})
    }
  }
})
</script>