<template>
  <div class="about">
    
    <h2>Posts</h2>
    <!-- <Table :entries="entries" /> -->
    <v-text-field
    v-model="search"
    append-icon="mdi-magnify"
    label="Search"
    ></v-text-field>

    <v-data-table
    :headers="headers"
    :items="entries"
    :search="search"
    :sort-by="'date'"
    :sort-desc="true"
    v-model="selected"
    item-key="id"
    show-select
    class="elevation-1 mb-4"
    >

    <template v-slot:item.title="props">
      <router-link  :to="{name:'Edit', params: {id: props.item.id}}">{{props.item.title}}</router-link>
    </template>

    <template v-slot:body.append>
      <tr class="toolbar-row">
        <td colspan="10" v-show="selected.length">
          <div class="toolbar d-flex align-center">

            <div class="flex-grow-1">
              {{selected.length}} items selected
            </div>

            <v-btn
            color="blue-grey"
            class="ma-2 white--text"
            small
            @click="clearSelection"
            > Clear selection
            <v-icon>mdi-clear</v-icon>
          </v-btn>

          <v-btn
          small
          color="error"
          class="ma-2 white--text"
          @click="removePost"
          > Delete
          <v-icon>mdi-delete</v-icon>
        </v-btn>

      </div>
    </td>
  </tr>
</template>
</v-data-table>

  <!-- <router-link to="/edit">New Post</router-link> -->
  <v-btn
  medium
  color="primary"
  class="white--text"
  @click="newPost"
  > Create New
</v-btn>

</div>
</template>

<script>

import Table from '@/components/Table.vue'

export default {
  data () {
    return {
      headers: [
        {text:"Title",value:"title", align: 'start',},
        {text:"Date",value:"date", align: 'start',},
        {text:"Status",value:"status", align: 'start',}
      ],
      search:"",
      selected:[]
    }
  },
  computed:{
    entries () {
      return this.$store.state.posts
    },

    entryArray(){
      let temp = []
      let keys = Object.keys(this.$store.state.posts[0])
      for(let o in this.entries[0]){
        temp.push({text:o})
      }

      return temp
    }
  },
  methods:{
    removePost(){
      let ids = this.selected.map(value => value.id);
        this.$store.state.posts =   this.$store.state.posts.filter(item => !ids.includes(item.id));
        this.clearSelection()
    },
    clearSelection(){
      this.selected=[]
    },
    newPost(){
      this.$router.push('/edit')
    }
  },
  components: {
    Table
  },
  filters: {

  },
  beforeRouteLeave (to, from, next) {
    // console.log("calling save")
    // this.$bus.$emit('saveDraft');
    next()
  },
}
</script>

<style lang="sass">

  .v-data-table-header th.sortable
    text-align: left
  .v-application table a
    color: $normalLight
    text-decoration: none
    font-weight: 600
    &:hover
      color: $primaryColor

  .toolbar-row
    background: $primaryColor
    width: 100%
    &:hover
      background: $primaryColor !important
    .toolbar

</style>
