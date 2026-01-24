---
title: "Especificar el idioma de un documento con XML lang"
description: "Aprende a especificar el idioma de un documento con XML lang y mejora la accesibilidad y visualización de tus elementos XML de manera efectiva."
date: 2013-03-06
updatedDate: 2026-01-24
tags: ["lang","langcode","iso639"]
slug: xml/sintaxis/especificar-el-idioma-de-un-documento-con-xml-lang
author: xhrist14n
type: doc
download: https://github.com/victorcuervo/lineadecodigo_xml/blob/master/xml/basicos/idioma/
topic: xml


---

## XML lang


El uso de un idioma en específico en el [XML](http://www.manualweb.net/xml/) nos permite saber cómo debe ser analizado el elemento en cuestión o bien poder tomar la definición del mismo bajo solo la aceptación de un idioma específico.


Las formas en que podemos lograr esto en un documento [XML](http://www.manualweb.net/xml/) es en base el atributo `xml:lang` dentro de los elementos de nuestro documento [XML](http://www.manualweb.net/xml/).


Es muy buen práctica el definir el idioma mediante [XML](http://www.manualweb.net/xml/) lang ya que permitirá a las herramientas que trabajen con el documento [XML](http://www.manualweb.net/xml/) qué acciones deben de tomar respecto al documento relativas a visualización, accesibilidad,...


El valor del idioma del atributo [XML](http://www.manualweb.net/xml/) lang es un [código ISO 639](http://www.loc.gov/standards/iso639-2/php/code_list.php).


Para aplicar el elemento [XML](http://www.manualweb.net/xml/) lang sobre un objeto en concreto:


```xml
<persona xml:lang="es">
</persona>
```


A partir de ese momento todos los elementos que estén por debajo del elemento `persona` recibirán la propiedad [XML](http://www.manualweb.net/xml/) lang definida en el padre. Si bien podrán modificar su contenido en sus propios elementos.


## Del XML lang al langcode


Uno de los inconvenientes que tiene el [XML](http://www.manualweb.net/xml/) lang es que no podemos definir diferentes idiomas para un mismo elemento.


Imaginemos que estamos definiendo mensajes de usuario mediante un documento [XML](http://www.manualweb.net/xml/). En este caso el mensaje puede variar dependiendo del idioma.


En estos casos podemos considerar utilizar el elemento `langcode`. Dicho atributo irá dentro de cada estructura de elementos a las que se quiera aplicar.


```xml
<myres>
 <messages>
  <msg id="1">
   <langcode>en</langcode>
   <text>Cannot find file.</text>
  </msg>
  <msg id="2">
   <langcode>fr</langcode>
   <text>Fichier non trouvé.</text>
  </msg>
 </messages>
</myres>
```


Utilizar [XML](http://www.manualweb.net/xml/) lang nos es útil para cada uno de los elementos o tags de nuestro documento de [XML](http://www.manualweb.net/xml/), en cambio el uso de la etiqueta `langcode` nos permite tener en nuestro documento [XML](http://www.manualweb.net/xml/) varios lenguajes soportados por nuestro documento.


Puedes encontrar más información sobre el [tratamiento de lenguajes en XML dentro de la W3C](http://www.w3.org/TR/2008/NOTE-xml-i18n-bp-20080213/#DevLang).

