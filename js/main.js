// bagian pertama pembelajaran tentang array dan push
const nilai = [85, 60, 94, 72];

nilai.forEach((n) => {
    console.log(`Nilai: ${n}`);
});

const nilaiPlus5 = nilai.map((n) => n + 5);

const lulus = nilai.filter((n) => n >= 75 );
console.log(lulus);

const skills = [
    {nama: "HTML", level: "Menengah"},
    {nama: "CSS", level: "Menengah"},
    {nama: "Git dan Github", level: "Dasar"},
    {nama: "Desain poster dengan canva", level: "Mahir"},
];
skills.push({ nama: "JavaScript", level: "Dasar" });



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

// soal 5
console.log(skills.map((skill) => skill.level));

console.log("Hasilnya berupa penunjukkan nilai data level")


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
const daftarhobi = document.querySelector("#daftar-hobi")

if(daftarSkill){
skills.forEach((skill) => {
const item = document.createElement("li");
item.textContent = `${skill.nama} (${skill.level})`;
daftarSkill.appendChild(item);
});
jumlahSkill.textContent = `Ada ${skills.length} keahlian yang sedang
saya kembangkan.`;
}

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
if(daftarhobi){
gitar.textContent = "Bermain gitar"
daftarhobi.appendChild(gitar)
};

// soal 5
console.log("Dikarenakan tag induk yang digunakan untuk menampung elemen baru yang dibuat tidak dapat ditemukan oleh javascript ketika menggunakan metode appendchild")


const tombolTema = document.querySelector(".tombol-tema");

tombolTema.addEventListener("click", () => {
    document.body.classList.toggle("gelap");
});

const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");

if(kotakPesan) {
    kotakPesan.addEventListener("input", () => {
        hitungKarakter.textContent = `${kotakPesan.value.length}/300 karakter`
    });
};

function buatKartu(item) {
return `
<article class="kartu">
    <span class="label">${item.kategori}</span>
    <h3>${item.judul}</h3>
    <img src="${item.gambar}" alt="${item.alt}" width="280">
    <p>${item.deskripsi}</p>
</article>`;
}