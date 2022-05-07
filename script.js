const button1 = document.getElementById("btnYellow");
const button2 = document.getElementById("btnPink");
const button3 = document.getElementById("btn3Blue");
const button4 = document.getElementById("btn4Green");
const button5 = document.getElementById("btn4Purple");

button1.addEventListener('click', e => {
    e.preventDefault();
    document.body.style.backgroundImage = "url('bg1.webp')";
});
button2.addEventListener('click', e => {
    e.preventDefault();
    document.body.style.backgroundImage = "url('bg2.jpg')";
});
button3.addEventListener('click', e => {
    e.preventDefault();
    document.body.style.backgroundImage = "url('bg3.webp')";
});
button4.addEventListener('click', e => {
    e.preventDefault();
    document.body.style.backgroundImage = "url('f.webp')";
});
button5.addEventListener('click', e => {
    e.preventDefault();
    document.body.style.backgroundImage = "url('ss.jpg')";
});



const wrapper = document.querySelector(".wrapper");
         const defaultBtn = document.querySelector("#default-btn");
         const customBtn = document.querySelector("#custom-btn");
         const cancelBtn = document.querySelector("#cancel-btn i");
         const img = document.querySelector("img");
         let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
         function defaultBtnActive(){
           defaultBtn.click();
         }
         defaultBtn.addEventListener("change", function(){
           const file = this.files[0];
           if(file){
             const reader = new FileReader();
             reader.onload = function(){
               const result = reader.result;
               img.src = result;
               wrapper.classList.add("active");
             }
             cancelBtn.addEventListener("click", function(){
               img.src = "";
               wrapper.classList.remove("active");
             })
             reader.readAsDataURL(file);
           }
         });





