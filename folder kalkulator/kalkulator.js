const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const output1 = document.querySelector("#output");
const tombol = document.querySelector(".button-hasil")


function hitungratarata(){
    let nilai1 = Number(input1.value)
    let nilai2 = Number(input2.value)
    let nilai3 = Number(input3.value)

    if (
        input1.value.trim() === "" ||
        input2.value.trim() === "" ||
        input3.value.trim() === ""
    ) {
        output1.textContent = "isi dulu lah wok"
        return;
    }

    if (
        input1.validity.stepMismatch ||
        input2.validity.stepMismatch ||
        input3.validity.stepMismatch
    ) {
        output1.textContent = "Gunakan bilangan bulat!";
        return;
    }

    let rataratanilai = (nilai1 + nilai2 + nilai3)/3

    output1.textContent = "Rata-rata: " + rataratanilai.toFixed(2);
}

tombol.addEventListener("click", function(){
    hitungratarata();
});


