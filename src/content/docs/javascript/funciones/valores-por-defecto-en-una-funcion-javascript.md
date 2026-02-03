---
title: "Valores por defecto en una función Javascript"
description: "A partir de ES2015 encontramos como podemos poner valores por defecto en una función Javascript que simplifica la llamada con parámetros opcionales."
date: 2017-09-25
updatedDate: 2026-01-13
tags: ["funciones","arguments"]
slug: javascript/funciones/valores-por-defecto-en-una-funcion-javascript
author: victor_cuervo
type: doc
topic: javascript
id: 2c8a9dfb-adca-81a3-881c-e95fdf0628f7
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/funciones/valores-por-defecto.js
---

Ya hemos visto en un ejemplo cómo podíamos [construir una función con parámetros variables en Javascript](http://lineadecodigo.com/javascript/funcion-con-parametros-variables-en-javascript/). Esto requiere que el objeto `arguments` lo vayamos revisando para ver si contiene el argumento esperado. Una de las formas de simplificarlo a partir de ES2015 es el utilizar **valores por defecto en una función Javascript**. 


En este caso los parámetros de la función se van a basar en [el concepto de desestructuración de objetos de Javascript](http://lineadecodigo.com/javascript/unpacking-objetos-javascript/). 


## Definir una función con valores por defecto


Lo primero será definir la función en [Javascript](https://www.manualweb.net/javascript/) mediante la siguiente estructura:


```javascript
function nombreFuncion({parametro1 = valorDefecto1, parametro2 = valorDefecto2}) {
  // código de la función
}
```


Por ejemplo vamos a definir la siguiente función [Javascript](https://www.manualweb.net/javascript/) que permite que se la llame con parámetros de color y tamaño.


```javascript
function pedido({tamanio = 'XL', color = 'rojo'}) {
  console.log('Pedido de talla ' + tamanio + ' y color ' + color);
}
```


Vemos que los parámetros tienen sus valores por defecto. En el caso de `tamanio` será 'XL' y en el caso de `color` será 'rojo'. 


## Llamar a la función con parámetros opcionales


Ahora ya solo quedará que llamemos a la función con uno, los dos o ninguno de los parámetros. Ya que a la hora de obviarlos lo que sucederá es que la función tomará el valor por defecto.


```javascript
pedido({tamanio: 'M', color: 'azul'});
pedido({tamanio: 'S'});
pedido({color: 'verde'});
pedido({});
```


Como podemos comprobar, el uso de valores por defecto en una función [Javascript](https://www.manualweb.net/javascript/) nos simplifica enormemente la codificación de funciones que vayan a tener parámetros variables.

