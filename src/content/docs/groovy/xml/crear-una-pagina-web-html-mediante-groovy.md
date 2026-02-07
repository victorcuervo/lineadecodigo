---
title: "Crear una página web HTML mediante Groovy"
description: "Crea una página web HTML de forma sencilla usando Groovy y MarkupBuilder. Aprende a generar el código necesario y a crear tu propio sitio web fácilmente."
date: 2013-01-14
updatedDate: 2026-02-07
tags: ["stringmarker","markupbuilder","file","write"]
slug: groovy/xml/crear-una-pagina-web-html-mediante-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-81bb-bfa5-d7b2d0c9fb88
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/xml/GenerarHTML.groovy
---

En este ejemplo vamos a ver cómo podemos crear una página web HTML mediante [Groovy](http://www.manualweb.net/groovy/). Vamos a generar un código [HTML](https://www.manualweb.net/html/) de una forma muy sencilla apoyándonos en [Groovy](http://www.manualweb.net/groovy/).


Para poder crear la página [HTML](https://www.manualweb.net/html/) vamos a utilizar la clase **MarkupBuilder**, la misma que utilizábamos para [crear un documento XML con Groovy](http://lineadecodigo.com/groovy/crear-un-xml-con-groovy/). Lo que sucede en este caso es que con **MarkupBuilder** vamos a crear los tags de [HTML](https://www.manualweb.net/html/).


## Definir MarkupBuilder


Así, lo primero será definir nuestro **MarkupBuilder** y su respectiva **StringWriter** que será dónde dejemos el contenido de la página web [HTML](https://www.manualweb.net/html/).


```groovy
def sw = new StringWriter();
def paginaweb = new groovy.xml.MarkupBuilder(sw)
```


Ahora, mediante los métodos dinámicos del **MarkupBuilder** vamos creando la estructura [HTML](https://www.manualweb.net/html/). Hay que recordar que para crear un nodo de la página web [HTML](https://www.manualweb.net/html/) haremos lo siguiente:


```groovy
paginaweb.elemento(atributos,contenido){elementos_hijo}
```


## Crear elemento HTML


Vamos a crear el elemento raiz [HTML](https://www.manualweb.net/html/).


```groovy
paginaweb.html({})
```


Vemos que como no tiene ni atributos, ni contenido, ni elementos hijo (todavía), lo construimos vacío. Pero, ahora vamos a insertarle la cabecera o **HEAD** y el cuerpo o [BODY](https://www.w3api.com/HTML/body/).


```groovy
paginaweb.html({
	head({
		title("Pagina Web Generada Con Groovy")
	})
	body({})
})
```


Vemos que cada elemento de nuestra página web [HTML](https://www.manualweb.net/html/) tiene un método asociado. Y que en el caso del título de la página o [TITLE](https://www.w3api.com/HTML/title-elemento/) lleva contenido, dicho contenido lo hemos metido como parámetro del metodo.


## Añadir elementos con atributos


Ahora vamos a poner un elemento con atributos, por ejemplo, un texto que tenga un enlace. Para ello utilizamos un elemento [A](https://www.w3api.com/HTML/a/) y su atributo [href](https://www.w3api.com/HTML/a/href/).


```groovy
paginaweb.html({
	head({
		title("Pagina Web Generada Con Groovy")
	})
	body({		
		a(href:"http://lineadecodigo.com","Linea de Codigo")
	})
})
```


Vemos que es muy sencillo ir creando elementos [HTML](https://www.manualweb.net/html/) con nuestro **MarkupBuilder**. De esta forma, el código completo de la página quedará de la siguiente forma:


```groovy
paginaweb.html({
	head({
		title("Pagina Web Generada Con Groovy")
	})
	body({
		h1("Pagina creada con Groovy")
		p("Esto es una pagina generada mediante un programa Groovy")
		hr()		
		a(href:"http://lineadecodigo.com","Linea de Codigo")
	})
})
```


## Crear el fichero HTML


Ya solo nos quedará crear un fichero .html para volcar el contenido. En este caso utilizamos la clase **File** para volcar la página web [HTML](https://www.manualweb.net/html/).


```groovy
def fichero = new File("index.html")
fichero.write(sw.toString())
```


Así ya tenemos nuestra página web [HTML](https://www.manualweb.net/html/) generada con [Groovy](http://www.manualweb.net/groovy/).

