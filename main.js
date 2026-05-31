/* ============================================
   ZOLSEA HERRAMIENTAS — Main JS
   Animations, Interactivity, Dynamic Content
   ============================================ */

// ── Data ──────────────────────────────────────
const WHATSAPP_NUMBER = '5491100000000'; // TODO: Replace with real number

const BRANDS = [
  'Gladiator PRO',
  'KTO',
  'Black+Decker',
  'Bosch',
  'Makita',
  'DeWalt',
  'Stanley',
  'Truper',
];

const PRODUCTS = [
  {
    name: 'Soldadora MIG 200A',
    brand: 'Gladiator PRO',
    category: 'welding',
    desc: 'Soldadora inverter MIG 200A. Uso con GAS o SIN GAS. Ideal para trabajos profesionales e industriales.',
    image: '/images/soldadora-mig.png',
    blueprints: [
      { title: 'Panel de Control', subtitle: 'Ajuste de Precisión', type: 'dial' },
      { title: 'Tecnología Inverter IGBT', subtitle: 'Estabilidad de Arco', type: 'igbt' }
    ],
    specs: {
      'Voltaje': '220V ~ 50-60Hz',
      'Rango Amperaje': '20 - 200A',
      'Compatibilidad': 'Con Gas / Sin Gas (Flux)',
      'Espesor de Alambre': '0.6mm - 1.0mm',
      'Ciclo de Trabajo': '60% a 200A',
      'Peso Neto': '12.5 kg'
    },
    longDesc: 'La soldadora Gladiator PRO MIG 200A es una máquina inverter de alto rendimiento diseñada para profesionales exigentes. Permite soldar con alambre tubular autoprotegido (sin gas) o alambre sólido convencional con gas protector. Equipada con tecnología IGBT de última generación, asegura una fusión suave, mínima salpicadura y máxima eficiencia energética en cualquier tipo de trabajo pesado.'
  },
  {
    name: 'Kit Inalámbrico 21v',
    brand: 'KTO',
    category: 'battery',
    desc: 'Kit de poda completo: motosierra + extensores + sopladora brushless. Batería de litio 21v incluida.',
    image: '/images/kit-inalambrico.png',
    blueprints: [
      { title: 'Módulo de Batería 21V', subtitle: 'Celda Li-Ion Inteligente', type: 'battery' },
      { title: 'Motor Brushless KTO', subtitle: 'Inducción Sin Carbones', type: 'motor' }
    ],
    specs: {
      'Tensión Máxima': '21V Max',
      'Tipo de Baterías': 'Litio-Ion 4.0 Ah',
      'Motor Sopladora': 'Brushless (Sin Escobillas)',
      'Velocidad de Viento': '150 km/h',
      'Largo de Espada': '4 Pulgadas',
      'Accesorios': 'Motosierra + Sopladora + Maletín + Extensor'
    },
    longDesc: 'El Kit Inalámbrico de Poda KTO de 21V ofrece la solución definitiva y ecológica para el mantenimiento integral del jardín. La mini motosierra de mano permite cortes rápidos y limpios en ramas y madera verde, mientras que la sopladora Brushless ofrece un extraordinario caudal de aire para limpieza rápida de hojas y residuos de corte, todo alimentado por la misma batería de litio inteligente.'
  },
  {
    name: 'Cortadora de Pasto 220v',
    brand: 'KTO',
    category: 'electric',
    desc: 'Kit de jardín: cortadora de pasto + bordeadora + sopladora 21v. Todo lo que necesitás para tu jardín.',
    image: '/images/cortadora-pasto.png',
    blueprints: [
      { title: 'Sistema de Cuchillas', subtitle: 'Corte Rotativo', type: 'cutting' },
      { title: 'Regulación de Altura', subtitle: '5 Posiciones Centralizadas', type: 'height' }
    ],
    specs: {
      'Voltaje': '220V ~ 50Hz',
      'Potencia Motor': '1400W / 1.8 HP',
      'Ancho de Corte': '320 mm / 12.5"',
      'Capacidad Bolsa': '35 Litros',
      'Niveles de Altura': '5 Ajustes Centralizados',
      'Incluye': 'Cortadora + Bordeadora + Sopladora 21v'
    },
    longDesc: 'Este combo de mantenimiento de jardín KTO está diseñado para mantener tu césped en perfectas condiciones de forma simple y sin esfuerzo. La cortadora de césped eléctrica cuenta con un potente motor de inducción de 1400W y una bolsa recolectora de 35 litros. La bordeadora complementaria facilita los detalles finos en bordes y esquinas, y la sopladora compacta agiliza la limpieza post-corte.'
  },
  {
    name: 'Motosierra Eléctrica 2000w',
    brand: 'Gladiator PRO',
    category: 'electric',
    desc: 'Motosierra eléctrica de 2000w con espada de 16 pulgadas. Potencia profesional con cable.',
    image: '/images/motosierra-electrica.png',
    blueprints: [
      { title: 'Espada de 16"', subtitle: 'Acero Laminado', type: 'blade' },
      { title: 'Freno de Seguridad', subtitle: 'Parada Instantánea', type: 'cutting' }
    ],
    specs: {
      'Potencia Absorbida': '2000W / 2.7 HP',
      'Voltaje': '220V - 50Hz',
      'Largo de Espada': '400 mm / 16"',
      'Paso de Cadena': '3/8" LP',
      'Capacidad Aceite': '150 ml (Auto)',
      'Freno de Cadena': 'Sí (Mecánico/Inercial)'
    },
    longDesc: 'La motosierra eléctrica Gladiator PRO de 2000W combina la potencia devastadora de un motor de gasolina con la limpieza y el bajo mantenimiento de un motor eléctrico. Su espada de 16 pulgadas de calidad industrial y su cadena de paso fino aseguran cortes suaves y rápidos. Cuenta con engrase automático de cadena y un freno de seguridad de parada instantánea ante contragolpes.'
  },
  {
    name: 'Mini Motosierra 21v',
    brand: 'KTO',
    category: 'battery',
    desc: 'Mini motosierra inalámbrica 21v con maletín y extensores. Compacta, liviana y potente.',
    image: '/images/mini-motosierra.png',
    blueprints: [
      { title: 'Soporte y Guía', subtitle: 'Protección Anti-Astillas', type: 'blade' },
      { title: 'Batería Desplazable', subtitle: 'Acople Deslizante Rápido', type: 'battery' }
    ],
    specs: {
      'Tensión Batería': '21V Max',
      'Capacidad Celda': '2.0 Ah Li-Ion',
      'Largo de Barra': '4" / 100 mm',
      'Velocidad de Cadena': '5 m/s',
      'Tiempo de Carga': '1.5 Horas',
      'Peso de Operación': '1.1 kg'
    },
    longDesc: 'La mini motosierra inalámbrica KTO de 21V es la herramienta preferida por paisajistas y arboricultores para poda de altura y cortes de precisión en espacios reducidos. Con un peso de tan solo 1.1 kg, se opera cómodamente con una sola mano. Viene equipada con un extensor telescópico que permite alcanzar ramas de hasta 3 metros de altura con total seguridad y estabilidad.'
  },
  {
    name: 'Set de Herramientas Profesional',
    brand: 'KTO',
    category: 'accessories',
    desc: 'Maletín profesional con llaves, tubos, destornilladores y más. Acero cromo vanadio de alta resistencia.',
    image: '/images/set-herramientas.png',
    blueprints: [
      { title: 'Llave Crique 72 Dientes', subtitle: 'Engranaje de Precisión', type: 'ratchet' },
      { title: 'Aleación Cromo-Vanadio', subtitle: 'Máxima Resistencia Cr-V', type: 'gears' }
    ],
    specs: {
      'Cantidad de Piezas': '150 Piezas',
      'Material': 'Acero Cromo Vanadio (Cr-V)',
      'Medidas de Encastre': '1/2", 3/8" y 1/4"',
      'Tratamiento Superficial': 'Cromado Espejo Anti-Corrosión',
      'Tipo de Maletín': 'Plástico Inyectado Alto Impacto',
      'Garantía de Resistencia': 'Garantía Limitada de por Vida'
    },
    longDesc: 'Este maletín de herramientas KTO es un taller mecánico portátil. Fabricado íntegramente en acero Cromo Vanadio forjado y templado, ofrece una resistencia a la torsión que supera ampliamente las normas internacionales DIN. Las llaves crique de 72 dientes permiten trabajar en ángulos reducidos de tan solo 5°, y su práctico maletín de alto impacto mantiene cada pieza firmemente organizada.'
  },
  {
    name: 'Soldadora Inverter MMA 160A',
    brand: 'Gladiator PRO',
    category: 'welding',
    desc: 'Soldadora inverter compacta 160A. Tecnología IGBT de alta estabilidad. Ultra liviana.',
    image: '/images/soldadora-mig.png',
    blueprints: [
      { title: 'Pantalla Digital', subtitle: 'Monitoreo en Tiempo Real', type: 'dial' },
      { title: 'Hot Start & Arc Force', subtitle: 'Cebado Inteligente IGBT', type: 'igbt' }
    ],
    specs: {
      'Rango de Amperaje': '20 - 160A',
      'Voltaje': '220V ~ 50-60Hz',
      'Electrodos Aptos': '1.6mm a 4.0mm',
      'Ciclo de Trabajo': '45% a 160A',
      'Tecnología': 'IGBT Inverter',
      'Peso Neto': '4.2 kg'
    },
    longDesc: 'La soldadora Gladiator Inverter MMA 160A es una herramienta compacta pero sumamente potente, ideal para soldadores aficionados y profesionales que requieren máxima portabilidad. Equipada con las funciones automáticas de Hot Start (cebado fácil del arco) y Arc Force (estabilidad de soldadura en posiciones difíciles), garantiza costuras de soldadura de calidad industrial en electrodos celulósicos y básicos.'
  },
  {
    name: 'Set de Puntas y Mechas Pro',
    brand: 'Gladiator PRO',
    category: 'accessories',
    desc: 'Set profesional de mechas y puntas en estuche reforzado. Acero HSS Titanio de alta durabilidad.',
    image: '/images/set-herramientas.png',
    blueprints: [
      { title: 'Nitruro de Titanio', subtitle: 'Dureza Extrema HSS', type: 'blade' },
      { title: 'Geometría Split Point', subtitle: 'Ángulo autocentrado 135°', type: 'cutting' }
    ],
    specs: {
      'Cantidad de Piezas': '40 piezas',
      'Material de Mechas': 'Acero HSS con recubrimiento de Titanio',
      'Material de Puntas': 'Acero S2 endurecido de alta torsión',
      'Estuche': 'Termoplástico reforzado con visor transparente',
      'Tipo de Encastre': 'Hexagonal de 1/4" de cambio rápido',
      'Compatibilidad': 'Taladros, atornilladores y llaves de impacto'
    },
    longDesc: 'El Set de Puntas y Mechas Gladiator PRO de 40 piezas ofrece la máxima versatilidad y resistencia para trabajos de perforación y atornillado en metal, concreto y madera. Las mechas HSS están recubiertas con Nitruro de Titanio, reduciendo la fricción y el calentamiento para prolongar su vida útil hasta 3 veces más. Las puntas de atornillado de acero S2 garantizan un acople perfecto, evitando el desgaste de las cabezas de los tornillos.'
  }
];

