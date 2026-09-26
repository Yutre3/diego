# Guía de diagrama de clases aplicada al Hotel Duerme Bien

Este ejemplo sigue la estructura del archivo **GUIA_diagramas_de_clase(1).pdf**: contexto, requisitos, consideraciones técnicas, construcción paso a paso, resumen de relaciones y cardinalidad.

## Contexto

El Hotel Duerme Bien utiliza planillas Excel y necesita organizar la información de habitaciones y pasajeros en un sistema.

## Requisitos usados como base

- registrar habitaciones con capacidad y orientación;
- registrar huéspedes;
- asignar huéspedes a habitaciones;
- controlar ocupación y disponibilidad;
- gestionar reservas;
- realizar check-in y check-out;
- calcular costos por pasajero;
- gestionar usuarios administrador y encargado;
- generar informes de ocupación y reservas.

## Consideraciones técnicas

El material de la guía utiliza programación orientada a objetos, clases, herencia, relaciones, base de datos, interfaz, autenticación y validación. En este ejemplo se aplican como **modelo complementario**; no se presentan como requisitos obligatorios del Caso 6 cuando el enunciado no los define.

## Construcción paso a paso

### 1. Clase Habitacion

**Atributos:** idHabitacion, capacidad, orientacion, estado.

**Métodos:** estaDisponible(), cambiarEstado().

### 2. Clase Huesped

**Atributos:** idHuesped, nombre y otros datos por validar.

**Métodos:** registrar(), actualizar().

### 3. Clase Reserva

**Atributos:** idReserva, fechaEntrada, fechaSalida, estado.

**Métodos:** crear(), modificar(), cancelar().

Las fechas y estados concretos son datos de diseño que deben validarse.

### 4. Clase Estadia

**Atributos:** idEstadia, checkIn, checkOut, totalCalculado, estado.

**Métodos:** registrarCheckIn(), calcularCosto(), registrarCheckOut().

### 5. Clase Usuario

**Atributos:** idUsuario, nombre, usuario, rol.

**Métodos:** iniciarSesion(), cerrarSesion().

### 6. Clase Administrador

Hereda de Usuario.

**Métodos:** gestionarUsuarios(), generarInforme().

### 7. Clase EncargadoHotel

Hereda de Usuario.

**Métodos:** gestionarReserva(), realizarCheckIn(), realizarCheckOut().

### 8. Clase Informe

**Métodos:** generarOcupacion(), generarReservas().

### 9. SistemaAutenticacion

Se mantiene como componente técnico complementario para demostrar el tipo de construcción mostrado en la guía.

### 10. ValidacionEntrada

Se utiliza como apoyo técnico para validar datos de formularios.

## Resumen de relaciones

- Habitacion se relaciona con Reserva.
- Habitacion se relaciona con Estadia.
- Huesped se relaciona con Reserva y Estadia.
- Administrador hereda de Usuario.
- EncargadoHotel hereda de Usuario.
- Administrador genera Informe.
- Usuario utiliza SistemaAutenticacion.
- Las validaciones apoyan los registros de datos.

## Cardinalidad

- 1 Habitacion puede aparecer en 0..* Reservas a lo largo del tiempo.
- 1 Habitacion puede aparecer en 0..* Estadias.
- 1 Huesped puede relacionarse con 0..* Reservas.
- 1 Huesped puede relacionarse con 0..* Estadias.
- 1 Administrador puede generar 0..* Informes.

## Diagrama

[Ver diagrama completo adaptado](07-guia-diagrama-clases-completo.svg)
