---
title: Repositorios remotos con git y github
description: Descripcion de conexion y uso repositorios remotos
sidebar:
    label: Repositorios Remotos
    order: 9
lastUpdated: 2025-10-09
---

Los **repositorios remotos** son versiones de tu proyecto que se guardan en un servidor
(GitHub, GitLab, Bitbucket, etc.). Permiten que varias personas colaboren en el mismo código y mantengan sincronizado el trabajo.


## Establecer un repositorio remoto

Cuando queremos trabajar con un repositorio remoto, primero debemos establecer una conexión entre nuestro repositorio local y el remoto. Esto se hace utilizando el comando:

```bash
git remote add alias url_del_repositorio                                          #estructura
git remote add origin git@github.com:Felipe-Saenz01/Documentacion_Integra.git     #ejemplo
```

El alias es un nombre o variable el cual va a apuntar a la url del repositorio remoto, por defecto el alias que se utiliza es **origin**.

Podemos confirmar que el repositorio remoto se ha agregado correctamente utilizando el comando:

```bash
git remote -v
```

## Clonar un repositorio
Si queremos obtener una copia de un repositorio remoto en nuestro equipo, podemos utilizar el comando `git clone`. Este comando crea una copia local del repositorio remoto y establece la configuracion del origin.

```bash
git clone url_del_repositorio                                         #estructura   
git clone git@github.com:Felipe-Saenz01/Documentacion_Integra.git     #ejemplo
```


## Git Fetch

El comando `git fetch` descarga los indices de los cambios del repositorio remoto pero **no los fusiona** con tu rama local. Sirve para el repositorio local sepa que cambios hay en el remoto para que los pueda traer.

```bash
git fetch origin
```

## Git Pull

El comando `git pull` es equivalente a hacer `git fetch` seguido de un `git merge`.  
Descarga los cambios y los integra en tu rama actual.

```bash
git pull alias nombre_rama  # estructura
git pull origin main        # ejemplo
```

### Traer una rama que no existe localmente

:::caution
Es importante tener en cuenta que si queremos traer una rama del reposiotorio remoto que no existe en nuestro repositorio local, el comando `git pull origin nombre_rama` no funcionará, ya que el comando internamente ejecuta un `git fetch` + `git merge`, pero como esa rama no existe localmente, lo que git va a hacer es pegar los cambios en la rama que estan ubicados.
:::

Para traer una rama que no existe localmente podemos usar varios comandos:

```bash
# estructura general
git fetch alias nombre_rama:nombre_rama
git checkout -b nombre_rama alias/nombre_rama
git switch -c nombre_rama alias/nombre_rama

# ejemplo
git checkout -b nicolas_desarrolo origin/nicolas_desarrollo
git switch -c nicolas_desarrollo origin/nicolas_desarrollo
git fetch origin nicolas_desarrollo:nicolas_desarrollo
```

Siendo las dos ultimas opciones las mas recomendadas, ya que crean y posicionan en la nueva rama en un solo comando.


## Git Push

El comando `git push` envía tus commits locales al repositorio remoto.

```bash
git push -u alias nombre_rama   # estructura
git push -u origin main         # ejemplo
```

Esto actualiza el repositorio remoto con tu trabajo y lo hace visible para los demás colaboradores.

:::tip
Una buena práctica es que antes de hacer un `git push` se haga un `git pull` para asegurarse que el repositorio local este actualizado con los cambios del remoto y evitar conflictos.
:::
