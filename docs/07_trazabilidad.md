# 07 - Matriz de trazabilidad

La matriz permite comprobar que los requerimientos identificados tengan una representación en el modelado o en la interfaz.

| Requisito | Caso de uso relacionado | Datos principales | Pantalla / evidencia |
| --- | --- | --- | --- |
| RF-01 Registrar habitaciones | CU-01 Gestionar habitaciones | Habitacion | Panel / gestión de habitaciones |
| RF-02 Registrar huéspedes | CU-03 Registrar huésped | Huesped | Check-in |
| RF-03 Asignar huéspedes a habitaciones | CU-07 Asignar habitación | Estadia, Estadia_Huesped, Habitacion | Check-in |
| RF-04 Controlar ocupación y disponibilidad | CU-04 Consultar disponibilidad | Habitacion, Reserva, Estadia | Panel / reservas / check-in |
| RF-05 Gestionar reservas | CU-05 Gestionar reserva | Reserva, Reserva_Huesped, Habitacion | Reservas |
| RF-06 Realizar check-in | CU-06 Realizar check-in | Estadia, Huesped, Habitacion | Check-in / flujo |
| RF-07 Realizar check-out | CU-08 Realizar check-out | Estadia, Habitacion | Check-out |
| RF-08 Calcular costo por pasajero | CU-09 Calcular costo | Habitacion, Estadia | Check-out |
| RF-09 Gestionar usuarios | CU-02 Gestionar usuarios | Usuario | Acceso / administración |
| RF-10 Generar informes | CU-11 Generar informes | Reserva, Estadia, Habitacion | Panel / informes |
| RF-11 Identificar usuario y perfil | CU-12 Iniciar sesión | Usuario | Inicio de sesión |

## Pendientes de trazabilidad

La retroalimentación real de la Evaluación 1 todavía no está disponible. Si el docente modifica, elimina o agrega requerimientos, esta matriz debe actualizarse junto con los diagramas y mockups relacionados.
