document.addEventListener("scroll", function () {
  var navbar = document.querySelector(".header");
  var navbarLinks = document.querySelectorAll(".navbar a");
  var links = navbar.querySelectorAll(".navbar a");
  var logoImage = document.getElementById("logoImage");
  var scrolled = window.scrollY;
  if (scrolled > 10) {
    logoImage.classList.add("black");
    navbar.style.backgroundColor = "#fff";
    links.forEach(function (link) {
      link.style.color = "#000"; // Ubah warna teks menjadi hitam
    });
  } else {
    logoImage.classList.remove("black");
    navbar.style.backgroundColor = "transparent";
    links.forEach(function (link) {
      link.style.color = "#fff"; // Kembalikan warna teks ke warna putih
    });
  }
  navbarLinks.forEach(function (link) {
    if (scrolled > 10) {
      link.classList.add("scrolled"); // Tambahkan kelas 'scrolled' untuk mengubah warna garis bawah
    } else {
      link.classList.remove("scrolled"); // Hapus kelas 'scrolled' untuk mengembalikan warna garis bawah
    }
  });
});

// Ketika pengguna menggulir ke bawah 20px dari puncak dokumen, munculkan tombol
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }

  // Tambahkan logika untuk mengubah warna navbar kembali ke hitam saat menggulir ke atas
  var navbar = document.querySelector(".header");
  var scrolled = window.scrollY;
  if (scrolled <= 10) {
    navbar.style.backgroundColor = "black";
  }
}

// Saat pengguna mengklik tombol, gulir ke puncak dokumen
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onbeforeunload = function () {
  window.location.href = "#home";
};
