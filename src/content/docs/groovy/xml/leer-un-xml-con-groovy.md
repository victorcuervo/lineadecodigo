---
title: "Leer un XML con Groovy"
description: "Aprende a leer un XML con Groovy de forma sencilla y efectiva usando XmlSlurper. Descubre cómo acceder a nodos y atributos fácilmente."
date: 2013-01-10
updatedDate: 2026-02-07
tags: ["xml","xmlslurper","gpathresult"]
slug: groovy/xml/leer-un-xml-con-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-81a7-a5b8-d48baad193a6
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/xml/LeerXML.groovy
---

Si el otro día veíamos como podíamos [crear un XML utilizando Groovy](http://lineadecodigo.com/groovy/crear-un-xml-con-groovy/), hoy vamos a ver cómo podemos **leer un XML** mediante [Groovy](http://www.manualweb.net/groovy/).


## Documento XML de ejemplo


Para ello vamos a partir del mismo documento [XML](http://www.manualweb.net/xml/) que generábamos. Es un [XML](http://www.manualweb.net/xml/) de libros y autores muy sencillo.


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


## Utilizar XmlSlurper para leer el XML


Para leer el **fichero** [XML](http://www.manualweb.net/xml/) vamos a utilizar la clase **XmlSlurper**. Será la clase **XmlSlurper** la que nos permita analizar el fichero. Para ello lo primero será instanciar el fichero [XML](http://www.manualweb.net/xml/) mediante una clase **File**.


```groovy
new File('libros.xml')
```


Este objeto de tipo **File** se lo pasaremos al método **parse()** del **XmlSlurper**. El método **parse()** es el que se encarga de interpretar el [XML](http://www.manualweb.net/xml/).


```groovy
def libros = new XmlSlurper().parse(new File('libros.xml'))
```


## Recorrer el XML con GPathResult


Lo bueno de la clase **XmlSlurper** y su método **parse()** es que el resultado lo deja en una estructura estilo **XPath** muy sencilla de recorrer. Esta estructura es un **GPathResult**. Es por ello que el resultado lo podemos recorrer mediante un bucle **for each** de la siguiente forma:


```groovy
for (libro in libros.libro) {...}
```


La variable **libros.libro** contendrá **nodos** de tipo libro. Por ello, si volcamos libro a pantalla, nos mostrará el contenido del **nodo**, es decir, el título de libro.


```groovy
for (libro in libros.libro) {
  println "El título es $libro"
}
```


## Acceder a atributos del XML


Si queremos volcar un **atributo** del nodo. Por ejemplo, el autor, tendremos que utilizar una notación de puntos y una arroba para indicar el **atributo**. Será algo así:


```groovy
for (libro in libros.libro) {
  println "El autor es ${libro.@autor}"
}
```


## Código completo


De esta forma, el código final que tendremos para leer un [XML](http://www.manualweb.net/xml/) con [Groovy](http://www.manualweb.net/groovy/) será:


```groovy
def libros = new XmlSlurper().parse(new File('libros.xml'))
for (libro in libros.libro) {
	println "El libro titulado $libro fue escrito por ${libro.@autor}"
}
```

