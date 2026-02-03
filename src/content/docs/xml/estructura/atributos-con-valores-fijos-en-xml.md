---
title: "Atributos con valores fijos en XML"
description: "Descubre cómo definir atributos con valores fijos en XML mediante DTD. Aprende a crear documentos XML válidos y mejora tu estructura de datos de manera efectiva."
date: 2014-02-22
updatedDate: 2026-01-24
tags: ["attlist","fixed","pcdata"]
slug: xml/estructura/atributos-con-valores-fijos-en-xml
author: xhrist14n
type: doc
id: 2c8a9dfb-adca-81bf-9be6-edb6f4c2f64b
download: https://github.com/victorcuervo/lineadecodigo_xml/blob/master/xml/dtd/atributo-fijo.dtd
---

Dentro de un DTD definiremos cómo queremos que sea nuestro documento y la estructura que va a tener. Cuando estemos trabajando con elementos y atributos, una de las cosas que podemos hacer es definir **atributos con valores fijos en** [**XML**](http://www.manualweb.net/xml/). Es decir, que solo podrán contener un valor específico.


### Sintaxis de atributos en DTD


Para definir un atributo dentro de un DTD vamos a utilizar la siguiente estructura:


```javascript
<!ATTLIST nombre-elemento nombre-atributo tipo-atributo valor-por-defecto>
```


### El modificador #FIXED


En el caso de utilizar **atributos con valores fijos en** [**XML**](http://www.manualweb.net/xml/) vamos a utilizar **el modificador #FIXED**, al cual añadiremos, a continuación, el valor fijo que queremos asignar al atributo:


```javascript
<!ATTLIST nombre-elemento nombre-atributo CDATA #FIXED "valor-fijo">
```


### Ejemplo práctico


De esta forma podemos definir un elemento `solicitud`, al cual le vamos a crear un atributo fijo llamado `empresa`, el cual tendrá un valor fijo de "MongoDB". El código que tenemos que añadir a nuestro DTD será el siguiente:


```javascript
<!ELEMENT solicitud (#PCDATA)>
<!ATTLIST solicitud empresa CDATA #FIXED "MongoDB">
```


De esta forma, cuando lo utilicemos en un documento [XML](http://www.manualweb.net/xml/) deberemos escribir el siguiente código:


```xml
<solicitud empresa="MongoDB"></solicitud>
```


Ya que si escribimos, por ejemplo, este otro:


```xml
<solicitud empresa="Oracle"></solicitud>
```


El resultado que vamos a obtener es el de un **documento** [**XML**](http://www.manualweb.net/xml/) **inválido**.


Ya hemos visto lo sencillo que es construir un DTD en el cual añadamos **atributos con valores fijos en** [**XML**](http://www.manualweb.net/xml/).

