---
title: "Mi primer XSLT"
description: "El documento explica cómo crear mi primer XSLT para transformar un archivo XML de libros a XHTML."
date: 2009-09-04
updatedDate: 2026-01-24
tags: ["xsl:template","xsl:value-of","xml","xslt"]
slug: xml/transformacion/mi-primer-xslt
author: victor_cuervo
type: doc
id: ae276160-0f4c-4cb7-b0d9-f0ac5f276949
download: https://github.com/victorcuervo/lineadecodigo_xml/tree/master/xslt/mi-primer-xslt
---

[XSLT](http://www.manualweb.net/xslt/) es un lenguaje que nos permite transformar documentos [XML](http://www.manualweb.net/xml/) de un formato a otro. Por ejemplo transformar documentos [XML](http://www.manualweb.net/xml/) en documentos XHTML u otros documentos [XML](http://www.manualweb.net/xml/). Para crear nuestro primer [XSLT](http://www.manualweb.net/xslt/) lo primero que tenemos que hacer es escribir nuestro fichero [XML](http://www.manualweb.net/xml/). 


## Definir el documento XML a transformar


En el caso de este ejemplo vamos a construir un documento de libros como vemos a continuación:


```xml
<libros>
  <libro>
    <titulo>Fuente Ovejuna</titulo>
    <autor>Lope de Vega</autor>
    <isbn>84-9815-002-7</isbn>
  </libro>
  <libro>
    <titulo>La Celestina</titulo>
    <autor>Fernando de Rojas</autor>
    <isbn>84-96390-96-9</isbn>
  </libro>
  ...
</libros>
```


Lo que vamos a hacer mediante el [XSLT](http://www.manualweb.net/xslt/) es obtener información del documento [XML](http://www.manualweb.net/xml/) y crear un documento XHTML donde se vean dichos datos.


## Crear el documento XSLT


Para construir el documento [XSLT](http://www.manualweb.net/xslt/) lo primero que tenemos que saber es que, este, es a su vez otro documento [XML](http://www.manualweb.net/xml/). Por lo tanto, la primera línea que nos encontraremos será la definición del [XML](http://www.manualweb.net/xml/).


```xml
<?xml version="1.0" encoding="UTF-8"?>
```


Lo siguiente es empezar a definir la hoja de estilos y el namespace asociado.


```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"></xsl:stylesheet>
```


## Uso del elemento template


En todo documento [XSLT](http://www.manualweb.net/xslt/), su cuerpo, es formado por las plantillas. Estas nos indicaran a partir de que elemento del documento [XML](http://www.manualweb.net/xml/) vamos a empezar a trabajar. Para nuestro ejemplo, y ya que vamos a pintar en pantalla el primer libro y el primer autor, nos posicionaremos dentro de la estructura libros dela siguiente forma:


```xml
<xsl:template match="libros"></xsl:template>
```


El propio documento [XSLT](http://www.manualweb.net/xslt/) combina sentencias de transformación con código [HTML](http://www.manualweb.net/tutorial-html/). Por lo que encontraremos a continuación es un documento [HTML](http://www.manualweb.net/tutorial-html/).


```xml
<h1> Mi primer documento XSLT </h1>
...Código XSLT...
```


Aunque las sentencias del [XSLT](http://www.manualweb.net/xslt/) son bastantes, la que nosotros necesitamos conocer en este momento es la que nos ayuda a obtener el valor de una etiqueta [XML](http://www.manualweb.net/xml/). Cabe indicar que todas las etiquetas [XSLT](http://www.manualweb.net/xslt/) empiezas por xsl que es el namespace definido anteriormente.


## Recuperar el valor de un elemento XML


Así, para recuperar el valor de una etiqueta usamos [xsl:value-of](http://w3api.com/wiki/XSLT:Xsl:value-of). Como atributo de esta etiqueta encontramos [select](http://w3api.com/wiki/XSLT:Xsl:value-of.select). El cual, nos sirve para seleccionar el nodo (elemento) del cual queremos extraer su valor:


```xml
<xsl:value-of select="libro/titulo"></xsl:value-of>
<xsl:value-of select="libro/autor"></xsl:value-of>
```


Tanto en el [`template`](http://w3api.com/wiki/XSLT:Xsl:template) con el atributo [match](http://w3api.com/wiki/XSLT:Xsl:template.match), como en la etiqueta [xsl:value-of](http://w3api.com/wiki/XSLT:Xsl:value-of) con el atributo [select](http://w3api.com/wiki/XSLT:Xsl:value-of.select) estamos utilizando valores XPath. Estos lo que vienen a reflejar, en grandes rasgos, son elementos dentro del árbol [XML](http://www.manualweb.net/xml/). Lo último que nos quedará hacer es reflejar en el documento [XML](http://www.manualweb.net/xml/) la relación con su fichero de transformación. Para ello utilizamos la siguiente línea dentro del fichero [XML](http://www.manualweb.net/xml/):


```xml
<?xml-stylesheet type="text/xsl" href="mi-primer-xslt.xsl"?>
```


Aunque la potencia del [XSLT](http://www.manualweb.net/xslt/) es muy grande, nos vamos a encontrar que hay navegadores que no lo soportan. En el grupo de los navegadores que si lo soportan encontramos a FireFox, Internet Explorer 6,… y en el grupo de los que no Opera 8, Internet Explorer 5,… Seguro que en el futuro, todos los navegadores incluirán el soporte de este potente lenguaje de transformación.


## Código de mi primer XSLT


De esta manera nuestro primer XSLT quedará de la siguiente forma:


```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="libros">

 <html>
 <body>
 <h1>Mi primer documento XSLT</h1>
  <strong>Libro:</strong> <xsl:value-of select="libro/titulo"/>
  <br/>
  <strong>Autor:</strong> <xsl:value-of select="libro/autor"/>
 </body>
 </html>

</xsl:template>
</xsl:stylesheet>
```

