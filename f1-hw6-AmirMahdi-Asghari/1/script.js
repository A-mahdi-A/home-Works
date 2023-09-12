const circle = document.getElementById('circle');
document.onmousemove = (e)=>{
circle.style.left= e.clientX +`px`;
circle.style.top= e.clientY +`px`;

}