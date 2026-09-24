# Sistema de Pasajeros - Hotel Duerme Bien

El hotel Duerme Bien actualmente utiliza planillas Excel para llevar el registro de pasajeros y habitaciones. En este repositorio se organiza el análisis y modelado del sistema utilizando los contenidos y ejemplos entregados en clases.

## Objetivo

Administrar el registro de huéspedes y la asignación de habitaciones, manteniendo control sobre ocupación, disponibilidad, reservas y costos por pasajero.

## Funciones consideradas

- Registrar habitaciones y sus características.
- Registrar huéspedes y asignarlos a habitaciones.
- Controlar ocupación y disponibilidad.
- Registrar y gestionar reservas.
- Realizar check-in.
- Realizar check-out y liberar habitaciones.
- Calcular costos por pasajero.
- Gestionar usuarios.
- Generar información de ocupación y reservas.

## Material del profesor aplicado

[Ver mapa completo de materiales](docs/00_mapa_materiales.md)

Se adaptaron al tema del hotel:

- estructura IEEE 830 para la toma de requerimientos;
- casos de uso y relaciones include/extend;
- ejemplos visuales de casos de uso;
- ejemplo de diagrama de procesos;
- diagramas de clase y guía paso a paso;
- normalización 1NF, 2NF y 3NF;
- proceso Sketch → Wireframe → Mockup → Prototipo;
- procedimiento Git + GitHub + VS Code.

## Evaluación 1

[Ver toma de requerimientos](docs/01_requerimientos.md)

Incluye propósito, alcance, público objetivo, definiciones, descripción general, requisitos funcionales y no funcionales, reglas de negocio, entrevista simulada, factibilidad y trazabilidad inicial.

## Evaluación 2

[Ver documento de modelado](docs/evaluacion-2-modelado.md)

Incluye:

- [Casos de uso](docs/03_casos_de_uso.md)
- [Diagrama de flujo](docs/04_diagrama_flujo.md)
- [Modelo de datos](docs/05_modelo_datos.md)
- [Diseño de interfaz](docs/06_mockups.md)
- [Trazabilidad](docs/07_trazabilidad.md)
- [Kanban](kanban/tablero.md)

## Ejemplos de clases adaptados

- [Caso de uso simple Check-in / Check-out](diagramas/casos-de-uso-checkin-checkout.svg)
- [Estructura tipo ATM adaptada](diagramas/casos-de-uso-estructura-atm-adaptada.svg)
- [Flujo de validación basado en el ejemplo](diagramas/flujo-validacion-ejemplo.svg)
- [Flujo completo de check-in](diagramas/flujo-checkin.svg)
- [Diagrama de clases simplificado](diagramas/diagrama-clases.svg)
- [Diagrama de clases completo](diagramas/diagrama-clases-completo.svg)
- [Normalización aplicada](docs/09_normalizacion.md)

## Diseño de interfaz

- [Sketch](sketch/sketch-hotel.svg)
- [Wireframe](wireframes/wireframe-hotel.svg)
- [Mockup](mockups/mockup-hotel.svg)
- [Conjunto de pantallas](mockups/pantallas-principales.svg)
- [Prototipo navegable](prototipo/README.md)

## Git y GitHub

[Ver procedimiento Git + GitHub + VS Code](docs/12_git_github_vscode.md)

El repositorio cuenta con:

- rama principal: `main`;
- rama de desarrollo: `dev`.

## Estructura

~~~text
docs/
diagramas/
database/
sketch/
wireframes/
mockups/
prototipo/
kanban/
README.md
~~~

## Pendientes de validar

El caso no especifica la fórmula exacta de costos, los datos obligatorios del huésped, todos los estados de reserva ni los permisos detallados de cada perfil. Esos puntos se mantienen marcados como pendientes y no se presentan como requisitos oficiales.

También queda pendiente incorporar la retroalimentación real de la Evaluación 1 cuando el docente la entregue.
