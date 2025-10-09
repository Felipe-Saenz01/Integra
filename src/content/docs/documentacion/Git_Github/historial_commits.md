---
title: Historial de commits con git log
description: Cómo explorar el historial de commits en Git con git log.
sidebar:
    label: git log (Historial Commits)
    order: 11
---

Un uso común de Git es revisar el historial de cambios en un proyecto. para esto, Git proporciona el comando `git log`, que muestra una lista de todos los commits realizados en el repositorio, junto con detalles como el autor, la fecha y el mensaje del commit.

:::note
El comando `git log` muestra un listado en la terminar con un paginador propio, lo que es bueno recorar el como navegar en este paginador:
- Presiona  `barra espaciadora` para avanzar una página.
- Presiona `Enter` para avanzar una línea.
- Presiona `b` para retroceder una página.
- Presiona `q` para salir del paginador y volver a la línea de comandos.

:::

## Git log

```bash
git log
```

Esto lista los commits con autor, fecha y mensaje.


## Opciones comunes

### Compacto en una línea
```bash
git log --oneline
```

Muestra el hash corto y el mensaje de cada commit.


### Ver gráfico de ramas
```bash
git log --oneline --graph --all
```

Muestra el historial como un gráfico, incluyendo todas las ramas.


### Filtrar por autor
```bash
git log --author="Tu Nombre"
```

Muestra solo los commits hechos por ese autor.


### Ver commits que afectan un archivo específico
```bash
git log archivo.txt
```

Lista los commits en los que se modificó ese archivo.



