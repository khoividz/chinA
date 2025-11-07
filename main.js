// ✅ Gallery tự load 21 ảnh ở root
const gallery = document.getElementById("galleryContainer");

for (let i = 1; i <= 21; i++) {
  let img = document.createElement("img");
  img.src = `class${i}.jpg`;
  img.alt = `Kỷ niệm ${i}`;
  img.className = "gallery-img";
  gallery.appendChild(img);
}

// ✅ Effect reveal khi cuộn
const reveals = document.querySelectorAll(".reveal");

function reveal() {
  for (let r of reveals) {
    const rect = r.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      r.classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();
