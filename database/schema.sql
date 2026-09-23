-- Sistema de Pasajeros - Hotel Duerme Bien
-- Modelo relacional de referencia para el trabajo académico.
-- Los campos marcados como propuesta deben validarse antes de una implementación real.

CREATE TABLE usuario (
    id_usuario INTEGER PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    username VARCHAR(60) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    rol VARCHAR(20) NOT NULL CHECK (rol IN ('ADMINISTRADOR', 'ENCARGADO')),
    activo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE habitacion (
    id_habitacion INTEGER PRIMARY KEY,
    numero VARCHAR(10) NOT NULL UNIQUE,             -- Propuesta
    capacidad INTEGER NOT NULL CHECK (capacidad > 0),
    orientacion VARCHAR(50),
    estado VARCHAR(20) NOT NULL CHECK (
        estado IN ('DISPONIBLE', 'RESERVADA', 'OCUPADA', 'FUERA_SERVICIO')
    ),                                              -- Estados por validar
    valor_pasajero DECIMAL(10,2) CHECK (valor_pasajero >= 0) -- Propuesta para permitir cálculo automático
);

CREATE TABLE huesped (
    id_huesped INTEGER PRIMARY KEY,
    documento VARCHAR(30) UNIQUE,                   -- Tipo de documento por validar
    nombre VARCHAR(80) NOT NULL,                    -- Datos personales propuestos
    apellido VARCHAR(80) NOT NULL,
    telefono VARCHAR(30),
    email VARCHAR(120)
);

CREATE TABLE reserva (
    id_reserva INTEGER PRIMARY KEY,
    id_habitacion INTEGER NOT NULL,
    id_usuario_creador INTEGER NOT NULL,
    fecha_entrada DATE NOT NULL,
    fecha_salida DATE NOT NULL,
    estado VARCHAR(20) NOT NULL CHECK (
        estado IN ('PENDIENTE', 'CONFIRMADA', 'CANCELADA', 'FINALIZADA')
    ),                                              -- Estados por validar
    fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_habitacion) REFERENCES habitacion(id_habitacion),
    FOREIGN KEY (id_usuario_creador) REFERENCES usuario(id_usuario),
    CHECK (fecha_salida > fecha_entrada)
);

CREATE TABLE reserva_huesped (
    id_reserva INTEGER NOT NULL,
    id_huesped INTEGER NOT NULL,
    PRIMARY KEY (id_reserva, id_huesped),
    FOREIGN KEY (id_reserva) REFERENCES reserva(id_reserva),
    FOREIGN KEY (id_huesped) REFERENCES huesped(id_huesped)
);

CREATE TABLE estadia (
    id_estadia INTEGER PRIMARY KEY,
    id_reserva INTEGER,
    id_habitacion INTEGER NOT NULL,
    id_usuario_registro INTEGER NOT NULL,
    checkin TIMESTAMP NOT NULL,
    checkout TIMESTAMP,
    total_calculado DECIMAL(10,2) CHECK (total_calculado >= 0),
    estado VARCHAR(20) NOT NULL CHECK (estado IN ('ACTIVA', 'FINALIZADA')),
    FOREIGN KEY (id_reserva) REFERENCES reserva(id_reserva),
    FOREIGN KEY (id_habitacion) REFERENCES habitacion(id_habitacion),
    FOREIGN KEY (id_usuario_registro) REFERENCES usuario(id_usuario)
);

CREATE TABLE estadia_huesped (
    id_estadia INTEGER NOT NULL,
    id_huesped INTEGER NOT NULL,
    PRIMARY KEY (id_estadia, id_huesped),
    FOREIGN KEY (id_estadia) REFERENCES estadia(id_estadia),
    FOREIGN KEY (id_huesped) REFERENCES huesped(id_huesped)
);

-- La fórmula del costo no se codifica aquí porque el Caso 6 no entrega
-- la regla exacta. Debe definirse después de validarla con el docente/cliente.
