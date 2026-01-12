---
title: "Saber que evento se ha producido"
description: "Manejo del objeto Event de Javascript para saber que evento se ha producido en una interacción del usuario."
date: 2008-01-02
updatedDate: 2026-01-12
tags: ["window","event","getelementbyid","onclick"]
slug: dom/eventos/saber-que-evento-se-ha-producido
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/eventos/conocer-que-evento-se-ha-lanzado.html
topic: dom

---

El lenguaje [JavaScript](https://www.manualweb.net/javascript/) basa una gran parte de su potencia en el control de eventos. Mediante el cual permite ejecutar todas las operaciones que nos imaginemos dentro de una página web. Cuando hablamos de eventos nos referimos a los `onClick`, `onMouseOver`, `onMouseDown`,... 


Cada vez que se produce uno de estos eventos, [JavaScript](https://www.manualweb.net/javascript/) busca el método asociado a dicho evento y ejecuta su código. Además proporciona toda la información relativa al evento. Por ejemplo, si hablamos de un click del ratón aporta las coordenadas X e Y donde se ha producido el click.


## Definir los eventos


Así, lo primero que vamos a hacer es cargar mediante [JavaScript](https://www.manualweb.net/javascript/) diferentes métodos. En concreto sobre el documento. Aunque podríamos hacerlo sobre cualquier otro elemento de la página.


```javascript
document.onclick = conocerEvento;
document.onmousedown = conocerEvento;
document.onmouseover = conocerEvento;
document.onmouseup = conocerEvento;
```


Lo que estamos diciendo es que cada vez que se produzca alguno de estos eventos se lance **el método conocerEvento**. Este será en el que codifiquemos lo necesario para saber que método lo llamó.


## El objeto Event


Una de las características de los métodos que atienden a los eventos es que reciben un objeto `Event` como parámetro. Este objeto es el que tiene toda la información relativa al evento. Así declararemos nuestro método de la siguiente forma:


```javascript
function conocerEvento(e) {
  // código
}
```


Donde `e` es el evento. Por compatibilidad hacía atrás, hay ciertos navegadores que no lo pasan como parámetro, sino que lo referencian en el objeto `window.event`. Es por ello que lo primero será hacer esa comprobación.


```javascript
if (!e) var e = window.event;
```


> Aquí podríamos pensar en hacer la comprobación por navegador. Si bien esto no es nada recomendable. Y así nos aseguramos el que no nos dejamos ningún navegador en el olvido.


## Conocer el tipo de evento


La propiedad `type` del [objeto Event](https://www.w3api.com/DOM/Event/target/) será la que nos diga el tipo de evento que se ha producido. Es por ello que simplemente tendremos que mostrar su valor. En nuestro caso volcamos el contenido sobre un campo de un formulario. Aunque podríamos haber hecho un simple `alert(e.type)`. 


Veamos el código completo del método:


```javascript
function conocerEvento(e) {
  if (!e) var e = window.event;
  document.getElementById("evento").value = e.type;
}
```


Comprobaremos que a medida que se produzca alguno de los eventos que hemos definido anteriormente se irá actualizando el valor del formulario.

