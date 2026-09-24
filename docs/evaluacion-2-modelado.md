# Evaluación 2 - Requerimientos y modelado

Esta parte reúne los elementos solicitados para continuar el trabajo realizado en la toma de requerimientos.

## 1. Revisión de requerimientos

Los requerimientos están organizados con identificadores RF y RNF en [01_requerimientos.md](01_requerimientos.md).

No se inventó retroalimentación del docente. Cuando exista, los cambios deben registrarse en los requerimientos y en la trazabilidad.

## 2. Casos de uso

Actores principales:

- Administrador.
- Encargado de hotel.

Archivos:

- [Detalle de casos de uso](03_casos_de_uso.md)
- [Material de casos de uso aplicado paso a paso](13_casos_uso_material_aplicado.md)
- [Diagrama oficial](../diagramas/casos-de-uso.svg)
- [Ejemplo simple adaptado](../diagramas/casos-de-uso-checkin-checkout.svg)
- [Ejemplo tipo ATM adaptado](../diagramas/casos-de-uso-estructura-atm-adaptada.svg)

## 3. Diagrama de flujo

Se modeló el proceso de check-in y asignación de habitación.

- [Descripción](04_diagrama_flujo.md)
- [Flujo completo de check-in](../diagramas/flujo-checkin.svg)
- [Ejemplo de captura, decisión, retorno y registro en BD](../diagramas/flujo-validacion-ejemplo.svg)

## 4. Diagrama de base de datos

- [Descripción del modelo](05_modelo_datos.md)
- [Diagrama de datos](../diagramas/modelo-datos.svg)
- [Normalización 1NF, 2NF y 3NF](09_normalizacion.md)
- [Esquema visual de normalización](../diagramas/normalizacion-hotel.svg)
- [SQL de referencia](../database/schema.sql)

## 5. Interfaz

Se aplicó la secuencia del material:

1. Sketch.
2. Wireframe.
3. Mockup.
4. Prototipo.

- [Explicación de las etapas](06_mockups.md)
- [Sketch](../sketch/sketch-hotel.svg)
- [Wireframe](../wireframes/wireframe-hotel.svg)
- [Mockup](../mockups/mockup-hotel.svg)
- [Pantallas principales](../mockups/pantallas-principales.svg)
- [Prototipo navegable](../prototipo/README.md)

## 6. Planificación Kanban

- [Tablero Kanban](../kanban/tablero.md)

## 7. Trazabilidad

- [Matriz de trazabilidad](07_trazabilidad.md)

## 8. Diagrama de clases complementario

La pauta de Evaluación 2 no lo enumera como entrega obligatoria, pero se agregó para aplicar los ejemplos de clases.

- [Construcción paso a paso](10_diagrama_clases.md)
- [Diagrama simplificado](../diagramas/diagrama-clases.svg)
- [Diagrama completo](../diagramas/diagrama-clases-completo.svg)

## 9. Git, GitHub y VS Code

También se aplicó el material de control de versiones:

- [Guía aplicada al repositorio](12_git_github_vscode.md)
- rama `main`;
- rama `dev`.

## 10. Puntos pendientes

- fórmula exacta de costos;
- datos obligatorios del huésped;
- permisos detallados por perfil;
- estados y reglas definitivas de las reservas;
- retroalimentación real de la Evaluación 1.
