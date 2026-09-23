# 01 - Toma de requerimientos

## 1. Introducción

### 1.1 Propósito

Definir de forma ordenada qué debe hacer el Sistema de Pasajeros del Hotel Duerme Bien antes de diseñar o programar una solución. Este documento sirve como base para los casos de uso, el flujo de procesos, el modelo de datos, los mockups y la trazabilidad de la segunda evaluación.

### 1.2 Alcance

El sistema debe apoyar la administración de habitaciones y huéspedes del hotel. El alcance entregado considera registro de habitaciones, registro de huéspedes, asignación de habitaciones, control de ocupación y disponibilidad, cálculo de costos por pasajero, gestión de usuarios, informes de ocupación y reservas.

Además, se consideran como procesos principales el check-in, el check-out y la gestión de reservas.

No se define en el caso una tecnología, lenguaje de programación, motor de base de datos ni fórmula exacta para calcular los costos.

### 1.3 Público objetivo

- Administrador del hotel.
- Encargados del hotel.
- Equipo que desarrollará el sistema.
- Docente que revisa el análisis y modelado del proyecto.

### 1.4 Definiciones

| Término | Definición usada en el proyecto |
| --- | --- |
| Huésped o pasajero | Persona registrada para alojarse en el hotel. |
| Habitación | Espacio disponible para alojar huéspedes, con características como capacidad y orientación. |
| Reserva | Registro previo de una estadía para una fecha determinada. |
| Check-in | Proceso de ingreso del huésped y asignación de habitación. |
| Check-out | Proceso de salida del huésped y liberación de la habitación. |
| Ocupación | Estado que indica que una habitación está siendo utilizada. |
| Disponibilidad | Condición que permite determinar si una habitación puede ser asignada o reservada. |
| Administrador | Usuario encargado de funciones de administración del sistema. |
| Encargado de hotel | Usuario que realiza las operaciones habituales de atención y registro. |

## 2. Descripción general

### 2.1 Perspectiva del producto

El sistema surge para reemplazar el uso de planillas Excel en el registro de pasajeros y habitaciones. La idea es reunir en un solo lugar la información necesaria para consultar disponibilidad, registrar reservas y controlar entradas y salidas.

El caso no indica integraciones con sistemas externos.

### 2.2 Funciones generales

El sistema debe permitir:

- mantener el registro de habitaciones y sus características;
- mantener el registro de huéspedes;
- asignar huéspedes a habitaciones;
- consultar ocupación y disponibilidad;
- registrar y gestionar reservas;
- realizar check-in;
- realizar check-out;
- calcular costos por pasajero;
- gestionar usuarios;
- consultar informes de ocupación y reservas.

### 2.3 Clases de usuario

**Administrador**

Se considera responsable de la administración general. Dentro del alcance se relaciona principalmente con la gestión de usuarios, habitaciones e informes.

**Encargado de hotel**

Se relaciona con las tareas operativas: huéspedes, disponibilidad, reservas, check-in y check-out.

La separación exacta de permisos debe ser validada, ya que el caso solo identifica ambos tipos de usuario y no entrega una matriz detallada de permisos.

### 2.4 Entorno operativo

El caso no define un entorno tecnológico específico.

Como propuesta para el trabajo académico, se considera una aplicación de uso interno conectada a una base de datos donde se almacene la información del hotel. Esta decisión debe considerarse una propuesta de diseño y no un requisito entregado en el enunciado.

### 2.5 Restricciones

- La información de ocupación y disponibilidad debe mantenerse coherente con los procesos de check-in y check-out.
- Deben existir los perfiles de administrador y encargado de hotel.
- El modelo debe permitir registrar las características de las habitaciones indicadas en el caso.
- No se puede definir una fórmula definitiva de costos mientras el hotel no indique cómo se calcula.

### 2.6 Supuestos y dependencias por validar

Los siguientes puntos son necesarios para completar el modelo, pero no vienen definidos de forma expresa:

- datos personales obligatorios del huésped;
- formato o identificador utilizado para cada habitación;
- forma exacta de calcular el costo por pasajero;
- reglas para modificar o cancelar reservas;
- estados que puede tener una reserva;
- permisos exactos de cada tipo de usuario.

## 3. Requerimientos funcionales

| ID | Requerimiento | Origen |
| --- | --- | --- |
| RF-01 | El sistema debe permitir registrar y actualizar habitaciones con sus características, incluyendo capacidad y orientación. | Caso |
| RF-02 | El sistema debe permitir registrar huéspedes. | Caso |
| RF-03 | El sistema debe permitir asignar huéspedes a habitaciones. | Caso |
| RF-04 | El sistema debe permitir consultar y controlar la ocupación y disponibilidad de las habitaciones. | Caso |
| RF-05 | El sistema debe permitir registrar y gestionar reservas. | Caso / proceso UA3 |
| RF-06 | El sistema debe permitir realizar el check-in y registrar la asignación de habitación. | Caso / proceso UA3 |
| RF-07 | El sistema debe permitir realizar el check-out y liberar la habitación utilizada. | Caso / proceso UA3 |
| RF-08 | El sistema debe calcular automáticamente el costo por pasajero. | Caso |
| RF-09 | El sistema debe permitir gestionar usuarios con perfil de administrador y encargado de hotel. | Caso |
| RF-10 | El sistema debe permitir consultar informes de ocupación y reservas. | Caso |
| RF-11 | El sistema debería identificar al usuario que accede para aplicar su perfil correspondiente. | Propuesta derivada de la gestión de usuarios |

