# Sistema de Pasajeros - Hotel Duerme Bien

Este repositorio está organizado a partir de los archivos entregados para el **Caso 6: Sistema de Pasajeros de Hotel**.

## Base del Caso 6

El material define como funciones principales:

- registro de habitaciones y sus características: capacidad y orientación;
- registro de huéspedes con asignación a habitaciones;
- control de ocupación y disponibilidad;
- cálculo automático de costos por pasajero;
- gestión de usuarios: administrador y encargados de hotel;
- informes de ocupación y reservas.

También propone como procesos de negocio:

- check-in y asignación de habitaciones;
- check-out y liberación de habitaciones;
- registro y gestión de reservas.

[Ver trazabilidad completa con los archivos del profesor](docs/18_trazabilidad_fuentes_profesor.md)

# Prototipo funcional basado en el material

El material de Sketch, Wireframe, Mockup y Prototipo indica que el prototipo debe permitir probar navegación, interacción, botones y validaciones. La interfaz funcional del repositorio aplica ese criterio sin presentar como oficiales datos que el Caso 6 no define.

## Páginas realizadas

| Página | Qué corresponde al material | Código | Página web preparada |
| --- | --- | --- | --- |
| Acceso | Perfiles administrador / encargado. El login es solo mecanismo técnico del prototipo. | [login.html](prototipo-web/login.html) | [Abrir](https://yutre3.github.io/diego/prototipo-web/login.html) |
| Inicio | Ocupación, disponibilidad, reservas y huéspedes. | [index.html](prototipo-web/index.html) | [Abrir](https://yutre3.github.io/diego/prototipo-web/index.html) |
| Habitaciones | Registro, capacidad, orientación y disponibilidad. | [habitaciones.html](prototipo-web/habitaciones.html) | [Abrir](https://yutre3.github.io/diego/prototipo-web/habitaciones.html) |
| Huéspedes | Registro de huéspedes. | [huespedes.html](prototipo-web/huespedes.html) | [Abrir](https://yutre3.github.io/diego/prototipo-web/huespedes.html) |
| Reservas | Registro y gestión básica de reservas. | [reservas.html](prototipo-web/reservas.html) | [Abrir](https://yutre3.github.io/diego/prototipo-web/reservas.html) |
| Check-in | Asignación de habitación y ocupación. | [checkin.html](prototipo-web/checkin.html) | [Abrir](https://yutre3.github.io/diego/prototipo-web/checkin.html) |
| Check-out | Liberación de habitación y demostración de costo por pasajero. | [checkout.html](prototipo-web/checkout.html) | [Abrir](https://yutre3.github.io/diego/prototipo-web/checkout.html) |
| Usuarios | Administrador y encargados de hotel. | [usuarios.html](prototipo-web/usuarios.html) | [Abrir](https://yutre3.github.io/diego/prototipo-web/usuarios.html) |
| Informes | Informes de ocupación y reservas. | [informes.html](prototipo-web/informes.html) | [Abrir](https://yutre3.github.io/diego/prototipo-web/informes.html) |
| Material del profesor | Explica de qué archivo sale cada parte. | [ayuda.html](prototipo-web/ayuda.html) | [Abrir](https://yutre3.github.io/diego/prototipo-web/ayuda.html) |

## Qué NO se inventó como requisito oficial

Los archivos disponibles no definen:

- campos personales obligatorios del huésped;
- fórmula ni tarifa exacta de costos;
- campos exactos de una reserva;
- estados exactos de reserva;
- permisos detallados por rol;
- tecnología obligatoria;
- mecanismo exacto de autenticación.

Cuando el prototipo necesita alguno de esos elementos para funcionar, se identifica visualmente como **dato de demostración** o **decisión técnica**.

## Credenciales de demostración

Administrador: `admin / admin123`

Encargado: `encargado / hotel123`

## Publicación del prototipo

La rama `gh-pages` está preparada. Si GitHub Pages aún no está activado, debe seleccionarse una vez:

`Settings → Pages → Deploy from a branch → gh-pages → /(root) → Save`

Dirección prevista:

https://yutre3.github.io/diego/

---

# Entrega final

## 1. Requerimientos

[Ver requerimientos](entrega-final/01-requerimientos.md)

## 2. Diagrama de casos de uso

![Diagrama de casos de uso](entrega-final/02-casos-de-uso.svg)

## 3. Diagrama de flujo

![Diagrama de flujo](entrega-final/03-diagrama-flujo.svg)

## 4. Modelo de base de datos

![Modelo de base de datos](entrega-final/04-modelo-base-datos.svg)

## 5. Normalización

![Normalización](entrega-final/05-normalizacion.svg)

## 6. Diagrama de clases complementario

![Diagrama de clases](entrega-final/06-diagrama-clases.svg)

## 7. Sketch

![Sketch](entrega-final/07-sketch.svg)

## 8. Wireframe

![Wireframe](entrega-final/08-wireframe.svg)

## 9. Mockup

![Mockup](entrega-final/09-mockup.svg)

## 10. Kanban

[Ver Kanban](entrega-final/11-kanban.md)

## 11. Git + GitHub + VS Code

[Ver guía](entrega-final/12-git-github-vscode.md)

## 12. Trazabilidad con todos los archivos entregados

[Ver trazabilidad de fuentes](docs/18_trazabilidad_fuentes_profesor.md)
