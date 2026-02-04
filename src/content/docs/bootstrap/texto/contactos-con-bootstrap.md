---
title: "Contactos con Bootstrap"
description: "Descubre cómo manejar contactos con Bootstrap de forma sencilla y efectiva, utilizando el elemento address para resaltar información clave y enlaces útiles."
date: 2015-06-26
updatedDate: 2026-02-02
tags: ["address","abbr","strong"]
slug: bootstrap/texto/contactos-con-bootstrap
type: doc
topic: bootstrap
id: 104b8fd7-b1cf-4211-928c-1984926c510d
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/texto/citas-bootstrap.html
---

## El elemento address en Bootstrap


Cuando estamos utilizando el framework Bootstrap tenemos una forma sencilla de darle forma a los contactos dentro de una página. Para poder dar formato a los contactos con Bootstrap deberemos de utilizar el elemento `address`. El código nos quedaría de la siguiente forma:


```html
<address>
  Información de Contacto
</address>
```


## Estructura básica del contacto


Dentro del elemento `address` insertaremos toda la información relativa al contacto. Lo que viene siendo el nombre del contacto, dirección, teléfono... Por ejemplo podríamos tener como contacto con Bootstrap el siguiente código:


```html
<address>
  <strong>Bar Pascual</strong><br>
  Bulevar Indalecio Prieto, 12<br>
  28032, Madrid
</address>
```


> Una cosa importante a la hora de crear un contacto con Bootstrap es que todas líneas que contenga el elemento deberán de acabar con un salto de línea. Para crear el salto de línea utilizaremos el elemento `br`.


Además hay que fijarse que para resaltar el contacto el nombre del contacto o de la razón social irá recubierto del elemento `strong`.


## Añadir información adicional


Para completar la información del contacto podemos insertar otros elementos como pueden ser abreviaturas para detallar un teléfono:


```html
<address>
  <strong>Bar Pascual</strong><br>
  Bulevar Indalecio Prieto, 12<br>
  28032, Madrid<br>
  <abbr title="Teléfono">Tel:</abbr> 91 534 98 67
</address>
```


## Enlaces en contactos


O enlaces hacía las páginas web o emails de los contactos:


```html
<address>
  <strong>Bar Pascual</strong><br>
  Bulevar Indalecio Prieto, 12<br>
  28032, Madrid<br>
  <abbr title="Teléfono">Tel:</abbr> 91 534 98 67
  <a href="mailto:barpascual@gmail.com">barpascualgmail.com</a>
</address>
```


De esta forma tan sencilla hemos visto como podemos crear un contacto con Bootstrap.