// ── WhatsApp SVG icon ─────────────────────────
const WA_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

document.addEventListener('DOMContentLoaded', () => {
  initHeroEditorial();
  initBrandsCarousel();
  initProductsGrid();
  initSplitTextReveal(); // Divide los títulos antes de observar el scroll
  initScrollReveal();
  initNavbar();
  initWhatsApp();
  initProductModalEvents();
  
  // Inicialización de Interactividades Premium de Alta Gama
  initMagneticButtons();
  initButtonGlowTracker();
  init3DCardTilt();
});

// ── Hero Editorial Tipográfico & Parallax Multicapa ──
function initHeroEditorial() {
  const viewport = document.getElementById('heroViewport');
  if (!viewport) return;

  const glow = document.getElementById('heroGlow');
  const bgWrapper = document.getElementById('heroBgTextWrapper');
  const prodWrapper = document.getElementById('heroProductRenderWrapper');
  const slideViewport = document.querySelector('.showcase-slides-viewport');

  const bgTexts = document.querySelectorAll('.hero-bg-text');
  const productImages = document.querySelectorAll('.hero-product-image');
  const tabButtons = document.querySelectorAll('.showcase-tab');
  const slides = document.querySelectorAll('.showcase-slide');
  const prevBtn = document.getElementById('showcasePrev');
  const nextBtn = document.getElementById('showcaseNext');
  const pagerCurrent = document.getElementById('pagerCurrent');

  let currentSlide = 0;
  const slideCount = 6;
  let autoPlayInterval = null;
  let userInteracted = false;
  let isTransitioning = false;

  // Registrar plugins de GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Parallax interactivo del mouse (solo en escritorio)
  if (window.innerWidth > 768) {
    viewport.addEventListener('mousemove', (e) => {
      const rect = viewport.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Glow sigue al cursor
      gsap.to(glow, {
        left: `${x}px`,
        top: `${y}px`,
        duration: 0.6,
        ease: "power2.out"
      });

      // Cálculo de offsets
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (e.clientX - (rect.left + centerX)) / centerX;
      const deltaY = (e.clientY - (rect.top + centerY)) / centerY;

      // Capas de parallax unificadas en la misma dirección para profundidad tridimensional sin repulsión
      gsap.to(bgWrapper, {
        x: deltaX * 5,
        y: deltaY * 5,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.to(slideViewport, {
        x: deltaX * 8,
        y: deltaY * 8,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.to(prodWrapper, {
        x: deltaX * 15,
        y: deltaY * 15,
        duration: 0.8,
        ease: "power2.out"
      });
    });

    viewport.addEventListener('mouseleave', () => {
      gsap.to([bgWrapper, prodWrapper, slideViewport], {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "power2.out"
      });
      gsap.to(glow, {
        left: '50%',
        top: '50%',
        duration: 1.2,
        ease: "power2.out"
      });
    });
  }

  function goToSlide(slideIndex, isUserAction = false) {
    if (isTransitioning && !isUserAction) return;
    if (slideIndex < 0) slideIndex = slideCount - 1;
    if (slideIndex >= slideCount) slideIndex = 0;

    if (isUserAction) {
      userInteracted = true;
      stopAutoPlay();
    }

    isTransitioning = true;
    const prevSlide = currentSlide;
    currentSlide = slideIndex;

    // 1. Actualizar Tabs y Pager
    tabButtons.forEach((tab, index) => {
      if (index === currentSlide) {
        tab.classList.add('active');
        // Desplazar horizontalmente el contenedor de pestañas sólo en móviles sin propagar al body/window
        const tabsContainer = document.getElementById('showcaseTabs');
        if (tabsContainer && window.innerWidth <= 768) {
          const containerWidth = tabsContainer.clientWidth;
          const tabOffsetLeft = tab.offsetLeft;
          const tabWidth = tab.clientWidth;
          const targetScrollLeft = tabOffsetLeft - (containerWidth / 2) + (tabWidth / 2);
          tabsContainer.scrollTo({
            left: targetScrollLeft,
            behavior: 'smooth'
          });
        }
      } else {
        tab.classList.remove('active');
      }
    });

    if (pagerCurrent) {
      pagerCurrent.innerText = String(currentSlide + 1).padStart(2, '0');
    }

    // 2. Transición de la Tipografía de Fondo Monumental
    const activeText = bgTexts[currentSlide];
    const prevText = bgTexts[prevSlide];

    if (prevText && prevSlide !== currentSlide) {
      prevText.classList.remove('active');
      gsap.to(prevText, {
        opacity: 0,
        scale: 1.08,
        duration: 0.6,
        ease: "power2.inOut"
      });
    }

    activeText.classList.add('active');
    gsap.fromTo(activeText, 
      { opacity: 0, scale: 1.08 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    );

    // 3. Transición de la Imagen del Producto
    const activeProd = productImages[currentSlide];
    const prevProd = productImages[prevSlide];

    if (prevProd && prevSlide !== currentSlide) {
      prevProd.classList.remove('active');
      gsap.to(prevProd, {
        opacity: 0,
        scale: 0.9,
        y: 20,
        duration: 0.6,
        ease: "power2.inOut"
      });
    }

    if (activeProd) {
      activeProd.classList.add('active');
      gsap.fromTo(activeProd,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }

    // 4. Transición de las Tarjetas de Información Frente (Staggered)
    const activeSlideEl = slides[currentSlide];
    const prevSlideEl = slides[prevSlide];

    if (prevSlideEl && prevSlide !== currentSlide) {
      const prevCard = prevSlideEl.querySelector('.panel-card') || prevSlideEl.querySelector('.hero-content');
      const prevItems = prevSlideEl.querySelectorAll('.panel-badge, .hero-badge, h2, .hero-title, p, .hero-subtitle, .hero-actions');
      
      gsap.killTweensOf([prevSlideEl, prevCard, prevItems]);
      
      const tlOut = gsap.timeline({
        onComplete: () => {
          prevSlideEl.classList.remove('active');
        }
      });

      tlOut.to(prevItems, { opacity: 0, y: -15, duration: 0.25, stagger: 0.04, ease: "power2.in" });
      tlOut.to(prevCard, { scale: 0.95, opacity: 0, duration: 0.25, ease: "power2.in" }, 0);
    }

    activeSlideEl.classList.add('active');
    const activeCard = activeSlideEl.querySelector('.panel-card') || activeSlideEl.querySelector('.hero-content');
    const activeItems = activeSlideEl.querySelectorAll('.panel-badge, .hero-badge, h2, .hero-title, p, .hero-subtitle, .hero-actions');

    gsap.killTweensOf([activeSlideEl, activeCard, activeItems]);
    
    gsap.set(activeItems, { opacity: 0, y: 15 });
    gsap.set(activeCard, { scale: 0.95, opacity: 0 });

    const tlIn = gsap.timeline({
      onComplete: () => {
        isTransitioning = false;
      }
    });
    tlIn.to(activeCard, { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" });
    tlIn.to(activeItems, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }, 0.1);
  }

  // Configurar Eventos para Solapas / Pestañas
  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const slideIndex = parseInt(e.currentTarget.getAttribute('data-slide'));
      goToSlide(slideIndex, true);
    });
  });

  // Configurar Eventos para Flechas de Navegación
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentSlide - 1, true);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentSlide + 1, true);
    });
  }

  // Soporte de Gestos Touch (Swipe Horizontal) para celulares
  let touchStartX = 0;
  let touchEndX = 0;

  viewport.addEventListener('touchstart', (e) => {
    if (e.target.closest('.showcase-tabs') || e.target.closest('.showcase-controls-panel') || e.target.closest('.btn-primary') || e.target.closest('.btn-secondary') || e.target.closest('a')) {
      return;
    }
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    if (e.target.closest('.showcase-tabs') || e.target.closest('.showcase-controls-panel') || e.target.closest('.btn-primary') || e.target.closest('.btn-secondary') || e.target.closest('a')) {
      return;
    }
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      goToSlide(currentSlide + 1, true);
    } else if (touchEndX > touchStartX + swipeThreshold) {
      goToSlide(currentSlide - 1, true);
    }
  }

  // Auto-Play inteligente
  function startAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
      if (!userInteracted) {
        goToSlide(currentSlide + 1);
      }
    }, 6000);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  // Inicializar primer slide y auto-play
  goToSlide(0);
  startAutoPlay();
}

