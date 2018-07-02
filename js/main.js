/*console.log('logo');*/
;$(function()
{
	var sidebar = $('#sidebar'), //选择侧栏
	mask = $('.mask'),
	backButton = $('.back-to-top'),
	sidebar_trigger = $('#sidebar_trigger');

	function showSideBar()	
		{
			mask.fadeIn();
			sidebar.css('transform','translate(0,0)');
		}

	function hideSideBar()
	{
		mask.fadeOut();
		sidebar.css('transform','translate(' + sidebar.width() + 'px'+',0)');
	}

	function backToTop(){
		$('html,body').animate({
			scrollTop:0
		},800)
	}

	sidebar_trigger.on('click',showSideBar);
	mask.on('click',hideSideBar);
	backButton.on('click',backToTop)


	$(window).on('scroll',function()
	{
		if ($(window).scrollTop() > $(window).height())
		{
			backButton.fadeIn();
		}
		else
			backButton.fadeOut();
	})

	/*$(window).trigger('scroll');*/

})
