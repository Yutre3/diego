# Bitácora de desarrollo del proyecto

## Proyecto
**Sistema de Pasajeros de Hotel - Duerme Bien**

Esta bitácora documenta el trabajo realizado durante el desarrollo del proyecto. Su objetivo es dejar evidencia dentro del repositorio de qué se hizo, en qué orden, qué archivos se generaron y qué decisiones se tomaron.

## 1. Inicio y definición del alcance

Se tomó como base el Caso 6 entregado por el docente: un sistema para el hotel Duerme Bien que reemplace planillas Excel y permita gestionar habitaciones y pasajeros.

El alcance inicial considera:

- registro de habitaciones;
- registro de huéspedes;
- asignación de habitaciones;
- control de ocupación y disponibilidad;
- cálculo de costos por pasajero;
- gestión de usuarios;
- informes de ocupación y reservas;
- check-in;
- check-out;
- registro y gestión de reservas.

## 2. Levantamiento y organización de requerimientos

Se ordenaron las funciones del caso en requerimientos funcionales y no funcionales. Cuando el caso no especificaba una regla concreta, se dejó marcada como propuesta o supuesto de diseño para no presentarla como requisito oficial.

También se identificaron los perfiles principales:

- Administrador.
- Encargado de hotel.

## 3. Casos de uso

Se identificaron las acciones principales del sistema: iniciar sesión, registrar huésped, consultar disponibilidad, registrar reserva, realizar check-in, asignar habitación, calcular costo, realizar check-out, liberar habitación, gestionar habitaciones y generar informes.

## 4. Diagrama de flujo

Se representó el proceso general de atención de un pasajero, incluyendo validación de datos, disponibilidad, reserva o check-in, asignación de habitación y posterior check-out.

## 5. Modelo de datos y normalización

Se diseñó un modelo de datos con las entidades Usuario, Huésped, Habitación, Reserva y Estadía. Se separaron las entidades para evitar duplicidad de datos y mantener relaciones coherentes.

## 6. Diseño de interfaz

Se prepararon cinco mockups: inicio de sesión, panel principal, reservas, check-in y check-out.

## 7. Planificación Kanban

Se organizó el trabajo en Pendiente, En progreso y Terminado.

## 8. Trazabilidad

Se creó una matriz para relacionar requisitos, casos de uso, datos y pantallas.

## 9. Informe final

Se integró el proyecto en un informe final para apoyar la revisión y exposición.

## 10. Control de versiones con Git

El trabajo se registró mediante commits separados para que el repositorio muestre el avance del proyecto y no solamente el resultado final.

## Resultado

El repositorio funciona como evidencia del proceso completo: requerimientos, decisiones, diagramas, diseños, planificación, base de datos y documentación.
