---
title: "Un vistazo a los closures en Groovy"
description: "Descubre cómo Groovy utiliza los closures para simplificar funciones y manipular variables. Aprenderás ejemplos prácticos y su ejecución fácil. ¡No te lo pierdas!"
date: 2012-07-12
updatedDate: 2026-02-07
tags: ["diccionario","lista","closure","parametros"]
slug: groovy/basicos/un-vistazo-a-los-closures-en-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-8189-b146-c8c75ece5c1a
author: ariel
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/basicos/Closures.groovy
---

Inicio mis post en **lineadecodigo** con un pequeño vistazo a los [**closures**](http://groovy.codehaus.org/Closures).


## ¿Qué es Groovy y qué son los Closures?


Antes de empezar debemos de conocer dos conceptos. Por un lado **Groovy**, es un lenguaje de programación dinámico y fácil de aprender similar a **Python** y **Ruby** que va ganando terreno entre los desarrolladores [Java](https://www.manualweb.net/java/).


Y un **Closure**, es la manera en como una **función** dentro de otra función contenedora puede hacer referencia a las **variables** después de que la función contenedora ha terminado de ejecutarse. Este término es algo difícil de entender, sin embargo pienso que con unos cuantos ejemplos entiendan el concepto.


Lo primero que haremos será crear un archivo (o fichero) y lo vamos a llamar "Closures.groovy".


## Ejemplos de Closures en Groovy


Veamos diferentes formas de codificar un **closure**:


### Closure simple


Creamos un **closure** muy simple.


```groovy
//imprime el mensaje "Hola desde un closure"
def hola={
  println("Hola desde un closure")
}

//invocar closure "hola"
hola()
```


### Closure con un parámetro


Ahora un **closure** con un **parámetro**.


```groovy
// multiplica un número por 2
def doble={ n ->
  return n*2
}

//invocar closure "doble"
def numero=doble(5)
println("el doble de 5 es "+numero)
// también puede escribirse println "el doble de 5 es ${numero}"
```


### Closure con dos parámetros


Ahora un **closure** con dos **parámetros**.


```groovy
def var="Bienvenido"
// imprime el valor de var y el parámetro que le envie el usuario
def msg1={it -> println "${var} ${it}"}
//invocamos el closure, debe salir el mensaje "Bienvenido mundo"
msg1("mundo")
```


### Closure con método como parámetro


**Closure** más complejo, recibe un método como **parámetro**.


```groovy
//defino un closure con dos parámetros
def otro={metodo, parametro -> metodo(parametro)}
//ahora defino dos closure que reciben un solo parámetro
def inicio={it -> println "Hola ${it}"}
def fin={it -> println "Adios ${it}"}
//invoco el closure "otro"
otro(inicio,"Fernando")
otro(fin,"Fernando")
```


### Closure con listas


Mandamos una **lista** a un **closure**.


```groovy
//defino una lista
def lista=["Andrea","Fernando","Antonio","Lucero","Veronica"]
//uso el closure "inicio"
println "\n"
lista.each inicio
```


### Closure con diccionarios


Ejemplo con **closures** y **diccionarios**.


```groovy
//defino el diccionario
def dicc=['Fernando':31,'Veronica':27,'María':43,'Yezmin':26,'Horacio':15]
def suma=0
//defino el closure
def edadTotal={ x ->
x.each{
suma+=it.value
// println("obtener valor: "+it.value+ " obtener llave o identificador: "+it.key)
}
println("Suma total de edades: "+suma)
}
//invoco el closure
edadTotal(dicc)
```


## Ejecutar el código


Para ejecutar este archivo pueden teclear desde la consola de comandos:


```bash
groovy Closures.groovy
```


También se puede probar el código mediante la **consola groovy**:


```bash
groovyconsole Closures.groovy
```


Si quieres puedes leer más información sobre los Closures de Groovy en [http://groovy.codehaus.org/Closures](http://groovy.codehaus.org/Closures)

