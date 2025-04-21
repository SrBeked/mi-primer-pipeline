# Mi Primer Pipeline

Este proyecto demuestra cómo crear una aplicación web simple con integración continua (CI) usando GitHub Actions.

## Estructura

- `index.html`: Página principal.
- `css/style.css`: Estilos.
- `js/script.js`: Lógica JS.
- `tests/`: Pruebas automatizadas con Jest.
- `.github/workflows/ci.yml`: Configuración del pipeline CI.
- `package.json`: Configuración del proyecto.

## Scripts disponibles

- `npm test`: Ejecuta pruebas.
- `npm run coverage`: Muestra cobertura de código.
- `npm run deploy`: Despliega el sitio en GitHub Pages.

## Despliegue

Este sitio se despliega automáticamente usando GitHub Pages con `gh-pages`.
