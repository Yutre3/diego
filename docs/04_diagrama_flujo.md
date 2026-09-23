# 04 - Diagrama de flujo

Para el diagrama de flujo se tomó uno de los procesos principales indicados en el caso: **check-in y asignación de habitación**.

## Flujo representado

1. Inicio del check-in.
2. Identificar al huésped.
3. Revisar si el huésped ya se encuentra registrado.
4. Registrar al huésped solo cuando sea necesario.
5. Consultar disponibilidad.
6. Verificar si existe una habitación disponible.
7. Si no existe, informar que no es posible realizar la asignación y volver a consultar.
8. Seleccionar una habitación.
9. Verificar que la capacidad sea suficiente para los pasajeros que serán asignados.
10. Registrar la estadía.
11. Marcar la habitación como ocupada.
12. Finalizar el check-in.

Este flujo se concentra en un proceso de negocio concreto en vez de mezclar en un mismo diagrama todas las funciones del sistema.

## Diagrama

[Ver diagrama de flujo de check-in](../diagramas/flujo-checkin.svg)
