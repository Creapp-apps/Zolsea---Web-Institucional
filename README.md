# 🌊 Zolsea — Web Institucional Interactiva & Showcase de Marca

<div align="center">

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Supabase](https://img.shields.io/badge/Supabase-Backend_%26_Leads-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://zolsea.com.ar)

**Sitio web corporativo e interactivo para ZolSea: animación de producto guiada por scroll de 60 FPS, diseño visual moderno, panel de administración interno y despliegue multi-dominio.**

[Sitio en Producción: zolsea.com.ar](https://zolsea.com.ar) • [Reportar un Issue](https://github.com/Creapp-apps/Zolsea---Web-Institucional/issues)

</div>

---

## 🌟 Visión del Proyecto

**Zolsea Web Institucional** es una experiencia digital interactiva diseñada para presentar la propuesta de valor y catálogo de ZolSea con un impacto visual cinematográfico. 

Utiliza técnicas avanzadas de animación de fotogramas secuenciales en Canvas (tipo Apple Product Pages), logrando que los productos roten e interactúen de forma fluida a medida que el usuario hace scroll, sin penalizar la velocidad de carga ni el consumo de memoria.

---

## 🚀 Capacidades Destacadas

### 🎞️ 1. Animación de Producto Guiada por Scroll (Canvas Sequence)
* Renderizado interactivo fotograma a fotograma procesado mediante `extract_frames.py` para una transición de 360° perfecta.
* Precarga optimizada de imágenes en búfer para garantizar 60 FPS estables tanto en dispositivos móviles como en pantallas de escritorio 4K.

### 💼 2. Panel de Administración Integrado (`admin.html`)
* Backoffice ligero para gestión de consultas de contacto, clientes y solicitudes institucionales conectadas a Supabase.

### 🌐 3. Infraestructura Multi-Dominio en Producción
* Arquitectura en Vercel con soporte y ruteo centralizado para tres dominios corporativos:
  * `zolsea.com.ar` (Dominio Principal)
  * `zolsea.online` (Redirección global)
  * `zolsea.store` (Punto de acceso comercial)

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías | Propósito |
| :--- | :--- | :--- |
| **Bundler & Build** | `Vite` | Compilación ultra-rápida y distribución minificada (`dist`). |
| **Frontend** | `HTML5 Semántico` + `CSS3 Moderno` + `JavaScript Moderno` | Cero dependencias pesadas, carga inmediata y máxima fluidez. |
| **Backend & Base de Datos** | `Supabase` (PostgreSQL) | Captación de prospectos y base de datos de administración. |
| **Pipeline de Assets** | `Python` (`extract_frames.py`) | Automatización de extracción y optimización de fotogramas de video. |
| **Hosting & CDN** | `Vercel Edge Network` | Despliegue continuo y SSL automatizado multi-dominio. |

---

## 💻 Desarrollo Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/Creapp-apps/Zolsea---Web-Institucional.git
cd Zolsea---Web-Institucional
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env`:
```env
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

### 4. Iniciar servidor local
```bash
npm run dev
```

---

<div align="center">
<sub>Diseñado y desplegado con precisión por <b>CreAPP Software Lab</b> © 2026</sub>
</div>