/**
 * Dibuja una imagen sobre un canvas respetando la proporción (comportamiento background-size: cover)
 */
function drawImageProp(ctx, img, x, y, w, h, offsetX = 0.5, offsetY = 0.5) {
  offsetX = typeof offsetX === "number" ? offsetX : 0.5;
  offsetY = typeof offsetY === "number" ? offsetY : 0.5;

  if (offsetX < 0) offsetX = 0;
  if (offsetY < 0) offsetY = 0;
  if (offsetX > 1) offsetX = 1;
  if (offsetY > 1) offsetY = 1;

  var iw = img.width,
      ih = img.height,
      r = Math.min(w / iw, h / ih),
      nw = iw * r,   // ancho proporcional
      nh = ih * r,   // alto proporcional
      cx, cy, cw, ch, ar = 1;

  if (nw < w) ar = w / nw;                             
  if (Math.abs(nh - h) < 0.0001 && nw < w) ar = w / nw; 
  if (nh < h) ar = h / nh;                             
  nw *= ar;
  nh *= ar;

  cw = iw / (nw / w);
  ch = ih / (nh / h);

  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY;

  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > iw) cw = iw;
  if (ch > ih) ch = ih;

  ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
}

// ── Brands Carousel ───────────────────────────
function initBrandsCarousel() {
  const track = document.getElementById('brandsTrack');
  if (!track) return;

  // Create items (duplicated 3x for seamless loop)
  const createItems = () => BRANDS.map((b) =>
    `<div class="brand-item"><span class="brand-name">${b}</span></div>`
  ).join('');

  track.innerHTML = createItems() + createItems() + createItems();
}

