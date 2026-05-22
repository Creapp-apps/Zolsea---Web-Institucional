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
  }
];

// ── WhatsApp SVG icon ─────────────────────────
const WA_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

// ── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initScrollytelling();
  initBrandsCarousel();
  initProductsGrid();
  initScrollReveal();
  initNavbar();
  initWhatsApp();
  initProductModalEvents();
});

// ── 3D Canvas Scrollytelling ──────────────────
function initScrollytelling() {
  const canvas = document.getElementById('scrollyCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const loader = document.getElementById('scrollyLoader');
  const loaderBarFill = document.getElementById('loaderBarFill');
  const loaderPercent = document.getElementById('loaderPercent');

  const frameCount = 192;
  const images = [];
  let loadedCount = 0;

  // Registrar plugins de GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Desactivar scroll del body mientras carga la experiencia
  document.body.style.overflow = 'hidden';

  // Precargar cuadros
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    const formattedIndex = String(i).padStart(4, '0');
    // Servido directamente desde la raíz gracias a la carpeta assets configurada en Vite
    img.src = `/frames/frame_${formattedIndex}.webp`;
    
    img.onload = () => {
      loadedCount++;
      updateLoader(loadedCount);
    };
    img.onerror = () => {
      // Continuar cargando de forma resiliente si hay algún error
      loadedCount++;
      updateLoader(loadedCount);
    };
    images.push(img);
  }

  function updateLoader(count) {
    const percent = Math.floor((count / frameCount) * 100);
    if (loaderBarFill) loaderBarFill.style.width = `${percent}%`;
    if (loaderPercent) loaderPercent.innerText = `${percent}%`;

    if (count === frameCount) {
      setTimeout(() => {
        if (loader) {
          loader.classList.add('fade-out');
        }
        document.body.style.overflow = '';
        startScrollTrigger();
      }, 600);
    }
  }

  function startScrollTrigger() {
    // Redimensionar Canvas fluido manteniendo proporciones reales en CSS
    function resizeCanvas() {
      // Ajustar tamaño del canvas a su tamaño real de visualización en el layout
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      renderFrame(state.frame);
    }

    window.addEventListener('resize', resizeCanvas);

    const state = { frame: 0 };

    // Pintar cuadro actual
    function renderFrame(index) {
      const img = images[Math.floor(index)];
      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Ajuste proporcional de alto para video vertical 9:16 con desplazamiento vertical (evita superposición con navbar)
        const offsetY = window.innerWidth >= 769 ? 90 : 50;
        const scaledHeight = canvas.height - offsetY;
        const scaledWidth = (img.width / img.height) * scaledHeight;
        const offsetX = (canvas.width - scaledWidth) / 2;
        
        // 1. Dibujar el cuadro del video desplazado verticalmente
        ctx.drawImage(img, offsetX, offsetY, scaledWidth, scaledHeight);
        
        // 2. Aplicar Máscara Horizontal (Destination-In) para suavizar los bordes laterales del video
        const horizGrad = ctx.createLinearGradient(offsetX, 0, offsetX + scaledWidth, 0);
        horizGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
        horizGrad.addColorStop(0.12, 'rgba(0, 0, 0, 1)');
        horizGrad.addColorStop(0.88, 'rgba(0, 0, 0, 1)');
        horizGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.globalCompositeOperation = 'destination-in';
        ctx.fillStyle = horizGrad;
        ctx.fillRect(offsetX, offsetY, scaledWidth, scaledHeight);
        
        // 3. Aplicar Máscara Vertical (Destination-In) para suavizar la base inferior
        const vertGrad = ctx.createLinearGradient(0, offsetY, 0, offsetY + scaledHeight);
        vertGrad.addColorStop(0, 'rgba(0, 0, 0, 1)');
        vertGrad.addColorStop(0.88, 'rgba(0, 0, 0, 1)');
        vertGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = vertGrad;
        ctx.fillRect(offsetX, offsetY, scaledWidth, scaledHeight);
        
        // 4. Restaurar modo por defecto para siguientes renders
        ctx.globalCompositeOperation = 'source-over';
      }
    }

    // Inicializar tamaños
    resizeCanvas();

    // GSAP ScrollTrigger para controlar el cuadro del taladro 3D según scroll
    gsap.to(state, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-scrolly-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1, // Suave amortiguación líquida para scroll continuo
        onUpdate: () => {
          renderFrame(state.frame);
        }
      }
    });

    // Controlar el desvanecimiento y entrada de textos sincronizado con scroll (Unified Master Timeline - Apple-style)
    const panels = gsap.utils.toArray('.scrolly-panel');
    
    // Asegurar que el primer panel empiece activo
    if (panels[0]) panels[0].classList.add('active');

    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-scrolly-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1, // Amortiguación líquida para sincronización perfecta
      }
    });

    panels.forEach((panel, i) => {
      const badge = panel.querySelector('.panel-badge') || panel.querySelector('.hero-badge');
      const title = panel.querySelector('h2') || panel.querySelector('.hero-title');
      const desc = panel.querySelector('p') || panel.querySelector('.hero-subtitle');
      const card = panel.querySelector('.panel-card');
      const actions = panel.querySelector('.hero-actions');

      if (i === 0) {
        // El primer panel (Hero Cover) está activo al inicio y se desvanece de manera escalonada (Apple-style)
        masterTl.to(panel, { 
          opacity: 0, 
          duration: 0.15,
          onStart: () => panel.classList.add('active'),
          onComplete: () => panel.classList.remove('active'),
          onReverseStart: () => panel.classList.add('active'),
          onReverseComplete: () => panel.classList.add('active')
        }, 0);
        
        if (badge) masterTl.to(badge, { opacity: 0, y: -20, duration: 0.1 }, 0.02);
        if (title) masterTl.to(title, { opacity: 0, y: -30, duration: 0.12 }, 0.04);
        if (desc) masterTl.to(desc, { opacity: 0, y: -40, duration: 0.12 }, 0.06);
        if (actions) masterTl.to(actions, { opacity: 0, y: -45, duration: 0.12 }, 0.08);
      } else {
        // Los paneles intermedios entran y salen en tramos equitativos del scroll total de forma súper escalonada
        const totalSteps = panels.length - 1; // 5 paneles dinámicos
        const stepSize = 1.0 / totalSteps; // 0.2 (20% del scroll total por tramo)
        
        // Matemáticas de distribución equitativa (0.0 a 1.0)
        const start = (i - 0.75) * stepSize;
        const peakStart = (i - 0.15) * stepSize;
        const peakEnd = (i + 0.15) * stepSize;
        const end = (i + 0.75) * stepSize;

        const durationIn = peakStart - start;
        const durationOut = end - peakEnd;

        // 1. Fase de Entrada (Fades & staggered translations)
        masterTl.fromTo(panel, { opacity: 0 }, { 
          opacity: 1, 
          duration: durationIn,
          onStart: () => panel.classList.add('active'),
          onReverseComplete: () => panel.classList.remove('active')
        }, start);

        if (card) {
          masterTl.fromTo(card, { scale: 0.93 }, { scale: 1, duration: durationIn, ease: "power2.out" }, start);
        }
        if (badge) {
          masterTl.fromTo(badge, { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: durationIn, ease: "power2.out" }, start + 0.02);
        }
        if (title) {
          masterTl.fromTo(title, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: durationIn, ease: "power2.out" }, start + 0.04);
        }
        if (desc) {
          masterTl.fromTo(desc, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: durationIn, ease: "power2.out" }, start + 0.06);
        }

        // 2. Fase de Salida (Fades & staggered translations towards top)
        if (i < panels.length - 1) {
          // El último panel persiste al final del scroll para transición suave
          masterTl.to(panel, { 
            opacity: 0, 
            duration: durationOut,
            onComplete: () => panel.classList.remove('active'),
            onReverseStart: () => panel.classList.add('active')
          }, peakEnd);

          if (card) {
            masterTl.to(card, { scale: 0.95, duration: durationOut, ease: "power2.in" }, peakEnd);
          }
          if (badge) {
            masterTl.to(badge, { opacity: 0, y: -25, duration: durationOut }, peakEnd);
          }
          if (title) {
            masterTl.to(title, { opacity: 0, y: -30, duration: durationOut }, peakEnd + 0.02);
          }
          if (desc) {
            masterTl.to(desc, { opacity: 0, y: -35, duration: durationOut }, peakEnd + 0.04);
          }
        }
      }
    });
  }
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
function initProductsGrid() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map((p, i) => `
    <article class="product-card reveal reveal-delay-${(i % 3) + 1}">
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
function generateBlueprintSVG(title, subtitle, type) {
  let iconPath = '';
  let specs = [];
  
  if (type === 'dial') {
    iconPath = 'M 270 110 A 30 30 0 1 1 330 110 M 300 80 V 110 M 260 150 H 340';
    specs = ['Panel Analógico Inteligente', 'Regulación de Amperaje Fina', 'Ajuste de Velocidad de Alambre'];
  } else if (type === 'igbt') {
    iconPath = 'M 200 120 C 220 50, 240 190, 260 120 C 280 50, 300 190, 320 120 C 340 50, 360 190, 380 120 C 400 50, 420 190, 440 120';
    specs = ['Onda de Transición IGBT', 'Estabilidad del Arco Eléctrico', 'Frecuencia de Conmutación 20kHz'];
  } else if (type === 'battery') {
    iconPath = 'M 260 105 H 340 V 135 H 260 Z M 340 115 H 345 V 125 H 340 M 280 120 H 290 M 300 120 H 310 M 320 120 H 330';
    specs = ['Celdas de Litio Premium 21V', 'Indicador de Carga LED Integrado', 'Sistema de Protección Térmica'];
  } else if (type === 'motor') {
    iconPath = 'M 300 75 A 35 35 0 1 1 299.9 75 M 275 105 L 325 125 M 325 105 L 275 125 M 300 85 V 145';
    specs = ['Motor Brushless sin Carbones', 'Eficiencia Energética +45%', 'Reducción de Fricción y Calor'];
  } else if (type === 'blade') {
    iconPath = 'M 230 105 H 340 A 18 18 0 0 1 340 141 H 230 Z M 250 123 H 320';
    specs = ['Espada de Acero Laminado', 'Canal de Lubricación Automático', 'Paso de Cadena Optimizado 3/8"'];
  } else if (type === 'gears') {
    iconPath = 'M 300 80 L 330 100 V 130 L 300 150 L 270 130 V 100 Z M 300 80 V 150 M 270 100 L 330 130 M 270 130 L 330 100';
    specs = ['Tratamiento Térmico Cromo Vanadio', 'Estructura de Red Atómica Híbrida', 'Máxima Resistencia a la Torsión'];
  } else if (type === 'cutting') {
    iconPath = 'M 280 110 A 25 25 0 1 1 320 110 A 25 25 0 1 1 280 110';
    specs = ['Cuchillas de Acero de Carbono', 'Corte Rotativo de Alta Velocidad', 'Regulación de Altura Centralizada'];
  } else if (type === 'height') {
    iconPath = 'M 220 130 H 380 M 250 130 V 100 M 290 130 V 90 M 330 130 V 80 M 370 130 V 70';
    specs = ['Posiciones de Corte Regulables', 'Chasis Reforzado Anti-Impacto', 'Manillar Ergonómico Plegable'];
  } else if (type === 'ratchet') {
    iconPath = 'M 250 115 A 15 15 0 1 1 280 115 H 370 M 265 115 L 255 125';
    specs = ['Mecanismo de 72 Dientes', 'Ángulo de Recuperación de 5°', 'Inversión de Giro Quick-Release'];
  } else {
    iconPath = 'M 300 70 A 40 40 0 1 1 299.9 70 M 270 110 H 330';
    specs = ['Esquema Técnico Detallado', 'Componentes Calibrados', 'Certificación de Calidad Oficial'];
  }

  const specText = specs.map((s, idx) => 
    `<text x="300" y="${195 + idx * 22}" fill="%23888888" font-family="sans-serif" font-size="11" font-weight="500" text-anchor="middle">${s}</text>`
  ).join('');

  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="600" height="300">
    <rect width="100%" height="100%" fill="%230F0F0F"/>
    
    <!-- Technical Grid -->
    <path d="M 0 30 L 600 30 M 0 60 L 600 60 M 0 90 L 600 90 M 0 120 L 600 120 M 0 150 L 600 150 M 0 180 L 600 180 M 0 210 L 600 210 M 0 240 L 600 240 M 0 270 L 600 270" stroke="%23181818" stroke-width="1"/>
    <path d="M 60 0 L 60 300 M 120 0 L 120 300 M 180 0 L 180 300 M 240 0 L 240 300 M 300 0 L 300 300 M 360 0 L 360 300 M 420 0 L 420 300 M 480 0 L 480 300 M 540 0 L 540 300" stroke="%23181818" stroke-width="1"/>
    
    <!-- Outer Border -->
    <rect x="15" y="15" width="570" height="270" rx="6" fill="none" stroke="%23262626" stroke-width="1.5"/>
    
    <!-- Blueprint circles -->
    <circle cx="300" cy="110" r="50" stroke="%23f59e0b" stroke-dasharray="6,4" stroke-width="1" stroke-opacity="0.3" fill="none"/>
    <circle cx="300" cy="110" r="60" stroke="%23f59e0b" stroke-width="0.5" stroke-opacity="0.15" fill="none"/>
    
    <!-- Icon path -->
    <path d="${iconPath}" stroke="%23f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    
    <!-- Title and Subtitle -->
    <text x="300" y="225" fill="%23ffffff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" letter-spacing="3">${title.toUpperCase()}</text>
    <text x="300" y="248" fill="%23f59e0b" font-family="monospace" font-size="10" text-anchor="middle" letter-spacing="1.5">${subtitle.toUpperCase()}</text>
    
    <!-- Specifications text -->
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

