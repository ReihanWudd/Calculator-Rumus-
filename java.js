const eks1 = document.getElementById('eks1')
const eks2 = document.getElementById('eks2')
const eks3 = document.getElementById('eks3')
const eks4 = document.getElementById('eks4')
const eks5 = document.getElementById('eks5')

const tbl = document.getElementById('tbl')
const tbl2 = document.getElementById('tbl2')
const tbl3 = document.getElementById('tbl3')
const tbl4 = document.getElementById('tbl4')
const tbl5 = document.getElementById('tbl5')
const angka1 = document.getElementById('angka1')
const angka2 = document.getElementById('angka2')
const pangkat1 = document.getElementById('pangkat1')
const pangkat2 = document.getElementById('pangkat2')
const reload = document.getElementById('relod')

const ekshit1 = document.getElementById('ekshit1')
//pemangilan judul
const jumlah = document.getElementById('jumlah')
const kurang = document.getElementById('kurang')
const kali = document.getElementById('kali')
const abKali = document.getElementById('abKali')
const abBagi = document.getElementById('abBagi')

// windows mualai
window.addEventListener('load', (e)=>{
    ekshit1.classList.add('hilang')
    e.preventDefault();
})
//>>>>>>>>>>>>>>>>>>>>>>>>
//tombol tombol nya
eks1.addEventListener('click',()=>{
    ekshit1.classList.remove('hilang')
    tbl2.classList.add('hilang')
    tbl.classList.remove('hilang')
    tbl3.classList.add('hilang')
    tbl4.classList.add('hilang')
    tbl5.classList.add('hilang')
    jumlah.classList.remove('hilang')
    kurang.classList.add('hilang')
    kali.classList.add('hilang')
    abKali.classList.add('hilang')
    abBagi.classList.add('hilang')
    // const judul = document.createElement('h2')
    // const text = document.createTextNode('a^m. a^n = a^m+n')
    // judul.appendChild(text)
    // const h1 = document.getElementById('jdl')
    // h1.appendChild(judul)

    e.preventDefault();
})
eks2.addEventListener('click',()=>{
    ekshit1.classList.remove('hilang')
    tbl.classList.add('hilang')
    tbl2.classList.remove('hilang')
    tbl3.classList.add('hilang')
    tbl4.classList.add('hilang')
    tbl5.classList.add('hilang')
    jumlah.classList.add('hilang')
    kurang.classList.remove('hilang')
    kali.classList.add('hilang')
    abKali.classList.add('hilang')
    abBagi.classList.add('hilang')
    e.preventDefault();
})

eks3.addEventListener('click',()=>{
    ekshit1.classList.remove('hilang')
    tbl.classList.add('hilang')
    tbl2.classList.add('hilang')
    tbl3.classList.remove('hilang')
    tbl4.classList.add('hilang')
    tbl5.classList.add('hilang')
    jumlah.classList.add('hilang')
    kurang.classList.add('hilang')
    kali.classList.remove('hilang')
    abKali.classList.add('hilang')
    abBagi.classList.add('hilang')
    e.preventDefault();
})

eks4.addEventListener('click',()=>{
    ekshit1.classList.remove('hilang')
    tbl.classList.add('hilang')
    tbl2.classList.add('hilang')
    tbl3.classList.add('hilang')
    tbl4.classList.remove('hilang')
    tbl5.classList.add('hilang')
    jumlah.classList.add('hilang')
    kurang.classList.add('hilang')
    kali.classList.add('hilang')
    abKali.classList.remove('hilang')
    abBagi.classList.add('hilang')
    e.preventDefault();
})

eks5.addEventListener('click',()=>{
    ekshit1.classList.remove('hilang')
    tbl.classList.add('hilang')
    tbl2.classList.add('hilang')
    tbl3.classList.add('hilang')
    tbl4.classList.add('hilang')
    tbl5.classList.remove('hilang')
    jumlah.classList.add('hilang')
    kurang.classList.add('hilang')
    kali.classList.add('hilang')
    abKali.classList.add('hilang')
    abBagi.classList.remove('hilang')
    e.preventDefault();
})
//>>>>>>>>>>>>>>>>>>>>>>
//tombol hapus
reload.addEventListener('click',()=>{
    angka1.value = '';
    angka2.value = '';
    pangkat1.value = '';
    pangkat2.value = '';
})

//rumus rumusnya
//nilai pada kotaknya

tbl.addEventListener('click',(e)=>{
    const x = parseInt(angka1.value)
    const z = parseInt(pangkat1.value)
    const v = parseInt(pangkat2.value)
    const xy = (x ** z) * (x ** v) ;
    const par = document.createElement('p')
    const text = document.createTextNode('hasil dari '+ x+ '^'+ z+" " + 'X ' + x + '^' + v+" " + '='+xy);
    par.appendChild(text)
    const hasil = document.getElementById('hasil');
    hasil.appendChild(par);
    e.preventDefault();
})


tbl2.addEventListener('click',()=>{
    const x = parseInt(angka1.value)
    const z = parseInt(pangkat1.value)
    const v = parseInt(pangkat2.value)
    const xy = (x**z)/(x**v);
    const par = document.createElement('p')
    const text = document.createTextNode('hasil dari '+ x+ '^'+ z+" " + '/' + x + '^' + v+" " + '='+xy);
    par.appendChild(text)
    const hasil = document.getElementById('hasil');
    hasil.appendChild(par);
    e.preventDefault();
})

tbl3.addEventListener('click',()=>{
    const x = parseInt(angka1.value)
    const z = parseInt(pangkat1.value)
    const v = parseInt(pangkat2.value)
    const xy = (x**z)**v;
    const par = document.createElement('p')
    const text = document.createTextNode('hasil dari '+ '('+x+'^'+z+')'+'^'+v+' = '+ xy);
    par.appendChild(text)
    const hasil = document.getElementById('hasil');
    hasil.appendChild(par);
    e.preventDefault();
})

tbl4.addEventListener('click',()=>{
    const x = parseInt(angka1.value)
    const z = parseInt(pangkat1.value)
    const y = parseInt(angka2.value)
    const v = parseInt(pangkat2.value)
    const xy = (x*y)**z;
    const par = document.createElement('p')
    const text = document.createTextNode('hasil dari '+ '('+x+'.'+y+')'+'^'+z +"="+ xy);
    par.appendChild(text)
    const hasil = document.getElementById('hasil');
    hasil.appendChild(par);
    e.preventDefault();
})

tbl5.addEventListener('click',()=>{
    const x = parseInt(angka1.value)
    const z = parseInt(pangkat1.value)
    const y = parseInt(angka2.value)
    const v = parseInt(pangkat2.value)
    const xy = (x/y)**z;
    const par = document.createElement('p')
    const text = document.createTextNode('hasil dari '+ '('+x+'/'+y+')'+'^'+z+' = '+ x+'^'+z+'/'+y+'^'+z+' = '+xy);
    par.appendChild(text)
    const hasil = document.getElementById('hasil');
    hasil.appendChild(par);
    e.preventDefault();
})