# 12 - Git + GitHub + VS Code aplicado al proyecto

Este documento sigue el procedimiento mostrado en el material de Git, GitHub y VS Code, aplicado al repositorio del Hotel Duerme Bien.

## Git

Git se utiliza para control de versiones. En este proyecto sirve para:

- rastrear cambios;
- mantener historial;
- trabajar con ramas;
- fusionar cambios;
- revertir cambios cuando sea necesario;
- registrar avances mediante commits.

## GitHub

GitHub aloja el repositorio en línea.

Repositorio:

https://github.com/Yutre3/diego

URL de clonado:

https://github.com/Yutre3/diego.git

## Procedimiento de vinculación

### 1. Tener cuenta y repositorio en GitHub

El repositorio utilizado es Yutre3/diego.

### 2. Tener Git instalado

Comprobación:

~~~bash
git --version
~~~

### 3. Configurar el nombre de usuario

~~~bash
git config --global user.name "Yutre3"
~~~

Para el correo se debe utilizar el correo correspondiente a la cuenta que realizará los commits:

~~~bash
git config --global user.email "CORREO_DE_LA_CUENTA"
~~~

### 4. Iniciar sesión con GitHub desde VS Code

Desde el apartado de cuenta de VS Code se puede iniciar sesión con GitHub y habilitar la sincronización correspondiente.

### 5. Copiar la URL del repositorio

En GitHub:

Code → HTTPS → copiar URL.

### 6. Clonar desde VS Code

1. Abrir Control de código fuente.
2. Elegir Clonar repositorio.
3. Pegar la URL del repositorio.
4. Seleccionar una carpeta local con permisos de escritura.

También puede hacerse desde terminal:

~~~bash
git clone https://github.com/Yutre3/diego.git
cd diego
~~~

## Control de código fuente

Después de realizar cambios:

~~~bash
git status
git add .
git commit -m "Descripción del cambio"
git push
~~~

Ejemplos de mensajes para este proyecto:

~~~text
Completar requerimientos del sistema
Agregar diagrama de casos de uso
Agregar flujo de check-in
Normalizar modelo de datos
Agregar sketch wireframe y mockup
Agregar prototipo navegable
~~~

## Trabajo con ramas

El material de clases muestra una rama principal y una rama de desarrollo.

Para este repositorio se utiliza:

- main: rama principal;
- dev: rama de desarrollo y pruebas.

Flujo de ejemplo:

~~~bash
git checkout dev
git add .
git commit -m "Agregar cambios"
git push origin dev
~~~

Cuando el trabajo se encuentra revisado puede integrarse nuevamente en main.

## Carpetas principales

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
