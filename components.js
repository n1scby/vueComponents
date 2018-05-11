"use strict";

Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked {{count}} times.</button>'
})

new Vue({
    el: '#component-button'
})



Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{title}}</h3>'
})

new Vue({
    el: '#posts1'
})


new Vue({
    el: '#posts2',
    data: {
        posts:
    
        [
            {id: 1, title: 'My journey with Vue'},
            {id: 2, title: 'Blogging with Vue'},
            {id: 3, title: 'What am I doing?'},
        ]
    }
    
})

Vue.component('blog-post3', {
    props: ['title', 'post'],
    template: '<div class="blog-post3"><h3>{{title}}</h3><div v-html="post.content"></div></div>'
  
})

new Vue({
    el: '#posts3',
    data: {
        posts3:
        [
            {id: 1, title: 'My journey with Vue 3', content: '<p>This is an emotional journey.  There was crying and laughter.</p>'},
            {id: 2, title: 'Blogging with Vue 3', content: '<p>This is a vue blog.  Totally cool, eh?</p>'},
            {id: 3, title: 'What am I doing? 3', content: '<p>I have no idea.  What are you doing?</p>'}
        ]
    }
})



Vue.component('task1', {

    template:'<li>Foobar</li>'
})

new Vue({
    el: '#task1'
})


Vue.component('task2', {
    
        template:'<li><slot></slot></li>'
    })
    
    new Vue({
        el: '#task2'
    })


Vue.component('task3', {

    template:'<li>{{task}}</li>',
    data() {
        return {
            task: "learn vue"
        };
    }
});

new Vue({
    el: '#task3'
})


Vue.component('task-list1', {
    // template:'<div><task2 v-for="task in tasks">{{task.task}}</task2></div>',
    template:`
             <div>
                 <task2 v-for="task in tasks">{{task.task}}</task2>
             </div>`,
    data() {
        return {
            tasks: [
                {task: 'Go to store', complete: true},
                {task: 'Check Email', complete: false},
                {task: 'Walk Dog', complete: true},
                {task: 'Learn Vue', complete: false}
            ]
        };
    }
});


new Vue({
    el: '#tasks1'
})




