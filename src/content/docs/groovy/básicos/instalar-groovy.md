---
title: "Instalar Groovy"
description: "Descubre cómo instalar Groovy y comienza a desarrollar en este entorno. Sigue los pasos sencillos para configurar tu entorno de desarrollo y ejecuta tus scripts."
date: 2007-01-20
updatedDate: 2026-02-06
tags: ["groovy-home"]
slug: groovy/basicos/instalar-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-8179-b83f-db5c02b1f2bb
author: victor_cuervo
---

Si queremos empezar a desarrollar sobre un **entorno Groovy**, lo primero que tendremos que hacer es **instalar** su entorno de desarrollo. Los pasos para hacerlo son:


## 1. Descargarse Groovy


Para descargarse el **entorno de desarrollo Groovy** deberemos de ir a la [página de Groovy](https://groovy-lang.org/) y [descargarnos la distribución que esté disponible](https://groovy.apache.org/download.html). Esta es un **fichero ZIP**.


## 2. Descomprimir el fichero


Lo siguiente será **descomprimir** la **distribución** en nuestro ordenador. Por ejemplo, en un entorno Windows podría quedar instalado, si usamos el directorio por defecto, de la siguiente forma:


```bash
c:\groovy-1.0\bin
```


## 3. Configurar las variables de entorno


Para poder **compilar** y **ejecutar** nuestros **scripts** tenemos que configurar dos **variables de entorno**: **JAVA_HOME** y **GROOVY_HOME**.


### JAVA_HOME


En **JAVA_HOME** debemos indicarle cual es el **directorio** donde se encuentra la **distribución de Java**. Por ejemplo:


```bash
JAVA_HOME = c:\Java\jdk1.5.0_06
```


### GROOVY_HOME


En **GROOVY_HOME** hay que indicarle donde está la **distribución de Groovy** instalada. Por ejemplo:


```bash
GROOVY_HOME = c:\groovy-1.0
```


Con estos pasos ya tendremos instalado el **entorno Groovy** y podremos empezar a ejecutar y compilar nuestros ejemplos Groovy.

