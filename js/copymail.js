function copyEmail() {
    // Email adresini seç
    var emailText = document.getElementById('email').innerText;

    // Geçici bir input elementi oluştur
    var tempInput = document.createElement('input');
    tempInput.value = emailText;

    // Input'u body'ye ekle
    document.body.appendChild(tempInput);

    // Input içeriğini seç
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Mobil cihazlarda da çalışması için

    // Kopyala işlemi yap
    document.execCommand('copy');

    // Geçici input'u kaldır
    document.body.removeChild(tempInput);

    // Kullanıcıya kopyalandığını bildiren bir mesaj göster
    //alert('Email adresi kopyalandı: ' + emailText);
  }