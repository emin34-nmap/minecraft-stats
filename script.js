// Şifre Giriş Fonksiyonu Güncellendi
function login() {
    const enteredPass = document.getElementById('pInp').value;
    const correctPass = localStorage.getItem('adm_p') || "0204"; // Varsayılan 0204

    if (enteredPass === correctPass) {
        // Şifre Doğru
        document.getElementById('loginArea').style.display = "none";
        document.getElementById('actionArea').style.display = "block";
        document.getElementById('pInp').value = ""; // Temizle
    } else {
        // Şifre Yanlış - Kullanıcıya Bildir
        alert("❌ WRONG PASSWORD! Please try again.");
        document.getElementById('pInp').value = ""; // Kutuyu boşalt
        document.getElementById('pInp').focus(); // Tekrar odaklan
    }
}

// Şifre Değiştirme Fonksiyonu
function changePass() {
    const np = document.getElementById('newPass').value;
    if (np.length >= 4) {
        localStorage.setItem('adm_p', np);
        alert("✅ Password Updated Successfully! Your new pass: " + np);
        document.getElementById('newPass').value = "";
    } else {
        alert("⚠️ Password must be at least 4 characters!");
    }
}