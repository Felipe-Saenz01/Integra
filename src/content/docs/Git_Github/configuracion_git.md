---
title: Configuración de Git y GitHub
description: Configuracion necesaria para trabajar con github.
sidebar:
        order: 3    
---

Git tiene diferentes configuraciones globales y locales que puedes ajustar para 
poder trabajar de forma a decuada en git, especialmente configuraciones que
no estan por defecto en git y que son necesarias para trabajar.

## Ver configuración
Para ver las configuraciones que tienes en git puedes usar el siguiente comando:

```bash
git config --list
```

Esto mostrará una lista de las configuraciones del repositorio actual y las globales.

## Ver configuración global
Para ver las configuraciones globales puedes usar el siguiente comando:

```bash
git config --global --list
```

## Configuración de usuario
Es importante configurar tu nombre de usuario y correo electrónico para que tus
commits estén correctamente identificados. Puedes hacerlo con los siguientes comandos:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "Tu Correo Electrónico"
```
