var scrollIt;document.querySelectorAll(".anchor").forEach((function(t){return t.addEventListener("click",(function(){return scrollIt(document.querySelector("[data-anchor='"+t.dataset.target+"']"))}))})),document.querySelector("#scroll-to-top").addEventListener("click",(function(){return scrollIt(document.querySelector("body"))})),scrollIt=function(t){return window.scrollTo({behavior:"smooth",left:0,top:t.offsetTop})};