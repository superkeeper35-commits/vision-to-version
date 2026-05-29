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
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [languages.length]);

  // Different sizes for mobile vs desktop
  const size = isMobile ? {
    globe: 80,
    logo: 22,
    center: 35,
    icon: 20,
    nameFont: 9,
    ringRadius: 40
  } : {
    globe: 120,
    logo: 30,
    center: 50,
    icon: 28,
    nameFont: 11,
    ringRadius: 60
  };

  const styles = {
    floatingContainer: {
      position: 'absolute',
      bottom: isMobile ? '5px' : '10px',
      left: isMobile ? '5px' : '10px',
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
      width: `${size.globe}px`,
      height: `${size.globe}px`,
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
      width: `${size.logo}px`,
      height: `${size.logo}px`,
      marginLeft: `-${size.logo / 2}px`,
      marginTop: `-${size.logo / 2}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '50%',
      boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
      border: '2px solid #e0e0e0',
      fontSize: `${size.logo * 0.6}px`
    },
    center: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: `${size.center}px`,
      height: `${size.center}px`,
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      border: '2px solid #007bff',
      zIndex: 10
    },
    languageName: {
      marginTop: isMobile ? '4px' : '8px',
      fontSize: `${size.nameFont}px`,
      fontWeight: 'bold',
      color: '#007bff',
      backgroundColor: 'rgba(0, 123, 255, 0.15)',
      padding: isMobile ? '2px 6px' : '4px 10px',
      borderRadius: '20px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      backdropFilter: 'blur(5px)'
    }
  };

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
                  transform: `rotate(${idx * 45}deg) translate(${size.ringRadius}px) rotate(-${idx * 45}deg)`,
                }}
              >
                <span>{lang.icon}</span>
              </div>
            ))}
          </div>
          
          <div style={styles.center}>
            <div style={{ fontSize: `${size.icon}px` }}>{languages[currentIndex].icon}</div>
          </div>
        </div>
        
        <div style={styles.languageName}>
          {languages[currentIndex].name}
        </div>
      </div>
    </div>
  );
}

// Add CSS keyframes
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