import { notes } from '../../data/portfolioData';
import './Notes.css';

/**
 * Notes — 블로그 자리만 잡아둠
 * notes.enabled가 false이면 Coming Soon 상태 표시
 * 추후 enabled=true + posts 채우면 실제 블로그 미리보기로 전환
 */
export default function Notes() {
  const lines = [
    { key: 1, text: notes.title.line1 },
    { key: 2, text: notes.title.line2 },
  ];

  return (
    <section id="notes" className="section section--surface notes-section">
      <div className="section-inner notes-inner">
        <div className="notes-lead">
          <p className="section-eyebrow">{notes.eyebrow}</p>
          <h2 className="section-title">
            {lines.map(line => (
              <span
                key={line.key}
                className={
                  line.key === notes.title.italicLine
                    ? 'section-title-line section-title-line--italic'
                    : 'section-title-line'
                }
              >
                {line.text}
              </span>
            ))}
          </h2>
        </div>

        <div className="notes-status">
          {!notes.enabled ? (
            <div className="notes-coming">
              <span className="notes-coming-label">Coming Soon</span>
              <p className="notes-coming-text">{notes.comingSoon}</p>
            </div>
          ) : (
            <ul className="notes-posts">
              {notes.posts.map(post => (
                <li key={post.slug} className="notes-post">
                  <a href={`#notes-${post.slug}`}>
                    <span className="notes-post-date">{post.date}</span>
                    <span className="notes-post-title">{post.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
