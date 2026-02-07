---
title: "Hola Mundo en Groovy"
description: "Descubre cómo crear tu primer programa \"Hola Mundo\" en Groovy. Aprende a instalar Groovy y ejecutar scripts de manera sencilla y efectiva."
date: 2007-01-20
updatedDate: 2026-02-07
tags: ["println","hola-mundo"]
slug: groovy/basicos/hola-mundo-en-groovy
type: doc
topic: groovy
id: 37089d79-d6bc-4d9a-bd89-67d96b5fa0a7
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/basicos/HolaMundo.groovy
---

Pongámonos manos a la obra y veamos que pasos hay que dar para hacer el primer programa con [Groovy](http://www.manualweb.net/groovy/). Y claro, no podría ser otro que el programa de **Hola Mundo**.


## Instalar Groovy


Lo primero que tenemos que hacer es descargarnos e instalar el kit de desarrollo de [Groovy](http://www.manualweb.net/groovy/). Para ello te tienes que leer el artículo Instalar Groovy, de nuestro [Tutorial Groovy](http://www.manualweb.net/groovy/). En él se te explica como configurar de una manera muy sencilla el entorno.


## Crear el fichero Groovy


Una vez tengamos nuestro entorno a punto, crearemos un **fichero** que llamaremos "Hola.groovy". Para ello podemos utilizar cualquier editor de textos.


La sentencia que sirve para volcar datos a **consola** es **println(texto)**. Así, la línea de código que tendremos que poner en el fichero "Hola.groovy" será la siguiente:


```groovy
println("Hola Mundo")
```


## Ejecutar el script


Para ejecutar el **script** deberémos de utilizar el comando **groovy** que viene con el entorno de desarrollo. Tendremos que teclear lo siguiente en nuestra línea de comando:


```bash
groovy Hola.groovy
```

