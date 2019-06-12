const updateSizeImg = () => {
	const img = document.querySelector('.container img');
	img.style.objectFit = 'cover';
	img.style.objectPosition = 'center';
	img.style.width = '100%';
	img.style.height = '100vh';
}

updateSizeImg();
