let navbar = document.getElementById('NavBar');
let scrollBox = document.getElementById('scrollBox')
let originalWidth = navbar.style.width;
let originalLeft = navbar.style.left;

let itemList = [];

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

let smallScreen = isMobileDevice();

let Modal = document.getElementById('Modal');
let ModalIMG = document.getElementById('ModalIMG');
let ModalTitle = document.getElementById('ModalName');
let ModalDesc = document.getElementById('ModalDesc');
let ModalPrice = document.getElementById('ModalPrice');
let Grid = document.getElementById('ComGrid');

class comItem {
    constructor(name, description, price, imageSource) {
        this.Name = name;
        this.Description = description;
        this.Price = price;
        this.Image = imageSource
    }
}

function GetList() {
    for (i = 0; i < itemList.length; i++) {
        MakeListItem(itemList[i].Name, itemList[i].Description, itemList[i].Price, itemList[i].Image);
    }
}

// Make Commission Items here:
itemList.push(new comItem(
    "Face Sketch",
    "You can get a sketch done of your face! Or a friends face! Or even a characters face!\nThese sketches are done in black in white, with details.",
    "$10",
    new Image().src = "img/Commissions/Face_Sketch.png"
));
itemList.push(new comItem(
    "Forum Chibi",
    "These cute lil' guys are done in full color, in a chibi anime style.\nThey're a smaller resolution by default though.",
    // "These are done in full color. Anime style chibi. (Small resolution by default)",
    "$10",
    new Image().src = "img/Commissions/Forum_Chibi.png"
));
itemList.push(new comItem(
    "Murder Noodle",
    "These noodles are full body, cute cartoon style drawings.\n$15 for black and white coloring.\n$20 for full color with cell shading.",
    // "$15 for black & white, full body cartoon style.\n$20 for color with cell shading.",
    "$15-$20",
    new Image().src = "img/Commissions/Murder_Noodle.png"
));
itemList.push(new comItem(
    "Pinup Style",
    "These are a bit more realistic style than the Noodles, with more detail.\n$30 for black and white coloring.\n+$25 for added cel shaded color. (Total $55)\n+$40 for a complete digital painting. (Total $70)",
    // "$30 for a more realistic drawing than with the Noodle. Full body, black and white.\n+$25 for cel shading color. (Total: $55)\n+$40 for a digital painting. (Total: $70)",
    "$30-$70",
    new Image().src = "img/Commissions/Pinup_Style.png"
));
itemList.push(new comItem(
    "Cat Chibi",
    "Yea, you can have your character as a wierd cat, what of it? It's cool as heck!",
    "$5",
    new Image().src = "img/Commissions/Cat_Chibi.png"
));
itemList.push(new comItem(
    "LIMITED EDITION<br />Gatcha Chibi",
    "These Chibis are slightly lower detail than the Forum Chibis, they have the added bonus of being trapped in a gatcha ball though.\nThese are limited edition though! So if you want one, don't miss out!",
    // "A Chibi, slightly lower detail but trapped inside a gatcha ball.\nThese are limited edition though, so if you want one, don't miss out!",
    "$10",
    new Image().src = "img/Commissions/Gatcha_Chibi.png"
));
//End Commission Items
GetList();

