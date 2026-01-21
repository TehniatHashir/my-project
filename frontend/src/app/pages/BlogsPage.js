export function BlogsPage() {
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
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#666',
    },
    blogsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '2.5rem',
    },
    blogCard: {
      background: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      cursor: 'pointer',
      transform: 'translateZ(0)',
    },
    blogImage: {
      width: '100%',
      height: '220px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '4rem',
      transition: 'transform 0.4s',
    },
    blogContent: {
      padding: '1.8rem',
    },
    blogMeta: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '1rem',
      fontSize: '0.9rem',
      color: '#999',
    },
    blogTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#333',
      lineHeight: '1.4',
    },
    blogExcerpt: {
      color: '#666',
      lineHeight: '1.6',
      marginBottom: '1.5rem',
    },
    blogFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '1rem',
      borderTop: '1px solid #eee',
    },
    readMore: {
      color: '#667eea',
      fontWeight: 'bold',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'gap 0.3s',
    },
    author: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
    },
    authorAvatar: {
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
    },
    authorName: {
      fontSize: '0.9rem',
      color: '#555',
      fontWeight: 500,
    },
  };

  const blogs = [
    {
      id: 1,
      title: '10 Tips for Effective Online Learning',
      excerpt: 'Discover proven strategies to maximize your learning potential in online courses and stay motivated throughout your journey.',
      author: 'John Doe',
      avatar: '👨‍💼',
      date: 'Jan 10, 2026',
      readTime: '5 min read',
      icon: '📚',
    },
    {
      id: 2,
      title: 'The Future of Web Development in 2026',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI integration to progressive web apps.',
      author: 'Sarah Wilson',
      avatar: '👩‍💻',
      date: 'Jan 8, 2026',
      readTime: '8 min read',
      icon: '🚀',
    },
    {
      id: 3,
      title: 'How to Build Your First Mobile App',
      excerpt: 'A beginner-friendly guide to creating your first mobile application using React Native and modern development practices.',
      author: 'Mike Chen',
      avatar: '👨‍💻',
      date: 'Jan 5, 2026',
      readTime: '10 min read',
      icon: '📱',
    },
    {
      id: 4,
      title: 'Design Thinking: A Practical Guide',
      excerpt: 'Learn how to apply design thinking principles to solve complex problems and create user-centered solutions.',
      author: 'Emma Davis',
      avatar: '👩‍🎨',
      date: 'Jan 3, 2026',
      readTime: '7 min read',
      icon: '🎨',
    },
    {
      id: 5,
      title: 'Mastering Data Visualization',
      excerpt: 'Transform raw data into compelling visual stories using modern tools and best practices in data visualization.',
      author: 'Alex Turner',
      avatar: '👨‍🔬',
      date: 'Dec 30, 2025',
      readTime: '6 min read',
      icon: '📊',
    },
    {
      id: 6,
      title: 'AI and Machine Learning Demystified',
      excerpt: 'Break down complex AI concepts into easy-to-understand explanations and practical applications for beginners.',
      author: 'Lisa Park',
      avatar: '👩‍🔬',
      date: 'Dec 28, 2025',
      readTime: '12 min read',
      icon: '🤖',
    },
  ];

  return (
    <>
      <style>{`
        .blog-card:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
        }
        .blog-card:hover .blog-image {
          transform: scale(1.1) !important;
        }
        .blog-card:hover .read-more {
          gap: 1rem !important;
        }
      `}</style>

      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>Our Blog</h1>
            <p style={styles.subtitle}>Insights, tutorials, and stories from our community</p>
          </div>

          <div style={styles.blogsGrid}>
            {blogs.map((blog) => (
              <article key={blog.id} className="blog-card" style={styles.blogCard}>
                <div className="blog-image" style={styles.blogImage}>
                  {blog.icon}
                </div>
                <div style={styles.blogContent}>
                  <div style={styles.blogMeta}>
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h2 style={styles.blogTitle}>{blog.title}</h2>
                  <p style={styles.blogExcerpt}>{blog.excerpt}</p>
                  <div style={styles.blogFooter}>
                    <div style={styles.author}>
                      <div style={styles.authorAvatar}>{blog.avatar}</div>
                      <span style={styles.authorName}>{blog.author}</span>
                    </div>
                    <a href="#" className="read-more" style={styles.readMore}>
                      Read more →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
