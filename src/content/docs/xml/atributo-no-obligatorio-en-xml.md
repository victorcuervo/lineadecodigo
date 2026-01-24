---
title: "Atributo no obligatorio en XML"
description: "Descubre cómo definir un atributo no obligatorio en XML utilizando el modificador #IMPLIED, permitiendo que tus documentos XML sean más flexibles y válidos."
date: 2014-02-18
updatedDate: 2026-01-24
tags: ["dtd"]
slug: xml/atributo-no-obligatorio-en-xml
author: xhrist14n
type: doc
download: https://code.google.com/p/lineadecodigo/source/browse/trunk/lineadecodigo_xml/dtd/atributo-no-obligatorio.dtd
topic: xml


---

Ya hemos visto cómo podemos [definir un atributo obligatorio en XML dentro de un DTD](http://lineadecodigo.com/xml/definir-un-atributo-obligatorio-en-xml/). Ahora vamos a ver cómo podemos **definir un atributo no obligatorio en** [**XML**](http://www.manualweb.net/xml/). Los pasos son iguales, solo que en este caso vamos a utilizar el **modificador #IMPLIED**.


### Definir el elemento XML


Lo primero es definir nuestro elemento [XML](http://www.manualweb.net/xml/) atendiendo a la estructura:


```javascript
<!ELEMENT nombre-elemento tipo-contenido>
```


Nuestro elemento [XML](http://www.manualweb.net/xml/) `contacto` se definirá de la siguiente forma:


```javascript
<!ELEMENT contacto (#PCDATA)>
```


### Definir el atributo


Ahora vamos a crear un atributo para el elemento `contacto`. En este caso vamos a crear el atributo `fax`. La estructura para crear el atributo será la siguiente:


```javascript
<!ATTLIST nombre-elemento nombre-atributo tipo-atributo modificador>
```


Por lo tanto nuestro atributo `fax` se definirá así:


```javascript
<!ATTLIST contacto fax CDATA>
```


### El modificador #IMPLIED


Lo siguiente será **manejar la cláusula #IMPLIED** que ya habíamos comentado al principio. Esta se indica después del tipo de atributo, siguiendo la siguiente estructura:


```javascript
<!ATTLIST nombre-elemento nombre-atributo tipo-atributo #IMPLIED>
```


Para conseguir que el atributo `fax` sea un atributo no obligatorio en [XML](http://www.manualweb.net/xml/) lo escribiremos de la siguiente forma:


```javascript
<!ELEMENT contacto (#PCDATA)>
<!ATTLIST contacto fax CDATA #IMPLIED>
```


### Uso en documentos XML


Cuando estemos creando nuestro documento [XML](http://www.manualweb.net/xml/) atendiendo a un DTD que tenga atributos no obligatorios como el que acabamos de definir, nos encontraremos que tanto:


```xml
<contact fax="555-667788"></contact>
```


Como:


```xml
<contact></contact>
```


Son elementos que **hacen que el documento** [**XML**](http://www.manualweb.net/xml/) **sea válido**.