// ── Products Grid ─────────────────────────────
// ── Products Grid ─────────────────────────────
function initProductsGrid() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map((p, i) => `
    <article class="product-card reveal reveal-delay-${(i % 3) + 1}" data-category="${p.category}">
      <div class="product-image-wrapper">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="product-badge">${p.brand}</span>
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-actions">
          <button class="product-action-btn btn-details" data-index="${i}">
            Ver Más
          </button>
          <button class="product-action-btn btn-whatsapp" data-product="${p.name}">
            ${WA_ICON}
            Consultar
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // Click en "Consultar" (WhatsApp directo)
  grid.querySelectorAll('.btn-whatsapp').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const product = btn.dataset.product;
      const msg = encodeURIComponent(`Hola! Me interesa el producto: ${product}. ¿Podrían darme más información?`);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    });
  });

  // Click en "Ver Más" (Modal Toast)
  grid.querySelectorAll('.btn-details').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const index = parseInt(btn.dataset.index);
      openProductModal(index);
    });
  });

  // --- Category Tabs Logic ---
  const tabsContainer = document.getElementById('productsTabs');
  const indicator = document.getElementById('tabIndicator');
  
  if (tabsContainer && indicator) {
    const tabs = tabsContainer.querySelectorAll('.tab-btn');
    
    const updateIndicator = (activeTab) => {
      if (!activeTab || window.innerWidth <= 992) return;
      indicator.style.width = `${activeTab.offsetWidth}px`;
      indicator.style.left = `${activeTab.offsetLeft}px`;
    };

    // Position initial indicator with a tiny delay to ensure stylesheet is fully rendered
    const initialActive = tabsContainer.querySelector('.tab-btn.active');
    setTimeout(() => updateIndicator(initialActive), 150);

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        updateIndicator(tab);

        const category = tab.dataset.category;
        filterProducts(category);
      });
    });

    window.addEventListener('resize', () => {
      const activeTab = tabsContainer.querySelector('.tab-btn.active');
      updateIndicator(activeTab);
    });
  }
}

// ── Products Category Filtering (GSAP-powered) ──
function filterProducts(category) {
  const cards = document.querySelectorAll('.product-card');
  if (!cards.length) return;

  // Stagger out currently visible cards
  gsap.to(cards, {
    opacity: 0,
    scale: 0.92,
    y: 20,
    duration: 0.25,
    stagger: 0.03,
    ease: 'power2.in',
    onComplete: () => {
      // Toggle display
      cards.forEach(card => {
        const cardCat = card.dataset.category;
        if (category === 'all' || cardCat === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });

      // Filter visible cards and stagger them back in beautifully!
      const visibleCards = Array.from(cards).filter(card => card.style.display !== 'none');
      
      gsap.fromTo(visibleCards, {
        opacity: 0,
        scale: 0.92,
        y: 20
      }, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.05,
        ease: 'power3.out',
        clearProps: 'transform,opacity' // Clear animation style props to avoid collision with CSS hovers
      });
    }
  });
}

// ── Scroll Reveal (IntersectionObserver) ──────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

// ── Navbar ────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');

  // Scroll effect
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  });

  // Mobile menu
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu on link click
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── WhatsApp CTA ──────────────────────────────
function initWhatsApp() {
  const btn = document.getElementById('whatsappBtn');
  const nameInput = document.getElementById('contactName');
  const msgInput = document.getElementById('contactMessage');

  if (!btn) return;

  btn.addEventListener('click', () => {
    const name = nameInput?.value?.trim() || '';
    const message = msgInput?.value?.trim() || '';

    let text = 'Hola! ';
    if (name) text += `Soy ${name}. `;
    if (message) text += message;
    else text += 'Me gustaría recibir asesoramiento sobre herramientas.';

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  });
}

// ── SVG Technical Blueprint Generator ─────────
// ── SVG Technical Blueprint Generator ─────────
function generateBlueprintSVG(title, subtitle, type) {
  let iconPath = '';
  let specs = [];
  
  if (type === 'dial') {
    iconPath = 'M 270 120 A 30 30 0 1 1 330 120 M 300 90 V 120 M 260 160 H 340';
    specs = ['Panel Analógico Inteligente', 'Regulación de Amperaje Fina', 'Ajuste de Velocidad de Alambre'];
  } else if (type === 'igbt') {
    iconPath = 'M 200 130 C 220 60, 240 200, 260 130 C 280 60, 300 200, 320 130 C 340 60, 360 200, 380 130 C 400 60, 420 200, 440 130';
    specs = ['Onda de Transición IGBT', 'Estabilidad del Arco Eléctrico', 'Frecuencia de Conmutación 20kHz'];
  } else if (type === 'battery') {
    iconPath = 'M 260 115 H 340 V 145 H 260 Z M 340 125 H 345 V 135 H 340 M 280 130 H 290 M 300 130 H 310 M 320 130 H 330';
    specs = ['Celdas de Litio Premium 21V', 'Indicador de Carga LED Integrado', 'Sistema de Protección Térmica'];
  } else if (type === 'motor') {
    iconPath = 'M 300 85 A 35 35 0 1 1 299.9 85 M 275 115 L 325 135 M 325 115 L 275 135 M 300 95 V 155';
    specs = ['Motor Brushless sin Carbones', 'Eficiencia Energética +45%', 'Reducción de Fricción y Calor'];
  } else if (type === 'blade') {
    iconPath = 'M 230 115 H 340 A 18 18 0 0 1 340 151 H 230 Z M 250 133 H 320';
    specs = ['Espada de Acero Laminado', 'Canal de Lubricación Automático', 'Paso de Cadena Optimizado 3/8"'];
  } else if (type === 'gears') {
    iconPath = 'M 300 90 L 330 110 V 140 L 300 160 L 270 140 V 110 Z M 300 90 V 160 M 270 110 L 330 140 M 270 140 L 330 110';
    specs = ['Tratamiento Térmico Cromo Vanadio', 'Estructura de Red Atómica Híbrida', 'Máxima Resistencia a la Torsión'];
  } else if (type === 'cutting') {
    iconPath = 'M 280 120 A 25 25 0 1 1 320 120 A 25 25 0 1 1 280 120';
    specs = ['Cuchillas de Acero de Carbono', 'Corte Rotativo de Alta Velocidad', 'Regulación de Altura Centralizada'];
  } else if (type === 'height') {
    iconPath = 'M 220 140 H 380 M 250 140 V 110 M 290 140 V 100 M 330 140 V 90 M 370 140 V 80';
    specs = ['Posiciones de Corte Regulables', 'Chasis Reforzado Anti-Impacto', 'Manillar Ergonómico Plegable'];
  } else if (type === 'ratchet') {
    iconPath = 'M 250 125 A 15 15 0 1 1 280 125 H 370 M 265 125 L 255 135';
    specs = ['Mecanismo de 72 Dientes', 'Ángulo de Recuperación de 5°', 'Inversión de Giro Quick-Release'];
  } else {
    iconPath = 'M 300 80 A 40 40 0 1 1 299.9 80 M 270 120 H 330';
    specs = ['Esquema Técnico Detallado', 'Componentes Calibrados', 'Certificación de Calidad Oficial'];
  }

  // Generate clean spec bullet points spaced at the bottom
  const specText = specs.map((s, idx) => 
    `<text x="300" y="${220 + idx * 18}" fill="%238c92a0" font-family="monospace" font-size="10" font-weight="500" text-anchor="middle" letter-spacing="1">▪ ${s.toUpperCase()}</text>`
  ).join('');

  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="600" height="300">
    <!-- Dark Space Surface Background -->
    <rect width="100%" height="100%" fill="%23080808"/>
    
    <defs>
      <linearGradient id="neonOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="%23ff6b35" />
        <stop offset="100%" stop-color="%23f59e0b" />
      </linearGradient>
      <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <!-- Technical Digital Grid -->
    <path d="M 0 25 L 600 25 M 0 50 L 600 50 M 0 75 L 600 75 M 0 100 L 600 100 M 0 125 L 600 125 M 0 150 L 600 150 M 0 175 L 600 175 M 0 200 L 600 200" stroke="%23121212" stroke-width="1"/>
    <path d="M 50 0 L 50 300 M 100 0 L 100 300 M 150 0 L 150 300 M 200 0 L 200 300 M 250 0 L 250 300 M 300 0 L 300 300 M 350 0 L 350 300 M 400 0 L 400 300 M 450 0 L 450 300 M 500 0 L 500 300 M 550 0 L 550 300" stroke="%23121212" stroke-width="1"/>
    
    <!-- Precision Crosshairs in Corners -->
    <path d="M 30 20 H 45 M 35 15 V 30" stroke="%23333" stroke-width="1"/>
    <path d="M 555 20 H 570 M 565 15 V 30" stroke="%23333" stroke-width="1"/>
    <path d="M 30 280 H 45 M 35 270 V 285" stroke="%23333" stroke-width="1"/>
    <path d="M 555 280 H 570 M 565 270 V 285" stroke="%23333" stroke-width="1"/>

    <!-- Outer Technical Border -->
    <rect x="15" y="15" width="570" height="270" rx="6" fill="none" stroke="%23222" stroke-width="1" stroke-dasharray="10, 5"/>
    <rect x="20" y="20" width="560" height="260" rx="4" fill="none" stroke="%23181818" stroke-width="1.5"/>

    <!-- Blueprint circles with glow -->
    <circle cx="300" cy="120" r="55" stroke="url(%23neonOrangeGrad)" stroke-dasharray="6,5" stroke-width="1.2" stroke-opacity="0.35" fill="none" filter="url(%23neonGlow)"/>
    <circle cx="300" cy="120" r="68" stroke="url(%23neonOrangeGrad)" stroke-width="0.8" stroke-opacity="0.18" fill="none"/>
    
    <!-- Core Technical Icon -->
    <path d="${iconPath}" stroke="url(%23neonOrangeGrad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" filter="url(%23neonGlow)"/>
    
    <!-- Header Labels at the top -->
    <text x="300" y="48" fill="%23ffffff" font-family="sans-serif" font-size="12" font-weight="900" text-anchor="middle" letter-spacing="4.5">${title.toUpperCase()}</text>
    <text x="300" y="66" fill="%23f59e0b" font-family="monospace" font-size="8.5" font-weight="bold" text-anchor="middle" letter-spacing="2">${subtitle.toUpperCase()}</text>
    <line x1="200" y1="78" x2="400" y2="78" stroke="%23ff6b35" stroke-width="1.5" stroke-opacity="0.5"/>

    <!-- Specifications at the bottom -->
    ${specText}
  </svg>`;
}

