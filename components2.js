"use strict";

Vue.component('bootstrap-card', {
    props: ['title', 'subtitle', 'text'],
    template: `
    <div class="card m-4" style="width: 18rem;" v-show="isVisible">
    <div class="card-body">
      <h5 class="card-title">
        {{ title }}
        <button type="button" v-on:click="hideCard">X</button>
        </h5>
      <h6 class="card-subtitle mb-2 text-muted"> {{ subtitle }}</h6>
      <p class="card-text">{{ text }}</p>
    </div>
   </div>
    `,
    data() {
      return {
        isVisible: true
      };
    },
    methods: {
      hideCard() {
        this.isVisible = false;
      }
    }
})

new Vue({
    el: '#bs-card'
})




Vue.component('bootstrap-modal', {
  props: ['title', 'body'],
  template: `
    <div>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{ body }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>   
    </div>  
  `
  
})


new Vue({
  el: '#bs-modal'
})


Vue.component('show-div', {
  template: `
          <div class="m-5">
          <h3>Title: {{title}}</h3>
          </p>{{content}}</p> 
          <button class="btn btn-secondary" @click="$emit('close')">Close Div</button>
          </div>
            `,
  data() {
    return {
      title: 'This is the Title',
      content: 'This is some div content.  Yahoo!  Super cool.'
    }
  }
})

new Vue({
  el: '#show-div',
  data: {
    showDiv: false
  }
})






