!function(){var e=["Web Developer","Front End Developer","Full Stack Developer"],r=document.querySelector(".hero-skills"),n=(document.querySelector(":root"),50),t=1200,l=30;function o(l){var o=0,a=setInterval((()=>{r.innerHTML+=e[l][o],o==e[l].length-1?(o=0,clearInterval(a),setTimeout(v,t)):o++}),n)}o(0);var a=1;function v(){var n=setInterval((()=>{var t=r.innerHTML;""!==t?r.innerHTML=t.substring(0,t.length-1):(clearInterval(n),o(a),a==e.length-1?a=0:a++)}),l)}}();