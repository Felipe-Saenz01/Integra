---
title: Fusion de ramas con git merge
description: Descripcion de union de dos ramas
sidebar:
    label: git merge (Fusion Ramas)
    order: 8
---

La fusión de ramas es un proceso importante, ya que permite que el proceso de incorporación de cambios sea una tarea rápida y sencilla. hacer un **merge** es el proceso donde combinamos el ultimo commit de la rama en la que estamos ubicados con el ultimo commit de otra rama, esto tiene como producto un nuevo commit. Todo esto con el siguiente comando: 

```bash
git merge nombre_rama
```

![Diagrama merge de ramas de git](@assets/Git_Github/diagrama-git-merge.png)

## Conflictos en el merge

Hay muchas situaciones en las que se pueden presentar conflictos a la hora de realizar un merge, esto ocurre cuando hay modificaciones en las líneas de un mismo archivo tanto en el ultimo commit de la rama en la que estamos situados como en el ultimo commit de la rama a la que estamos trayendo los cambios, en esta situación git no tiene como saber cual cambio es el que debe quedar entonces genera un conflicto.

Este conflicto lo que va a hacer es poner ambos cambios en el archivo y aqui la persona que esta realizando el merge debe decidir si ambos cambios se quedan o si se descarta alguno, luego de decidir se debe crear otro commit que seria la resolución del conflicto.

![Diagrama merge de ramas de git](@assets/Git_Github/diagrama-git-merge-conflicto.png)