window.onscroll = function() {
    if (!smallScreen) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            navbar.style.width = "100%";
            navbar.style.left = "0";
            navbar.style.borderRadius = "0";
            document.getElementById('Lbd').style.borderRadius = "0";
            document.getElementById('Rbd').style.borderRadius = "0";
        }
        else {
            navbar.style.width = originalWidth;
            navbar.style.left = originalLeft;
            navbar.style.borderRadius = "0 0 50px 50px";
            document.getElementById('Lbd').style.borderRadius = "0 0 0 50px";
            document.getElementById('Rbd').style.borderRadius = "0 0 50px 0";
        }
    }

    if (document.documentElement.scrollTop >= document.getElementById('CheckMeOut').offsetTop-80) {
        document.getElementById('Lbd').classList.remove('active');
        document.getElementById('SecondLink').classList.remove('active');
        // document.getElementById('ThirdLink').classList.remove('active');
        document.getElementById('FourthLink').classList.remove('active');
        document.getElementById('FithLink').classList.remove('active');
        document.getElementById('Rbd').classList.add('active');
    }
    else if (document.documentElement.scrollTop >= document.getElementById('UsefulThings').offsetTop-80) {
        document.getElementById('Lbd').classList.remove('active');
        document.getElementById('SecondLink').classList.remove('active');
        // document.getElementById('ThirdLink').classList.remove('active');
        document.getElementById('FourthLink').classList.remove('active');
        document.getElementById('FithLink').classList.add('active');
        document.getElementById('Rbd').classList.remove('active');
    }
    else if(document.documentElement.scrollTop >= document.getElementById('Commissions').offsetTop-80) {
        document.getElementById('Lbd').classList.remove('active');
        document.getElementById('SecondLink').classList.remove('active');
        // document.getElementById('ThirdLink').classList.remove('active');
        document.getElementById('FourthLink').classList.add('active');
        document.getElementById('FithLink').classList.remove('active');
        document.getElementById('Rbd').classList.remove('active');
    }
    // else if(document.documentElement.scrollTop >= document.getElementById('PartThree').offsetTop-80) {
    //     document.getElementById('Lbd').classList.remove('active');
    //     document.getElementById('SecondLink').classList.remove('active');
    //     document.getElementById('ThirdLink').classList.add('active');
    //     document.getElementById('FourthLink').classList.remove('active');
    //     document.getElementById('FithLink').classList.remove('active');
    //     document.getElementById('Rbd').classList.remove('active');
    // }
    else if(document.documentElement.scrollTop >= document.getElementById('Things').offsetTop-80) {
        document.getElementById('Lbd').classList.remove('active');
        document.getElementById('SecondLink').classList.add('active');
        // document.getElementById('ThirdLink').classList.remove('active');
        document.getElementById('FourthLink').classList.remove('active');
        document.getElementById('FithLink').classList.remove('active');
        document.getElementById('Rbd').classList.remove('active');
    }
    else {
        document.getElementById('Lbd').classList.add('active');        
        document.getElementById('SecondLink').classList.remove('active');
        // document.getElementById('ThirdLink').classList.remove('active');
        document.getElementById('FourthLink').classList.remove('active');
        document.getElementById('FithLink').classList.remove('active');
        document.getElementById('Rbd').classList.remove('active');
    }
}

function MakeListItem(Name, Description, Price, ImageSource) {
    let container = document.createElement('DIV');
    let image = document.createElement('IMG');
    let price = document.createElement('P');
    let container2 = document.createElement('DIV');
    let name = document.createElement('P');
    let description = document.createElement('P');

    container.classList.add('comItem');
    // container.addEventListener('click', GetModal(container));
    container.setAttribute("onclick", "GetModal(this)");

    image.src = ImageSource;
    container.appendChild(image);
    
    price.innerHTML = Price;
    price.classList.add('price');
    container.appendChild(price);

    name.innerHTML = Name;
    name.classList.add('itemName');
    container2.appendChild(name);

    description.innerHTML = Description;
    description.classList.add('itemDescription');
    container2.appendChild(description);
    
    container.appendChild(container2);
    Grid.appendChild(container);
}

function GetModal(element) {
    Modal.style.display = "block";
    let children = element.childNodes;
    for (i = 0; i < children.length; i++) {
        if (children[i].nodeName == "IMG") ModalIMG.src = children[i].src;
        else if (children[i].nodeName == "P") ModalPrice.innerText = children[i].innerText;
        else if (children[i].nodeName == "DIV") {
            let c = children[i].childNodes;
            for (k = 0; k < c.length; k++) {
                if (c[k].nodeName == "P") {
                    if (c[k].className == "itemName") ModalTitle.innerText = c[k].innerText;
                    else if (c[k].className == "itemDescription") ModalDesc.innerText = c[k].innerText;
                }
            }
        }
    }
}

function CloseModal() {
    Modal.style.display = "none";
}

//Blog Things
// let blogContainer = document.getElementById('BlogContainer');

// blogContainer.addEventListener("wheel", function() {
//     event.preventDefault();
//     blogContainer.scrollLeft += event.deltaY;
// });