---
title: "Definir una lista de valores en atributo XML"
description: "Descubre cómo definir una lista de valores en atributo XML para garantizar que los usuarios se ajusten a una selección específica y evitar errores en tus documentos."
date: 2014-02-20
updatedDate: 2026-01-24
tags: ["dtd","atributos","attlist"]
slug: xml/estructura/definir-una-lista-de-valores-en-atributo-xml
author: xhrist14n
type: doc
id: 2c8a9dfb-adca-8137-949e-dfc621a2f1f3
download: https://github.com/victorcuervo/lineadecodigo_xml/blob/master/xml/dtd/atributo-lista.dtd
---

Cuando estamos definiendo un atributo dentro de un DTD podemos hacer que los valores del atributo sean una lista de valores. Así podemos definir una lista de valores en atributo [XML](http://www.manualweb.net/xml/) para que el usuario no se salga de este listado de valores.


## Estructura de atributos en DTD


Para definir un atributo sobre un elemento vamos a necesitar conocer las siguientes dos estructuras:


```xml
<!ATTLIST elemento atributo CDATA #REQUIRED>
```


Si queremos una lista de valores en atributo [XML](http://www.manualweb.net/xml/) deberemos de seguir la siguiente estructura:


```xml
<!ATTLIST elemento atributo (valor1|valor2|valor3) #REQUIRED>
```


Vemos que se indican los valores de la lista entre paréntesis separados por barras.


## Ejemplo de lista de valores


Para representarlo vamos a modelar un elemento que sea un pago bancario:


```xml
<!ELEMENT payment (#PCDATA)>
```


Este elemento va a tener un atributo que sea el tipo de pago, para lo cual utilizaremos el atributo "type". El tipo de pago podrá ser:

- **cash**, para pagos en moneda.
- **card**, para pagos con tarjeta
- **check**, para los pagos con cheques.

Así, la definición de la lista de valores en atributo XML se hará de la siguiente forma:


```xml
<!ATTLIST payment type (cash|card|check) #REQUIRED>
```


## Documentos XML válidos y no válidos


Cuando estemos utilizando el DTD que contenga esta definición podremos tener **documentos XML que sean válidos** como el siguiente:


```xml
<payment type="check"></payment>
```


Ya que el valor que le hemos asignado uno de los valores que estaba en la lista.


O **documento** [**XML**](http://www.manualweb.net/xml/) **que no sean válidos** como:


```xml
<payment type="paypal"></payment>
```


En este caso el valor que le hemos asignado al atributo no estaba contemplado en la lista, por lo cual no será un **documento** [**XML**](http://www.manualweb.net/xml/) **válido**.


Ya hemos visto como **crear listas de valores en atributos** [**XML**](http://www.manualweb.net/xml/) de una forma sencilla.

