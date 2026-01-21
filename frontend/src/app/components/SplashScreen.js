import { useEffect, useState } from 'react';

export function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // progress animation (3 seconds)
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 3.33));
    }, 100);

    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onFinish]);

  return (
    <>
      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes moveBg {
          from { transform: scale(1); }
          to { transform: scale(1.2); }
        }
      `}</style>

      <div style={styles.container}>
        {/* Animated background */}
        <div style={styles.background} />

        {/* Logo Box */}
        <div style={styles.logoBox}>
          {/* Replace src with your logo */}
          <img
            src="/YUNILOGO.png"
            alt="YUNI Logo"
            style={styles.logoImg}
            onError={(e) => (e.target.style.display = 'none')}
          />
        </div>

        {/* Text */}
        <div style={styles.title}>YUNI</div>
        <div style={styles.subtitle}>Your experience is loading</div>

        {/* Progress Bar */}
        <div style={styles.progressWrapper}>
          <div style={{ ...styles.progressBar, width: `${progress}%` }} />
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    position: 'fixed',
    inset: 0,
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    zIndex: 9999,
    overflow: 'hidden',
  },

  background: {
    position: 'absolute',
    inset: 0,
    background:
      'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.12), transparent 40%)',
    animation: 'moveBg 6s ease-in-out infinite alternate',
  },

  logoBox: {
    width: 90,
    height: 90,
    borderRadius: 20,
    background: 'rgba(255,255,255,0.18)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backdropFilter: 'blur(10px)',
    animation: 'fadeDown 1s ease',
    zIndex: 2,
  },

  logoImg: {
    width: '70%',
    height: '70%',
    objectFit: 'contain',
  },

  title: {
    fontSize: '3rem',
    fontWeight: 700,
    letterSpacing: '4px',
    animation: 'fadeUp 1s ease',
    zIndex: 2,
  },

  subtitle: {
    fontSize: '1rem',
    opacity: 0.85,
    marginTop: 6,
    marginBottom: 30,
    animation: 'fadeUp 1.2s ease',
    zIndex: 2,
  },

  progressWrapper: {
    width: 220,
    height: 6,
    background: 'rgba(255,255,255,0.3)',
    borderRadius: 20,
    overflow: 'hidden',
    zIndex: 2,
  },

  progressBar: {
    height: '100%',
    background: '#ffffff',
    borderRadius: 20,
    transition: 'width 0.1s linear',
  },
};
