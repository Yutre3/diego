# Explicación fácil y completa del proyecto

## 1. Idea principal

El proyecto corresponde al **Caso 6: Sistema de Pasajeros de Hotel - Duerme Bien**.

El problema es simple: el hotel trabaja con planillas Excel y necesita un sistema que permita organizar habitaciones, huéspedes, reservas, check-in, check-out, disponibilidad, costos, usuarios e informes.

### Cómo explicarlo
"El hotel usa Excel y queremos reemplazarlo por un sistema que tenga toda la información ordenada y permita controlar reservas, habitaciones y pasajeros."

---

## 2. Qué hicimos primero: entender el caso

Antes de dibujar o programar, se revisó qué funciones pide el caso.

Se identificaron estas funciones principales:

- registrar habitaciones;
- registrar huéspedes;
- asignar habitaciones;
- revisar disponibilidad;
- registrar reservas;
- hacer check-in;
- hacer check-out;
- calcular costos;
- gestionar usuarios;
- generar informes.

### Cómo explicarlo
"Primero leímos el caso y sacamos las funciones principales. Eso nos permitió saber exactamente qué debía resolver el sistema."

---

## 3. Requerimientos

Después se transformaron las funciones del caso en requerimientos numerados.

Ejemplos:

- RF-01: registrar habitaciones;
- RF-02: registrar huéspedes;
- RF-04: controlar ocupación y disponibilidad;
- RF-08: gestionar reservas;
- RF-09: realizar check-in;
- RF-10: realizar check-out.

También se separaron las propuestas que el caso no define, como algunos detalles técnicos o la fórmula exacta de costos.

### Cómo explicarlo
"Los requerimientos son una lista clara de lo que el sistema tiene que hacer. Los numeramos para después poder relacionarlos con los diagramas y las pantallas."

---

## 4. Reglas de negocio

Se definieron reglas lógicas para que el sistema funcione correctamente.

Ejemplos:

- una habitación ocupada no puede aparecer como disponible;
- al hacer check-in, la habitación pasa a ocupada;
- al hacer check-out, la habitación vuelve a quedar disponible;
- una reserva debe estar asociada a una habitación;
- solo usuarios autorizados pueden operar el sistema.

### Cómo explicarlo
"Las reglas de negocio son condiciones que el sistema debe respetar para evitar errores."

---

## 5. Actores y casos de uso

Se identificaron dos actores principales:

### Administrador
Puede administrar usuarios y habitaciones y revisar informes.

### Encargado de hotel
Puede registrar huéspedes, revisar disponibilidad, gestionar reservas, hacer check-in y hacer check-out.

Los principales casos de uso son:

- iniciar sesión;
- gestionar habitaciones;
- gestionar usuarios;
- consultar disponibilidad;
- gestionar reservas;
- registrar huésped;
- realizar check-in;
- asignar habitación;
- calcular costo;
- realizar check-out;
- liberar habitación;
- generar informes.

### Cómo explicarlo
"El diagrama de casos de uso muestra quién usa el sistema y qué acciones puede realizar cada usuario."

---

## 6. Relaciones include

Se usó **include** cuando una acción es necesaria dentro de otra.

Ejemplos:

- check-in incluye consultar disponibilidad;
- check-in incluye registrar huésped;
- check-in incluye asignar habitación;
- check-out incluye calcular costo;
- check-out incluye liberar habitación.

### Cómo explicarlo
"Usamos include cuando una tarea forma parte obligatoria de otra. Por ejemplo, para terminar un check-out es necesario calcular el costo y liberar la habitación."

---

## 7. Diagrama de flujo

El flujo general sigue esta lógica:

1. el usuario inicia sesión;
2. el sistema valida los datos;
3. se abre el menú principal;
4. el usuario elige una operación;
5. puede gestionar reserva, check-in o check-out;
6. el sistema actualiza la base de datos;
7. el usuario puede realizar otra operación o salir.

### Cómo explicarlo
"El caso de uso muestra qué puede hacer el usuario. El diagrama de flujo muestra en qué orden se hacen las cosas."

---

## 8. Base de datos

Se propusieron las siguientes entidades:

- Usuario;
- Habitación;
- Huésped;
- Reserva;
- Reserva_Huésped;
- Estadía;
- Estadía_Huésped.

### Por qué se separaron

Cada tabla representa un concepto diferente. Esto evita repetir información.

Por ejemplo, los datos personales de un huésped se guardan una sola vez y después se relacionan con sus reservas o estadías.

### Cómo explicarlo
"La base de datos está separada por entidades para evitar duplicar datos. Cada cosa importante del sistema tiene su propia tabla."

---

## 9. Normalización

El modelo se organizó siguiendo la idea de normalización:

- campos atómicos;
- atributos dependientes de su clave;
- separación de información para evitar redundancia;
- uso de tablas puente para relaciones muchos-a-muchos.

### Cómo explicarlo
"Normalizar significa ordenar bien la base de datos para no guardar la misma información muchas veces y evitar inconsistencias."

---

## 10. Mockups

Se definieron pantallas para:

1. inicio de sesión;
2. panel principal;
3. reservas;
4. check-in;
5. check-out.

Los mockups sirven para mostrar cómo podría verse el sistema antes de programarlo.

### Cómo explicarlo
"Los mockups son una vista previa de las pantallas. Sirven para diseñar la interfaz antes de desarrollar el sistema."

---

## 11. Kanban

Se utilizó un tablero con tres estados:

- Pendiente;
- En progreso;
- Terminado.

Esto permite saber qué tareas faltan y cuáles ya fueron completadas.

### Cómo explicarlo
"Kanban nos ayuda a organizar el trabajo y ver rápidamente qué está pendiente, qué se está haciendo y qué ya terminó."

---

## 12. Trazabilidad

La matriz de trazabilidad conecta:

- requerimiento;
- caso de uso;
- datos;
- interfaz.

Ejemplo:

RF-09 Check-in -> CU-07 -> Estadía/Huésped/Habitación -> pantalla Check-in.

### Cómo explicarlo
"La trazabilidad sirve para comprobar que cada requerimiento aparece realmente en alguna parte del diseño."

---

## 13. Git y GitHub

El repositorio no se utiliza solamente para guardar el trabajo final. También registra el proceso.

Se creó una bitácora por jornadas y diferentes commits para documentar los avances.

Cada registro puede mostrar:

- fecha;
- hora;
- actividad;
- archivos modificados;
- problemas;
- solución;
- resultado;
- commit.

### Cómo explicarlo
"GitHub nos sirve como evidencia del proceso. Podemos mostrar qué cambios se hicieron y cuándo quedaron registrados."

---

## 14. Qué se debe mostrar al profesor

Orden recomendado:

1. README.md.
2. bitacora/registro-cronologico.md.
3. historial de commits.
4. docs/01_requerimientos.md.
5. docs/03_casos_de_uso.md.
6. docs/04_diagrama_flujo.md.
7. docs/05_modelo_datos.md.
8. database/schema.sql.
9. docs/06_mockups.md.
10. kanban/tablero.md.
11. docs/07_trazabilidad.md.
12. docs/13_guion_exposicion.md.

---

## 15. Resumen en una frase

"Analizamos el problema del hotel, definimos qué debía hacer el sistema, modelamos sus procesos y datos, diseñamos sus pantallas y documentamos todo el avance en GitHub."
