# Documento maestro para explicar el proyecto

## Sistema de Pasajeros de Hotel - Duerme Bien

Este archivo reúne en un solo lugar lo necesario para revisar y explicar el trabajo sin tener que abrir todos los documentos a la vez.

---

## 1. Qué pide el caso

El proyecto corresponde al **Caso 6: Sistema de Pasajeros de Hotel**.

El hotel Duerme Bien necesita reemplazar sus planillas Excel por un sistema capaz de administrar habitaciones y pasajeros.

Las funciones base del caso son:

- registrar habitaciones y sus características;
- registrar huéspedes;
- asignar huéspedes a habitaciones;
- controlar ocupación y disponibilidad;
- calcular costos;
- gestionar usuarios;
- generar informes de ocupación y reservas;
- realizar check-in;
- realizar check-out;
- registrar y gestionar reservas.

Para la Evaluación 2 se preparó documentación de requerimientos, modelado UML, flujo, base de datos, prototipos de interfaz y planificación Kanban.

---

## 2. Qué hicimos

### Etapa 1 - Comprender el problema

Primero se analizó el caso para entender qué problema debía resolver el sistema.

**Problema:** el hotel depende de planillas Excel, por lo que la información de habitaciones, pasajeros y reservas no está centralizada en un sistema diseñado para ese proceso.

**Solución propuesta:** diseñar un sistema que concentre la gestión de habitaciones, huéspedes, reservas, check-in, check-out, ocupación, disponibilidad, costos, usuarios e informes.

### Cómo explicarlo
"Primero entendimos el problema. El hotel trabaja con Excel y necesita un sistema que ordene la información y permita controlar todo el proceso de una estadía."

---

## 3. Requerimientos

Las funciones del caso se transformaron en requerimientos numerados.

Ejemplos:

- **RF-01:** registrar y actualizar habitaciones.
- **RF-02:** registrar huéspedes.
- **RF-03:** asignar huéspedes a habitaciones.
- **RF-04:** controlar ocupación y disponibilidad.
- **RF-05:** calcular costos.
- **RF-06:** gestionar usuarios.
- **RF-07:** generar informes.
- **RF-08:** gestionar reservas.
- **RF-09:** realizar check-in.
- **RF-10:** realizar check-out.

También se separaron los requisitos oficiales de las propuestas de diseño.

### Cómo explicarlo
"Los requerimientos convierten el caso en una lista clara de cosas que el sistema tiene que hacer. Los numeramos para poder relacionarlos después con los diagramas, la base de datos y las pantallas."

---

## 4. Reglas de negocio

Se definieron reglas para evitar contradicciones en el funcionamiento.

Ejemplos:

- una habitación ocupada no debe mostrarse como disponible;
- después del check-in la habitación queda ocupada;
- después del check-out la habitación queda liberada;
- una reserva debe relacionarse con una habitación;
- los usuarios deben operar según su perfil.

Cuando el caso no define algo, se deja marcado como propuesta o supuesto.

### Cómo explicarlo
"Las reglas de negocio son condiciones que el sistema debe respetar para funcionar de forma coherente."

---

## 5. Actores

Se definieron dos actores principales.

### Administrador
- gestiona usuarios;
- gestiona habitaciones;
- consulta informes.

### Encargado de hotel
- consulta disponibilidad;
- registra huéspedes;
- gestiona reservas;
- realiza check-in;
- realiza check-out.

### Cómo explicarlo
"Los actores representan los tipos de usuario que interactúan con el sistema."

---

## 6. Casos de uso

Se documentaron los siguientes casos:

- iniciar sesión;
- gestionar habitaciones;
- gestionar usuarios;
- consultar disponibilidad;
- gestionar reservas;
- registrar huésped;
- realizar check-in;
- asignar habitación;
- calcular costo;
- realizar check-out;
- liberar habitación;
- generar informes.

Se usó **include** cuando una función es necesaria dentro de otra.

Ejemplos:

- check-in incluye consultar disponibilidad;
- check-in incluye registrar huésped;
- check-in incluye asignar habitación;
- check-out incluye calcular costo;
- check-out incluye liberar habitación.

### Cómo explicarlo
"El caso de uso muestra quién utiliza una función. El include se usa cuando una acción es necesaria dentro de otra."

---

## 7. Diagrama de flujo

