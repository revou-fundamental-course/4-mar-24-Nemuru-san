window.onload = () => {
	let tombol = document.querySelector('#tombolHitung');
	tombol.addEventListener('click', CalculateBMI);
};

function CalculateBMI() {
	let tinggiBadan = document.querySelector('#tinggi').value;
	let beratBadan = document.querySelector('#berat').value;

	tinggiBadan.value = '';
	beratBadan.value = '';

	if (
		isNaN(tinggiBadan) ||
		isNaN(beratBadan) ||
		tinggiBadan == 0 ||
		beratBadan == 0
	) {
		document.querySelector(
			'#peringatan'
		).innerHTML = `					<span class="isu">Masukkan input dengan benar!!</span>`;
		location.reload();

		return false;
	}

	let namaUser = document.querySelector('#nama').value;
	console.log(namaUser);

	// let genderUser = document.querySelector('#gender').value;
	let genderUser = document.querySelector('input[name="gender"]:checked').value;
	console.log(genderUser);

	let hasil = document.querySelector('#hasilIndex');
	let hasilNama = document.querySelector('#outputNama');
	let hasilGender = document.querySelector('#gender');

	let BMI = (beratBadan / ((tinggiBadan * tinggiBadan) / 10000)).toFixed(2);

	if (BMI < 18.5) {
		hasilNama.innerHTML = `
            <span class="userNama">
                Nama kamu : ${namaUser}
            </span>
        `;
		hasilGender.innerHTML = `
            <p>Gender kamu: ${genderUser}</p>
        `;
		hasil.innerHTML = `
            <p class="kurus">${BMI}</p>
            <span class="ketKurus">Kekurangan berat badan!😭</span>
        `;
	} else if (BMI >= 18.5 && BMI < 24.9) {
		hasilNama.innerHTML = `
        <span class="userNama">
            Nama kamu : ${namaUser}
        </span>
    `;
		hasilGender.innerHTML = `
        <p>Gender anda: ${genderUser}</p>
    `;
		hasil.innerHTML = `
        <p class="normal">${BMI}</p>
        <span class="ketNormal">Normal (Ideal) 😊</span>
    `;
	} else if (BMI >= 25 && BMI <= 29.9) {
		hasilNama.innerHTML = `
        <span class="userNama">
            Nama kamu : ${namaUser}
        </span>
    `;
		hasilGender.innerHTML = `
        <p>Gender anda: ${genderUser}</p>
    `;
		hasil.innerHTML = `
        <p class="gemuk">${BMI}</p>
        <span class="ketGemuk">Kelebihan berat badan! 😮</span>
    `;
	} else {
		hasilNama.innerHTML = `
        <span class="userNama">
            Nama kamu : ${namaUser}
        </span>
    `;
		hasilGender.innerHTML = `
        <p>Gender anda: ${genderUser}</p>
    `;
		hasil.innerHTML = `
        <p class="obesitas">${BMI}</p>
        <span class="ketObesitaas">Kegemukan (Obesitas)!!! 😡</span>
    `;
	}
}
