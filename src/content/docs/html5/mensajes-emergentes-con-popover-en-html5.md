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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PIPC5HG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaSSpa1nLTEIJ2T4Hzb0MBQ1Z74RQ9MasjN%2FoQEkC%2BrAiEAldmEP%2FYqmj8TC%2F5OshTbpcLCs%2FaEoDv9plOeC7%2FRrGMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDM8gthNYYSWw%2B30vdCrcA6zY3vbcSvBs8KjHhJetDn7FsnHPmqu0ep2xQxuY%2BEQtu2kZVF0acvAkqKxp3ZBqu25Xa6EqecVRv%2FFXJXf5BI76b8Jncda5fCzEuy3Dr%2BHBxXTyRUGnrGRiUnhksPrd9IF3F95QjCyIZaJynMnz043LVyl2KOTt4TaRJJo1Z1hAVuNulc5etuYBiU2XNtxarJMWL3QCav3Ejjyzc3xGXqAw2rlSCdKc5PxE7Tg0yroa%2FxHv5r3mj%2FZFagvWVmwtjr0Wc9pDP4xrsFkX3BgjMCUEz72RP0d7cCBospJdeNPlHFLwAVoVTkk3kzBvyHFF362hfqUtEIBeza2I7KDx3cq4a58prW6u1esT%2FprB25mWtKj68mp7jnanaLIfAsBC8Jd23kdBDYKRk9RE5b%2F08ZYRskSmtsjwM%2FH1cG0gCX3BqkAqkvgrSISnYvkGK8Q40eccC%2BmER9mnVE4MnfCi3M9OSDTZ6fulX6BwPikTYnaVAdxnhL7Y2x%2BMCxycS5Ioe%2FYN%2BbLkkrOQgRXBZeGSrFUaA16evB0yIsnLLOvpS%2BO9pmfufhKatjwOLQAr7XO8jJ6UdQXZzQIdR43bhtuxJjKzwmrorp8p9shcaZ%2BISvVoREudVQvVR8n6aANIMKDL0ckGOqUB0pscLwemHgYfvaMIYANI95tZO8XMWCDSCpgGtZRww7k5Usu9A9B5DZyzBOrfxO6rloV%2BEPg5NPUs3Os8fGhAlUVHbL04b%2BrOPVGEmGKjRxJgm2fYNMjMFqgJkS%2FEw4a6tYoGvB0Lf8t5PAxj3X2Pbg7P4I1LxMQiyKcCVSpOdZQ8bHbws8TB%2FCl6HzAkdaxEsbbr%2F2wSgcZe2e%2BZQE8bSR4WotcW&X-Amz-Signature=54613e9e501939bc5ee3ada7dc1210dbad73b29e34091ea3112bc78a2736d160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7QTOCQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGI%2BOzlTJzFRXreEM7sR57r9ZkejKmh1oNGuOrkGwob1AiAcMpsbpDP%2FsxlwDV1orXp1uxJXoEQCJsj1MY2IlaC0USr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM26JpwJ%2Fkh4ToScFFKtwDefNJJURA8WwKrvw0H9mr2qc2lWYPamYqIqozj0MgxpIuJRKcYHNilHr8GnNRkyqphw4%2FzGCrUIWkCDASlroOBzOKztNTHVzDVGyECzbNC2WfJ4tQ2jEF%2BLAIXDyYS0NBq7YmWvIxXW3GJE6D%2FByL0G7w3icaXfBR1Keac%2B5EzEU0WiGKVKqe%2FW%2BqLNgs1E8Fq3lyk6xHo%2BPsgi8QGg6YomOB87SYRy0vzB7%2BRzeeRKLY95L1Vv6Nl3OlPeyPzc2O89%2BJR0VnaxDTuATG0ESAr4BpZmv1jQrOhahr01YMviE1RZGA%2ByXrJycBAlj1qbhBCozbcjfr3CYn3dGAvrx3S2wiXsLpmvou4ntjAUGxt4d2dMGK%2BjvOSgd9BETw0IY%2ByAB5It6ay2E9hi3JGfveXErs%2FlRhv%2FOAwuW4ct1Cu%2F02gBwj2uEUZraRofkpmZvCO82%2BaDDmzpAPOOgfsmyJyajizMROHWLaEaLTMIepTrjjcTD5vPlsfG4ontchAQLx5TbWE9d%2Bb%2BsQtKvW2dq7NJnmFen9CaUGl%2BR2yCuEv7DzjsENKkJy9nKVWpIWkLtLSHYDUyzcgMpZWFhrPVkTfEUjnYYKH1G0lSM41HJaL1m9A%2BxtRLE2LrkmrO8wlcfRyQY6pgE2dR2kf1OU%2B1XEJf%2BY9KiV76FbdoyqFYoHFDIL6u%2FGufYw6EKEYLRNi%2FUpEcZEWrMB8NQqJ4Sa3Fc%2BViV%2FzqoBkN%2Boyb97sooDiOnyVNa1C56X3QjmwVuq36%2B5gz3OUszp02JzF0QuXP%2F9gwSQmQvTSsiAcwrZMc6f7t8r3%2BObAjpuOpHduB84cqiw7RyT8ztqmAZYcaa1tylHPNUkbI1Dv%2BMk1h5t&X-Amz-Signature=8554f0bb6b43ea08a8c61086360d040a47069033485aa5694bc597fd1a1ffe56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

