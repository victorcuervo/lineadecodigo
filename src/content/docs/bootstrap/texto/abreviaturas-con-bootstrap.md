---
title: "Abreviaturas con Bootstrap"
description: "Descubre cómo manejar abreviaturas con Bootstrap y darles estilo usando la clase initialism para destacarlas en tu diseño web de manera efectiva."
date: 2013-10-15
updatedDate: 2026-02-03
tags: ["abbr"]
slug: bootstrap/texto/abreviaturas-con-bootstrap
author: victor_cuervo
type: doc
topic: bootstrap
id: 2c8a9dfb-adca-81b3-8815-defbef3db31f
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/texto/abreviaturas.html
---

El manejo de abreviaturas con [Bootstrap](http://www.manualweb.net/bootstrap/) no dista mucho del [manejo normal de abreviaturas que se realiza con HTML](http://lineadecodigo.com/html/abreviaturas-en-html/). Si bien podremos dar un poco de estilo a las abreviaturas con [Bootstrap](http://www.manualweb.net/bootstrap/).


> Cabe recordar que las abreviaturas son representaciones gráficas reducidas de palabras eliminando letras y terminando en un punto. Por ejemplo teléfono podremos abreviarlo en Tel.


## Elemento ABBR para abreviaturas


El elemento de [HTML](https://www.manualweb.net/html/) que nos sirve para definir las abreviaturas es ABBR:


```html
<abbr>Tel.</abbr>
```


Si queremos indicar la palabra que hemos abreviado podemos basarnos en el atributo title del [elemento ABBR](https://www.w3api.com/HTML/a/BBR). De esta forma nos quedaría el siguiente código:


```html
<abbr title="teléfono">Tel.</abbr>
```


Si solo utilizamos el elemento [`abbr`](https://www.w3api.com/HTML/abbr/), las abreviaturas con [Bootstrap](http://www.manualweb.net/bootstrap/) no tendrán una representación visual más allá que la que proporcione el navegador.


## Abreviaturas con estilo Bootstrap


Podemos dar estilo a las abreviaturas con [Bootstrap](http://www.manualweb.net/bootstrap/) mediante la clase **"initialism"**, la cual podemos asignar al atributo class del elemento [`abbr`](https://www.w3api.com/HTML/abbr/).


En este caso [Bootstrap](http://www.manualweb.net/bootstrap/) va a mostrarnos la abreviatura más compacta para que destaque del resto del texto en el que se encuentra y pueda darnos una pista de que representa a una abreviatura.


El código [Bootstrap](http://www.manualweb.net/bootstrap/) para la abreviatura es el siguiente:


```html
<abbr class="initialism" title="Teléfono">Tel.</abbr>
```


¿Qué te parece el estilo que aporta [Bootstrap](http://www.manualweb.net/bootstrap/) a las abreviaturas?

