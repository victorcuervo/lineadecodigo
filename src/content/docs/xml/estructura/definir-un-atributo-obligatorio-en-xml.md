---
title: "Definir un atributo obligatorio en XML"
description: "Se explica cómo definir un atributo obligatorio en XML utilizando la cláusula #REQUIRED en un DTD."
date: 2014-02-16
updatedDate: 2026-01-24
tags: ["dtd","atributo","required"]
slug: xml/estructura/definir-un-atributo-obligatorio-en-xml
type: doc
topic: xml
id: 61216af6-b0ba-4bd2-9c4b-355d7c730560
author: xhrist14n
download: https://github.com/victorcuervo/lineadecodigo_xml/blob/master/xml/dtd/atributo-obligatorio.dtd
---

Cuando estamos creando nuestras definiciones de tipo de documento o DTD para el uso de los ficheros [XML](http://www.manualweb.net/xml/) podemos tratar de definir un atributo obligatorio en [XML](http://www.manualweb.net/xml/). La idea es definir un atributo que siempre tenga que aparecer en el elemento. Lo primero será tener un elemento. En este caso un elemento sin contenido:


```xml
<!ELEMENT element-name EMPTY>
```


Por ejemplo vamos a definir el elemento persona:


```xml
<!ELEMENT persona EMPTY>
```


Lo siguiente será definir el atributo, por ejemplo el número de la persona. En este caso utilizamos la definición ATTLIST que tiene la siguiente estructura:


```xml
<!ATTLIST element-name attribute-name attribute-type>
```


Así tendremos el atributo número de la persona definido de la siguiente forma:


```xml
<!ATTLIST persona numero CDATA>
```


Si lo que queremos es definir un atributo obligatorio en [XML](http://www.manualweb.net/xml/) deberemos de añadirle la cláusula **#REQUIRED**. Ahora la estructura sería:


```xml
<!ATTLIST element-name attribute-name attribute-type #REQUIRED>
```


Y nuestro elemento persona con el atributo número de persona obligatorio se escribiría:


```xml
<!ATTLIST persona numero CDATA #REQUIRED>
```


Cuando estemos definiendo nuestro documento [XML](http://www.manualweb.net/xml/) atendiendo a este DTD que tiene un atributo obligatorio veremos que será un **documento** [**XML**](http://www.manualweb.net/xml/) **válido**:


```xml
<persona numero="5677"></persona>
```


Y será un **documento** [**XML**](http://www.manualweb.net/xml/) **invalido**:


```text
<persona></persona>
```


Ya hemos visto como definir un atributo obligatorio en XML mediante la cláusula #REQUIRED.

