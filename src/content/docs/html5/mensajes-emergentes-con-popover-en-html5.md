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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCXJ2HUU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZRZ6PD3j21DoPB3%2B6ONhvnHVAX5oJ%2FFp7ImCCQckoyAiEA4mlzbv%2B7BRwEcIQoE8gtJ2rUVqbASqE52NE4BdpSLcUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvpJ%2FURJpV5FC0FkCrcAxfGB0M7Qoi6BUAshv2nWo8s9qNeE5LofP3mM9rjjJgnEDAjtRFZE4IoqcvDbprWBI5h%2FipjBOwkigot8Z8AM%2BaxAJgiTkn8mEPD6%2BLJUau3sZJHXN6rxg5Jp%2FcpYRV8qUT%2FMprXSGSMx%2BYVl5emls55lrk3F%2F6Q92hxdmMu2TrmqWwzZxR1Ujgrp4G3s262YhiPj3Cqyh1ED5m2h6VFDQuDIjgJ4xiJwHdbfmeiuLVP8woUuJnWqhTMlc7z%2FFSKW8a8Xcv3nPEMOje6456jSfIQY4WvWvoG9pHBE1LUM9nKwxbVbcxoNK%2FhM748YCKDg4%2B46m8iVjHJosmtBGlohN9jliV9Etww4Nkd6SGA8lvPcQYkwlOf8cSMq55mZFwmLy6yYFgugr5OV59GWwUKYuPMEUFW%2FH8Rv8CITSqEyAju24BLf7COp4SToCn3r653jfdaFcNG9dymSPTS1UD%2BBF44Uu%2FCCbwd%2BaB4ABfziz0XQ16YisCBeUSgEZhtCviQAhfUrBzfgbGHRjomenLNfPVJcJ4keH5SuOjvZ2V479379h9DbLX%2BvHKCbaL6j%2FnYuxOYG8L9qnB%2Bi1MOTuiGDjxB9%2BVoBVTAEqI8cdAieTuChjKVfqXNQAJU5FFDMN%2Ba1ckGOqUBUQTExIpNycAHe9FNOjpWYrvQnN2ILgTkXhRZZ5Aw6FMQgvCwWTJH%2BO%2FizgCivRcDKAVKDHpHy%2FPOGtaFuCZJTdkibMVVpbCsHHIZw9L0rKfU1zbFdLsxhSj30fI5IpDOgM3VgYtZx7B2CMUWlBgJLJ0RLm9rx6wKPQ1PV6OQmJZCnmTNRVu1NOp9ww5wwV9eghFrR7%2B3sFQndIHwnCREpe7Bu%2BYc&X-Amz-Signature=65211c24feec9d41542b21021d05239dd901c90d91a3b5780c4632790534ff6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWRGSP2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F2LNHiXRaYrbZ7ccmmeA67ATbbH9Wly69pbgUO%2B4frAiBGPoks%2B3rDKLutTYklpd%2BWIQrtF4Pmf1FCa9NuyrQSWCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaK2RpZDzwapDcGBdKtwDCTkPyJo12dxa%2BJNa3KIDX0ItrQ8DDOnq3JCcRGv2IbxdjdoohoCNVgezK%2FctZZ4u%2BCuurAQYW7RAP0Q2Tw0qXtfDbUscLH%2FRrIYjvAx8HkXOFZZ25QA9mtUj1eDE4na%2BvovQPs9TfzIBiEShLqGyKfvhYiHjofw6HldwqSKM3iOmEE5Yv4zaNwRrW7hMVa9j0f%2F3tMT6%2BCN3jbpAJYyym18CR%2BVwVDMwm%2BBW4CZAzURFnJCpJdl6lg%2Biskfw4RN5hyIPTBF9L%2Fz6UJxd3fs6KBd1BqUuJKac5DCA3uecdfQc1C7wj3ygxQsaJkG3yR%2BZWor2SU33sKcg6HCc7gHtWp2cv4LC6lhTVNkQ7S1EabOF3GxZHM8RP7iYkjbIk30JHDJhVRUO%2FsgVpXDhML6mWX8W11KSBScZDEg8DHWMK8wwvLjaY2KRmSY4rUg8JCiKyQ7p%2BWMy5g4oclgGqBo55oM4QWkO1LRYTbxJbP7ZnftnWjVGANKJSaGY11YlBbjw%2BJPu3pLIBX1WnJ7yDb6durJvMBGxDvSaiIZUh9A2vL7yy1xFdPN1Su%2BKofZF63%2BgYJaGwA62AXc4C8aRqIVNBV2EHez0HhJr04Tc0W7K2gWvMIhQL8QiQhlJxa8wy5nVyQY6pgFV0mz4HpiKze7ZuqFbEKkMM0B1ZksADv8bknSWFLa41sz%2FyBBq6verGxeccoUqkUn3W1uMJeQEkoKluqzRr5bUFfNQa46OJDUR8Dz6%2FWhDL9AyXJOgswLmh6zUY%2BdagyX5Um8iDOdIQgj0BVDp81cYI2RlVNTwg9HOf66SEdbO%2FWUbwtxmEDfwyh2BLpnxzpmGLDB3Z6KHAZ8smaoOHC2Pv1KVP1lj&X-Amz-Signature=ac6a0ca889cc79ed07c1fe51e310c3a5b246752c0a547b175368e49797d4a1e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

