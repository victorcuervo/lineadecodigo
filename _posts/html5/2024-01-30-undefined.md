---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG26WH4T%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCqN26WXAYnBJmUZ%2BoJPtuzM1%2BEXVbc1JQG2wnX6wKUiQIgavdJmAQ4eEp5D1lxp2MoghQksQb1FjTBxXdXLqrrZQUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEQYLWrCk385JSvrJCrcAyepaCOCcg%2BtJzLlkUAhbEP7WRE5EJOmAa4CZ6%2BZNljpJhuANfcStPQ%2BHw8Bis%2FTkrXpiO613UjaeGvzEfN4szgJhBgNtaXAgVKTNvj6uogsoa1i80qyMLIPiMPgeFeEwv6YRQGZkJr9UNfxlhpKhS%2FQvdThsbbkgWmmKQnP7nsGGJjERoS6pukPDSrkrrsod3yTcnLGb2OdLwtwFa3mHIYjFAky1dRhE2QPndsgD%2FK5t5%2BMhvWRrqQ0uWc9PKw4MS7sFkukMFpbjeK2Jmz9E7OjJJPe9Tm77TSbiMeNYG6gIn82cDHJwtANJW78F4Muf%2F1yhCUb%2F4G1YZjL8vBYjxSocfGAZTdzeY7u7DZeMWYMhsjbav1SHXrHloVmONJPjT0dgiNqGweTGibRzBsGWH4PtceXc6%2FMhpgKt4Q%2BIHJp%2BAVUZTzr9Wmh0hieCZCMnLYWjSVuE5%2BLo4qyYA5M87XjAuOj2z2v2hS6cM55P1NHrH8KhiFY6cP8z6sA45F6dd15RvmtXhqErsnp3yXucquzhuphQFmvg8wyDp9jLnvV2iki727v%2B8ETrwECL%2BXRSQns4X2nvjDDNQHtoKY66QOMpu1GwcZ%2BTBLv2xb5JDiTp356MrARQdcXlQvhMISav8kGOqUBLwQuLu6q1fwMIl0DBJdPByQLqsqA%2B20dREnWLMCumzSRBQAUB7XjsIcPKrsE1XXmZobncU8v%2BJR9GtP50brouW3eFzoE8kCIahvmykTPfWwqqrhOrVeAxPWe9PRjdMDIGYkXlr70KC6ylpHQ3H%2Bh3xqYuJbJnfr9jurnGLzkRR7zqsi5%2BTJvqfylp%2B4EvfFKuCaPFH%2BLEkBePialt2K0whqbmQPf&X-Amz-Signature=27468ca3f82756225c135aa18a736d76f785b3f8f1f235871cfb404237b52119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBZ7SOTP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDr7WlYWAd2z9V2K6%2Bp9wIW%2BBxpnqVJ0iuafLETXylzqwIgCVf1%2BX3daFbe5P63eVQtjxMZub%2F5j61jTafOGAHFHmIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKcRKd6vxSBCnK0OHSrcA4stn7gmP8fa41O8IA0u8AJdqegP%2BPgzQEk3YQ%2BZhkb8q3ibI92co5ddpA9hMKsMvZ9k6qK2PS4je8fAKzF4tkXcJDHyzPuo8omb7ZGtTBawEpnrzM20Qe3DNc%2Fe%2FaT3sCOuLT%2FJtPpmuodAj7Gs3scSk%2BuJfX2e%2FVXVfDiP1DNOsE5f7c59zcUfYrSzpnN6MW0xS7fVxsobTh8h7SeorYw%2Bcmj8SKBf4zRDCn9Z%2FyjRBX%2FlvuNYWL1etRiQkdpb%2Fm%2FFZr8ZssWPnq%2FAQlHO61qXmQBoFpemZhTUFGbADIAaOmWaEi9nMpRn7ATMytSroIMx7mCj6QKtQePQBR3aoiJAWeKf0pcpBTVrSU68KkF06VwsqujVwi4CcpMR8fEid3MdPwoBcf%2FHmJE%2BTxbbgPcrNIPbrj0dgOF1vvMZ6%2Fv%2BrCutEr4TZmIIyj9kCftuF0Stgoh26H6K2K0S%2BYKmRf3OPBE5%2B0i2lR4LrRsiA%2BBPawpD%2BLDIdlolj8rq2YSwk1pPs6pkiTszv22LUgkDUGL%2FD8kcfqEec4YOKbbE6Lo55jJ62i3YEpKzz85LzHBTpWv%2Fs9r7NFPXGhFGYNZEeozezouApQfDTPUncgA4tRsoJy4ZmJE1ody5fBkQMO2av8kGOqUB7Q1pGrMX%2FDbJTZYfvlyZ31X5YzjPBxweZ37oWK%2BSSM5%2BO9B0NBiPj%2Bf88V5oGYZrp%2FRUo%2FAcY4mc%2B1MlnJWueXyQoYRZzueu51A9s9EuPDf3L5NOrESn0ZDuj70KryCd7T6Swct%2Bbu%2FXhYKGaKCbLkAJqCzCMeeAmRiq4rWBNmrkF2uamcnRZDVI%2FPhpLb%2FVVjr1Hr6Hh8aqfWAc8scCIMyv9E9j&X-Amz-Signature=fadee9e5bdced7085389008d003a6ec8c28dd6129a29e2fae91c2a5b1e24cc82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

