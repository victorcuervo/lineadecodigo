---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
slug: /html5/mensajes-emergentes-con-popover-en-html5/
author: victor_cuervo
---

Los que hemos trabajado en el desarrollo web desde sus principios hemos vivido lo complejo que era gestionar una ventana emergente en una web. En este artículo vamos a ver lo sencillo que es crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) siguiendo un estándar.


### Un poco de historia de los mensajes emergentes


Y es que antes de que se estandarizase, y pudiésemos crear [código en HTML5](https://lineadecodigo.com/categoria/html5/) para poder crear mensajes emergentes, hemos pasado por muchas épocas y alternativas diferentes.


En primer lugar teníamos las **ventanas emergentes o pop-ups** que se abrían mediante JavaScript. Y se podían mandar mensajes mediante funciones como [`alert()`](https://www.w3api.com/DOM/Window/alert/) o [`prompt()`](https://www.w3api.com/DOM/Window/prompt/). Incluso se lanzaban ventanas emergente que se ponían en primer plano y que acababan bloqueando la ventana padre. Estas ventanas eran muy intrusivas, no cumplían ningún estándar de accesibilidad y acabaron siendo bloqueadas por los navegadores.


Después llegaron las librerías [JavaScript](https://www.manualweb.net/javascript/), como el caso de [desarrollos en jQuery](https://lineadecodigo.com/categoria/jquery/), que nos permitían crear ventanas modales, popovers o lightboxes de una forma más elegante, pero seguían siendo soluciones propietarias que no seguían ningún estándar.


Finalmente, con [HTML5](https://www.manualweb.net/html5/) se ha introducido el atributo [`popover`](https://w3api.com/HTML/popover/) que nos permite crear mensajes emergentes de una forma nativa y estandarizada. Esta nueva característica nos ofrece una solución integrada directamente en el [lenguaje HTML](https://lineadecodigo.com/categoria/html5/), sin necesidad de depender de librerías externas. Lo que nos facilita enormemente la creación de mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/).


Además ha introducido otros elementos en [HTML5](https://www.manualweb.net/html5/) como [`dialog`](https://w3api.com/HTML/dialog/) que también nos permiten crean ventanas emergentes de dialogo.


### Casos de uso del elemento popover en HTML5


Antes de crear mensajes emergentes con [`popover`](https://w3api.com/HTML/popover/) en [HTML5](https://www.manualweb.net/html5/) vamos a ver qué casos de usos tenemos para poder aplicar esta solución. Los casos de uso más comunes para utilizar el elemento [`popover`](https://w3api.com/HTML/popover/) en [HTML5](https://www.manualweb.net/html5/) son múltiples y variados, permitiendo mejorar significativamente la experiencia del usuario en diferentes situaciones de interacción con la página web.

- **Menús contextuales** - Ideales para mostrar opciones adicionales o acciones específicas relacionadas con un elemento de la página cuando el usuario interactúa con él. Estos menús pueden contener enlaces, botones o cualquier otro elemento interactivo que permita al usuario realizar acciones contextuales de manera eficiente y natural.
- **Ayuda contextual** - Perfectos para proporcionar información adicional o explicaciones detalladas sobre elementos específicos sin interrumpir el flujo principal de la página. Esta funcionalidad es especialmente útil para mostrar definiciones, consejos o instrucciones paso a paso que ayuden al usuario a comprender mejor el contenido o la funcionalidad de la página.
- **Formularios flotantes** - Útiles para presentar formularios secundarios o campos de entrada adicionales que no necesitan estar siempre visibles en la interfaz principal. Esta aproximación mejora significativamente la experiencia del usuario al mantener la interfaz limpia y ordenada, mostrando información adicional solo cuando es necesaria.
- **Paneles de configuración** - Excelentes para mostrar opciones de configuración o preferencias que el usuario puede ajustar sin necesidad de navegar a otra página. Estos paneles pueden incluir múltiples controles y opciones de personalización, permitiendo a los usuarios modificar sus preferencias de manera rápida y conveniente mientras mantienen el contexto de su actividad principal.

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R3HNMYK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXj6rjTXJy6%2F1JoA12wj7tDqT9w74GAEVROwEL%2BFkyNAiEArcwWuQwzozUDjIp1ftKF7NI5e0R1tSbnpi8L%2FiItuY4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8l4INor%2BlZ75GTqSrcA9QEOI5ZlZS3QA3QI9CjuT%2FElmRE2DL8lsfH6vQeM4zLK5lK36UvOkaVFH3OeodWHW3mN1TZ7pZ7bnrbhIDkWGtcvw7y6%2B%2BgTP4C45hvM5lgF9NcqNNjLcvd7XVIRX2pcAHwGXMPUJOJFgxOPzzMDtlhPbhBW8aeKUpOOvSm2FdnDp%2Fg%2B6JJWMfLmSC9JrMDHg8vrlltCHzRzsoJ7DbnXfgpftfVNdXgGAQ3m%2FeaFvv8aRV4yOemHBGaQqQXKBmRlyNZZZmxK26UpdJjM1TNplW11feHPyzq4alVx7zf0Ibhx%2BJd1oMq0Ww25yaxRuetutqVovbE71LEHljG3xXHYNFpuw158H4My72Dmx7hgW9E3YF9ihFWqln5Z1DT%2FdL21C170hhEp2wVKJQIbOxMj8D5vYH%2B34fnftZziUMZMQq6ZDDmLUepYilNdWV0HNKE2Mx42LFiS1dwN28h4niujk665zq5OBjhH2xc3UaRBAstyJass%2Fho8HXYZ%2BPn6QBRWlJCXbivtvSjhahU%2Bz%2FiHRio6XgnYiVun6hQYLh4kVSVeXyMHyy%2F6kejEJO0fGrVZq%2Bx7sQIQvHOYJMJV4qbWrLzna5TqqE9n7YVoLrPu%2Fz1rfSRW45A38R%2Fwr39MMil38kGOqUBsu37VZ4omM%2BaFw4t5%2BKfNeCNpReeec0C2fQfVOznVec%2B5QPClaCBrWsJYBDqykF%2BYjizGbn7lrjlgvNsWVz%2FFpjZYOUUVveXx86nXhhDE6oyM1NQELvcYdcoIPQQDOunznUPls0Ohg8TJcOzX1vyeDVRDe7NJ1vWLXwhmz51jVvZ%2FQLIv%2FMiitsaSnFUOOqZlP6l8aKMNoZZ5bUOo06jUm95Wi2P&X-Amz-Signature=6674c83c5b9750658a92e16293f658ed7843df48cd27824c7cd937a1f2e43ce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Crear mensajes emergentes con popover en HTML5


Ahora ya nos vamos a poner a codificar para poder crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/). Para ello, en [HTML5](https://www.manualweb.net/html5/), aparece el atributo general [`popover`](https://w3api.com/HTML/popover/) que nos sirve para poder crear mensajes emergentes. El funcionamiento de los popover en [HTML5](https://www.manualweb.net/html5/) tienes dos partes: por un lado la forma en la que definimos el contenido del popover y por otro cómo asociamos a un elemento la capacidad de mostrar el popover.


Para poder definir cual es el elemento popover dentro de nuestra [página web en HTML5](https://lineadecodigo.com/categoria/html5/) lo que hacemos es asignarle el atributo global [`popover`](https://w3api.com/HTML/popover/):


```html
<elemento popover="auto|manual|hint" id="identificador"></elemento>
```


Es muy importante que este elemento que tiene el atributo [`popover`](https://w3api.com/HTML/popover/) también tenga informado el atributo [`id`](https://www.w3api.com/HTML/id/) dándole un identificador único en la página. Esto es debido a que el elemento que muestre el popover deberá de indicar el id del elemento que contiene el popover.


Así, podemos crear una capa mediante un elemento [`div`](https://www.w3api.com/HTML/div/) que nos permita el mostrar un contenido con una imagen de la siguiente forma:


```html
<div popover id="pop1">
  <h2>Este es un popover de HTML5</h2>
  <img src="imagen.png" alt="Imagen en Popover">
</div>
```


La siguiente parte para crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) será el asociar a un elemento la capacidad de mostrar el popover cuando se interactue con dicho elemento. Por lo cual tiene que ser un elemento de acción como puede ser un [`button`](https://www.w3api.com/HTML/button/) o un elemento [`input`](https://www.w3api.com/HTML/input/). O bien asociar un comportamiento de interacción a un elemento mediante algún tipo de evento como [`onclick`](https://www.w3api.com/HTML/onclick/), [`onmouseover`](https://www.w3api.com/HTML/onmouseover/),…


En el caso que tengamos un elemento de acción vamos a utilizar el atributo popovertarget. Mediante el atributo [`popovertarget`](https://www.w3api.com/HTML/button/popovertarget/) asociamos el [`id`](https://www.w3api.com/HTML/id/) que contiene el elemento [`popover`](https://w3api.com/HTML/popover/).


```html
<elemento popovertarget="idpopover"></elemento>
```


Por lo que en nuestro caso vamos a asignar a un elemento [`button`](https://www.w3api.com/HTML/button/) la capa que acabamos de crear:


```html
<button popovertarget="pop1">Haz click aquí</button>
```


Vemos que utilizamos el id `“pop1”` que es el id que le habíamos asignado a nuestro elemento [`popover`](https://w3api.com/HTML/popover/).


Otra forma de poder crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) sería mostrar el popover sería mediante [código en Javascript](https://lineadecodigo.com/categoria/javascript/). En este caso tendremos que asociar a un elemento un evento y en dicho evento mostrar el popover mediante el método [`.showPopover()`](https://w3api.com/HTMLDOM/HTMLElement/showPopover/) del elemento [`HTMLElement`](https://w3api.com/HTMLDOM/HTMLElement/).


```javascript
let boton2 = document.getElementById("boton2");
let pop1 = document.getElementById("pop1");

boton2.onclick = function () {            
    pop1.showPopover();
}
```


En ambos casos, al pulsar sobre el botón, se mostrará el popover a pantalla completa.


### Diferencia entre popover y dialog


Ahora que hemos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) mediante el atributo [`popover`](https://w3api.com/HTML/popover/) y que sabemos cómo [gestionar las ventanas emergentes mediante un elemento dialog](https://lineadecodigo.com/html5/mostrar-una-ventana-dialogo-en-html5/), vamos a ver sus diferencias y cuándo utilizar cada uno de ellos.


Las principales diferencias entre el atributo [`popover`](https://w3api.com/HTML/popover/) y el elemento [`dialog`](https://w3api.com/HTML/dialog/) radican en su propósito y comportamiento.


**¿Cuándo utilizar dialog?**


El elemento [`dialog`](https://w3api.com/HTML/dialog/) está diseñado específicamente para interacciones modales que requieren una respuesta explícita del usuario. Es ideal para situaciones donde necesitamos que el usuario tome una decisión importante o complete una acción crítica, como confirmaciones de acciones irreversibles, formularios de registro importantes o ventanas de configuración esenciales. El elemento [`dialog`](https://w3api.com/HTML/dialog/) bloquea intencionadamente la interacción con el resto de la página para asegurar que el usuario se centre en la tarea actual y proporcione la respuesta necesaria antes de continuar.


**¿Cuándo utilizar popover?**


El atributo [`popover`](https://w3api.com/HTML/popover/) está optimizado para presentar contenido informativo o contextual de manera más ligera y flexible. Es la opción perfecta cuando queremos mostrar información adicional, sugerencias, ayuda contextual o menús secundarios sin interrumpir significativamente la experiencia del usuario. A diferencia del [`dialog`](https://w3api.com/HTML/dialog/), el popover mantiene una interacción más natural y fluida con la página principal, permitiendo que el usuario pueda ignorarlo fácilmente si así lo desea y continuar con su actividad principal sin obstáculos. Esta característica lo hace especialmente útil para mejorar la experiencia del usuario sin crear interrupciones innecesarias en el flujo de trabajo.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRI2NDT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZirTj8n9N6WII4cvR%2B4F4h7RLSU12uU3MBZY%2Fy%2FJ8UAiEA4N009PF3IJ107P46C1nq0pVdlci2Wmxn%2FKa8a5CAjggqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1w0hOahLdqGvXdeircA7Up0HS7regR62Mh%2F3%2B%2Fyy2Q0AWVearUhGnwoO6WdX2RbonI8yBEPT4hOPzOCc%2BeF6yHJQ00f42oSCOVxZK%2BemuZuDGyZvOM%2FO2v6mZffEaPykydqZHYZG%2FjM05wxaIQXuEyJy0augfRmoNORDFVxd6EvnSdV4mfTSL9HGcwNcNmjZH8iYgtxkgRd%2FbdXBAdhSi%2F6jBzySbdy3UFkiCvA2aqE%2BvxsIyOR8g3ERC4mrbxZdcm4lJrLNop2pMkEsHvcq8mnchOtb9QGklJkWWfTA7iEh2eDtRfMPFfrlVIJ8vixo%2BzlmDHgLoCBQ3LtcMql7NwZE07YaHH3tlb%2FYOEZNbhpsjr2CP35ho1esqzBpL2e0alF%2FUn%2FfIorvJa611D0ChuOOlhVUBnJeVj0BFKtPY8hSIqtGvGSqzXX%2B6WHeA8hTqiAvh6twNcaF27aM5%2Fv%2Bkr2Zrw4Dq52m7MPgvWKzbeAzXHuaF5b5%2Fr9xzlRO1lsuThfKReFQ84mbhRmWPfWyX%2FYF%2BMd1zpDbO9c2La4h5XPBgMr8zItxLRRNHqEja4a8nwbxYDzb5GAmP2O%2FlN8C1XY57HYXyuY%2BH4So9GKMl6NSN6AHnh2EIdUF%2FObsj7JrZoNPdUQk4r5mv1MISk38kGOqUBZYrtW4H1SSmcddReRarGDp3DhyuSFjRPhnRiGTaX%2F6QHzPD%2FnDUEFhFeDSH55hvXl52ZjStUNyP%2B7JKnzuPyO1oBq8qUr07RxaJCGXSrmj%2BKINzLnD6E5wtzZ07r8qxh%2BLaaKWg7MZ%2BYluG%2FAc0mOhiYirnp5qYpBChiFJkgVc9OJ6H5F3YVtUO8DiywglEsdlFpVb1BJy8hwJfpzmz9JhE%2FlNbJ&X-Amz-Signature=77c70ee18ca7824f576dbe4e47e2430efcfe9397bc539ab047cd2a32c4dae438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

