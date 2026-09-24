# Sistema de Pasajeros - Hotel Duerme Bien

El hotel Duerme Bien actualmente utiliza planillas Excel para llevar el registro de pasajeros y habitaciones. En este trabajo se organiza una propuesta de sistema que permita controlar esa información de forma más ordenada y apoyar los procesos principales del hotel.

## Objetivo

Administrar el registro de huéspedes y la asignación de habitaciones, manteniendo control sobre la ocupación, la disponibilidad, las reservas y los costos por pasajero.

## Funciones consideradas

- Registrar habitaciones y sus características, como capacidad y orientación.
- Registrar huéspedes y asignarlos a una habitación.
- Consultar habitaciones disponibles y ocupadas.
- Registrar y gestionar reservas.
- Realizar check-in y asignar habitación.
- Realizar check-out y liberar habitación.
- Calcular automáticamente el costo por pasajero.
- Gestionar usuarios con perfil de administrador o encargado del hotel.
- Consultar informes de ocupación y reservas.

## Trabajo realizado

El repositorio está organizado según lo solicitado para las evaluaciones:

### Evaluación 1 - Toma de requerimientos
En [docs/01_requerimientos.md](docs/01_requerimientos.md) se encuentra la especificación siguiendo la estructura IEEE 830 adaptada: propósito, alcance, usuarios, descripción general, requerimientos funcionales y no funcionales, reglas de negocio, entrevista simulada, factibilidad y puntos pendientes de validar.

### Evaluación 2 - Modelado
Se incluyen:

- [Casos de uso](docs/03_casos_de_uso.md)
- [Diagrama de flujo](docs/04_diagrama_flujo.md)
- [Modelo de datos](docs/05_modelo_datos.md)
- [Mockups](docs/06_mockups.md)
- [Matriz de trazabilidad](docs/07_trazabilidad.md)
- [Planificación Kanban](kanban/tablero.md)

## Ejemplos de clases adaptados al Hotel Duerme Bien

También se tomaron los formatos de ejemplo entregados en clases y se adaptaron al tema del proyecto:

- [Caso de uso simple: Check-in / Check-out](diagramas/casos-de-uso-checkin-checkout.svg)
- [Diagrama de flujo con decisiones y retorno](diagramas/flujo-checkin.svg)
- [Diagrama de clases con atributos y operaciones](diagramas/diagrama-clases.svg)
- [Normalización aplicada al hotel](docs/09_normalizacion.md)
- [Wireframe en escala de grises](wireframes/wireframe-hotel.svg)
- [Mockup visual de reservas](mockups/mockup-hotel.svg)

## Estructura

```text
docs/
  01_requerimientos.md
  02_reglas_negocio.md
  03_casos_de_uso.md
  04_diagrama_flujo.md
  05_modelo_datos.md
  06_mockups.md
  07_trazabilidad.md
  08_fuentes_y_alcance.md
  evaluacion-2-modelado.md

diagramas/
  casos-de-uso.svg
  flujo-checkin.svg
  modelo-datos.svg

mockups/
  pantallas-principales.svg

database/
  schema.sql

kanban/
  tablero.md
```

## Pendientes de validar

El caso no define algunos detalles, por lo que no se presentan como requisitos oficiales. Antes de una implementación habría que confirmar, entre otros puntos, la fórmula exacta para calcular los costos, los datos obligatorios del huésped y las reglas específicas para cancelar o modificar reservas.

También queda pendiente incorporar la retroalimentación real de la Evaluación 1 cuando sea entregada por el docente.