// ── Open Product Modal Toast ──────────────────
function openProductModal(index) {
  const p = PRODUCTS[index];
  const overlay = document.getElementById('productModalOverlay');
  const toast = document.getElementById('productModalToast');
  const modalBody = document.getElementById('modalBody');
  
  if (!p || !overlay || !toast || !modalBody) return;

  // Build carousel slides
  const slide1 = p.image;
  const slide2 = generateBlueprintSVG(p.blueprints[0].title, p.blueprints[0].subtitle, p.blueprints[0].type);
  const slide3 = generateBlueprintSVG(p.blueprints[1].title, p.blueprints[1].subtitle, p.blueprints[1].type);
  
  const modalSlides = [slide1, slide2, slide3];
  let currentSlideIndex = 0;

  // Technical specifications grid
  const specRowsHtml = Object.entries(p.specs).map(([label, val]) => `
    <div class="spec-row">
      <span class="spec-label">${label}</span>
      <span class="spec-value">${val}</span>
    </div>
  `).join('');

  // Render content
  modalBody.innerHTML = `
    <!-- Left Column: Carousel & Technical Blueprints -->
    <div class="modal-left-column">
      <div class="modal-carousel">
        <div class="carousel-slides" id="carouselSlides" style="transform: translateX(0%);">
          ${modalSlides.map((s, idx) => `
            <div class="carousel-slide">
              <img src="${s}" alt="${p.name} - Vista ${idx + 1}" />
            </div>
          `).join('')}
        </div>
        
        <button class="carousel-nav-btn prev" id="carouselPrevBtn" aria-label="Anterior">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="carousel-nav-btn next" id="carouselNextBtn" aria-label="Siguiente">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        
        <div class="carousel-dots" id="carouselDots">
          ${modalSlides.map((_, idx) => `
            <div class="carousel-dot ${idx === 0 ? 'active' : ''}" data-slide="${idx}"></div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Right Column: Text Information & Specs Sheet -->
    <div class="modal-right-column">
      <!-- Header Info -->
      <div class="modal-header-info">
        <span class="modal-brand-badge">${p.brand}</span>
        <h2 class="modal-product-title">${p.name}</h2>
      </div>

      <!-- Description -->
      <h4 class="modal-section-title">Descripción Detallada</h4>
      <p class="modal-description">${p.longDesc}</p>

      <!-- Technical Specs -->
      <h4 class="modal-section-title">Ficha Técnica</h4>
      <div class="modal-specs-grid">
        ${specRowsHtml}
      </div>

      <!-- Call to action -->
      <button class="modal-action-cta" id="modalCtaBtn" data-product="${p.name}">
        ${WA_ICON}
        Consultar por WhatsApp
      </button>
    </div>
  `;

  // Attach carousel listeners
  const slidesContainer = document.getElementById('carouselSlides');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');
  const dotsContainer = document.getElementById('carouselDots');
  const dots = dotsContainer.querySelectorAll('.carousel-dot');

  function updateCarousel() {
    slidesContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlideIndex);
    });
  }

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentSlideIndex = (currentSlideIndex - 1 + modalSlides.length) % modalSlides.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentSlideIndex = (currentSlideIndex + 1) % modalSlides.length;
    updateCarousel();
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      currentSlideIndex = parseInt(dot.dataset.slide);
      updateCarousel();
    });
  });

  // Attach WhatsApp CTA inside modal
  const ctaBtn = document.getElementById('modalCtaBtn');
  ctaBtn.addEventListener('click', () => {
    const msg = encodeURIComponent(`Hola! Me interesa el producto: ${p.name}. ¿Podrían darme más información detallada sobre las especificaciones técnicas?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  });

  // Show Modal Drawer
  overlay.classList.add('active');
  toast.classList.add('active');
  document.body.style.overflow = 'hidden'; // Evita scroll de fondo
}

