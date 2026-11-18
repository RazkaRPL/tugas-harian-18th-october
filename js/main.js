const gitar = document.createElement("li")
const daftarhobi = document.querySelector("#daftar-hobi")
if(daftarhobi){
gitar.textContent = "Bermain gitar"
daftarhobi.appendChild(gitar)
};

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
    <img src="${item.gambar}" alt="${item.alt}" width="200" height="200">
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

const daftarRepo = document.querySelector("#daftar-repo")
const statusRepo = document.querySelector("#status-repo")
const tombolRepo = document.querySelector("#tombol-repo")

async function ambilRepo() {
    statusRepo.textContent = "Memuat...";
    try {
    const response = await fetch(alamatRepo + pilihan);
        if (!response.ok) {
        throw new Error(`Status ${response.status}`);
        }
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
    statusRepo.textContent = `${repos.length} repositori yang terakhir diperbarui:`;
    } catch (error) {
    statusRepo.textContent = "Maaf, daftar repositori gagal dimuat. Periksa username atau coba lagi nanti.";
    console.error(error);
}
}

if(daftarRepo){
    ambilRepo();
}

if(daftarRepo){

tombolRepo.addEventListener("click", function(){
    daftarRepo.classList.toggle("tersembunyikan")
    statusRepo.classList.toggle("tersembunyikan")
    if(statusRepo.classList.contains("tersembunyikan")){
        statusRepo.textContent = "Daftar repositori tersembunyikan"
        tombolRepo.textContent = "Tampilkan repositori"
    }else{tombolRepo.textContent = "Sembunyikan Repositori"}
});
}


