---
title: "Poner texto en la barra de estado"
description: "Utilizar código Javascript para poder poner texto en la barra de estado."
date: 2007-06-03
updatedDate: 2026-01-12
tags: ["window","status","onmouseover","onmouseout"]
slug: javascript/navegador/poner-texto-en-la-barra-de-estado
author: victor_cuervo
type: doc
topic: javascript
id: 8fb7768f-ed82-48ea-92ea-616067c6fc7b
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/poner-texto-barra-estado.html
---

La barra de estado es el área que se encuentra en la parte inferior del navegador y en la que se suelen ver las URL de los enlaces, cuando pasamos sobre ellos. La idea de este ejemplo es la de poner texto en dicha barra.


Para ello nos ayudaremos del [objeto Window](https://www.w3api.com/DOM/Window/) del DOM [HTML](https://www.manualweb.net/html/). En concreto de la propiedad **status**, a la que simplemente tendremos que asignar un texto.


La [línea de código](http://lineadecodigo.com/) a utilizar será la siguiente:


```javascript
window.status = "Texto a poner en la barra de estado";
```


## Uso en enlaces


En nuestro caso vamos a poner el texto en la barra de estado cuando se pulse en un enlace. Para ello pondremos el código [JavaScript](https://www.manualweb.net/javascript/) en el evento **onClick** de un [enlace A](https://www.w3api.com/HTML/a/).


```javascript
<a href="#" onClick="window.status='Pulsado';return true">Pulsa Aquí</a>
```


> **Nota:** Esto solo funciona en Internet Explorer y Opera. No funciona para FireFox.


## Uso en eventos del ratón


También podemos utilizar la función en cualquier otro evento de [JavaScript](https://www.manualweb.net/javascript/). Por ejemplo en los eventos **onMouseOver** y **onMouseOut**.


Veamos como quedaría en la siguiente línea de código:


```javascript
<a href="#" onMouseOver="window.status='Sobre el Enlace';return true" 
   onMouseOut="window.status='';return true">Pasa por Aquí</a>
```

