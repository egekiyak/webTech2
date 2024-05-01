

      fetch('images.json')
      .then(response => response.json())
      .then(data => {
          const imageGrid = document.getElementById('image-grid');
          data.images.forEach(image => {
              const imageContainer = document.createElement('div');
              imageContainer.classList.add('image-container');

              const img = document.createElement('img');
              img.src = image.src;
              img.alt = image.description;
              img.classList.add('image');

              const description = document.createElement('div');
              description.classList.add('image-description');
              description.textContent = image.description;

              imageContainer.appendChild(img);
              imageContainer.appendChild(description);
              imageGrid.appendChild(imageContainer);
          });
      })
      .catch(error => console.error('Error fetching images:', error));

      

