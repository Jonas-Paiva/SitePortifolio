
// Button
function test(buttonN) {
	const p = document.getElementById(`${buttonN}`);
	const ativo = document.getElementsByClassName("ativo")[0];
    ativo.className = "desativo";
	p.className = "ativo";
}

// QRcode
function zap (value){
    const qrcode = document.getElementById('qrcode');
    qrcode.style.display = `${value}`;
}

// Slide
let slideIndex = 0;
showSlides(slideIndex);

// Next/previous
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");

	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
