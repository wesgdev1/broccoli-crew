import { useState } from "react";
import "./ProductsSection.css";

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "CAMISETA BROCCOLI CREW",
      subtitle: "Edición Limitada",
      price: "$45.000",
      originalPrice: "$60.000",
      status: "En Proceso",
      image:
        "https://res.cloudinary.com/dndit9q1h/image/upload/v1750132056/ChatGPT_Image_16_jun_2025_10_47_24_p.m._onstht.png",
      description:
        "Camiseta premium del BROCCOLI CREW con diseño exclusivo. Material de alta calidad, perfecta para entrenar o uso casual.",
      features: [
        "Tela transpirable premium",
        "Diseño exclusivo BROCCOLI CREW",
        "Corte atlético perfecto",
        "Durabilidad garantizada",
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Negro", "Blanco", "Verde Militar"],
      releaseDate: "Agosto 2025",
      stock: "Edición Limitada - 100 unidades",
    },
    {
      id: 2,
      name: "CAMISETA WORKOUT ELITE",
      subtitle: "Próximamente",
      price: "$50.000",
      originalPrice: "$70.000",
      status: "Próximamente",
      image:
        "https://res.cloudinary.com/dndit9q1h/image/upload/v1750132056/ChatGPT_Image_16_jun_2025_10_47_24_p.m._onstht.png",
      description:
        "Camiseta de entrenamiento de alta gama con tecnología avanzada para máximo rendimiento.",
      features: [
        "Tecnología Dri-FIT avanzada",
        "Protección UV 50+",
        "Costuras reforzadas",
        "Logo reflectante",
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Negro", "Rojo", "Azul"],
      releaseDate: "Septiembre 2025",
      stock: "Pre-orden disponible",
    },
    {
      id: 3,
      name: "CAMISETA LEGEND",
      subtitle: "Colección Premium",
      price: "$65.000",
      originalPrice: "$85.000",
      status: "En Desarrollo",
      image:
        "https://res.cloudinary.com/dndit9q1h/image/upload/v1750132056/ChatGPT_Image_16_jun_2025_10_47_24_p.m._onstht.png",
      description:
        "La camiseta más exclusiva de la colección BROCCOLI CREW, diseñada para verdaderos legends.",
      features: [
        "Edición súper limitada",
        "Numeración individual",
        "Materiales premium importados",
        "Certificado de autenticidad",
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Oro", "Plata", "Negro Mate"],
      releaseDate: "Octubre 2025",
      stock: "Solo 50 unidades",
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "En Proceso":
        return "#ff6b6b";
      case "Próximamente":
        return "#ffd93d";
      case "En Desarrollo":
        return "#6c5ce7";
      default:
        return "#00b894";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "En Proceso":
        return "🔥";
      case "Próximamente":
        return "⏳";
      case "En Desarrollo":
        return "🛠️";
      default:
        return "✅";
    }
  };

  return (
    <section className="products-section">
      <div className="products-content">
        <div className="products-header">
          <h2 className="products-title">🛍️ PRODUCTOS BROCCOLI CREW 🛍️</h2>
          <p className="products-subtitle">
            Gear exclusivo para verdaderos miembros del crew. Diseños únicos,
            calidad premium.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => openModal(product)}
            >
              <div
                className="product-status"
                style={{ backgroundColor: getStatusColor(product.status) }}
              >
                <span className="status-icon">
                  {getStatusIcon(product.status)}
                </span>
                <span className="status-text">{product.status}</span>
              </div>

              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-overlay">
                  <span className="view-details">Ver Detalles</span>
                </div>
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-subtitle">{product.subtitle}</p>

                <div className="product-pricing">
                  <span className="current-price">{product.price}</span>
                  <span className="original-price">
                    {product.originalPrice}
                  </span>
                  <span className="discount">25% OFF</span>
                </div>

                <div className="product-release">
                  <span className="release-label">Lanzamiento:</span>
                  <span className="release-date">{product.releaseDate}</span>
                </div>

                <button className="notify-button">🔔 Notificarme</button>
              </div>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <h3>¿Quieres ser el primero en conseguir estos productos?</h3>
          <p>Únete a nuestra lista VIP y recibe notificaciones exclusivas</p>
          <button className="vip-button">
            ⭐ Lista VIP - Acceso Exclusivo ⭐
          </button>
        </div>
      </div>

      {/* Modal de Producto */}
      {selectedProduct && (
        <div className="product-modal-overlay" onClick={closeModal}>
          <div
            className="product-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-button" onClick={closeModal}>
              ✕
            </button>

            <div className="modal-product-grid">
              <div className="modal-product-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                <div
                  className="modal-status"
                  style={{
                    backgroundColor: getStatusColor(selectedProduct.status),
                  }}
                >
                  {getStatusIcon(selectedProduct.status)}{" "}
                  {selectedProduct.status}
                </div>
              </div>

              <div className="modal-product-details">
                <h2>{selectedProduct.name}</h2>
                <p className="modal-subtitle">{selectedProduct.subtitle}</p>

                <div className="modal-pricing">
                  <span className="modal-current-price">
                    {selectedProduct.price}
                  </span>
                  <span className="modal-original-price">
                    {selectedProduct.originalPrice}
                  </span>
                </div>

                <p className="modal-description">
                  {selectedProduct.description}
                </p>

                <div className="modal-features">
                  <h4>Características:</h4>
                  <ul>
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-options">
                  <div className="modal-sizes">
                    <h4>Tallas disponibles:</h4>
                    <div className="sizes-list">
                      {selectedProduct.sizes.map((size, index) => (
                        <span key={index} className="size-tag">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-colors">
                    <h4>Colores disponibles:</h4>
                    <div className="colors-list">
                      {selectedProduct.colors.map((color, index) => (
                        <span key={index} className="color-tag">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="modal-info">
                  <p>
                    <strong>Lanzamiento:</strong> {selectedProduct.releaseDate}
                  </p>
                  <p>
                    <strong>Stock:</strong> {selectedProduct.stock}
                  </p>
                </div>

                <div className="modal-actions">
                  <button className="pre-order-button">
                    🛒 Pre-ordenar Ahora
                  </button>
                  <button className="notify-button-modal">
                    🔔 Notificar Disponibilidad
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
