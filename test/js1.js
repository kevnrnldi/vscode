console.log("woi")


function test(){
    console.log("kevin");
}

test()

const atta = ['kevin','walale','mantul']
console.log(atta)

let nama = "budi";
const umur = 20;
let aktif = true;
console.log(nama + " berumur " + umur);


for( let i = 0; i <= 10; i++){
    console.log("hallo")
}



let nilai = 80;


function sapa(nama,umur) {
    return "Perkenalkan saya " + nama + " saya berumur " + umur;
  }
  console.log(sapa("lyne",18));




  let keranjang = [];
function tambah(nama, harga) {
  keranjang.push({nama, harga});
  tampil();
}

function tampil() {
  let daftar = "";
  let total = 0;
  keranjang.forEach((item, i) => {
    daftar += `<li>${item.nama} - ${item.harga} <button onclick="hapus(${i})">Hapus</button></li>`;
    total += item.harga;
  });
  document.getElementById("keranjang").innerHTML = daftar;
  document.getElementById("total").innerText = total;
}

function hapus(index) {
  keranjang.splice(index, 1);
  tampil();
}

console.log((15 > 12) ? 'yes' : 'no')



function kirimForm() {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const jurusan = document.getElementById("jurusan").value;

  if (!nama || !email || !jurusan) {
    alert("Semua field wajib diisi!");
    return;
  }

  let hasil = `<h3>Data Pendaftar</h3>`;
  hasil += `<p>Nama: ${nama}</p>`;
  hasil += `<p>Email: ${email}</p>`;
  hasil += `<p>Jurusan: ${jurusan}</p>`;

  document.getElementById("hasil").innerHTML = hasil;
}

function resetForm() {
  document.getElementById("formPendaftaran").reset();
  document.getElementById("hasil").innerHTML = "";
}




const pop = getElementById('demoku').innerText = "bajingan"

console.log(pop)





