---
title: Agregar cambios a Staging
desciption: Agregar los cabios al área de staging para que esten listos a su postior commit
sidebar:
    label: git add (Agregar Cambios)
    order: 5
---

Una vez se tienen los cambios realizados, el primer requisito para realizar un commit es tener los cambios trackeados en el área de **staging** siguiendo [el diagrama de trabajo](/Documentacion_Integra/git_github/inicio#como-funciona-git), esto se logra con el comando:

```bash
git add nombre_archivo  #Añade los archivos nombrados
git add .               #Añade todos los archivos Modificados/Agregados
git add --all           #Mismo funcionamiento que git add .
```

Seguido a esto puedes revisar el estado con `git status`

## Ejemplo git add de un solo archivo
![Ejemplo de git add a un archivo](../../../assets/Git_Github/git-add-ejemplo.png)

## Ejemplo git add de todos los archivos modificados
![Ejemplo de git add a todos los archivos](../../../assets/Git_Github/git-add-todos-ejemplo.png)

