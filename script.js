const panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>{
    panel.addEventListener("click",()=>{
        removeActiveClassList();
        panel.classList.add('active');
    });
});

const removeActiveClassList = () =>{
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}