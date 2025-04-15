const well = document.querySelector('#demoku')
well.innerText = 'ya gitu'


const element = document.createElement('li')
element.innerText = "item baru"

const masukkan = document.getElementById('list')
masukkan.appendChild(element)




const parentelement = document.getElementById('panggil')

const baru = document.createElement('div')
baru.setAttribute('class', 'terbaru')
baru.innerText = `w`
panggil.appendChild(baru)
panggil.removeChild(baru)



