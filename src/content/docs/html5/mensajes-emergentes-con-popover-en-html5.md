---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN4EIEUH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDsDdz1vvlbhvqQiPSCWNin%2F4CdKLasOW6VIfG7l%2Fl7%2FAiEA44bj2XpUTh3sswqw%2B8rTPIBgaEZB6SCjLmtt65D2HY0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDALFDSMGb5UM7uRTPCrcA0O11zO0GR%2FqDUsqcbSMV6Q%2FCjri6EMpx1e6wwMzp%2BIyi32THvB2Uo7WsnIGd8WvN2jIctfOIVQvQDWjsNP%2FeAkfOzE3QFUVWzK53aiWm%2ForVpVInyeC5dsfGr5TFgU6CTB%2Bl53e5bSivAhz33J5S4hhsO%2B0G1RAMNIcGAmPkDjuwhY1jaY9p6T2A3LbzvxTA%2BHCasT1ckhx6yM3gSktIB9jZwlpP%2F2EllrupABL5qoEKnYrpYodvmd4aiZ2r%2BuiyiLREd%2FWdU2oKaFcuV6s3cTlFCWivx029abafCZUq8D%2BktVapKn%2BPSNVJn78bwjvQIHdtH%2B%2FQ%2BazdWs1iVSiY6O4z7C6bSHMyXEECQ1Jkv0cycW7Xw0G95NS6ecmSz2nEDEEqj5EmHUvjl7QezYRLs2mgMgxxQmUTKl7gwqrLVfRYxwvrUEBa4JwMjHcxAe47YswbOeW573a7yzIpn57A%2Bv6udhw7zeMD5Pc3hLy%2FsYTXjKdpr%2FHBPz0W9zxvxLEtd9iE8CMFcpM81GlSlscWaA85l%2FOmwfQ4%2BE7zFZdiM5qjauswkfcrXozZc4cDKybkQ7B13lPXson6MMceBejwuaPYyiKLkU0MfofWxVCJPhF8bT9%2FKDuKmqkaxOlMIW%2BwskGOqUBBH0wHKEOv14WImh0WsmkZrxuN%2BfBkEsrhfaeNbo9JmbYUYcentAKlmigaIubvBxLw2h9R7lv6aBArtA8EM%2FLqd8XFUxpNcNNUr5GBT1HNlupeuHY1SGq2ZdIF8p6MZEOiU%2FMIe22NYDAhypRaf7oXR890N30uOh1OnQA3Ri10RYYs7blGoIWpkNTsIrg0NfPeEIhl63g0Wqw9QmP4phKwGkwj%2Fyo&X-Amz-Signature=f242d75dc782400d34eb4259a8b1ca5a76d0dc6cfdeda496b47849ab5e46e60b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPJ2VX7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDkDMJ1nN9J73sjIANi8fh9QKtVRHpiAeSDeEYsDSkHkAiEA8%2FcTOzXMt%2BL5BEkR4NntX%2FY3Za7YsqJHurAl0qbA%2BHoq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPrkXINF78Qe3YvFNSrcA6PXbYQMWdAHFKEKxW23ZL0dHUxshU7bEPyBV5U2pcrQKW0JKyJEf5dGbtXlXjCJQ1SWDb684I65HlcgrHIyJ5p2qhgvh6VjcGEb2Hz9h4jeAKmqZ3reDL3rXhmfUn1c2wwIg6GhGAqpwBbumLPxMbQKtfAVvl4upgc4%2FUEOx8frJRws9dhWQjqfiieJ5iljqojiEVoPkChGw19Y3B84y1Qd%2BiJhNKSH4MHIyTXn3rRrWf%2FoNDXw5Je3T8yYul%2Fln4QQUtFc%2F3rL0IgLPVJjXolswn4LfLNFmPdaC4Ys7mHiJJ%2BVoEkOBFrgLKnBgZ65LYE5eoXLr1pcI0gKVsSzXgQxuVMWAuvZw5BDpVv3GvY1sz1bE9D%2BGUVHW9G6eb%2BZ8cEszjUMPsrC8qwbZxPzQNEv84%2B2g1tuvXCpH3Hljoi%2Fz3dEJvOkYRk1W8R0nKBaP1KgbihONyeOFnjPuTt5AQ6rBuwZelkquIN8EAMPTIFHSFgvaK6Ll%2FC5wMCBs5V1Qoue%2BW9wHjSaEM1r4%2Fm5p0BF2E3uhSbbyofAofNvKTXbGCIclTRTJDdhgjIInL8RQ%2BqeODkjALalkn7kER1XW6%2FUqBmts9rsKnG%2FkMJxUalSvCFJJ5R5Dg%2BypW9LMM29wskGOqUB4yVm3jSyns2Qpi5FleAstR2Y7l5iyaBtkmxIZ2UxgYzQKwuqpdZMYUzCNaAYdNEQAxO8D%2F0N3XjofG0C7tjTgpFX2jfbvRBagC69E2kJBcLD7yJCUQmoQ8UYgU%2FiPvBTCkjQmcpQIV6BKJJrKnxxrg4I26f3xVM3qXqD1KhU%2FpFAnPj3Kr9w9zheVEpbnxTya2W2pate1zWwHqhfoYauQSzUXjNo&X-Amz-Signature=9bee09d3f534469f472f5766938e3078d06da2daf0f824d64c1f1136f5beba2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

