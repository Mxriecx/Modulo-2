

const cargarInformacion = async () => {

    try {
        const respuesta = await fetch("../json/persona.json");
        const persona = await respuesta.json();
        console.log("persona obtenida", persona)
        mostrarInfo(persona)
    } catch (error) {
        console.log("hubo un error ayudaaaa", error);
    }
}

const cargarApi = async () => {
    try {
        const respuesta2 = await fetch("https://ghibliapi.vercel.app/films");
        const peliculas = await respuesta2.json();
        console.log("peliculas obtenidas", peliculas)
        let html = "";
        peliculas.forEach(peli => {
            html += `
            <div>
              <h2>${peli.title} (${peli.release_date})</h2>
              <img src="${peli.image}" alt="${peli.title}" width="200">
              <p>${peli.description}</p>
            </div>
          `;
        });

        document.getElementById("peliculas").innerHTML = html;

    } catch (error) {
        console.log("Hubo un error 😢", error);
    }
}

const mostrarInfo = (persona) => {
    console.log('Vamos a construir un html');

    const contenedor = document.getElementById('datos');

    contenedor.innerHTML = `
        <h2 class="miNombre">${persona.name}</h2>
            <p class="miEdad">Edad: ${persona.age}</p>
            <div class="misHobbies">
                <h3>Hobbies</h3>
                <li>hobbie1</li>
                <li>hobbie2</li>
                <li>hobbie3</li>
            </div>
    `
}
