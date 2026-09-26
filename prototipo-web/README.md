# Prototipo funcional - Hotel Duerme Bien

Este prototipo está construido a partir del **Caso 6: Sistema de Pasajeros de Hotel** y del material de **Sketch, Wireframe, Mockup y Prototipo** entregado en clases.

## Qué viene directamente del Caso 6

El caso define:

- registro de habitaciones;
- características de habitación: capacidad y orientación;
- registro de huéspedes con asignación a habitaciones;
- control de ocupación y disponibilidad;
- cálculo automático de costos por pasajero;
- gestión de usuarios: administrador y encargados de hotel;
- informes de ocupación y reservas;
- proceso de check-in y asignación de habitaciones;
- proceso de check-out y liberación de habitaciones;
- proceso de registro y gestión de reservas.

## Qué se tomó del material de prototipos

El material indica que el proceso puede pasar por:

1. Sketch.
2. Wireframe.
3. Mockup.
4. Prototipo.

También señala que el prototipo debe poder utilizarse para probar navegación, interacción, botones y validaciones. Por eso esta versión contiene páginas navegables y formularios funcionales.

## Páginas del prototipo

| Página | Base en el material |
| --- | --- |
| [login.html](login.html) | Los perfiles administrador/encargado vienen del Caso 6. El login es solo una decisión técnica de demostración. |
| [index.html](index.html) | Resume ocupación, disponibilidad, reservas y huéspedes del Caso 6. |
| [habitaciones.html](habitaciones.html) | Registro de habitaciones, capacidad, orientación y disponibilidad. |
| [huespedes.html](huespedes.html) | Registro de huéspedes. El caso no define campos personales exactos. |
| [reservas.html](reservas.html) | Proceso de registro y gestión de reservas. |
| [checkin.html](checkin.html) | Proceso de check-in y asignación de habitación. |
| [checkout.html](checkout.html) | Proceso de check-out, liberación y demostración del cálculo por pasajero. |
| [usuarios.html](usuarios.html) | Gestión de usuarios administrador y encargados de hotel. |
| [informes.html](informes.html) | Informes de ocupación y reservas. |
| [ayuda.html](ayuda.html) | Relación visible entre el prototipo y los archivos entregados por el profesor. |

## Decisiones técnicas que NO se presentan como requisitos del caso

El Caso 6 no define:

- campos personales obligatorios del huésped;
- fórmula o tarifa exacta para los costos;
- identificador exacto de habitación;
- campos exactos de una reserva;
- estados completos de reservas;
- permisos específicos de cada rol;
- tecnología de implementación;
- mecanismo de autenticación.

Cuando el prototipo necesita alguno de esos datos para funcionar, se muestra explícitamente como **dato de demostración** o **decisión técnica**, no como requisito oficial.

## Credenciales de demostración

Administrador:

```text
usuario: admin
clave: admin123
```

Encargado:

```text
usuario: encargado
clave: hotel123
```

## Enlaces web preparados

La rama `gh-pages` está preparada para publicar estas páginas.

Dirección principal prevista:

```text
https://yutre3.github.io/diego/
```

Páginas:

```text
https://yutre3.github.io/diego/prototipo-web/login.html
https://yutre3.github.io/diego/prototipo-web/index.html
https://yutre3.github.io/diego/prototipo-web/habitaciones.html
https://yutre3.github.io/diego/prototipo-web/huespedes.html
https://yutre3.github.io/diego/prototipo-web/reservas.html
https://yutre3.github.io/diego/prototipo-web/checkin.html
https://yutre3.github.io/diego/prototipo-web/checkout.html
https://yutre3.github.io/diego/prototipo-web/usuarios.html
https://yutre3.github.io/diego/prototipo-web/informes.html
https://yutre3.github.io/diego/prototipo-web/ayuda.html
```

Si GitHub Pages no está habilitado, debe seleccionarse la rama `gh-pages` como origen desde la configuración del repositorio.
