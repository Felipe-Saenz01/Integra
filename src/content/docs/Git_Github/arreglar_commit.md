---
title: Arreglar un commit en git
description: Descripcion de como agregar cambios a un commit ya hecho
sidebar:
    label: git amend (Arreglar Commit)
    order: 10
---

Una situacion comun a la hora de hacer commits es que podemos cometer errores con el nombre o mensaje del commit o que nos olvidemos de agregar algun archivo, para solucionar estos problemas git nos ofrece la opcion de arreglar el ultimo commit que hemos hecho con el comando `git commit --amend`.

## Modificar el mensaje del último commit

Si te equivocaste al escribir el mensaje:

```bash
git commit --amend -m "Nuevo mensaje correcto"
```


## Agregar archivos olvidados al último commit

Si olvidaste incluir un archivo:

```bash
git add archivo_faltante
git commit --amend --no-edit
```

El flag `--no-edit` mantiene el mensaje original del commit, solo agrega el nuevo archivo.

:::caution
Si el commit en el que cometiste el eror ya fue subido a un repositorio remoto, no es recomendable usar `--amend`, ya que esto cambia el historial del commit y puede generar problemas de sincronización con otros colaboradores. En esto caso es mejor hacer un nuevo commit corrigiendo el error.
:::