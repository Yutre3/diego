# BITÁCORA COMPLETA DEL PROYECTO
## Sistema de Pasajeros de Hotel - Duerme Bien

**Repositorio:** Yutre3/diego  
**Proyecto académico:** Caso 6 - Sistema de Pasajeros de Hotel  
**Fecha de documentación del proceso:** 23/09/2026  
**Zona horaria utilizada en esta bitácora:** Chile, UTC-03:00  
**Responsable del repositorio:** Yutre3

---

# 1. Propósito de esta bitácora

Esta bitácora fue creada para dejar documentado el proceso completo del proyecto, no solamente el resultado final.

La idea es que, al revisar el repositorio, sea posible responder preguntas como:

- ¿Qué problema se estaba resolviendo?
- ¿Qué se hizo primero?
- ¿Qué se hizo después?
- ¿Qué archivos se fueron creando?
- ¿Qué decisiones se tomaron?
- ¿Cómo se relacionan los requerimientos con los diagramas?
- ¿Cómo se organizó la base de datos?
- ¿Cómo se prepararon los mockups?
- ¿Cómo se organizó el trabajo con Kanban?
- ¿Cómo se dejó evidencia de los cambios en GitHub?
- ¿Qué parte del trabajo viene directamente del caso?
- ¿Qué parte corresponde a propuestas de diseño?

Además, cada etapa tiene una explicación corta para que sea fácil defender el trabajo frente al profesor.

---

# 2. Aclaración importante sobre fechas y horas

Las fechas y horas incluidas aquí corresponden a los registros reales de GitHub.

Las primeras etapas del proyecto fueron reconstruidas y documentadas dentro del repositorio durante la jornada del **23/09/2026**. Por esta razón varias actividades aparecen registradas el mismo día con pocos segundos de diferencia.

No se inventaron fechas anteriores para simular trabajo realizado en otros días.

Esto significa que la bitácora documenta correctamente:

- el orden en que se construyó el repositorio;
- los archivos creados;
- los commits realizados;
- la fecha y hora real en que GitHub registró cada cambio;
- la explicación de cada etapa.

Desde las próximas jornadas, lo correcto es registrar cada avance el mismo día en que se realice.

---

# 3. Inicio real del repositorio

## Registro inicial

**Fecha:** 23/09/2026  
**Hora:** 16:42:31  
**Commit:** `d2e2226896d36bbde9868efe0ffb42becfd2a977`  
**Mensaje:** Inicio del proyecto y definición del Caso 6

### Qué se hizo

Se creó el inicio del proyecto y se documentó que el trabajo corresponde al **Caso 6: Sistema de Pasajeros de Hotel - Duerme Bien**.

Se definió el problema general:

El hotel necesita reemplazar el uso de planillas Excel por un sistema que permita administrar habitaciones y pasajeros de una forma más ordenada.

También se estableció que el sistema debe considerar:

- habitaciones;
- huéspedes;
- reservas;
- disponibilidad;
- ocupación;
- costos;
- usuarios;
- check-in;
- check-out;
- informes.

### Resultado

Se obtuvo un punto de partida claro para todo el proyecto.

### Cómo explicarlo al profesor

"Lo primero que hicimos fue definir el problema. El hotel trabaja con Excel y necesita un sistema que concentre la información de habitaciones, huéspedes y reservas."

---

# 4. Organización inicial del proyecto

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:44:24  
**Commit:** `4fe1134ca484b29f77c9019c39173121a53aaffa`  
**Mensaje:** Documentar etapas generales del proyecto

### Qué se hizo

Se creó una estructura general para separar el trabajo por áreas.

El proyecto quedó organizado con carpetas para:

- documentación;
- base de datos;
- diagramas;
- Kanban;
- bitácora.

### Por qué se hizo

La idea era evitar tener todos los archivos mezclados y permitir que cualquier persona pudiera encontrar rápidamente cada parte del trabajo.

### Cómo explicarlo

"Antes de seguir trabajando ordenamos el repositorio por carpetas. De esa manera los requerimientos, los diagramas, la base de datos y la planificación quedaron separados."

