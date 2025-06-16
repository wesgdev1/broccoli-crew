import "./MemberModal.css";

function MemberModal({ member, onClose, getSocialLink }) {
  if (!member) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="modal-body">
          <div className="modal-header">
            <img src={member.image} alt={member.name} className="modal-image" />
            <div className="modal-title">
              <h2>{member.name}</h2>
              <p className="modal-nickname">{member.nickname}</p>
            </div>
          </div>

          <div className="social-links">
            {Object.entries(member.social).map(([platform, username]) => (
              <a
                key={platform}
                href={getSocialLink(platform, username)}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link ${platform}`}
                title={`${platform}: ${username}`}
              ></a>
            ))}
          </div>

          <div className="modal-details">
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Profesión</span>
                <span className="detail-value">{member.profession}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Especialidad</span>
                <span className="detail-value">{member.specialty}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Rol en el gym</span>
                <span className="detail-value">{member.gymRole}</span>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-value">{member.gymStats.pesoMuerto}</span>
                <span className="stat-label">Peso Muerto</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{member.gymStats.sentadilla}</span>
                <span className="stat-label">Sentadilla</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{member.gymStats.press}</span>
                <span className="stat-label">Press Banca</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">
                  {member.gymStats.experiencia}
                </span>
                <span className="stat-label">Experiencia</span>
              </div>
            </div>

            <div className="description">{member.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberModal;
