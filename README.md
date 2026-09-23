# Sistema de Pasajeros de Hotel - Duerme Bien

Proyecto de modelado y documentación UML basado en el **Caso 6: Sistema de Pasajeros de Hotel** entregado por INACAP.

## Contexto

El hotel Duerme Bien busca reemplazar sus planillas Excel por un sistema para gestionar habitaciones y el registro de pasajeros. El sistema considera huéspedes, asignación de habitaciones, ocupación, disponibilidad, costos, usuarios, reservas, check-in y check-out.

## Cómo se documentó el trabajo

Este repositorio está organizado para mostrar **el proceso completo de desarrollo**, no solamente el resultado final.

La idea indicada por el profesor se interpreta como trabajar con **commits**: cada jornada o avance importante debe quedar registrado en Git. Además del historial de commits, se mantiene una bitácora escrita para explicar qué se hizo, qué decisión se tomó, qué archivo se modificó y qué quedó pendiente.

> Importante: las jornadas iniciales fueron reconstruidas a partir del trabajo ya realizado. No se inventaron fechas antiguas. Desde ahora, cada nueva sesión de trabajo debe registrarse el mismo día con su propio commit.

## Bitácora diaria

La carpeta `bitacora/` contiene el proceso por jornadas:

1. Día 1 - Comprensión del caso y alcance.
2. Día 2 - Requerimientos y reglas de negocio.
3. Día 3 - Casos de uso.
4. Día 4 - Diagrama de flujo.
5. Día 5 - Modelo de datos y normalización.
6. Día 6 - Mockups.
7. Día 7 - Kanban y trazabilidad.
8. Día 8 - Revisión y preparación de la exposición.

Cada jornada incluye:
- objetivo;
- actividades realizadas;
- decisiones;
- archivos relacionados;
- resultado;
- pendientes;
- una forma corta de explicarlo al profesor.

## Orden general del proyecto

1. Definición del caso y alcance.
2. Requerimientos y reglas de negocio.
3. Casos de uso.
4. Diagrama de flujo.
5. Modelo de datos y normalización.
6. Mockups de interfaz.
7. Planificación Kanban.
8. Trazabilidad.
9. Informe y preparación de la exposición.

## Estructura

```text
bitacora/
  README.md
  dia-01-alcance.md
  dia-02-requerimientos.md
  dia-03-casos-de-uso.md
  dia-04-flujo.md
  dia-05-base-de-datos.md
  dia-06-mockups.md
  dia-07-kanban-trazabilidad.md
  dia-08-revision-exposicion.md

docs/
  00_bitacora_desarrollo.md
  01_requerimientos.md
  02_reglas_negocio.md
  03_casos_de_uso.md
  04_diagrama_flujo.md
  05_modelo_datos.md
  06_mockups.md
  07_trazabilidad.md
  08_fuentes_y_alcance.md
  09_guia_exposicion.md
  10_explicacion_completa.md
  11_checklist_entrega.md

database/
  schema.sql

diagramas/
  fuentes_dot/

kanban/
  tablero.md

CHANGELOG.md
```

## Cómo se debe continuar desde ahora

Al terminar cada día de trabajo:

1. actualizar o crear el archivo correspondiente en `bitacora/`;
2. guardar los cambios del proyecto;
3. hacer un commit con un mensaje concreto, por ejemplo:
   - `Día 9: corregir casos de uso`
   - `Día 10: ajustar modelo de datos`
   - `Día 11: incorporar observaciones del profesor`
4. subir el commit al repositorio.

Así GitHub sirve como evidencia real de la evolución del trabajo.

## Nota de alcance

Cuando el caso original no especifica un detalle concreto, se identifica como propuesta o supuesto de diseño. De esta forma no se presenta como requisito oficial algo que no estaba indicado por el docente.