---

# 5. Bitácora general del desarrollo

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:44:27  
**Commit:** `c363ab767b458f35766cfbb8db0030fe73571d53`  
**Mensaje:** Agregar bitácora completa del desarrollo

### Qué se hizo

Se creó una primera bitácora general para describir cómo se fue construyendo el proyecto.

La bitácora se pensó como evidencia del proceso de trabajo.

### Cómo explicarlo

"Además de guardar los archivos, dejamos una bitácora para explicar qué fuimos haciendo durante el desarrollo."

---

# 6. Etapa de requerimientos

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:44:30  
**Commit:** `a5a9f6f401ea8fe4edbc435f6df2ed213e797614`  
**Mensaje:** Documentar requerimientos del Caso 6

## Objetivo

Convertir el enunciado general del caso en requerimientos claros.

## Trabajo realizado

Se definieron requerimientos funcionales.

### RF-01
Registrar y actualizar habitaciones con sus características.

### RF-02
Registrar huéspedes.

### RF-03
Asignar huéspedes a habitaciones.

### RF-04
Controlar ocupación y disponibilidad.

### RF-05
Calcular automáticamente costos asociados a la estadía.

### RF-06
Gestionar usuarios.

### RF-07
Generar informes de ocupación y reservas.

### RF-08
Registrar y gestionar reservas.

### RF-09
Realizar check-in.

### RF-10
Realizar check-out.

También se propusieron requerimientos no funcionales relacionados con:

- seguridad;
- usabilidad;
- consistencia de datos;
- acceso según perfil;
- almacenamiento de información.

## Resultado

El problema original quedó transformado en una lista concreta de funciones.

## Archivo relacionado

`docs/01_requerimientos.md`

## Cómo explicarlo

"Después de entender el caso, convertimos sus necesidades en requerimientos. Así sabemos exactamente qué debe hacer el sistema."

---

# 7. Reglas de negocio y supuestos

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:44:34  
**Commit:** `6cbe2f2bc72dd94b64200e8021e1e515e26b6761`  
**Mensaje:** Agregar reglas de negocio y supuestos

## Objetivo

Definir condiciones que el sistema debe respetar.

## Trabajo realizado

Se documentaron reglas como:

- una habitación ocupada no debe mostrarse como disponible;
- al realizar check-in la habitación debe pasar a ocupada;
- al realizar check-out debe volver a estar disponible;
- una reserva debe relacionarse con una habitación;
- solo los usuarios autorizados pueden operar según su perfil.

También se dejaron marcados como propuestas algunos detalles que el caso no define.

Ejemplos:

- tarifa por noche;
- estados internos de una reserva;
- validación de reservas superpuestas;
- relación entre reserva y estadía.

## Resultado

Se evitó mezclar requisitos oficiales con decisiones de diseño propuestas.

## Archivo relacionado

`docs/02_reglas_negocio.md`

## Cómo explicarlo

"Las reglas de negocio nos ayudan a evitar contradicciones. Por ejemplo, una habitación no puede estar ocupada y aparecer disponible al mismo tiempo."

---

# 8. Casos de uso

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:44:37  
**Commit:** `a73242ba45e93758f11a288f80a88e5c5e15fa1e`  
**Mensaje:** Agregar especificación de casos de uso

## Objetivo

Identificar quién utiliza el sistema y qué funciones realiza.

## Actores definidos

### Administrador

Responsable de:

- gestionar usuarios;
- gestionar habitaciones;
- revisar informes.

### Encargado de hotel

Responsable de:

- revisar disponibilidad;
- registrar huéspedes;
- manejar reservas;
- realizar check-in;
- realizar check-out.

## Casos de uso identificados

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

## Relaciones include

Se documentó que:

- gestionar reservas incluye consultar disponibilidad;
- realizar check-in incluye consultar disponibilidad;
- realizar check-in incluye registrar huésped;
- realizar check-in incluye asignar habitación;
- realizar check-out incluye calcular costo;
- realizar check-out incluye liberar habitación.

