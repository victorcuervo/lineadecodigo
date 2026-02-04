---
title: "Escuchar eventos con objetos"
description: "Explicación de cómo podemos escuchar eventos con objetos que gestionen el método handlEvent y reutilizarlos en nuestro código."
date: 2024-01-21
updatedDate: 2026-01-13
tags: ["eventtarget","addeventlistener","event","handleevent","type","eventmanager"]
slug: dom/eventos/escuchar-eventos-con-objetos
type: doc
topic: dom
id: e4ca05dc-aee9-4db3-8e1f-492e36166319
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_dom/blob/main/eventos/escuchar-evento-objeto.html
---

Una de las formas que tenemos de gestionar eventos es escuchar eventos con objetos. Ya hemos explicado cómo podemos [hacerlo con una función arrow](https://lineadecodigo.com/dom/listener-con-una-funcion-arrow/) o [mediante una clase](https://lineadecodigo.com/dom/escuchar-eventos-con-clases/). En este caso vamos a ver cómo podemos escuchar el evento y gestionarlo mediante un evento.


Lo primero que tenemos que saber es que para poder gestionar eventos mediante un objeto, este debe de tener un método llamado `handleEvent` que sea el que está preparado para recibir el evento. Así que creamos el objeto con dicho método:


```javascript
const eventManager = {
    handleEvent: function (ev) { ... }
}
```


En este código vemos que tenemos un objeto `eventManager` al cual le hemos asociado el método `handleEvent`. Además vemos que el método recibe el evento como parámetro. Por lo que podremos interrogar a dicho evento de tipo [`Event`](https://w3api.com/DOM/Event/) para poder consultar información.


Por lo cual pasamos a codificar dicho método e interrogar a la propiedad [`type`](https://www.w3api.com/DOM/Event/type/) del evento que tenemos en [`Event.type`](https://www.w3api.com/DOM/Event/type/) para saber qué tipo de evento se ha producido.


```javascript
const eventManager = {
    handleEvent: function (ev) {               
        if (ev.type=="click")
            mensaje.innerHTML = "Me has pulsado";
        if (ev.type=="mouseover")
            mensaje.innerHTML = "Has pasado sobre mí";
    }
}
```


Ahora que ya tenemos nuestro objeto que nos permite manejar los eventos vamos a simular el lanzamiento de uno o ene eventos, ya que podremos asociar el objeto a todos los eventos que queramos.


En nuestro caso vamos a asociar eventos a un botón que insertamos mediante un elemento [`button`](https://www.w3api.com/HTML/button/).


```javascript
<button id="miboton">Púlsame!!!</button>
<div id="mensaje"></div>

<script>
  boton.addEventListener("click",eventManager);
  boton.addEventListener("mouseover",eventManager);
</script>
```


Vemos que utilizamos el método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/) para poder asociar al evento nuestro objeto de gestión de eventos `eventManager`.


Aunque, en este caso, hemos asociado el objeto a los eventos de un único elemento. Podríamos reutilizar nuestro objeto en todos los elementos que queramos. Haciendo, así, el código más modular.


De esta forma habremos conseguido aprender cómo podemos escuchar eventos con objetos mediante el manejo del [DOM](https://www.manualweb.net/dom/) y [Javascript](https://www.manualweb.net/javascript/).

