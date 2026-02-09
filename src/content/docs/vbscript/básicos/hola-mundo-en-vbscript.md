---
title: "Hola Mundo en VBScript"
description: "Aprende a crear tu primer programa Hola Mundo en VBScript. Descubre cómo usar document.write para mostrar mensajes en páginas web con Internet Explorer."
date: 2010-11-12
updatedDate: 2026-02-09
tags: ["document","write"]
slug: vbscript/basicos/hola-mundo-en-vbscript
type: doc
topic: vbscript
id: c55d4977-2b44-4526-8889-256af768248a
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_vbscript/blob/master/basicos/hola-mundo-vbscript.html
---

## ¿Qué es VBScript?


[VBScript](http://www.manualweb.net/vbscript/) o [Visual Basic Script](http://www.manualweb.net/vbscript/) es un lenguaje de scripting de Microsoft, algo así como [Javascript](https://www.manualweb.net/javascript/), pero menos potente. Este lenguaje puede ser utilizado como scripting de las propias páginas web (solo soportado por Internet Explorer), como código de [ASP](http://www.manualweb.net/asp/) o dentro de los scripts de los programas de Microsoft Office como Excel o Word para lo que serían sus macros.


## Crear el archivo HTML


Para poder crear nuestro Hola Mundo, lo que tenemos que hacer es crear un fichero [HTML](https://www.manualweb.net/html/) con extensión .html, el cual pasaremos a editar con cualquier editor de textos:


```javascript
hola-mundo-vbscript.html
```


## Declarar el script VBScript


Para utilizar código VBScript dentro de una página web lo que tenemos que hacer es declararlo del tipo "text/vbscript":


```html
<script type="text/vbscript">
 ...
</script>
```


## Mostrar el mensaje


Ahora, para volcar un texto a la pantalla utilizamos document.write().


```javascript
<script type="text/vbscript">
  document.write("Hola Mundo en VBScript")
</script>
```


Hay que notar que no hace falta ni el punto y coma del final de la sentencia.

