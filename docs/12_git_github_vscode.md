# 12 - Git + GitHub + VS Code aplicado al proyecto

Este documento sigue el procedimiento mostrado en el material de Git, GitHub y VS Code, aplicado al repositorio del Hotel Duerme Bien.

## Git y GitHub

### Git

En el material, Git se presenta como un sistema de control de versiones que permite trabajar con el código de manera segura.

Funciones indicadas:

- rastreo de cambios;
- gestión de ramas;
- fusión de código y resolución de conflictos;
- control de versiones en local, sin internet;
- revertir cambios;
- creación de etiquetas.

### GitHub

En el material, GitHub se presenta como una plataforma de almacenamiento de código que utiliza Git.

Funciones indicadas:

- alojamiento de repositorios Git en la nube;
- colaboración en equipo;
- seguimiento de problemas;
- solicitudes de extracción o Pull Request;
- revisión de código;
- integración continua;
- ramificaciones y fusiones de ramas;
- gestión de acceso;
- estadísticas y análisis.

## Repositorio del proyecto

Repositorio:

https://github.com/Yutre3/diego

URL para clonar:

https://github.com/Yutre3/diego.git

## Procedimiento de vinculación editor + Git + GitHub

### 1. Crear o disponer de la cuenta y repositorio

Para este proyecto se utiliza el repositorio Yutre3/diego.

### 2. Instalar Git

Comprobación:

~~~bash
git --version
~~~

### 3. Configurar las variables de Git

Nombre:

~~~bash
git config --global user.name "Yutre3"
~~~

Correo:

~~~bash
git config --global user.email "CORREO_DE_LA_CUENTA"
~~~

El correo debe corresponder a la cuenta que realizará los commits.

### 4. Acceder a VS Code

Desde la sección de cuenta del editor se puede iniciar sesión con GitHub y activar la sincronización correspondiente.

### 5. Autorizar GitHub en el navegador

VS Code puede abrir el navegador para completar la vinculación con la cuenta.

### 6. Obtener la URL del repositorio

En GitHub:

Code → HTTPS → copiar URL.

### 7. Clonar repositorio desde VS Code

1. Abrir Control de código fuente.
2. Elegir Clonar repositorio.
3. Pegar la URL.
4. Seleccionar una carpeta local con permisos de escritura.

También puede hacerse desde terminal:

~~~bash
git clone https://github.com/Yutre3/diego.git
cd diego
~~~

### 8. Trabajar sobre la copia local

Los cambios se realizan en los archivos locales y luego se registran en Git.

## Control de código fuente

Flujo básico:

~~~bash
git status
git add .
git commit -m "Descripción del cambio"
git push
~~~

Ejemplos para este proyecto:

~~~text
Completar requerimientos del sistema
Agregar diagrama de casos de uso
Agregar flujo de check-in
Normalizar modelo de datos
Agregar sketch wireframe y mockup
Agregar prototipo navegable
~~~

## Trabajo en equipo con ramas

El material muestra una rama principal y una rama de desarrollo.

En este repositorio se dejó:

- main: rama principal;
- dev: rama de desarrollo.

Ejemplo:

~~~bash
git checkout dev
git add .
git commit -m "Agregar cambios"
git push origin dev
~~~

Después de revisar el trabajo se puede integrar a main mediante una fusión.

## Organización local recomendada

~~~text
README.md
docs/
diagramas/
database/
sketch/
wireframes/
mockups/
prototipo/
kanban/
~~~
