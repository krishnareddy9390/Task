/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'media',
  content: [
    "./src/**/*.{html,ts}",
  ],
  
  theme: {
    extend: {
      skew:{
        '8':'8deg'
      },
      spacing:{

      }
    },
  },
  plugins: [
    // plugins(function({addbase}){
    //   const heading = {
    //     'h1':{fontSize:'20px'},
    //     'h2':{fontSize:'15px'},
    //     'h3':{fontSize:'10px'},
    //   }
    //   addbase(heading)
    // })
  ],
}
