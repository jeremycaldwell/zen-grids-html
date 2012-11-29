// Grid overlay
function toggle_visibility(id) {
	var e = document.getElementById(id);
	if(e.style.display == 'block')
    e.style.display = 'none';
	else
    e.style.display = 'block';
}


// Grid overlay toggle
$(document).ready(function () {
	$('#grid-toggle a').click(function() {
    $(this).text($(this).text() == 'Enable' ? 'Disable' : 'Enable');
    return false;
	})
});
