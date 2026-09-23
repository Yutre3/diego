# 02 - Reglas de negocio y supuestos

## Reglas derivadas del caso

- RN-01: una habitación ocupada no debe mostrarse como disponible.
- RN-02: al realizar un check-in, la habitación asignada debe quedar ocupada.
- RN-03: al realizar un check-out, la habitación debe quedar liberada.
- RN-04: una reserva debe asociarse a una habitación y a uno o más huéspedes/pasajeros registrados.
- RN-05: solo los usuarios autorizados deben operar el sistema según su perfil.
- RN-06: los informes deben construirse con información registrada de ocupación y reservas.

## Supuestos de diseño propuestos

Estos puntos no aparecen definidos de forma explícita en el caso base:

- SP-01: cada habitación posee una tarifa por noche.
- SP-02: una reserva mantiene fecha de entrada, fecha de salida y estado.
- SP-03: una misma habitación no puede tener dos reservas activas superpuestas.
- SP-04: el sistema registra qué usuario creó una reserva o estadía.
- SP-05: una reserva puede convertirse en estadía al realizar el check-in.

Estos supuestos deben validarse con el docente antes de considerarlos reglas definitivas.
