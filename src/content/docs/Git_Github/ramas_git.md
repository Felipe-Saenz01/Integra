---
title: Ramas de Git con git branch
descripction: Descripcion de creacion y uso de ramas con git
sidebar:
    label: git branch (Ramas)
    order: 7
---

Los **Branch** (Ramas) en git son uno de los elementos mas importantes de git ya que esta es la línea de vida de cambios de nuestro proyecto, a la que podemos derivar otra línea de vida temporal en la cual poder realizar otros cambios, presentando una gran versatilidad en situaciones que queremos probar un código y no queremos dañar la estructura actual de nuestro proyecto o en situaciones de trabajo colaborativo donde queremos evitar estropear el trabajo de otra persona.

![Diagrama de Git](../../../assets/Git_Github/diagrama-commits-git.png)

Cuando [Iniciamos un repositorio](/Documentacion_Integra/git_github/iniciar_repositorio) este nos crea una rama por defecto según la configuración establecida en la instalación de git en el equipo, las ultimas versiones dejan la rama principal como **main**, versiones anteriores la rama por defecto es **master**

:::note
Despues de los eventos de racismo del 2020 en Estados Unidos y las iniciativas como **Blac lives Matter**
git y github establecieron el cambio de terminos como Maestro, Esclavo, Lista Blanca, Lista Negra, entre otras, como palabras de relacion a una cultura de racismo, desde ese entoces se ha establecido el estandar o convencion de usar **Main** como la rama principal en vez de Master, por lo que es recomendable seguir esta convencion para evitar problemas de configuracion con las plataformas de github.
:::

## Creacion de ramas

Para crear una rama nueva se utiliza el siguiente comando:

```bash
git branch nombre_rama
```
Este comando crea una rama nueva que va a empezar a partir del ultimo commit de la rama en la que se esta situado

![Diagrama creacion nueva rama](../../../assets/Git_Github/diagrama-git-branch.png)

## Git FLow (flujo de trabajo)

El **Git Flow** (flujo de trabajo) es el protocolo establecido del manejo de las ramas, generalmente para el trabajo colaborativo. Cada empresa establece como va a ser su flujo de trabajo, muchas basan su flujo de trabajo de ramas principales como **main** y **desarrollo**, y a su vez trabaja en ramas temporales segun el la tematica de lo trabajado o si son arreglos en caliente.

En Yopal hemos estado usando un flujo de trabajo de ramas principales estaticas:
1. **nombre_desarrollo:** las ramas en las que trabajamos los nuevos desarrollos, entre estas estan ramas como lisseth_desarrollo, nicolas_desarrollo y felipe_desarrollo.
2. **pre_produccion:** esta rama es donde se unifican, prueban y validan los cambios realizados en las ramas de desarrollo.
3. **main:** la rama principal en la que se pasan las nuevas funcionalidades listas para ser entragadas al jefe de desarrollo.

![Diagrama flujo de trabajo en Yopal](../../../assets/Git_Github/Git-Flow-Capacitacion.png)


## Ver ramas locales
Con el siguiente comando se puede ver las ramas que estan de forma local en el proyecto donde la rama en la que estamos ubicados se relsaltará con un asterisco (*)
```bash
git branch -l
```
![Ejemplo de visualizacion ramas locales de git](../../../assets/Git_Github/git-branch-ejemplo.png)


## Cambiar de rama
Para cambiar/navegar entre ramas se utiliza el siguiente comando:
```bash
git checkout nombre_rama
```

![Ejeplo navegacion/cambio entre ramas](../../../assets/Git_Github/git-checkout-branch.png)

:::caution
Es importante tener en cuenta que antes de cambiar a otra rama, no deben existir modificaciones pendientes por guardar, en caso de tener modificaciones por guardar al cambiar de rama, las modificaciones tambien cambian de rama, algo que puede llegar a presentar conflictos.
:::

## Cambiar el nombre de una rama
El siguiente comando cambia el nombre de la rama en el que estamos ubicados:
```bash
git branch -M nuevo_nombre
```