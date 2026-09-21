'use client';

export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      backgroundColor: '#fff8e1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#ff6f00', marginBottom: '3rem' }}>
        ⭐ BELAJAR BERHITUNG ⭐
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
        <button style={{ padding: '2rem 3rem', fontSize: '1.5rem', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '1rem' }}>
          ➕ TAMBAH
        </button>
        <button style={{ padding: '2rem 3rem', fontSize: '1.5rem', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: '1rem' }}>
          ➖ KURANG
        </button>
        <button style={{ padding: '2rem 3rem', fontSize: '1.5rem', backgroundColor: '#ff9800', color: 'white', border: 'none', borderRadius: '1rem' }}>
          ✖️ KALI
        </button>
        <button style={{ padding: '2rem 3rem', fontSize: '1.5rem', backgroundColor: '#e91e63', color: 'white', border: 'none', borderRadius: '1rem' }}>
          ➗ BAGI
        </button>
      </div>
      
      <p style={{ marginTop: '3rem', color: '#666' }}>Cerdas Anak Indonesia 🧡</p>
    </main>
  );
}
