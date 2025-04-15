let test = [1,2,3,4,5]

test.push(2,1)

console.log(test)

function buatRuang(n, ruang){
    if(n < 1) return ruang;
    return buatRuang(n - 1, ruang + " ");
}


function cetakBintang(n, bintang, ruang){
    if(n < 2){
        console.log(ruang + bintang)
        return;
    }
    bintang = bintang + "*";
    cetakBintang(n - 1, bintang, ruang) 
}


function cetakBarisPiramida(baris, totalBaris){
    if(baris > totalBaris){
        return;
    }
    
let ruang = buatRuang(totalBaris - baris, " ")
let bintang = "*"
cetakBintang(2 * baris - 1, bintang, ruang)
cetakBarisPiramida(baris + 1, barisTotal)

}


let barisTotal = 10
cetakBarisPiramida(1,barisTotal)
