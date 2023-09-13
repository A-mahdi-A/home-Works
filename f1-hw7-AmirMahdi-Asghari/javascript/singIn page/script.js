const pass = document.getElementById('pas');
const img = document.getElementById('eys');


img.addEventListener("click", ()=>{
    if (pass.type === "password") {
        pass.type="text"
        img.src="../../img/visible 1.png";
    }else{
        pass.type='password'
        img.src="../../img/invisible 1.png";

    }
})