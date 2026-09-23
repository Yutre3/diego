# 02 - Reglas de negocio y supuestos

Las reglas se separan entre lo que se puede obtener directamente del caso y lo que todavía necesita validación.

## Reglas derivadas del caso

| ID | Regla |
| --- | --- |
| RN-01 | Una habitación marcada como ocupada no debe aparecer como disponible para una nueva asignación. |
| RN-02 | Al completar un check-in debe quedar registrada la habitación asignada al huésped. |
| RN-03 | Al completar un check-out la habitación utilizada debe quedar liberada. |
| RN-04 | La ocupación de una habitación debe respetar su capacidad registrada. |
| RN-05 | El sistema debe mantener información de ocupación y disponibilidad coherente con las reservas y estadías registradas. |
| RN-06 | El costo por pasajero debe calcularse automáticamente. |
| RN-07 | El sistema debe considerar usuarios de tipo administrador y encargado de hotel. |
| RN-08 | Los informes deben utilizar la información registrada de ocupación y reservas. |

## Supuestos que deben validarse

Estos puntos son útiles para completar el diseño, pero no aparecen definidos de forma exacta en el caso:

| ID | Supuesto |
| --- | --- |
| SP-01 | Cada habitación tendrá un número o identificador único. |
| SP-02 | Las reservas tendrán fecha de entrada, fecha de salida y un estado. |
| SP-03 | No se permitirán reservas activas que se superpongan para la misma habitación. |
| SP-04 | Se registrará qué usuario realizó una reserva o una operación de check-in/check-out. |
| SP-05 | Una reserva podrá utilizarse como base para iniciar el check-in. |
| SP-06 | Se almacenará un valor o tarifa que permita realizar el cálculo automático de costos. |

## Punto pendiente sobre los costos

El enunciado exige cálculo automático de costos por pasajero, pero no entrega una fórmula. Por esa razón el modelo puede guardar un valor de referencia para realizar el cálculo, pero la regla exacta no se considera definitiva hasta que sea validada.

## Criterio utilizado

No se convierten los supuestos anteriores en requisitos oficiales. Se mantienen identificados por separado para que puedan modificarse cuando exista nueva información o retroalimentación del docente.
