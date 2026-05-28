import { useState, useEffect } from 'react';

function LanguageRotator() {
  const languages = [
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'JavaScript', icon: '🟡', color: '#F7DF1E' },
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Flask', icon: '🌶️', color: '#000000' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'HTML5', icon: '🌐', color: '#E34F26' },
    { name: 'CSS3', icon: '🎨', color: '#1572B6' },
    { name: 'Git', icon: '📦', color: '#F05032' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [languages.length]);

  return (
    <div style={styles.floatingContainer}>
      {/* Globe container */}
      <div style={styles.globeWrapper}>
        <div style={styles.globe}>
          {/* Spinning ring */}
          <div style={styles.ring}>
            {languages.map((lang, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.logo,
                  transform: `rotate(${idx * 45}deg) translate(75px) rotate(-${idx * 45}deg)`,
                }}
              >
                <span style={{ fontSize: '22px' }}>{lang.icon}</span>
              </div>
            ))}
          </div>
          
          {/* Center display - icon only */}
          <div style={styles.center}>
            <div style={{ fontSize: '36px' }}>{languages[currentIndex].icon}</div>
          </div>
        </div>
        
        {/* Language name - OUTSIDE the circle, below it */}
        <div style={styles.languageName}>
          {languages[currentIndex].name}
        </div>
      </div>
    </div>
  );
}

const styles = {
  floatingContainer: {
    position: 'absolute',
    top: '80px',
    left: '20px',
    zIndex: 100,
    backgroundColor: 'transparent'
  },
  globeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  globe: {
    position: 'relative',
    width: '160px',
    height: '160px',
  },
  ring: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    animation: 'spin 10s linear infinite'
  },
  logo: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '40px',
    height: '40px',
    marginLeft: '-20px',
    marginTop: '-20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '50%',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    border: '2px solid #e0e0e0',
    fontSize: '22px'
  },
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '65px',
    height: '65px',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    border: '3px solid #007bff',
    zIndex: 10
  },
  languageName: {
    marginTop: '12px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#007bff',
    backgroundColor: 'rgba(0, 123, 255, 0.15)',
    padding: '6px 14px',
    borderRadius: '25px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backdropFilter: 'blur(5px)'
  }
};

// Add CSS keyframes for spinning animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
document.head.appendChild(styleSheet);

export default LanguageRotator;