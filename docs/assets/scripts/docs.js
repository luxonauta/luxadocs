"use strict";function scrollIt(t){window.scrollTo({behavior:"smooth",left:0,top:t.offsetTop})}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".anchor").forEach((function(t){t.addEventListener("click",(function(){scrollIt(document.querySelector("[data-anchor='"+t.dataset.target+"']"))}))})),document.querySelector(".scroll-to-top").addEventListener("click",(function(){scrollIt(document.querySelector("main"))}))}));