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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [languages.length]);

  return (
    <div style={styles.floatingContainer}>
      <div style={styles.globeWrapper}>
        <div style={styles.globe}>
          <div style={styles.ring}>
            {languages.map((lang, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.logo,
                  transform: `rotate(${idx * 45}deg) translate(60px) rotate(-${idx * 45}deg)`,
                }}
              >
                <span style={{ fontSize: '18px' }}>{lang.icon}</span>
              </div>
            ))}
          </div>
          
          <div style={styles.center}>
            <div style={{ fontSize: '28px' }}>{languages[currentIndex].icon}</div>
          </div>
        </div>
        
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
    bottom: '10px',  // Moved up slightly
    left: '10px',
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
    width: '120px',  // Smaller from 160px
    height: '120px', // Smaller from 160px
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
    width: '30px',   // Smaller from 40px
    height: '30px',  // Smaller from 40px
    marginLeft: '-15px',
    marginTop: '-15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '50%',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
    border: '2px solid #e0e0e0',
    fontSize: '18px'
  },
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50px',   // Smaller from 65px
    height: '50px',  // Smaller from 65px
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    border: '2px solid #007bff',  // Thinner border
    zIndex: 10
  },
  languageName: {
    marginTop: '8px',  // Reduced from 12px
    fontSize: '11px',  // Reduced from 14px
    fontWeight: 'bold',
    color: '#007bff',
    backgroundColor: 'rgba(0, 123, 255, 0.15)',
    padding: '4px 10px',  // Reduced padding
    borderRadius: '20px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
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
  
  /* Mobile: further adjustments */
  @media (max-width: 768px) {
    .language-rotator {
      transform: scale(0.9);
      bottom: 5px !important;
      left: 5px !important;
    }
  }
  
  @media (max-width: 480px) {
    .language-rotator {
      transform: scale(0.85);
    }
  }
`;
document.head.appendChild(styleSheet);

export default LanguageRotator;