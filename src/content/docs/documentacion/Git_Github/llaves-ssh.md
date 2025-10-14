---
title: Llaves SSH en GitHub
description: Creacion y uso de llaves SSH para autenticarte con GitHub.
sidebar:
    label: Llaves SSH en GitHub
    order: 12
---

Las **llaves SSH** permiten autenticarte con GitHub (u otros remotos)
sin necesidad de ingresar usuario y contraseña en cada operación.


## Generar una nueva llave SSH

```powershell
ssh-keygen -t ed25519 -C "tu-email@example.com"
```

Presiona Enter para aceptar la ruta por defecto (`~/.ssh/id_ed25519`).


## Agregar la llave al agente SSH

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```


## Copiar la clave pública

Busca las llaves generadas en tu equipo, abre la clave pública con un editor de texto o tambien puedes usar el siguiente comando en el git bash:
```bash
cat ~/.ssh/id_ed25519.pub
```

Copia la salida y agrégala en:  
**GitHub → Settings → SSH and GPG keys → New SSH key**

## Probar la conexión

```bash
ssh -T git@github.com
```

Si todo está configurado correctamente, verás un mensaje de bienvenida desde GitHub.