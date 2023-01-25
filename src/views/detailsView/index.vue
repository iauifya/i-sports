<script>
export default {
  name: "detailsIndex",
  data() {
    return {
      content: []
    };
  },
  props: {
    id: {
      type: String,
      required: true
    },
    phone: {
      type: String
    }
    // info:{
    //   type: String
    // },
  },
  computed: {
    // detailsId(){
    //   return this.contents.find((item)=>
    //     item.id === this.id
    //   )
    // }
  },
  methods: {
    goback() {
      window.location.href = `/`;
    },
    // shareToFB() {
    //   FB.ui(
    //     {
    //       display: "popup",
    //       method: "share",
    //       // href: `#/list`
    //       href:"https://developers.facebook.com/docs"
    //     },
    //     function(response) {}
    //   );
    // }
  },
  mounted() {
    this.id = this.$route.params.id;
  }
};
</script>
<template src="./template.html"></template>

<style src="./css/style.css"></style>
<style src="./css/app.css"></style>
