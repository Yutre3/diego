# Prototipo funcional - Hotel Duerme Bien

Este prototipo transforma el mockup estático en una interfaz navegable. El material de clases define el prototipo como una representación que permite probar navegación, interacción, botones y validación de formularios.

## Páginas del prototipo

| Página | Qué demuestra | Código |
| --- | --- | --- |
| Inicio de sesión | Acceso simulado y perfiles | [login.html](login.html) |
| Panel principal | Resumen de ocupación, reservas y huéspedes | [index.html](index.html) |
| Habitaciones | Registro, capacidad, orientación y cambio de estado | [habitaciones.html](habitaciones.html) |
| Huéspedes | Registro y validación de documento | [huespedes.html](huespedes.html) |
| Reservas | Disponibilidad, fechas, capacidad y registro | [reservas.html](reservas.html) |
| Check-in | Crea estadía y ocupa habitación | [checkin.html](checkin.html) |
| Check-out | Finaliza estadía, calcula costo demostrativo y libera habitación | [checkout.html](checkout.html) |
| Informes | Ocupación, reservas, estadías y huéspedes | [informes.html](informes.html) |
| Ayuda / Demo | Recorrido y preguntas para explicar el prototipo | [ayuda.html](ayuda.html) |

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

Estas credenciales son solo para la simulación.

## Funciones implementadas

- Navegación entre páginas reales.
- Estado visual del menú.
- Búsqueda rápida de módulos desde el encabezado.
- Registro de habitaciones.
- Registro de huéspedes.
- Validación de documentos duplicados.
- Registro de reservas.
- Validación de fechas.
- Validación de capacidad.
- Check-in.
- Cambio automático de habitación a OCUPADA.
- Check-out.
- Liberación automática de habitación.
- Cálculo automático demostrativo.
- Informes.
- Diseño responsive.
- Mensajes de error y confirmación.
- Persistencia en localStorage.
- Reinicio de datos de prueba.

## Enlaces web preparados

El sitio está preparado en la rama `gh-pages`.

Dirección principal prevista:

```text
https://yutre3.github.io/diego/
```

Páginas previstas:

```text
https://yutre3.github.io/diego/prototipo-web/login.html
https://yutre3.github.io/diego/prototipo-web/index.html
https://yutre3.github.io/diego/prototipo-web/habitaciones.html
https://yutre3.github.io/diego/prototipo-web/huespedes.html
https://yutre3.github.io/diego/prototipo-web/reservas.html
https://yutre3.github.io/diego/prototipo-web/checkin.html
https://yutre3.github.io/diego/prototipo-web/checkout.html
https://yutre3.github.io/diego/prototipo-web/informes.html
https://yutre3.github.io/diego/prototipo-web/ayuda.html
```

Si GitHub Pages todavía no está habilitado en la configuración del repositorio, esos enlaces no publicarán hasta seleccionar la rama `gh-pages` como origen.

## Decisión sobre el cálculo del costo

El Caso 6 indica que el costo por pasajero debe calcularse automáticamente, pero no define fórmula ni tarifa. En el prototipo se utiliza una tarifa ingresada en pantalla para demostrar el cálculo automático sin presentarla como regla oficial.
