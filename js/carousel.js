src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"
src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"

fetch('images.json')
.then(response => response.json())
.then(data => {
  const carouselIndicators = document.getElementById('carousel-indicators');
  const carouselInner = document.getElementById('carousel-inner');
  const images = data.images;

  images.forEach((image, index) => {
    const indicator = document.createElement('li');
    indicator.setAttribute('data-target', '#carouselExampleIndicators');
    indicator.setAttribute('data-slide-to', index.toString());
    if (index === 0) indicator.classList.add('active');
    carouselIndicators.appendChild(indicator);

    const item = document.createElement('div');
    item.classList.add('carousel-item');
    if (index === 0) item.classList.add('active');

    const link = document.createElement('a');
    link.href = image.src; // Assuming full version of image has the same path

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.description;
    img.classList.add('d-block', 'w-100');

    link.appendChild(img);
    item.appendChild(link);

    const caption = document.createElement('div');
    caption.classList.add('carousel-caption', 'd-none', 'd-md-block');
    const captionText = document.createTextNode(image.description);
    caption.appendChild(captionText);
    item.appendChild(caption);

    carouselInner.appendChild(item);
  });
})
.catch(error => console.error('Error fetching images:', error));

