---
title: "Generar un fichero XML con Groovy"
description: "Aprende a generar un fichero XML con Groovy utilizando MarkupBuilder y StringWriter, facilitando la creación de documentos estructurados de forma sencilla."
date: 2013-01-12
updatedDate: 2026-02-07
tags: ["xml","stringwriter","markupbuilder","file","write"]
slug: groovy/xml/generar-un-fichero-xml-con-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-8124-934c-dc18ee7eeb9c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/xml/CrearFicheroXML.groovy
---

Si has visto alguno de nuestros últimos ejemplos sobre [Groovy](http://www.manualweb.net/groovy/) habrás visto que hemos [generado un documento XML](http://lineadecodigo.com/groovy/crear-un-xml-con-groovy/) y hemos [creado un fichero de texto](http://lineadecodigo.com/groovy/escribir-un-fichero-con-groovy/). Ahora vamos a ver cómo mezclando estos dos códigos podemos generar un fichero en XML con [Groovy](http://www.manualweb.net/groovy/).


## Crear el StringWriter


Lo primero será definir un StringWriter que será la cadena que contenga nuestro [XML](http://www.manualweb.net/xml/).


```groovy
def sw = new StringWriter()
```


## Construir el documento XML con MarkupBuilder


Ahora, ayudados del MarkupBuilder construimos el documento XML.


```groovy
def xml = new groovy.xml.MarkupBuilder(sw)
xml.libros{
  libro(autor:"Cervantes","El Quijote")
  libro(autor:"Homero","La Iliada")
  libro(autor:"Camilo Jose Cela","Viaje a la Alcarria")
}
```


Vemos que al MarkupBuilder le hemos pasado el StringWriter, que será dónde se quede almacenado el documento XML.


## Crear la referencia al fichero


Ahora creamos una referencia al fichero [XML](http://www.manualweb.net/xml/) donde vamos a volcar el contenido. Para ello utilizamos la clase File.


```groovy
def f = new File("libros.xml")
```


## Escribir el contenido en el fichero


Ya solo nos quedará volcar el contenido sobre el fichero. En este caso nos apoyamos en el método write.


```groovy
f.write(sw.toString())
```


El contenido del StringWriter lo conseguimos convirtiéndolo a String mediante el método `.toString()`. De esta forma ya tenemos generado nuestro fichero [XML](http://www.manualweb.net/xml/) mediante [Groovy](http://www.manualweb.net/groovy/).

