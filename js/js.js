$(function() {
	var slideToggle = {
		$target: $(".date"),
		$slide_content: $(".detail"),
		$cur_width: $(window).width(),
		initial: function() {
			if (this.$cur_width < 1024) {
				this.$slide_content.eq(0).css({
					display: 'block'
				});
				this.bind(this.$target);
			}
		},
		bind: function($o) {
			$o.bind("click", function() {
				var $detail = $(this).next('.detail');
				slideToggle.animate($detail);
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
	slideToggle.initial();
});