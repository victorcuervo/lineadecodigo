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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSDIYOL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDw0IT%2BBf3nh3KhmCnQ1nMLb%2FAFsO2t8RICXZAIOyRewAiBLrgTjrFfIO9BEyqJVY2AIzMP9EF%2F7x7C87ccT3fz7sir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM3aZfWlLol55lqH2cKtwD7dMfNxdOH65vR8LJuAJP7aJ3fLWo0xQnqB09LbkTNeHfFlxR0NaBMPmm01vwG0Qp2KryPt0zkpYFzaF0h5J1ojZ9GlK3nLIkDIfUXbWl30DysIpX9XZOT%2FpQ1XIo%2B%2B1RjXNRZQjQOOlvABDI69osrl810NW9oirTQFtgZs5wbHfhIJQvAJ1%2BEqIx12KWo%2Fa2jkHXdERGIe0J5UqjolHOQgCeF5k08QyVrxwx%2BOM0BOJY2qmCN6ObgpZCRB2D3zrTTSYEnOvdwRVavCxHsdx9EWdtMPJF7uC6fTMHMKziLqtcIWibAcIMy5IKCylfmXzVD7S%2FzKpcAKeImgI%2B5fESGY2p43Em8RB7c3KhKDpI6e1J5%2BbdG8%2BiyK8ga2YIJ0Pb0%2Fd4uiordkgi%2BDnkt9ps9iVP24mPNzw%2Fo%2FGWpfuQRc2eOTZQkGz4YBUdbfpDy5xQR4txdCp1c5jEOrxebRbpZ98q3yOjMaXmNhIGkoQH7I2Cl4Pdygs3uEpKWh1NdyxCRFIP%2BHV6i%2BNM3nukycqXwP8JWsOhAajsyhEMdzDOVEu29atXVgVak4eAFIAJVCNjSuUFrllhbT0HVdjWHofvZC0OJGZqq3fD2gFfvGfbRJl%2FJmqxQNVTmTx8AMww7ozIyQY6pgFi2HzaJOSwp1%2BnINcAJZR12t2ocz9Qw6Ufh9fl9YN7Hrz1RRn0Jr57hiSjOqrPzfwdUxll0c6X1mRWkk6DNlK%2FMBJWYUR42jNEL1MAjAaYJqE%2BQIh9AgrsFtIa9pbUFGxH4JXtuzjmcDYlxE7xTR2Oj3bC3Vnt8st7Ov27NXT0DEBIB77v8KwKkPRMGs1aSGdjtmlogW4Xmc8ANSgv0hyOuQ3p0XtK&X-Amz-Signature=7ec9c87d3e29f4f7a95cc05f18537932d8530a34274394a4b42b9eff55c5b015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC6P2RXR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsJ9EFvn7tWh%2BRaxPIJa02aLyR2LAb%2Bjs86yNcG7SB4wIhAPCizAX49jdhpMf%2BK%2Bqgk%2BNmdaSUtRN7L90tr7YrGbi8Kv8DCE8QABoMNjM3NDIzMTgzODA1IgxBYJN3qUoordR9BiUq3AMxER8hxCjO22YmQzd6A6vgWTPTwDuX51M3Lw26%2BuWrX8dzqbQ5QTOMq4HQDKC9ii%2BiW%2B1wXk0WjW82UOVrovpWdjdr8EWuhNTHVM%2FnQrIqTtBcDD6dGh3rBKyrwdLxcQaYw9D9cXv13OZjemmqJVfukAmeeh6K0U%2F1RGxh0A7ZkieOKPO82Wyca5vziWSK5EQXUm4f4IGlSWdl2WB%2BD5aMcnh3vt8XSQryg0xRJNIWmRKwrrbH5JRekNs5pbYLzAEEQph84DnkXYe3qd8P%2BL5%2BunagA2hI%2FGYR4lirQIGGs0omlMq7xUp5g1%2Fk3oiHvz5GiUV%2Bl1ZOQNF1DW32Sjing6aM6yorvkd0itMZLCjV4XASLEZKBN4%2FE9EWowwFNtkdVSnqAzlJhfjY7OSv4MFqZLKCtO06XF0BR%2Fx%2F13yB439uKNTswwCHkB3kWCpqOBwGUCtsyGjXFHsGh4ugqG1o2kimZ2GHoPCvaz%2Bxs1U%2BuNIG7KWv2ygd1PEGlyx4Z9E737xoWwWvKL0nJkj2lh2okM35x321Ep3aYl0GWnKufqBEszvT5vCaSewDPaKTlsx8ghVZ3AqHFD86ZqOSklLPalnVRefveg6YidXTAQlPPrptKI2YP2t0TbiDNTDDjMjJBjqkATKbgFPB8jQpl0GQPghCWHXZyHwjWSZOECuLu5Far6t71gNKWkmyYB%2FH7nkj2cc%2Fe2zT9vMu27%2B6Tpambu4L1HueY7GwCujG0yHSoizIm8Y1zDy8JjiV3m0Mqnscj75qu%2BQYnmI2Vz3M3LhfqNruD3I%2BNLucgDdayBvT7%2BU7NWbUauIh3LpoFvrfnXhTZJl3zERrWy2%2FHKDJKG1O5nVt9eqJ0cJA&X-Amz-Signature=67d7e21d89c6a9ec5b7a8abf0122f8ef4ee900186e8e2d1aa5022d0b6a6aa934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

