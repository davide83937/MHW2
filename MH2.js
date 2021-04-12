
const grid = document.querySelector('#grid')
const l = componenti.length

for(let i = 0; i < l; i++){
   const sezionee = document.createElement('div')
         sezionee.classList.add('prodotto')

   const contenutoo = document.createElement('div')
         contenutoo.classList.add('contenuto')

   const nomee = document.createElement('h1')
         nomee.classList.add('nome')
         nomee.textContent = componenti[i].Nome

   const prezzoo = document.createElement('h2')
         prezzoo.classList.add('prezzo')
         prezzoo.textContent = componenti[i].Prezzo

   const span1 = document.createElement('span')
   const span2 = document.createElement('span')

   const but1 = document.createElement('img')
         but1.classList.add('clickP')
         but1.src = 'stella_togli.jpg'

   const but2 = document.createElement('img')
         but2.classList.add('clickN')
         but2.classList.add('hidden')
         but2.src = 'stella_aggiungi.jpg'

   const descrizionee = document.createElement('p')
         descrizionee.classList.add('descrizione')
         descrizionee.classList.add('hidden')
         descrizionee.textContent = componenti[i].Descrizione

   const mDescrizionee = document.createElement('p')
         mDescrizionee.classList.add('mostra')
         mDescrizionee.textContent = 'Mostra descrizione'

   const divImg = document.createElement('div')
         divImg.classList.add('img')

   const img = document.createElement('img')
         img.classList.add('foto')
         img.src = componenti[i].Immagine

    
    span1.appendChild(but1)
    span2.appendChild(but2)
    //contenutoo.appendChild(mDescrizionee)
    divImg.appendChild(img)

    contenutoo.appendChild(nomee)
    contenutoo.appendChild(prezzoo)
    contenutoo.appendChild(span1)
    contenutoo.appendChild(span2)
    contenutoo.appendChild(descrizionee)
    contenutoo.appendChild(mDescrizionee)
    contenutoo.appendChild(divImg)

    sezionee.appendChild(contenutoo)
    grid.appendChild(sezionee)
}





function mostraDescrizione(event)
{
  let mostra = event.currentTarget;
  let descri = mostra.parentNode.querySelector('.descrizione')
  
  if(mostra.textContent == 'Mostra descrizione')
  {
  mostra.textContent='Nascondi Descrizione'
  descri.classList.remove('hidden')
  }
  else
    {
      mostra.textContent='Mostra descrizione'
      descri.classList.add('hidden')
    }
}


let mostra = document.querySelectorAll('.mostra')
for(m of mostra)
{
    m.addEventListener('click', mostraDescrizione);
}







function cerca(event){
    let search = event.currentTarget
    const sezioni = document.querySelectorAll('.nome')
    for(m of sezioni){
        if(m.textContent.indexOf(search.value) == -1){
           let contenuto = m.parentNode
           let sezione = contenuto.parentNode
           sezione.classList.add('hidden')
        }else{
            let contenuto = m.parentNode
            let sezione = contenuto.parentNode
            sezione.classList.remove('hidden')
        }
    }

    
}

let search = document.querySelector('#ricerca')
search.addEventListener('keyup', cerca)









function prefer(event){
    const preferito = event.currentTarget.parentNode.parentNode.childNodes
    const sez = document.querySelector('#preferiti #pPreferiti')
    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    const img = document.createElement('img')
    const but = document.createElement('img')
    
    for(p of preferito){
        if(p.classList == 'nome'){
           h1.textContent=p.textContent
        }
    }
     
    for(p of preferito){
        if(p.classList == 'img'){
           
            img.src=p.firstChild.src
        }
    }
    
    const section = document.createElement('section')
    but.src = 'stella_aggiungi.jpg'
    but.classList.add('rimuovi')
    but.addEventListener('click', togli_preferiti)
    div.appendChild(h1)
    div.appendChild(but)
    div.appendChild(img)
    sez.appendChild(div)
    
    let pr = sez.childNodes
    
        if(pr.length > 0){
            sez.parentNode.classList.remove('hidden2')
        }
    
}

let preferiti = document.querySelectorAll('.contenuto .clickP')
for(p of preferiti){
    p.addEventListener('click', prefer)
}








function togli_preferiti(event){
    const nascondi = event.currentTarget.parentNode
    sez_pref = nascondi.parentNode
    nascondi.remove()
    let sp = sez_pref.childNodes
    if(sp.length == 0){
        sez_pref.parentNode.classList.add('hidden2')
    }
}

