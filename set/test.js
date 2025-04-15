let nama = 3.14;

const obj = {
    nama : 'budi',
    no : [1,2,3,4],
    test : {
        nama : "denis"
    }

}

console.log(obj.test.nama)
console.log(obj.no[2])

function test (firstname,name){
    return "nama saya " + firstname + " " + name
 }

 console.log(test('budiono','siregar'))

 for(let i = 0; i < 10;i++){
    console.log(i)
 }

let a = 0
 while (a < 10) {
    console.log("The number is " + a) ;
    a++;
  }

 let  nilai = 90
 if (nilai >= 90) {
    console.log("A");
  } else if (nilai >= 80) {
    console.log("B");
  } else {
    console.log("C");
  }




  switch(true){
    case  nilai >= 90:
        console.log('nilai a')
    break
    case nilai >= 80 :
        console.log('nilai b')
    break
    case nilai >= 70 :
        console.log('nilai c')
    break
    default :
        console.log('tidak lulus')
  }


//   jsdom

  const well = document.querySelector('#demo')
well.innerText = 'universitas bengkulu'
well.style.color = "blue"


const element = document.createElement('li')
element.innerText = "item baru"

const masukkan = document.getElementById('list')
masukkan.appendChild(element)


const divBaru = document.createElement('div')
divBaru.setAttribute('class','terbaru')
divBaru.innerText = 'item'
document.body.appendChild(divBaru)




const parentelement = document.getElementById('panggil')

const baru = document.createElement('div')
baru.setAttribute('class', 'terbaru')
baru.innerText = `w`
document.body.appendChild(baru)
//panggil.removeChild(baru)



