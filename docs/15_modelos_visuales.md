# Modelos visuales para revisar en GitHub

GitHub puede renderizar estos diagramas directamente mediante Mermaid.

## Casos de uso simplificado

```mermaid
flowchart LR
    A[Administrador]
    E[Encargado de hotel]

    L([Iniciar sesión])
    GH([Gestionar habitaciones])
    GU([Gestionar usuarios])
    I([Generar informes])
    D([Consultar disponibilidad])
    R([Gestionar reservas])
    H([Registrar huésped])
    CI([Realizar check-in])
    AH([Asignar habitación])
    CC([Calcular costo])
    CO([Realizar check-out])
    LH([Liberar habitación])

    A --- L
    A --- GH
    A --- GU
    A --- I

    E --- L
    E --- D
    E --- R
    E --- H
    E --- CI
    E --- CO

    R -. include .-> D
    CI -. include .-> D
    CI -. include .-> H
    CI -. include .-> AH
    CO -. include .-> CC
    CO -. include .-> LH
```

## Flujo general

```mermaid
flowchart TD
    A([Inicio]) --> B[Ingresar usuario y contraseña]
    B --> C{¿Credenciales válidas?}
    C -- No --> B
    C -- Sí --> D[Menú principal]
    D --> E{Elegir operación}
    E --> F[Gestionar reserva]
    E --> G[Realizar check-in]
    E --> H[Realizar check-out]
    F --> I[(Actualizar base de datos)]
    G --> I
    H --> I
    I --> J{¿Otra operación?}
    J -- Sí --> D
    J -- No --> K([Fin])
```

## Modelo de datos simplificado

```mermaid
erDiagram
    USUARIO ||--o{ RESERVA : crea
    USUARIO ||--o{ ESTADIA : registra
    HABITACION ||--o{ RESERVA : recibe
    HABITACION ||--o{ ESTADIA : aloja
    RESERVA ||--o| ESTADIA : origina
    RESERVA ||--o{ RESERVA_HUESPED : contiene
    HUESPED ||--o{ RESERVA_HUESPED : participa
    ESTADIA ||--o{ ESTADIA_HUESPED : contiene
    HUESPED ||--o{ ESTADIA_HUESPED : participa

    USUARIO {
      int id_usuario PK
      string nombre
      string username
      string rol
    }

    HABITACION {
      int id_habitacion PK
      string numero
      int capacidad
      string orientacion
      string estado
      decimal tarifa_noche
    }

    HUESPED {
      int id_huesped PK
      string documento
      string nombre
      string apellido
    }

    RESERVA {
      int id_reserva PK
      int id_habitacion FK
      date fecha_entrada
      date fecha_salida
      string estado
    }

    ESTADIA {
      int id_estadia PK
      int id_habitacion FK
      datetime checkin
      datetime checkout
      decimal total_calculado
    }
```

Estos diagramas son versiones visuales simplificadas para facilitar la revisión y exposición. La documentación detallada permanece en los archivos correspondientes.
