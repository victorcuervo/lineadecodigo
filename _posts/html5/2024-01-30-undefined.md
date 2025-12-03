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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HGALBFG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDvPROHP9jaO45CRt%2Bg3sKzHLSkV9NvqZ%2BLqSfV1J74BAiEA%2FSZGY3KP%2BfarAUXMX6lksDgDuRS0E8AQUuCpJxl%2BwBAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOrSVeuc6uVeDP%2B2yircA6Mc%2BSkLEOojxKB8QewRZQBeBRju1oVj2NRSA9p9Ml0%2BCpKRilqsAK7wT7so%2Fx%2FEhCjEU%2B9sTAYB8HwF35pAo5pGQ3%2FC65f7Q7skyH%2BvuVYHxaVAaT1W2EbImG%2BLWqB5leNqTJb1LkUlTZue9C0EfAf%2BlwvncUbvjE%2FNSzMLEpMBUZ2uNbf8Dpxs93n3glhGLHD5Lo%2FvYJFKATug5%2FSiP7KNhMvcCWnLa%2BhJyvT56X2zb4LPmWqiEnxSEi2mPC4Ld%2Bdtjmg4FvO5vyrui9GFSZIqUqCr9ZGWVSWhDpi2CrESgOFQFFWVqFsHq%2FFdCH4Jx9y0OsTkeE9RZbflz5ODqvvFLuiaM8g1XbxRZD2qaiaD1MZi2Ozgmvyv41mdEP5zgMX%2FcU7ab4ty4019rlO7sXOoHO6vMPHj%2FP1RPEqZMM9nP4SOsQBq6LCXzWnpw2px4GpOVjrkpIW1OMqKewwthyDWmyaJA2VHbBq6d9Rfe2Zsax43TfnPxSr6daYfmyHBtUYYwAHi46mKTHBZVSsUb6crz63eqrxbIZpVOKAe1hd7ApndJQxJHCSZ8dygp6%2Fk0pPmDqYvAZgCrOP%2F2pS3S7yNNWPcT6uT6mOYwOCC2iDePRSWzshz3LlpjIpTMMWWvskGOqUBpXz%2Bc1e5ssYX47c9JTqRZXWLmyYvLuYCAC6jG6W4pGgJay411zVU%2BC1qvxWuIjWhA6qp30WAIqEq%2Bka%2B3VXRciwsbMpqkH7GfSTyKttNUwP32MGhNULCqFlEscDreEKZSuqWBU7h%2BWiNTTPQFTA2SVNLXfixmilW7dDbV8dK6AAPNrwXvtBrvlqrDfdKOW0s7TjHWtP6ytwCFoqQqSvfCfYUk4sH&X-Amz-Signature=40aaffe54c8af65554779f0d18440c4f5b8933af65c54da1ff1fda508ad7e863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RSHHRXA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIE6AB6djs0vMxvvXXVJ7p4%2BIJ%2B5KJtplplsLURUae8hxAiEA2UXbR0RJyXCVUA7av4hscMdAsh1ytanFoCoGW4CDpYQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJa2v%2BZ%2BmeTUZxGzbyrcA3EYxbEK6zwEh3QfvlppFrc4DBGw6u1TUhBuP0reo0QU4eSIvtTGOhkSgN19ax7a402bewvi34QAgIWKh%2FgrQZmQaRyU%2FNiltFC%2BsYDyKP48RA70cSVdN%2FZ5Hh8ru0sd670SzV2IjFbCPuBjwmTPb%2FBI4MCwjGiq8S%2FCp5LMeh1qdi0u9feIAPUWWYg3jTDbTk5g8v3n87E7L7pS%2BrkHlvVS%2B4btopNxaoEynGQwcKEinHhlJC6P90iVv7jcYhrppstceJVGvWcLdVcRgxvswU8kF1G1MV6J0%2FZ46bhWWepWFEtKZ2Mg%2FShUPAqpToq2fPu7bcfrVsNtS9Y8B9GtzXQ2f0lrwZ4WOOJXe03QG0yMfi0Es41XEV17Gv7LC4nIPjW5uGPSK9RU4ew4VPSdsOuC45ZjL%2Ff0XIuNo17YTjd8vYptN1KAOlHyiR4UQ626FUlnXVcasbfd6imD1rBG1jUWEybfNVH4iFaeK0D3RwLUF9pes0qRjmK4spr657nMIex%2FeOPOa%2BNqIIY1iXcdXIUPX%2FzPeFVeTPecbleGRZ%2FWqYNVRhS75ZTjzn3N5AkdNeo1MZY%2FN5CBDmtVc7SPALRp%2BnhghyjlmL8PcNs%2BtmFDo%2B5kKhLv0Tjn8EECMKWhvskGOqUBY3RyzTP37%2BHI14zj7ursvoXnqOVuk2esYS4PItb8CC4aXP8iGC8cC%2FqlScarJHUgjLnoZn8mFx46wlIFyu4q9l4ZsJERlK4BpcfUiZk4g0yb14kzc47B1hxFfbvz0SzRoFYmIZhlxeACQGpaYAF%2FzkNWq2cZWwB0UVdVApz4jUALh5E7iARaOU%2BdWPZCA1MqcqL6S%2FNALprPIZwjm655wABWBaKY&X-Amz-Signature=5db8022653a70a06e8bcd46c9951a20bb5164125d7b0e940c04b6015ff5b637c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

