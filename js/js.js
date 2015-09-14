(function($) {
	$(function() {
		function SlideToggle(date, detail) {
			this.target = $("." + date);
			this.slide_content = $("." + detail);
		}
		SlideToggle.prototype = {
			cur_width: $(window).width(),
			initial: function() {
				if (this.cur_width < 1024) {
					this.slide_content.eq(0).css({
						display: 'block'
					});
					this.bind(this.target);
				}
			},
			bind: function($o) {
				var _this = this;
				$o.bind("click", function() {
					var $detail = $(this).next('.detail');
					_this.animate($detail);
				});
			},
			animate: function($o) {
				if ($o.is(":hidden")) {
					$o.slideDown('slow');
				} else {
					$o.slideUp('slow');
				}
			}
		};
		var slideToggle = new SlideToggle("date", "detail");
		slideToggle.initial();
	});
})(jQuery);