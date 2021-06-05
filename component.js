// const imgCard = document.querySelector('.imgCard');
// const imgCardImg = document.querySelector('.imgCard img');
// const closeBtn = document.querySelector('.imgCard button');

// imgCardImg.addEventListener('click', function() {
//     console.log("bruh");
//     imgCard.setAttribute('class', 'popUp');
//     closeBtn.setAttribute('style', 'display:block;');
// })

const template = document.createElement('template');

// CONTENT CARD
template.innerHTML = `
<style>
h3{
    font-size: var(--h3);
    margin: var(--margin);
}
.imgCardClass {
  position: relative;
  animation:combackAni 1s;
}
img{
  transition: 0.5s;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:5px;
}
#imgBlur{
  position: absolute;
  transform: scale(1.02,1.02);
  background-color:radial-gradient(86.36% 107.55% at 6.49% 12.32%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%);
  z-index: -1;
  background-size: cover;
  border-radius: 5px;
  object-fit: cover;
  opacity:0.8;
  filter: blur(20px);
  margin-top:-95%;
  width:100%;
  height:90%;
  transition:0.5s;
}
p{
    margin:0px;
    padding: var(--padding);
    margin-top:-14px;
}
.imgCardClass img:hover{
    cursor: pointer;
    transform:scale3d(0.95, 0.95, 0.95);
}
.imgCardClass:hover #imgBlur{
  opacity:0.5;
  filter: blur(15px);
  height:95%;
}

.popUp {
    box-shadow: 5px 5px 10px grey;
    z-index: 2;
    background-color:white;
    position: fixed;
    overflow-y: auto;
    overflow-x:hidden;
    padding:var(--padding);
    transform: scale3d(1, 1, 1);
    border-radius:5px;
    transition:1s;
    animation: popUpAni 1s;
}
    button{
        outline:none;
        border: 2px solid black;
        background-color: transparent;
        color: black;
        padding: 1em;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        transition: 0.5s;
        font-weight:bold;
        margin: 0px;
        float:right;
        z-index:3;
    }
    button:hover{
      cursor:pointer;
      background-color: black;
      color: var(--orenoGreen);
    }
    .popUp div{
        display: grid;
        gap: var(--margin);
    }
    section button{
        display:none;
    }
      
    @keyframes combackAni{
        0%{
            box-shadow: 5px 5px 10px light;
            backdrop-filter: blur(0px);
            border-radius: 5px;
            top:50px;
            transform: scale3d(0.5, 0.5, 0.5);
        }
        35%{
            top:0px;
            transform: scale3d(1.05, 1.05, 1.05);
        }
    }
    @keyframes popUpAni{
        0%{
            transform-style: preserve-3d;
            transform: scale3d(0.1, 0.1, 0.1) rotateX(-80deg) rotateY(0deg) rotateZ(0deg);
            box-shadow: 5px 5px 10px light;
            backdrop-filter: blur(0px);
            border-radius: 5px;
            top:50px;
        }
        35%{
            transform: scale3d(1.2, 1.2, 1.2) rotateX(20deg) rotateY(0deg) rotateZ(0deg);
        }
    }

    @media only screen and (max-width: 400px) {
        .popUp{
            width: 80%;
            top: calc(10% - 25px);
            right: calc(13% - 25px);
            bottom: calc(10% - 25px);
        }
        .popUp div{
            grid-template-columns: 1fr;
        }
    }
    @media only screen and (min-width: 401px) and (max-width: 600px) {
        .popUp{
            width: 75%;
            top: calc(15% - 25px);
            right: calc(15% - 25px);
            bottom: calc(15% - 25px);
        }
        .popUp div{
            grid-template-columns: 1fr;
        }
    }
    @media only screen and (min-width: 601px) {
        .popUp{
            width: 50%;
            top: calc(25% - 25px);
            right: calc(25% - 25px);
            max-height: 800px;
        }
        .popUp div{
            grid-template-columns: 1fr 1fr;
        }
    }    
  </style>
  <section class="imgCardClass">
  <button>CLOSE</button>
    <h3></h3>
    <div>
    <img alt="No Image" />
    <p style="display:none"><slot></slot></p>
    </div>
    <div id="imgBlur"></div>
  </section>
`;
class imgCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('header');
    // this.shadowRoot.querySelector('p').innerText = this.innerHTML;
      
    if (this.getAttribute('header') === null) {
      this.shadowRoot.querySelector('h1').remove();
    }
      
    const section = this.shadowRoot.querySelector('section');
    const btn = this.shadowRoot.querySelector('button');
    const p = this.shadowRoot.querySelector('p');
    const imgHref = this.getAttribute('imgHref');
    const img = this.shadowRoot.querySelector('img');
    const imgBlur = this.shadowRoot.getElementById('imgBlur');

    img.setAttribute('src', `${imgHref}`);
    imgBlur.setAttribute('style', `background-image: url("${imgHref}");`);
      
    img.addEventListener('click', function() {
        section.setAttribute('class', 'popUp');
        btn.setAttribute('style', 'display:block;');
        p.setAttribute('style', 'display:block;');
    })
    btn.addEventListener('click', function() {
        section.setAttribute('class', 'imgCardClass');
        btn.setAttribute('style', 'display:none;');
        p.setAttribute('style', 'display:none;');
    })
  }
}
window.customElements.define('img-card', imgCard);

