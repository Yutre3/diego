# Guion simple para exponer el proyecto

Este guion está pensado para explicar el proyecto sin memorizar palabras técnicas innecesarias.

## Inicio

"Nuestro proyecto corresponde al Caso 6, Sistema de Pasajeros del Hotel Duerme Bien.

El problema principal es que el hotel trabaja con planillas Excel para manejar habitaciones y pasajeros. La idea del proyecto es diseñar un sistema que permita tener esa información organizada y realizar reservas, check-in, check-out, controlar disponibilidad y calcular costos."

## Parte 1 - Análisis del caso

"Lo primero que hicimos fue analizar el caso y separar las funciones principales. Identificamos que el sistema debe manejar habitaciones, huéspedes, reservas, disponibilidad, costos, usuarios e informes."

## Parte 2 - Requerimientos

"Después convertimos esas funciones en requerimientos. Por ejemplo, registrar habitaciones, registrar huéspedes, gestionar reservas, realizar check-in y realizar check-out.

También separamos lo que viene directamente del caso de las cosas que nosotros propusimos, porque no queríamos presentar como requisito algo que el profesor no había indicado."

## Parte 3 - Casos de uso

"Después identificamos los usuarios del sistema. Tenemos al Administrador y al Encargado de hotel.

El Administrador puede gestionar usuarios y habitaciones y consultar informes. El Encargado trabaja principalmente con huéspedes, reservas, disponibilidad, check-in y check-out.

También usamos relaciones include. Por ejemplo, hacer check-out incluye calcular el costo y liberar la habitación."

## Parte 4 - Flujo

"Después hicimos el diagrama de flujo para representar el orden de las acciones.

El usuario inicia sesión, el sistema valida los datos, entra al menú y puede realizar una reserva, un check-in o un check-out. Después el sistema actualiza la información y vuelve al menú."

## Parte 5 - Base de datos

"Para guardar la información diseñamos una base de datos con entidades como Usuario, Habitación, Huésped, Reserva y Estadía.

Las separamos para no repetir información. Por ejemplo, los datos del huésped se guardan una sola vez y después se relacionan con sus reservas o estadías."

## Parte 6 - Mockups

"También diseñamos los mockups de las pantallas principales: login, panel, reservas, check-in y check-out.

Esto nos permite mostrar cómo podría funcionar la interfaz antes de programar la aplicación."

## Parte 7 - Kanban y trazabilidad

"Para organizar el proyecto usamos un Kanban con tareas pendientes, en progreso y terminadas.

Además hicimos una matriz de trazabilidad para comprobar que cada requerimiento esté relacionado con un caso de uso, datos y una pantalla cuando corresponde."

## Parte 8 - Repositorio

"Todo el proceso está documentado en GitHub.

Tenemos una bitácora por jornadas y commits que permiten revisar los cambios. Así el repositorio no muestra solamente el resultado final, sino también cómo se fue construyendo el proyecto."

## Cierre

"En resumen, partimos entendiendo el problema, después definimos los requerimientos, diseñamos los procesos, la base de datos y las pantallas, y finalmente dejamos todo documentado y organizado en el repositorio."

## Versión muy corta por si el profesor pide resumir

"El proyecto reemplaza las planillas Excel del hotel por el diseño de un sistema para habitaciones, huéspedes y reservas. Documentamos requerimientos, casos de uso, flujo, base de datos, mockups, Kanban y trazabilidad, y dejamos el proceso registrado mediante Git y GitHub."
