document.addEventListener("DOMContentLoaded", async function () {
    try {
        // Fetching data from the Dog API
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        // Extracting JSON data from the API response
        const data = await response.json();

        // Finding the HTML element with the id "json-info"
        const jsonInfo = document.getElementById("json-info");
        
        // Displaying the JSON content with proper formatting
        jsonInfo.textContent = JSON.stringify(data, null, 2);

        // Finding HTML elements with the ids "original" and "greyscale"
        const originalImage = document.getElementById("original");
        const greyscaleImage = document.getElementById("greyscale");

        // Setting the source of the original image to both containers
        originalImage.src = data.message;
        greyscaleImage.src = data.message;

        // Creating a canvas element and getting its 2D rendering context
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        // Creating an image element
        const img = new Image();
        // Allowing cross-origin resource sharing
        img.crossOrigin = "Anonymous";

        img.onload = function () {

            // Setting the dimensions of the canvas to match the image
            canvas.width = img.width;
            canvas.height = img.height;

            // Drawing the original images on the canvas
            context.drawImage(img, 0, 0, img.width, img.height);

            // Start timer for mirroring
            const startTimeMirror = performance.now();

            // Mirror the entire image
            for (let y = 0; y < img.height; y++) {
                for (let x = 0; x < img.width / 2; x++) {
                    const mirroredX = img.width - x - 1;
                    swapPixels(context, x, y, mirroredX, y);
                }
            }
            // Stop timer for mirroring
            const endTimeMirror = performance.now();
            // Calculate time taken for the mirror effect and display it
            const mirrorTime = endTimeMirror - startTimeMirror;
            document.getElementById("mirror-time").textContent = `Mirror time: ${mirrorTime} milliseconds`;

            const imageData = context.getImageData(0, 0, img.width, img.height);
            const data = imageData.data;

            // Find the length of 1 piece of the photo (4 pieces required)
            const onePiece = data.length / 4;

            context.putImageData(imageData, 0, 0);
            greyscaleImage.src = canvas.toDataURL("image/png");

            setTimeout(async function(){
                // Start timer for first piece grayscaling
                const startTimePiece1 = performance.now();

                for (let i = 0; i < onePiece; i += 4) {
                    const luminosity = 0.3 * data[i] + 0.59 * data[i + 1] + 0.11 * data[i + 2];
                    data[i] = luminosity;
                    data[i + 1] = luminosity;
                    data[i + 2] = luminosity;
                }

                context.putImageData(imageData, 0, 0);

                greyscaleImage.src = canvas.toDataURL("image/png");

                // Stop timer for first piece grayscaling
                const endTimePiece1 = performance.now();
                // Calculate time taken for the grayscale effect and display it
                const piece1Time = endTimePiece1 - startTimePiece1;
                document.getElementById("grayscale1-time").textContent = `grayscalePiece1-time: ${piece1Time} milliseconds`;
            }, 1000);

            setTimeout(async function(){
                const startTimePiece2 = performance.now();

                for (let i = onePiece; i < 2*onePiece; i += 4) {
                    const luminosity = 0.3 * data[i] + 0.59 * data[i + 1] + 0.11 * data[i + 2];
                    data[i] = luminosity;
                    data[i + 1] = luminosity;
                    data[i + 2] = luminosity;
                }

                context.putImageData(imageData, 0, 0);

                greyscaleImage.src = canvas.toDataURL("image/png");

                const endTimePiece2 = performance.now();
                const piece2Time = endTimePiece2 - startTimePiece2;
                document.getElementById("grayscale2-time").textContent = `grayscalePiece2-time: ${piece2Time} milliseconds`;
            }, 2000);

            setTimeout(async function(){
                const startTimePiece3 = performance.now();

                for (let i = 2*onePiece; i < 3*onePiece; i += 4) {
                    const luminosity = 0.3 * data[i] + 0.59 * data[i + 1] + 0.11 * data[i + 2];
                    data[i] = luminosity;
                    data[i + 1] = luminosity;
                    data[i + 2] = luminosity;
                }

                context.putImageData(imageData, 0, 0);

                greyscaleImage.src = canvas.toDataURL("image/png");

                const endTimePiece3 = performance.now();
                const piece3Time = endTimePiece3 - startTimePiece3;
                document.getElementById("grayscale3-time").textContent = `grayscalePiece3-time: ${piece3Time} milliseconds`;
            }, 3000);

            setTimeout(async function(){
                const startTimePiece4 = performance.now();

                for (let i = 3*onePiece; i < 4*onePiece; i += 4) {
                    const luminosity = 0.3 * data[i] + 0.59 * data[i + 1] + 0.11 * data[i + 2];
                    data[i] = luminosity;
                    data[i + 1] = luminosity;
                    data[i + 2] = luminosity;
                }

                context.putImageData(imageData, 0, 0);

                greyscaleImage.src = canvas.toDataURL("image/png");

                const endTimePiece4 = performance.now();
                const piece4Time = endTimePiece4 - startTimePiece4;
                document.getElementById("grayscale4-time").textContent = `grayscalePiece4-time: ${piece4Time} milliseconds`;
            }, 4000);

        };
        // Setting the source of the image element to the URL from the JSON data
        img.src = data.message;
    } catch (error) {
        console.error("Error fetching image:", error);
    }
});

// Function to swap RGB values between two pixels
function swapPixels(context, x1, y1, x2, y2) {
    const pixel1 = context.getImageData(x1, y1, 1, 1).data;
    const pixel2 = context.getImageData(x2, y2, 1, 1).data;

    for (let i = 0; i < 3; i++) {
        const temp = pixel1[i];
        pixel1[i] = pixel2[i];
        pixel2[i] = temp;
    }

    context.putImageData(new ImageData(pixel1, 1, 1), x1, y1);
    context.putImageData(new ImageData(pixel2, 1, 1), x2, y2);
}
