<template>
  <div>
    <b-pagination
        v-model="currentPage1"
        :total-rows="rows"
        :per-count="perPage1"
        :page-range="3"
        aria-controls="sportList"
        >
      </b-pagination>
  </div>
</template>
<script>
export default {
  name: 'bpaginate',
  // data() {
  //   return {
  //     perPage1: this.perPage,
  //     currentPage1: this.currentPage
  //   }
  // },
  // props:{
  //   perPage: {
  //     type: String,
  //     required: true
  //   },
  // }
  // computed: {
  //   rows() {
  //     console.log(this.contents)
  //     // return this.contents.length;
  //   }
  // },
  // methods:{
  //   onChangePage(contents) {
  //     // update page of items
  //     this.pageOfItems = contents;
  //   }
  // }
};
</script>