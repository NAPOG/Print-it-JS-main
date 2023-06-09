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
const banner_tagline = document.querySelector(".banner-tagline");
const tagLine = document.querySelector('.tagLine');
const bullets = document.querySelector('.dots')

//bullets//
const displayBullets = ()=>{
	bullets.innerHTML = "";
	for(let i = 0; slides.length > i; i++)//permet de faire revenir a image1// 
	{
		const bullet = document.createElement('div');
		bullet.classList.add("dot")
		if(cpt == i)
			bullet.classList.add("dot_selected")

		bullets.appendChild(bullet);		
		}

}

const init = () =>{
	tagLine.innerHTML = slides[cpt].tagLine;
	displayBullets();
	
}


init();



//Arrows//
const arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click",()=>{
	if(cpt == 0){
		cpt = slides.length-1;
	}else{
		cpt = cpt - 1;
	}
	
	banner_img.src = "./assets/images/slideshow/"+slides[cpt].image
	tagLine.innerHTML = slides[cpt].tagLine;
	displayBullets();
})


const arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click",()=>{	
	if((slides.length-1) == cpt){
		cpt =0;
	}else{
		cpt = cpt +1;
	}
	banner_img.src = "./assets/images/slideshow/"+slides[cpt].image;
	tagLine.innerHTML = slides[cpt].tagLine;
	displayBullets();
	
})