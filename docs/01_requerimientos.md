# 01 - Especificación de requerimientos

## 1. Introducción

### 1.1 Propósito
Documentar los requisitos del Sistema de Pasajeros del Hotel Duerme Bien y establecer una base coherente para el modelado UML, el modelo de datos y los prototipos de interfaz.

### 1.2 Alcance
El sistema administrará habitaciones, huéspedes, reservas, check-in, check-out, ocupación, disponibilidad, costos, usuarios e informes.

### 1.3 Usuarios del sistema
- **Administrador:** administra usuarios, habitaciones y consulta informes.
- **Encargado de hotel:** registra reservas, huéspedes, check-in y check-out, y consulta disponibilidad.

## 2. Requerimientos funcionales

| ID | Requerimiento | Origen |
|---|---|---|
| RF-01 | Registrar y actualizar habitaciones con capacidad y orientación. | Caso base |
| RF-02 | Registrar huéspedes. | Caso base |
| RF-03 | Asignar huéspedes a habitaciones. | Caso base |
| RF-04 | Controlar ocupación y disponibilidad. | Caso base |
| RF-05 | Calcular automáticamente el costo asociado a la estadía/pasajero. | Caso base |
| RF-06 | Gestionar usuarios con perfiles administrador y encargado. | Caso base |
| RF-07 | Generar informes de ocupación y reservas. | Caso base |
| RF-08 | Registrar y gestionar reservas. | Caso base / UA3 |
| RF-09 | Registrar check-in y asignación de habitación. | Caso base / UA3 |
| RF-10 | Registrar check-out y liberar la habitación. | Caso base / UA3 |

## 3. Requerimientos no funcionales propuestos

El caso base no los especifica expresamente. Se proponen:

- RNF-01: interfaz en español y navegación simple.
- RNF-02: acceso según perfil de usuario.
- RNF-03: contraseñas almacenadas de forma segura.
- RNF-04: consistencia de datos en reservas, ocupación y estadías.
- RNF-05: persistencia de información en base de datos.

## 4. Restricciones y dependencias

- El sistema reemplaza planillas Excel.
- La tecnología concreta de implementación no está definida.
- La fórmula exacta de costos no está indicada; se propone una tarifa por noche.

## 5. Ajustes desde Evaluación 1

No se proporcionó retroalimentación específica de la Evaluación 1, por lo que no se inventaron cambios.
