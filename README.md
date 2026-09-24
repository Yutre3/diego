# Sistema de Pasajeros - Hotel Duerme Bien

El hotel Duerme Bien actualmente utiliza planillas Excel para llevar el registro de pasajeros y habitaciones. En este repositorio se organiza el análisis y modelado del sistema utilizando los contenidos y ejemplos entregados en clases.

## Objetivo

Administrar el registro de huéspedes y la asignación de habitaciones, manteniendo control sobre ocupación, disponibilidad, reservas y costos por pasajero.

## Referencia base

- [Caso 6 y entregables indicados por el profesor](docs/00_caso_6_y_entregables.md)
- [Mapa completo de los materiales aplicados](docs/00_mapa_materiales.md)

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

## Material de casos de uso aplicado

- [Construcción de casos de uso paso a paso](docs/13_casos_uso_material_aplicado.md)
- [Caso de uso simple Check-in / Check-out](diagramas/casos-de-uso-checkin-checkout.svg)
- [Estructura tipo ATM adaptada](diagramas/casos-de-uso-estructura-atm-adaptada.svg)

## Diagramas de procesos

- [Flujo de validación basado en el ejemplo](diagramas/flujo-validacion-ejemplo.svg)
- [Flujo completo de check-in](diagramas/flujo-checkin.svg)

## Base de datos y normalización

- [Modelo de datos](docs/05_modelo_datos.md)
- [Normalización 1NF, 2NF y 3NF](docs/09_normalizacion.md)
- [Diagrama de normalización](diagramas/normalizacion-hotel.svg)
- [Diagrama de base de datos](diagramas/modelo-datos.svg)
- [Script SQL](database/schema.sql)

## Diagramas de clase

- [Construcción paso a paso](docs/10_diagrama_clases.md)
- [Relaciones UML del material](docs/15_relaciones_diagrama_clases.md)
- [Diagrama simplificado](diagramas/diagrama-clases.svg)
- [Diagrama completo](diagramas/diagrama-clases-completo.svg)

El diagrama de clases queda como material complementario porque no aparece enumerado como entrega obligatoria de la Evaluación 2.

## Sketch, wireframe, mockup y prototipo

- [Explicación de las cuatro etapas](docs/06_mockups.md)
- [Sketch](sketch/sketch-hotel.svg)
- [Wireframe](wireframes/wireframe-hotel.svg)
- [Wireframe con retícula](wireframes/wireframe-grid-12.svg)
- [Mockup escritorio](mockups/mockup-hotel.svg)
- [Mockup móvil](mockups/mockup-hotel-mobile.svg)
- [Conjunto de pantallas](mockups/pantallas-principales.svg)
- [Guía de estilo visual](mockups/guia-estilo.svg)
- [Guía UX, usabilidad y accesibilidad](docs/14_guia_estilo_ux.md)
- [Herramientas mencionadas en el material](docs/16_herramientas_interfaz.md)
- [Prototipo navegable](prototipo/README.md)

## Git + GitHub + VS Code

[Ver procedimiento aplicado](docs/12_git_github_vscode.md)

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
