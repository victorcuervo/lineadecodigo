---
title: "Paso de argumentos en Groovy"
description: "Descubre cómo pasar argumentos en Groovy de manera sencilla y efectiva, permitiendo un manejo dinámico de datos en tus scripts. ¡Optimiza tu código ahora!"
date: 2012-12-17
updatedDate: 2026-02-06
tags: ["args","closure","each"]
slug: groovy/basicos/paso-de-argumentos-en-groovy
type: doc
topic: groovy
id: aba37c4d-733e-4786-8474-4964366e38f6
author: ARIEL
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/basicos/PasarArgumentos.groovy
---

Al igual que [Java](https://www.manualweb.net/java/), en [Groovy](http://www.manualweb.net/groovy/) puedes introducir valores al ejecutar tu programa. Esto se conoce como **paso de parámetros** o **paso de argumentos**.


## Pasar un único argumento


Vamos a ver en un ejemplo cómo pasar un único valor a un **script**. Tenemos el siguiente código:


```groovy
if(args){
  println "Hola "+args[0]
} else{
  println "no introduciste nada"
}
```


Vemos que solo accedemos a la posición 0 del **array** de **argumentos** o **args**. Esto significa que solo recuperaremos el valor que se encuentre en dicha posición.


## Compilar y ejecutar el script


**Compilamos:**


```bash
groovyc miScript.groovy
```


**Ejecutamos:**


```bash
groovy miScript.groovy Enrique
```


## Pasar múltiples argumentos


El **parámetro** que le enviamos ("Enrique") por defecto es de tipo **String**. Ahora si queremos enviar más de un **parámetro** necesitamos hacerlo mediante el uso del método **each()**. En **each** ejecutaremos un **closure** y el **iterador** del **closure** será el que contenga todos los valores que hayan venido como **parámetros** al programa.


```groovy
if(args){
  args.each(){ it->
    println "Hola $it"
  }  
}else{
   println "no introduciste nada"
}
```


## Ejecutar con múltiples argumentos


Ejecutamos el script con múltiples **argumentos**:


```bash
groovy miScript.groovy Enrique Magda Camila Juan
```


El resultado será:


```bash
Hola Enrique
Hola Magda
Hola Camila
Hola Juan
```

