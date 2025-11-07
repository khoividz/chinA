const gallery = document.getElementById("galleryContainer");

for (let i = 1; i <= 21; i++) {
const img = document.createElement("img");
img.src = `img${i}.jpg`;
img.alt = `Kỷ niệm ${i}`;
gallery.appendChild(img);
}