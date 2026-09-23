# 05 - Modelo de datos

El modelo busca separar huéspedes, habitaciones, reservas, estadías y usuarios para evitar repetir la misma información en varios registros.

## Entidades

### Usuario

| Campo | Tipo lógico | Observación |
| --- | --- | --- |
| id_usuario | PK | Identificador interno |
| nombre | texto | Nombre del usuario |
| username | texto | Nombre de acceso |
| password_hash | texto | Contraseña almacenada de forma segura |
| rol | texto | Administrador o encargado |
| activo | booleano | Estado del usuario |

### Habitacion

| Campo | Tipo lógico | Observación |
| --- | --- | --- |
| id_habitacion | PK | Identificador interno |
| numero | texto | Identificador visible de la habitación |
| capacidad | entero | Dato indicado por el caso |
| orientacion | texto | Dato indicado por el caso |
| estado | texto | Disponible, ocupada u otro estado que se valide |
| valor_pasajero | decimal | Propuesta para permitir el cálculo automático |

### Huesped

| Campo | Tipo lógico | Observación |
| --- | --- | --- |
| id_huesped | PK | Identificador interno |
| documento | texto | Propuesta; el tipo exacto debe validarse |
| nombre | texto | Dato propuesto |
| apellido | texto | Dato propuesto |
| telefono | texto | Dato opcional propuesto |
| email | texto | Dato opcional propuesto |

### Reserva

| Campo | Tipo lógico | Observación |
| --- | --- | --- |
| id_reserva | PK | Identificador de la reserva |
| id_habitacion | FK | Habitación relacionada |
| id_usuario_creador | FK | Usuario que registra la reserva |
| fecha_entrada | fecha | Propuesta necesaria para reservar |
| fecha_salida | fecha | Propuesta necesaria para reservar |
| estado | texto | Estado por validar |
| fecha_creacion | fecha/hora | Registro de creación |

### Reserva_Huesped

Tabla intermedia que permite relacionar una reserva con uno o más huéspedes.

### Estadia

| Campo | Tipo lógico | Observación |
| --- | --- | --- |
| id_estadia | PK | Identificador de estadía |
| id_reserva | FK opcional | Reserva de origen, cuando exista |
| id_habitacion | FK | Habitación asignada |
| id_usuario_registro | FK | Usuario que registra la operación |
| checkin | fecha/hora | Inicio de estadía |
| checkout | fecha/hora | Salida, cuando se complete |
| total_calculado | decimal | Resultado del cálculo de costos |
| estado | texto | Activa o finalizada |

### Estadia_Huesped

Tabla intermedia que permite asociar uno o más huéspedes a una estadía.

## Relaciones principales

- Un usuario puede registrar varias reservas.
- Un usuario puede registrar varias estadías.
- Una habitación puede aparecer en distintas reservas a lo largo del tiempo.
- Una habitación puede aparecer en distintas estadías a lo largo del tiempo.
- Una reserva puede relacionarse con uno o más huéspedes.
- Una estadía puede relacionarse con uno o más huéspedes.
- Una estadía puede originarse desde una reserva, pero también se deja abierta la posibilidad de un check-in sin reserva previa.

## Normalización

La propuesta sigue los criterios trabajados en clases:

- **1FN:** cada campo mantiene un valor atómico.
- **2FN:** los atributos de cada tabla dependen de su clave primaria.
- **3FN:** se separan entidades para que los atributos no clave dependan de la entidad representada y se evite duplicación innecesaria.
- Las relaciones de varios huéspedes con reservas o estadías se resuelven mediante tablas intermedias.

## Decisiones que no vienen definidas en el caso

El número de habitación, los datos personales exactos del huésped, los estados de las reservas y el valor utilizado para calcular costos son propuestas necesarias para completar el modelo. Deben validarse antes de una implementación real.

## Diagrama y script

- [Diagrama del modelo de datos](../diagramas/modelo-datos.svg)
- [Script SQL de referencia](../database/schema.sql)
