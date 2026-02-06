---
title: "Filtrar elementos con jQuery Mobile"
description: "Descubre cómo filtrar elementos con jQuery Mobile y mejora la usabilidad de tus listas. Aprende a personalizar el placeholder para una mejor experiencia."
date: 2012-05-26
updatedDate: 2026-02-06
tags: ["data-filter","data-filter-placeholder","bind"]
slug: jquery/mobile/filtrar-elementos-con-jquery-mobile
type: doc
topic: jquery
id: 2c8a9dfb-adca-81af-af76-c9118ce2d167
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquerymobile/blob/master/listas/placeholder-de-filtrado.html
---

jQuery Mobile nos ofrece un mecanismo de filtrado de datos en cliente muy potente. Podemos configurar las listas para que permitan filtrar los elementos.


## Crear la Lista Base


Si partimos de una lista sencilla con jQuery Mobile:


```html
<ul data-role="listview">
	<li>Avila</li>
	<li>Burgos</li>
	<li>León</li>
	<li>Palencia</li>
	<li>Salamanca</li>
	<li>Segovia</li>
	<li>Soria</li>
	<li>Valladolid</li>
	<li>Zamora</li>
</ul>
```


## Añadir el Filtro


Lo único que tenemos que hacer es insertar un **atributo data-filter="true"**. Este atributo de jQuery Mobile hará que aparezca un elemento de filtrado en nuestras listas.


```html
<ul data-role="listview" data-filter="true">
	<li>Avila</li>
	<li>Burgos</li>
	<li>León</li>
	<li>Palencia</li>
	<li>Salamanca</li>
	<li>Segovia</li>
	<li>Soria</li>
	<li>Valladolid</li>
	<li>Zamora</li>
</ul>
```


## Configurar el Placeholder del Filtro


El siguiente paso será configurar el texto que aparece en la caja de filtrado. Para que aparezca algo representativo. Por ejemplo, si estamos buscando ciudades podríamos poner algo como "¿Qué ciudad estás buscando?".


### Mediante Atributo data-filter-placeholder


Para modificar el placeholder de la lista en jQuery Mobile tenemos dos opciones. La primera es mediante un atributo. Este es el **atributo data-filter-placeholder**. Lo que tendremos que hacer es darle como valor el texto que queremos que aparezca en el filtro.


```html
<ul data-role="listview" data-filter="true" data-filter-placeholder="¿Qué ciudad estás buscando?">
	<li>Avila</li>
	<li>Burgos</li>
	<li>León</li>
	<li>Palencia</li>
	<li>Salamanca</li>
	<li>Segovia</li>
	<li>Soria</li>
	<li>Valladolid</li>
	<li>Zamora</li>
</ul>
```


### Mediante Código JavaScript


La segunda forma que tenemos de modificar el texto de la caja de filtrado en jQuery Mobile es vía código. Y es que el texto del placeholder se puede modificar en la **variable $.mobile.listview.prototype.options.filterPlaceholder**. Por lo tanto, en el evento "mobileinit", es decir, cuando se está inicializando el framework podemos modificar su valor.


```javascript
$(document).bind("mobileinit", function(){
  $.mobile.listview.prototype.options.filterPlaceholder = "Texto del PlaceHolder Cambiado Por Código";    
});
```


> Recuerda que para escuchar eventos en jQuery utilizamos el método .bind()


Esta segunda opción es más para una configuración general de los placeholder de todos los filtros de la aplicación. Es por ello que se suele sacar a un fichero de configuración custom-scripting.js en el cual podamos modificar sus valores de forma sencilla.

