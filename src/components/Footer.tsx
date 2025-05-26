export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Dav Barber. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.8 }}>
          Your style, Our passion.
        </p>
      </div>
    </footer>
  );
}