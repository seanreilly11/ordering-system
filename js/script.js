var itemNameOutput = document.getElementById("customize-item-name");
var itemPriceOutput = document.getElementById("customize-item-price");
var itemBodyOutput = document.getElementById("customize-item-body");

var itemNameAdded = document.getElementById("added-food-item");

var orderedFood = ["Shrooms" , "Across to the pig ranch", "Sheep from the Middle East"];

$(document).ready(function(){
	$(".customize-button").click(function(e) {
		let itemName = e.target.parentNode.parentNode.children[0].children[0].children[0].innerHTML;
		let itemPrice = e.target.parentNode.parentNode.children[0].children[0].children[2].innerHTML;
		let itemBody = e.target.parentNode.parentNode.children[0].children[1].innerHTML;
		listCustomItem(itemName, itemPrice,itemBody);
	});

	$(".fa-edit").click(function(e) {
		let itemName = e.target.parentNode.parentNode.children[0].innerHTML;
		let itemPrice = e.target.parentNode.parentNode.nextElementSibling.innerHTML;
		var arrayId = orderedFood.indexOf(itemName);
		let itemBody = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling.children[arrayId].innerHTML;
		listCustomItem(itemName, itemPrice,itemBody);
	});
	
	// open and close customize section
	$(".customize-button").click(function() {
		$(".customize-container").show();
	});	
	$(".customize-close-popup").click(function() {
		$(".customize-container").hide();
	});

	$(".fa-edit").click(function() {
		$(".customize-container").show();
	});	
	$(".customize-close-popup").click(function() {
		$(".customize-container").hide();
	});
	// confirm customization
	$(".confirm-custom-btn").click(function() {
		$(".customize-container").hide();
	});
	$(".confirm-custom-btn").click(function(e) {
		let itemNameB = e.target.parentNode.children[1].children[0].children[0].innerText;
		listAddedItem(itemNameB);
	});

	// print added item into pop up
	$(".addToOrder-button").click(function(e) {
		let itemNameA = e.target.parentNode.parentNode.children[0].children[0].children[0].innerHTML;
		listAddedItem(itemNameA);
	});

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