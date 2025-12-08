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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6R7DVO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfTae5fx8Kv6Ee0j5cy0r8F2jSwYlIXSaRMmO4r619CAiEA5uqHftooJyfBFIVIzFYFPgMpmZkrIzQbX93LlyH02E4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFQpca3xQz7GOhO6yrcAyi5sbMhN7%2FaeOYTvXmQMrqf4WCrNdTwLWvlWPU%2FLotIKC%2FkpBItxpZ6NW2DHfewho30bOT63V74NdVSRE0XohO5buDPxjFZ1NWGSaCXc6hAmYCJzv1ys6EoWxQj8TgaWwMyH%2Fc70X6b%2BS%2BdIESKE0kjWs4nEMaRA0ZQ0TYTfnqI%2FKs%2Bxt9C%2Bs8ZizyaADbCgDPz48512hjVSpsx5LSHI9jK4qwiCZdrL7Ik6XyqUHDU9zEV6REpkbKLX7FWWdAc%2BJCWMqFZ2MY%2FEWl6bl3zZ3jxFmxZEqw7yyl%2BvD9td7G9pQYje%2Bd8qTzOw4CncuTlex%2Bqo%2BQDa%2Fo5pK5WBnbPUGTPheRMqcoqCV6c%2BGdL0I3EwKyymO3XLyCVKr4u9GvNjChIyfggLmPYq0bOQjxm2YtN4W0PtE3rsQ5fLvEM9JR8vdDIiF3oqXaydoRxk6gcGr%2Fqhn%2FyH0yhYljNWXoRWFaYFTePxL%2F0FAZfyBS14Rp9s4tTm573kpuGces7DF4AdTodV7OeRWM13sxI9s%2BY%2FrCV5nuEWzN7MZSW%2BPVE81ulQ7kiU3h2is%2BL1OZ84QywZpMFkRs4lb%2BkdBPghN72zuUprcNgmhKCOeuQeeVtR4tLJlSKwCB0OpjdF34AMOSz2ckGOqUBuFHIK8UvDMphLmU7eFn6xSo138wHCWS5qPGLamFwtG7WZW%2Bpi%2BiI5NJBTglJeg8YCokWn7i%2Fn9KJD22aNiRiw65bJZXXMMMcfK8ikuqaKGosYOgaQ9BYFd2mfbjsHZrw%2F5rz5UThNQSOdVQC5rak3A5g1u7P0NMgiCifmBR1xcO9fh6DPT9NcQEcpePPn6FuB%2F73F0Kx2JyfbOC%2BNURpYUzkqaxm&X-Amz-Signature=df8404f2b518b8153ad24cf994c321bf4e51fc9185f43ca8b6f8a088e8b9a708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RASJO4GS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoT25toAge6rM25UiXbOaB6uWWdR7S1vira%2F7bD0lxOAiEAmvHllxmUrirtqNMUd%2B%2Bt61ABuP0umzJUZk06LuP15H0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVeBrm0ggsKjmn25CrcA4zbO3RU5gtxl4kj6qiKCTcczdTODvgu7JxdreFsIVCX1EeglIAgcwPSoiGEHEMvVSisVGKqVC8HP2%2BL%2FW5cdjMaVGUZHE98u1uedoCKG2QoaXTCiDGJfW6mf7LA9isvzEm2e6Tb4cKzh3EpeG32I5V%2B%2F3gNP199NCw5z1TNh49KU%2F1TBEDUemFOu8NS9USTrNisNfHgcJPz6sWHNoqgXBDj1j68RvaqDkRh8y%2FztQwBes16yz8xzLQLwBRH7Uo3lSjYtxm04m5Go%2Be3pdC%2F996vzc4RB6PzLmNZZdweAWeEJNyieKPqhfXPZ%2BDTAdJLJE6G6f8jHyGKgw0bW9Rpl1J1CIKiePIvdKFD4%2Fsm4sEKNGOmcUZtW6p2f0vRG%2FWGCRCF5symqLaNIBQA%2B8fyOo2%2BdLUsKnFStpJIujXp2igmKRHtcZ4gLlTCmlCxFGWqAVrvoQ5aWF7xrEitKn%2BMIXuO0tXarOmdq%2FnDrfl%2FU2J8WBz5DRL0oAbB2kI%2FJyq0MURRKXpeGF7hKy%2BAKhRlfMpGV%2FcrwMJoIWOQcnp4JVI9xaeBFQg4f2Auj44TSc7rt5WtzkskGlsN4oIN4N9iLLSwAC530Fz%2BLXVrvbSnKkwiuaTk2IMYGrQ2H1IxMOKz2ckGOqUBwqPS2ewUNBIPFoACmJof0Ew5dGAu5jngfMR%2FjOCmIvUuEUc7HqHMrlxSbQj4aKvf2NELDxMPNlgvoZcFD5pVYXmoNWLE6y8T9MLB7tZOgknXN2zc9lCI8W%2FME7DGnRmXcm2oHrTRLU1YSHTBmaeOK9PXgeEslHU0NyewaA4uK3EmIzsrI6CTuQ%2BIiDn0UVYwU9WWi5hWNEDSHCp7lELdtfynMYdZ&X-Amz-Signature=cf95585613c69e69e6cca24c49ea5188ecb289c31f3dbf98f0b6595bb8be0a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