## 4. Requerimientos no funcionales preliminares

El caso no entrega requerimientos no funcionales explícitos. Para completar la especificación se proponen los siguientes y deben validarse antes de considerarlos definitivos.

| ID | Requerimiento propuesto |
| --- | --- |
| RNF-01 | La interfaz debe estar en español y utilizar nombres comprensibles para el personal del hotel. |
| RNF-02 | Las funciones disponibles deben respetar el perfil del usuario. |
| RNF-03 | La información de huéspedes, reservas y estadías debe mantenerse almacenada de forma persistente. |
| RNF-04 | El sistema debe validar los datos necesarios antes de guardar una operación. |
| RNF-05 | Las contraseñas no deben almacenarse como texto visible si el sistema llega a implementarse. |
| RNF-06 | La información mostrada sobre disponibilidad debe corresponder al estado registrado de las habitaciones y estadías. |

## 5. Reglas de negocio iniciales

Las reglas se detallan en [02_reglas_negocio.md](02_reglas_negocio.md). Las principales son:

- una habitación no debe asignarse como disponible si se encuentra ocupada;
- el check-in debe dejar registrada la ocupación de la habitación;
- el check-out debe liberar la habitación;
- la cantidad de huéspedes asignados no debe superar la capacidad registrada de la habitación;
- el cálculo de costos debe hacerse automáticamente, pero su fórmula queda pendiente de validación;
- las operaciones deben respetar el tipo de usuario definido para el sistema.

## 6. Entrevista simulada

Esta sección corresponde al ejercicio de toma de requerimientos solicitado para la evaluación. Se construye a partir de la información del Caso 6; no representa una entrevista real con personal del hotel.

**Pregunta: ¿Cuál es el problema que se quiere resolver?**  
Respuesta: El hotel utiliza planillas Excel y necesita un sistema para gestionar habitaciones y pasajeros de una forma más ordenada.

**Pregunta: ¿Qué información de las habitaciones se necesita manejar?**  
Respuesta: El caso menciona el registro de habitaciones y características como capacidad y orientación. Otros datos, como su identificador o tarifa, deben validarse.

**Pregunta: ¿Qué se necesita hacer con los huéspedes?**  
Respuesta: Registrarlos y asignarlos a habitaciones. El caso no especifica los campos personales obligatorios.

**Pregunta: ¿Qué debe mostrar el sistema respecto de las habitaciones?**  
Respuesta: Debe permitir controlar cuáles están ocupadas y cuáles se encuentran disponibles.

**Pregunta: ¿Qué usuarios utilizarán el sistema?**  
Respuesta: Administradores y encargados del hotel.

**Pregunta: ¿Cuáles son los procesos principales?**  
Respuesta: Registro y gestión de reservas, check-in con asignación de habitación y check-out con liberación de habitación.

**Pregunta: ¿Se necesita calcular el costo?**  
Respuesta: Sí. El cálculo debe ser automático por pasajero, pero el caso no indica la fórmula ni la tarifa que debe aplicarse.

**Pregunta: ¿Qué informes se necesitan?**  
Respuesta: Informes relacionados con ocupación y reservas.

## 7. Factibilidad inicial

### 7.1 Factibilidad técnica

El alcance es técnicamente realizable con una aplicación y una base de datos relacional. Las funciones indicadas corresponden principalmente a registro, consulta, actualización y relación de datos.

No se identifican en el caso integraciones externas obligatorias. Antes de implementar sería necesario definir la tecnología, la forma de autenticación y la regla de cálculo de costos.

### 7.2 Factibilidad de negocio

La propuesta responde directamente al problema indicado: reemplazar planillas Excel para concentrar en un sistema el registro de huéspedes, habitaciones, reservas y ocupación.

El beneficio esperado es disponer de información relacionada en un mismo lugar y reducir la dependencia de registros separados. El impacto real debe validarse con los usuarios del hotel.

## 8. Requerimientos pendientes de confirmar

1. Fórmula y tarifa utilizada para el cálculo automático de costos.
2. Datos obligatorios del huésped.
3. Estados exactos de habitaciones y reservas.
4. Reglas de modificación y cancelación de reservas.
5. Permisos detallados del administrador y del encargado.
6. Retroalimentación real de la Evaluación 1.

Estos puntos se mantienen pendientes para no presentar como requisito oficial algo que no está definido en el caso.
