// js
let nama = "budi"
nama = "rehan"
console.log(nama)


let array1  = [1,2,3,4]
console.log(array1[2])

let obj = {
    nama : 'dodo',
    umur : 12
}

console.log(obj)


function fun(){
    console.log('test')
}

fun()


function fun1 (nama, umur, alamat){
    return "nama saya " + nama + " umur saya" + umur + " dan saya tinggal di" + alamat
 }


 console.log(fun1("budi", 20, "bengkulu" ))

// if

let nilai = 90
let dapatPlus = true

if (nilai >= 90)
    if(dapatPlus == true){
        console.log('A+')
    }else{
        console.log('A')
  } else if (nilai >= 80) {
    console.log("B");
  } else {
    console.log("C");
  }



// switch

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