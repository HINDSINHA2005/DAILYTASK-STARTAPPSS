// const btn=document.querySelector("#btn");
// const body=document.body;



// btn.addEventListener("click",()=>{
//     body.classList.toggle("active");
// })



// const ul=document.querySelector(".ul");
// const btn=document.querySelector("#btn");

// btn.addEventListener("click",()=>{
// for(let i=0;i<=5;i++){
// const li=document.createElement("li");
// li.textContent=`NEW NODE ${i}`;
// ul.prepend(li);

// }
// });


// const form=document.querySelector(".form");
// const input=document.querySelector("#name");

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     if(input.value.trim()===""){
//         alert("fill Name")
//     }else{
//         alert("Form Submitted");
//     }
// });
// let count=0;
// const btn=document.querySelector("#btn");
// const result=document.querySelector("#result");


// btn.addEventListener("click",()=>{
//     count++;
//     result.textContent=`Count: ${count}`;
// });


// btn.addEventListener("dblclick",()=>{
//     count=0;
//     result.textContent=`Count: ${count}`;
// });

// const ul=document.querySelector(".ul");
// const addbtn=document.querySelector("#ad");



// addbtn.addEventListener("click",()=>{
// const li=document.createElement("li");
// li.innerHTML=`Item <button class="delete">X</button>`;
// ul.appendChild(li);
// });


// ul.addEventListener("click",(e)=>{
// if(e.target.classList.contains("delete")){
//     e.target.parentElement.remove();
// }
// })



// const container = document.querySelector(".container");

// container.addEventListener("click", (e) => {
//   if (e.target.classList.contains("card")) {

  
//     document.querySelectorAll(".card").forEach(card => {
//       card.classList.remove("active");
//     });

    
//     e.target.classList.add("active");
//   }
// });



const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");


addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span class="text">${input.value}</span>
    <button class="complete">✔</button>
    <button class="edit">✏️</button>
    <button class="delete">❌</button>
  `;

  list.appendChild(li);
  input.value = "";
});


list.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  
  if (e.target.classList.contains("delete")) {
    li.remove();
  }

  
  if (e.target.classList.contains("complete")) {
    li.querySelector(".text").classList.toggle("completed");
  }

 
  if (e.target.classList.contains("edit")) {
    const textSpan = li.querySelector(".text");
    const newText = prompt("Edit task", textSpan.textContent);

    if (newText !== null && newText.trim() !== "") {
      textSpan.textContent = newText;
    }
  }
});