## Resultado

Se representó la relación entre usuarios y funciones.

## Archivo relacionado

`docs/03_casos_de_uso.md`

## Cómo explicarlo

"Los actores son los tipos de usuario. Los casos de uso son las acciones que cada actor puede hacer dentro del sistema."

---

# 9. Diagrama de flujo

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:44:40  
**Commit:** `22b3f90b8ac8c631174d09f1cd7692942ff27b15`  
**Mensaje:** Documentar diagrama de flujo

## Objetivo

Mostrar el orden de las operaciones.

## Flujo general

1. Inicio.
2. Ingreso de usuario y contraseña.
3. Validación.
4. Acceso al menú.
5. Selección de operación.
6. Reserva, check-in o check-out.
7. Actualización de datos.
8. Regreso al menú o salida.

## Resultado

Se obtuvo una representación secuencial del funcionamiento general.

## Archivo relacionado

`docs/04_diagrama_flujo.md`

## Cómo explicarlo

"Los casos de uso muestran qué hace el usuario. El flujo muestra en qué orden sucede."

---

# 10. Modelo de datos

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:44:42  
**Commit:** `b47bc9d96f0d78b366ebac917ec2e24dc99b0d41`  
**Mensaje:** Agregar documentación del modelo de datos

## Objetivo

Organizar la información que necesita almacenar el sistema.

## Entidades principales

### Usuario
Guarda información de acceso y rol.

### Habitación
Guarda número, capacidad, orientación, estado y tarifa propuesta.

### Huésped
Guarda información de la persona alojada.

### Reserva
Guarda información previa a una estadía.

### Reserva_Huésped
Relaciona huéspedes con reservas.

### Estadía
Representa una estancia real dentro del hotel.

### Estadía_Huésped
Relaciona huéspedes con estadías.

## Resultado

Se diseñó un modelo de datos organizado por entidades.

## Cómo explicarlo

"La base de datos separa cada concepto para no repetir información. Por ejemplo, el huésped se registra una sola vez y después se puede relacionar con reservas o estadías."

---

# 11. Mockups

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:44:44  
**Commit:** `c3e687ea66c14e168854babd0f9bb6af4c2bc788`  
**Mensaje:** Documentar mockups del sistema

## Objetivo

Representar cómo podría verse la interfaz.

## Pantallas consideradas

- inicio de sesión;
- panel principal;
- reservas;
- check-in;
- check-out.

## Resultado

Se obtuvo una propuesta visual previa a una implementación real.

## Cómo explicarlo

"Los mockups son una vista previa de las pantallas. Sirven para ordenar la interfaz antes de empezar a programar."

---

# 12. Matriz de trazabilidad

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:44:46  
**Commit:** `b3a40aab9091dbcd709e4efcd070345c238b6eca`  
**Mensaje:** Agregar matriz de trazabilidad

## Objetivo

Comprobar que los requerimientos tengan relación con otros elementos del proyecto.

## Ejemplo

RF-09 Check-in se relaciona con:

- CU-07;
- Estadía;
- Huésped;
- Habitación;
- pantalla Check-in.

## Resultado

Los requerimientos dejaron de ser elementos aislados.

## Cómo explicarlo

"La trazabilidad demuestra dónde aparece cada requerimiento dentro del diseño."

---

# 13. Fuentes y alcance

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:44:48  
**Commit:** `dfe3cf32395e8f30e81ec1ee89d5c9a227ec6e9a`  
**Mensaje:** Documentar fuentes y alcance

## Qué se hizo

Se dejó constancia del material utilizado:

- Caso 6;
- material de casos de uso;
- material de include y extend;
- normalización;
- mockups;
- Git, GitHub y VS Code.

También se aclaró que cualquier elemento no indicado explícitamente en el caso se considera propuesta.

## Cómo explicarlo

"Dejamos anotado qué material usamos y diferenciamos lo que viene del caso de lo que tuvimos que proponer."

---

