// Function to randomize and filter images by vertical orientation
async function fetchNekoImage() {
    try {
        const res = await fetch('https://api.nekosia.cat/api/v1/images/catgirl');
        const json = await res.json();
        return json.image.original.url;
    } catch (err) {
        console.error('Error fetching Neko image:', err);
        return '';
    }
}

function isVerticalImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = function () {
            resolve(this.height > this.width); // Check if height is greater than width
        };
        img.onerror = function () {
            resolve(false); // If the image fails to load, consider it invalid
        };
        img.src = url;
    });
}

async function randomizeImages() {
    const imageContainer = document.querySelector('.img_container');
    if (!imageContainer) {
        console.error('Image container not found in the DOM.');
        return;
    }

    const images = [];

    // Fetch and filter images
    while (images.length < 3) {
        const url = await fetchNekoImage();
        const isVertical = await isVerticalImage(url);
        if (isVertical) {
            images.push(url);
        }
    }

    // Clear the existing images in the container
    imageContainer.innerHTML = '';

    // Add the filtered images to the container
    images.forEach((url, index) => {
        const img = document.createElement('img');
        img.src = url;
        img.id = `layer${index + 1}`;
        img.alt = '';
        imageContainer.appendChild(img);
    });
}

// Call the function on page load
window.addEventListener('load', randomizeImages);