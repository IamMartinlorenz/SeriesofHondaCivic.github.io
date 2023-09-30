const root = document.querySelector(':root');
const carBtn = document.querySelectorAll('.thumb li');
const carColors = ['#b50000', '#0058ff', '#f1c200'];
const waveImgs = ['img/wave1.png','img/wave.png','img/wave3.png']
const cars = [
	["SiR 2000", "The Si (Sport Injected) trim was introduced for the third generation of Honda Civics in both Japan and North America. In Canada and elsewhere, the trim became known as the SiR for the sixth and seventh generations as the Si badge was used for the equivalent to the USDM Civic EX model."],
	["TYPE R", "The Honda Civic Type R is a series of high-performance hatchback/sedan models based on the Civic, developed and produced by Honda since September 1997. The first Civic Type R was the third model to receive Honda's Type R badge (after the NSX and Integra). Type R versions of the Civic typically feature a lightened and stiffened body, specially tuned engine, and upgraded brakes and chassis, and are offered only in five- or six-speed manual transmission. Like other Type R models, red is used in the background of the Honda badge to give it a special sporting distinction and to separate it from other models."],
	["EG HATCHBACK", "The Honda Civic hatchback known as the EG was one of the most popular small cars in the world at the time, and as such was produced at various factories. While the one in Suzuka, Japan played a primary role, the EG hatchback for the North American market came from a manufacturing facility called Honda of Canada Manufacturing plant, or HCM."]
]    

function changePrimaryColor(color) {
	root.style.setProperty('--color-primary', color);
}

function changeWaveImage(wave) {
	document.querySelector('footer .waves').style.backgroundImage = `url(${wave})`
}

carBtn.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		changePrimaryColor(carColors[index]);
		console.log(waveImgs[index]);
		changeWaveImage(waveImgs[index]);
		document.getElementById('car-name').innerHTML = cars[index][0]
		document.getElementById('car-info').innerHTML = cars[index][1]
	});
});

      // ---JS to toggle the navigation the navigation menu on mobile-----
	  document.querySelector(".menu-btn").addEventListener("click", () => {
		document.querySelector(".nav-link").classList.toggle("active");
	});