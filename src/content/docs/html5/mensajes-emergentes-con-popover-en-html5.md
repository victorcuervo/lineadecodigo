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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BCGFKWV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEDdAUYRnVuz%2F%2BfjixOWebdCudLXOirymP2RiQZMIr6wIgaaT4j0KN21hnUqzYpHqjdEpnfVYh%2FID7S8xYDi7HtMcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDM%2BSO4a0RGt7EsQeIircA6sp5ycgvThsUDRwdD9a4gkRGxCRcKPPrv2diTt0Bei4dqyzIv9tkZoYx0GgN0yrLwquDcYNemqBVDdC51v85QOvZKWZYM0n4JN2T%2Fl5CisW50mTCenQqCO1B2K6YOW6NTZSGeIfhiDQJ1pTQOXNzqkmCk%2Bas2GTZJW%2Bzw28kJ6QlTXWFtPawrIGzBc7ez37PtTcj%2B167AVyZRdDXxuGpg6jr5tIWAbTWPzeVIdJd618ClYFYooBFogkirYnqt33%2FWln%2B0ROT%2Br0dMkpQXPsQ4C%2FuKhuK2nt34XRTlWlr4OAhjVocSv2QkKsbuIcF42jH0hVFnJZZiRg7bNbv2FfaWQXWZ%2BDDnP2zAqGcHnrAkEagaFOgoUqjNbMqYJQMzkTQk8DNtdM%2FVohY%2FXkapbeq%2B1lwZHyaD5eaT4WoEz%2BRywOlWRCHVzPA23VZFdoh947MrPitkJIXdXaY52a2Nzdw7JHlTxwXlUJz5mEmpbkNCg379FJh0o8jMnL8FRSGN44XGVce0kxTckKJ7%2BN5IRavBNwS9Fw9CvR%2Bg4oQgGKysBJnh0leC%2Ff47aCPiAVl%2FbZ6WvwEw6aCyeDR8kCvg%2FTyRX2LK%2BMu5HCAeDHrVp74jL%2BTOrj6jij3twX5o58MPHKy8kGOqUB0sJ95aUM0ZubYy42P9mhFVn2OM6gX8Gdqnsoj67Ip43%2BMBiVmutYt92KnVHldn%2FsyY7vfzRaRH08PvJJ5GWdnqD77hPCS4QfKYr6VykQjD2%2Br6nOoG4ozHxq%2F8lmDVlxtUsIUHXougp6aTSVUzrwmzfVco3Tl1nEhyppYiIt95CI0bd1wPtXFfBcjGiJSFHSmpHht0U2FMx%2BUG%2Bl2IDC31mdsnGB&X-Amz-Signature=5aa12043605c2aa42c2cb749715ae5f96818ae49ea0ad2d65f65d4bd11697411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGRP5NIA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoZG8qVqlCocJfkK9Vo51rThPTZQcATQLxHVXS5wlZyAiAsOUbOJ%2BSD8PqTJw93cRl91roFETnm3X6q0ngr3cBb4Cr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMRzrFAdCZ77Eh1PF7KtwDhN0N7xZyMXdXz9fP1rFzhXZ0d1SrbaLbEz78oIhPdyW1QD%2Fa7Hs2Dd3Ia4j3aLsdCAuIkGFZRD%2FZD3OAS%2Fql3PWWdregMPcg3Fso05UN3xVtwgVlIpjFkhmdiUdTGnKyNAgzHTj%2F4%2Fm5nPV6l6fFoWDoob%2FmE7jDS4TdtthbGdQhA80somIecm5h2IMLJS96552Bh3rxY47lVDP1yA8TVwGMt0Guc5aJ%2FEaq1ugYVk3gK%2Ffi9%2FLRnyzjI45am686MSdTbhK3bzuSO4TaFc%2FNTj9RqZJWJ3qjz3M8LU5o6WSUaKb8CmNG%2BtoVKActit3oJSuQmsSNblgoQO0C4TLyJ7n2cIVeoWSn6HyBV00g4zVoYq%2FXT%2BNWnAemLLooow8jLu1qpryQBLY7E8qIi1HjRzMdhguNBUBTYuZ09FOg%2FNBxWhIIwIIJifAgWZWcvPWs9leJzKFeLFralMKDXJq9LsLwQZtRMehSOGSKxWNfU804qgDQhOa3LrPBEZ6%2FMTOqbnwnZFgsp2%2B73o%2FE2o0%2BsnTCLBu8bBW2ABwope%2FFLjQxl69IouYxYArZGiCK2WV9U3Z53wrflanTe0LyXqZiqkUleUakb2NJZ5Lynwyv8mvOPWmKtJq51oMklsswlcnLyQY6pgE9Pl84ieyIarMKCWIcXGV8rQsDCo7Z6K82KCxm6h3nYfY0CoONvz9EuVZGjawqkneH8Od%2Fj8EhkyFygwVAUiBTtef%2FbtJyR2NOQ8g%2BLeHUayL0O1oGCCdgfQ4%2FVuUPRoBu128t%2BWB3WmKwKa93W0IktEZzmwGfGSf%2BzpIXyfadrKUKCH0xF8zCP3wZFrwX3IFaUnpEvBIufBSdPL%2BMu0TtekXM7rWp&X-Amz-Signature=a75473883c341898a769e489496c3acd65f58787bfd04ade07790f298eddebb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

