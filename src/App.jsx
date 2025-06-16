import { useState } from "react";
import "./App.css";
import VideosSection from "./VideosSection";
import CountdownSection from "./CountdownSection";

function App() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  // Datos del equipo BROCCOLI CREW - puedes agregar o modificar según tu equipo real
  const broccoliCrew = [
    {
      id: 1,
      name: "Welinton",
      nickname: "El Líder Tech",
      profession: "Desarrollador",
      specialty: "Programación y Tecnología",
      gymRole: "Motivador del equipo",
      gymStats: {
        pesoMuerto: "180kg",
        sentadilla: "150kg",
        press: "120kg",
        experiencia: "3 años",
      },
      image:
        "https://res.cloudinary.com/dppqkypts/image/upload/v1750023534/image-removebg-preview_1_ub6txp.png",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      description:
        "El cerebro tecnológico del crew. Mientras programa el futuro, forja su cuerpo con la misma disciplina que sus líneas de código.",
      social: {
        whatsapp: "+1234567890",
        instagram: "welinton_dev",
        facebook: "welinton.developer",
        linkedin: "welinton-developer",
        twitter: "welinton_tech",
      },
    },
    {
      id: 2,
      name: "Mafer",
      nickname: "La Boss",
      profession: "Instructora y Emprendedora",
      specialty: "Fitness y Negocios",
      gymRole: "Maestra de la técnica",
      gymStats: {
        pesoMuerto: "140kg",
        sentadilla: "120kg",
        press: "80kg",
        experiencia: "5 años",
      },
      image: "https://picsum.photos/800/800?random=2",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      description:
        "Instructora imparable y emprendedora nata. Enseña con pasión y entrena con fuego. Su energía contagia a todo el crew.",
      social: {
        whatsapp: "+1234567891",
        instagram: "mafer_fitness",
        facebook: "mafer.instructora",
        tiktok: "mafer_boss",
      },
    },
    {
      id: 3,
      name: "Sergio",
      nickname: "El Maestro",
      profession: "Instructor",
      specialty: "Entrenamiento y Técnica",
      gymRole: "Gurú del movimiento",
      gymStats: {
        pesoMuerto: "200kg",
        sentadilla: "180kg",
        press: "140kg",
        experiencia: "8 años",
      },
      image:
        "https://res.cloudinary.com/dppqkypts/image/upload/v1750022970/image-removebg-preview_xfsmzf.png",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      description:
        "El instructor que todos respetan. Su conocimiento es profundo como su squat. Perfecciona cada movimiento hasta la excelencia.",
      social: {
        whatsapp: "+1234567892",
        instagram: "sergio_trainer",
        facebook: "sergio.instructor",
      },
    },
    {
      id: 4,
      name: "Nelson",
      nickname: "El Cambista",
      profession: "Cambista de Dinero",
      specialty: "Finanzas y Cambio",
      gymRole: "Estratega financiero",
      gymStats: {
        pesoMuerto: "160kg",
        sentadilla: "140kg",
        press: "110kg",
        experiencia: "4 años",
      },
      image: "https://picsum.photos/800/800?random=4",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      description:
        "Maneja divisas como maneja las pesas. Cada intercambio es calculado, cada rep es una inversión en su físico.",
      social: {
        whatsapp: "+1234567893",
        instagram: "nelson_cambista",
        linkedin: "nelson-finanzas",
      },
    },
    {
      id: 5,
      name: "Nicolas",
      nickname: "El Influencer",
      profession: "Influencer",
      specialty: "Redes Sociales y Contenido",
      gymRole: "Creador de contenido",
      gymStats: {
        pesoMuerto: "170kg",
        sentadilla: "155kg",
        press: "125kg",
        experiencia: "2 años",
      },
      image: "https://picsum.photos/800/800?random=5",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      description:
        "Inspira a miles con su contenido. Su feed está lleno de motivación y su físico habla por sí solo. Influencia positiva pura.",
      social: {
        whatsapp: "+1234567894",
        instagram: "nicolas_influencer",
        tiktok: "nicolas_content",
        twitter: "nicolas_creator",
        facebook: "nicolas.influencer",
      },
    },
    {
      id: 6,
      name: "Winder",
      nickname: "El Instructor Pro",
      profession: "Instructor",
      specialty: "Entrenamiento Avanzado",
      gymRole: "Especialista en fuerza",
      gymStats: {
        pesoMuerto: "220kg",
        sentadilla: "200kg",
        press: "160kg",
        experiencia: "10 años",
      },
      image: "https://picsum.photos/800/800?random=6",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      description:
        "Instructor de élite con técnica impecable. Su experiencia transforma principiantes en atletas. La fuerza es su lenguaje.",
      social: {
        whatsapp: "+1234567895",
        instagram: "winder_pro",
        facebook: "winder.instructor",
      },
    },
    {
      id: 7,
      name: "Oscar",
      nickname: "El Artista Visual",
      profession: "Fotógrafo y Editor",
      specialty: "Fotografía y Edición",
      gymRole: "Documentalista del crew",
      gymStats: {
        pesoMuerto: "165kg",
        sentadilla: "145kg",
        press: "115kg",
        experiencia: "3 años",
      },
      image: "https://picsum.photos/800/800?random=7",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      description:
        "Captura la esencia del crew con su lente. Cada foto cuenta una historia, cada edición es una obra de arte. Músculo y creatividad unidos.",
      social: {
        whatsapp: "+1234567896",
        instagram: "oscar_visual",
        facebook: "oscar.fotografo",
        linkedin: "oscar-photographer",
      },
    },
  ];

  // Servicios y asesorías del BROCCOLI CREW
  const services = [
    {
      id: 1,
      name: "Welinton",
      specialty: "Desarrollo Web & Apps",
      avatar: "https://picsum.photos/120/120?random=1",
      description:
        "Desarrollo de páginas web, aplicaciones móviles y sistemas personalizados. Transformo ideas en código funcional.",
      packages: [
        { name: "Página Web Básica", price: "$800.000" },
        { name: "E-commerce Completo", price: "$2.500.000" },
        { name: "App Móvil", price: "$3.200.000" },
        { name: "Sistema Personalizado", price: "$4.500.000" },
      ],
      whatsapp: "+573001234567",
    },
    {
      id: 2,
      name: "Mafer",
      specialty: "Entrenamiento Personal & Fitness",
      avatar: "https://picsum.photos/120/120?random=2",
      description:
        "Planes de entrenamiento personalizados, nutrición deportiva y coaching fitness para alcanzar tus objetivos.",
      packages: [
        { name: "Plan Mensual Online", price: "$150.000" },
        { name: "Entrenamiento Presencial", price: "$80.000/sesión" },
        { name: "Plan Nutricional", price: "$120.000" },
        { name: "Coaching Completo 3 meses", price: "$400.000" },
      ],
      whatsapp: "+573001234568",
    },
    {
      id: 3,
      name: "Sergio",
      specialty: "Técnica de Entrenamiento",
      avatar: "https://picsum.photos/120/120?random=3",
      description:
        "Corrección de técnica, programas de fuerza avanzados y preparación para competencias deportivas.",
      packages: [
        { name: "Evaluación de Técnica", price: "$100.000" },
        { name: "Plan de Fuerza 8 semanas", price: "$300.000" },
        { name: "Preparación Competencia", price: "$600.000" },
        { name: "Mentoría Mensual", price: "$200.000" },
      ],
      whatsapp: "+573001234569",
    },
    {
      id: 4,
      name: "Nelson",
      specialty: "Asesoría Financiera & Cambios",
      avatar: "https://picsum.photos/120/120?random=4",
      description:
        "Consultoría en inversiones, cambio de divisas y planificación financiera personal y empresarial.",
      packages: [
        { name: "Consulta Financiera", price: "$80.000" },
        { name: "Plan de Inversión", price: "$250.000" },
        { name: "Asesoría Empresarial", price: "$400.000" },
        { name: "Gestión de Portafolio", price: "$500.000/mes" },
      ],
      whatsapp: "+573001234570",
    },
    {
      id: 5,
      name: "Nicolas",
      specialty: "Marketing Digital & Contenido",
      avatar: "https://picsum.photos/120/120?random=5",
      description:
        "Estrategias de redes sociales, creación de contenido viral y crecimiento de marca personal.",
      packages: [
        { name: "Auditoría de Redes", price: "$120.000" },
        { name: "Estrategia Mensual", price: "$300.000" },
        { name: "Creación de Contenido", price: "$200.000/mes" },
        { name: "Marca Personal Completa", price: "$800.000" },
      ],
      whatsapp: "+573001234571",
    },
    {
      id: 6,
      name: "Winder",
      specialty: "Entrenamiento de Alto Rendimiento",
      avatar: "https://picsum.photos/120/120?random=6",
      description:
        "Programas de élite para atletas, periodización avanzada y optimización del rendimiento deportivo.",
      packages: [
        { name: "Evaluación Atlética", price: "$150.000" },
        { name: "Programa de Élite", price: "$500.000" },
        { name: "Periodización Anual", price: "$1.200.000" },
        { name: "Coaching Profesional", price: "$300.000/mes" },
      ],
      whatsapp: "+573001234572",
    },
    {
      id: 7,
      name: "Oscar",
      specialty: "Fotografía & Edición Visual",
      avatar: "https://picsum.photos/120/120?random=7",
      description:
        "Sesiones fotográficas profesionales, edición avanzada y producción de contenido visual de alta calidad.",
      packages: [
        { name: "Sesión Básica", price: "$200.000" },
        { name: "Sesión Profesional", price: "$400.000" },
        { name: "Edición Avanzada", price: "$150.000" },
        { name: "Producción Completa", price: "$800.000" },
      ],
      whatsapp: "+573001234573",
    },
  ];

  // Función para generar enlaces de redes sociales
  const getSocialLink = (platform, username) => {
    const baseUrls = {
      whatsapp: `https://wa.me/${username.replace("+", "")}`,
      instagram: `https://instagram.com/${username}`,
      facebook: `https://facebook.com/${username}`,
      twitter: `https://twitter.com/${username}`,
      linkedin: `https://linkedin.com/in/${username}`,
      tiktok: `https://tiktok.com/@${username}`,
    };
    return baseUrls[platform] || "#";
  };

  // Función para obtener el icono de cada red social
  const getSocialIcon = (platform) => {
    const icons = {
      whatsapp: "💬",
      instagram: "📷",
      facebook: "👥",
      twitter: "🐦",
      linkedin: "💼",
      tiktok: "🎵",
    };
    return icons[platform] || "🔗";
  };

  // Función para generar mensaje de WhatsApp
  const getWhatsAppMessage = (service) => {
    const message = `¡Hola ${service.name}! 👋 Me interesa conocer más sobre tus servicios de ${service.specialty}. ¿Podrías darme más información sobre los paquetes disponibles?`;
    return `https://wa.me/${service.whatsapp.replace(
      "+",
      ""
    )}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="app">
      {/* Fondo de pantalla completa para hover */}
      {hoveredMember && (
        <div
          className="fullscreen-background"
          style={{
            backgroundImage: `url(${hoveredMember.image})`,
          }}
        />
      )}

      {/* Nombre gigante para hover */}
      {hoveredMember && (
        <div className="fullscreen-name">{hoveredMember.name}</div>
      )}

      {/* Mira para hover */}
      {hoveredMember && <div className="fullscreen-crosshair" />}

      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <img
              src="https://res.cloudinary.com/dppqkypts/image/upload/v1750038487/310c5914-a4fa-47b0-a225-cb4355700a44_dihuv7.png"
              alt="BROCCOLI CREW Logo"
              className="header-logo"
            />
          </div>

          <div className="title-container">
            <h1 className="title">
              <span className="broccoli-emoji">🥦</span>
              BROCCOLI CREW
              <span className="broccoli-emoji">🥦</span>
            </h1>
            <p className="subtitle">
              Amigos del gym, unidos por la fuerza y diferentes profesiones
            </p>
          </div>

          <div className="header-spacer"></div>
        </div>
      </header>

      <main className="main-content">
        <div className="team-grid">
          {broccoliCrew.map((member) => (
            <div
              key={member.id}
              className="member-card"
              onClick={() => setSelectedMember(member)}
              onMouseEnter={() => setHoveredMember(member)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="nickname">"{member.nickname}"</p>
                <p className="profession">{member.profession}</p>
                <p className="gym-role">{member.gymRole}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Sección de Servicios */}
      <section className="services-section">
        <div className="services-content">
          <div className="services-header">
            <h2 className="services-title">💼 NUESTROS SERVICIOS 💼</h2>
            <p className="services-subtitle">
              Cada miembro del BROCCOLI CREW ofrece servicios profesionales en
              su área de expertise. ¡Contáctanos para llevar tu proyecto al
              siguiente nivel!
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-header">
                  <img
                    src={service.avatar}
                    alt={service.name}
                    className="service-avatar"
                  />
                  <div className="service-info">
                    <h3>{service.name}</h3>
                    <p className="service-specialty">{service.specialty}</p>
                  </div>
                </div>

                <p className="service-description">{service.description}</p>

                <div className="service-packages">
                  {service.packages.map((pkg, index) => (
                    <div key={index} className="package-item">
                      <span className="package-name">{pkg.name}</span>
                      <span className="package-price">{pkg.price}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={getWhatsAppMessage(service)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cotizar-button"
                >
                  Cotizar por WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Videos */}
      <VideosSection />

      {/* Sección de Contador */}
      <CountdownSection />

      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setSelectedMember(null)}
            >
              ✕
            </button>
            <div className="modal-body">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="modal-image"
              />
              <div className="modal-info">
                <h2>{selectedMember.name}</h2>
                <p className="modal-nickname">"{selectedMember.nickname}"</p>

                {/* Redes sociales */}
                <div className="social-links">
                  {Object.entries(selectedMember.social).map(
                    ([platform, username]) => (
                      <a
                        key={platform}
                        href={getSocialLink(platform, username)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`social-link ${platform}`}
                        title={`${platform}: ${username}`}
                      ></a>
                    )
                  )}
                </div>

                <div className="modal-details">
                  <p>
                    <strong>Profesión:</strong> {selectedMember.profession}
                  </p>
                  <p>
                    <strong>Especialidad:</strong> {selectedMember.specialty}
                  </p>
                  <p>
                    <strong>Rol en el gym:</strong> {selectedMember.gymRole}
                  </p>
                  <p>
                    <strong>Peso Muerto:</strong>{" "}
                    {selectedMember.gymStats.pesoMuerto}
                  </p>
                  <p>
                    <strong>Sentadilla:</strong>{" "}
                    {selectedMember.gymStats.sentadilla}
                  </p>
                  <p>
                    <strong>Press de Banca:</strong>{" "}
                    {selectedMember.gymStats.press}
                  </p>
                  <p>
                    <strong>Experiencia:</strong>{" "}
                    {selectedMember.gymStats.experiencia}
                  </p>
                  <p className="description">{selectedMember.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>💪 BROCCOLI CREW - Más que un equipo, una familia 💪</p>
      </footer>
    </div>
  );
}

export default App;
