const pass = document.getElementById('pas');
const img = document.getElementById('eys');
const pass2 = document.getElementById('pas2');
const img2 = document.getElementById('eys2');


img.addEventListener("click", ()=>{
    if (pass.type === "password") {
        pass.type="text"
        img.src="../../img/visible 1.png";
    }else{
        pass.type='password'
        img.src="../../img/invisible 1.png";

    }
})
img2.addEventListener("click", ()=>{
    if (pass2.type === "password") {
        pass2.type="text"
        img2.src="../../img/visible 1.png";
    }else{
        pass2.type='password'
        img2.src="../../img/invisible 1.png";

    }
})


