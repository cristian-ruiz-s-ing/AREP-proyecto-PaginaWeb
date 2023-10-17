// Datos de ejemplo para las noticias 106fa529851b45058d77e03dc5aebbdc
const noticiasList = [
];
const noticiasDefault = [
    { titulo: "Real Madrid gana la Liga", contenido: "El Real Madrid se corona campeón de la liga española.", url: "https://lifehacker.com/where-to-stream-the-oklahoma-vs-texas-game-1850904332", img: "https://i.kinja-img.com/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f5d4568f70bb1999c768e0a48dd25abd.jpg" },
    { titulo: "Nuevo fichaje del Barcelona", contenido: "El Barcelona anuncia la incorporación de un nuevo jugador estrella.", url: "https://www.cnet.com/tech/services-and-software/how-to-watch-taylor-swift-travis-kelce-at-kansas-city-chiefs-vs-new-york-jets-tonight/", img: "https://www.cnet.com/a/img/resize/9256d934e3bdc4365e53171b9c14b0eab11139b9/hub/2023/10/01/b1c94bb7-6e1b-4b3c-bcc3-30c57317cd7f/gettyimages-1699231904.jpg?auto=webp&fit=crop&height=675&width=1200" },
    { titulo: "Manchester United avanza en la Champions League", contenido: "El Manchester United supera la fase de grupos en la Liga de Campeones.", url: "https://lifehacker.com/where-to-stream-the-iowa-state-vs-oklahoma-game-1850884575", img: "https://i.kinja-img.com/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/748965645ae475660d0f47fb2edd9e04.jpg" },
];

const apiKey = '106fa529851b45058d77e03dc5aebbdc';
const apiUrl = "https://newsapi.org/v2/everything?q=football&apiKey=106fa529851b45058d77e03dc5aebbdc&pageSize=3"//`https://newsapi.org/v2/everything?q=football&apiKey=${apiKey}&pageSize=3`;

const xhr = new XMLHttpRequest();

xhr.open('GET', apiUrl, true);

xhr.onload = function () {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const noticias = data.articles;

        noticias.slice(0, 3).forEach((noticia) => {
            noticiasList.push({
                titulo: noticia.title,
                contenido: noticia.description,
                url: noticia.url,
                img: noticia.urlToImage
            });
        });
    } else {
        console.error('Error al obtener noticias:', xhr.statusText);
    }
};

xhr.send();


function cargarNoticias() {
    const noticiasContainer = document.getElementById("noticias-container");

    noticiasDefault.forEach((noticia) => {
        const noticiaDiv = document.createElement("div");
        noticiaDiv.class = "card";
        noticiaDiv.style="width: 18rem;";
        noticiaDiv.innerHTML = `
            <img src=${noticia.img} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${noticia.titulo}</h5>
                <p class="card-text">${noticia.contenido}</p>
                <a href="${noticia.url}" class="btn btn-outline-info">Ver noticia</a>
            </div>
        `;
        noticiasContainer.appendChild(noticiaDiv);
    });
}
cargarNoticias();
