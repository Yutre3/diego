# Día 3 - Casos de uso

## Objetivo
Representar quién usa el sistema y qué acciones realiza.

## Qué se hizo
Se identificaron dos actores principales:
- Administrador.
- Encargado de hotel.

Se definieron los casos de uso:
- iniciar sesión;
- gestionar habitaciones;
- gestionar usuarios;
- consultar disponibilidad;
- gestionar reservas;
- registrar huésped;
- realizar check-in;
- asignar habitación;
- calcular costo;
- realizar check-out;
- liberar habitación;
- generar informes.

Se documentaron relaciones <<include>> cuando una función es necesaria dentro de otra.

## Decisiones
No se agregaron <<extend>> sin una condición opcional clara respaldada por el caso.

## Archivos relacionados
- docs/03_casos_de_uso.md
- diagramas/fuentes_dot/casos_de_uso.dot

## Resultado
Quedó modelada la interacción entre usuarios y funciones del sistema.

## Pendiente
Representar el flujo de los procesos principales.

## Cómo explicarlo
"Después de los requerimientos identificamos los actores y sus acciones. Usamos include cuando una acción es obligatoria dentro de otra, por ejemplo check-out incluye calcular el costo y liberar la habitación."
