const btn = document.getElementById("theme-btn");

btn.onclick = () => {
    document.body.classList.toggle("dark");

    const icon = btn.querySelector("i");

    if(document.body.classList.contains("dark")){
        icon.className = "fa-solid fa-sun";
    }else{
        icon.className = "fa-solid fa-moon";
    }
}