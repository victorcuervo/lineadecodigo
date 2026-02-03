---
title: "Abreviaturas en HTML"
description: "Descubre cómo utilizar la etiqueta ABBR en HTML para crear abreviaturas efectivas y mejorar la accesibilidad de tu contenido web. ¡Optimiza tu sitio ahora!"
date: 2007-02-26
updatedDate: 2026-01-23
tags: ["abbr"]
slug: html/texto/abreviaturas-en-html
author: victor_cuervo
type: doc
topic: html
id: e2575450-df09-428b-b1f2-85ce2458f737
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/texto/abreviaturas-en-html.html
---

Mediante el lenguaje [HTML](https://www.manualweb.net/html/) podemos indicar, de una forma sencilla, que cierta parte de nuestro texto es una abreviatura. Y, ¿qué es una abreviatura? En estos casos nada mejor que remitirnos al Diccionario de la [Real Academia de la Lengua Española](http://www.rae.es/) y ver que una abreviatura es...


> (Del lat. abbreviatura). 1. f. Tipo de abreviación que consiste en la representación gráfica reducida de una palabra mediante la supresión de letras finales o centrales, y que suele cerrarse con punto; p. ej., afmo. por afectísimo; Dir.a por directora; íd. por ídem; SS. MM. por Sus Majestades; D. por don.


Yo creo que si lo hubiera tenido que definir habría dicho que es la contracción de una palabra... En el caso de que queramos demarcar una abreviatura en una de nuestras páginas web lo único que tendremos que hacer será utilizar la etiqueta [ABBR](https://www.w3api.com/HTML/a/BBR). En dicha etiqueta contamos con el atributo title en el cual pondremos el texto largo de nuestra abreviatura.


## Sintaxis


```html
<abbr title="Organizacion de Naciones Unidas">ONU</abbr>
```


Y, ¿Qué efecto tiene esto en los navegadores? Pues en FireFox y en Opera se subraya con una línea punteada la abreviatura y cuando pasamos con el ratón por encima nos sale una etiqueta emergente que nos informa de la titulo asociado a la abreviatura. En el caso del Internet Explorer no sucede nada. Por lo menos hasta la versión 6.0 en la cual lo he testado.


Algunos ejemplos:


```html
<abbr title="Organizacion de Naciones Unidas">ONU</abbr>
<abbr title="Comunidad Economica Europea">CEE</abbr>
<abbr title="Organizacion del Tratado del Atlántico Norte">OTAN</abbr>
```