El flujo general del sistema es:

1. inicio;
2. ingreso de usuario y contraseña;
3. validación de credenciales;
4. acceso al menú;
5. elección de una operación;
6. reserva, check-in o check-out;
7. actualización de la base de datos;
8. nueva operación o cierre.

### Cómo explicarlo
"El caso de uso muestra qué puede hacer el usuario; el diagrama de flujo muestra el orden en que ocurre el proceso."

---

## 8. Modelo de base de datos

Se propusieron estas entidades:

- Usuario;
- Habitación;
- Huésped;
- Reserva;
- Reserva_Huésped;
- Estadía;
- Estadía_Huésped.

La separación permite evitar duplicación innecesaria.

Por ejemplo, un huésped se registra una sola vez y luego se relaciona con reservas o estadías.

### Cómo explicarlo
"Cada tabla representa un concepto del sistema. Separamos los datos para no guardar lo mismo varias veces."

---

## 9. Normalización

El modelo se organizó considerando:

- campos atómicos;
- dependencia de atributos respecto de su clave;
- reducción de redundancia;
- tablas puente para relaciones muchos-a-muchos.

### Cómo explicarlo
"Normalizar significa ordenar la base de datos para evitar datos repetidos e inconsistentes."

---

## 10. Script SQL

Se creó `database/schema.sql` como propuesta técnica para representar las tablas y relaciones del modelo.

Incluye:

- claves primarias;
- claves foráneas;
- restricciones;
- estados posibles;
- relaciones entre tablas.

### Cómo explicarlo
"El diagrama muestra la idea y el SQL muestra cómo podría construirse esa estructura en una base de datos."

---

## 11. Mockups

Se definieron las pantallas principales:

- inicio de sesión;
- panel principal;
- reservas;
- check-in;
- check-out.

Los mockups son prototipos visuales, no una aplicación terminada.

### Cómo explicarlo
"Los mockups permiten ver cómo podría usar el sistema una persona antes de programarlo."

---

## 12. Kanban

El proyecto se organizó en:

- Pendiente;
- En progreso;
- Terminado.

### Cómo explicarlo
"Kanban nos permite saber qué falta, qué estamos haciendo y qué ya terminamos."

---

## 13. Trazabilidad

La matriz de trazabilidad conecta los requerimientos con otros elementos del proyecto.

Ejemplo:

**RF-09 Check-in -> CU-07 -> Estadía/Huésped/Habitación -> pantalla Check-in.**

### Cómo explicarlo
"La trazabilidad sirve para comprobar que cada requisito aparece realmente en el diseño."

---

## 14. Git y GitHub

El repositorio se usa como evidencia del proceso.

Contiene:

- documentación;
- diagramas;
- base de datos;
- Kanban;
- bitácora;
- historial de commits;
- guía para exponer.

Git permite rastrear cambios y GitHub mantiene el repositorio disponible para revisión.

### Cómo explicarlo
"GitHub no lo usamos solo para guardar el resultado. También dejamos registrado qué se fue agregando y modificando."

---

## 15. Bitácora del proceso

La carpeta `bitacora/` documenta el trabajo por etapas.

Cada registro incluye:

- fecha y hora del registro;
- objetivo;
- trabajo realizado;
- decisiones;
- archivos relacionados;
- resultado;
- pendientes;
- commit;
- explicación corta.

### Importante sobre las fechas

Las etapas iniciales se reconstruyeron a partir del trabajo desarrollado y se registraron en GitHub el **23/09/2026**. No se inventaron fechas pasadas.

Por eso, el historial actual demuestra el orden de construcción y los cambios reales hechos en el repositorio, pero no pretende demostrar que cada etapa ocurrió en un día histórico diferente.

Desde el próximo avance, lo correcto es documentar la jornada el mismo día en que se trabaja.

---

## 16. Qué mostrar durante la explicación

### Primero
Abrir `README.md`.

Decir:
"Este es el proyecto y aquí explicamos su objetivo y cómo está organizado el repositorio."

### Segundo
Abrir `bitacora/registro-cronologico.md`.

Decir:
"Aquí dejamos el registro de las etapas y sus commits."

### Tercero
Mostrar `docs/01_requerimientos.md`.

Decir:
"De aquí partimos para definir qué debe hacer el sistema."

