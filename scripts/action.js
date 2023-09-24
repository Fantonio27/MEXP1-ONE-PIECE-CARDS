import dataset from "./datasets.js";
const { characters } = dataset;

const cardContainer = document.getElementById('card-container');
const category = document.getElementById('cat').textContent;
const tabs = document.querySelectorAll('#tab');
const pagination = document.querySelector('.pagination');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

activetab()

function activetab() {
    let title;
    for (let i = 0; i < 4; i++) {
        if (tabs[i].textContent[0] === category) {
            tabs[i].className = "active";
            title = tabs[i].textContent;
        } else if (category == 0) {
            tabs[0].className = "active";
            title = "All";
        }
    }
    document.title += " - " + title;

    fillCards(title);
}

function fillCards(category, page) {
    const cat = category=="All";

    const data = cat? characters:characters.filter(cat=>cat.type === category);

    cardContainer.innerHTML = '';
    data.map((char, index) => {
        if((cat && index < 5 ) || !cat){
            pagination.style.display = !cat && "none";

            const { id, name } = char
            const card = document.createElement('div')
            card.innerHTML =
                `   <div class="card">
                        <div class="card-inner">
                            <div class="front-card"></div>
                            <div class="back-card"></div>
                        </div>
                    </div>
                    <div class="title">
                        <p>${name}</p>
                    </div>
                `;
            cardContainer.appendChild(card);
    
            const frontCard = document.querySelectorAll('.front-card');
            frontCard[index].style.backgroundImage = `url('./images/OnePiece/${char.id}.jpg')`
        } 
    })
}

next.addEventListener("click", ()=>{
    fillCards("All", true)
});

prev.addEventListener("click", ()=>{
    fillCards("All", false)
});
