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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHBS43EX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb4Eb16RBebHv7jKDuZaf3N0U4CzFKfd6eObf7Eb6VjwIhAOjVFq7WhB3GP6hWgv3FWPZLqeMUMJPV1da1P9HZQtPxKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUefmP0g%2Bnqo63C0Iq3AObHjAAhNemwORgE3%2FWDLY7bdTeo%2Bybh0ebhIX%2B8AMHqlUX3gOefPGk2ALsT5b0JuEOe8I7w3GYKJFuSgLS4HqQFqp2OF5kHWrVS6tc8h9ZptbfuRrHV%2BEfjDDXUBc4iRZmS8hbyWvqCkZ%2B5mdp2Pi%2BU%2Bj3P3GGb1ijWa%2Fin1hug2StI7HkcU2IIkB7P0ofjXr5O5YFQfM9KTnOnSF%2Fxqt7eX80DeQRGKF21JMqwdempErSOqIO%2FnIRcifdG1vnYcCBI%2Bkd36Lhs3WzcPj8g8KYmtyIgv89QS%2F%2B9wApn1jsq%2BElGIlSg71B5E8y86MfC%2BWDSHAOf4ffkRN1yEDqw1QOiMLGrXotBTXoMoG%2F%2FvFmqqWmOsm8S%2BlwveAnMm9gFR8V8tWwsvDrbLxgJcOBTfSeFAriFPS%2BwXrcH0lByU5AxZVr5CgY0VZ7LFtYh0mEPfT1%2FSw%2BiXkit9yrjQSm0pIGq5r9pKYEXdtnP1DWHsGeVIxUz6TSDPtZQIOCc0ft9uEKluoLrw6lV%2BsKBiB70ChUy1rrRRLpXcmKGcwXx8OdLukAtHv7b6eezslqdg4i93te7hCq1a1SLFKdJnQI72%2FtbzY2mny1u12lW2daOl%2FCyA23ppXprUEtEiMlpjCoh9zJBjqkAauR%2FVTqODNaWjDPUJH%2By9%2BGecVLm4hJ7WxoZT7EkpEsYx5FCQys6H3xXCiNLDBqLmvxxtQ7yjjDdcyX0LEWB%2FGPnpbgMwvFRLTAZmETa8%2FGyE7c3r8DPfP1eadyOWm%2FDBakwenJxwFUsOHPs02z7gCIm%2Bbn%2BFhIg4gXbVhhOgN9ah7B%2F7nUX2cc86OcxTZeiu8wsdomS2D5vvgmh9hDdmRRGfNW&X-Amz-Signature=18254a032cd3b059d179bd1b837359a368bee3b1a2c68e95f16f4ffb7f9c5691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R6KRYLV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxDPpKW3w5hXVVfEMTF6MoHs4FaBJl7sh%2B%2BMspXcV4OQIgGZEWwQ3RDYiYe5GBr1kECE8DBC%2BlzOvwBU67qMuORV0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP881t4p2kPCAmVGyrcA%2B3ytXIrEgGCnjK20ooK5iYVoNYB0qTGM4RixtIYZ1FnZscv1cnXTFM53m9oBFBUMpSgNY4ZK2%2FHvh3HdVnGUEyJAXRVRkqcEux0SSzbM6DAlkBLXcfJFOiCdsKYWa8Amr0Fjvb7DiI6rLUvFs1xZNCt3Tinj170DYGN6fy251F6eiGvWaE2OSyS2pbQKYUQL6%2BCicY%2BDOdi3L6ewO%2Fc4j5ZTKU0HMuLwgjrr7wYRG%2BcXg3Xfaho%2BWdfc5fHu6suHiM%2FL37geJ9CCmMxLwoTv4pj9F1Zm7ORj6Oxe6D8IR50h4fywWJCdoB%2BMMM%2FXgEjKrS9U8DYXazjw56%2B8QuhEukLkvNEmw977waljoTLLPlumUWxzFC7dQH5UUrMt9eAQQ%2BmnHl%2B3QSwke%2FcInlyIPdll6KWBiIFrXzYo0mlm8SXPdmbkZQmAxuYBSG9xEO4etZ6jwBw%2F9dY55JxHyUZHH7Vh0YRJkaYaglZC2AvhyQjaZTLAq4o1aAafmToJNgxgcPFa6cV1z1tpFoxYkaxIQqScoIHoviHDekcCyHM7aVv%2Bmx%2F3ybby4L2xj2aSiEo6jPLMk8kc0AnXSTge6gT67yPHGyRlDNcZBQLr5WBmMydyQgH0WiXiqfs5qN0MIeH3MkGOqUBubIEb3E%2FX7Bc9rAYhKIfsRmzQ2zh1ij%2FlOVFdn0egEJTe7n%2FtbEnVAbhulbqYYPkQyJ1cwg0Vunw%2BUoqMs3V8cX5sWeqTBS2%2FlHfWUH1v2%2BYNJD9WVbrkwoqkspU%2Brrfd204Ndqodp3AnOYzjdNUIeOc3z0S2sk7xHZqwvSyQorNeHMwBdffkM%2F2Qy22qZa9QCOHL%2FGQcO3T5hmxaUORnesf8ehM&X-Amz-Signature=229ae6261552d5fb7112bbc93ef31e8e99dae910016e8b15cfd435fef0f27d7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

