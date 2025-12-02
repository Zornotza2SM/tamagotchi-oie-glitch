let hambre = 0;
let felicidad = 10;

function vista() {
    let estaMuerto = (hambre >= 10 || felicidad <= 0);
    let cara = estaMuerto ? "💀" : "👾";
    let mensaje = estaMuerto ? "<div class='game-over'>GAME OVER</div>" : "";
    
    document.getElementById("app").innerHTML = `
        <div class="pet-screen">
            <h1>PIXEL PET</h1>
            
            <div class="pet-face">
                ${cara} 
            </div>

            <div class="stats">
                <div>🍗 Hambre: ${hambre}</div>
                <div>❤️ Felicidad: ${felicidad}</div>
            </div>
            
            ${mensaje}

            <div class="controls">
                <button class="boton" id="btn-comer" ${estaMuerto ? 'disabled' : ''}>Dar Comida</button>
                <button class="boton" id="btn-jugar" ${estaMuerto ? 'disabled' : ''}>Jugar</button>
            </div>
        </div>
    `;

    if (!estaMuerto) {
        document.getElementById("btn-comer").onclick = () => {
            if (hambre > 0) {
                hambre--; 
            }
            vista();
        }

        document.getElementById("btn-jugar").onclick = () => {
            if (felicidad < 10) {
                felicidad++;
            }
            vista();
        }
    }
}

vista();

function pasoDelTiempo() {
    setTimeout(() => {
        
        if (hambre < 10 && felicidad > 0) {
            hambre++;
            felicidad--;
        }

        if (hambre > 10) hambre = 10;
        if (felicidad < 0) felicidad = 0;

        vista();

        pasoDelTiempo();

    }, 2000);
}

pasoDelTiempo();
