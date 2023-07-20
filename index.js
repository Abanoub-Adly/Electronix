let nums = Array.from(document.querySelectorAll(".head-nums a"));
let categoriesUlis = document.querySelectorAll(".products li");
nums.forEach((num)=>{
    num.addEventListener("click",(e)=>{
        removeCurrent();
        e.currentTarget.classList.add("current");
    })
})
function removeCurrent(){
    nums.forEach((num)=>{
        num.classList.remove("current");
    })
}
categoriesUlis.forEach((li,index)=>{
    if((index + 1) % 2 == 0 ){
        li.classList.add("even");
    }else{
        li.classList.add("odd");
    }
})