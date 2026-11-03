// bagian penentu nilai antara ganjil atau genap
function ganjilGenap(angka) {
    if (angka % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }
}

console.log(ganjilGenap(7));  
console.log(ganjilGenap(12)); 
console.log(ganjilGenap(0)); 

// bagian konversi nilai celcius ke fahrenheit

const celsiusKeFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
};

console.log(celsiusKeFahrenheit(0));   
console.log(celsiusKeFahrenheit(100)); 
console.log(celsiusKeFahrenheit(-40)); 

// bagian penentu nilai terbesar pada suatu list of datas
function nilaiTerbesar(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(nilaiTerbesar(5, 9, 2));    // 9
console.log(nilaiTerbesar(80, 75, 80)); // 80
console.log(nilaiTerbesar(-3, -7, -1)); // -1

// bagian tahubkabisat
function tahunKabisat(tahun) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(tahunKabisat(2024)); 
console.log(tahunKabisat(2026)); 
console.log(tahunKabisat(1900)); 
console.log(tahunKabisat(2000)); 

// Penentu harga setelah diskon
function hargaSetelahDiskon(total) {
    if (total >= 200000) {
        return total - (total * 20 / 100);
    } else if (total >= 100000) {
        return total - (total * 10 / 100);
    } else {
        return total;
    }
}

console.log(hargaSetelahDiskon(250000)); // 200000
console.log(hargaSetelahDiskon(100000)); // 90000
console.log(hargaSetelahDiskon(75000));  // 75000