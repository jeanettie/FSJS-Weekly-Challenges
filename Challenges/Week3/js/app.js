//  1.)  Make sure you have a reference to jQuery from a CDN in the index.html file.  

//  2.)  Use a jQuery to hide all of the answers to all the questions.
$('.answer').hide();

/*  3.)  Write code to show the answer when hovering over a flash card, and hide it when the mouse leaves. 
    Find the approriate event on the jQuery API page to trigger an action on hover https://api.jquery.com/category/events/
    Hint: You can use "this" inside your jQuery function to reference a selected DOM node.  */
$('.flash-card').hover
(function(){
	$(this).children('.answer').show();
},
 	function(){	
		$(this).children('.answer').hide();
});





/*  4.) Use jQuery to find the button element on the page and have it toggle all of the answers on and off when clicked.
    Hint: jQuery has a toggle function that can toggle the visibility of a selected DOM node.
    Bonus:  Change the text of the button using jQuery when you toggle the answers on/off. */ 
var cheating = false;
$('.cheat-button').click(
	function(){
		cheating = !cheating;
		if (cheating) {
			$('.answer').show();
			$(this).text('Hide all Answers');
		} 
		else {
			$('.answer')hide();
			$(this).text('Show all Answers');
		}

	}
	);   

	








/*var $this = (".cheat-button")
		$('.cheat-button').click(function(){
			$('.answer').toggle(function(){
				$this.text("Show All Answers");
				}, function() {
					$this.text("Show All Answers");
				});					
				

			});*/ 
			/*(function(){
				$('.answer').show();
				$(this).text("Show All Answers");
			}, function(){
				$('.answer').hide();
				$(this).text("Hide All Answers");
			}

			});*/



		












/*var $this = $(this)
		$('.cheat-button').click(function(){
			$this.toggleClass('show');
			if ($this.hasClass('show')){
				$this.text('Show All Answers');
			}else {
				$this.text('Hide All Answers');
			}


		});
		*/

	