# 14. Guía inicial de exposición

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:44:52  
**Commit:** `69e931cd585ba6b68370a08ba5afe1a8f3d46401`  
**Mensaje:** Agregar guía para exposición

## Objetivo

Preparar una explicación ordenada del proyecto.

## Resultado

Se creó una guía para mostrar el repositorio en un orden lógico.

## Cómo explicarlo

"La guía sirve para no saltar de un tema a otro durante la presentación."

---

# 15. Planificación Kanban

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:44:55  
**Commit:** `a178075123bdcbc33757d6e6b6823b16a89a7a75`  
**Mensaje:** Agregar planificación Kanban

## Objetivo

Organizar las tareas del proyecto.

## Estados

- Pendiente.
- En progreso.
- Terminado.

## Resultado

Se dejó visible qué tareas estaban listas y qué aspectos todavía requieren validación.

## Cómo explicarlo

"Kanban permite ver rápidamente qué falta, qué se está haciendo y qué ya está terminado."

---

# 16. Script SQL

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:44:57  
**Commit:** `b2ef5d5140f23d5af6760bdd89e8a0af7f9e6ded`  
**Mensaje:** Agregar esquema SQL propuesto

## Objetivo

Transformar el modelo conceptual en una estructura técnica de tablas.

## Qué incluye

- tablas;
- claves primarias;
- claves foráneas;
- restricciones;
- estados;
- relaciones.

## Resultado

Se creó `database/schema.sql`.

## Cómo explicarlo

"El modelo de datos explica la estructura y el SQL muestra cómo podría construirse esa estructura en una base de datos real."

---

# 17. Documentación con fecha y hora

## Actualización del README

**Fecha:** 23/09/2026  
**Hora:** 16:56:06  
**Commit:** `b3f13d9a1784163f351704cdbef17a1ccdc96b46`  
**Mensaje:** Completar README con registro de fecha y hora

### Qué se hizo

Se agregó al README la explicación de cómo se usa la bitácora y cómo deben registrarse los próximos avances.

También se dejó indicado que las fechas históricas no deben inventarse.

---

# 18. Explicación fácil y completa

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:58:36  
**Commit:** `f7f5eca290dd8d11d6721703a114bdfb7adb8c80`  
**Mensaje:** Agregar explicación fácil y completa

## Qué se hizo

Se creó un documento que explica todo el proyecto en lenguaje simple.

## Archivo

`docs/12_explicacion_facil.md`

## Objetivo

Que una persona pueda estudiar el proyecto sin necesitar leer primero todos los archivos técnicos.

---

# 19. Guion para exposición

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:58:38  
**Commit:** `101771041620119aba179350dae64fcdb38c616e`  
**Mensaje:** Agregar guion fácil para exposición

## Qué se hizo

Se creó un guion para explicar:

- problema;
- requerimientos;
- actores;
- casos de uso;
- flujo;
- base de datos;
- mockups;
- Kanban;
- repositorio.

## Archivo

`docs/13_guion_exposicion.md`

---

# 20. Preguntas posibles del profesor

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:58:41  
**Commit:** `6878d1df7f6e3365904e2b4d33f16626492dc0b5`  
**Mensaje:** Agregar preguntas y respuestas para defensa

## Qué se hizo

Se prepararon respuestas para preguntas como:

- ¿Qué problema resuelve el sistema?
- ¿Quiénes son los actores?
- ¿Qué significa include?
- ¿Qué es normalización?
- ¿Para qué sirve Kanban?
- ¿Qué es trazabilidad?
- ¿Por qué se utilizó GitHub?
- ¿Está programado el sistema?

## Archivo

`docs/14_preguntas_profesor.md`

---

# 21. Modelos visuales

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:58:43  
**Commit:** `5096f7bd3dbfaf584e83eec3fd766b6fcd6ed487`  
**Mensaje:** Agregar modelos visuales para GitHub

## Qué se hizo

Se agregaron versiones visuales simplificadas para:

- casos de uso;
- flujo;
- modelo de datos.

## Archivo

`docs/15_modelos_visuales.md`

## Resultado

