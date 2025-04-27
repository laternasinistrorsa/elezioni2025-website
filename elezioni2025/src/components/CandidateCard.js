import React from 'react';

function CandidateCard({ name, description, photoUrl, spotifyTrackId }) {
  return (
    <div className="candidate-card">
      <div className="candidate-photo">
        <img src={photoUrl || "/api/placeholder/120/120"} alt={`Foto ${name}`} />
      </div>
      <div className="candidate-name">{name}</div>
      <div className="candidate-desc">{description}</div>
      <div className="spotify-embed">
        <iframe
          style={{ borderRadius: "12px" }}
          src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator`}
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default CandidateCard;
