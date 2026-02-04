---
title: "Hola Mundo XML"
description: "Hola Mundo XML un ejemplo para aprender a realizar tu primer documento XML explicado paso a paso."
date: 2013-03-08
updatedDate: 2026-01-24
tags: ["dtd","elemento","atributo"]
slug: xml/basicos/hola-mundo-xml
type: doc
topic: xml
id: 0ffc9887-718b-4674-89c3-2033aa1e6ebd
author: xhrist14n
download: https://github.com/victorcuervo/lineadecodigo_xml/blob/master/xml/basicos/hola-mundo.xml
---

[XML](http://www.manualweb.net/xml/) es un lenguaje descriptivo que se puede utilizar para describir cualquier cosa. Con el ejemplo Hola Mundo [XML](http://www.manualweb.net/xml/) vamos a ver como podemos construir nuestro primer documento en [XML](http://www.manualweb.net/xml/) paso a paso.


De esta manera construiremos un documento Hola Mundo [XML](http://www.manualweb.net/xml/) en el que podamos escribir un texto [XML](http://www.manualweb.net/xml/) y ponerle como atributo u/o propiedad el texto “Hola mundo” fácilmente.


Para construir el ejemplo Hola Mundo [XML](http://www.manualweb.net/xml/)L lo que necesitamos es primeramente definir el documento [XML](http://www.manualweb.net/xml/) como standalone pues no usaremos un DTD.


```xml
<?xml version="1.0" encoding="UTF-8"?>
```


Seguidamente tenemos que generar una etiqueta de texto como a continuación se puede ver:


```xml
<texto />
```


En este elemento de texto tenemos la posibilidad de poder poner un atributo mensaje en el cual podemos poner nuestro texto. En este caso el contenido del elemento quedaría vacío.


```xml
<texto mensaje="”hola" mundo”=""></texto>
```


Si bien, la forma más normal de realizar un Hola Mundo [XML](http://www.manualweb.net/xml/) sería la de añadir contenido dentro del elemento texto o la de crear un elemento dentro del elemento texto. En este caso el código fuente quedaría de la siguiente forma:


```xml
<texto>
  <mensaje>Hola Mundo</mensaje>
</texto>
```


Nuestro ejemplo Hola Mundo [XML](http://www.manualweb.net/xml/) finalmente quedaría así:


```xml
<?xml version="1.0" encoding="UTF-8" ?>
<texto>
  <mensaje>Hola Mundo</mensaje>
</texto>
```

