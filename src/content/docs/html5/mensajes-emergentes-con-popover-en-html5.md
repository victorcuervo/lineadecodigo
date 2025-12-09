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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIZKLNRV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyt75mfT4OIhGTBPStGMbkjvLqhLdOd8gsJvJypwyOKAiAdQYjunAjCsypoKgfREuJkpuu6muTKVRR7X%2FRQOLCEWyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5p4is0uA6f%2FCHYrTKtwDdK1H7UnbkXgNrgmf2M7RNsY%2F6klG7MbhkoZrjIdJs3R3eXddlllq0%2Fv42IumUaELaf%2B%2FcHo%2BJwxBxlJqnFE3S9qQV1Q%2Bot1y0ZELOtjhBxN9x92O4JG38kixNoFncyPoC1D3dpnDW0P0GjaxjTLcsXPi13%2FiT9feJbebQMwj7y0Jmm4fJ%2FkQKYkeDRt9FkUa6I%2Bmvti2NdXea%2B%2BLL3%2B2rq0kyzZIzYKtyzKYE0wsXM9wxbTwnNsZjltg6bUMeESMplkbaUJIsRcmo78SUtOnQKyT%2FSThyZ12ZzMOfyL3V%2FkjXbVMhNBAfXwx9Pn4PzqBYcKq5uSP4uO9lpWNf%2Fi2GUS4aTyaAEUlLbrZYm7S2DaQMvaz4Wme6GNCwPVPUzg8IIZXUzeXpl6nKKPW5ARDVRnadFhJBRXLx9HjzaQp0VT0csMyZBYQM9PXJRtv9NMRvqc6cZ4lqmFttcwRq2kmDlaU6VEMaG4Y1OWgm8KyOhg5GdBQvbPwkp7bGfA57%2FPhvF7RXVezbCw19GJrNJT9gIL2zvYKN%2B%2BE8sqcPfrPTK9o7MhASRHW3QFzwdcTTgpWPi0XOmPaL6ItDAI%2BluksQDs%2FGupYCzNyvMMIzTyKlv3DDAxozq6ibJ0OQvww2MneyQY6pgFHLG76%2FMzTGMkywsDHF0qvN1CSgNREUCNhwGjpPFdBfFKfYfg%2FWUbNaroZ45ZFylTnEsiDJ26cVs3LF30LtdNNtEqwyOxLoDaV9%2FcKL%2BFknIDAu%2FozAVUBo%2B9%2BEqr8kw2NUuw9SAV01dY7RChouzwGmZXF5K6k8GkeF2vN%2F86%2B4OMEzaNNZz3Z%2FschdwRcguP4WEtA5e8Yi35GI7Ggp5EqBXbBtS0m&X-Amz-Signature=e2068e09fcbcbc44ea0eeede17b6d7f9c71f6dfa1a2e52ced244f843ae145c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYZRFNB6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD62vDxhWNCAm2Mj4R2NRab4nMpKjEjZikssqN5ylOeCgIgAeoFzf1L94RAV28fE%2FCyVoHx79uj40Id%2BPCiVwqOIRMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY7qJd6Bo2CM71b6SrcAy9kDDIYHxJEtWEsL44bncnixB6DGs9s6g12Gdei46kDN8JZQUmxwvZOkosAcUvo8iEmpbEaBOz6vkEG4xpeDbw0Y7SKtulYC7uGAXean%2F4C2SrJ6ijWjdohFCvjgUmYp64gny%2FexLsqqNc93SUjW%2F%2F5gOdNr61h1s2wBU3Nah9XrGGb3%2FPYvOgoFK7aEqXgG0F%2FBatzQs%2FR8rV%2FnpWo9CdG2V2i2yW7P8Wxmz5VRcKdhu3%2FFUDVlL4qwnX%2BfoFmytjbZk89Gn8dbE07%2B2r8AqGuL%2B3h3F3oTSZff5dzz4QPG%2F%2FEw%2F5dMTueI6YrHd8ShsKwuUmHe1ufsmY2N5FiEo3Nh%2FocNS1nulxJTbQpsTBPYIDC2NOz1rAlqwvAPsXP9RIAscuphon9Du65MFQCnC0f7w4OQBXTuZqr8Xnb9yZQkOiqbB029rfT3ok9fYXquVo1b%2BVB4ENLkisj2h%2Fau8oTPVreF1CrU2sJDmXefAexlkd1XV%2FFsttvlUTsJd%2FPviZ4OazIU3SAz%2Bhq0tfp2SXWPAbaARoc9LEo2GYVXigLEC5M4X13MIlvbmyNhvRX%2BLsVTkSRZQbJaQBunrahkc4QIEAjvCQFAJ0N%2FbYcUwqTHdpEG56XxA4b5BIuMMXJ3skGOqUBuCAhUnobRtd7voR5F43MfFuW7U2E6jYiVQ%2Bia9Lj%2BWSTksbYDpKZeYPJllZB9OnZ1yEeZkfEcynXudQDNYMJVsH%2FSBL%2FXEBoCNc18j876kqsXBorr9DpedOZAv8bZi331DFX7y8LfkF5vW5UzsPPF%2Bg1GaLFNHM%2F9akYc9oZn0Nv1tSZH9qQQT82UtgSuIW92ssmexwXJXBv4FLMmRKjLmrZi19y&X-Amz-Signature=26465c2dddf28abb5077cbfb3a7032463b5c04e4fe662c59d7d8bcca5bb92a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

