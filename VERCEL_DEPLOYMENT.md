# Guía de Configuración y Despliegue en Vercel para ZolSea

Esta guía detalla los pasos necesarios para desplegar la web institucional de **ZolSea** utilizando **Vercel** y asociar los tres dominios adquiridos en **DonWeb**:
* `zolsea.com.ar` (Dominio Principal sugerido)
* `zolsea.online` (Dominio de redirección)
* `zolsea.store` (Dominio de redirección)

---

## Paso 1: Configurar el Proyecto en Vercel

1. Ingresa a tu panel de [Vercel](https://vercel.com) e inicia sesión.
2. Haz clic en **"Add New..."** y luego en **"Project"**.
3. Importa el repositorio de GitHub: `Creapp-apps/Zolsea---Web-Institucional`.
4. En la configuración del proyecto:
   * **Framework Preset**: Selecciona **Vite** (detectado automáticamente).
   * **Root Directory**: `.` (raíz del proyecto).
   * **Build and Output Settings**: 
     * Build Command: `npm run build`
     * Output Directory: `dist`
5. **Variables de Entorno (Environment Variables)**:
   Agrega las variables de entorno de Supabase definidas en `.env.example`:
   * `VITE_SUPABASE_URL` = `https://rvoqvxmcakdeifnronhz.supabase.co`
   * `VITE_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2b3F2eG1jYWtkZWlmbnJvbmh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2ODgwNjQsImV4cCI6MjA5NjI2NDA2NH0.3kzjBRACScYqFKWG68QWtkAin6B37M0cSbzOs9boz3I`
6. Haz clic en **"Deploy"**.

---

## Paso 2: Agregar los Dominios Personalizados en Vercel

Una vez que el proyecto se despliegue con éxito, agrega los dominios personalizados:

1. Ve a **Settings > Domains** en el panel de tu proyecto en Vercel.
2. Agrega el dominio principal:
   * Escribe `zolsea.com.ar` y haz clic en **Add**.
   * Selecciona la opción recomendada: **"Redirect www.zolsea.com.ar to zolsea.com.ar"** (o viceversa, según prefieras). Esto agregará tanto el dominio raíz como el subdominio `www`.
3. Agrega los dominios adicionales (`zolsea.online` y `zolsea.store`):
   * Escribe `zolsea.online` y haz clic en **Add**.
   * En la configuración del dominio en Vercel, selecciona que **redirija a `zolsea.com.ar`** (Redirect to: `zolsea.com.ar`). Esto asegura que todo el tráfico se centralice en tu dominio principal para mejorar el SEO y mantener consistencia de marca.
   * Repite el mismo proceso para `zolsea.store` (Redirect to: `zolsea.com.ar`).

---

## Paso 3: Configurar los DNS en DonWeb

Para que los dominios apunten a Vercel, debes ingresar a la zona DNS de cada uno de tus dominios en DonWeb.

### 📋 Tabla de Registros DNS a Configurar
Para **cada uno** de los tres dominios (`zolsea.com.ar`, `zolsea.online`, y `zolsea.store`), debes ir a **Gestionar > Zona DNS** (o Servidores de Nombres/DNS) en DonWeb y configurar los siguientes dos registros:

| Tipo | Nombre (Host) | Valor (Destino) | TTL | Propósito |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` (o en blanco) | `76.76.21.21` | Predeterminado (ej. 3600) | Apuntar el dominio raíz a Vercel |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Predeterminado (ej. 3600) | Apuntar el subdominio `www` a Vercel |

> ⚠️ **IMPORTANTE**: Si en DonWeb ya existen registros de tipo `A` que apunten a otra dirección IP (por ejemplo, a un hosting temporal de DonWeb) para el host `@` o registros `CNAME` para `www`, debes **editarlos** con los valores de arriba o **eliminarlos** antes de agregar los nuevos para evitar conflictos de resolución DNS.

---

## Paso 4: Verificación y Certificado SSL

* **Propagación**: Los cambios de DNS en DonWeb pueden tardar desde unos minutos hasta un par de horas en propagarse completamente.
* **SSL Automático**: Una vez propagados, Vercel detectará la configuración correcta y generará de forma automática y gratuita los certificados SSL (HTTPS/Let's Encrypt) para todos tus dominios y subdominios.
* Verás un check verde en el apartado **Settings > Domains** de Vercel cuando la configuración sea exitosa.
