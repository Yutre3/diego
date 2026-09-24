# 09 - Normalización aplicada al sistema del hotel

En el material de clases la normalización se trabaja en tres niveles: 1NF, 2NF y 3NF. Para este proyecto se aplicó el mismo criterio al tema del Hotel Duerme Bien.

## Datos sin normalizar

Si toda la información se guardara en una sola tabla, podría terminar mezclando datos de huésped, habitación, reserva y estadía:

| idRegistro | huésped | documento | habitación | capacidad | orientación | fechaEntrada | fechaSalida | estadoReserva | checkIn | checkOut | costo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Este tipo de estructura provoca repetición porque los datos de una habitación y de un huésped aparecerían nuevamente cada vez que exista una reserva o estadía.

## Primera Forma Normal (1NF)

Cada campo debe contener un valor atómico.

Por ejemplo, no se guarda una lista de pasajeros dentro de un solo campo. Los huéspedes se registran individualmente y luego se relacionan con la reserva o estadía mediante tablas intermedias.

## Segunda Forma Normal (2NF)

Los atributos no clave deben depender de la clave primaria de la tabla.

Por eso:

- la capacidad y orientación dependen de `id_habitacion`;
- nombre y documento dependen de `id_huesped`;
- fechas y estado de una reserva dependen de `id_reserva`;
- check-in, check-out y total dependen de `id_estadia`.

## Tercera Forma Normal (3NF)

Los atributos no clave se mantienen en la entidad a la que pertenecen y no se duplican entre tablas.

El modelo queda separado en:

- `Usuario`
- `Habitacion`
- `Huesped`
- `Reserva`
- `Reserva_Huesped`
- `Estadia`
- `Estadia_Huesped`

Las tablas intermedias permiten resolver la relación de varios huéspedes con una reserva o con una estadía sin guardar listas dentro de un campo.

## Resultado

La separación disminuye datos repetidos y facilita actualizar un huésped o una habitación sin tener que modificar múltiples registros.

[Ver esquema gráfico de normalización](../diagramas/normalizacion-hotel.svg)
