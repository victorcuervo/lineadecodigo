---
title: "Atributo con valor por defecto en XML"
description: "Se explica cómo definir un atributo con valor por defecto en XML, utilizando un DTD y un ejemplo práctico."
date: 2014-02-14
updatedDate: 2026-01-24
tags: ["atributo"]
slug: xml/estructura/atributo-con-valor-por-defecto-en-xml
type: doc
topic: xml
id: cdb2a7b9-131a-42f5-9701-8bbed4556b71
author: xhrist14n
download: https://github.com/victorcuervo/lineadecodigo_xml/blob/master/xml/dtd/atributo-valor-por-defecto.dtd
---

Cuando definimos un atributo [XML](http://www.manualweb.net/xml/) dentro de un DTD podemos hacer que el atributo tenga un valor por defecto en [XML](http://www.manualweb.net/xml/). Lo primero es recordar que para definir un atributo [XML](http://www.manualweb.net/xml/):


```xml
<ATTLIST element-name attribute-name attribute-type default-value>
```


Donde tenemos el elemento sobre el que queremos definir el atributo, el nombre y tipo del atributo, y por último el valor por defecto. Así podríamos definir el siguiente DTD con un atributo con valor por defecto en [XML](http://www.manualweb.net/xml/):


```xml
<!ELEMENT square EMPTY>
<!ATTLIST square width CDATA "0">
```


Hemos creado un atributo width, sobre un elemento square, del tipo CDATA y cuyo valor por defecto en [XML](http://www.manualweb.net/xml/) será "0". De esta forma podríamos crear el siguiente [XML](http://www.manualweb.net/xml/) válido:


```xml
<square width="100"></square>
```


En este ejemplo, el elemento “square" esta definido para ser un elemento vacío con un atributo “width" de tipo CDATA. Si no se asigna un atributo width, el valor por defecto en [XML](http://www.manualweb.net/xml/) será 0. Como podéis ver es muy sencillo el definir un atributo con un valor por defecto en [XML](http://www.manualweb.net/xml/).

