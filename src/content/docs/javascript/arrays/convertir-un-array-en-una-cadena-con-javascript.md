---
title: "Convertir un array en una cadena con JavaScript"
description: "Uso del método join para conseguir convertir un array en una cadena con JavaScript."
date: 2007-08-16
updatedDate: 2026-01-12
tags: ["array","join","new","document","write"]
slug: javascript/arrays/convertir-un-array-en-una-cadena-con-javascript
author: victor_cuervo
type: doc
topic: javascript
id: ecaf3ed2-c893-448d-9ea9-977a3a399ee7
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/cadenas/convertir-array-en-cadena.html
---

Si estamos manejando un array de elementos dentro de nuestra página [HTML](https://www.manualweb.net/html/) y queremos enviarlo al servidor, es bastante recomendable que lo convirtamos en una cadena. De esta forma facilitaremos el envío y recepción de este dato en el servidor. 


En primer lugar tendremos el array con los elementos a enviar:


```javascript
var aLenguajes = new Array("Java","JavaScript","VisualBasic","C");
```


Para poderlos juntar deberemos de utilizar el método `.join()` de [JavaScript](https://www.manualweb.net/javascript/). Este método recibe un parámetro, que será el carácter que se ponga entre cada elementos cuando estos se conviertan en una cadena. Esto siempre y cuando queramos. Si no queremos, bastará con dejar el carácter vacío. 


La línea de código será la siguiente:


```javascript
var sLenguajes = aLenguajes.join("#");
```


En este caso hemos utilizado una almohadilla para separar los elementos. El código final quedará de la siguiente forma:


```javascript
var aLenguajes = new Array("Java","JavaScript","VisualBasic","C");
var sLenguajes = aLenguajes.join("#");
document.write(sLenguajes);
```


Si este artículo te ha parecido interesante, te recomiendo que te leas [Dividir una cadena en elementos con JavaScript](http://lineadecodigo.com/2007/08/15/dividir-una-cadena-en-elementos-con-javascript/), que muestra como se hace lo contrario (convertir una cadena en un array) y [Función Replace en JavaScript](http://lineadecodigo.com/2007/08/07/funcion-replace-en-javascript/), el cual explica como utilizar los métodos `.split` y `.join` para implementar el método replace en JavaScript.

