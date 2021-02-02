<template>
  <div class="blog pa-12">

    <router-link :to="{name:'Post', params: {id: post.id}}" class="card" :class="{ wide: post.featuredImage}" v-for="(post,index) in posts" :key="index">
      <div v-if="post.featuredImage" class="featured">
        <img :src="post.featuredImage"/>
        <!-- <div class="placeholder" v-if="!post.featuredImage" /> -->

      </div>
      <!-- <div v-if="!post.featuredImage" class="featured"><img :src="post.featuredImage"/></div> -->

      <div class="body pa-6">
        <div><h4>{{post.title}}</h4></div>
        <div><p>{{ getDate(post.date) }}</p></div>

        <!-- <div v-if="post.featuredImage" class="excerpt">{{post.excerpt.substr(0,200)}}...</div> -->
        <!-- <div v-if="!post.featuredImage" class="excerpt">{{stripHTML(post.content).substr(0,360)}}...</div> -->
        <div class="excerpt">
          <div class="excerpt-inner">
            <div v-if="post.featuredImage" class="excerpt-top">{{stripHTML(post.content).substr(0,160)}}...</div>
            <div v-if="post.featuredImage" class="excerpt-low">...{{stripHTML(post.content).substr(160,500)}}...</div>
            <div v-if="!post.featuredImage" class="excerpt-top">{{stripHTML(post.content).substr(0,360)}}...</div>
            <div v-if="!post.featuredImage" class="excerpt-low">...{{stripHTML(post.content).substr(360,500)}}...</div>
          </div>
        </div>

      </div>

    </router-link>

  </div>
</template>

<script>
export default {
  name: 'Blog',

  data () {
    return {
    }
  },
  props:{
  },
  methods:{
    stripHTML(html){
      let temporalDivElement = document.createElement("div");
      temporalDivElement.innerHTML = html;
      return temporalDivElement.textContent || temporalDivElement.innerText || "";
    },
    getDate(d){
      let date = new Date(d)
      return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
    }
  },
  computed:{
    posts(){
      return this.$store.state.posts.sort((a, b) =>    new Date(a.date) > new Date(b.date) ? -1 : 1 ).filter(x=>x.status=="published");

    }


  },
}
</script>

<style scoped lang="sass">

.blog
  display: grid
  grid-gap: 24px
  grid-template-columns: repeat(auto-fit, minmax(300px , 1fr))
  max-width: 1200px
  margin: auto
  grid-auto-flow: dense
  a
    color: $normalDark
    text-decoration: none
.excerpt
  color: $normalLight
  font-size: 14px
  overflow: hidden
  position: relative
  .excerpt-low
    position: absolute
.card:first-child
  // grid-column: span 2
.wide
  // grid-column: span 2
  .featured
    // padding-top: 30%
.long
  grid-row: span 2


.excerpt::before
  content: ''
  position: absolute
  width: 100%
  left: 0
  top: 0px
  height: 12px
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)
  z-index: 10

.excerpt::after
  content: ''
  position: absolute
  width: 100%
  left: 0
  bottom: 0px
  height: 24px
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)
  z-index: 10

.card
  display: grid
  grid-template-columns:	1fr
  border-radius: 4px
  background: #fff
  position: relative
  transition: transform 0.2s ease, box-shadow 0.3s ease
  box-shadow: 0 3px 6px rgba(0,0,0,0.1)
  will-change: transform
  line-height: 1.5
  .body
    display: flex
    flex-direction: column
    .excerpt
      flex-grow: 1

  h4
    transition: color 0.16s
  .excerpt-inner
    transition: transform 2s ease
    padding-top: 12px
  &::after
    content: ""
    position: absolute
    width: 100%
    height: 100%
    // box-shadow: 0 8px 12px 2px rgba(0,0,0,0.1)
    // opacity: 0
    transition: opacity 0.24s ease

  &:hover
    transform: translatey(-4px)
    // box-shadow: 0 0px 0px 2px $primaryColor
    box-shadow: 0 6px 12px 2px rgba(0,0,0,0.1)

    h4
      color: $primaryColor
    &::after
      opacity: 1
    .excerpt-inner
      transform: translatey(-200px)
      transition: transform 16s ease-in

.featured
  width: 100%
  position: relative
  overflow: hidden
  padding-top: 56.25%
  border-radius: 4px 4px 0 0
  background: #ccc
  .placeholder
    width: 100%
    height: 100%
    position: absolute
    top: 0
    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)

img
  display: block
  width: 100%
  height: 100%
  position: absolute
  object-fit: cover
  top: 0
  bottom: 0
  left: 0
  right: 0
  transition: opacity 0.2s ease






</style>
