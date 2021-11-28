const TabSection = document.querySelector('#TabSection');
const tabTargetLi = document.querySelectorAll('.tabTargetLi');
const TabContent = document.querySelectorAll(".TabContentCol")
TabSection.addEventListener('click' , (e) => {
    if(e.target.classList.contains("tabTargetLi")){
        const target = e.target.getAttribute("data-target");
        
        for(let i = 0 ; i<TabContent.length ; i++){
            tabTargetLi[i].classList.remove('active');

            TabContent[i].classList.remove('active')
            if(TabContent[i].getAttribute('data-content') == target){
                TabContent[i].classList.add("active")
            }
        } 
        e.target.classList.add("active");

    }
})