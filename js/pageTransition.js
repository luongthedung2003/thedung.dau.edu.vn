// ===============================
// GLOBAL PAGE TRANSITION
// THEDUNG
// ===============================

// tạo loader nếu trang chưa có
function createLoader(){

    if(document.getElementById("pageLoader")) return;

    const loader = document.createElement("div");
    loader.id = "pageLoader";

    loader.innerHTML = `
        <div class="spinner"></div>
    `;

    document.body.appendChild(loader);
}

// CSS loader
function createLoaderStyle(){

    if(document.getElementById("loader-style")) return;

    const style = document.createElement("style");
    style.id = "loader-style";

    style.innerHTML = `
#pageLoader{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:#0f0b18;
display:flex;
align-items:center;
justify-content:center;
z-index:9999;
transition:opacity .4s;
}

#pageLoader.hide{
opacity:0;
pointer-events:none;
}

.spinner{
width:50px;
height:50px;
border:4px solid rgba(255,255,255,0.2);
border-top:4px solid #8b5cf6;
border-radius:50%;
animation:spin 3s linear infinite;
}

@keyframes spin{
to{transform:rotate(360deg);}
}
`;

    document.head.appendChild(style);
}

// khi trang load xong
window.addEventListener("load",function(){

    const loader = document.getElementById("pageLoader");

    if(loader){
        loader.classList.add("hide");
        setTimeout(()=>loader.remove(),1500);
    }

});

// khi click link
document.addEventListener("DOMContentLoaded",function(){

    createLoaderStyle();
    createLoader();

    document.querySelectorAll("a").forEach(link=>{

        link.addEventListener("click",function(e){

            const href = this.getAttribute("href");

            if(!href) return;
            if(href.startsWith("#")) return;
            if(href.startsWith("javascript")) return;
            if(this.target === "_blank") return;

            const loader = document.getElementById("pageLoader");

            if(loader){
                loader.classList.remove("hide");
            }

        });

    });

});