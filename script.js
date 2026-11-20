const menuButton=document.querySelector(".menu-toggle");
const navigation=document.querySelector(".main-nav");
if(menuButton&&navigation){
  menuButton.addEventListener("click",()=>{
    const open=navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded",String(open));
    menuButton.setAttribute("aria-label",open?"Close navigation":"Open navigation");
  });
  navigation.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded","false");
    menuButton.setAttribute("aria-label","Open navigation");
  }));
}
const year=document.querySelector("#year");
if(year)year.textContent=new Date().getFullYear();
const form=document.querySelector("#enquiry-form");
if(form){
  form.addEventListener("submit",event=>{
    event.preventDefault();
    const data=new FormData(form);
    const name=String(data.get("name")||"").trim();
    const phone=String(data.get("phone")||"").trim();
    const topic=String(data.get("topic")||"General enquiry");
    const message=String(data.get("message")||"").trim();
    const text=["Hello Karror Schools,","My name is "+name+".",phone?"My phone number is "+phone+".":"", "I am enquiring about: "+topic+".",message].filter(Boolean).join("\n");
    window.open("https://wa.me/265888666645?text="+encodeURIComponent(text),"_blank","noopener");
  });
}
const backTop=document.querySelector(".back-top");
if(backTop){
  const updateBackTop=()=>backTop.classList.toggle("visible",window.scrollY>500);
  window.addEventListener("scroll",updateBackTop,{passive:true});
  updateBackTop();
}