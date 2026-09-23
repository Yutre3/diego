# Día 5 - Modelo de datos y normalización

## Registro del avance
- **Fecha de documentación en GitHub:** 23/09/2026
- **Hora de registro:** 16:52:34 (Chile, UTC-03:00)
- **Autor del commit:** Yutre3
- **Commit de creación de esta jornada:** `a38fe772fb43dcb2ec6e26db8ba5944bddd5c3e9`
- **Tipo de registro:** reconstrucción documentada del proceso ya desarrollado
- **Fecha/hora original de realización fuera de GitHub:** no registrada

> La fecha y hora anteriores corresponden al registro real del commit en GitHub. No se inventaron fechas anteriores para simular trabajo realizado en otros días.

## Objetivo
Definir cómo se almacenará la información del sistema.

## Qué se hizo
Se propusieron las entidades:
- Usuario;
- Habitación;
- Huésped;
- Reserva;
- Reserva_Huésped;
- Estadía;
- Estadía_Huésped.

Se definieron claves primarias y foráneas y se resolvieron las relaciones muchos-a-muchos mediante tablas puente.

También se preparó un script SQL de referencia.

## Normalización
El modelo se organizó para usar campos atómicos, hacer que los atributos dependan de su clave, evitar duplicación innecesaria y separar conceptos diferentes en entidades diferentes.

## Archivos relacionados
- docs/05_modelo_datos.md
- database/schema.sql
- diagramas/fuentes_dot/modelo_er.dot

## Resultado
Quedó una propuesta coherente de modelo relacional normalizado.

## Pendiente
Diseñar la interfaz del usuario.

## Cómo explicarlo
"Separamos habitaciones, huéspedes, reservas y estadías para no repetir datos. Las tablas puente resuelven las relaciones donde una reserva o estadía puede involucrar más de un huésped."
