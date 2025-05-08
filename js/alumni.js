
// Data alumni dummy (dalam aplikasi nyata, ini akan diambil dari database/API)
let alumniData = [];

// Fungsi untuk mencari alumni berdasarkan NIS
function searchAlumni() {
    const nisInput = document.getElementById('nisInput').value.trim();
    const alumniDashboard = document.getElementById('alumniDashboard');
    const notFoundMessage = document.getElementById('notFoundMessage');
    
    // Reset tampilan
    alumniDashboard.classList.add('hidden');
    notFoundMessage.classList.add('hidden');
    
    if (!nisInput) {
        alert('Silakan masukkan NIS');
        return;
    }
    
    // Dalam aplikasi nyata, ini akan berupa request ke API
    // Di sini kita menggunakan data dummy untuk simulasi
    const foundAlumni = alumniData.find(alumni => alumni.nis === nisInput);
    
    if (foundAlumni) {
        // Tampilkan data alumni
        document.getElementById('alumniName').textContent = foundAlumni.nama;
        document.getElementById('alumniTtl').textContent = `Tempat/Tanggal Lahir: ${foundAlumni.ttl}`;
        document.getElementById('alumniNis').textContent = `NIS: ${foundAlumni.nis}`;
        document.getElementById('alumniNisn').textContent = `NISN: ${foundAlumni.nisn}`;
        document.getElementById('alumniPhoto').src = foundAlumni.urlfoto;
        
        // Simpan data untuk digunakan saat download
        document.getElementById('alumniPhoto').dataset.raportUrl = foundAlumni.urlraport;
        document.getElementById('alumniPhoto').dataset.ijazahUrl = foundAlumni.urlijazah;
        
        alumniDashboard.classList.remove('hidden');
    } else {
        notFoundMessage.classList.remove('hidden');
    }
}

// Fungsi untuk menampilkan modal foto
function showPhotoModal(photoUrl) {
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalPhoto');
    
    modalImg.src = photoUrl;
    modal.classList.remove('hidden');
}

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById('photoModal').classList.add('hidden');
}

// Fungsi untuk mengunduh dokumen
function downloadDocument(type) {
    const alumniPhoto = document.getElementById('alumniPhoto');
    let url;
    
    if (type === 'raport') {
        url = alumniPhoto.dataset.raportUrl;
    } else if (type === 'ijazah') {
        url = alumniPhoto.dataset.ijazahUrl;
    }
    
    if (url) {
        // Dalam aplikasi nyata, ini bisa berupa pembukaan tab baru atau download langsung
        window.open(url, '_blank');
    } else {
        alert('URL dokumen tidak tersedia');
    }
}

// Event listener untuk modal
document.addEventListener('DOMContentLoaded', () => {
    // Tutup modal saat klik di luar gambar
    const modal = document.getElementById('photoModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Dalam aplikasi nyata, data akan diambil dari API
    // Ini hanya contoh data dummy
    alumniData = [
        {
            userid: '001',
            nama: 'John Doe',
            ttl: 'Jakarta, 1 Januari 2000',
            nis: '12345',
            nisn: '9876543210',
            urlfoto: 'https://drive.google.com/uc?id=1abcxyz',
            urlraport: 'https://drive.google.com/file/d/1raport123/view',
            urlijazah: 'https://drive.google.com/file/d/1ijazah456/view'
        },
        {
            userid: '002',
            nama: 'Jane Smith',
            ttl: 'Bandung, 15 Februari 2000',
            nis: '67890',
            nisn: '0123456789',
            urlfoto: 'https://drive.google.com/uc?id=2defuvw',
            urlraport: 'https://drive.google.com/file/d/2raport789/view',
            urlijazah: 'https://drive.google.com/file/d/2ijazah012/view'
        }
    ];
});
