const toggleBtn=document.getElementById("ThemeToggle");
const statusText=document.getElementById("themeStatus");

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
    toggleBtn.textContent="☀️ Light Mode";
    statusText.textContent="Current Theme: Dark";
}

toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        toggleBtn.textContent="☀️ Light Mode";
        statusText.textContent="Current Theme: Dark";
    }else{
        localStorage.setItem("theme","light");
        toggleBtn.textContent="🌙 Dark Mode";
        statusText.textContent="Current Theme: Light";
    }
});