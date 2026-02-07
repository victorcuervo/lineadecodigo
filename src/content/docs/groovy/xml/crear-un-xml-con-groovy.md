---
title: "Crear un XML con Groovy"
description: "Descubre cómo crear un XML con Groovy usando MarkupBuilder para almacenar libros y autores de forma sencilla y eficiente. ¡Transforma tu código hoy!"
date: 2013-01-08
updatedDate: 2026-02-07
tags: ["atributo","markupbuilder","nodo","stringwriter","xml"]
slug: groovy/xml/crear-un-xml-con-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-81b9-8f77-c8c15ba8d055
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/xml/CrearXML.groovy
---

En este ejemplo vamos a utilizar el lenguaje **Groovy para crear un documento XML**. Para ello vamos a utilizar la clase `MarkupBuilder` que será la que nos ayude a construir de una forma sencilla el XML con Groovy.


## XML a generar


El XML que pretendemos generar es un XML que nos permita almacenar libros y autores. En este caso lo hemos definido de la siguiente forma:


```xml
<libros>
  <libro autor="Cervantes">El Quijote</libro>
  <libro autor="Homero">La Iliada</libro>
  <libro autor="Camilo Jose Cela">Viaje a la Alcarria</libro>
  <libro autor="Camilo Jose Cela">La Colmena</libro>
  <libro autor="Valerio Massimo Manfredi">Talos de Esparta</libro>
  <libro autor="Valerio Massimo Manfredi">La Última Legión</libro>
</libros>
```


Vemos que los autores van como atributo del elemento libro y que el contenido de dicho libro es el título del libro. Todos los libros están bajo una estructura libros. Algo sencillo.


## Crear el StringWriter


Si empezamos con nuestro código Groovy lo primero será definir una cadena, en la cual dejaremos el resultado de nuestro XML. Para ello vamos a utilizar la clase `StringWriter`:


```groovy
def sw = new StringWriter()
```


## Instanciar el MarkupBuilder


Esta cadena se la pasaremos a la instanciación del `MarkupBuilder`:


```groovy
def xml = new groovy.xml.MarkupBuilder(sw)
```


## Crear los nodos XML


Lo bueno del dinamismo de Groovy es que permite crear métodos que no existen. Así cada uno de los nodos del XML estará expresado mediante un método con el nombre del nodo. Por ejemplo, para representar el nombre del nodo libros haremos lo siguiente:


```groovy
xml.libros(){}
```


Ya solo eso nos creará la estructura del nodo raíz.


## Añadir elementos al XML


Ahora vamos a definir cada uno de los elementos libro. Estos los ponemos dentro de las llaves del elemento libros. Será de la siguiente forma:


```groovy
xml.libros{
  libro("El Quijote")
  libro("La Iliada")
  libro("Viaje a la Alcarria")
}
```


Vemos que el texto que le pasamos a la estructura libro es el título del libro en cuestión.


## Añadir atributos a los elementos


Si ahora queremos añadir los atributos, estos los vamos a poner dentro de la llamada al método libro, con una diferencia y es que seguirán la estructura:


```groovy
atributo:"valor del atributo"
```


Así, meteremos los autores como atributos de los elementos con el siguiente código:


```groovy
xml.libros{
  libro(autor:"Cervantes","El Quijote")
  libro(autor:"Homero","La Iliada")
  libro(autor:"Camilo Jose Cela","Viaje a la Alcarria")
}
```


## Código completo


El código final para crear un XML con Groovy quedará de la siguiente forma:


```groovy
def sw = new StringWriter()

def xml = new groovy.xml.MarkupBuilder(sw)
xml.libros{
  libro(autor:"Cervantes","El Quijote")
  libro(autor:"Homero","La Iliada")
  libro(autor:"Camilo Jose Cela","Viaje a la Alcarria")
  libro(autor:"Camilo Jose Cela","La Colmena")
  libro(autor:"Valerio Massimo Manfredi","Talos de Esparta")
  libro(autor:"Valerio Massimo Manfredi","La Última Legión")
}

println sw
```

