---
title: Borde con doble linea mediante CSS
description: "Utilización del atributo border-style y su valor double para conseguir un borde con doble linea mediante CSS en los elementos de nuestra web."
lastUpdated: 2025-12-16
slug: css/borde-con-doble-linea-mediante-css
author: victor_cuervo
---

Vamos a seguir con los [ejemplos CSS de tipos de bordes](https://lineadecodigo.com/tag/css-border/) en los que ya hemos visto cómo insertar [imágenes con borde](http://lineadecodigo.com/css/imagenes-con-borde/) en nuestras páginas web y cómo crear un [borde con líneas discontinua](http://lineadecodigo.com/css/borde-con-lineas-discontinuas/) para poder aplicarlo en cualquier elemento de tipo caja de nuestros diseños.


En el caso de hoy, vamos a ver cómo podemos crear un borde con doble linea mediante [CSS](http://www.manualweb.net/css/). Este tipo de borde lo podremos aplicar sobre cualquier elemento de tipo caja que hayamos incluido en el diseño de nuestras páginas web. Lo primero que tenemos que saber es que para obtener un borde con doble linea mediante [CSS](http://www.manualweb.net/css/) utilizamos nuevamente el atributo [`border-style`](https://w3api.com/CSS/border-style/).


En este caso, el valor que hay que darle, para que la línea sea doble es **"double"**. Las formas de definir un estilo son varias. Por ejemplo podemos hacerlo mediante el elemento [`style`](https://w3api.com/HTML/style/) o directamente mediante el atributo [`style`](https://w3api.com/HTML/style/) de los elementos [HTML](http://www.manualweb.net/html5/). Eso ya dependerá de las veces que quieras reutilizar el estilo, en el caso de lo vayas a reutilizar en muchos elementos es recomendable la primera opción, y en el caso de que sea algo puntual lo recomendable será optar por la segunda opción.


En este ejemplo, para poder obtener un borde con doble linea, vamos a utilizar la segunda forma. Vamos a definir una capa de contenido y ha aplicarle el estilo de borde con línea de doble. Así, sobre el elemento [`div`](https://w3api.com/HTML/div/), que representa una capa en [HTML](http://www.manualweb.net/html5/), añadimos nuestro código [CSS](http://www.manualweb.net/css/):


```html
<div style="border-style:double">...</div>
```


Aunque podemos definirlo en cualquier otro elemento. Por ejemplo, en una imagen, que es representada mediante un elemento [`img`](https://w3api.com/HTML/img/) en [HTML](http://www.manualweb.net/html5/), el código que tendríamos sería el siguiente:


```html
<img src="lineadecodigo.jpg" style="border-style:double" />
```


Espero que os haya gustado y que os sea de utilizar el saber cómo podemos definir un borde con doble linea mediante [CSS](http://www.manualweb.net/css/). ¿Cómo definirías un estilo para poder tener un borde de doble línea que podamos aplicar a muchos elementos de tu diseño? ¿Nos lo cuentas en los comentarios?

