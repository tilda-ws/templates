;(function(){
	
	const activeClass = 'active';
	
	document.addEventListener("DOMContentLoaded", function(event) {
		
		const $textSlider = document.querySelector('.js-cursor-text');
		
		if ($textSlider) {
			const textsArr = ['по телефону', 'в мессенджере', 'по Zoom', 'по почте', '7 дней в неделю'];
			const textsCount = textsArr.length - 1;
			const $span = $textSlider.querySelector('span');
			let activeNum = 0;
			
			const writeText = function() {
				$textSlider.classList.remove('_' + activeNum); 
				activeNum = textsCount === activeNum ? 0 : activeNum + 1;
				
				$textSlider.classList.add('_' + activeNum);
				const newText = textsArr[activeNum];
				let counter = 1;
				
				let interval1 = setInterval(function() {
					if (counter == newText.length) {
						clearInterval(interval1);
					}
					
					$span.innerText = newText.slice(0, counter);
					
					counter += 1;
					
				}, 50);
			}
			
			const setChangeText = function(num) {
				
				let interval1 = setInterval(function(){
					const innerText = $span.innerText;
					
					if (innerText == '') {
						clearInterval(interval1);
						
						writeText();
					}
					
					$span.innerText = innerText.slice(0, -1);
				}, 50);
			}
			
			setInterval(setChangeText, 4000);
		}
		
		const $supportSlider = document.querySelector('.js-support-slider');
		
		if ($supportSlider) {
			const $items = Array.from($supportSlider.querySelectorAll('.mg-main-support__text-inner'));
			const itemsLength = $items.length - 1;
			let currentIndex = 0;
			const setNextSlide = function() {
				const prevIndex = currentIndex === 0 ? itemsLength : currentIndex - 1;
				$items[prevIndex].classList.add('prev');
				$items[prevIndex].classList.remove('active');
				setTimeout(function() {
					$items[currentIndex].classList.add('active');
				}, 400);
				setTimeout(function() {
					$items[prevIndex].classList.remove('prev');
					currentIndex = currentIndex == itemsLength ? 0 : currentIndex + 1;
				}, 1000);
				
			}
			
			setNextSlide();
			
			setInterval(setNextSlide, 5000);
			
			
			window.addEventListener('resize', function() {
				let maxHeight = 0;
				
				setTimeout(function() {
					$items.forEach(function($item) {
						
						const itemHeight = $item.offsetHeight;
						console.log(maxHeight, itemHeight);
						maxHeight = itemHeight > maxHeight ? itemHeight : maxHeight;
					})
					$supportSlider.style.minHeight = maxHeight + 'px';
				}, 500);
			});
			
			
		}
		
		document.querySelectorAll('.js-main-slider').forEach(function(item) {
			
			const destroyViewportWidth = item.dataset['destroy'] ? +item.dataset['destroy'] : null;
			const destroyViewportWidthMin = item.dataset['destroyMin'] ? +item.dataset['destroyMin'] : 0;
			let swiper = null;
			let flag = true;
			
			if (!destroyViewportWidth) {
				swiper = initSlider(item);
				return
			}
			
			window.addEventListener('resize', function() {
				
				const windowWidth = window.innerWidth;
				
				if (!flag && windowWidth >= destroyViewportWidth) {
					flag = true;
					swiper.destroy();
					
					return;
				}
				
				if (flag && windowWidth < destroyViewportWidth && windowWidth >= destroyViewportWidthMin) {
					flag = false;
					swiper = initSlider(item);
					
					return;
				}
				
			});
		});
		
		const $exampleSlider = document.querySelector('.mg-main-examples2__list-wrapper');
		
		if ($exampleSlider) {
			const $leftExamples = document.querySelectorAll('.mg-main-examples2__left-item');
			const $rightExamples = document.querySelectorAll('.mg-main-examples2__right-item');
			const slidesLength = $leftExamples.length - 1;
			let currentLeft = slidesLength;
			let currentRight = 1;
			
			$exampleSlider.swiper.on('slideChange', function(e) {
				const realIndex = e.realIndex;
				
				$leftExamples.forEach(function(item) {
					item.classList.remove('active');
				});
				
				currentLeft = realIndex == 0 ? slidesLength : realIndex - 1;
				currentRight = realIndex == slidesLength ? 0 : realIndex + 1;
				
				$rightExamples.forEach(function(item) {
					item.classList.remove('active');
				})
				
				$leftExamples[currentLeft].classList.add('active');
				$rightExamples[currentRight].classList.add('active');
				
			});
		}
		
		document.querySelectorAll('._tariff').forEach(function(item) {
			item.addEventListener('click', function(e){
				if (!e.target.closest('a')) {
					document.location = this.dataset.link;
				}
			});
		});
		
		document.querySelector('.js-mg-accordeon').addEventListener('click', function(e) {
			const $target = e.target.closest('.mg-main-faq__item-title');
			
			if (!$target) return;
			
			const $parent = $target.closest('.mg-main-faq__item');
			const $body = $parent.querySelector('.mg-main-faq__item-body');
			
			if ($parent.classList.contains(activeClass)) {
				$parent.classList.remove(activeClass);
				$body.style.height = 0 + 'px';
			} else {
				$parent.classList.add(activeClass);
				$body.style.height = $body.querySelector('.mg-main-faq__item-body-inner').offsetHeight + 'px';
			}
		});
		
		const $videoButtons = document.querySelectorAll('.js-video-init');
		
		if ($videoButtons.length) {
			$videoButtons.forEach(function(item){
				item.addEventListener('click', function(e) {
					e.preventDefault();
					
					const id = this.dataset['id'];
					
					console.log(id);
					
					if (window.youtubeAPIready) {
						initBlockPlayer(id);
					} else {
						initYoutubeAPI(id);
					}
				})
			});
		}
		
		if (document.querySelector('.js-about-video')) {
			document.querySelector('.js-about-video').addEventListener('click', function(e){
				const $parent = document.querySelector('.mg-main-video__popup');
				const $container = document.querySelector('#video_' + this.dataset["id"]);
				
				if ($container.youtubePlayer) {
					$container.youtubePlayer.playVideo();
					$parent.classList.add('_opened');
					return;
				}
				if (!$parent.classList.contains('_opened')) {
					$parent.classList.add('_opened');
				}
				
				document.querySelector('.mg-main-video__popup-close').addEventListener('click', function(e) {
					e.preventDefault();
					closeVideo();
				});
				
				document.addEventListener('keyup', function(e) {
					if ((e.code).toLowerCase() === 'escape') {
						closeVideo();
					}
				})
				
				function closeVideo() {
					$parent.classList.remove('_opened');
					
					if ($container.youtubePlayer) {
						$container.youtubePlayer.pauseVideo();
					}
				}
			});
		}
		
		window.dispatchEvent(new Event('resize'));
		
	});
	
	/* Slider */
	
	function initSlider(el) {
			
		const itemCount = el.dataset['items'].split(',');
		const parent = el.closest(el.dataset['parent'] || '.mp-wrapp');
		const itemMargin = el.dataset['margin'].split(',').map(function(i) {return +i});
		const dots = parent.querySelector('.js-swiper-dots');
		const arrows = parent.querySelector('.js-swiper-arrows');
		const loop = el.dataset['unloop'] ? false : true;
		const autoHeight = el.dataset['auto-height'] ? false : true;
		const center = !!el.dataset['center'] || false;
		const start = el.dataset['start'] || 0;
		
		const slideroptions = {
			slidesPerView: itemCount[0],
			containerModifierClass: 'mg-slider-list',
			wrapperClass: 'mg-slider-list-inner',
			slideClass: 'mg-slider-item',
			spaceBetween: itemMargin[0],
			loop: !!loop,
			initialSlide: +start,
			centeredSlides: center,
			loopedSlides: 3,
			breakpoints: {
				640: {
					slidesPerView: itemCount[1],
					spaceBetween: itemMargin[1]
				},
				960: {
					slidesPerView: itemCount[2],
					spaceBetween: itemMargin[2]
				},
				1200: {
					slidesPerView: itemCount[3],
					spaceBetween: itemMargin[3]
				},
				1440: {
					slidesPerView: itemCount[4],
					spaceBetween: itemMargin[4]
				}
			}
		}
		
		if (dots) {
			slideroptions.pagination = {
				el: dots,
				clickable: true,
				type: 'bullets',
				bulletClass: 'services-swiper-dot',
				bulletActiveClass: 'services-swiper-dot--active'
			}
		}
		
		if (arrows) {
			slideroptions.navigation = {
				nextEl: arrows.querySelector('.services-swiper-next'),
				prevEl: arrows.querySelector('.services-swiper-prev'),
				disabledClass: 'disable',
				hiddenClass: 'hidden'
			}
		}

		
		const slider = new Swiper(el, slideroptions);
		
		if (el.classList.contains('autoheight')) {
			slider.on('afterInit', setSlideHeight());
			slider.on('slideChangeTransitionStart', setSlideHeight);
		}
		
		return slider;
	}
	
	/* Slider End */
	
	/* Youtube Player */
	
	function initYoutubeAPI(id) {
		window.onYouTubeIframeAPIReady = function() {
			window.youtubeAPIready = true;
			
			initBlockPlayer(id);
		}
		
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
      	
      	var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		
	}
	
	function initBlockPlayer(id) {
		const $elem = document.querySelector('#video_' + id);
		
		if ($elem.youtubePlayer) return;
		
		let player;
		
		const onPlayerReady = function (event) {
			$elem.youtubePlayer = player;
			event.target.playVideo();
		}
		
		player = new YT.Player('video_' + id, {
			height: '360',
			width: '640',
			videoId: id,
			events: {
				'onReady': onPlayerReady
			}
		});
		
		
	}
	
	/* Youtube Player End */
	
})();