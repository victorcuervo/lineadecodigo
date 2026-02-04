---
title: "Cálculo de totales y subtotales en Javascript"
description: "Construcción de un formulario en HTML que nos ayuda a realizar un cálculo de totales y subtotales en JavaScript."
date: 2007-01-11
updatedDate: 2026-01-05
tags: ["form","input","document","getelementbyid","eval"]
slug: javascript/funciones/calculo-de-totales-y-subtotales-en-javascript
type: doc
topic: javascript
id: 91b244b9-afe0-4f29-8090-6a6e42a41b20
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/formularios/calculo-totales-subtotales.html
---

Hace unos días publicábamos el artículo [Formulario que multiplica números en JavaScript](https://lineadecodigo.com/javascript/formulario-que-multiplica-numeros-en-javascript/). [Uno de los comentarios](https://lineadecodigo.com/javascript/formulario-que-multiplica-numeros-en-javascript/#comments), preguntaba que cómo se podría ampliar el ejemplo para gestionar un catalogo de productos y realizar un cálculo de totales y subtotales en [JavaScript](https://www.manualweb.net/javascript/). La verdad es que me pareció un ejemplo muy útil y he decidido el explicarlo.


Partimos de un formulario [HTML](https://www.manualweb.net/html/) que gestionará un pedido de frutas. Cada línea del formulario estará compuesta por tres campos.

- El primer campo indicará el número de unidades a adquirir de un producto. Este será un campo [`input`](https://www.w3api.com/HTML/input/) de tipo texto, por lo que el atributo [`type`](https://www.w3api.com/HTML/input/type/) será de valor “text”.
- El segundo campo será el valor de cada una de las unidades del producto. En este caso no nos va a interesar mostrar este campo. Es por ello que lo crearemos como un campo de formulario oculto. Esto lo conseguimos indicando que el campo [`input`](https://www.w3api.com/HTML/input/) es de tipo oculto, por lo que el atributo [`type`](https://www.w3api.com/HTML/input/type/) será "hidden". Si que es cierto que nos interesará mostrar el precio por unidad a usuario. Pero esto lo podemos hacer con un simple texto.
- El tercer y último campo es el total. El cual corresponde a la multiplicación del número de unidades multiplicado por el precio por unidad

El código [HTML](https://www.manualweb.net/html/) que utilizaremos será el siguiente:


```html
<input type="text" size="3" id="peras" value="0" "="">uds
<input type="hidden" id="precioperas" value="2">2€
<input type="text" size="8" id="totalperas" value="0">€
```


Si nos fijamos en el código, hemos utilizado el atributo [`id`](https://www.w3api.com/HTML/id/) de los elementos para darles a cada uno un identificador. De esta manera podremos acceder a su contenido, vía [JavaScript](https://www.manualweb.net/javascript/), de una manera muy sencilla.


Ahora utilizamos el [JavaScript](https://www.manualweb.net/javascript/) para calcular el total. Esto lo haremos mediante el evento [`onChange`](https://www.w3api.com/HTML/onchange/) del campo de las unidades. Es decir, cuando cambie el valor de las unidades, calcularemos el subtotal. A esta gestión de eventos le asociaremos una función [JavaScript](https://www.manualweb.net/javascript/), la cual llamaremos `calcular()`. Que será de la siguiente forma:


```javascript
function calcular(){...}
```


Esta función recibirá 4 valores:

- **cantidad**, número de unidades.
- **precio**, precio por unidad
- **inputtext**, será el objeto que represente al campo con el subtotal.
- **totaltext**, será el objeto que almacene el total de todos los productos

Veamos la función:


```javascript
function calculo(cantidad,precio,inputtext,totaltext){...}
```


Su código será muy sencillo:


```javascript
function calculo(cantidad,precio,inputtext,totaltext){

	// Calculo del subtotal
	subtotal = precio*cantidad;
	inputtext.value=subtotal;

  //Calculo del total
	total = eval(totaltext.value);
	totaltext.value = total + subtotal;
}
```


Las dos primeras líneas multiplican los valores de unidades y precio x unidad. El resultado lo almacenan en el valor del objeto.


De una misma forma, si nos fijamos el las dos últimas líneas de código, lo que se hace es recuperar el valor almacenado en el total y se le suma el subtotal. En este caso hay que tener en cuenta que el valor que se recupera de un campo input text del formulario es una cadena. Es por ello que nos apoyaremos en la función [`eval()`](https://www.w3api.com/Javascript/eval/) para convertirlo en un numérico y operar con él como tal.


Para finalizar asociaremos la función calcular al evento [`onChange`](https://www.w3api.com/HTML/onchange/).


```html
<input type="text" size="3" id="peras" value="0" onchange="calculo(this.value,precioperas.value,totalperas,total);">uds
```


Para pasarle los valores hemos utilizado los [`id`](https://www.w3api.com/HTML/id/). En algunos casos para recuperar los valores (atributo value) y en otros para hacer referencia a los propios objetos.


Ya tendremos así nuestro código que nos sirve para realizar el cálculo de totales y subtotales en [JavaScript](https://www.manualweb.net/javascript/).

