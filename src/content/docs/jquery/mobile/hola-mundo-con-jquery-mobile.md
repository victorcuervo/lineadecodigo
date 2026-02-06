---
title: "Hola Mundo con jQuery Mobile"
description: "Descubre cómo crear tu primera aplicación móvil con jQuery Mobile y sorpréndete con su capacidad para funcionar en múltiples plataformas de forma sencilla."
date: 2012-05-09
updatedDate: 2026-02-06
tags: ["data-role","page","header","content"]
slug: jquery/mobile/hola-mundo-con-jquery-mobile
type: doc
topic: jquery
id: 2c8a9dfb-adca-818e-ae17-c2810840dc0a
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquerymobile/blob/master/basicos/hola-mundo-jquerymobile.html
---

jQuery Mobile es un framework que nos permite desarrollar aplicaciones móviles que se ejecuten en múltiples plataformas de una forma muy sencilla. jQuery Mobile está basado en el framework jQuery. Vamos a ir construyendo una serie de ejemplos para explicar cómo funciona jQuery Mobile y, como no, el primero de ellos tenía que ser el Hola Mundo con jQuery Mobile.


## Descargar jQuery Mobile


Lo primero que tenemos que hacer es descargarnos el framework jQuery Mobile. Para ello deberemos de descargar 2 archivos:

- El framework Javascript. Que es el fichero [jquery.mobile](http://jquery.mobile/)-1.1.0.js
- El tema de jQuery Mobile. Que es el fichero [jquery.mobile](http://jquery.mobile/)-1.1.0.css

O bien su versión reducida para un entorno de producción:

- [jquery.mobile](http://jquery.mobile/)-1.1.0.min.js (24KB)
- [jquery.mobile](http://jquery.mobile/)-1.1.0.css (7KB)

Además vamos a necesitar el framework jQuery, con el que puedes empezar mediante el Hola Mundo con jQuery o leyéndote todos los artículos de jQuery.


Es importante que sepas que se necesitan las versiones jQuery 1.6.4 o jQuery 1.7.1 para utilizarlo junto a jQuery Mobile.


## Estructura HTML5


jQuery Mobile nos permite construir página web, las cuales van a ser páginas HTML5. Ya que jQuery Mobile aprovecha los atributos data-* de HTML5 para poder construir las aplicaciones de una forma estandar. Así, que al final lo que tenemos es una página web. Y lo más importante, jQuery Mobile, insertará el código necesario de una forma **no intrusiva**.


## Instanciar las librerías


Lo primero que tenemos que hacer a la hora de definir nuestra página web es, como te puedes imaginar, instanciar las librerías que nos hemos descargado.


```html
<link href="jquery.mobile-1.1.0.min.css" rel="stylesheet"></link>
<script src="jquery-1.7.1.min.js"></script>
<script src="jquery.mobile-1.1.0.min.js"></script>
```


## Definir la página


Una vez instanciadas las librerías vamos a ver como se estructura la página web para que pueda ser visualizada en un móvil. Es decir, vamos a ver qué atributos data-* tenemos que utilizar.


El primero será **data-role="page"**. Este atributo habrá que darselo a la estructura que nos defina lo que es la página. Es decir, vamos a crear un bloque DIV con dicho atributo. Dicho bloque representará la página.


```html
<div data-role="page">

</div>
```


## Añadir el contenido


Lo siguiente será poner el contenido. Es decir, nuestro Hola Mundo con jQuery Mobile. Para ello tenemos otro atributo. Es este caso es **data-role="content"**. Este atributo se lo damos a otro elemento de bloque, es decir, a otro DIV.


```html
<div data-role="page">
	<div data-role="content">	
		<p>Mi primera página web con jQuery Mobile.</p>			
	</div>	
</div>
```


## Cabecera y pie de página


Aunque con esto podríamos tener "acabado" nuestro Hola Mundo con jQuery Mobile vamos a echar un vistazo a otros dos atributos. Estos serán los que nos van a servir para definir una cabecera y un pie de página.


En este caso serán los atributos **data-role="header"** y **data-role="footer"** respectivamente. Y como te puedes imagina van a otros elementos de bloque.


## Código completo


Así que utilizando estos dos nuevos elementos, nuestro código final nos quedaría de la siguiente forma:


```html
<div data-role="page">
	<div data-role="header">
		<h1>Hola Mundo en jQuery Mobile</h1>
	</div>
	<div data-role="content">	
		<p>Mi primera página web con jQuery Mobile.</p>			
	</div>	
	<div data-role="footer">
		<p>©2012 - Linea de Codigo</p>
	</div>
</div>
```


## Plataformas soportadas


Ya tenemos nuestro Hola Mundo con jQuery Mobile. Solo nos queda probarlo en alguna de las plataformas que soporta el framework jQuery Mobile:

- iOS5 – iPhone e iPad
- Android 2.2 y 2.3
- Tabletas Android 3.x (Honeycomb)
- Android 4.x (ICS)
- Chrome para Android (beta)
- BB Playbook 1-2
- BB7
- Nook Color/Tablet
- Kindle Fire
- Kindle 3

O simplemente, abriéndolo en el navegador. ;-)

