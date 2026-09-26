# 17 - Cómo presentar el prototipo

## Base

El prototipo se construyó usando dos fuentes principales del material entregado:

### Definición de proyectos(1).docx

Para el Caso 6 define:

- habitaciones con capacidad y orientación;
- huéspedes con asignación;
- ocupación y disponibilidad;
- costo automático por pasajero;
- usuarios administrador y encargados;
- informes de ocupación y reservas;
- check-in;
- check-out;
- reservas.

### MOCKUP_COMPLETO(1).pdf

Indica la secuencia:

1. Sketch.
2. Wireframe.
3. Mockup.
4. Prototipo.

El material explica que el prototipo es navegable y sirve para probar interacción, botones y validación de formularios.

## Recorrido recomendado

1. Abrir el acceso de demostración.
2. Entrar como Administrador o Encargado.
3. Mostrar Habitaciones: capacidad, orientación y disponibilidad.
4. Registrar un huésped.
5. Registrar una reserva.
6. Hacer un check-in y comprobar que la habitación pasa a OCUPADA.
7. Hacer un check-out y comprobar que vuelve a DISPONIBLE.
8. Mostrar el cálculo automático demostrativo por pasajero.
9. Mostrar Usuarios: administrador y encargado.
10. Abrir Informes y enseñar ocupación y reservas.
11. Abrir Material del profesor para mostrar de dónde sale cada módulo.

## Preguntas posibles

**¿Por qué hay un login si el Caso 6 no dice “autenticación”?**

El Caso 6 sí pide gestión de usuarios administrador y encargados. El formulario de login se usa únicamente como mecanismo técnico para demostrar esos perfiles; no se presenta como requisito oficial.

**¿Por qué el huésped solo tiene nombre?**

Porque el caso no especifica documento, teléfono, correo ni otros campos obligatorios. Se usa el mínimo necesario para demostrar el registro sin inventar requerimientos.

**¿Por qué una reserva tiene fechas?**

El caso pide registrar y gestionar reservas pero no entrega sus campos. Las fechas se utilizan como datos mínimos de demostración y están marcadas como tales.

**¿Por qué el costo usa un valor ingresado?**

El caso exige cálculo automático por pasajero pero no entrega una fórmula ni tarifa. El prototipo recibe un valor de prueba por pasajero y calcula el total automáticamente para demostrar la interacción sin afirmar que esa sea la regla real.

**¿Qué hace el check-in?**

Asigna una habitación disponible y deja la habitación ocupada, siguiendo el proceso UA3 indicado.

**¿Qué hace el check-out?**

Finaliza la estadía y libera la habitación, siguiendo el proceso UA3 indicado.

**¿Qué informes aparecen?**

Solo ocupación y reservas, porque son los informes nombrados expresamente en el Caso 6.

**¿Qué diferencia hay entre mockup y prototipo?**

El mockup es una representación visual estática. El prototipo permite navegación e interacción.

## Archivos

- `prototipo-web/styles.css`: interfaz responsive.
- `prototipo-web/app.js`: interacción y validaciones.
- `prototipo-web/*.html`: páginas navegables.
- `docs/18_trazabilidad_fuentes_profesor.md`: relación completa con los materiales entregados.
