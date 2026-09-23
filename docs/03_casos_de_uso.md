# 03 - Casos de uso

## Actores

### Administrador
Administra usuarios y habitaciones, además de consultar información e informes.

### Encargado de hotel
Opera reservas, disponibilidad, huéspedes, check-in y check-out.

## Casos de uso principales

| ID | Caso de uso | Actor |
|---|---|---|
| CU-01 | Iniciar sesión | Administrador / Encargado |
| CU-02 | Gestionar habitaciones | Administrador |
| CU-03 | Gestionar usuarios | Administrador |
| CU-04 | Consultar disponibilidad | Encargado |
| CU-05 | Gestionar reservas | Encargado |
| CU-06 | Registrar huésped | Encargado |
| CU-07 | Realizar check-in | Encargado |
| CU-08 | Asignar habitación | Encargado |
| CU-09 | Calcular costo | Encargado |
| CU-10 | Realizar check-out | Encargado |
| CU-11 | Liberar habitación | Encargado |
| CU-12 | Generar informes | Administrador |

## Relaciones include

- Gestionar reservas incluye Consultar disponibilidad.
- Realizar check-in incluye Consultar disponibilidad.
- Realizar check-in incluye Registrar huésped.
- Realizar check-in incluye Asignar habitación.
- Realizar check-out incluye Calcular costo.
- Realizar check-out incluye Liberar habitación.

No se agregaron relaciones extend sin una condición opcional respaldada por el caso.

## Check-in

**Actor:** Encargado de hotel.

**Precondición:** usuario autenticado y habitación disponible.

**Flujo:**
1. Buscar una reserva o iniciar check-in.
2. Consultar disponibilidad.
3. Registrar o verificar al huésped.
4. Asignar habitación.
5. Registrar estadía.
6. Marcar habitación como ocupada.

## Check-out

**Actor:** Encargado de hotel.

**Precondición:** existe una estadía activa.

**Flujo:**
1. Seleccionar estadía.
2. Calcular costo.
3. Confirmar check-out.
4. Registrar salida.
5. Liberar habitación.
