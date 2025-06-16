import { useState, useEffect } from "react";
import "./CountdownSection.css";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isTrainingTime, setIsTrainingTime] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();

      // Configurar zona horaria de Colombia (UTC-5)
      const colombiaTime = new Date(
        now.toLocaleString("en-US", { timeZone: "America/Bogota" })
      );

      // Próximo entrenamiento a las 6:00 AM
      const nextTraining = new Date(colombiaTime);
      nextTraining.setHours(6, 0, 0, 0);

      // Si ya pasaron las 6 AM de hoy, el próximo entrenamiento es mañana
      if (colombiaTime.getHours() >= 6) {
        nextTraining.setDate(nextTraining.getDate() + 1);
      }

      const difference = nextTraining.getTime() - colombiaTime.getTime();

      // Verificar si es hora de entrenar (6:00 AM - 8:00 AM)
      const currentHour = colombiaTime.getHours();
      if (currentHour >= 6 && currentHour < 8) {
        setIsTrainingTime(true);
        return { hours: 0, minutes: 0, seconds: 0 };
      } else {
        setIsTrainingTime(false);
      }

      if (difference > 0) {
        return {
          hours: Math.floor(difference / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      }

      return { hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Calcular inmediatamente
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <section className="countdown-section">
      <div className="countdown-content">
        <div className="countdown-header">
          <h2 className="countdown-title">⏰ PRÓXIMO ENTRENAMIENTO ⏰</h2>
          <p className="countdown-subtitle">
            El BROCCOLI CREW se reúne todos los días para entrenar duro
          </p>
        </div>

        {isTrainingTime ? (
          <div className="training-active">
            <div className="active-indicator">
              <div className="pulse-ring"></div>
              <div className="pulse-ring delay-1"></div>
              <div className="pulse-ring delay-2"></div>
              <div className="active-dot"></div>
            </div>
            <h3 className="training-now">¡ENTRENANDO AHORA! 💪</h3>
            <p className="training-message">
              El crew está dándolo todo en este momento
            </p>
          </div>
        ) : (
          <div className="countdown-timer">
            <div className="time-unit">
              <div className="time-number">
                <span className="digit">{formatNumber(timeLeft.hours)}</span>
                <div className="time-glow"></div>
              </div>
              <div className="time-label">HORAS</div>
            </div>

            <div className="time-separator">:</div>

            <div className="time-unit">
              <div className="time-number">
                <span className="digit">{formatNumber(timeLeft.minutes)}</span>
                <div className="time-glow"></div>
              </div>
              <div className="time-label">MINUTOS</div>
            </div>

            <div className="time-separator">:</div>

            <div className="time-unit">
              <div className="time-number">
                <span className="digit">{formatNumber(timeLeft.seconds)}</span>
                <div className="time-glow"></div>
              </div>
              <div className="time-label">SEGUNDOS</div>
            </div>
          </div>
        )}

        <div className="training-info">
          <div className="info-card">
            <div className="info-icon">🕕</div>
            <div className="info-content">
              <h4>Hora de Entrenamiento</h4>
              <p>6:00 AM - 8:00 AM</p>
              <span className="timezone">(Hora Colombia)</span>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <h4>Lugar de Encuentro</h4>
              <p>Bodytech Cúcuta</p>
              <span className="location-detail">¡Nos vemos allí!</span>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">🔥</div>
            <div className="info-content">
              <h4>Frecuencia</h4>
              <p>Todos los días</p>
              <span className="frequency-detail">Sin excusas</span>
            </div>
          </div>
        </div>

        <div className="motivation-banner">
          <div className="banner-content">
            <h3>💪 "NO HAY EXCUSAS, SOLO RESULTADOS" 💪</h3>
            <p>Únete al BROCCOLI CREW y transforma tu vida</p>
          </div>
          <div className="banner-effects">
            <div className="effect-particle"></div>
            <div className="effect-particle delay-1"></div>
            <div className="effect-particle delay-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
