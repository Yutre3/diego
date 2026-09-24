# 09 - Normalización aplicada al sistema del hotel

El material de base de datos presenta la normalización como un proceso para organizar los datos, evitar redundancia, reducir problemas de actualización y mantener dependencias correctas. Se trabajan 1NF, 2NF y 3NF.

La misma secuencia se aplica al Hotel Duerme Bien.

## Ejemplo inicial: datos mezclados

Una estructura sin normalizar podría intentar guardar todo en una sola tabla:

| CodRegistro | Pasajero | Documento | Habitación | Capacidad | Orientación | Entrada | Salida | EstadoReserva | CheckIn | CheckOut | Costo | Usuario |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Problemas:

- se repiten datos de la habitación en cada reserva o estadía;
- se repiten datos del huésped;
- cambiar un dato obliga a modificar varios registros;
- una celda podría terminar almacenando varios pasajeros;
- se mezclan datos que pertenecen a entidades distintas.

## 1ra Forma Normal (1NF)

La regla aplicada es: **campos atómicos**.

No se guarda una lista de pasajeros dentro de una sola columna.

Se separa cada dato en un único valor y cada huésped tiene su propio registro.

Ejemplo:

### Huesped

| id_huesped | documento | nombre | apellido |
| --- | --- | --- | --- |
| 1 | DOC-001 | Ana | Pérez |
| 2 | DOC-002 | Luis | Soto |

### Habitacion

| id_habitacion | numero | capacidad | orientacion |
| --- | --- | --- | --- |
| 1 | 201 | 2 | Norte |
| 2 | 305 | 3 | Sur |

## 2da Forma Normal (2NF)

La regla aplicada es: **todos los atributos no clave dependen de la PK**.

Por eso:

- `capacidad` y `orientacion` dependen de `id_habitacion`;
- `nombre` y `documento` dependen de `id_huesped`;
- fechas y estado de reserva dependen de `id_reserva`;
- check-in, check-out y total dependen de `id_estadia`.

Los datos del huésped no se guardan dentro de la tabla Habitacion, y los datos de la habitación no se repiten dentro de Huesped.

## 3ra Forma Normal (3NF)

La regla aplicada es: los atributos no clave deben ser independientes entre sí y depender de la clave primaria de la entidad a la que pertenecen.

El modelo final queda separado en:

- `Usuario`
- `Habitacion`
- `Huesped`
- `Reserva`
- `Reserva_Huesped`
- `Estadia`
- `Estadia_Huesped`

Las relaciones de varios huéspedes con una reserva o estadía se resuelven mediante tablas intermedias.

## Relaciones resultantes

- Usuario 1 → 0..* Reserva.
- Usuario 1 → 0..* Estadia.
- Habitacion 1 → 0..* Reserva.
- Habitacion 1 → 0..* Estadia.
- Reserva 1 → 1..* Reserva_Huesped.
- Huesped 1 → 0..* Reserva_Huesped.
- Estadia 1 → 1..* Estadia_Huesped.
- Huesped 1 → 0..* Estadia_Huesped.

## Resultado

La información queda dividida por entidad, disminuye la repetición y permite actualizar huéspedes, habitaciones, reservas o estadías de forma independiente.

- [Esquema gráfico de normalización](../diagramas/normalizacion-hotel.svg)
- [Modelo de datos](../diagramas/modelo-datos.svg)
- [Script SQL](../database/schema.sql)
