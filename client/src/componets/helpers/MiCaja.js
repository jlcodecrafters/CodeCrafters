import React, { useState, useEffect } from 'react';

function MiCaja({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const myRef = React.createRef();

  const checkVisibility = () => {
      if (myRef.current) {
        const rect = myRef.current.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsVisible(isVisible);
      }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Para verificar la visibilidad inicial
    return () => window.removeEventListener('scroll', checkVisibility);

    // eslint-disable-next-line
  }, []);

  return (
    <div ref={myRef} className={`p-i-wrapper ${isVisible ? "mi-caja visible" : ""}`}>
      {children}
    </div>
  );
}

export default MiCaja;
