# Evaluación 2 - Requerimientos y modelado

Esta parte reúne los elementos de modelado solicitados para continuar el trabajo realizado en la toma de requerimientos.

## 1. Revisión de requerimientos

Los requerimientos se mantienen organizados con identificadores RF y RNF en [01_requerimientos.md](01_requerimientos.md).

No se ha incorporado una supuesta retroalimentación del docente porque todavía no se cuenta con observaciones concretas. Cuando exista, los cambios deben registrarse en los requerimientos y en la matriz de trazabilidad.

## 2. Casos de uso

Se identificaron dos actores principales:

- Administrador.
- Encargado de hotel.

Los casos de uso se concentran en habitaciones, usuarios, huéspedes, disponibilidad, reservas, check-in, check-out, costos e informes.

- [Detalle de casos de uso](03_casos_de_uso.md)
- [Diagrama de casos de uso](../diagramas/casos-de-uso.svg)

## 3. Diagrama de flujo

Se modeló el proceso de check-in y asignación de habitación, porque corresponde a uno de los procesos de negocio indicados para el caso.

- [Descripción del flujo](04_diagrama_flujo.md)
- [Diagrama de flujo](../diagramas/flujo-checkin.svg)

## 4. Diagrama de base de datos

El modelo separa Usuario, Habitacion, Huesped, Reserva y Estadia. Las relaciones de varios huéspedes con una reserva o una estadía se resuelven con tablas intermedias.

- [Descripción del modelo](05_modelo_datos.md)
- [Diagrama de datos](../diagramas/modelo-datos.svg)
- [SQL de referencia](../database/schema.sql)

## 5. Mockups

Los mockups muestran una propuesta para las pantallas de inicio de sesión, panel principal, reservas, check-in y check-out.

- [Descripción](06_mockups.md)
- [Pantallas principales](../mockups/pantallas-principales.svg)

## 6. Planificación Kanban

La planificación mantiene visibles las tareas ya realizadas y los puntos que todavía dependen de validación o retroalimentación.

- [Tablero Kanban](../kanban/tablero.md)

## 7. Trazabilidad

Se relacionaron los requisitos con los casos de uso, datos y pantallas para facilitar futuras modificaciones.

- [Matriz de trazabilidad](07_trazabilidad.md)

## 8. Material complementario basado en los ejemplos de clases

Además de los entregables principales se agregó un [diagrama de clases](../diagramas/diagrama-clases.svg) para aplicar el formato visto en los ejemplos de UML: nombre, atributos, operaciones y relaciones. Se mantiene como material complementario y no como requisito obligatorio de la Evaluación 2.

También se documentó la [normalización aplicada al hotel](09_normalizacion.md) con un ejemplo de separación de datos hasta 3NF.

## 9. Puntos que siguen pendientes

- fórmula exacta de costos por pasajero;
- datos obligatorios del huésped;
- permisos detallados de cada perfil;
- estados y reglas definitivas de las reservas;
- retroalimentación real de la Evaluación 1.
