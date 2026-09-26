# Evaluación 1 - Toma de requerimientos
## Sistema de Pasajeros - Hotel Duerme Bien

Este documento sigue la estructura IEEE 830 adaptada solicitada en el material del profesor. Se basa en el **Caso 6: Sistema de Pasajeros de Hotel**.

## 1. Introducción

### 1.1 Propósito
Definir de manera ordenada los requerimientos del sistema que reemplazará las planillas Excel utilizadas por el Hotel Duerme Bien para gestionar habitaciones y pasajeros.

### 1.2 Alcance
El sistema considera:
- registro de habitaciones y sus características;
- registro de huéspedes y asignación a habitaciones;
- control de ocupación y disponibilidad;
- cálculo automático de costos por pasajero;
- gestión de usuarios administrador y encargados de hotel;
- informes de ocupación y reservas;
- registro y gestión de reservas;
- check-in y asignación de habitaciones;
- check-out y liberación de habitaciones.

### 1.3 Público objetivo
- Administrador del hotel.
- Encargados del hotel.
- Equipo de desarrollo.
- Docente que revisa el proyecto.

### 1.4 Definiciones

| Término | Definición usada |
| --- | --- |
| Huésped / pasajero | Persona registrada para alojarse en el hotel. |
| Habitación | Habitación registrada con características como capacidad y orientación. |
| Reserva | Registro previo relacionado con una futura estadía. |
| Check-in | Proceso de ingreso y asignación de habitación. |
| Check-out | Proceso de salida y liberación de habitación. |
| Ocupación | Situación en que una habitación está siendo utilizada. |
| Disponibilidad | Situación que permite determinar si una habitación puede ser asignada o reservada. |

## 2. Descripción general

### 2.1 Perspectiva del producto
El sistema busca reemplazar el uso de planillas Excel por una solución centralizada para gestionar habitaciones, pasajeros, reservas, ocupación y costos.

### 2.2 Funciones generales
Las funciones generales corresponden a las funciones clave y procesos UA3 definidos en el Caso 6.

### 2.3 Clases de usuario
- **Administrador.**
- **Encargado de hotel.**

El caso identifica ambos tipos de usuario, pero no entrega una matriz detallada de permisos.

### 2.4 Entorno operativo
El Caso 6 no define sistema operativo, lenguaje de programación, motor de base de datos ni plataforma obligatoria. Para el prototipo se utiliza una interfaz web como decisión técnica de demostración.

### 2.5 Restricciones
- La ocupación y disponibilidad deben mantenerse coherentes.
- Las habitaciones deben registrar capacidad y orientación.
- Deben considerarse los perfiles administrador y encargado de hotel.
- La fórmula exacta del costo no puede declararse como definitiva porque no está especificada en el caso.

### 2.6 Supuestos y dependencias pendientes
El material no define:
- datos personales obligatorios del huésped;
- fórmula o tarifa exacta del costo por pasajero;
- estados exactos de una reserva;
- reglas de modificación o cancelación;
- permisos detallados de cada perfil.

## 3. Requerimientos funcionales preliminares

| ID | Requerimiento | Fuente |
| --- | --- | --- |
| RF-01 | Registrar habitaciones con capacidad y orientación. | Caso 6 |
| RF-02 | Registrar huéspedes. | Caso 6 |
| RF-03 | Asignar huéspedes a habitaciones. | Caso 6 |
| RF-04 | Controlar ocupación y disponibilidad. | Caso 6 |
| RF-05 | Registrar y gestionar reservas. | Caso 6 / UA3 |
| RF-06 | Realizar check-in y asignar habitación. | Caso 6 / UA3 |
| RF-07 | Realizar check-out y liberar habitación. | Caso 6 / UA3 |
| RF-08 | Calcular automáticamente costos por pasajero. | Caso 6 |
| RF-09 | Gestionar usuarios administrador y encargados de hotel. | Caso 6 |
| RF-10 | Generar o consultar informes de ocupación y reservas. | Caso 6 |

## 4. Requerimientos no funcionales preliminares

El Caso 6 no entrega requerimientos no funcionales explícitos. Los siguientes se mantienen como **propuestas a validar**, no como requerimientos textuales del caso.

| ID | Propuesta |
| --- | --- |
| RNF-01 | La interfaz debería estar en español y ser comprensible para el personal del hotel. |
| RNF-02 | Los formularios deberían validar los datos necesarios antes de guardar una operación. |
| RNF-03 | Una implementación real debería conservar los datos de forma persistente. |
| RNF-04 | La disponibilidad mostrada debería coincidir con las operaciones registradas. |

## 5. Reglas de negocio conocidas

Reglas directamente necesarias para cumplir el Caso 6:
- una habitación ocupada no puede considerarse disponible;
- el check-in debe dejar registrada la asignación y ocupación;
- el check-out debe liberar la habitación;
- la asignación debe respetar la capacidad registrada;
- el costo por pasajero debe calcularse automáticamente;
- los informes deben construirse a partir de información de ocupación y reservas.

La fórmula exacta del costo permanece pendiente.

## 6. Entrevista simulada

Esta entrevista es un ejercicio académico construido únicamente con la información del Caso 6.

**¿Cuál es el problema actual?**  
El hotel utiliza planillas Excel y busca reemplazarlas por un sistema para gestionar habitaciones y pasajeros.

**¿Qué características de las habitaciones deben registrarse?**  
Capacidad y orientación.

**¿Qué debe hacerse con los huéspedes?**  
Registrarlos y asignarlos a habitaciones.

**¿Qué debe controlarse?**  
Ocupación y disponibilidad.

**¿Qué procesos deben representarse?**  
Reservas, check-in y check-out.

**¿Qué tipos de usuario existen?**  
Administrador y encargados de hotel.

**¿Qué informes se necesitan?**  
Ocupación y reservas.

**¿Cómo se calcula el costo?**  
El caso indica que debe calcularse automáticamente por pasajero, pero no entrega la fórmula ni la tarifa.

## 7. Factibilidad inicial

### 7.1 Factibilidad técnica
Las funciones solicitadas pueden representarse mediante una aplicación que registre y relacione habitaciones, huéspedes, reservas, usuarios y estadías. El caso no exige integraciones externas.

### 7.2 Factibilidad de negocio
La solución responde al problema declarado: reemplazar planillas Excel y concentrar la información del hotel en un sistema.

## 8. Trazabilidad para Evaluación 2

| Requerimiento | Caso de uso / proceso | Modelo de datos | Prototipo |
| --- | --- | --- | --- |
| RF-01 | Gestionar habitaciones | Habitacion | Habitaciones |
| RF-02 | Registrar huésped | Huesped | Huéspedes |
| RF-03 | Asignar habitación | Huesped / Habitacion / Estadia | Check-in |
| RF-04 | Consultar disponibilidad | Habitacion / Reserva / Estadia | Inicio / Reservas |
| RF-05 | Gestionar reserva | Reserva | Reservas |
| RF-06 | Realizar check-in | Estadia / Habitacion | Check-in |
| RF-07 | Realizar check-out | Estadia / Habitacion | Check-out |
| RF-08 | Calcular costo | Estadia | Check-out |
| RF-09 | Gestionar usuarios | Usuario | Usuarios |
| RF-10 | Generar informes | Reserva / Estadia / Habitacion | Informes |

## 9. Pendientes que no deben inventarse
1. Retroalimentación real de la Evaluación 1.
2. Fórmula y tarifa exacta del costo.
3. Datos obligatorios del huésped.
4. Reglas exactas de modificación/cancelación de reservas.
5. Permisos detallados de los perfiles.