Los diagramas se pueden revisar directamente desde GitHub mediante Mermaid.

---

# 22. Día 9 - revisión final y explicación

## Registro

**Fecha:** 23/09/2026  
**Hora:** 16:58:57  
**Commit inicial del Día 9:** `dd9a45fe4b9e6e290b5d5a76af2f79645e5760d1`  
**Mensaje:** Día 9: completar explicación y material de exposición

## Objetivo

Dejar el proyecto fácil de estudiar, revisar y exponer.

## Trabajo realizado

- explicación fácil;
- guion de exposición;
- preguntas de defensa;
- modelos visuales;
- revisión de coherencia.

## Resultado

El repositorio contiene tanto el contenido técnico como material para defenderlo oralmente.

---

# 23. Documento maestro

## Registro

**Fecha:** 23/09/2026  
**Hora:** 17:01:05  
**Commit:** `00dc35dd98886018a971d37ce5bb83f2c1964920`  
**Mensaje:** Agregar documento maestro completo para explicar el proyecto

## Qué se hizo

Se creó un documento que reúne en un solo lugar:

- contexto;
- requerimientos;
- reglas;
- actores;
- casos de uso;
- flujo;
- base de datos;
- normalización;
- SQL;
- mockups;
- Kanban;
- trazabilidad;
- Git y GitHub;
- bitácora;
- instrucciones para exponer;
- preguntas frecuentes.

## Archivo

`docs/16_DOCUMENTO_MAESTRO_PARA_EXPLICAR.md`

---

# 24. Registro cronológico actualizado

## Registro

**Fecha:** 23/09/2026  
**Hora:** 17:01:07  
**Commit:** `26fdec5a800da15b6fb69ddd29f9bbe76d8631f4`  
**Mensaje:** Actualizar registro cronológico con Día 9

## Qué se hizo

Se actualizó el archivo:

`bitacora/registro-cronologico.md`

para incorporar el nuevo avance.

---

# 25. Relación completa entre las partes

El proyecto sigue esta lógica:

**Caso del hotel**
↓
**Requerimientos**
↓
**Reglas de negocio**
↓
**Actores y casos de uso**
↓
**Diagrama de flujo**
↓
**Modelo de datos**
↓
**SQL**
↓
**Mockups**
↓
**Kanban**
↓
**Trazabilidad**
↓
**Bitácora**
↓
**Historial de commits**
↓
**Explicación final**

Esto permite demostrar que las partes no fueron creadas de manera aislada.

---

# 26. Explicación completa para decir frente al profesor

"Nuestro proyecto corresponde al Caso 6, Sistema de Pasajeros del Hotel Duerme Bien.

El problema principal es que el hotel utiliza planillas Excel para administrar habitaciones y pasajeros. La propuesta es diseñar un sistema que centralice esa información y permita controlar reservas, disponibilidad, check-in, check-out, costos, usuarios e informes.

Lo primero que hicimos fue analizar el caso y separar las funciones principales. Después convertimos esas funciones en requerimientos numerados, porque eso nos permite saber exactamente qué debe hacer el sistema.

Luego definimos reglas de negocio. Por ejemplo, una habitación ocupada no puede aparecer como disponible y, cuando se hace un check-out, la habitación debe volver a quedar libre.

Después identificamos los actores principales. Tenemos al Administrador y al Encargado de hotel. Con ellos construimos los casos de uso, que representan las acciones que puede hacer cada tipo de usuario.

También usamos relaciones include. Por ejemplo, el check-out incluye calcular el costo y liberar la habitación.

Después hicimos el diagrama de flujo para representar el orden general de las acciones: iniciar sesión, validar los datos, entrar al menú, elegir una operación, actualizar la base de datos y seguir trabajando o salir.

Luego diseñamos el modelo de datos. Separamos Usuario, Habitación, Huésped, Reserva y Estadía, además de tablas intermedias. La idea es evitar duplicar información y mantener relaciones claras.

A partir de ese modelo también hicimos un script SQL de referencia con claves primarias, claves foráneas y restricciones.

