import { useState } from 'react';
import { Link } from 'react-router-dom';

export function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful! Welcome to YUNI!');
        setFormData({ fullName: '', email: '', phoneNumber: '', password: '', confirmPassword: '' });
      } else {
        alert(`Registration failed: ${data.msg || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Could not connect to the server. Please ensure the backend is running.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    container: { maxWidth: '500px', width: '100%', position: 'relative', zIndex: 2 },
    card: {
      background: 'white',
      borderRadius: '25px',
      padding: '3rem',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      animation: 'slideInScale 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
    header: { textAlign: 'center', marginBottom: '2.5rem' },
    logo: {
      fontSize: '3rem',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '0.5rem',
    },
    subtitle: { color: '#666', fontSize: '1.1rem' },
    form: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
    inputGroup: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
    label: { fontSize: '0.95rem', fontWeight: 600, color: '#555' },
    input: {
      padding: '1rem',
      fontSize: '1rem',
      border: '2px solid #e0e0e0',
      borderRadius: '12px',
      outline: 'none',
      transition: 'all 0.3s',
    },
    submitButton: {
      padding: '1.2rem',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      marginTop: '1rem',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    divider: { display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0' },
    line: { flex: 1, height: '1px', background: '#e0e0e0' },
    dividerText: { color: '#999', fontSize: '0.9rem' },
    socialButtons: { display: 'flex', gap: '1rem' },
    socialButton: {
      flex: 1,
      padding: '1rem',
      border: '2px solid #e0e0e0',
      borderRadius: '12px',
      background: 'white',
      cursor: 'pointer',
      fontSize: '1.5rem',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    footer: { textAlign: 'center', marginTop: '2rem', color: '#666' },
    link: { color: '#667eea', textDecoration: 'none', fontWeight: 'bold' },
    floatingShape: { position: 'absolute', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' },
  };

  return (
    <>
      <style>{`
        @keyframes slideInScale {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .register-input:focus {
          border-color: #667eea !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2) !important;
        }
        .submit-btn:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4) !important;
        }
        .social-btn:hover {
          border-color: #667eea !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1) !important;
        }
        .floating-shape {
          animation: floatAround 20s ease-in-out infinite;
        }
        .shape-1 { width: 300px; height: 300px; top: -100px; right: -100px; animation-delay: 0s; }
        .shape-2 { width: 200px; height: 200px; bottom: -50px; left: -50px; animation-delay: 5s; }
        .shape-3 { width: 150px; height: 150px; top: 50%; right: 10%; animation-delay: 10s; }
        @keyframes floatAround {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
      `}</style>

      <div style={styles.page}>
        <div className="floating-shape shape-1" style={styles.floatingShape}></div>
        <div className="floating-shape shape-2" style={styles.floatingShape}></div>
        <div className="floating-shape shape-3" style={styles.floatingShape}></div>

        <div style={styles.container}>
          <div style={styles.card}>
            <div style={styles.header}>
              <div style={styles.logo}>YUNI</div>
              <p style={styles.subtitle}>Register Now</p>
            </div>

            <form style={styles.form} onSubmit={handleSubmit}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Full Name</label>
                <input
                  className="register-input"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  className="register-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Phone Number</label>
                <input
                  className="register-input"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Password</label>
                <input
                  className="register-input"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Create a password"
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Confirm Password</label>
                <input
                  className="register-input"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <button className="submit-btn" type="submit" style={styles.submitButton}>
                Create Account
              </button>
            </form>

            <div style={styles.divider}>
              <div style={styles.line}></div>
              <span style={styles.dividerText}>OR</span>
              <div style={styles.line}></div>
            </div>

            <div style={styles.socialButtons}>
              <button className="social-btn" style={styles.socialButton} type="button">
                🔵
              </button>
              <button className="social-btn" style={styles.socialButton} type="button">
                🔴
              </button>
              <button className="social-btn" style={styles.socialButton} type="button">
                💼
              </button>
            </div>

            <div style={styles.footer}>
              Already have an account?{' '}
              <Link to="/" style={styles.link}>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
