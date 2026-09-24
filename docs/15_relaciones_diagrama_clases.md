# 15 - Relaciones de diagramas de clase

El material de diagramas de clase presenta varios tipos de relaciones. A continuación se indica cómo se interpretan y si se utilizan en el modelo del hotel.

## Asociación

Representa una conexión lógica entre clases.

**Aplicación:** Habitacion se asocia con Reserva y Estadia.

## Asociación dirigida

Representa una relación donde interesa mostrar dirección.

**Aplicación complementaria:** EncargadoHotel gestiona Reserva y registra Estadia.

## Asociación reflexiva

Una clase se relaciona consigo misma.

**Aplicación en el hotel:** el Caso 6 no entrega una relación de este tipo, por lo que no se utiliza en el modelo oficial.

## Multiplicidad

Indica cuántas instancias de una clase se relacionan con otra.

Ejemplos del hotel:

- Habitacion 1 ↔ 0..* Reserva.
- Habitacion 1 ↔ 0..* Estadia.
- Reserva 1 ↔ 1..* Huesped, resuelto con una tabla intermedia.
- Estadia 1 ↔ 1..* Huesped, resuelto con una tabla intermedia.

## Agregación

Representa una relación todo-parte donde la parte puede existir independientemente.

**Aplicación propuesta:** una Reserva puede agrupar huéspedes registrados. El huésped sigue existiendo aunque la reserva sea cancelada.

## Composición

Representa una relación fuerte de ciclo de vida.

**Aplicación en el hotel:** no se utiliza como relación oficial porque el caso no establece una dependencia de ciclo de vida que justifique eliminar una entidad automáticamente con otra.

## Herencia / Generalización

Una clase especializada hereda características de otra.

**Aplicación propuesta:**

- Usuario → Administrador.
- Usuario → EncargadoHotel.

## Realización

Representa que una clase implementa una funcionalidad definida por una interfaz o abstracción.

**Aplicación en el hotel:** no es necesaria para los entregables del Caso 6. Puede utilizarse más adelante si se definen interfaces de servicio durante la programación.

## Criterio

No se agregan relaciones solo para usar todas las notaciones. Cuando el caso no respalda una relación, se documenta como no utilizada en vez de inventarla.

[Ver diagrama de clases completo](../diagramas/diagrama-clases-completo.svg)
