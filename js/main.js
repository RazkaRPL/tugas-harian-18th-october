// bagian pertama pembelajaran tentang array dan push
const nilai = [85, 60, 94, 72];

nilai.forEach((n) => {
    console.log(`Nilai: ${n}`);
});

const nilaiPlus5 = nilai.map((n) => n + 5);

const lulus = nilai.filter((n) => n >= 75 );
console.log(lulus);




// tugas 1

// soal 1
const buku = [
    {judul: "Menjadi terhebat dari 100 orang", penulis: "Razka.W", halaman: "1"}
]

console.table(buku)

console.log("Sepengetahuan saya, untuk sekarang, cara penambahan halaman nya dengan mengubah nilai data halaman menjadi 250.")
console.log("Ada dua metode yang bisa digunakan untuk javascript membaca propertinya, yaitu metode titik . dan metode kurung [] ")

// soal 2
let Datasekolah = ["Nama siswa", "Kelas", "Data administrasi"]

Datasekolah = [
    {Siswa_nama: "Nama siswa", Kelas: "Kelas_siswa", Data_administrasi: "Data_administrasi"}
]

// soal 3
console.log("perbedaan utama pada objects dan array of objects terdapat pada isinya, object terdiri dari beberapa jenis data dengan nilainya, sedangkan array of objects terdiri dari banyak objects")

// soal 4
const nilai_murid = [70, 88, 95, 64];
const filter_Nilai = nilai_murid.filter((nilaiIndividu) => nilaiIndividu > 80);

console.log(filter_Nilai)



// tugas 2
// soal 1
console.log("DOM adalah representasi dari dokumen html yang dibuat oleh browser dalam bentuk struktur objek, sedangkan HTML itu adalah struktur website itu sendiri sebelum akhirnya dibaca oleh browser.")

// soal 2
const footer = document.querySelector("footer")
footer.textContent = "Dibuat oleh Razka Wakhidiansyah"

// soal 3
console.log("textContent adalah properti javascript yang digunakan untuk mengubah huruf pada suatu tag, sedangkan innerhtml adalah properti yang digunakan untuk memanipulasi tag-tag pada sebuah tag induk html, seperti penambahan tag <strong> pada tag induk <h1>")

// soal 4
const gitar = document.createElement("li")
const daftarhobi = document.querySelector("#daftar-hobi")
if(daftarhobi){
gitar.textContent = "Bermain gitar"
daftarhobi.appendChild(gitar)
};

// soal 5
console.log("Dikarenakan tag induk yang digunakan untuk menampung elemen baru yang dibuat tidak dapat ditemukan oleh javascript ketika menggunakan metode appendchild")

// bagian 2 pembelajaran
const heroH2 = document.querySelector(".hero h2");
if(heroH2){
document.querySelector(".hero h2").textContent = "Halo saya Razka Wakhidiansyah";
}

const heroP = document.querySelector(".hero p");
if(heroP){
document.querySelector(".hero p").innerHTML = "Siswa <strong>Kelas industri UBIG</strong>";
}




// createelemen

const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

async function pengambilanSkill(){
    try{
        const response = await fetch("data/keahlian.json")
        if(!response.ok){
            throw new Error(`${response.status}`)
        }

        const skills = await response.json();

        skills.forEach(skill => {
            const item = document.createElement("li")
            item.textContent = `${skill.nama} ${skill.level}`;
            daftarSkill.appendChild(item)
    });

    jumlahSkill.textContent = `Ada ${skills.length} yang sedang saya dikembangkan`
} catch (error){
    jumlahSkill.textContent = "Daftar keahlian gagal dimuat"
    console.error(error)
}
}

if(daftarSkill){
    pengambilanSkill();
}


const tombolTema = document.querySelector("#tombol-tema");

tombolTema.addEventListener("click", () => {
document.body.classList.toggle("gelap");

if (document.body.classList.contains("gelap")) {
tombolTema.textContent = "Mode Terang";
} else {
tombolTema.textContent = "Mode Gelap";
}
});

const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");

if(kotakPesan) {
    kotakPesan.addEventListener("input", () => {
        hitungKarakter.textContent = `${kotakPesan.value.length}/300 karakter`
    });
};



const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");

let proyek = [];



function buatKartu(item) {
    return `
    <article class="kartu">
    <span class="label">${item.kategori}</span>
    <h3>${item.judul}</h3>
    <img src="${item.gambar}" alt="${item.alt}" width="280">
<p>${item.deskripsi}</p>
</article>`;
}


function tampilkanProyek (daftar) {
    const semuaKartu = daftar.map((item) => buatKartu(item));
    daftarProyek.innerHTML = semuaKartu.join("");
    jumlahProyek.textContent = `Menampilkan ${daftar.length} dari ${proyek.length} proyek`;
}

function pasangFilter(idTombol, kategori) {
    const tombol = document.querySelector(idTombol);
    
    tombol.addEventListener("click", () => {
        if (kategori === "Semua") {
            tampilkanProyek(proyek);
        } else {
            tampilkanProyek(
                proyek.filter((item) => item.kategori === kategori)
            );
        }
    });
}

async function muatProyek() {
    try{
        jumlahProyek.textContent = "Memuat...."
        const menunggu = await fetch ("data/proyek.json")
        if(!menunggu.ok){
            throw new Error (`${menunggu.status}`)
        }
        proyek = await menunggu.json();
        tampilkanProyek(proyek)

    } catch(error){
        jumlahProyek.textContent = "Gagal memuat data proyek"
    }
    
}
if (daftarProyek) {
    tampilkanProyek(proyek);
    muatProyek();
    pasangFilter("#filter-semua", "Semua");
    pasangFilter("#filter-javascript", "JavaScript");
    pasangFilter("#filter-html", "HTML")
    pasangFilter("#filter-css", "CSS")
}

const tombolfilteraktif = document.querySelectorAll(".tombol-filter.active")

tombolfilteraktif.forEach(tombol => {
    tombol.addEventListener("click", () =>{
        tombol.classList.toggle("active")
    });
});


// 5
const username = "Razkarpl";
const alamatRepo = `https://api.github.com/users/${username}/repos`;
const pilihan = "?sort=updated&per_page=6";

const daftarRepo = document.querySelector("#daftar-repos")
const statusRepo = document.querySelector("#status-repo")

async function ambilRepo() {
    statusRepo.textContent = "Memuat...";

try{
    if(!response.ok){
        throw new Error(`Status ${response.status}`)
    }
    const response = await fetch(alamatRepo + pilihan);
    const repos = await response.json();

    repos.forEach((repo) => {
        const item = document.createElement("li");
        const tautan = document.createElement("a");
        tautan.href = repo.html_url;
        tautan.target = "_blank";
        tautan.textContent = repo.name;
        item.appendChild(tautan);
        daftarRepo.appendChild(item);
    });
    statusRepo.textContent = `${repos.length} repositori yang terakhir
    diperbarui:`;
} catch(error){
    statusRepo.textContent = "Maaf, daftar repositori gagal dimuat. Periksa username atau coba lagi nanti";
    console.error(error)
}
}
