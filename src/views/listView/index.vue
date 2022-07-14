<script>
// import Paginate from "../../components/Paginate.vue"
export default {
  name: "listIndex",
  data() {
    return {
      index: 0,
      contents: [],
      place: [
        "臺北市",
        "新北市",
        "基隆市",
        "新竹市",
        "桃園市",
        "新竹縣",
        "宜蘭縣",
        "臺中市",
        "苗栗縣",
        "彰化縣",
        "南投縣",
        "雲林縣",
        "高雄市",
        "臺南市",
        "嘉義市",
        "嘉義縣",
        "屏東縣",
        "澎湖縣",
        "花蓮縣",
        "臺東縣",
        "金門縣",
        "連江縣"
      ],
      input: {
        type: "全部",
        place: "全部",
        title: ""
      },
      // rows: 100,
      perPage: 20,
      currentPage: 1
    };
  },
  // components: {
  //   Paginate
  // },
  computed: {
    typeContents() {
      if (this.input.type !== "全部") {
        return this.contents.filter(item => {
          return item.activityKind === this.input.type;
        });
      } else {
        return this.contents;
      }
    },
    placeContents() {
      if (this.input.place !== "全部") {
        return this.typeContents.filter(item => {
          return item.activityCounty === this.input.place;
        });
      } else {
        return this.typeContents;
      }
    },

    titleContents() {
      if (this.input.title) {
        return this.placeContents.filter(item => {
          let name = item.activityName.toLowerCase();
          let keyWord = this.input.title.toLowerCase();
          return name.indexOf(keyWord) != -1;
        });
      } else {
        return this.placeContents;
      }
    },
    pageList(){
      // console.log(this.currentPage*this.perPage);
      return this.titleContents.slice((this.currentPage-1)*this.perPage,this.perPage*this.currentPage)
    },
    rows(){
      return this.titleContents.length;
    }
  },
  methods: {
    detailsHandler(index) {
      axios
        .get("http://localhost:3000/data")
        .then(res => {
          // console.log(res.data);
          this.contents = res.data;
        })
        .then(res => {
          let target = this.contents[index];
          let id = target.activityNo;
          let title = target.activityName;
          let info = target.activityContents;
          let organizer = target.activityOrganizer;
          let contact = target.activityContactName;
          let phone = target.activityContactTelNo;
          let join = target.activityParticipants;
          // console.log(id);
          this.$router.push({ 
            name: "details", 
            params: { id, title,info,organizer,contact,phone,join} 
            });
            console.log(this.$route.params.id) 
        });
    }
  },
  // watch: {
  //   $route(now) {
  //     let id = parseInt(this.$route.params.id) - 1;
  //     this.index = id;
  //   },
  // },
  mounted() {
    axios.get("http://localhost:3000/data").then(res => {
      // console.log(res.data);
      this.contents = res.data;
    });
  }
};
</script>
<template src="./template.html"></template>

<style src="./css/style.css"></style>
<style src="./css/app.css"></style>
