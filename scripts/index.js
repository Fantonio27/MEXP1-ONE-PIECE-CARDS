import dataset from "./dataset.characters.js";
const { characters } = dataset;

let pageno = [0, 10];

const container = document.querySelector('.container');
const cardContainer = document.getElementById('card-container');
const category = document.getElementById('cat').textContent;
const id = document.getElementById('char').textContent;
const tabs = document.querySelectorAll('#tab');
const paginationtab = document.querySelector('.pagination');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
// const exbutton = document.getElementById('ex')
const modalContainer = document.querySelector('.modal-container')
const modal = document.querySelector('#modal')
const modalBox = document.querySelector('.modal-box')
const modalsChild = document.querySelectorAll('.mode')

activetab() //Function

//Buttons
next.addEventListener("click", () => { pagination(1) });
prev.addEventListener("click", () => { pagination(0) });
// exbutton.addEventListener("click", () => { closetab() });

// function closetab() {
//     modal.style.opacity = 0;
//     modal.style.zIndex = -1;
//     modalBox.style.opacity = 0;

//     modalsChild.forEach(attr => attr.textContent = '')
// }

function activetab() {
    if (id != 0) {
        opentab(id)
    }
    
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

    fillCards(title, pageno);
}

function fillCards(category, page) {
    const cat = category == "All";
    const data = cat ? characters.slice(page[0], page[1]) : characters.filter(cat => cat.type === category)

    cardContainer.innerHTML = '';

    data.map((char, index) => {
        setTimeout(() => {

            paginationtab.style.display = !cat && "none";
            const { id, name, short } = char
            const card = document.createElement('div')

            card.innerHTML =
                `   <a href="index.php?category=${category[0]}&id=${id}">
                <div class="card">
                    <div class="card-inner">
                            <div class="front-card"></div>
                            <div class="back-card">
                                <div></div>
                                <p>${short}</p>
                            </div>
                        </div>
                    </div>
                    <div class="title">
                        <p>${name}</p>
                    </div>
                    </a>
                `;
            cardContainer.appendChild(card);
            const frontCard = document.querySelectorAll('.front-card');
            frontCard[index].style.backgroundImage = `url('./images/OnePiece/${id}.jpg')`

        }, 1000 * index)

    })
}

function pagination(no) {
    if (pageno[1] != 15 && no == 1) {
        pageno.forEach((element, index) => {
            pageno[index] = element + 10;
        });
    } else if (pageno[0] != 0 && no == 0) {
        pageno.forEach((element, index) => {
            pageno[index] = element - 10;
        });
    }
    fillCards("All", pageno)
}

function opentab(charid) {
    modal.className = "modal";
    modalContainer.style.zIndex = 1;
    modalBox.style.opacity = "1";
    container.style.overflow = "hidden";

    const datachar = characters.filter(e => e.id === charid)
    const { id, name, type, description} = datachar[0]
    modalsChild[0].src = `./images/OnePiece/${id}.jpg`;
    modalsChild[1].textContent = name;
    modalsChild[2].textContent = type;
    modalsChild[3].textContent = description;
}

