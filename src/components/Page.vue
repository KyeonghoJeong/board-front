<template>
    <div class="mt-3">
        <h6 class="text-center"></h6>
        <b-pagination-nav number-of-pages="10" base-url="#" align="center" class="pagination-custom"></b-pagination-nav>
    </div>
</template>

<script>
  export default {
    name: 'PageView',
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    }
  }
</script>

<style>
.pagination-custom .page-item.active .page-link {
  background-color: grey;
  border-color: grey;
}

.pagination-custom .page-item .page-link:hover {
  background-color: grey;
  border-color: grey;
}

.pagination-custom .page-item .page-link {
  color: #212529;
}
</style>