function toggleFoldable() {
	var content = document.getElementById('header-status');
	if (content.style.display === 'none' || content.style.display === '') {
		content.style.display = 'block';
	} else {
		content.style.display = 'none';
	}
}