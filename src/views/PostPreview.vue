<template>
  <div class="home">
    <div class="header pb-16 pt-16">
      <h1 class="mb-6">{{post.title}}</h1>
      <h4>{{post.excerpt}}</h4>
    </div>

<div class="post-body">
  <div v-if="post.featuredImage" class="featured"><img :src="post.featuredImage"/></div>

  <div class="post-content pt-16">
    <div class="body" v-html="post.content"></div>
    <div v-if="!post">We couldn't find any post with this id</div>

  </div>
</div>



  </div>
</template>

<script>


export default {

  components: {
  },
  props:{
    id:String
  },
  computed:{
    post(){
      if(this.$store.state.posts.find(x => x.id === this.id)==undefined){
        return false
      }else{
        return this.$store.state.posts.find(x => x.id === this.id);
      }
    },

  },
  methods:{

  }
}
</script>
<style scoped lang="sass">

.blog
  display: flex
  flex-wrap: wrap

.header
  text-align: center
  max-width: 996px
  margin: auto

.featured
  width: 100%
  height: 500px
  position: relative
  overflow: hidden

.post-content
  max-width: 800px
  margin: auto

img
  width: 100%
  height: 100%
  position: absolute
  object-fit: cover
  top: 0
  bottom: 0
  left: 0
  right: 0


  </style>
