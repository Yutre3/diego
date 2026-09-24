# 10 - Construcción del diagrama de clases paso a paso

Este documento adapta la estructura de la guía de diagramas de clase al Sistema de Pasajeros del Hotel Duerme Bien.

Se mantiene como **material complementario**, porque la pauta de Evaluación 2 exige casos de uso, flujo, base de datos, mockups y Kanban, pero no enumera el diagrama de clases como entrega obligatoria.

## Contexto

El Hotel Duerme Bien necesita reemplazar el uso de planillas Excel por un sistema que permita gestionar habitaciones, huéspedes, reservas y procesos de entrada y salida.

Para aplicar programación orientada a objetos se identifican clases que representan los elementos principales del sistema y clases de apoyo para autenticación, validación, seguridad e informes.

## Requisitos del sistema utilizados para el ejercicio

### Registro de huéspedes

El sistema debe permitir registrar huéspedes y mantener sus datos.

### Gestión de habitaciones

El sistema debe manejar habitaciones, capacidad, orientación y estado.

### Gestión de reservas

El sistema debe permitir registrar y mantener reservas, asociadas a huéspedes y habitaciones.

### Check-in y check-out

El sistema debe registrar la entrada, asignar habitación, registrar la salida y liberar la habitación.

### Cálculo de costos

El sistema debe calcular automáticamente los costos por pasajero. La fórmula exacta no está definida en el caso.

### Gestión de usuarios

El sistema considera administrador y encargados de hotel.

### Generación de informes

Se requieren informes de ocupación y reservas.

### Autenticación y autorización

Se agrega como propuesta técnica para poder diferenciar perfiles de usuario.

### Seguridad de datos

Se agrega como consideración técnica complementaria por tratarse de información de usuarios y huéspedes.

### Validación de entradas

Se agrega una clase de validación siguiendo el ejercicio de la guía, para evitar datos incompletos o con formato inválido.

## Consideraciones técnicas

- Utilizar clases para representar los elementos del sistema.
- Utilizar herencia cuando una clase sea una especialización de otra.
- Representar relaciones y multiplicidades.
- Separar funciones de validación, autenticación y seguridad.
- Mantener la persistencia en una base de datos.
- Diseñar una interfaz para que los usuarios interactúen con el sistema.

# Construcción del diagrama de clases paso a paso

## 1. Clase Huesped

**Atributos:** idHuesped, documento, nombre, apellido, telefono, email.

**Métodos:** actualizarDatos(), obtenerDatos().

**Descripción:** representa a una persona registrada para alojarse en el hotel.

## 2. Clase Habitacion

**Atributos:** idHabitacion, numero, capacidad, orientacion, estado, valorPasajero.

**Métodos:** estaDisponible(), cambiarEstado(), actualizarDatos().

**Relación con Reserva y Estadia:** una habitación puede participar en varias reservas y estadías a lo largo del tiempo.

## 3. Clase Reserva

**Atributos:** idReserva, fechaEntrada, fechaSalida, estado.

**Métodos:** crear(), modificar(), cancelar(), confirmar().

**Relación con Huesped:** una reserva puede tener uno o más huéspedes.

**Relación con Habitacion:** una reserva utiliza una habitación.

## 4. Clase Estadia

**Atributos:** idEstadia, checkIn, checkOut, totalCalculado, estado.

**Métodos:** registrarCheckIn(), calcularCosto(), finalizarCheckOut().

**Relación con Huesped:** una estadía puede incluir uno o más huéspedes.

**Relación con Habitacion:** una estadía ocupa una habitación.

## 5. Clase Usuario

**Atributos:** idUsuario, nombre, username, passwordHash, rol.

**Métodos:** iniciarSesion(), cerrarSesion().

**Descripción:** representa a cualquier usuario del sistema.

## 6. Clase Administrador (hereda de Usuario)

**Métodos:** gestionarUsuarios(), gestionarHabitaciones(), generarInforme().

**Descripción:** especialización de Usuario con permisos administrativos.

## 7. Clase Informe

**Atributos:** idInforme, tipo, fechaGeneracion.

**Métodos:** generarInformeOcupacion(), generarInformeReservas().

**Relación con Administrador:** el administrador puede generar informes.

## 8. Clase SistemaAutenticacion

**Métodos:** autenticarUsuario(username, password), autorizarUsuario(usuario, permiso).

**Relación con Usuario:** los usuarios utilizan el sistema de autenticación para acceder.

## 9. Clase SistemaEncriptacion

**Métodos:** cifrarDatos(datos), descifrarDatos(datosCifrados).

**Relación con SistemaAutenticacion:** se utiliza como apoyo para proteger credenciales u otra información sensible.

## 10. Clase ValidacionEntrada

**Métodos:** validarTexto(texto), validarNumero(numero), validarFecha(fecha), validarRangoFechas(inicio, fin).

**Relación:** se utiliza en formularios de huéspedes, reservas, habitaciones y estadías.

# Resumen de las relaciones

## 1. Agregación

- Reserva → Huesped: una reserva agrupa huéspedes, pero el huésped puede existir independientemente.
- Estadia → Huesped: una estadía agrupa huéspedes registrados.

## 2. Composición

No se fuerza una composición entre entidades del negocio porque el caso no establece que la eliminación de una entidad deba destruir automáticamente otra. La guía explica esta relación, pero para el hotel se mantiene el modelo conservador.

## 3. Herencia

- Administrador hereda de Usuario.
- EncargadoHotel puede modelarse como otra especialización de Usuario.

## 4. Asociaciones

- Usuario → SistemaAutenticacion.
- SistemaAutenticacion → SistemaEncriptacion.
- Administrador → Informe.
- Reserva → Habitacion.
- Estadia → Habitacion.
- Formularios del sistema → ValidacionEntrada.

# Desarrollando cardinalidad

## 1. Habitacion ↔ Reserva

- Lado Habitacion: 1.
- Lado Reserva: 0..*.
- Representación: **1 Habitacion ↔ 0..* Reserva**.

## 2. Habitacion ↔ Estadia

- Lado Habitacion: 1.
- Lado Estadia: 0..*.
- Representación: **1 Habitacion ↔ 0..* Estadia**.

## 3. Reserva ↔ Huesped

- Una reserva puede incluir 1..* huéspedes.
- Un huésped puede aparecer en 0..* reservas a lo largo del tiempo.
- En base de datos se resuelve con `Reserva_Huesped`.

## 4. Estadia ↔ Huesped

- Una estadía puede incluir 1..* huéspedes.
- Un huésped puede tener 0..* estadías a lo largo del tiempo.
- En base de datos se resuelve con `Estadia_Huesped`.

## 5. Usuario ↔ SistemaAutenticacion

- Muchos usuarios utilizan un único servicio de autenticación.
- Representación conceptual: **0..* Usuario → 1 SistemaAutenticacion**.

## 6. Administrador ↔ Informe

- Un administrador puede generar 0..* informes.
- Un informe es generado por un usuario autorizado.

## 7. SistemaAutenticacion ↔ SistemaEncriptacion

- Un sistema de autenticación utiliza un servicio de encriptación.
- Representación conceptual: **1 → 1**.

## 8. Formularios / entidades ↔ ValidacionEntrada

- Muchos formularios pueden utilizar el mismo componente de validación.

## 9. Relación de herencia Usuario ↔ Administrador

La herencia no necesita una multiplicidad expresada como asociación normal. Un Administrador es un tipo de Usuario.

## Diagramas

- [Diagrama de clases simplificado](../diagramas/diagrama-clases.svg)
- [Diagrama de clases completo basado en la guía](../diagramas/diagrama-clases-completo.svg)
