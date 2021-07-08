import { Swiper, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation, Autoplay } from "swiper"

Swiper.use([Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation, Autoplay]);


document.addEventListener('DOMContentLoaded', () => {

	const introSwiper = new Swiper('.intro__swiper', {
		loop: true,

		// If we need pagination
		pagination: {
			el: '.intro__pagination',
			type: "fraction"
		},

		// Navigation arrows
		navigation: {
			nextEl: '.intro__btn-next',
			prevEl: '.intro__btn-prev',
		},

	});


	const projectSwiper = new Swiper('.project__swiper', {
		loop: true,

		// If we need pagination
		pagination: {
			el: '.project__pagination',
			type: "fraction"
		},
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		//   },

		// Navigation arrows
		navigation: {
			nextEl: '.project__btn-next',
			prevEl: '.project__btn-prev',
		},

	});


	const certificateSwiper = new Swiper('.certificate__swiper', {
		loop: true,

		// If we need pagination
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
				allowSlideNext: true,
				allowSlidePrev: true,
			},
			// when window width is >= 480px
			541: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			// when window width is >= 640px
			1024: {
				slidesPerView: 4,
				spaceBetween: 16,
				//   allowSlideNext: false,
				//   allowSlidePrev: false,
			}
		},

		// Navigation arrows
		navigation: {
			nextEl: '.certificate__btn-next',
			prevEl: '.certificate__btn-prev',
		},

	});



	var acc = document.querySelectorAll(".help__accordion");
	var i;
	let panel = document.querySelectorAll('.help__panel');



	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}


	//   acc.forEach((item, index) => {
	// 	item.addEventListener('click', () => {
	// 		panel.forEach((elem, counter) => {
	// 			elem.style.maxHeight = null;
	// 			if (index === counter) {
	// 				item.classList.add('active')
	// 				elem.style.maxHeight = elem.scrollHeight + "px";			
	// 			  } else {

	// 		  }
	// 		  })


	// 	})
	// });

	document.getElementById("defaultOpen").click();





	let btn = document.querySelector('.capability__btn');
	let content = document.querySelector('.capability__info');


	btn.addEventListener('click', () => {
		console.log(btn.innerHTML);
		if (btn.innerHTML == "Читать полностью") {
			btn.innerHTML = "Скрыть";
		} else {
			btn.innerHTML = "Читать полностью";
		}
		content.classList.toggle('active');
	})









	let solutionBtn = document.querySelectorAll('.solutions__button-1');
	let solutionBlock = document.querySelectorAll('.solution__block-1');


	solutionBtn.forEach((item, index) => {
		// console.log(index);
		item.addEventListener('click', () => {
			solutionBtn.forEach(elem => {
				elem.classList.remove('active');
			})
			solutionBlock.forEach((item, counter) => {
				item.style.display = "none";
				if (index === counter) {
					item.style.display = "block";
				}
			})
			item.classList.toggle('active');
		})

	})


	let solutionBtn2 = document.querySelectorAll('.solutions__button-2');
	let solutionBlock2 = document.querySelectorAll('.solution__block-2');


	solutionBtn2.forEach((item, index) => {
		// console.log(index);
		item.addEventListener('click', () => {
			solutionBtn2.forEach(elem => {
				elem.classList.remove('active');
			})
			solutionBlock2.forEach((item, counter) => {
				item.style.display = "none";
				if (index === counter) {
					item.style.display = "block";
				}
			})
			item.classList.toggle('active');
		})

	})




	document.getElementById("defaultClick-1").click();
	document.getElementById("defaultClick-2").click();



	/**
	 * Handler for controls buttons in number input
	 */
	var numberContolButtons = [].slice.call(document.querySelectorAll('[data-number-control]'));
	numberContolButtons.map(function (btnElement) {
		btnElement.addEventListener('click', (event) => {
			var btnType = btnElement.dataset.action;
			var numberInput = btnElement.closest('.form__number-wrapper');

			numberInput = numberInput.querySelector('input[type="number"]')

			if (!numberInput)
				return;


			if (btnType === 'plus')
				numberInput.value = +numberInput.value + 1;
			else if (numberInput.min < numberInput.value)
				numberInput.value -= 1;
		});
	})


	/**
	 *  Calculation form behavior
	 */
	var calcBtn = document.querySelector('.calculator__form .calculator_btn_next');
	calcBtn.addEventListener('click', (event) => {
		
		var fields = [].slice.call(document.querySelectorAll('.calculator__form-visible input, select'));
		var isAllValid = true;

		fields.map(function (filedElement) {
			console.log(filedElement.validity.valid);
			if(!filedElement.validity.valid)
				isAllValid = false;
		})

		if(isAllValid){
			event.preventDefault();
			var hiddenBlock = document.querySelector('.calculator__form .calculator__form-hidden');
			hiddenBlock.classList.add('show');
		}

		

	});
})
