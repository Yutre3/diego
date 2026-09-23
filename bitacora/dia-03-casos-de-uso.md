# Día 3 - Casos de uso

## Registro del avance
- **Fecha de documentación en GitHub:** 23/09/2026
- **Hora de registro:** 16:47:44 (Chile, UTC-03:00)
- **Autor del commit:** Yutre3
- **Commit de creación de esta jornada:** `bfc964b8897293cd4459a7b1c066f2463b0f1560`
- **Tipo de registro:** reconstrucción documentada del proceso ya desarrollado
- **Fecha/hora original de realización fuera de GitHub:** no registrada

> La fecha y hora anteriores corresponden al registro real del commit en GitHub. No se inventaron fechas anteriores para simular trabajo realizado en otros días.

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
