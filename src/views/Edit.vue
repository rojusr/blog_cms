<template>
  <div class="home">
    <h2>Editor</h2>
    <!-- <md-field>
      <label>Title</label>
      <md-input v-model="post.title"></md-input>
    </md-field> -->
    <v-text-field v-model="post.title" label="Title"></v-text-field>
    <v-card>

    <vue-editor v-model="post.content" :editor-toolbar="customToolbar" class="mb-2"/>
</v-card>
    <v-textarea
      solo
      name="input-7-4"
      label="Solo textarea"
      class="mb-2"
      v-model="post.excerpt"
    ></v-textarea>

    <v-btn @click="log" depressed color="primary">LOG</v-btn>
    <v-btn @click="save" depressed color="primary" class="ml-2">SAVE</v-btn>
  </div>
</template>

<script>

// import HelloWorld from '@/components/HelloWorld.vue'


import '@/styles/editor.sass'

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      mode: 'create',
      title: null,
      customToolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link","image"],
        [{ 'align': [] }],
        ['clean']
      ],
    }
  },
  props:{
    id: Number
  },
  computed:{
    post(){
      if(!this.id){
        return {}
      }else{
        return this.$store.state.posts.find(x => x.id === this.id);
      }
    },
  },
  methods:{
    log(){
      console.log(this.post)
    },
    save(){
      if(this.id){
        let post = this.$store.state.posts.find(x => x.id === this.id)
        post.content = this.post.content
        post.title = this.post.title
        post.date = this.timeStamp()
      }else{
        this.create()
      }
    },
    timeStamp() {
      let today = new Date();
      let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      let dateTime = date +' '+ time;
      return dateTime;
    },

    create(){
      this.post.id=Date.now()
      this.post.date = this.timeStamp()

      if(!this.post.title){this.post.title="untititled"}
      if(!this.post.status){this.post.status="draft"}

      this.$store.state.posts.push(this.post)
    }
  },
}
</script>
<style lang="sass">
.ql-toolbar.ql-snow
  border: none !important
  border-bottom: 1px solid #ccc !important
.ql-container.ql-snow
  border: none !important
</style>