// ── Close Product Modal Toast ─────────────────
function closeProductModal() {
  const overlay = document.getElementById('productModalOverlay');
  const toast = document.getElementById('productModalToast');
  
  if (overlay && toast) {
    overlay.classList.remove('active');
    toast.classList.remove('active');
    
    // Restaurar scroll de fondo si el menú mobile no está abierto
    const links = document.getElementById('navLinks');
    if (!links || !links.classList.contains('open')) {
      document.body.style.overflow = '';
    }
  }
}

// ── Initialize Product Modal Event Listeners ──
function initProductModalEvents() {
  const overlay = document.getElementById('productModalOverlay');
  const closeBtn = document.getElementById('modalCloseBtn');
  
  if (overlay) {
    overlay.addEventListener('click', closeProductModal);
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closeProductModal);
  }

  // Cerrar con tecla Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
    }
  });
}

// ── INTERACTIVIDADES PREMIUM DE ALTA GAMA ─────────────────────────────

// 1. Botones Magnéticos (Desktop)
function initMagneticButtons() {
  if (window.innerWidth <= 768) return;

  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, #whatsappBtn');

  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Desplazamiento magnético suave con GSAP
      gsap.to(btn, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    btn.addEventListener('mouseleave', () => {
      // Regreso elástico orgánico
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1.1, 0.4)"
      });
    });
  });
}

