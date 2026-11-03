// 2. Data siswa

let nilai = 68;
if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("Remedial");
}
const nama = "Andi Pratama";
const kelas = "X PPLG 1";
const kkm = 75;
let nilaiTugas = 85;
let nilaiUts = 78;
let nilaiUas = 89;
let kehadiran = 90;


console.log(`Nama: ${nama}, kelas ${kelas}`);
console.log(`Nilai tugas ${nilaiTugas}, UTS ${nilaiUts}, UAS ${nilaiUas}`);

// 3. Hasil nilai Andi
const rataRata = (nilaiTugas + nilaiUts + nilaiUas) / 3;

const lulus = rataRata >= kkm;
const dapatSertifikat = lulus && kehadiran >= 80;

console.log(`Rata-rata nilai: ${rataRata}`);
console.log(`Lulus KKM: ${lulus}`);
console.log(`Dapat sertifikat: ${dapatSertifikat}`);

if (nilai >= 70) {
console.log("Predikat C");
} else if (nilai >= 80) {
console.log("Predikat B");
} else if (nilai >= 90) {
console.log("Predikat A");
}

if (nilai = 100) {
console.log("Nilai sempurna!");
}
console.log(`Isi nilai sekarang: ${nilai}`);

if (lulus) {
console.log("Selamat, kamu lulus KKM!");
} else {
console.log("Tetap semangat, ikuti remedial ya.");
}

function sapa(namaSiswa) {
console.log(`Halo, ${namaSiswa}! Selamat belajar JavaScript.`);
}
sapa("Andi");
sapa("Sinta");
sapa("Budi");

function tambahLog(a, b) {
console.log(a + b);
}
function tambahReturn(a, b) {
return a + b;
}
const hasil1 = tambahLog(2, 3);
const hasil2 = tambahReturn(2, 3);
console.log(`hasil1 = ${hasil1}`);
console.log(`hasil2 = ${hasil2}`);


const hitungRataRata = (tugas, uts, uas) => (tugas + uts + uas) / 3;

function predikat(nilai) {
if (nilai >= 90) {
return "A";
} else if (nilai >= 80) {
return "B";
} else if (nilai >= 70) {
return "C";
} else {
return "D";
}
}

function rapor(namaSiswa, tugas, uts, uas) {
const rata = hitungRataRata(tugas, uts, uas);
return `${namaSiswa}: rata-rata ${rata}, predikat ${predikat(rata)}`;
}

// 4. Hasil nilai Andi
console.log(`Rata-rata nilai: ${rataRata}`);
console.log(`Predikat: ${predikat(rataRata)}`);
console.log(`Lulus KKM: ${lulus}`);
console.log(`Dapat sertifikat: ${dapatSertifikat}`);
// Pesan kelulusan
if (lulus) {
console.log("Selamat, kamu lulus KKM!");
} else {
console.log("Tetap semangat, ikuti remedial ya.");
}

// 5. Menguji fungsi predikat dengan beberapa nilai
console.log(`predikat(95) = ${predikat(95)}`); // A
console.log(`predikat(90) = ${predikat(90)}`); // A, tepat di batas
console.log(`predikat(84) = ${predikat(84)}`); // B
console.log(`predikat(70) = ${predikat(70)}`); // C
console.log(`predikat(69) = ${predikat(69)}`); // D
// 6. Rapor beberapa siswa
console.log(rapor("Andi", 85, 78, 89));
console.log(rapor("Sinta", 92, 88, 96));
console.log(rapor("Budi", 70, 65, 72));