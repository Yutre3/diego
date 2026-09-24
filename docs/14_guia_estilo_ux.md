# 14 - Guía de estilo, UX, usabilidad y accesibilidad

Este documento aplica otros contenidos del material de Sketch, Wireframe, Mockup y Prototipo que no se limitan a dibujar pantallas.

## Wireframe

El wireframe se concentra en estructura, funcionalidad y jerarquía de información.

Aplicación en el hotel:

- escala de grises;
- una tipografía genérica;
- cajas para representar contenido;
- navegación visible;
- alineación mediante retícula;
- separación clara entre menú, resumen y contenido.

Archivos:

- [Wireframe principal](../wireframes/wireframe-hotel.svg)
- [Wireframe con retícula de 12 columnas](../wireframes/wireframe-grid-12.svg)

## Elementos habituales de wireframe y aplicación al hotel

El material menciona como elementos habituales:

- logo;
- campo de búsqueda;
- cabeceras y títulos;
- navegación global y local;
- contenido del cuerpo;
- botones de compartir;
- información de contacto;
- pie de página.

Aplicación en este proyecto:

- logo o nombre del hotel: sí;
- búsqueda: se aplica en reservas, huéspedes y estadías;
- títulos: sí;
- navegación principal y local: sí;
- contenido principal: sí;
- botones de compartir: no se utilizan porque el sistema es interno;
- información de contacto: no se considera necesaria en la interfaz operativa;
- pie de página: puede agregarse en una versión final, pero no es esencial para el flujo principal.

## Rejilla / grid

La retícula ayuda a ordenar los elementos y mantener alineación.

Se preparó una versión con 12 columnas para mostrar cómo pueden distribuirse tarjetas, menú y contenido.

## Mockup

El mockup agrega una apariencia visual más cercana al producto final.

Aplicación:

- paleta azul oscuro y turquesa;
- fondo claro;
- tarjetas blancas;
- botones con contraste;
- bordes y espacios consistentes;
- estructura derivada del wireframe.

Archivos:

- [Mockup escritorio](../mockups/mockup-hotel.svg)
- [Mockup móvil](../mockups/mockup-hotel-mobile.svg)
- [Guía de estilo visual](../mockups/guia-estilo.svg)

## Diseño responsive

El material indica que una interfaz web debe considerar distintos tamaños de pantalla.

Por eso:

- existe una versión móvil del mockup;
- el prototipo utiliza CSS responsive;
- el menú y las tarjetas se reorganizan en pantallas pequeñas.

## Esquema de color

Paleta propuesta para este prototipo:

| Uso | Color |
| --- | --- |
| Barra principal | #17324D |
| Navegación | #10293F |
| Acción principal | #1F7A8C |
| Fondo | #EEF3F5 |
| Tarjetas | #FFFFFF |
| Texto | #1D2A32 |

Esta paleta es una decisión de diseño y no un requisito del Caso 6.

## Tipografía

Se utiliza una familia sans-serif genérica.

Jerarquía:

- título principal;
- títulos de sección;
- subtítulos;
- texto normal;
- etiquetas y estados.

## Guía de estilo

El material explica que el mockup puede servir como base para un libro o guía de estilo.

En este proyecto la guía visual define:

- colores principales;
- tipografía;
- tamaño relativo de títulos;
- estilo de botones;
- estilo de campos;
- tarjetas;
- alineación;
- espaciado;
- comportamiento responsive.

[Ver guía de estilo](../mockups/guia-estilo.svg)

## Errores de diseño a evitar

Tomando los puntos del material:

- no agregar efectos visuales que no aporten valor;
- no dejar elementos desalineados;
- utilizar una rejilla;
- considerar versión responsive;
- mantener un esquema de color coherente;
- asegurar contraste entre fondo y texto;
- usar tamaños de letra legibles;
- evitar un diseño tan poco habitual que dificulte entender la interfaz.

## Prototipo y experiencia de usuario

El prototipo permite probar:

- navegación entre módulos;
- estados activos del menú;
- formularios;
- mensajes de error y éxito;
- cambio de disponibilidad después de check-in y check-out;
- adaptación a pantallas pequeñas.

## Pruebas de interacción

El prototipo se utiliza para revisar:

- si el usuario encuentra las funciones principales;
- si las transiciones entre módulos son comprensibles;
- si los formularios entregan retroalimentación;
- si el diseño funciona en distintos tamaños;
- si la cantidad de información en pantalla es manejable.

## Usabilidad

Las tareas principales se mantienen visibles:

- reservas;
- check-in;
- check-out;
- habitaciones;
- huéspedes;
- informes.

## Accesibilidad

Se aplican medidas básicas:

- etiquetas visibles en formularios;
- contraste;
- botones con texto;
- estructura HTML con encabezado, navegación, contenido y secciones;
- diseño adaptable.

No se afirma cumplimiento de una norma específica porque no se realizó una auditoría formal de accesibilidad.

## Herramientas mencionadas en el material

Las herramientas y recursos listados en la guía original se registran por separado:

[Ver herramientas mencionadas](16_herramientas_interfaz.md)
