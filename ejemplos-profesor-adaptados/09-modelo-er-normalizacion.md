# Ejemplo de normalización aplicado al Hotel Duerme Bien

## 1NF

Los campos deben ser atómicos.

Ejemplo: no guardar varios huéspedes en una sola celda. Cada dato debe tener un valor individual.

## 2NF

Todos los atributos no clave deben depender de la clave primaria.

Ejemplos:

- capacidad y orientación dependen de `id_habitacion`;
- nombre del huésped depende de `id_huesped`;
- datos de reserva dependen de `id_reserva`.

## 3NF

Los atributos no clave deben ser independientes entre sí y depender de la PK.

Por eso se separan entidades como:

- Usuario;
- Habitacion;
- Huesped;
- Reserva;
- Estadia;
- tablas intermedias para relaciones de varios huéspedes.

[Ver esquema visual](09-normalizacion.svg)
