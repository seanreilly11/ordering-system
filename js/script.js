var itemNameOutput = document.getElementById("customize-item-name");
var itemPriceOutput = document.getElementById("customize-item-price");
var itemBodyOutput = document.getElementById("customize-item-body");

var itemNameAdded = document.getElementById("added-food-item");

var timeDueOut = document.getElementById("food-due-time");

var orderedFood = ["Shrooms" , "Across to the pig ranch", "Sheep from the Middle East"]; // array to choose right food description

$(document).ready(function(){
	// function puts correct food item information in customize pop up
	$(".customize-button").click(function(e) {
		let itemName = e.target.parentNode.parentNode.children[0].children[0].children[0].innerHTML;
		let itemPrice = e.target.parentNode.parentNode.children[0].children[0].children[2].innerHTML;
		let itemBody = e.target.parentNode.parentNode.children[0].children[1].innerHTML;
		listCustomItem(itemName, itemPrice,itemBody);
	});

	// function puts correct food item information in customize pop up on view order page and finds the description
	$(".fa-edit").click(function(e) {
		let itemName = e.target.parentNode.parentNode.children[0].innerHTML;
		let itemPrice = e.target.parentNode.parentNode.nextElementSibling.innerHTML;
		var arrayId = orderedFood.indexOf(itemName); // finds what index in the array is the chosen food item
		let itemBody = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling.children[arrayId].innerHTML; // finds the food description of the correct food using the index in the array to find the right child
		listCustomItem(itemName, itemPrice,itemBody);
	});
	
	// open and close customize section
	$(".customize-button").click(function() { // open customize pop up on menu page
		$(".customize-container").show();
	});	

	$(".fa-edit").click(function() { // open customize pop up on view order page
		$(".customize-container").show();
	});	

	$(".customize-close-popup").click(function() { // close customize pop up by pressing the x
		$(".customize-container").hide();
	});

	// confirm customization
	$(".confirm-custom-btn").click(function() { // closes customize pop up on confirm click
		$(".customize-container").hide();
	});
	$(".confirm-custom-btn").click(function(e) { // and adds item to cart and shows pop up
		let itemNameB = e.target.parentNode.children[1].children[0].children[0].innerText;
		listAddedItem(itemNameB);
	});

	// print added item into pop up
	$(".addToOrder-button").click(function(e) {
		let itemNameA = e.target.parentNode.parentNode.children[0].children[0].children[0].innerHTML;
		listAddedItem(itemNameA);
	});

	// show call waiter pop up
	$(".call-waiter").click(function() {
		$(".waiter-container").show();
	});	
	$(".waiter-close-popup").click(function() { // and close it 
		$(".waiter-container").hide();
	});

	// show customized comment section
	$("#customize-accordion").click(function() { // shows customized information. Slides out from button changing its width
		var panel = this.nextElementSibling;
		if (panel.style.maxWidth){
			panel.style.padding = "0";
			panel.style.boxShadow = "none";
			panel.style.maxWidth = null;
		} else {
			panel.style.maxWidth = panel.scrollWidth + "rem";
			panel.style.padding = "1rem";
			panel.style.boxShadow = "0 4px 8px 4px rgba(255, 255, 255, 0.2)";
		} 
	});	

	// show online payment section 
	$("#online-check").click(function() {
		var isChecked = $('#online-check').prop('checked');
		if(isChecked){
			$(".payment__online--payment--outer").slideDown();
		} 
	});	

	// hide online payment section  
	$("#counter-check").click(function() {
		var isChecked = $('#online-check').prop('checked');
		if(!isChecked){
			$(".payment__online--payment--outer").slideUp();
		} 
		
	});	

	// toggle pay at counter information
	$(".payment__counter__info--button").click(function() {
		$(".payment__counter__info--hidden-text").toggle();
	});	

	// show date food is due
	var d = new Date(); 
	var v = new Date(); 
	v.setMinutes(d.getMinutes()+20); // current date plus 20 minutes

	// prints in 12 hour time
	if(v.getHours() > 12){
		if(v.getMinutes()<10){
			timeDueOut.innerHTML = v.getHours()-12+" : 0"+v.getMinutes()+" PM";
		}
		else{
			timeDueOut.innerHTML = v.getHours()-12+" : "+v.getMinutes()+" PM";
		}
	}
	else{
		if(v.getMinutes()<10){
			timeDueOut.innerHTML = v.getHours()-12+" : 0"+v.getMinutes()+" AM";
		}
		else{
			timeDueOut.innerHTML = v.getHours()+" : "+v.getMinutes()+" AM";
		}
	}
});

// lists item clicked into the customize pop up
function listCustomItem(itemName, itemPrice, itemBody) {
	itemNameOutput.innerHTML = itemName;
	itemPriceOutput.innerHTML = itemPrice;
	itemBodyOutput.innerHTML = itemBody;
}

// lists item clicked into the added cart pop up
// fades out after 5s
function listAddedItem(itemNameAdd) {
	itemNameAdded.innerHTML = itemNameAdd;
	$(".added-to-cart").fadeIn();
	$(".added-to-cart").delay(5000).fadeOut();
}

// rateyo section
 $("#rateYo").rateYo({
 	normalFill: "#fff",
    starWidth: "40px",
    rating: 2,
    halfStar: true
  });
