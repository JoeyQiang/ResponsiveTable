(function($) {
	$(function() {
		function SlideToggle(date, detail) {
			this.target = $('.' + date);
			this.slide_content = $('.' + detail);
		}
		SlideToggle.prototype = {
			cur_width: $(window).width(),
			initial: function() {
				if (this.cur_width < 1024) {
					this.bind(this.target);
					this.disableLink(this.target);
				}
			},
			bind: function($o) {
				var _this = this;
				$o.bind('click', function() {
					var $detail = $(this).next('.detail');
					_this.animate($detail);
				});
			},
			animate: function($o) {
				if ($o.is(':hidden')) {
					$o.slideDown('slow');
				} else {
					$o.slideUp('slow');
				}
			},
			disableLink: function($o){
				var $link = $o.find('a');
				$link.removeAttr('href');
			}
		};
		var slideToggle = new SlideToggle('date', 'detail');
		slideToggle.initial();
	});
})(jQuery);