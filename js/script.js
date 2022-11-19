const txtElement = ['SAYA ADALAH SEORANG','MAINTENANCE ENGINEERING','MAHASISWA','DAN PENGANALISA GAMBAR TEKNIK']
let count =0;
let txtIndex =0;
let currentxt ='';
let words ='';

(function ngetik() {

    if(count == txtElement.length){
        count=0;
    }
    currentxt = txtElement[count];
    words = currentxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentxt.length){
        count ++;
        txtIndex = 0;
    }
    setTimeout(ngetik, 100);
})();