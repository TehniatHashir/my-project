import { useEffect } from "react";

export function AboutPage() {
  const styles = {
    page: {
      minHeight: '100vh',
      background: 'white',
    },
    hero: {
      padding: '5rem 2rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      animation: 'fadeInUp 0.8s ease-out',
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      opacity: 0.95,
      maxWidth: '700px',
      margin: '0 auto',
      animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
    },
    section: {
      padding: '5rem 2rem',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
      color: '#333',
      textAlign: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginTop: '3rem',
    },
    card: {
      padding: '2rem',
      background: '#f8f9fa',
      borderRadius: '15px',
      textAlign: 'center',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer',
    },
    cardIcon: {
      fontSize: '3.5rem',
      marginBottom: '1rem',
      display: 'block',
    },
    cardTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      marginBottom: '0.8rem',
      color: '#333',
    },
    cardText: {
      color: '#666',
      lineHeight: '1.6',
    },
    story: {
      background: '#f8f9fa',
      padding: '5rem 2rem',
    },
    storyContent: {
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.8',
      fontSize: '1.1rem',
      color: '#555',
    },
    team: {
      padding: '5rem 2rem',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2.5rem',
      marginTop: '3rem',
    },
    teamMember: {
      textAlign: 'center',
      transition: 'transform 0.3s',
    },
    memberPhoto: {
      width: '180px',
      height: '180px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      margin: '0 auto 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '4rem',
      transition: 'transform 0.5s',
    },
    memberName: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      color: '#333',
    },
    memberRole: {
      color: '#667eea',
      marginBottom: '1rem',
      fontWeight: 500,
    },
    memberBio: {
      color: '#666',
      fontSize: '0.95rem',
      lineHeight: '1.5',
    },
  };

  const values = [
    { icon: '🎯', title: 'Excellence', text: 'We strive for excellence in everything we do, from course content to student support' },
    { icon: '🤝', title: 'Community', text: 'Building a supportive learning community where everyone can thrive together' },
    { icon: '💡', title: 'Innovation', text: 'Constantly innovating our teaching methods to provide the best learning experience' },
    { icon: '🌟', title: 'Accessibility', text: 'Making quality education accessible to everyone, everywhere' },
  ];

  const team = [
    { emoji: '👨‍💼', name: 'Abdul Moiz', role: 'Founder', bio: '7+ Years Experience in Digital Marketing' },
    { emoji: '👩‍🏫', name: 'Hafsa Mubbashar', role: 'COO', bio: 'Student of CS' },
    { emoji: '👨‍💻', name: 'ABC', role: 'CEO', bio: 'Masters in CS' },
  ];
  useEffect(() => {
  const members = document.querySelectorAll(".team-member");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          members.forEach((member, index) => {
            setTimeout(() => {
              member.classList.add("animate");
            }, index * 1000); // 2 seconds delay
          });

          observer.disconnect(); // run only once
        }
      });
    },
    { threshold: 0.3 }
  );

  if (members.length) {
    observer.observe(members[0]);
  }
}, []);


  return (
    <>
      <style>{`
      @keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.team-member {
  opacity: 0;
  transform: translateY(60px);
}

.team-member.animate {
  animation: slideUp 0.8s ease-out forwards;
}

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .value-card:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1) !important;
        }
        .team-member:hover {
          transform: scale(1.05) !important;
        }
        .team-member:hover .member-photo {
          transform: rotate(360deg) !important;
        }
      `}</style>

      <div style={styles.page}>
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>About YUNI</h1>
          <p style={styles.heroSubtitle}>
            Empowering learners worldwide with quality education and innovative teaching methods
          </p>
        </div>

        <section style={styles.story}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Our Story</h2>
            <div style={styles.storyContent}>
              <p style={{ marginBottom: '1.5rem' }}>
                YUNI was founded in 2025 with a simple mission: to make high-quality education accessible to everyone,
                regardless of their location or background.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                We believe that education is the key to unlocking human potential.
              </p>
              <p>
                Today, YUNI offers courses across multiple disciplines, with new content added every month.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Our Values</h2>
            <div style={styles.grid}>
              {values.map((value, index) => (
                <div key={index} className="value-card" style={styles.card}>
                  <span style={styles.cardIcon}>{value.icon}</span>
                  <h3 style={styles.cardTitle}>{value.title}</h3>
                  <p style={styles.cardText}>{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.team}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Meet Our Team</h2>
            <div style={styles.teamGrid}>
              {team.map((member, index) => (
                <div key={index} className="team-member" style={styles.teamMember}>
                  <div className="member-photo" style={styles.memberPhoto}>
                    {member.emoji}
                  </div>
                  <h3 style={styles.memberName}>{member.name}</h3>
                  <p style={styles.memberRole}>{member.role}</p>
                  <p style={styles.memberBio}>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
