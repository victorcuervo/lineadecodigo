---
title: "Usar JavaScript para saber que botón del ratón fue pulsado"
description: "Explicación de cómo usar JavaScript para saber que botón del ratón fue pulsado."
date: 2007-07-13
updatedDate: 2026-01-13
tags: ["onmousedown","event","button"]
slug: javascript/eventos/usar-javascript-para-saber-que-boton-del-raton-fue-pulsado
author: victor_cuervo
type: doc
topic: javascript
id: ddd9a5da-8db1-4bf9-80d3-e897af5c17f6
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/eventos/detectar-que-boton-fue-pulsado.html
---

Mediante [JavaScript](https://www.manualweb.net/javascript/) podemos ejecutar funciones una vez que se produzca un evento. En el caso de que el evento haya sido del ratón podremos acceder a las propiedades asociadas al mismo. Por ejemplo, podremos saber que botón fue pulsado en el ratón.


## Controlar el evento de pulsación del ratón


Lo primero que tendremos que controlar es que se produzca el evento de pulsación del ratón. Para ello hay que controlar el evento `onmousedown`. Este evento lo asociaremos a toda la página.


```javascript
<body onmousedown="detectarBoton(event)">
```


Lo que hacemos es indicar que se ejecute la función `detectarBoton` cuando haya un evento `onmousedown`. Hay que destacar que como parámetro va el objeto `event`. Este objeto, predefinido del navegador, contiene la información relativa al evento.


## Acceder a la propiedad button


Es por ello que nuestra función `detectarBoton` accederá a las propiedades de `event`. La propiedad que almacena el botón pulsado es `.button`. Así que simplemente tendremos que chequear el valor de dicha propiedad.


Los valores posibles de la propiedad `.button` son:

- Botón Izquierdo - 0
- Botón del centro - 1
- Botón derecho - 2

Así nuestro código quedará de la siguiente forma:


```javascript
function detectarBoton(evento) {
  if (evento.button == 0)
    alert("Has pulsado el botón izquierdo");
  else if (evento.button == 1)
    alert("Has pulsado el botón del centro");
  else if (evento.button == 2)
    alert("Has pulsado el botón derecho");
}
```

