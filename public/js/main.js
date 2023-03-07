/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

// Showing/hiding learning stacks/stack form

function openForm() {
	document.getElementById("addLearningStackForm").style.display = "flex";
	if (
		navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/iPhone/i)
	  ) {
		document.getElementById("nav").style.display = "none";
	  }
  }
  
  function closeForm() {
	document.getElementById("addLearningStackForm").style.display = "none";
  }


//   Showing/hiding mobile nav

  function toggleMobileNav() {
	var x = document.getElementById("nav");
	if (x.style.display === "none") {
	  x.style.display = "flex";
	} else {
	  x.style.display = "none";
	}
  }



 
// Public checkmark functinoality  
document.getElementsByClassName("leanring-stack-button").addEventListener("click", publicUpdate);

function publicUpdate(){

	console.log("publicUpdate is working!")

	const learningStackId = this.parentNode.dataset.id
    try{
        const response = await fetch('/learning-stacks/public/', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'learningStackIdFromJSFile': learningStackId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
  }