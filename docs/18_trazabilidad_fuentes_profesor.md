# 18 - Trazabilidad entre los archivos del profesor y el repositorio

Este documento sirve para comprobar que el contenido del repositorio proviene de los materiales entregados y para diferenciar claramente lo que está definido por el profesor de las decisiones técnicas usadas únicamente para completar un prototipo navegable.

## 1. Definición de proyectos(1).docx

### Caso 6: Sistema de Pasajeros de Hotel

Contenido utilizado:

- contexto: reemplazar planillas Excel;
- objetivo: administrar huéspedes y asignación de habitaciones, controlando ocupación y costos;
- habitaciones con capacidad y orientación;
- huéspedes con asignación a habitaciones;
- ocupación y disponibilidad;
- cálculo automático de costos por pasajero;
- usuarios administrador y encargados de hotel;
- informes de ocupación y reservas;
- check-in y asignación;
- check-out y liberación;
- registro y gestión de reservas.

Aplicado en:

- `docs/01_requerimientos.md`
- `diagramas/casos-de-uso.svg`
- `diagramas/flujo-checkin.svg`
- `diagramas/modelo-datos.svg`
- `prototipo-web/`

## 2. Esquema de entregables

### Evaluación 1

El material exige:

- plantilla IEEE 830 adaptada;
- introducción;
- descripción general;
- requisitos funcionales y no funcionales preliminares;
- reglas de negocio;
- entrevista simulada;
- factibilidad técnica y de negocio;
- trazabilidad.

Aplicado en:

- `docs/01_requerimientos.md`
- `docs/02_reglas_negocio.md`
- `docs/07_trazabilidad.md`

### Evaluación 2

El material exige:

- ajuste de requerimientos según retroalimentación;
- diagrama de casos de uso;
- diagrama de flujo;
- diagrama de base de datos;
- wireframes/mockups;
- Kanban.

Aplicado en:

- `docs/evaluacion-2-modelado.md`
- `entrega-final/`
- `kanban/tablero.md`

La retroalimentación real de Evaluación 1 no fue entregada entre los archivos disponibles, por lo que no se inventó.

## 3. CASOS_DE_USO_como_iniciar(1).pdf

Se aplicó:

- actores por rol;
- actores primarios a la izquierda;
- nombres de casos de uso comenzando con verbo;
- casos de uso incluidos a la derecha;
- asociaciones actor-caso sin flecha;
- include/extend con línea discontinua;
- include apuntando al caso incluido;
- extend apuntando al caso base;
- validación y refinamiento del diagrama.

Aplicado en:

- `docs/03_casos_de_uso.md`
- `docs/13_casos_uso_material_aplicado.md`
- `diagramas/casos-de-uso.svg`

## 4. CASOS_DE_USO_extend_y_include(1).pdf

Se aplicó:

- include solo cuando la función incluida es esencial;
- extend solo cuando agrega comportamiento y el caso base puede funcionar sin la extensión;
- evitar abuso de include/extend;
- no usar estas relaciones para mostrar orden de ejecución.

Aplicado en:

- `docs/03_casos_de_uso.md`
- `docs/13_casos_uso_material_aplicado.md`

## 5. Diagramas de Clase(1).pdf y GUIA_diagramas_de_clase(1).pdf

Se aplicó:

- clase dividida en nombre, atributos y operaciones;
- asociación;
- asociación dirigida;
- multiplicidad;
- agregación;
- composición;
- herencia/generalización;
- realización, cuando corresponde conceptualmente.

Aplicado en:

- `docs/10_diagrama_clases.md`
- `docs/15_relaciones_diagrama_clases.md`
- `diagramas/diagrama-clases-completo.svg`

El diagrama de clases se mantiene como material complementario porque no está enumerado entre los entregables obligatorios de Evaluación 2.

## 6. MODELO_E_R_NORMALIZACION.pdf

Se aplicó:

- evitar redundancia;
- evitar problemas de actualización;
- garantizar dependencias;
- 1NF: valores atómicos;
- 2NF: atributos no clave dependientes de la PK;
- 3NF: atributos no clave independientes entre sí y dependientes de la PK.

Aplicado en:

- `docs/05_modelo_datos.md`
- `docs/09_normalizacion.md`
- `diagramas/normalizacion-hotel.svg`
- `database/schema.sql`

## 7. MOCKUP_COMPLETO(1).pdf

Se aplicó la secuencia:

- Sketch;
- Wireframe;
- Mockup;
- Prototipo.

También se tomó del material:

- navegación;
- interacción;
- estados de botones;
- validación de formularios;
- experiencia de usuario;
- diseño responsive;
- pruebas de usabilidad.

Aplicado en:

- `sketch/`
- `wireframes/`
- `mockups/`
- `prototipo-web/`
- `docs/14_guia_estilo_ux.md`

## 8. Github_Git_VSCode.docx

Se aplicó:

- repositorio GitHub;
- historial de commits;
- ramas;
- clonado;
- flujo de trabajo con Git;
- organización del proyecto.

Aplicado en:

- repositorio completo;
- rama `main`;
- rama `dev`;
- rama `gh-pages`;
- `docs/12_git_github_vscode.md`

## 9. Información que NO está definida por los archivos

No se presenta como requisito oficial:

- documento, teléfono o correo obligatorio del huésped;
- fórmula exacta de costos;
- tarifa exacta;
- campos obligatorios de la reserva;
- estados exactos de reserva;
- permisos detallados de administrador y encargado;
- tecnología específica;
- base de datos específica;
- autenticación específica.

Si alguno de estos elementos aparece en el prototipo, está identificado como dato técnico o de demostración.
