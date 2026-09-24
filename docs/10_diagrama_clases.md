# 10 - Diagrama de clases

Este diagrama se agregó como material complementario porque los archivos de clases trabajan la representación de objetos mediante **nombre de clase, atributos y operaciones**.

No reemplaza el diagrama de base de datos y no se presenta como entregable obligatorio de la Evaluación 2.

## Clases utilizadas

- Usuario.
- Administrador.
- EncargadoHotel.
- Huesped.
- Habitacion.
- Reserva.
- Estadia.

## Decisiones de modelado

- Administrador y EncargadoHotel heredan de Usuario.
- Habitacion se relaciona con reservas y estadías.
- EncargadoHotel gestiona reservas y registra estadías.
- Huesped se relaciona con las operaciones de alojamiento.
- Se muestran multiplicidades para representar cuántos objetos pueden participar en las relaciones.

[Ver diagrama de clases](../diagramas/diagrama-clases.svg)