### Cuarto
Mostrar `docs/03_casos_de_uso.md` y `docs/15_modelos_visuales.md`.

Decir:
"Aquí mostramos quién usa el sistema y qué funciones puede realizar."

### Quinto
Mostrar `docs/04_diagrama_flujo.md`.

Decir:
"Aquí mostramos el orden general del proceso."

### Sexto
Mostrar `docs/05_modelo_datos.md` y `database/schema.sql`.

Decir:
"Aquí mostramos cómo organizamos la información."

### Séptimo
Mostrar `docs/06_mockups.md`.

Decir:
"Aquí mostramos cómo podría verse la interfaz."

### Octavo
Mostrar `kanban/tablero.md`.

Decir:
"Aquí organizamos las tareas del proyecto."

### Noveno
Mostrar `docs/07_trazabilidad.md`.

Decir:
"Aquí comprobamos que los requisitos estén conectados con el diseño."

### Décimo
Abrir el historial de commits de GitHub.

Decir:
"Finalmente, Git nos permite mostrar cómo se fue registrando el avance del repositorio."

---

## 17. Guion completo para decirlo de forma natural

"Nuestro proyecto es el Sistema de Pasajeros del Hotel Duerme Bien. El problema es que el hotel trabaja con planillas Excel y necesita una forma más ordenada de manejar habitaciones, pasajeros y reservas.

Primero analizamos el caso para identificar qué debía hacer el sistema. De ahí salieron los requerimientos, como registrar habitaciones y huéspedes, revisar disponibilidad, manejar reservas, hacer check-in y check-out y calcular costos.

Después identificamos los actores. Tenemos un administrador y un encargado de hotel. Con eso construimos los casos de uso para mostrar qué acciones puede realizar cada uno.

Luego hicimos el diagrama de flujo para representar el orden de los procesos. Después diseñamos la base de datos, separando usuarios, habitaciones, huéspedes, reservas y estadías para evitar datos repetidos.

También hicimos mockups de las pantallas principales para mostrar cómo podría funcionar la interfaz antes de programarla.

Para organizar el trabajo usamos Kanban y después hicimos una matriz de trazabilidad para comprobar que los requerimientos estuvieran relacionados con los casos de uso, los datos y las pantallas.

Finalmente documentamos todo dentro del repositorio. La bitácora explica las etapas y Git mantiene el historial de cambios mediante commits. Así podemos mostrar tanto el resultado como el proceso que seguimos."

---

## 18. Respuesta corta si preguntan qué hicieron

"Analizamos el caso, sacamos los requerimientos, definimos actores y casos de uso, hicimos el flujo, diseñamos la base de datos, los mockups, el Kanban y la trazabilidad, y dejamos todo documentado en GitHub con una bitácora y commits."

---

## 19. Preguntas rápidas

**¿Qué problema resuelve?**  
Organiza la gestión de habitaciones, huéspedes y reservas que antes dependía de Excel.

**¿Quiénes usan el sistema?**  
Administrador y Encargado de hotel.

**¿Qué es un caso de uso?**  
Una función del sistema vista desde la interacción de un actor.

**¿Qué es include?**  
Una relación donde una función necesita ejecutar otra.

**¿Qué es normalización?**  
Organizar la base de datos para reducir repetición e inconsistencias.

**¿Qué es un mockup?**  
Una representación visual de una pantalla antes de programarla.

**¿Qué es Kanban?**  
Una forma de organizar tareas por estado.

**¿Qué es trazabilidad?**  
La relación entre un requisito y los elementos del diseño que lo representan.

**¿Por qué GitHub?**  
Porque almacena el proyecto y registra los cambios mediante commits.

**¿Está programado el sistema?**  
No. Este trabajo corresponde al análisis, modelado, diseño y documentación previa a una implementación.

---

## 20. Estado actual

El repositorio ya contiene:

- documentación del caso;
- requerimientos;
- reglas de negocio;
- casos de uso;
- flujo;
- modelo de datos;
- SQL;
- mockups documentados;
- Kanban;
- trazabilidad;
- bitácora;
- registro cronológico;
- guía de exposición;
- preguntas de defensa;
- diagramas visuales;
- explicación final.

Lo que aún requiere información real externa al repositorio es cualquier retroalimentación específica de la Evaluación 1 y la validación de detalles que el caso no define expresamente.
