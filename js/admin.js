const ADMIN_PIN = '12345'; // PIN default

// Fungsi untuk verifikasi PIN
function verifyPin() {
    const pinInput = document.getElementById('pinInput').value;
    const pinError = document.getElementById('pinError');
    const pinSection = document.getElementById('pinSection');
    const adminDashboard = document.getElementById('adminDashboard');
    
    if (pinInput === ADMIN_PIN) {
        pinSection.classList.add('hidden');
        adminDashboard.classList.remove('hidden');
    } else {
        pinError.classList.remove('hidden');
    }
}

// Fungsi untuk memproses file CSV
function processCSV() {
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Silakan pilih file CSV');
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const contents = e.target.result;
        const lines = contents.split('\n');
        const headers = lines[0].split(',');
        
        // Validasi header
        const expectedHeaders = ['userid', 'nama', 'ttl', 'nis', 'nisn', 'urlfoto', 'urlraport', 'urlijazah'];
        const isValid = expectedHeaders.every(header => headers.includes(header));
        
        if (!isValid) {
            alert('Format CSV tidak valid. Pastikan kolom sesuai dengan format yang ditentukan.');
            return;
        }
        
        // Proses data (dalam aplikasi nyata, ini akan mengirim ke API)
        for (let i = 1; i < lines.length; i++) {
            if (lines[i].trim() === '') continue;
            
            const values = lines[i].split(',');
            const alumni = {
                userid: values[0],
                nama: values[1],
                ttl: values[2],
                nis: values[3],
                nisn: values[4],
                urlfoto: values[5],
                urlraport: values[6],
                urlijazah: values[7]
            };
            
            console.log('Data alumni dari CSV:', alumni);
            // Di sini biasanya akan ada kode untuk menyimpan ke database
        }
        
        alert(`Berhasil memproses ${lines.length - 1} data alumni`);
    };
    
    reader.readAsText(file);
}

// Fungsi untuk menyimpan data manual
document.getElementById('alumniForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        userid: document.getElementById('userid').value,
        nama: document.getElementById('nama').value,
        ttl: document.getElementById('ttl').value,
        nis: document.getElementById('nis').value,
        nisn: document.getElementById('nisn').value,
        urlfoto: document.getElementById('urlfoto').value,
        urlraport: document.getElementById('urlraport').value,
        urlijazah: document.getElementById('urlijazah').value
    };
    
    // Dalam aplikasi nyata, ini akan mengirim data ke API
    console.log('Data alumni yang disimpan:', formData);
    alert('Data alumni berhasil disimpan!');
    
    // Reset form
    this.reset();
});

// Event listener untuk halaman admin
document.addEventListener('DOMContentLoaded', () => {
    // Fokus ke input PIN saat halaman dimuat
    document.getElementById('pinInput').focus();
});
