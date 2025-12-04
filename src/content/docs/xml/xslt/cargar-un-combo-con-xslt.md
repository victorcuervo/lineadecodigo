---
title: Cargar un combo con XSLT
description: "Ejemplo que muestra cómo cargar un combo con XSLT usando datos de un XML de libros."
lastUpdated: 2025-12-04
author: victor_cuervo
---

La pretensión de este ejemplo es ver como podemos cargar un combo (desplegable) mediante una hoja [XSLT](http://www.manualweb.net/xslt/). Es decir, utilizar los datos de un [XML](http://www.manualweb.net/xml/) para que aparezcan como opciones de un combo. Para ello partimos de nuestro [XML](http://www.manualweb.net/xml/) de ejemplo de siempre. Nuestros autores. La verdad es que debería de pensar en sacarlo a una página aparte, ya que solo hago que hacer “copy & paste”.


## El documento XML para cargar el combo


Pero veamos como es el [XML](http://www.manualweb.net/xml/) de autores:


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


En nuestro ejemplo vamos a cargar un combo con los títulos de los libros que están dentro del [XML](http://www.manualweb.net/xml/). A si que pongámonos manos a la obra con nuestra hoja de transformación.


## Crear la hoja de transformación XSLT


Hay que recordar que las hojas de transformación son documentos [XML](http://www.manualweb.net/xml/). A si que lo primero que veremos en el será la cabecera que lo identifique [XML](http://www.manualweb.net/xml/) y la definición del namespace de XSL.


```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"></xsl:stylesheet>
```


Esto era obvio, pero por si acaso había algún despistado, había que recordarlo. Pero vayamos al meollo. Para conseguir la carga del combo tenemos que definir una plantilla. Dicha plantilla lo que tendrá que hacer es recorrer los elementos libro e ir generando las etiquetas  que son las que representan el contenido del combo. Para iterar sobre los elementos utilizamos la etiqueta [xsl:for-each](http://www.w3api.com/wiki/XSLT:Xsl:for-each). En dicha etiqueta tenemos que establecer como atributo de iteración, [select](http://www.w3api.com/wiki/XSLT:Xsl:for-each.select), el conjunto de etiquetas sobre las que queremos iterar. En nuestro caso libros/libro. Y en cada iteración obtener el valor del atributo. Para esto utilizaremos la etiqueta [xsl:value-of](http://www.w3api.com/wiki/XSLT:Xsl:value-of), que al igual que la anterior tiene un atributo [select](http://www.w3api.com/wiki/XSLT:Xsl:value-of.select), que en este caso indica la etiqueta de la cual se quiere recuperar el valor. Al final nos queda algo así:


```xml
<xsl:for-each select="libros/libro">
  <option><xsl:value-of select="titulo"></xsl:value-of></option>
</xsl:for-each>
```


## Creando el elemento SELECT


Ya que al final, lo que vamos es buscando que la hoja de transformación suelte un código [HTML](http://www.manualweb.net/tutorial-html/) como el siguiente:


```html
<select>
  <option>Fuente Ovejuna</option>
  <option>La Celestina</option>
  <option>Don Juan Tenorio</option>
</select>
```


Así que como has podido comprobar, dentro de la hoja de transformación entre el código anterior tendremos que añadir la etiqueta [SELECT](http://www.w3api.com/wiki/HTML:SELECT). Quedándonos la hoja de transformación como sigue:


```xml
<select>
  <xsl:for-each select="libros/libro">
    <option><xsl:value-of select="titulo"></xsl:value-of></option>
  </xsl:for-each>
</select>
```


Y poco más. Solo recordar que el documento [XML](http://www.manualweb.net/xml/) tiene que tener una referencia a la hoja de transformación que lo va a usar:


```xml
<?xml-stylesheet type="text/xsl" href="cargar-combo.xsl"?>
```


## Nuestro código para cargar un combo con XSLT


El código completo de [XSLT](http://www.manualweb.net/xslt/) quedaría de la siguiente forma:


```xml
<?xml version="1.0" encoding="ISO-8859-1"?>

<xsl:stylesheet version="1.0"
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

 <html>
 <h1>Cargar combo con XSLT</h1>
 <body>
   Autores:<select>
   <xsl:for-each select="libros/libro">
     <option><xsl:value-of select="titulo"/></option>
   </xsl:for-each>
   </select>
 </body>
 </html>
</xsl:template>

</xsl:stylesheet>
```

