import { useState } from 'react';

export function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const styles = {
    page: {
      minHeight: '100vh',
      background: '#f8f9fa',
      padding: '4rem 2rem',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem',
      color: '#667eea',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#666',
    },
    coursesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '2.5rem',
      perspective: '1000px',
    },
    courseCard: {
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      position: 'relative',
      transformStyle: 'preserve-3d',
    },
    courseImage: {
      width: '100%',
      height: '200px',
      transition: 'transform 0.5s',
    },
    courseContent: {
      padding: '1.5rem',
    },
    courseCategory: {
      display: 'inline-block',
      padding: '0.3rem 0.8rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      borderRadius: '20px',
      fontSize: '0.85rem',
      marginBottom: '1rem',
    },
    courseTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.8rem',
      color: '#333',
    },
    courseDescription: {
      color: '#666',
      marginBottom: '1rem',
      lineHeight: '1.6',
    },
    courseFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '1rem',
      borderTop: '1px solid #eee',
    },
    coursePrice: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#667eea',
    },
    courseRating: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.9rem',
      color: '#666',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      animation: 'fadeIn 0.3s',
      padding: '2rem',
    },
    modalContent: {
      background: 'white',
      borderRadius: '20px',
      padding: '2.5rem',
      maxWidth: '600px',
      width: '100%',
      maxHeight: '80vh',
      overflowY: 'auto',
      animation: 'slideIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      position: 'relative',
    },
    closeButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: 'none',
      border: 'none',
      fontSize: '2rem',
      cursor: 'pointer',
      color: '#666',
    },
    enrollButton: {
      width: '100%',
      padding: '1rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '1.5rem',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    character: {
      position: 'absolute',
      bottom: '1rem',
      right: '1rem',
      fontSize: '4rem',
      transition: 'transform 0.5s',
      pointerEvents: 'none',
    },
  };

  const courses = [
    {
      id: 1,
      title: 'Cyber Security',
      category: 'Development',
      description: 'Learn HTML, CSS, JavaScript, and React from scratch to advanced level',
      price: '$99',
      rating: 4.8,
      students: '2,500',
      image: '/cybersecurity.jpg',
      character: '👨‍💻',
      details: 'Complete web development course covering frontend and backend technologies. Build 10+ real projects.',
    },
    {
      id: 2,
      title: 'Digital Marketing',
      category: 'Design',
      description: 'Master the principles of user interface and user experience design',
      price: '$79',
      rating: 4.9,
      students: '1,800',
      image: "/digital marketing.jpg",
      character: '🎨',
      details: 'Learn design thinking, wireframing, prototyping, and user research. Work with Figma and Adobe XD.',
    },
    {
      id: 3,
      title: 'Artificial Intelligence',
      category: 'Data Science',
      description: 'Dive deep into data analysis, visualization, and machine learning',
      price: '$129',
      rating: 4.7,
      students: '3,200',
      image: '/Ai.jpg',
      character: '📊',
      details: 'Master Python, NumPy, Pandas, Matplotlib, and Scikit-learn. Build ML models from scratch.',
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      category: 'Marketing',
      description: 'Learn SEO, social media marketing, and content strategy',
      price: '$89',
      rating: 4.6,
      students: '1,500',
      image: 'https://example.com/web-dev.jpg',
      character: '📱',
      details: 'Comprehensive marketing course covering SEO, SEM, social media, email marketing, and analytics.',
    },
    {
      id: 5,
      title: 'Mobile App Development',
      category: 'Development',
      description: 'Build native and cross-platform mobile applications',
      price: '$119',
      rating: 4.8,
      students: '2,100',
      image: 'https://example.com/web-dev.jpg',
      character: '📱',
      details: 'Learn React Native and Flutter. Build and deploy apps to App Store and Play Store.',
    },
    {
      id: 6,
      title: 'Artificial Intelligence Basics',
      category: 'AI/ML',
      description: 'Introduction to AI, neural networks, and deep learning',
      price: '$149',
      rating: 4.9,
      students: '2,800',
      image: 'https://example.com/web-dev.jpg',
      character: '🤖',
      details: 'Explore AI fundamentals, neural networks, NLP, computer vision, and deep learning frameworks.',
    },
  ];

  const selectedCourseData =
    selectedCourse !== null
      ? courses.find((c) => c.id === selectedCourse)
      : null;

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .course-card:hover {
          transform: translateY(-15px) rotateX(5deg) !important;
          box-shadow: 0 25px 50px rgba(0,0,0,0.2) !important;
        }
        .course-card:hover .course-image {
          transform: scale(1.1) !important;
        }
        .course-card:hover .character {
          transform: scale(1.2) rotate(10deg) !important;
        }
        .close-button:hover {
          color: #667eea !important;
        }
        .enroll-button:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4) !important;
        }
      `}</style>

      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>Explore Our Courses</h1>
            <p style={styles.subtitle}>
              Choose from our wide range of expertly crafted courses
            </p>
          </div>

          <div style={styles.coursesGrid}>
            {courses.map((course) => (
              <div
                key={course.id}
                className="course-card"
                style={styles.courseCard}
                onClick={() => setSelectedCourse(course.id)}
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
               <div
  className="course-image"
  style={{
    ...styles.courseImage,
    backgroundImage: `url(${course.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
></div>


                <div style={styles.courseContent}>
                  <span style={styles.courseCategory}>{course.category}</span>
                  <h3 style={styles.courseTitle}>{course.title}</h3>
                  <p style={styles.courseDescription}>{course.description}</p>

                  <div style={styles.courseFooter}>
                    <span style={styles.coursePrice}>{course.price}</span>
                    <div style={styles.courseRating}>
                      ⭐ {course.rating} ({course.students} students)
                    </div>
                  </div>
                </div>

                <div
                  className="character"
                  style={{
                    ...styles.character,
                    transform:
                      hoveredCard === course.id
                        ? 'scale(1.2) rotate(10deg)'
                        : 'scale(1)',
                  }}
                >
                  {course.character}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedCourse && selectedCourseData && (
        <div style={styles.modal} onClick={() => setSelectedCourse(null)}>
          <div
            style={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              style={styles.closeButton}
              onClick={() => setSelectedCourse(null)}
            >
              ×
            </button>

            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              {selectedCourseData.character}
            </div>

            <h2 style={{ ...styles.courseTitle, fontSize: '2rem' }}>
              {selectedCourseData.title}
            </h2>

            <span style={styles.courseCategory}>
              {selectedCourseData.category}
            </span>

            <p style={{ ...styles.courseDescription, margin: '1.5rem 0' }}>
              {selectedCourseData.details}
            </p>

            <div style={styles.courseFooter}>
              <span style={styles.coursePrice}>
                {selectedCourseData.price}
              </span>
              <div style={styles.courseRating}>
                ⭐ {selectedCourseData.rating} •{' '}
                {selectedCourseData.students} students
              </div>
            </div>

           <button
  className="enroll-button"
  style={styles.enrollButton}
  onClick={() => {
    window.location.href = '/register'; // go directly
  }}
>
  Enroll Now
</button>

          </div>
        </div>
      )}
    </>
  );
}
