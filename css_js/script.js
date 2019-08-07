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

function displayQuotes() {
    let randomNum=Math.round(Math.random()*(quotes.length - 1));
    if (randomNum >= 0){
        document.querySelector('#textQuotes').innerHTML = quotes[randomNum];
    }
    else {
        displayQuotes();
    }   
}

// Función juego planetas

var botonPeso = document.querySelector("#button_peso");
botonPeso.addEventListener("click", pesoPlanetas);

var inputText = document.querySelector('#pesoUsuario');
inputText.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button_peso").click();
    }
});

// gravedades
const g_rey = 3.7;
const g_vanidoso = 8.87;
const g_bebedor = 2.62;
const g_negocios = 3.7;
const g_farolero = 24.8;
const g_geografo = 11.15;
const g_tierra = 9.8;

function pesoPlanetas(){
    var peso = parseFloat(inputText.value);

    const r = peso * g_rey / g_tierra;
    let rey = r.toFixed(2);
    document.querySelector('#rey').innerHTML = rey + " kg.";

    const v = peso * g_vanidoso / g_tierra;
    let vanidoso = v.toFixed(2);
    document.querySelector('#vanidoso').innerHTML = vanidoso + " kg.";
    
    const b = peso * g_bebedor / g_tierra;
    let bebedor = b.toFixed(2);
    document.querySelector('#bebedor').innerHTML = bebedor + " kg.";

    const n = peso * g_negocios / g_tierra;
    let negocios = n.toFixed(2);
    document.querySelector('#negocios').innerHTML = negocios + " kg.";

    const f = peso * g_farolero/ g_tierra;
    let farolero = f.toFixed(2);
    document.querySelector('#farolero').innerHTML = farolero + " kg.";

    const g = peso * g_geografo/ g_tierra;
    let geografo = g.toFixed(2);
    document.querySelector('#geografo').innerHTML = geografo + " kg.";
}



