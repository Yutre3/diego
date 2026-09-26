# Ejemplos del profesor adaptados al Hotel Duerme Bien

Esta carpeta tiene **uno de cada ejemplo o tipo de material que fue enviado**, adaptado al tema **Sistema de Pasajeros del Hotel Duerme Bien**.

La idea es que no queden mezclados: cada archivo del profesor tiene aquí su correspondiente trabajo adaptado.

---

## 1. CASOS_DE_USO_como_iniciar(1).pdf

Se aplicaron las pautas del material:

- actores por rol;
- actores primarios a la izquierda;
- nombres de casos de uso comenzando con verbo;
- límite del sistema;
- funcionalidades incluidas a la derecha;
- asociaciones actor-caso sin punta de flecha;
- relaciones `<<include>>` discontinuas apuntando al caso incluido.

![Caso de uso siguiendo la guía](01-casos-de-uso-como-iniciar.svg)

Archivo: [01-casos-de-uso-como-iniciar.svg](01-casos-de-uso-como-iniciar.svg)

---

## 2. CASOS_DE_USO_extend_y_include(1).pdf

Se hizo un ejemplo específico para diferenciar `<<include>>` y `<<extend>>`.

- **Gestionar reserva** `<<include>>` **Consultar disponibilidad**.
- **Registrar huésped** `<<extend>>` **Realizar check-in** cuando el huésped todavía no está registrado.

![Include y Extend](02-include-extend.svg)

Archivo: [02-include-extend.svg](02-include-extend.svg)

---

## 3. Definición de proyectos(1).docx

Se adaptó el Caso 6 y se relacionó con Evaluación 1 y Evaluación 2.

Archivo: [03-definicion-proyecto-caso6.md](03-definicion-proyecto-caso6.md)

También se encuentran:

- [Evaluación 1 completa](../prototipo-web/evaluacion1.html)
- [Evaluación 2 completa](../prototipo-web/evaluacion2.html)

---

## 4. diagrama_de_procesos(1).jpg

Se mantuvo la misma estructura del ejemplo:

**Inicio → Captura de datos → decisión de error → retorno si hay error → registro en BD → Fin.**

Se adaptó al proceso de check-in.

![Diagrama de procesos adaptado](04-diagrama-de-procesos.svg)

Archivo: [04-diagrama-de-procesos.svg](04-diagrama-de-procesos.svg)

---

## 5. Diagramas de Clase(1).pdf

Se hizo un ejemplo de clase respetando:

- nombre de la clase;
- atributos;
- operaciones;
- visibilidad;
- relaciones y multiplicidad.

![Diagrama de clase básico](05-diagrama-clase-basico.svg)

Archivo: [05-diagrama-clase-basico.svg](05-diagrama-clase-basico.svg)

---

## 6. Github_Git_VSCode.docx

Se aplicó el ejemplo del profesor al repositorio real:

- Git;
- GitHub;
- configuración;
- clonado;
- `git status`;
- `git add`;
- `git commit`;
- `git push`;
- ramas.

Archivo: [06-git-github-vscode.md](06-git-github-vscode.md)

Repositorio:

```text
https://github.com/Yutre3/diego
```

Página preparada:

```text
https://yutre3.github.io/diego/
```

---

## 7. GUIA_diagramas_de_clase(1).pdf

Se siguió la misma organización de la guía:

1. contexto;
2. requisitos;
3. consideraciones técnicas;
4. clases paso a paso;
5. resumen de relaciones;
6. cardinalidad;
7. diagrama completo.

Documento: [07-guia-diagrama-clases.md](07-guia-diagrama-clases.md)

![Diagrama de clases completo](07-guia-diagrama-clases-completo.svg)

Archivo visual: [07-guia-diagrama-clases-completo.svg](07-guia-diagrama-clases-completo.svg)

---

## 8. MOCKUP_COMPLETO(1).pdf

El material trabaja cuatro etapas. Se dejó una de cada una.

### 8.1 Sketch

![Sketch](08a-sketch.svg)

[Ver Sketch](08a-sketch.svg)

### 8.2 Wireframe

![Wireframe](08b-wireframe.svg)

