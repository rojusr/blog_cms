import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts:[
      {
        title:"The details make the design",
        content: "<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",
        excerpt: "A rather long excerpt here, all things considered. When you are alone for days or weeks at a time, you eventually become drawn to… When you are alone for days or weeks at a time, you eventually become drawn to…",
        featuredImage:"https://images.unsplash.com/photo-1553531888-a5892402adce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1200&q=80",
        id:1,
        date: "2020",
        status:"published"
      },
      {
        title:"A new generation of wireless headsets is here and will stay forever",
        content: "<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",
        excerpt: "When you are alone for days or weeks at a time, you eventually become drawn to…",
        featuredImage:"",
        id:2,
        date: "2021",
        status:"published"
      },
      {
        title:"The annual report of the Interior department",
        content: "<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",
        excerpt: "When you are alone for days or weeks at a time, you eventually become drawn to…",
        featuredImage:"https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        id:3,
        date: "2020",
        status:"published"
      },
      {
        title:"Why are so many people obsessed with Supreme?",
        content: "<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",
        excerpt: "A rather long excerpt here, all things considered. When you are alone for days or weeks at a time, you eventually become drawn to… When you are alone for days or weeks at a time, you eventually become drawn to…",
        featuredImage:"https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1200&q=80",
        id:4,
        date: "2019",
        status:"published"
      },
      {
        title:"This is an amazing year for every sneakerhead",
        content: "<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",
        excerpt: "A rather long excerpt here, all things considered. When you are alone for days or weeks at a time, you eventually become drawn to… When you are alone for days or weeks at a time, you eventually become drawn to…",
        featuredImage:"",
        id:5,
        date: "2018",
        status:"published"
      },
      {
        title:"Heaven to Hell, the new Jennell Leibowitz book",
        content: "<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",
        excerpt: "When you are alone for days or weeks at a time, you eventually become drawn to… When you are alone for days or weeks at a time",
        featuredImage:"https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        id:6,
        date: "2020",
        status:"published"
      },
      {
        title:"This is an amazing year for every sneakerhead",
        content: "<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",
        excerpt: "When you are alone for days or weeks at a time, you eventually become drawn to…",
        featuredImage:"",
        id:7,
        date: "2020",
        status:"published"
      },
      {
        title:"The details make the design",
        content: "<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",
        excerpt: "When you are alone for days or weeks at a time, you eventually become drawn to…",
        featuredImage:"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        id:8,
        date: "2018",
        status:"published"
      },
      {
        title:"This is an amazing year for every sneakerhead",
        content: "<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",
        excerpt: "When you are alone for days or weeks at a time, you eventually become drawn to…",
        featuredImage:"",
        id:9,
        date: "2017",
        status:"published"
      },
      {
        title:"A new generation of wireless headsets is here",
        content: "<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",
        excerpt: "When you are alone for days or weeks at a time, you eventually become drawn to…",
        featuredImage:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        id:10,
        date: "2021",
        status:"published"
      },
      {
        title:"This is an amazing year for every sneakerhead",
        content: "<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",
        excerpt: "When you are alone for days or weeks at a time, you eventually become drawn to…",
        featuredImage:"",
        id:11,
        date: "2021",
        status:"published"
      },
      {
        title:"This is an amazing year for every sneakerhead",
        content: "<h2>Take your time.</h2><p>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</p><blockquote>If you’re not sure how much time you are actually spending on various tasks, use a tool like Rescue Time (their free version is excellent!) which runs in the background and tracks where your time is being spent. It can even send you weekly reports so you know exactly how much time you wasted on Facebook, or spent in your email inbox! You can assign different websites or programs/applications on a scale of very distracting to very productive, so you can see at a glance things like: which days of the week you’re most productive, which times of the day you’re most productive, and the sites on which you’re spending the most distracting time. I stumbled upon the concept of margin while reading a post by Michael Hyatt, which led me to design my ideal week.</blockquote>",
        excerpt: "When you are alone for days or weeks at a time, you eventually become drawn to…",
        featuredImage:"",
        id:12,
        date: "2020",
        status:"published"
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
