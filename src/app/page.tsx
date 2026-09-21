'use client'

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#FFF8E1',
      padding: '24px',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', color: '#FF6F00', fontSize: '28px' }}>
        ⭐ BELAJAR BERHITUNG ⭐
      </h1>
      
      <p style={{ textAlign: 'center', fontSize: '16px', color: '#444', marginTop: '8px' }}>
        Bersama Cerdas Anak Indonesia 🇮🇩
      </p>

      <div style={{ marginTop: '32px', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
        <button style={{
          width: '100%', padding: '16px', fontSize: '18px',
          backgroundColor: '#4CAF50', color: 'white',
          border: 'none', borderRadius: '12px', marginBottom: '12px',
          cursor: 'pointer'
        }}>
          🍎 Tambah
        </button>

        <button style={{
          width: '100%', padding: '16px', fontSize: '18px',
          backgroundColor: '#2196F3', color: 'white',
          border: 'none', borderRadius: '12px', marginBottom: '12px',
          cursor: 'pointer'
        }}>
          🫐 Kurang
        </button>

        <button style={{
          width: '100%', padding: '16px', fontSize: '18px',
          backgroundColor: '#FF9800', color: 'white',
          border: 'none', borderRadius: '12px', marginBottom: '12px',
          cursor: 'pointer'
        }}>
          ✖️ Kali
        </button>

        <button style={{
          width: '100%', padding: '16px', fontSize: '18px',
          backgroundColor: '#9C27B0', color: 'white',
          border: 'none', borderRadius: '12px',
          cursor: 'pointer'
        }}>
          ➗ Bagi
        </button>
      </div>
    </main>
  )
}
