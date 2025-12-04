---
title: Ordenando un fichero XML
description: "Artículo que explica cómo ordenar un fichero XML utilizando XSLT y la etiqueta xsl:sort para organizar libros."
lastUpdated: 2025-12-04
slug: /xml/ordenando-un-fichero-xml/
author: victor_cuervo
---

Cada día tratamos más fuentes de información basadas en [XML](http://www.manualweb.net/xml/). Ficheros que intercambiamos, bases de datos basadas en [XML](http://www.manualweb.net/xml/) o simplemente registros que contienen información variopinta. Podemos apoyarnos en [XSLT](http://www.manualweb.net/xslt/) para dejar ordenado un fichero [XML](http://www.manualweb.net/xml/). Y al igual que cuando tratamos una base de datos, podemos dejarle ordenado por el campo que nosotros queramos.


## Documento XML que vamos a ordenar


Lo primero que tenemos que hacer es definir el [XML](http://www.manualweb.net/xml/) sobre el que vamos a recuperar la información. Utilizaremos la misma estructura de libros que utilizamos en el resto de los ejemplos:


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
  <libro>
    <titulo>Don Juan Tenorio</titulo>
    <autor>Jose Zorilla</autor>
   <isbn>84-96390-97-7</isbn>
  </libro>
</libros>
```


## Recorrer los elementos y mostrarlos


En primer lugar vamos a recorrer los elementos que queremos mostrar. En nuestro caso mostraremos los libros y autores de los mismos. Esto lo podemos llevar a cabo con la etiqueta [xsl:for-each](http://www.w3api.com/wiki/XSLT:Xsl:for-each), la cual, mediante el atributo [select](http://www.w3api.com/wiki/XSLT:Xsl:for-each.select) demarca el path del documento [XML](http://www.manualweb.net/xml/) sobre el que queremos iterar.


El path elegido será libros/libro. En el caso de que queramos recuperar los valores de un elemento en concreto utilizamos la etiqueta [xsl:value-of](http://www.w3api.com/wiki/XSLT:Xsl:value-of). En este etiqueta, al igual que en la etiqueta [xsl:for-each](http://www.w3api.com/wiki/XSLT:Xsl:for-each), el atributo [select](http://www.w3api.com/wiki/XSLT:Xsl:for-each.select) nos indicará el elemento a recuperar. Al final nos quedará un código como el que vemos:


```xml
<xsl:for-each select="libros/libro">
<p>
Titulo:<xsl:value-of select="titulo"></xsl:value-of><br></br>
Autor:<xsl:value-of select="autor"></xsl:value-of>
</p>
</xsl:for-each>
```


Vemos que nuestro documento [XSLT](http://www.manualweb.net/xslt/) combina etiquetas de transformación (etiquetas del namespace xsl) y etiquetas XHTML que conformarán el documento definitivo, obtenido tras la transformación.


Si solo ponemos este código, nos saldrá la información, pero sin ordenar:


```text
Mis Libros

Titulo:Fuente Ovejuna
Autor:Lope de Vega

Titulo:La Celestina
Autor:Fernando de Rojas

Titulo:Don Juan Tenorio
Autor:Jose Zorilla

Titulo:Lazarillo de Tormes
Autor:Anonimo

Titulo:Fortunata y Jacinta
Autor:Benito Perez Galdos

Titulo:La Colmena
Autor:Camilo Jose Cela
```


## Utilizar xsl:sort para ordenar el fichero XML


Para ordenar los elementos utilizamos la etiqueta [xsl:sort](http://www.w3api.com/wiki/XSLT:Xsl:sort). Esta etiqueta tiene un atributo select que indica el path sobre el que queremos ordenar. Así, si queremos ordenar por nombre del titulo pondríamos la siguiente línea de código:


```xml
 <xsl:sort select="titulo"></xsl:sort>
```


Quedándonos el siguiente listado:


```text
Mis Libros

Titulo:Don Juan Tenorio
Autor:Jose Zorilla

Titulo:Fortunata y Jacinta
Autor:Benito Perez Galdos

Titulo:Fuente Ovejuna
Autor:Lope de Vega

Titulo:La Celestina
Autor:Fernando de Rojas

Titulo:La Colmena
Autor:Camilo Jose Cela

Titulo:Lazarillo de Tormes
Autor:Anonimo
```


Hay que tener cuidado ya que la ordenación ([xsl:sort](http://www.w3api.com/wiki/XSLT:Xsl:sort)) tiene que estar dentro de la iteración de elementos ([xsl:for-each](http://www.w3api.com/wiki/XSLT:Xsl:for-each)).

