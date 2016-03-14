var textContent = $('.text');
textContent.hide();
$('.btn').on("click", function() {
	textContent.show();
	$('.btn').hide();
});
if (jQuery.browser.mobile) {
   console.log('You are using a mobile device!');
	textContent.append('You are using a mobile device!')
} else {
   console.log('You are using a mobile device!');
	textContent.append('You are using a desktop device!')
}

var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
if (isiPad)
{
	console.log('You are using an iPad!');
	textContent.append('You are using an iPad!')
}

var isiPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
if (isiPhone)
{
	console.log('You are using an iPhone!');
	textContent.append('You are using an iPhone!')
}

var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());

if (isAndroid)
{
	console.log('You are using an Android!');
	textContent.append('You are using an Android!')
}