Después diseñamos los mockups de las pantallas principales: login, panel, reservas, check-in y check-out. Estos mockups muestran cómo podría verse el sistema antes de programarlo.

Para organizar el trabajo usamos Kanban, separando tareas pendientes, en progreso y terminadas.

También hicimos una matriz de trazabilidad para relacionar cada requerimiento con casos de uso, datos y pantallas.

Finalmente organizamos todo en GitHub. El repositorio contiene la documentación, los modelos, la base de datos, el Kanban y una bitácora. Los commits permiten ver los cambios registrados en el repositorio y la fecha y hora de cada registro.

Además dejamos guías para explicar el proyecto, preguntas posibles del profesor y una versión visual de los modelos.

Con esto, el repositorio muestra el resultado del proyecto y también deja documentado el proceso de construcción."

---

# 27. Explicación corta de emergencia

Si hay poco tiempo:

"El proyecto busca reemplazar las planillas Excel del Hotel Duerme Bien por el diseño de un sistema para manejar habitaciones, huéspedes y reservas. Primero definimos requerimientos, luego actores y casos de uso, después hicimos el flujo, la base de datos, los mockups, Kanban y trazabilidad. Finalmente documentamos el proceso en GitHub mediante una bitácora y commits."

---

# 28. Preguntas rápidas para estudiar

## ¿Cuál es el problema?

El hotel depende de planillas Excel para administrar información operativa.

## ¿Qué solución se propone?

Un sistema centralizado de gestión de pasajeros, habitaciones y reservas.

## ¿Quiénes son los actores?

Administrador y Encargado de hotel.

## ¿Qué es un requerimiento funcional?

Una función que el sistema debe realizar.

## ¿Qué es include?

Una relación donde una función necesita ejecutar otra función como parte obligatoria.

## ¿Qué es un diagrama de flujo?

Una representación del orden de pasos y decisiones.

## ¿Qué es normalización?

Una forma de organizar datos para reducir duplicación e inconsistencias.

## ¿Qué es un mockup?

Una representación visual de una interfaz antes de desarrollarla.

## ¿Qué es Kanban?

Una herramienta para organizar tareas según su estado.

## ¿Qué es trazabilidad?

La relación entre un requerimiento y los elementos que lo representan dentro del proyecto.

## ¿Para qué sirve Git?

Para controlar versiones y registrar cambios.

## ¿Para qué sirve GitHub?

Para alojar el repositorio y facilitar la revisión y colaboración.

---

# 29. Qué está completo

Actualmente se encuentra documentado:

- problema;
- alcance;
- requerimientos;
- reglas de negocio;
- actores;
- casos de uso;
- relaciones include;
- flujo;
- modelo de datos;
- normalización;
- SQL;
- mockups;
- Kanban;
- trazabilidad;
- fuentes;
- bitácora;
- registro cronológico;
- fechas y horas reales de commits;
- guion de exposición;
- preguntas de defensa;
- diagramas visuales;
- documento maestro.

---

# 30. Qué no se debe inventar

Todavía no debe inventarse:

- retroalimentación que el profesor no haya entregado;
- fechas antiguas que no existan en GitHub;
- una fórmula definitiva de costos si el caso no la define;
- requisitos nuevos que no estén respaldados por el caso o claramente marcados como propuesta.

---

# 31. Cómo continuar los próximos días

Cada vez que se trabaje en el proyecto:

1. anotar fecha real;
2. anotar hora de inicio;
3. anotar hora de término;
4. explicar el objetivo;
5. describir lo realizado;
6. indicar archivos modificados;
7. registrar problemas encontrados;
8. explicar cómo se resolvieron;
9. dejar pendientes;
10. hacer un commit;
11. anotar el SHA del commit en la bitácora.

Ejemplo de nombre:

`bitacora/2026-09-24-correcciones-casos-de-uso.md`

Ejemplo de commit:

`24-09-2026: corregir casos de uso según revisión`

De esta forma, a partir de la próxima sesión el repositorio tendrá una documentación diaria real con fecha, hora y evidencia técnica.