// 2. Rastreador de Luz Líquida (Cursor Glow Tracker)
function initButtonGlowTracker() {
  // Delegación de eventos global para abarcar botones dinámicos y estáticos
  document.addEventListener('mousemove', (e) => {
    const btn = e.target.closest('.btn-primary, .btn-secondary, #whatsappBtn, .product-action-btn');
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  });
}

// 3. Tarjetas con Inclinación 3D y Reflejo Holográfico (Dynamic Delegation)
function init3DCardTilt() {
  if (window.innerWidth <= 768) return;

  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Desviación relativa (-1 a 1)
    const deltaX = (x - rect.width / 2) / (rect.width / 2);
    const deltaY = (y - rect.height / 2) / (rect.height / 2);

    // Inclinación 3D fluida
    gsap.to(card, {
      rotateY: deltaX * 8,
      rotateX: deltaY * -8,
      transformPerspective: 800,
      scale: 1.02,
      boxShadow: "0 25px 50px rgba(0,0,0,0.55), 0 0 30px rgba(255,107,53,0.08)",
      duration: 0.3,
      ease: "power2.out"
    });

    // Capa de brillo reflectiva dinámica
    let shine = card.querySelector('.card-shine');
    if (!shine) {
      shine = document.createElement('div');
      shine.className = 'card-shine';
      card.appendChild(shine);
    }
    gsap.to(shine, {
      opacity: 0.15,
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.4) 0%, transparent 60%)`,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  grid.addEventListener('mouseleave', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return;

    // Restauración inercial suave
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      duration: 0.6,
      ease: "power3.out"
    });

    const shine = card.querySelector('.card-shine');
    if (shine) {
      gsap.to(shine, {
        opacity: 0,
        duration: 0.5
      });
    }
  }, true);
}

// 4. Revelado "Split-Text" Líquido de Títulos al Scroll
function initSplitTextReveal() {
  const targets = document.querySelectorAll('.section-title.reveal');
  targets.forEach(target => {
    if (target.querySelector('.split-word')) return;

    const text = target.textContent.trim();
    target.innerHTML = '';
    target.style.display = 'inline-block';
    target.style.overflow = 'hidden';

    // Separación por palabras
    const words = text.split(' ');
    words.forEach((word, index) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.overflow = 'hidden';
      wordSpan.style.verticalAlign = 'bottom';

      const innerSpan = document.createElement('span');
      innerSpan.className = 'split-word';
      innerSpan.textContent = word;
      innerSpan.style.display = 'inline-block';
      innerSpan.style.transform = 'translateY(110%)';
      innerSpan.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      innerSpan.style.transitionDelay = `${index * 0.08}s`;

      wordSpan.appendChild(innerSpan);
      target.appendChild(wordSpan);

      if (index < words.length - 1) {
        target.appendChild(document.createTextNode(' '));
      }
    });
  });
}

