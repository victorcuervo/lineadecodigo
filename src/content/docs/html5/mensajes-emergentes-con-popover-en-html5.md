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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4W7BYXN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEohbO8j3Tzq0Vn%2FjOlDNtIdQPs3A2sWuMMwP1bcjm9OAiEAu586m6Acm653HX5CPM2juspomk4%2FhOpArIIyNfbbPi8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCG%2Bo%2FAPG6ZvamAgSrcA6kIrpLOwWtvIBXVjqxi%2BBI4OfYdS0Dtq%2F1e82qAWO235uCzUmEsiSrlfsOra%2FYG9L1GsEu0%2B2eCxc9d%2BsLPcNBxmK%2F%2BcdjuJSVFDgZvsCvLdu6So9E%2FPhVO36UQc9%2FHJH6MBc6SR5NryIs2n9d%2FgZrlifYpDOPPR%2B3IqrGhH%2FXnivAdnOkRGL4hT20z8DNadVWICCAOhGaZ2frCzqiTY1N0HCdFU%2F%2B8Qd7%2F4rF1vWfU%2FdFH0S2t5hy5lf25KKQPYp0zlLut23OOimlIYkZVXHKckbDnryrf%2FvKjGu3sSxezQF5dQo54NoOPzYp3WuaG0Vc%2B9EOkIBIAThNeMCZ6pzLQntn4OeZHfOY1lbWY8i7HHoV3V118nylbT9rN9WsLGigKp49KrDCrjW7YpB3bmuD1%2BAwUf%2B2OOCGWaCo0Qv2krInU9ZWTyysDuXuPgoDJJk8D7VGHAYY9pJbvfZOdXc%2BAwRTgfyklY4qb0pRJm%2FYLXt7yoWvluHSVOLjjZ0jz%2BZPbNjyQwyBYNXJf8pNfc8bBpTxFb9CHk3ZqVnS1RcFjnHF8RllITxI%2BjrrHjCZh8iXoPao4d2r8%2BuZwDW9TZU%2BdPzZNxvr4fQliuSgCnzojyZL%2BpA5kXWz4HcRdMN6H38kGOqUBxQiMw4Ob%2FFkAAGWHO5eDXldJg%2F6WYzzre9vDtNhvfrmb5MfEYC1imwKLBvYKfFGQ7X%2F0QxhkRamX4SOL9CTX%2FNPMTRkOmK3AZU%2BlA4ViB4XWoGQ4tnhSFo0sq9raC4N8jFXIUAmC1uJBmNefunmr1D8pXWzU%2B0DJrPsh4pVE1M4zhtODL3xmVQDDwJM1wX6FhQ%2BCqTyKswZh4fswQI%2BD9YX3ZVg6&X-Amz-Signature=5c9d20f6352f6fbb5e17be4a2d5ac50303c9b781b224b91a34140c25b86c13c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYTLDIB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqyhaQP19YRca%2B6nFWIjtwVSPo86m6ObZoJYNadmQZYQIgV2TatTiyxubcQFFs%2Fs71fS1eAvi8qE%2BCpWuW%2Fyw1NQYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWFKZIdhAHT9w%2FnPCrcA38vXUs85PC%2FYDKvQkpqhtBmkH54VcDaW%2BVeqngmMp9fRZ6M%2B63UhsLxvhjrC0%2FWHIiNN92%2FJEB6V1PV%2BlRVGisO5%2B5wc8s9glv%2BL%2Bw2%2FN60XxhxFYTrgx9NZTLhpiUt%2BeER9jdjuX7paxOnepIB%2BtAZElnhFXHWIM%2BUmSzg9BpXoG%2FX6tcLzB2JS3NHayD%2Fi0fEMdxIdLg5BdIjik0tFQ4ZyI45CV2gt4DkMzYWYK9SS9iHMJg4rgpcP3kQthfwhjEiuQhkmxwJ1yIAEK6369InrPX9EQM2jAqKoM1%2Fm2kKOQ4kt08J1oXnmIqvN%2F7uR0A57Gwb3TmU7QZQqg0AeBA4h8i1mfp7txKy%2FnMngjZBQ1zvye9nuaB3XH2oY%2Fs9MSMih7E%2FQ2XuZJp%2F9QJPEparY2DlVmev7lA1xUZvjj61Bhmx81iBt7ZOJbKamnxMK7q%2BOvMGmhVWyl0icxswdg7AvAlUOtoOKsaiQ7umeikUOlQyzb56Pj2xPuC9pDumpREuk3a3tjOhCAjcchOwNOQbRb1QdOy2yoc2chHZPzxqzMEPBkA7quAtVYaoLSJNCC8oRfCAyHzEemezWagGcz%2FhT2KX2d7hnTbHFIpPyaz4KqYGry61n9h6qpnAMJmH38kGOqUB1X6rjLsQZsBLgznhjBjUeOvFhJwIbTajNZ%2BKCPuwbwGu%2B1TUJiEVEUcKNicsjafM0%2F5pbLSntA%2BrdPGJqlZxQkV7%2FSbQeewc8fzZ53LK0OHBLKyn7HZp8EXygr58dBxzdeMNaAL20eyI6i9ozYOqstwB43vjFAlYfaoTPAvCzNuWQtfNVrYFAxiJTwK1OHJ1mspHgetKWHwK3A7sg8iWa4OrFwdl&X-Amz-Signature=9783ca9eb4218a86aa9b2742701a08d9fd8c02e95a2d9d432d7543bfdb28c739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

