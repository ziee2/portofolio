let notLoadAll = document.querySelectorAll(".notload")


var typed= new Typed(".text",{
    // strings:["Programmer"],
    strings:["AI Specialist", "ML Developer", "AI Engineer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

window.onload = () => {
	setTimeout(function() {
		for (let i = 0; i < notLoadAll.length; i++) {
			if (typeof notLoadAll[i].attributes["notload-delay"] !== "object") {
				notLoadAll[i].classList.remove("notload")
			} else if (typeof notLoadAll[i].attributes["notload-delay"] == "object") {
				setTimeout(() => {
					notLoadAll[i].classList.remove("notload")
				}, 500)
			}
		}
		loading.classList.add("off")
		setTimeout(function() {
			loading.classList.add("transparent")
			setTimeout(function() {
				loading.style.display = "none"
			}, 1000);
		}, 100);
	}, 1000);
}


function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
