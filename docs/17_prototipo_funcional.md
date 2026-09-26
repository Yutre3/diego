# 17 - Cómo presentar y explicar el prototipo

## Por qué se creó

El material de Sketch, Wireframe, Mockup y Prototipo explica que el prototipo es la etapa que agrega interacción. A diferencia del mockup, debe permitir probar navegación, botones, formularios, estados y comportamiento.

Por eso el prototipo del Hotel Duerme Bien no es solamente una imagen.

## Recorrido para mostrar al profesor

1. Entrar por `login.html`.
2. Abrir Habitaciones y registrar una nueva.
3. Abrir Huéspedes y registrar un pasajero.
4. Crear una reserva.
5. Realizar el check-in.
6. Volver a Habitaciones para mostrar que cambió a OCUPADA.
7. Realizar el check-out.
8. Volver a Habitaciones para mostrar que quedó DISPONIBLE.
9. Abrir Informes para mostrar el resultado.
10. Abrir Ayuda / Demo para explicar las decisiones del prototipo.

## Qué demuestra cada página

### Login

Demuestra un acceso simulado para diferenciar administrador y encargado.

### Inicio

Resume ocupación, disponibilidad, reservas y huéspedes.

### Habitaciones

Trabaja directamente con dos características indicadas en el Caso 6: capacidad y orientación. También permite demostrar el control de disponibilidad.

### Huéspedes

Permite registrar pasajeros que posteriormente pueden utilizarse en una reserva.

### Reservas

Relaciona huésped y habitación. Valida que la fecha de salida sea posterior a la entrada y que la cantidad de pasajeros respete la capacidad.

### Check-in

Toma una reserva confirmada, crea una estadía y cambia la habitación a OCUPADA.

### Check-out

Finaliza la estadía y devuelve la habitación a DISPONIBLE.

El cálculo mostrado es demostrativo porque la fórmula oficial no aparece en el Caso 6.

### Informes

Muestra información de ocupación, reservas, huéspedes y estadías.

## Preguntas posibles

**¿Cuál es la diferencia entre mockup y prototipo?**

El mockup representa principalmente la apariencia visual. El prototipo permite interacción y navegación.

**¿Por qué usaste HTML, CSS y JavaScript?**

Porque el material indica que un prototipo web puede construirse como una aplicación prácticamente funcional con tecnologías web.

**¿El prototipo utiliza una base de datos real?**

No. Para esta etapa utiliza localStorage en el navegador. El modelo de base de datos real está definido por separado en la documentación.

**¿Por qué el costo usa una tarifa de demostración?**

Porque el caso exige cálculo automático pero no entrega la fórmula ni tarifa exacta.

**¿Qué requerimiento demuestra el check-in?**

El proceso de check-in y asignación de habitación, además del control de ocupación.

**¿Qué requerimiento demuestra el check-out?**

El proceso de salida y liberación de habitación.

**¿Qué pasa si se ingresan más pasajeros que la capacidad?**

La reserva se rechaza y muestra un mensaje de validación.

**¿Qué pasa después del check-in?**

Se crea una estadía activa y la habitación pasa a estado OCUPADA.

**¿Qué pasa después del check-out?**

La estadía queda FINALIZADA y la habitación vuelve a DISPONIBLE.

## Archivos principales

- `prototipo-web/styles.css`: apariencia visual y responsive.
- `prototipo-web/app.js`: lógica, validaciones y localStorage.
- Los archivos HTML: una página por módulo.

## Estado de publicación

Se preparó una rama `gh-pages` con un acceso inicial al prototipo. GitHub Pages necesita estar habilitado en la configuración del repositorio para que la dirección pública funcione.
