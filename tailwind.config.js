// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        gridTemplateColumns: {
          auto: 'repeat(auto-fit, minmax(200px, 1fr))',
        },
        fontFamily:{
          Outfit: ["Outfit","sans-serif"],
          Ovo:["Ovo","sans-serif"]
        },
        animation:{
          spin_slow: 'spin 6s linear infinite'
        }
      },
    },
  };
  
