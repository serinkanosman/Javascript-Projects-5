const accordions = document.querySelectorAll('.accordion');//nodelist içerisinde 3 accordionda gelir


accordions.forEach((accordion)=>{
    const accordionButton = accordion.querySelector('.accordionButton');
    accordionButton.addEventListener('click',()=>{
        console.log(accordion);
        accordion.querySelector('.minusIcon').classList.toggle('active');
        accordion.querySelector('.plusIcon').classList.toggle('active');
        accordion.querySelector('.accordionText').classList.toggle('active');
        console.log(accordion);

    });
});