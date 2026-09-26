# Ejemplo aplicado desde “Github_Git_VSCode.docx”

## Git

En el material, Git es el sistema de control de versiones. Para este proyecto se usa para:

- rastrear cambios;
- hacer commits;
- trabajar con ramas;
- fusionar cambios;
- revertir cambios cuando sea necesario.

## GitHub

GitHub aloja el repositorio del proyecto:

```text
https://github.com/Yutre3/diego
```

URL para clonar:

```text
https://github.com/Yutre3/diego.git
```

## Procedimiento aplicado al proyecto

### 1. Comprobar Git

```bash
git --version
```

### 2. Configurar nombre

```bash
git config --global user.name "Yutre3"
```

### 3. Configurar correo

```bash
git config --global user.email "CORREO_DE_LA_CUENTA"
```

### 4. Clonar desde VS Code o terminal

```bash
git clone https://github.com/Yutre3/diego.git
cd diego
```

### 5. Revisar cambios

```bash
git status
```

### 6. Preparar archivos

```bash
git add .
```

### 7. Crear commit

```bash
git commit -m "Agregar ejemplo adaptado al Hotel Duerme Bien"
```

### 8. Enviar a GitHub

```bash
git push
```

## Ramas utilizadas

- `main`: principal.
- `dev`: desarrollo.
- `gh-pages`: publicación del prototipo.

## Página publicada preparada

```text
https://yutre3.github.io/diego/
```