[Ver Wireframe](08b-wireframe.svg)

### 8.3 Mockup

![Mockup](08c-mockup.svg)

[Ver Mockup](08c-mockup.svg)

### 8.4 Prototipo

El prototipo funcional usa HTML, CSS y JavaScript y permite navegar e interactuar.

- [Abrir archivos del prototipo](../prototipo-web/README.md)
- [Página de acceso](../prototipo-web/login.html)

URL preparada:

```text
https://yutre3.github.io/diego/
```

Explicación: [08-mockup-completo.md](08-mockup-completo.md)

---

## 9. MODELO_E_R_NORMALIZACION.pdf

Se preparó un ejemplo de normalización del hotel:

- 1NF: campos atómicos;
- 2NF: atributos no clave dependientes de la PK;
- 3NF: atributos no clave independientes entre sí y dependientes de la PK.

![Normalización](09-normalizacion.svg)

- [Explicación](09-modelo-er-normalizacion.md)
- [Esquema visual](09-normalizacion.svg)

---

## 10. UML_CASOS_DE_USO_2(1).jpg

El ejemplo original muestra un actor, Check-in, Check-out y un `<<include>>` hacia el cálculo de cuenta.

Se hizo la misma estructura con el tema del Hotel Duerme Bien.

![Caso de uso simple](10-uml-caso-uso-simple.svg)

Archivo: [10-uml-caso-uso-simple.svg](10-uml-caso-uso-simple.svg)

---

## 11. UML_CASOS_DE_USO(1).jpg

El ejemplo original utiliza una estructura amplia tipo ATM con:

- actor principal;
- límite del sistema;
- caso de uso general;
- varios casos relacionados;
- `<<extend>>`;
- `<<include>>`;
- actores externos.

Se creó una versión amplia para el Hotel Duerme Bien como **ejemplo de notación**.

![Caso de uso amplio](11-uml-caso-uso-amplio.svg)

Archivo: [11-uml-caso-uso-amplio.svg](11-uml-caso-uso-amplio.svg)

---

# Resumen

| Archivo entregado por el profesor | Ejemplo adaptado |
| --- | --- |
| CASOS_DE_USO_como_iniciar(1).pdf | [01-casos-de-uso-como-iniciar.svg](01-casos-de-uso-como-iniciar.svg) |
| CASOS_DE_USO_extend_y_include(1).pdf | [02-include-extend.svg](02-include-extend.svg) |
| Definición de proyectos(1).docx | [03-definicion-proyecto-caso6.md](03-definicion-proyecto-caso6.md) |
| diagrama_de_procesos(1).jpg | [04-diagrama-de-procesos.svg](04-diagrama-de-procesos.svg) |
| Diagramas de Clase(1).pdf | [05-diagrama-clase-basico.svg](05-diagrama-clase-basico.svg) |
| Github_Git_VSCode.docx | [06-git-github-vscode.md](06-git-github-vscode.md) |
| GUIA_diagramas_de_clase(1).pdf | [07-guia-diagrama-clases.md](07-guia-diagrama-clases.md) + [diagrama](07-guia-diagrama-clases-completo.svg) |
| MOCKUP_COMPLETO(1).pdf | [Sketch](08a-sketch.svg), [Wireframe](08b-wireframe.svg), [Mockup](08c-mockup.svg), [Prototipo](../prototipo-web/README.md) |
| MODELO_E_R_NORMALIZACION.pdf | [09-modelo-er-normalizacion.md](09-modelo-er-normalizacion.md) + [esquema](09-normalizacion.svg) |
| UML_CASOS_DE_USO_2(1).jpg | [10-uml-caso-uso-simple.svg](10-uml-caso-uso-simple.svg) |
| UML_CASOS_DE_USO(1).jpg | [11-uml-caso-uso-amplio.svg](11-uml-caso-uso-amplio.svg) |

## Criterio usado

Los ejemplos se adaptaron al tema del hotel. Cuando un archivo enseña una técnica que no está explícitamente exigida como función del Caso 6, se mantiene como **ejemplo de notación o material complementario**, en vez de presentarlo como requisito oficial.
