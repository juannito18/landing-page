document.getElementById("btnContacto").addEventListener("click",function () {


    alert("🚀 gracias por tu interes, te contactaremos pronto")
    
});
document.getElementById("btnColor").addEventListener("click", function () {
    document.body.style.backgroundColor = "#dcedc8";
    
});

document.getElementById("btnMostrar").addEventListener("click",function () {
    const info = document.getElementById("extraInfo");
    if (info.style.display === "none") {
        info.style.display = "block";
        this.textContent = "ocultar informacion";
    } else {
        info.style.display = "none";
        this.textContent = "mostrar mas informacion";
    }
    
})

const img = document.getElementById("heroImg");
img.addEventListener("mouseover", ()=>{
img.style.transform = "scale(1.1)";
img.style.transition = "transform 0.3s ease";
});

img.addEventListener("mouseout", () => {
  img.style.transform = "scale(1)";
});