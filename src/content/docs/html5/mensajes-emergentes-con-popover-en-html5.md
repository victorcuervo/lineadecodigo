---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZEUM6SP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLnbom7ga%2FUVjdHktKRKx%2FYDR7yGNEANoW3oYJO7lbbAiEA3RyO7mH50Z%2FGUGxi4xtt0XB%2FbJRm33d4NkjoMj8AT5gq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDPx9r0ApCTtlIKtRnCrcA7wunU4%2Bk%2Fo7RR8n%2F2pqHSeHHFX%2B2zDhtkO5uHQ84AqTv2WW%2FhfZDxf685hGqR9T7TJjOpOXqJH%2FBCgikbJXDqAAQIbki4qA3o22rXQ%2B0why1NKiCPp0G80N3cHcpWK6i3J9yqN7USGpYUgPYYI%2FjpSJs53imXvcq3v5CZcKqTFbvhB0PF6RgzIBbg%2FvblKl1tYCZUMy9XgPiY9KMZ04mT2ghXghvYL0UaUBTwdJtSK7ay1OvtnmuQdGydD%2BcZ3RKRnncFmSAILOAfi%2FXA4VtOus4QG7%2BTvkHgS4nD3pV6vPy0iQBbO3dVyNYMHuVJFu%2BsYnlD7LgZkLJZdabyv8tbGAwkRCl6TtbnJaZ3d%2Fk8gvLABeL6Ar6qq9ZejhjYhAwhExRuDitZoSMI%2FuuswF6muxEpwUDc1KFP8cs0nrvSLFu93DYAmULD0JzA6UlPoaRjAwIL1x8RObDxB0He5BIqS5Kbpr86me7TmKh5A8lKSBqzWXQhjm1clR%2FVl2Q5dz6wWlor2PeuxlFyo2pR6m3e23b2wXqqUibMvU7AtfaOJB3xCIaTBpLamwup5Z5KAP515pKCkbVou%2BTd1kv1ctewiTxrrRIwx3CdE8cqezeXSv1ZrbdJ8wyHScjl4nMOTcxskGOqUBEbVJKxnY0OwzKLGxsRZ48lUegtCwkHxgJmj23A2UZZ57e8XxqB8p1JIwPgecl8hwEY1Vw4LJoF4DjYg6v5KSL1L8DfFhh44Ofo%2BFIP17tP6ks5UY22uc2UnQqeswAcdneV3Ebbj9whZHgW6tW3RDLM%2FjzPLylXrrXelD9LxJ629rlMNWYyut0GHCMBeaNWgv5v2uq3%2Fv7JO8MWZu9GQeAhukacCi&X-Amz-Signature=cc2a7fb4f46586336366bcb46ce242d33cbc02f46c1d6b0e61c6d4ce187067cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI4LJJFO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjmPjZhOl%2Bdr%2BnSNVqFh3rhD3F5EbxmuoyUxwQsrgRwAiEA8Hk3DfudfOcBIRiAzvSVDCWTsOzfs5Eb0Yo0mYV7Rmwq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDAa%2BeLzUprhBDOPiHCrcA2hpHzMoV7D%2B%2BXSYuuMN65uuDP%2F9nNfuYNrAMAybrP%2B3hkcINd4xd854aYPpqszgPAr0qHLj7VkvvaUqxsxr2sh%2BshhcZ37gq9xG5Sq9kN27sv%2FsarIOG%2F1i8Mp29VuFrvfqWxr1lvVQLcaobDqzNBjD7t7b4JUJw7N1ROk8raBRXAYlsvkki6EotTUbAZRMpYWsETo%2BHMjNC88BZ1THPzhmwmehUJXpVtvjZ5uGXs94QyNeC6A9aukwTBm2NP5A%2Bgs4faidpxRSrym3qTKKsuARx1VPeWSWfVJAwKSGzHsJKfvivd1S%2FXi18M2dSvJlKssMdeCSgdjhnf0yAePmmWkcooEjEorj5VrIt3lT87VxKkzhyUOZYNzWdZtFkIfD67Pm3gdw%2Fy%2Fl0j3e6HO%2BfwHIogaLkc4r1vvOSItCcw0erniWkDTPwiAJEUxQ4WjHwq%2F6LyTJLREU9vHhKbOjNXq5x8QJpbJ79DqNlGTT657UDs5ihimMubvBp4KRuvUVPv62Cc814V9RGkAbmHVEwW4kQV9SrVkI9nwWU1u0bbtU5DQo3szjqVVqrHNVh3X%2Fri5e45tk%2Bp6KQ3l9GYWdzJTdZQ9xGG7LQL4UZRBsyWYl3GVrc%2FX6F5NfgV%2BsMJfcxskGOqUBfUe%2FtEyozXjAWW3oI9DmegA95aGGy%2BmMBBPJLnoIfkDHHWyCaPET8F6zt%2FV%2BDPojxqUEnNyr%2BMtjw5XmymW0BYG4l8xyzUq4VoOuz62oRf%2F9PaEyZ%2B3mS9A9k4WLGZdwaNHV2e4U%2Fu2O4YfkjzYbTxXpWYga5TwKx1g06LNMhOPCS%2BD3o4s5yJNWC8EzU6drmki86TrYgO%2Bjhc2seA1wPn9VfHNF&X-Amz-Signature=5e087526db58fba9abecd9001d6cd51f3ad6bb285c75da188ac159ea719f8873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

