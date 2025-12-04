---
title: Filtrar información en una XSLT
description: "Artículo que explica cómo filtrar información en una XSLT utilizando estructuras como xsl:if y xsl:for-each."
lastUpdated: 2025-12-04
slug: /xml/filtrar-informacion-en-una-xslt/
author: victor_cuervo
---

Nuestras hojas de transformación no se tienen que limitar a recuperar toda la información de un fichero [XML](http://www.manualweb.net/xml/) y a ponerla en otro tipo de formato. Puede ser que cierta información del documento no nos interese, o tenga que ser evaluada. Es por ello que puede darse el caso de que necesitemos filtrar información en una [XSLT](http://www.manualweb.net/xslt/). Para poder realizar esa evaluación de datos nos podemos apoyar en estructuras condicionales como [xsl:if](http://w3api.com/wiki/XSLT:Xsl:if), [xsl:choose](http://w3api.com/wiki/XSLT:Xsl:choose) y las funciones que tiene el lenguaje [XSL](http://www.manualweb.net/xsl/).


## Documento XML sobre el que aplicaremos el filtro.


Siguiendo al resto de los [ejemplos XSLT de nuestra web](http://lineadecodigo.com/categoria/xslt/), vamos a utilizar el fichero [XML](http://www.manualweb.net/xml/) con los datos de los libros. Pero en este caso vamos a añadir un nuevo campo en la estructura. Este nuevo campo será el precio del libro. El fichero de libros nos quedará así:


```xml
<libros>
  <libro>
    <titulo>Fuente Ovejuna</titulo>
    <autor>Lope de Vega</autor>
    <isbn>84-9815-002-7</isbn>
    <precio>24</precio>
  </libro>
  <libro>
    <titulo>La Celestina</titulo>
    <autor>Fernando de Rojas</autor>
    <isbn>84-96390-96-9</isbn>
    <precio>32</precio>
  </libro>
  ...
</libros>
```


## Recorrer el listado de libros


La condición de nuestra hoja de transformación será el generar un listado de libros, pero siempre y cuando, estos, tengan un precio superior o igual a 30 euros. Para ello lo primero que tenemos que hacer es mostrar el listado de libros. Esto lo conseguimos con una estructura repetitiva del tipo [xsl:for-each](http://w3api.com/wiki/XSLT:Xsl:for-each). En medio de esta estructura, utilizando etiquetas [xsl:value-of](http://w3api.com/wiki/XSLT:Xsl:value-of) mostramos la información del titulo del libro, autor y precio del mismo. Tendremos el siguiente código:


```xml
<xsl:for-each select="libros/libro">
  <p>
  Titulo:<xsl:value-of select="titulo"></xsl:value-of><br></br>
  Autor:<xsl:value-of select="autor"></xsl:value-of><br></br>
  Precio:<xsl:value-of select="precio"></xsl:value-of>
  </p>
</xsl:for-each>
```


El código anterior nos va a sacar todos los libros que tengamos definidos en nuestra estructura [XML](http://www.manualweb.net/xml/). Todavía no hemos ejecutado el filtro.


## Evaluar una condición mediante xsl:if


Para aplicar el filtro utilizamos la etiqueta xsl:if. Antes de utilizarla refrescaremos cual es su estructura


```xml
<xsl:if test="condicion"> ... </xsl:if>
```


Como podemos ver, el atributo test es el que nos permite evaluar la condición. Como condición podemos utilizar cualquiera de las funciones que nos da el lenguaje [XSLT](http://www.manualweb.net/xslt/) o simplemente comparar valores de elementos del documento [XML](http://www.manualweb.net/xml/) contra constantes. Este último caso será el nuestro. Y es que nosotros contrastaremos el valor de un elemento del documento, el precio, contra una constante, 24 (euros € o dolares $ ;-)) Quedándonos al final esta línea de código:


```xml
<xsl:if test="precio>24"> ... </xsl:if>
```


## Mostrar el elemento filtrado


En el medio de esta decisión pondremos la extracción de información del libro, es decir, los [xsl:value-of](http://w3api.com/wiki/XSLT:Xsl:value-of). Nuevamente, quedándonos:


```xml
<xsl:for-each select="libros/libro">
  <xsl:if test="precio>=30">
    <p>
    Titulo:<xsl:value-of select="titulo"></xsl:value-of><br></br>
    Autor:<xsl:value-of select="autor"></xsl:value-of><br></br>
    Precio:<xsl:value-of select="precio"></xsl:value-of>
    </p>
  </xsl:if>
</xsl:for-each>
```

