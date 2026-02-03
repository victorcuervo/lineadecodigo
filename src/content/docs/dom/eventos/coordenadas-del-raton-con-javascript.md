---
title: "Coordenadas del ratón con Javascript"
description: "Código explicado paso a paso para saber cómo obtener las Coordenadas del ratón con Javascript de una forma sencilla."
date: 2008-02-10
updatedDate: 2026-01-12
tags: ["getelementbyid","form","event","clientx","clienty"]
slug: dom/eventos/coordenadas-del-raton-con-javascript
author: victor_cuervo
type: doc
id: 457122cf-7c1b-464e-8f06-123fa31e9bc6
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/raton/coordenadas-raton.html
---

En este ejemplo vamos a ver como podemos conocer las coordenadas del ratón con [Javascript](https://www.manualweb.net/javascript/). Para ello, el ejemplo consistirá en volcar sobre dos campos de entrada de un formulario los valores de las coordenadas X,Y donde se encuentra posicionado el puntero del ratón.


## Crear el formulario


Lo primero que hacemos es crear el formulario. Esto no debería de suponernos muchos problemas:


```html
<form name="coordenadas">
  <input type="text" id="coordenadaX" name="coordenadaX" size="4"/>
  <input type="text" id="coordenadaY" name="coordenadaY" size="4"/>
</form>
```


## Función para obtener coordenadas


Todo el control de las coordenadas y el volcado al formulario lo haremos en el método [Javascript](https://www.manualweb.net/javascript/) `coordenadas`:


```javascript
function coordenadas(evento) {
  document.getElementById("coordenadaX").value = evento.clientX;
  document.getElementById("coordenadaY").value = evento.clientY;
}
```


## Detectar el movimiento del ratón


Dicho método lo lanzaremos cuando se produzca el [evento onMouseMove](https://www.w3api.com/HTML/onMouseMove/). Es decir, cada vez que movamos el ratón. Para ello, la invocación la hacemos desde la [etiqueta BODY](https://www.w3api.com/HTML/body/). Hay que tener en cuenta que el parámetro de este método es `event`. Es decir el evento que se está produciendo (movimiento del ratón). Dicho evento llevará la información relativa a las coordenadas del ratón.


```html
<body onMouseMove="coordenadas(event);">
```


## Propiedades del evento


Si nos centramos en el contenido del método coordenadas, vemos que la información de las coordenadas del ratón está en las variables `event.clientX` y `event.clientY`. Es por ello que el código será tan sencillo como volcar el valor de dichas coordenadas a los campos del formulario.


```javascript
document.getElementById("coordenadaX").value = evento.clientX;
document.getElementById("coordenadaY").value = evento.clientY;
```


Vemos que utilizamos el [método getElementById](https://www.w3api.com/DOM/.getElementById()) para acceder a los campos del formulario.

