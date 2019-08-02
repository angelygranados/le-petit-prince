var boton = document.querySelector("#button_quotes");
boton.addEventListener("click", displayQuotes);

let quotes = [
'\"Es una locura odiar a todas las rosas sólo porque una te pinchó. Renunciar a todos tus sueños sólo porque uno de ellos no se cumplió.\"',
'\"Cuando el misterio es demasiado impresionante, es imposible desobedecer.\"',
'\"Caminando en línea recta no puede uno llegar muy lejos.\"',
'\"No se debe nunca escuchar a las flores. Solo se las debe contemplar y oler. La mía perfumaba mi planeta, pero yo no era capaz de alegrarme de ello.\"',
'\"Se debe pedir a cada cual, lo que está a su alcance realizar.\"',
'\"He aquí mi secreto, que no puede ser más simple: solo con el corazón se puede ver bien; lo esencial es invisible a los ojos.\"',
'\"Pero si tú me domesticas, entonces tendremos necesidad el uno del otro. Para mí, tú serás único en el mundo. Para ti, yo seré único en el mundo…\"',
'\"Fue el tiempo que pasaste con tu rosa lo que la hizo tan importante.\"',
'\"No era más que un zorro semejante a cien mil otros. Pero yo le hice mi amigo y ahora es único en el mundo.\"',
'\"Sólo se conocen bien las cosas que se domestican.\"',
'\"Me pregunto si las estrellas se iluminan con el fin de que algún día, cada uno pueda encontrar la suya.\"',
'\"Si vienes, por ejemplo, a las cuatro de la tarde; desde las tres yo empezaría a ser dichoso.\"',
'\"Uno se expone a llorar un poco, si se ha dejado domesticar…\"',
'\"Es mucho más difícil juzgarse a sí mismo que juzgar a los demás. Si logras juzgarte bien a ti mismo eres un verdadero sabio.\"',
'\"Cuando mires al cielo, por la noche, como yo habitaré en una de ellas, como yo reiré en una de ellas, será para ti como si rieran todas las estrellas. ¡Tú y solo tú tendrás estrellas que saben reír!\"'
];

let lastNumber = 0;
function displayQuotes() {
    let Q = quotes.length;
    let randomNum=Math.round(Math.random()*(Q-1));
    if (randomNum != lastNumber){
        document.querySelector('#textQuotes').innerHTML = quotes[randomNum];
    }
    else {
        displayQuotes();
    }
    
}


