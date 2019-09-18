var itemNameOutput = document.getElementById("customize-item-name");
var itemPriceOutput = document.getElementById("customize-item-price");
var itemBodyOutput = document.getElementById("customize-item-body");

$(document).ready(function(){
	$(".customize-button").click(function(e) {
		let itemName = e.target.parentNode.parentNode.children[0].children[0].children[0].innerHTML;
		let itemPrice = e.target.parentNode.parentNode.children[0].children[0].children[2].innerHTML;
		let itemBody = e.target.parentNode.parentNode.children[0].children[1].innerHTML;
		listItem(itemName, itemPrice,itemBody);
	});

	$(".customize-button").click(function() {
		$(".customize-container").show();
	});	
	$(".customize-close-popup").click(function() {
		$(".customize-container").hide();
	});

});

function listItem(itemName, itemPrice, itemBody) {
	itemNameOutput.innerHTML = itemName;
	itemPriceOutput.innerHTML = itemPrice;
	itemBodyOutput.innerHTML = itemBody;


	// $(".addToCartBtn").click(function(e) {
	// 	items.push(e.target.parentNode.children['0'].innerText);
	// 	listCart(items);
	// });
}