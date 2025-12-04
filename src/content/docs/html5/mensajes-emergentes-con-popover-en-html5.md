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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SEHXFX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQChJ6Zzl6QS%2FxwJCuo5p9CVjuva41WMbMN9nwYh%2FCNGYgIgf3%2FyKj%2Ba8GaRgVelym1ZfB%2BHV45GsiCNJ6lrzg4h1H4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDE9SerSQGI1Evu%2FaiSrcA9luT5GbhVrJ%2FPbumHC3Snevvuo7qNuJWXp7f5qeSB%2FT%2BzzzKx8kKllqiD5rrJpnSbuzCK5s%2Fgp25h67G%2F6OXZvPjD%2FMmS6ZA6clhNF4FjVpuhKwmNGTJ8wswXDDQfvv1cs16CW2LQsV1VMNI5zzJhYSpgmq4q14GZeCJodtnpcQpwIRUY%2Ba0DPUqg22eOC2FSiVNSnmXWcIqiCCAtPU5ydJcHRJgYl65sHx12hl6UnKmYBvw4LktFm3qY%2FFkL98vvvkggP3pwSX1sgm3cXzyqp71qsLIDtb8ae6Z%2BgJonJpQhlIuz2htkT27qtlV1OkjTTCxRcYtvZJPLgDAkueiLH8o2rUSLdORBVTUQHuii8rnrvaT1S8f6Pbqnr2cJ16nYrY6Q%2FD%2BC1tAOo7dbntfCE3tCdITHsTJBUmU10tbLraiSsGKlB21jzofDWeUUNW8IJUIVjiBixBwLIqJEcuq8bXyti9Bke%2F7gqAEWDK7YcmdmmmlS5e16y1YguvPcPzY4NXETW6Y5QI0LMRFxvAA%2FfMJAC%2BTqosoppQU9p2Ogs0YAEwPKRKQ9rTiRab2QSpFtRfhI3%2B7QS4M6MxqC3MGcnb6vSsXFFnKkwDf2v0LWpkQh35tANxboL0ubD2MLGVw8kGOqUBrBZ3L79SKc9kNmY2tUcTePXI98lZfwQrMqx2sjMCBB0oQtw%2FzUTGypHl8pBNKuekQ0a2J6VIvesNINFsy6j9NIlRfrh7xeNkblyaDoSEZzMr0sdr9QLxVhCmnjA9pnDRxjxgsUPY93oqIVqDTdGeSjiAYvAu59XIGFTQQYjS0tuQH4tIWhgtfVfMmilqfo%2F%2Bt9wV4VbJAAjgYPWC9eCW%2FDwT1jVA&X-Amz-Signature=8612f5dfff2e589584a925cbb631689ee1b2c65cd534ee19ed13ec8abfd5f4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75IX6Z3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDcJu2%2Fr9JTkhJiam%2Fue6TE5rwBaoXY7Lz3pvAp3OT7OAiB3FyleoAC9uwunFNqCNzBYA%2BjATtN7qZEdi%2BMnKmjd8ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMUHWitbaX0du6NNl2KtwD%2BySfN1Sx0%2BcjzUs8MBuLSUjeqFToLRVxsTaV9%2B9Gy0mphR1iz%2ByBJlAp6s%2BYq6%2FAqhmsjNFo00847hcFaUnd%2BtCm0pH4FO9cpqaJqrvhqZiMR4yqiSaEe1tSf1qz%2FUuha1x2Vd4f2AajmcDaENZrIUuKrYNRb3FC8J5iQYIqYdcl1uxb3BG643qbrWTo8J4kVGKX1D0q9CFlqsa6ZMtYkOX0MpWxsxeRaIhTdHlc%2Fo8yMhMQBamcJJENpxMBmeeEPiq%2FsFK%2FuKUrX7H4hvvtJwXGifTa6gnQMtiXryrwsm9%2FGigICuqDExbc5PwjxQzd18z6q01moR3Ki%2FSiQ%2Fyrf5hNy3jpxBSWWQWFYE9z%2BFWfq0dzAObCo0n0yXENR6A%2B9%2BrpRoSSsHGvA8bCabdXzVF8BmkOImBcS0MzI6%2Bwc5PDTeB7CHAreeyEbugVeynfzAT7cHJY%2BL4N0AECJrXy1sardGoid9BGZ%2BaxRofJTFxxUuPCjbHVmormZrue%2F4TTaUa%2FmpOZWagfzIyPa473Vlvrrz7xfgCKaFKku91gDKjam%2F0hgVKZ0dwFljY%2FSmY7SbndMae4GJkwm%2BTYfKevMIk2ME%2BDsiNZxr57P0%2FEjXJF%2FD81vbmjDyOvx%2FQwiZXDyQY6pgEhza8zLK3FvArD498C3FhLCT6RSHttqje9E2gdPB1GoKldYoGeYudBHWYW4Vrq9JW%2BzWWU0ERQBGStsqMOQJNZ2tmM3RuEOEYUD9Jh9sJWBFC4iTNsmGxNzAPuUxCjICevxtr8n%2Byux0RWwjra5o4BXBPPMnqQnoivaAxzd81HB9CtV80AkCbneYx3b9QWP%2BSVpJEHbahjWdoAyw4Uop3Yg%2FfyBi5j&X-Amz-Signature=27f7bc67a4aa70796157ae8e5ec72dbbdefef3f8530f798c9f361ae261473fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

