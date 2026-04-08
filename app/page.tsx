export default function Home() {
  return (
    <div style={{ 
      padding: '80px 20px', 
      textAlign: 'center', 
      background: '#0a1f0a', 
      color: 'white', 
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ color: '#00a651', fontSize: '52px', marginBottom: '20px' }}>
        Green Jacket Gambit
      </h1>
      <p style={{ fontSize: '28px', marginBottom: '40px' }}>
        Masters 2026 Options Trading Game
      </p>
      <p style={{ fontSize: '20px' }}>
        App is deploying... Refresh in 30 seconds.<br/>
        If you still see 404, we need to add more files.
      </p>
    </div>
  );
}
