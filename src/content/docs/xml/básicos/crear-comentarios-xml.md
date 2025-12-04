---
title: Crear Comentarios XML
description: "Artículo que nos muestra como podemos crear comentarios XML dentro de los documentos XML para adjuntar una buena documentación."
lastUpdated: 2025-12-04
author: victor_cuervo
---

Si ya has creado tu primer fichero [Hola Mundo XML](https://lineadecodigo.com/xml/hola-mundo-xml/) es momento de dar un paso más y pasar a insertar comentarios. Saber cómo crear comentarios [XML](http://www.manualweb.net/xml/) nos va a ayudar con la documentación de nuestros ficheros [XML](http://www.manualweb.net/xml/). Los comentarios se incluyen en todo código fuente que pueda ser usado para algún fin informativo o bien algún fin específico, en el caso del [XML](http://www.manualweb.net/xml/) por ser un lenguaje de marcado también permite incluir comentarios [XML](http://www.manualweb.net/xml/).


La forma de uso de los comentarios [XML](http://www.manualweb.net/xml/) no dista mucho del uso de comentarios en [HTML](http://www.manualweb.net/tutorial-html/) pues son lenguajes comunes en ciertos puntos de su estructura y provienen de una misma definición de lenguaje realizada en SGML.


Hay que recordar que todo documento [XML](http://www.manualweb.net/xml/) debe de tener una cabecera que lo identifique. Una vez dentro del documento se podrá proceder a insertar un comentario.


## Partes de un comentario XML


Los comentarios [XML](http://www.manualweb.net/xml/) contienen tres partes:

- El símbolo de incio `<!--`
- El comentario
- El símbolo de cierre `-->`

Así podremos declarar comentarios [XML](http://www.manualweb.net/xml/) de la siguiente forma:


```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!-- Esto es un comentario -->
```


Como bien sabemos los comentarios en la mayoría de lenguajes de programación son usados para dejar notas o bien documentar el código al igual en este caso podemos hacer uso de los comentarios para documentar cada uno de los objetos de nuestro documento [XML](http://www.manualweb.net/xml/).


## Comentarios XML en varias líneas


En este caso vamos a ver que el contenido de los comentarios [XML](http://www.manualweb.net/xml/) pueden ocupar varias líneas:


```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--

  Comentario en varias líneas

  Objeto Persona 
  @Persona 
  Atributo nombre 
  Atributo apellidos
  
-->
<persona>
	<nombre>Juan</nombre>
	<apellidos>Infinito</apellidos>
</persona>

```


Este último ejemplo ilustra la idea de documentar el uso del objeto, además del uso de la información contenida en el mismo.


Como vemos es muy sencillo crear comentarios [XML](http://www.manualweb.net/xml/). Ahora ya solo te queda coger una buena dinámica e irlos incluyendo dentro de tus documentos para que estos queden siempre bien documentados y así los pueda entender cualquier otro programador que acceda a ellos.

