function Header() {
    return (
      <div
        style={{
          backgroundColor: '#6a82fb',
          color: '#fff',
          padding: '20px',
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px',
          transition: 'transform 0.3s ease, background-color 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Aishus Expense Tracker
      </div>
    );
  }
  
  export default Header;
  