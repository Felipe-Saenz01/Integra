# 📖 Documentación Integra

Este repositorio contiene la documentación y guías explicativas del software financiero **Integra**, construidas con [Astro Starlight](https://starlight.astro.build/).

El sitio está desplegado en **GitHub Pages** y ofrece información organizada en secciones con guías, imágenes y videos de apoyo.

---

## 🚀 Requisitos previos

Asegúrate de tener instalado en tu máquina:

- [Node.js](https://nodejs.org/) versión 18 o superior
- [npm](https://www.npmjs.com/)

---

## 📥 Descarga e instalación

Clona el repositorio:

```bash
git clone git@github.com:Felipe-Saenz01/Documentacion_Integra.git
cd Documentacion_Integra
```

Instala las dependencias:

```bash
npm install
```

---

## 🖥️ Levantar el proyecto en local

Ejecuta el entorno de desarrollo:

```bash
npm run dev
```

Esto abrirá el sitio en `http://localhost:4321`.

---

## 📂 Estructura del proyecto

La estructura básica es la siguiente:

```
Documentacion_Integra/
├── public/                     # Archivos estáticos (favicon, logos, etc.)
├── src/
│   ├── content/docs/           # Contenido del aplicativo
│   │   ├── documentacion/      # Cerpeta para la documentación
│   │   │   ├── seccion1/
│   │   │   │   ├── introduccion.md
│   │   │   │   ├── contenido.md
│   │   │   │   ...
│   │   │   ├── seccion2/
│   │   │   │   ├── introduccion.md
│   │   │   │   ├── contenido.md
│   │   │   │   ...
│   │   ├── Guias/              # Carpeta para las guias del aplicativo
│   │   │   ├── seccion1/
│   │   │   │   ├── introduccion.md
│   │   │   │   ├── contenido.md
│   │   │   │   ...
│   │   │   ├── seccion2/
│   │   │   │   ├── introduccion.md
│   │   │   │   ├── contenido.md
│   │   │   │   ...
│   ├── assets/          # Imágenes, videos u otros recursos
│   │   ├── seccion1/
│   │   ├── seccion2/
│   │   └── ...
│   └── config.ts        # Configuración de Astro Starlight
└── astro.config.mjs     # Configuración del proyecto Astro
```

---

## 📝 Crear una nueva vista o sección

1. Dirígete a la carpeta `src/content/docs/documentacion`.
2. Crea un archivo nuevo en formato Markdown (`.md` o `.mdx`):

   ```bash
   src/content/docs/documentacion/seccion/nueva-seccion.md
   src/content/docs/guias/seccion/nueva-seccion.md
   ```

3. Añade el frontmatter (encabezado de metadatos) al inicio del archivo:

   ```markdown
   ---
   title: "Nueva Sección"
   description: "Descripción breve de la sección"
   ---

   ## Bienvenido a la nueva sección 🚀

   Aquí puedes escribir contenido en **Markdown**.
   ```

4. Si necesitas imágenes para esta sección, guárdalas en `src/assets/nueva-seccion/` y referencia así:

   ```markdown
   ![Texto alternativo](@assets/nueva-seccion/imagen.png)
   ```

5. Para videos de YouTube, usa el siguiente iframe:

    ```mdx
    import { ShowcaseYouTube } from 'starlight-showcases'

    <ShowcaseYouTube 
    entries={[
        {
        href: 'link_del_video',
        title: 'Titulo del video',
        },
    ]}
    />
    ```

El framework con el que se desarrolló el aplicativo cuenta con varios componentes y configuraciones , por lo tanto, puedes revisar la [documentación oficial de Astro Starlight](https://starlight.astro.build/) para más detalles.

---

## 🌐 Despliegue en GitHub Pages

Este proyecto está configurado para desplegar en GitHub Pages. Este cuenta con un scriopt de despliegue automático en la carpeta `.github\workflows\deploy.yml`.
El sitio se encuentra en:

👉 [https://felipe-saenz01.github.io/Documentacion_Integra](https://felipe-saenz01.github.io/Documentacion_Integra)

Todos los cambios que se hagan en la rama `main` se desplegarán automáticamente.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas.  
Para sugerencias o reportar errores, abre un [Issue](../../issues).

