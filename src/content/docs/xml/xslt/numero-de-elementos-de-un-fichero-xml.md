---
title: Número de elementos de un fichero XML
description: "Ejemplo que explica cómo contar el número de elementos de un fichero XML utilizando XSLT y la función count."
lastUpdated: 2025-12-05
slug: /xml/numero-de-elementos-de-un-fichero-xml/
author: victor_cuervo
---

Si estás tratando un fichero XML es muy probable que necesites conocer el número de elementos que lo componen, de cara a poderlo manipular de una forma más sencilla. Sobre todo si están iterando en un bucle por el número de elementos de un determinado nodo. Saber el número de elementos de un fichero [XML](http://www.manualweb.net/xml/) dado un nodo en concreto es una tarea muy sencilla.


## Documento XML del que contaremos elementos


Imaginemos el siguiente [XML](http://www.manualweb.net/xml/) (¡qué poco original que soy!):


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


Lo primero que haremos en nuestro fichero [XSLT](http://www.manualweb.net/xslt/) será el saber que parte de la estructura del documento [XML](http://www.manualweb.net/xml/) nos interesa contar. Es decir, en un nodo en concreto, para saber el número de elementos que dicha estructura tiene. En este ejemplo, la idea es contar el número de libros que hay en el documento [XML](http://www.manualweb.net/xml/).


## Uso de la función count()


Para contar el número de elementos disponemos de una función. Esta es la función [count()](http://www.w3api.com/wiki/XSLT:Count()):


```xml
count(xpath)
```


El parámetro de la función será una expresión xpath que haga relación a alguna estructura del documento [XML](http://www.manualweb.net/xml/) que estamos tratando. En nuestro caso la expresión xpath será: `/libros/libro`


Para poder mostrar por pantalla el número de elementos deberemos de utilizar la etiqueta [xsl:value-of](http://www.w3api.com/wiki/XSLT:Xsl:value-of), la cual, en su parámetro select llevará la función [count()](http://www.w3api.com/wiki/XSLT:Count()):


```xml
<xsl:value-of select="count(/libros/libro)"></xsl:value-of>
```


## Código completo para conocer el número de elementos de un fichero XML


Así el código completo que utilizaremos para conocer el número de elementos de un fichero XML será el siguiente:


```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html>
 <body>
   <h1>Mis Libros</h1>

   El numero de libros es de	
   <xsl:value-of select="count(/libros/libro)"/>

   <xsl:for-each select="libros/libro">
    <p> 
     <strong>Titulo:</strong><xsl:value-of select="titulo"/><br/>
     <strong>Autor:</strong><xsl:value-of select="autor"/>
    </p>
   </xsl:for-each>

 </body>
 </html>
</xsl:template>
</xsl:stylesheet>
```

