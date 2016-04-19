	window.onload = function() {
		var isStopped = false
		var inc = 500
		var max = 1000
		var areAnimated = false

		/// events

		document.body.onmouseover = function(e) {
			if( e.target != document.body ) {
				document.body.removeChild(document.getElementById(e.target.id))
				document.title--;
			}
		}

		window.onkeypress = function (event) {
			if( event.which == 32 ) {
				if ( isStopped ) {
					isStopped = false
					max = 5000
					bubbleAway()
				}
				else {
					isStopped = true
				}
			}
			else if( event.which == 13 ) {
				areAnimated = !areAnimated

				var spots = document.getElementsByClassName('spot')

				// TODO add random animation
				if( areAnimated ) {
					for (var i = 0; i < spots.length; i++) {
						spots[i].classList.add('animated')
					}
				} else if( !areAnimated ) {
					for (var i = 0; i < spots.length; i++) {
						spots[i].classList.remove('animated')
					}
				}
			}

			return false
		}

		/// utils

		var addSpot = function () {
			document.title++

			var spot = document.createElement('div')
			spot.classList.add('spot')

			if( areAnimated )
				spot.classList.add('animated')

			document.body.appendChild(spot)

			var randSize = Math.random() * 200
			spot.style.width = randSize + 'px'
			spot.style.height = randSize + 'px'

			var animationDuration = Math.random() * 10 + 's'
			spot.style.webkitAnimationDuration = animationDuration
			spot.style.mozAnimationDuration = animationDuration
			spot.style.oAnimationDuration = animationDuration
			spot.style.animationDuration = animationDuration


			spot.style.left = Math.random() * window.innerWidth - randSize * 0.50 + 'px'
			spot.style.top = Math.random() * window.innerHeight - randSize * 0.50 + 'px'

			spot.style.background = '#' + Math.floor(Math.random() * 0xffffff).toString(16)
			spot.id = Math.random()
		}

		var bubbleAway = function() {
			if( document.title > max && !isStopped )
				isStopped = true

			if( !isStopped ) {
				addSpot()
				setTimeout(bubbleAway, inc <= 0 ? 1 : inc -= 15)
			}
		}

		/// main

		bubbleAway()


	}
