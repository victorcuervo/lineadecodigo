---
title: "Sangría francesa en CSS"
description: "Cómo crear una sangría francesa en CSS manipulando las propiedades de sangrado del texto como son text-indent o padding-left."
date: 2007-11-30
updatedDate: 2026-01-07
tags: ["padding-left","text-indent","position","sangria"]
slug: css/texto/sangria-francesa-en-css
author: victor_cuervo
type: doc
topic: css
id: f3dd3663-c1cf-4193-9143-ab0057cab5fa
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/texto/sangria-francesa.html
---

Una sangría francesa incluye un desplazamiento de todas las líneas de un párrafo excepto la primera. Las sangrías francesas son útiles cuando se quieren agregar gráficos al comienzo del párrafo.


Añadiendo al [listado de ejemplos que tenemos sobre CSS](https://lineadecodigo.com/CSS), en el artículo de hoy, veremos cómo hacer una sangría francesa en [CSS](https://www.manualweb.net/css).


Un ejemplo de párrafo con sangría francesa sería el siguiente:


```html
En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo
	que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y
	galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches,
	duelos y quebrantos los sábados, lentejas los viernes, algún palomino de
	añadidura los domingos, consumían las tres partes de su hacienda.
```


Podemos observar los desplazamientos de todas las líneas, menos de la primera.


Mediante [CSS](https://www.manualweb.net/css) podemos definir un estilo para poder tener párrafos con sangría francesa. Para ello tenemos que buscar las propiedades que cumplan las características de la sangría francesa.


Estas propiedades buscan que el párrafo esté desplazado a la derecha, lo cual conseguimos mediante [`padding-left`](http://www.w3api.com/CSS/padding-left/) y que la primera línea esté adelantada hacía la izquierda, lo cual vamos a obtener utilizando [`text-indent`](http://www.w3api.com/CSS/text-indent/). El estilo [CSS](https://www.manualweb.net/css) para poder aplicar nuestra sangría francesa nos quedará de la siguiente forma:


```css
p.francesa {
  text-indent: -30px;
  position: absolute;
  padding-left: 40px;
}
```


En este código vemos que asignamos la propiedades al [elemento ](http://www.w3api.com/HTML/p/)[`p`](http://www.w3api.com/HTML/p/) y en concreto a la clase _**"francesa"**_. Así que tendremos que utilizar esta clase y el [elemento ](http://www.w3api.com/HTML/p/)[`p`](http://www.w3api.com/HTML/p/) dentro de nuestra página [HTML](http://www.manualweb.net/html). La página nos quedará de la siguiente forma:


```html
<p class="francesa">En un lugar de la Mancha, de...</p>
```


De esta manera tan sencilla y manejando las propiedades [`padding-left`](http://www.w3api.com/CSS/padding-left/) y [`text-indent`](http://www.w3api.com/CSS/text-indent/), podemos crear una sangría en [CSS](https://www.manualweb.net/css). Espero que lo utilicéis mucho y así podáis mejorar las sangrías dentro del contenido de vuestras webs.

