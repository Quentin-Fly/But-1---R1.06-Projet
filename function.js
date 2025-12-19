// Menu Mobile Burger
function toggleMenu() 
    {
        const nav = document.getElementById('navLinks');
        nav.classList.toggle('mobile-active');
    }
// FAQ
    function toggleFaq(element) {
    const parent = element.parentElement;
            
    // Optionnel : fermer les autres
    document.querySelectorAll('.faq-item').forEach(item => 
    {
        if(item !== parent) item.classList.remove('open');
    });
    parent.classList.toggle('open');
}