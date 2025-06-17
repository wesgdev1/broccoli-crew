import { useState } from "react";
import "./VideosSection.css";

const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Videos de entrenamientos del BROCCOLI CREW
  const videos = [
    {
      id: 1,
      title: "Día de tren superior con el Broccoli Crew",
      description: "Entrenamiento de tren superior con el Broccoli Crew",
      thumbnail:
        "https://res.cloudinary.com/dndit9q1h/image/upload/v1750115339/erasebg-transformed_x8y9sv.png",
      duration: "05:24",
      views: "-",
      date: "-",
      youtubeId: "66g0OYuQQU4", // ID de ejemplo de YouTube
      members: ["Nelson", "Sergio", "Mafer", "Oscar", "Nicolas"],
      category: "Tren superior",
    },
    {
      id: 2,
      title: "Día de Piernas Épico - Welinton & Sergio",
      description:
        "Rutina completa de piernas con técnica perfecta. Sentadillas, peso muerto y más.",
      thumbnail:
        "https://res.cloudinary.com/dndit9q1h/image/upload/v1750114970/ChatGPT_Image_16_jun_2025_06_01_17_p.m._fhupk1.png",
      duration: "-",
      views: "-",
      date: "-",
      youtubeId: "dQw4w9WgXcQ", // ID de ejemplo de YouTube
      members: ["Welinton", "Sergio"],
      category: "Piernas",
    },
    {
      id: 3,
      title: "Mafer Enseña: Técnica de Press de Banca",
      description:
        "La instructora Mafer nos muestra la técnica correcta para el press de banca.",
      thumbnail:
        "https://res.cloudinary.com/dndit9q1h/image/upload/v1750114970/ChatGPT_Image_16_jun_2025_06_01_17_p.m._fhupk1.png",
      duration: "-",
      views: "-",
      date: "-",
      youtubeId: "dQw4w9WgXcQ",
      members: ["Mafer"],
      category: "Técnica",
    },
    {
      id: 4,
      title: "Winder vs Nelson: Desafío de Peso Muerto",
      description:
        "Competencia épica entre dos titanes del BROCCOLI CREW. ¿Quién levantará más?",
      thumbnail:
        "https://res.cloudinary.com/dndit9q1h/image/upload/v1750114970/ChatGPT_Image_16_jun_2025_06_01_17_p.m._fhupk1.png",
      duration: "-",
      views: "-",
      date: "-",
      youtubeId: "dQw4w9WgXcQ",
      members: ["Winder", "Nelson"],
      category: "Competencia",
    },
    {
      id: 5,
      title: "Rutina de Espalda con Nicolas",
      description:
        "El influencer Nicolas comparte su rutina favorita para desarrollar una espalda masiva.",
      thumbnail:
        "https://res.cloudinary.com/dndit9q1h/image/upload/v1750114970/ChatGPT_Image_16_jun_2025_06_01_17_p.m._fhupk1.png",
      duration: "-",
      views: "-",
      date: "-",
      youtubeId: "dQw4w9WgXcQ",
      members: ["Nicolas"],
      category: "Espalda",
    },
    {
      id: 6,
      title: "Oscar Documenta: Un Día Completo en el Gym",
      description:
        "Detrás de cámaras con Oscar mientras documenta un día típico del BROCCOLI CREW.",
      thumbnail:
        "https://res.cloudinary.com/dndit9q1h/image/upload/v1750114970/ChatGPT_Image_16_jun_2025_06_01_17_p.m._fhupk1.png",
      duration: "-",
      views: "-",
      date: "-",
      youtubeId: "dQw4w9WgXcQ",
      members: ["Oscar", "Todo el Crew"],
      category: "Vlog",
    },
    {
      id: 7,
      title: "Cardio Extremo con Mafer y Sergio",
      description:
        "Sesión de cardio de alta intensidad que te dejará sin aliento. ¡Prepárate!",
      thumbnail:
        "https://res.cloudinary.com/dndit9q1h/image/upload/v1750114970/ChatGPT_Image_16_jun_2025_06_01_17_p.m._fhupk1.png",
      duration: "-",
      views: "-",
      date: "-",
      youtubeId: "dQw4w9WgXcQ",
      members: ["Mafer", "Sergio"],
      category: "Cardio",
    },
  ];

  // Función para abrir video en YouTube
  const openYouTubeVideo = (youtubeId) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, "_blank");
  };

  // Función para obtener el color de la categoría
  const getCategoryColor = (category) => {
    const colors = {
      Piernas: "#ff77c6",
      Técnica: "#7877c6",
      Competencia: "#ff6b6b",
      Espalda: "#78dbff",
      Vlog: "#51cf66",
      Cardio: "#ffd43b",
    };
    return colors[category] || "#7877c6";
  };

  return (
    <section className="videos-section">
      <div className="videos-content">
        <div className="videos-header">
          <h2 className="videos-title">🎥 ÚLTIMOS ENTRENAMIENTOS 🎥</h2>
          <p className="videos-subtitle">
            Mira nuestras sesiones más recientes, aprende técnicas y motívate
            con el BROCCOLI CREW
          </p>
        </div>

        <div className="videos-grid">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-card"
              onClick={() => openYouTubeVideo(video.youtubeId)}
            >
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className="video-overlay">
                  <div className="play-button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="video-duration">{video.duration}</div>
                </div>
                <div
                  className="video-category"
                  style={{ backgroundColor: getCategoryColor(video.category) }}
                >
                  {video.category}
                </div>
              </div>

              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>

                <div className="video-members">
                  <span className="members-label">Con:</span>
                  {video.members.map((member, index) => (
                    <span key={index} className="member-tag">
                      {member}
                    </span>
                  ))}
                </div>

                <div className="video-stats">
                  <span className="video-views">👁️ {video.views} vistas</span>
                  <span className="video-date">📅 {video.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="videos-footer">
          <a
            href="https://www.youtube.com/@mafercillapilla"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-channel-button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Ver Canal Completo en YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
