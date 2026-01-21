import { Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

/* ===== PARALLAX IMAGES ===== */
import artBack from '../../Images/background.png';
import mountain from '../../Images/mountains.png';
import logoland from '../../Images/logo_land.png';
import jungle1 from '../../Images/jungle1.png';
import jungle2 from '../../Images/jungle2.png';
import jungle3 from '../../Images/jungle3.png';
import jungle4 from '../../Images/jungle4.png';
import jungle5 from '../../Images/jungle5.png';
import manonmountain from '../../Images/man_on_mountain.png';

export function HomePage() {
  const sectionStyles = {
    section: {
      padding: '5rem 2rem',
      textAlign: 'center',
      background: 'transparent',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    title: {
      fontSize: '2.6rem',
      fontWeight: '700',
      color: '#bd792c',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#000000',
      maxWidth: '700px',
      margin: '0 auto 3rem',
      lineHeight: '1.6',
    }
  };

  const features = [
    { icon: '📚', title: 'Expert Instructors', description: 'Learn from industry professionals with years of experience' },
    { icon: '🎯', title: 'Hands-on Projects', description: 'Build real-world projects to solidify your learning' },
    { icon: '🏆', title: 'Certificates', description: 'Earn recognized certificates upon course completion' },
    { icon: '💬', title: 'Community Support', description: 'Connect with fellow learners and get help when needed' },
    { icon: '🧠', title: 'Smart Learning Paths', description: 'Follow structured learning journeys designed to build skills step by step' },
    { icon: '🛠️', title: 'Practical Skill Building', description: 'Practice with guided exercises and real-life tasks to gain confidence' },
    { icon: '📚', title: 'Smart Learning Paths', description: 'Follow structured learning journeys designed to build skills step by step' },
    { icon: '📚', title: 'Smart Learning Paths', description: 'Follow structured learning journeys designed to build skills step by step' },


  ];

  const stats = [
    { number: '10K+', label: 'Students' },
    { number: '50+', label: 'Courses' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ];

  const featuredCourses = [
    {
      title: 'Artificial Intelligence',
      image: '/Ai.jpg',
      frontDesc: 'Learn AI, Machine Learning & Python from scratch.',
    },
    {
      title: 'Cyber Security',
      image: '/cybersecurity.jpg',
      frontDesc: 'Learn Cyber Security & Ethical Hacking.',
    },
    {
      title: 'Digital Marketing',
      image: '/digital marketing.jpg',
      frontDesc: 'Learn SEO, Ads & Social Media.',
    }
  ];

  return (
    <>
      <style>{`
        body {
          margin: 0;
          overflow-x: hidden;
        }
      `}</style>

      <Parallax pages={5} style={{ background: '#f0f4f8b0' }}>
       {/* ===== FULL-PAGE BACKGROUND LAYERS (perfect stacking & parallax) ===== */}
{[artBack, mountain, logoland, jungle1, jungle2, jungle3, jungle4, jungle5, manonmountain].map((img, i) => (
  <ParallaxLayer
    key={i}
    offset={0}        
    speed={0.1 + i * 0.05} 
    factor={5}        // span all 5 pages
    style={{
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',       // fill the entire layer
      backgroundRepeat: 'no-repeat', // prevent bottom/grid artifacts
      backgroundPosition: 'center',
      zIndex: -1
    }}
  />
))}

        {/* ===== HERO ===== */}
        <ParallaxLayer offset={0} speed={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 }}>
          <div style={{ textAlign: 'center', color: '#bd792c' }}>
            <h1 style={{ fontSize: '3.8rem', fontWeight: '800', marginBottom: '1rem' }}>Welcome to YUNI</h1>
            <p style={{ fontSize: '1.4rem', opacity: 0.9, marginBottom: '2rem' }}>Unlock your potential with world-class courses</p>
            <Link to="/courses" style={{ padding: '1rem 2.5rem', background: '#a36b2b', color: '#fdf90a', borderRadius: '40px', fontWeight: 'bold', textDecoration: 'none' }}>
              Explore Courses
            </Link>
          </div>
        </ParallaxLayer>

        {/* ===== FEATURES SECTION ===== */}
        <ParallaxLayer offset={1} speed={3} style={{ zIndex: 5 }}>
          <section style={sectionStyles.section}>
            <div style={sectionStyles.container}>
              <h2 style={sectionStyles.title}>Why Choose Us</h2>
              <p style={sectionStyles.subtitle}>We offer the best learning experience for all students</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                {features.map((f, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.9)', borderRadius: '15px', padding: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{f.icon}</div>
                    <h3 style={{ color: '#bd792c', marginBottom: '0.5rem' }}>{f.title}</h3>
                    <p style={{ color: '#555', fontSize: '0.95rem' }}>{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ParallaxLayer>

        {/* ===== STATS SECTION ===== */}
        <ParallaxLayer offset={2} speed={3} style={{ zIndex: 5 }}>
          <section style={sectionStyles.section}>
            <div style={sectionStyles.container}>
              <h2 style={sectionStyles.title}>Our Impact in Numbers</h2>
              <p style={sectionStyles.subtitle}>Trusted by learners across the globe</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
                {stats.map((s, i) => (
                  <div key={i}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700' }}>{s.number}</h2>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ParallaxLayer>

        {/* ===== FEATURED COURSES ===== */}
        <ParallaxLayer offset={3} speed={3} style={{ zIndex: 5 }}>
          <section style={sectionStyles.section}>
            <div style={sectionStyles.container}>
              <h2 style={sectionStyles.title}>Our Popular Courses</h2>
              <p style={sectionStyles.subtitle}>Industry-focused programs designed to build real skills</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', marginTop: '3rem' }}>
                {featuredCourses.map((course, i) => (
                  <div key={i} style={{ background: 'rgba(194, 166, 42, 0.94)', borderRadius: '18px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)', overflow: 'hidden', transition: 'transform 0.3s' }}>
                    <img src={course.image} alt={course.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ color: '#bd792c', marginBottom: '0.5rem' }}>{course.title}</h3>
                      <p style={{ color: '#000000', fontSize: '0.95rem' }}>{course.frontDesc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ParallaxLayer>

        {/* ===== CTA SECTION ===== */}
        <ParallaxLayer offset={4} speed={3} style={{ zIndex: 5 }}>
          <section style={{ 
              padding: '6rem 2rem', 
              textAlign: 'center', 
              background: '#bd792c', 
              color: '#fff', 
              borderRadius: '20px', 
              margin: '2rem auto', 
              maxWidth: '1000px' 
          }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Ready to Level Up Your Skills?</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>Join thousands of learners who are accelerating their careers with YUNI courses.</p>
            <Link to="/courses" style={{ 
                padding: '1rem 3rem', 
                background: '#fff', 
                color: '#bd792c', 
                fontWeight: 'bold', 
                fontSize: '1.1rem', 
                borderRadius: '40px', 
                textDecoration: 'none' 
            }}>
              Get Started Now
            </Link>
          </section>
        </ParallaxLayer>

      </Parallax>
    </>
  );
}
