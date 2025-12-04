---
title: Crear una tabla a partir de datos XML
description: ""
lastUpdated: 2023-09-17
author: victor_cuervo
---

A la hora de presentar datos una de los artificios más usados son las tablas. Con el lenguaje [HTML](http://www.manualweb.net/tutorial-html/) es muy sencillo el montar una de ellas. Nos basta con controlar las etiquetas [TABLE](http://w3api.com/wiki/HTML:TABLE), [TR](http://w3api.com/wiki/HTML:TR) y [TD](http://w3api.com/wiki/HTML:TD). En el siguiente ejemplo utilizaremos [XSLT](http://www.manualweb.net/xslt/) para montar una tabla XHTML. Los datos de dicha tabla serán los datos que vayan en el [XML](http://www.manualweb.net/xml/).


## El documento XML que transformaremos en una tabla


Para ello, lo primero que haremos será crear nuestro documento [XML](http://www.manualweb.net/xml/) con la información a mostrar. Usamos un [XML](http://www.manualweb.net/xml/) que representa información de libros:


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


Básicamente, como descripción de nuestro ejemplo, lo que vamos a hacer es recorrer los elementos de un path determinado e ir creando filas de la tabla. Pero vamos por partes.


## Plantilla del documento XSLT


Lo primero que tenemos que hacer en nuestro documento XSL, dentro de la plantilla principal es declarar la cabecera de la tabla:


```xml
<xsl:template match="/">

  <h2>Mis Libros</h2>
    <table border="1">
      <tr bgcolor="skyblue">
        <th>Titulo</th>
        <th>Autor</th>
      </tr>
```


## Acceder a los elementos e insertarlos en las celdas


Una vez que tenemos la cabecera, tenemos que iterar por los elementos. Para cada fila hay que crear una etiqueta [TR](http://w3api.com/wiki/HTML:TR), que es una fila, y para cada elemento una etiqueta [TD](http://w3api.com/wiki/HTML:TD), que es una celda. Quedándonos el siguiente código:


```xml
<xsl:for-each select="libros/libro">
  <tr>
    <td><xsl:value-of select="titulo"></xsl:value-of></td>
    <td><xsl:value-of select="autor"></xsl:value-of></td>
  </tr>
</xsl:for-each>
```


Podemos comprobar que estamos mezclando el código XHTML con el código [XSLT](http://www.manualweb.net/xslt/) sin ningún problema. Para recorrer los elementos del documento [XML](http://www.manualweb.net/xml/) utilizamos la etiqueta [xsl:for-each](http://w3api.com/wiki/XSLT:Xsl:for-each), la cual, mediante el atributo [select](http://w3api.com/wiki/XSLT:Xsl:for-each.select) identifica un path en el árbol [XML](http://www.manualweb.net/xml/). En nuestro ejemplo, al mostrar los contenidos de los libros, el path será libros/libro.


Los valores de los elementos son recuperados mediante el [xsl:value-of](http://w3api.com/wiki/XSLT:Xsl:value-of), que al igual que sucede con [xsl:for-each](http://w3api.com/wiki/XSLT:Xsl:for-each), tiene un atributo [select](http://w3api.com/wiki/XSLT:Xsl:value-of.select) con el elemento [XML](http://www.manualweb.net/xml/) a recuperar.


## Finalizando la plantilla


Solo nos quedará el cerrar la tabla dentro de la plantilla. El código más sencillo de todos:


```xml
     </table>


</xsl:template>
```


Aunque sea algo obvio, cabe recordar, que en el documento [XML](http://www.manualweb.net/xml/) hay que crear un enlace al documento de transformación [XSLT](http://www.manualweb.net/xslt/).


```xml
<?xml-stylesheet type="text/xsl" href="tabla.xsl"?>
```


## Código para crear una tabla a partir de datos XML


Finalmente el código XSLT nos quedará de la siguiente forma:


```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
 <html>
 <body>
   <h1>Mis Libros</h1>

   <table border="1">
    <tr bgcolor="skyblue">
      <th align="left">Titulo</th>
      <th align="left">Autor</th>
    </tr>
  
   <xsl:for-each select="libros/libro">
    <tr>
      <td><xsl:value-of select="titulo"/></td>
      <td><xsl:value-of select="autor"/></td>
    </tr>
   </xsl:for-each>
   </table>
   
 </body>
 </html>
</xsl:template>
</xsl:stylesheet>
```

