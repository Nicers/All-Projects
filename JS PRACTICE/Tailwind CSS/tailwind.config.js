/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  // theme: {
  //   extend: {},
  // },

  theme:{
    extend:{
        colors:{
            mycolor:'#2699fb',
        },
        screens:{
          'myscreen': '200px',
        }
    } 
},
  plugins: [],
}

