<template>
  <div style="margin-top:15px; margin-left:15px; margin-right:15px;">
    <b-table striped hover :items="items" :fields="fields" @row-clicked="getLists" style="border: 3px solid gray;"></b-table>
  </div>
</template>

<script>
export default {
    name: "TableView",
    data() {
        return {
            // Note `isActive` is left out and will not appear in the rendered table
            fields: [
                { key: '번호', thStyle: { width: "20%", } },
                { key: '제목', thStyle: { width: "60%" } },
                { key: '글쓴이', thStyle: { width: "20%" } },
            ],
            items: [
                { isActive: true, 번호: 40, 제목: 'Dickerson', 글쓴이: 'Macdonald' },
                { isActive: true, 번호: 21, 제목: 'Larsen', 글쓴이: 'Shaw' },
                { isActive: true, 번호: 89, 제목: 'Geneva', 글쓴이: 'Wilson' },
                { isActive: true, 번호: 38, 제목: 'Jami', 글쓴이: 'Carney' }
            ]
        }
    },
    methods: {
        getLists(){
            alert("요청");
        }
    }
}
</script>

<style>

</style>
