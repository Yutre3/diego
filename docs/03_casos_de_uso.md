# 03 - Casos de uso

## Actores

### Administrador

Usuario relacionado con la gestión de usuarios, habitaciones e informes.

### Encargado de hotel

Usuario que realiza las operaciones habituales con huéspedes, reservas, disponibilidad, check-in y check-out.

El caso no entrega una matriz exacta de permisos, por lo que la distribución anterior corresponde a una propuesta coherente con los perfiles indicados y debe validarse.

## Casos de uso identificados

| ID | Caso de uso | Actor principal |
| --- | --- | --- |
| CU-01 | Gestionar habitaciones | Administrador |
| CU-02 | Gestionar usuarios | Administrador |
| CU-03 | Registrar huésped | Encargado de hotel |
| CU-04 | Consultar disponibilidad | Encargado de hotel |
| CU-05 | Gestionar reserva | Encargado de hotel |
| CU-06 | Realizar check-in | Encargado de hotel |
| CU-07 | Asignar habitación | Encargado de hotel |
| CU-08 | Realizar check-out | Encargado de hotel |
| CU-09 | Calcular costo | Encargado de hotel |
| CU-10 | Liberar habitación | Encargado de hotel |
| CU-11 | Generar informes | Administrador |
| CU-12 | Iniciar sesión | Administrador / Encargado de hotel |

CU-12 se considera una función de apoyo propuesta, porque el caso habla de gestión de usuarios y perfiles pero no describe explícitamente el mecanismo de inicio de sesión.

## Relaciones `<<include>>`

Se utilizan solo cuando la función incluida es necesaria para completar la función principal.

- **Gestionar reserva** incluye **Consultar disponibilidad**.
- **Realizar check-in** incluye **Asignar habitación**.
- **Asignar habitación** incluye **Consultar disponibilidad**.
- **Realizar check-out** incluye **Calcular costo**.
- **Realizar check-out** incluye **Liberar habitación**.

No se dejó **Registrar huésped** como `<<include>>` de check-in, porque un huésped podría encontrarse registrado previamente. Dejarlo como caso separado evita marcar como obligatorio un paso que no necesariamente se ejecutará en todos los check-in.

No se utilizan relaciones `<<extend>>` porque el caso no entrega una función opcional concreta que justifique esa relación.

## CU-05 - Gestionar reserva

**Actor:** Encargado de hotel.

**Objetivo:** registrar o mantener una reserva utilizando la disponibilidad de habitaciones.

**Flujo principal:**

1. El encargado ingresa al módulo de reservas.
2. Indica las fechas necesarias.
3. El sistema consulta la disponibilidad.
4. El encargado selecciona una habitación disponible.
5. Se relaciona la reserva con el huésped o huéspedes correspondientes.
6. El sistema guarda la reserva.

**Situaciones por validar:** modificación, cancelación y estados definitivos de una reserva.

## CU-06 - Realizar check-in

**Actor:** Encargado de hotel.

**Precondición:** debe existir una habitación que pueda asignarse.

**Flujo principal:**

1. El encargado identifica al huésped y, si corresponde, su reserva.
2. Se inicia la asignación de habitación.
3. El sistema consulta la disponibilidad.
4. Se selecciona una habitación adecuada.
5. Se registra la estadía.
6. La habitación queda registrada como ocupada.

## CU-08 - Realizar check-out

**Actor:** Encargado de hotel.

**Precondición:** debe existir una estadía activa.

**Flujo principal:**

1. El encargado selecciona la estadía.
2. El sistema calcula el costo correspondiente.
3. Se confirma la salida.
4. Se registra el check-out.
5. La habitación queda liberada.

## Diagrama

La representación gráfica está en [diagramas/casos-de-uso.svg](../diagramas/casos-de-uso.svg).
