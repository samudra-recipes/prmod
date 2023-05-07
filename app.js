
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getFirestore, doc, updateDoc, onSnapshot} from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js'

  const firebaseConfig = {
    apiKey: "AIzaSyBOn6JbuV5vLPaatxtTgJbb_w22ttX6WpM",
    authDomain: "prmod-84399.firebaseapp.com",
    projectId: "prmod-84399",
    storageBucket: "prmod-84399.appspot.com",
    messagingSenderId: "684492077173",
    appId: "1:684492077173:web:cfa14548be6217f581a03c"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const unsub = onSnapshot(doc(db, "app", "G8XLxyfOnP5zZoJIfErb"), (doc) => {
    console.log("Current data: ", doc.data().action);
    switch (doc.data().action) {
        case 0:
            console.log("0");
          break;
        case 13:
            focusZoom()
      }
});
let action = async (nm) => {
    const docRef = doc(db, "app", "G8XLxyfOnP5zZoJIfErb")
    await updateDoc(docRef, {
      "action": nm
    });
}

function scrollToX(){
    const element = document.getElementById("test");
    element.scrollIntoView();
    console.log("scrolled")
}
function activatePlayer(){
    const elements = document.getElementsByClassName("player");
    let active = Math.floor(Math.random() * (4 - 0 + 1) + 0)
    console.log(active)
    const controls = document.createElement("div");
    controls.innerHTML = `<div class="touch" onclick="reverse(${active})">reverse</div><div class="touch" onclick="forward(${active})">forward</div>`
    document.body.appendChild(controls);
    elements[active].play()
}
function focusZoom(){
    const scroll = document.getElementById("scroll")
    scroll.style.display = 'none'
    const element = document.getElementById("focus")
    element.style.display = "block"
    const img = document.getElementById("zoom")
    for (let index = 0; index < 5000; index++) {
        setTimeout(() => {
            img.style.width = `${index}px`
            img.style.height = `${index}px`
          }, 3000);    
    }
}





