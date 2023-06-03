const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let cpt = 0;

const banner_img = document.querySelector(".banner-img");


const arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click",()=>{
	// faire -1
	cpt = cpt - 1;
	banner_img.src = "./assets/images/slideshow/"+slides[cpt].image
})


const arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click",()=>{
	cpt = cpt +1;
	banner_img.src = "./assets/images/slideshow/"+slides[cpt].image
})