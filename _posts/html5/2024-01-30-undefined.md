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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5ZZ4RC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIA%2BN%2FbFY09N8b1le7MXWeQi59ZcU1ZGVWq2tkWOzvrm4AiA%2BV5D6ouJRnHhOfwTDYjEasbxAAMULrNnTsk8d6lu2%2FSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMLYEZBpYHbyWzZDCGKtwDD4fZ%2FHQ3Jh%2BeeCiRH6mbwKmECt%2FqsHhTSk3iFBoRPlLj3OwDNHFr%2BLGWhyHVU9JeyHKvIZaDCwO5Vh6One8Yj9EzLIm1wmQP8hby3CiDnJT18vIh7w46jGouBMsV6UakIC3kwh8EVtGdIWPql%2FPscmJY2RQBN%2Bu9UunsAYSgiwN75O58QX2BZHP%2B27YYE%2B%2FF0HlPI98dk7ASunVZY6A86WECx3qmZ4GLQrTEgU6UYG3rJ9jT8amC5wJfk1VJeK4bu%2BNsyWQgmAgrzaCRQ8XLCjRC8Qwm8yR0jBZut8r%2BoKo2NRSzTbMVoNk3WGd3xAW2VJ9i6ikxEdx5XIj1lg0woI6f0u%2FSxVBhTCUDH5daBxSNSEQ68dTTmNDJlCQk%2FkeuZlsOh6sRzdBv1LjZDvGEXTubUhtT9We50EN61Ea4s9ojbHKMuPwj%2FHq8jfeubCSZAD5%2FBpzQBkDungpXmSevTogmsUIS%2B065cUDygg%2FMwKlzflBaQBxMDHZ%2FiAavAGCMFM74oBVa9e%2FrzP7hBKV1HPOUCy7KKqj6lKy6raP%2BU1EszG81qJ4znJEQZQ2%2Fa1%2FdICTQ%2Bdx%2F4RzCXC%2Bl2E11pgnObU6LWyLgvsF1xG7XvKlP5cgODJd0e%2FrfN2Aw3ZS%2ByQY6pgHeBw2KLUXYUa%2BncToheUD750DaBP54ckNOgiHg4wEuJ8tENPJYcuz9VxA%2F9GQydzFS0e%2Fn6hFKAzjw8ZfB72U0A%2B%2FuafKPD60zIa6Nmt0K2e3JFP3%2BJxBWamQA6jBf9GOGR%2Fwa3TbRdttW4JhcJJkVeuSKnZXlTwsEdjV0WciK3Ak9%2F2pmFMxdTQbxSk2Xv7yOx0vHErIINYPCrniz9xZqgdDJrERs&X-Amz-Signature=52d579f9491fcbe066f97a0b1d16f30a3aca57e87b3df0ca2497ab518ac3c57d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZURJLCDY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC2jVTmWGPNYyrjHA9PoYLM9l%2BiH4X8%2FTSPBW3ArNKUCgIgGW5k1y0mhswMPJ%2FMT1Sxx0dMwQbwc%2B0LXVZQPtt05Kgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKwE1LUTmt35ddcBSyrcA1NnqdG2P1tXPJyELcCOp3mWOk8IE9IqTA7lD7SIS3ixdHagI0ANzQI7hFaSPYA8WTZtL7fWAHmKYScY9fixSGlFbpqzYHLeHxKHaJPdGAtKsZwkmE3uHnmK%2BvPaFurjQtsWMZ5oFDMHhotkmYzk50Ec8fu3kTiebotrqCCH9c6Q9XM3N2kWRp4dCON5XM%2BUJ%2BJxZxxQus2LPp7mB5PmD2brMF66GaxDm6PFokpMB4rXFKNBvRhaCTXQ%2Bp5QHyyWTp78ejmw566aJgMNtFFOVYzzIRL3VBbSqSe8%2BLoNN9nAJN5qk%2FS9zjYXQGeU5mkYNF1vSa1yvwjBu7V6b9cXSH5qefrs10E5NcjlRSR1mTHtIv63c293Te5hbjmLJ6x05IwvjtyuAVpZzRW%2BQCwmTBfl7IxIyvXJ1%2FbBsyK5W5NRAo%2FSV%2B4fFSnGn%2BDHLkkN7vNVbp0CAkvbLD1ScQxRAmNZnaMpahXeYWvpN55H%2BTeTEUUQYvuCjptCafjYdSSI%2FX9MBQrH5%2FihCUB9jsK8m7Q6qvkRqVxQ39%2Bs1erNgtuyIL2XZe5Sx%2BmCejijPpC8wVpczwYtV%2Fc9smE8F0idKZUg2yM7tqY0jVe8ex540Lfpig7l%2FbRppBV24olcMPqWvskGOqUBC7l7fpkfTa%2BWJQrwZGnhE1waf87Kl3%2Fb3sq7y%2BGYaDySUK%2FLJBx8LlgzvkaFTUWLNzI6QLU%2BKwPM8Rtwn2RjA92Z965WWtRt%2B7HwRUzrDrhFJGAbq2SuSoOplWOkZJHRuUV2L3yHolk%2BQPMufuYgtOc2PkUVTHfwINBWohTh0EDaKlk73Hko0w4b6nkDqa0K7G8DqpZ4ONtIBhxRi983WOCVcHyf&X-Amz-Signature=da3118cb0b4df86f89abb12d826b96fb264aa348726a2de18f6916a86f3c4a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

