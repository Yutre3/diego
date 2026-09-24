# 13 - Casos de uso: material de clases aplicado al hotel

Este documento sigue el orden utilizado en el material de casos de uso y lo aplica al Sistema de Pasajeros del Hotel Duerme Bien.

## 1. Identificando actores

Los actores son entidades externas que interactúan con el sistema.

### Administrador

Rol relacionado con usuarios, habitaciones e informes.

### Encargado de hotel

Rol operativo relacionado con huéspedes, disponibilidad, reservas, check-in y check-out.

El huésped no se usa como actor principal porque el Caso 6 no indica que utilice directamente el software.

## 2. Identificar casos de uso

Los casos de uso representan funciones completas. Sus nombres comienzan con un verbo.

- Gestionar habitaciones.
- Gestionar usuarios.
- Registrar huésped.
- Consultar disponibilidad.
- Gestionar reserva.
- Realizar check-in.
- Asignar habitación.
- Realizar check-out.
- Calcular costo.
- Liberar habitación.
- Generar informes.
- Iniciar sesión, como propuesta derivada de la gestión de usuarios.

## 3. Buscar funcionalidad común para usar <<include>>

Se utiliza <<include>> cuando la función incluida es necesaria para completar el objetivo del caso base.

- Gestionar reserva <<include>> Consultar disponibilidad.
- Asignar habitación <<include>> Consultar disponibilidad.
- Realizar check-in <<include>> Asignar habitación.
- Realizar check-out <<include>> Calcular costo.
- Realizar check-out <<include>> Liberar habitación.

La flecha discontinua apunta al caso de uso incluido.

## 4. Generalización de actores y casos de uso

El material explica que puede generalizarse cuando varios actores comparten comportamiento.

En este proyecto esa idea se aplica en el diagrama de clases, donde Administrador y EncargadoHotel pueden especializar a Usuario.

En el diagrama principal de casos de uso se mantienen separados para facilitar la lectura.

## 5. Funciones opcionales o adicionales para <<extend>>

El material indica que <<extend>> se usa cuando una función agrega comportamiento bajo una condición y el caso base puede cumplir su objetivo sin esa extensión.

El Caso 6 no entrega una función opcional concreta que obligue a utilizar <<extend>>. Por eso el diagrama oficial no inventa una.

Como ejercicio estructural se incluye una adaptación del ejemplo ATM:

[Ver estructura adaptada del ejemplo ATM](../diagramas/casos-de-uso-estructura-atm-adaptada.svg)

Ese archivo sirve para practicar la notación y no reemplaza el diagrama oficial.

## 6. Validar y refinar el diagrama

Se revisa que:

- los actores representen roles;
- los casos de uso comiencen con verbos;
- las asociaciones entre actor y caso de uso no tengan flechas;
- <<include>> use línea discontinua y apunte al caso incluido;
- <<extend>> no se utilice sin una condición justificable;
- include y extend no se utilicen para mostrar orden de ejecución;
- el detalle de los pasos quede en el texto o en diagramas de flujo.

## Diagramas relacionados

- [Diagrama oficial](../diagramas/casos-de-uso.svg)
- [Ejemplo simple Check-in / Check-out](../diagramas/casos-de-uso-checkin-checkout.svg)
- [Ejemplo estructural tipo ATM adaptado](../diagramas/casos-de-uso-estructura-atm-adaptada.svg)
