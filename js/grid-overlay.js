// Grid overlay toggle
$(document).ready(function () {
	$('a#gridoverlay').click(function() {
    $(this).text($(this).text() == 'Enable' ? 'Disable' : 'Enable');
    $('#grid-overlay').toggle();
	})
});