document.addEventListener("DOMContentLoaded", _=>{
    for ($ of document.querySelectorAll("table[title]")) {
        var h3 =document.createElement("h4");
        h3.innerText= $.getAttribute("title")
        $.parentElement.insertBefore(h3, $)
        $.setAttribute("title", "");
    }
    for ($ of document.querySelectorAll("tr td:not(:first-child)")) {
        $.setAttribute("tabindex", "1");
        $.setAttribute("title", $.innerText);
    }
 
 (function(){
    document.querySelector("html").style.width = document.body.getBoundingClientRect().width + 100 + "px";
    csodf = document.body.getBoundingClientRect().width
    document.querySelector("html").style.maxWidth = "calc(80vw + " + csodf + "px)";
    document.addEventListener("scroll", evt=>{
        document.querySelector("html").style.width = "calc(" + csodf + "px + " +document.querySelector("html").scrollLeft + "px)";
    })
 })()
 ;
})
