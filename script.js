function ubahStatus(level) {
  const indikator = document.getElementById('status-indicator');
  const deskripsi = document.getElementById('status-deskripsi');

  if (level === 'AWAS') {
    indikator.textContent = 'AWAS';
    indikator.className = 'status awas';
    deskripsi.textContent = 'Penguncian integritas data (hashing) aktif. Snapshot digital chain of custody sedang dibuat.';
    alert('PERINGATAN: Indikasi api tingkat AWAS terdeteksi!');
  }
}
