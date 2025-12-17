const elements = document.querySelectorAll('.bonjour');
const banniere = document.getElementById('banniere_accueil');

const banniereW = banniere.clientWidth;
const banniereH = banniere.clientHeight;

const items = [];

elements.forEach((el) => 
{
    const x = Math.random() * (banniereW - el.clientWidth);
    const y = Math.random() * (banniereH - el.clientHeight);
    const dx = (Math.random() *2 + 1) * (Math.random() < 0.5 ? 1 : -1); // Vitesse horizontale
    const dy = (Math.random() *2 + 1) * (Math.random() < 0.5 ? 1 : -1); // Vitesse verticale

    items.push({el, x, y, dx, dy});
    el.style.left = x + 'px';
    el.style.top = y + 'px';
});
//Animation
function animate()
{
    items.forEach((item) => 
    {
        item.x += item.dx;
        item.y += item.dy;

        let colision = false;

        // Collision avec les bords
        if (item.x <= 0 || item.x + item.el.clientWidth >= banniereW)
        {
            item.dx *= -1; // Inverser la direction horizontale
            colision = true;
        }
        if (item.y <= 0 || item.y + item.el.clientHeight >= banniereH)
        {
            item.dy *= -1; // Inverser la direction verticale
            colision = true;
        }
        // Si il y a collision, changer la taille aléatoirement
        if (colision)
        {
            const newSize = Math.random() * 20 + 30; // Taille aléatoire entre 20px et 40px
            item.el.style.fontSize = newSize + 'px';
        }

        item.el.style.left = item.x + 'px';
        item.el.style.top = item.y + 'px';
    });
    requestAnimationFrame(animate);
}
animate();