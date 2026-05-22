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
  },
  {
    name: 'Kit Inalámbrico 21v',
    brand: 'KTO',
    desc: 'Kit de poda completo: motosierra + extensores + sopladora brushless. Batería de litio 21v incluida.',
    image: '/images/kit-inalambrico.png',
  },
  {
    name: 'Cortadora de Pasto 220v',
    brand: 'KTO',
    desc: 'Kit de jardín: cortadora de pasto + bordeadora + sopladora 21v. Todo lo que necesitás para tu jardín.',
    image: '/images/cortadora-pasto.png',
  },
  {
    name: 'Motosierra Eléctrica 2000w',
    brand: 'Gladiator PRO',
    desc: 'Motosierra eléctrica de 2000w con espada de 16 pulgadas. Potencia profesional con cable.',
    image: '/images/motosierra-electrica.png',
  },
  {
    name: 'Mini Motosierra 21v',
    brand: 'KTO',
    desc: 'Mini motosierra inalámbrica 21v con maletín y extensores. Compacta, liviana y potente.',
    image: '/images/mini-motosierra.png',
  },
  {
    name: 'Set de Herramientas Profesional',
    brand: 'KTO',
    desc: 'Maletín profesional con llaves, tubos, destornilladores y más. Acero cromo vanadio de alta resistencia.',
    image: '/images/set-herramientas.png',
  },
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
        <button class="product-cta" data-product="${p.name}">
          ${WA_ICON}
          Consultar por WhatsApp
        </button>
      </div>
    </article>
  `).join('');

  // Product CTA clicks
  grid.querySelectorAll('.product-cta').forEach((btn) => {
    btn.addEventListener('click', () => {
      const product = btn.dataset.product;
      const msg = encodeURIComponent(`Hola! Me interesa el producto: ${product}. ¿Podrían darme más información?`);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
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
