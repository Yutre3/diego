# 05 - Modelo de datos

## Entidades propuestas

### Usuario
- id_usuario (PK)
- nombre
- username
- password_hash
- rol
- activo

### Habitacion
- id_habitacion (PK)
- numero
- capacidad
- orientacion
- estado
- tarifa_noche

### Huesped
- id_huesped (PK)
- documento
- nombre
- apellido
- telefono
- email

### Reserva
- id_reserva (PK)
- id_habitacion (FK)
- id_usuario_creador (FK)
- fecha_entrada
- fecha_salida
- estado
- fecha_creacion

### Reserva_Huesped
- id_reserva (PK/FK)
- id_huesped (PK/FK)

### Estadia
- id_estadia (PK)
- id_reserva (FK, opcional)
- id_habitacion (FK)
- id_usuario_registro (FK)
- checkin
- checkout
- total_calculado
- estado

### Estadia_Huesped
- id_estadia (PK/FK)
- id_huesped (PK/FK)

## Normalización

El modelo se propone en tercera forma normal:

- Campos atómicos (1FN).
- Atributos dependientes de la clave primaria (2FN).
- Entidades separadas para evitar dependencias transitivas y duplicación innecesaria (3FN).
- Relaciones muchos-a-muchos resueltas con tablas puente.

El script `database/schema.sql` implementa esta propuesta.
