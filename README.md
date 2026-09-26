# Sistema de Pasajeros - Hotel Duerme Bien

El Hotel Duerme Bien busca reemplazar sus planillas Excel por un sistema para gestionar habitaciones y pasajeros.

## Objetivo

Administrar huéspedes, habitaciones, reservas, ocupación, disponibilidad y costos.

# Prototipo funcional

El material de clases indica que un prototipo debe ser navegable y permitir probar interacción, botones, formularios y validaciones. Por eso se creó una versión funcional con varias páginas HTML, CSS y JavaScript.

## Páginas realizadas

| Página | Qué se puede probar | Ver archivo en GitHub | Enlace web preparado |
| --- | --- | --- | --- |
| Acceso | Login simulado y perfiles | [login.html](prototipo-web/login.html) | [Abrir acceso](https://yutre3.github.io/diego/prototipo-web/login.html) |
| Inicio | Resumen de ocupación, huéspedes y reservas | [index.html](prototipo-web/index.html) | [Abrir inicio](https://yutre3.github.io/diego/prototipo-web/index.html) |
| Habitaciones | Registrar habitación, capacidad, orientación y estado | [habitaciones.html](prototipo-web/habitaciones.html) | [Abrir habitaciones](https://yutre3.github.io/diego/prototipo-web/habitaciones.html) |
| Huéspedes | Registrar pasajeros y validar documento duplicado | [huespedes.html](prototipo-web/huespedes.html) | [Abrir huéspedes](https://yutre3.github.io/diego/prototipo-web/huespedes.html) |
| Reservas | Registrar reserva, validar fechas y capacidad | [reservas.html](prototipo-web/reservas.html) | [Abrir reservas](https://yutre3.github.io/diego/prototipo-web/reservas.html) |
| Check-in | Crear estadía y ocupar habitación | [checkin.html](prototipo-web/checkin.html) | [Abrir check-in](https://yutre3.github.io/diego/prototipo-web/checkin.html) |
| Check-out | Finalizar estadía, calcular y liberar habitación | [checkout.html](prototipo-web/checkout.html) | [Abrir check-out](https://yutre3.github.io/diego/prototipo-web/checkout.html) |
| Informes | Revisar ocupación, reservas y estadías | [informes.html](prototipo-web/informes.html) | [Abrir informes](https://yutre3.github.io/diego/prototipo-web/informes.html) |
| Ayuda / Demo | Recorrido y preguntas para explicar el proyecto | [ayuda.html](prototipo-web/ayuda.html) | [Abrir ayuda](https://yutre3.github.io/diego/prototipo-web/ayuda.html) |

### Código principal

- [styles.css](prototipo-web/styles.css): diseño responsive, formularios, tarjetas, menú y estados.
- [app.js](prototipo-web/app.js): navegación, validaciones, reservas, check-in, check-out, informes y localStorage.
- [README del prototipo](prototipo-web/README.md): explicación de todas las funciones.
- [Guía para presentar el prototipo](docs/17_prototipo_funcional.md): recorrido y posibles preguntas.

### Credenciales de demostración

Administrador: `admin / admin123`

Encargado: `encargado / hotel123`

Estas credenciales solo existen dentro del prototipo.

### Publicación

La rama `gh-pages` ya está creada y contiene el prototipo. Si los enlaces web todavía no abren, en GitHub hay que activar una sola vez:

`Settings → Pages → Deploy from a branch → gh-pages → /(root) → Save`

Después la dirección principal será:

https://yutre3.github.io/diego/

---

# Entrega final

A continuación se muestra uno de cada elemento principal.

## 1. Diagrama de casos de uso

![Diagrama de casos de uso](entrega-final/02-casos-de-uso.svg)

## 2. Diagrama de flujo

![Diagrama de flujo](entrega-final/03-diagrama-flujo.svg)

## 3. Modelo de base de datos

![Modelo de base de datos](entrega-final/04-modelo-base-datos.svg)

## 4. Normalización

![Normalización](entrega-final/05-normalizacion.svg)

## 5. Diagrama de clases

![Diagrama de clases](entrega-final/06-diagrama-clases.svg)

## 6. Sketch

![Sketch](entrega-final/07-sketch.svg)

## 7. Wireframe

![Wireframe](entrega-final/08-wireframe.svg)

## 8. Mockup

![Mockup](entrega-final/09-mockup.svg)

## 9. Requerimientos

[Ver requerimientos completos](entrega-final/01-requerimientos.md)

## 10. Kanban

[Ver Kanban](entrega-final/11-kanban.md)

## 11. Git + GitHub + VS Code

[Ver guía](entrega-final/12-git-github-vscode.md)

## Nota

La interfaz funcional está en `prototipo-web/`. La carpeta `entrega-final/` mantiene los documentos y diagramas principales de la evaluación.
