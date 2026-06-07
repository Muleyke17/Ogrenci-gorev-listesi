let gorevler = JSON.parse(localStorage.getItem("gorevler")) || [];

listeyiGoster();

function gorevEkle(){

    let input = document.getElementById("gorevInput");

    let gorev = input.value.trim();

    if(gorev === ""){
        alert("Lütfen görev giriniz.");
        return;
    }

    gorevler.push(gorev);

    localStorage.setItem("gorevler", JSON.stringify(gorevler));

    input.value = "";

    listeyiGoster();
}

function listeyiGoster(){

    let liste = document.getElementById("gorevListesi");

    liste.innerHTML = "";

    for(let i=0; i<gorevler.length; i++){

        liste.innerHTML += `
        <li>
            ${gorevler[i]}
            <button class="sil-btn" onclick="gorevSil(${i})">
                Sil
            </button>
        </li>
        `;
    }
}

function gorevSil(index){

    gorevler.splice(index,1);

    localStorage.setItem("gorevler", JSON.stringify(gorevler));

    listeyiGoster();
}