// LOADING ANIMATION
template.innerHTML = `
  <style>
    section{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 3;
      top: 0px;
      left: 0px;
      background-color:white;
    }
    h1{
      margin-right:15px;
      margin-left:15px;
      z-index: 4;
    }
    .load-ani {
      z-index: 4;
      width:45px;
      height:45px;
      animation: loadAniObj 1s infinite;
    }
    @keyframes loadAniObj{
      0%{
        border: 2px solid green;
        background-color:green;
        transform: rotate(0deg);
      }
      40%{
        border: 2px solid black;
        background-color:white;
        transform: rotate(180deg);
      }
      100%{
        border: 2px solid black;
        background-color:black;
        transform: rotate(360deg);
      }
    }
  </style>
  <section>
    <div class="load-ani"></div>
    <h1></h1>
  </section>
`;
class loadAnimation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerText = this.innerHTML;
    window.addEventListener("load", function() {
      document.querySelector("load-animation").remove();
    });
  }
}
window.customElements.define('load-animation', loadAnimation);

// CONTENT CARD
template.innerHTML = `
<style>
section{
  margin-top:5%;
  margin-bottom:1%;
  display:flex;
  justify-content:center;
}
img{
  width:200px;
  height:200px;
  object-fit: cover;
  border-radius:100px;
  animation: imgAni 1s;
}
@keyframes imgAni{
  0%{
    transform:scale3d(0.5, 0.5, 0.5);
  }
  50%{
    transform:scale3d(1.1, 1.1, 1.1);
  }
  100%{
    transform:scale3d(1, 1, 1);
  }
}
#imgBlur{
  position: absolute;
  transform: scale(1.02,1.02);
  background-color:radial-gradient(86.36% 107.55% at 6.49% 12.32%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%);
  z-index: -1;
  background-size: cover;
  opacity:0.5;
  filter: blur(20px);
  margin-top:-5%;
  width: 100%;
  height: 20%;
  max-height:200px;
  object-fit: cover;
  border-radius:100px;
  animation:imgBlurAni 1s;
}
@keyframes imgBlurAni{
  0%{
    opacity:0.8;
    margin-top:-20%;
  }
  50%{
    margin-top:-4%;
  }
  100%{
    margin-top:-5%;
  }
}
  </style>
  <section>
    <img alt="No Image" />
    <div id="imgBlur"></div>
  </section>
`;
class imgCutOut extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
      
    const section = this.shadowRoot.querySelector('section');
    const imgHref = this.getAttribute('imgHref');
    const img = this.shadowRoot.querySelector('img');
    const imgBlur = this.shadowRoot.getElementById('imgBlur');

    img.setAttribute('src', `${imgHref}`);
    imgBlur.setAttribute('style', `background-image: url("${imgHref}");`);
  }
}
window.customElements.define('img-cutout', imgCutOut);

const cardCarouselTemplate = document.createElement('template');
cardCarouselTemplate.innerHTML = `
  <style>
  ::-webkit-scrollbar {
    border-radius: 5px;
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-thumb {
      background-color: var(--orenoGreen);
      border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
      margin: var(--margin);
  }
  section{
    padding-bottom:5px;
    display: flex;
    flex-direction: row;
    border-radius:10px;
    overflow-x: scroll;
  }
  ::slotted(*){
    width:300px;
    border-radius:5px;
    margin-right:10px;
  }
  </style>
  <section>
    <slot></slot>
  </section>
`;
class imgCarouselContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(cardCarouselTemplate.content.cloneNode(true));
  }
}
window.customElements.define('img-carousel', imgCarouselContainer);
