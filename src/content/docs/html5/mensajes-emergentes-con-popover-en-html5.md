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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GXO233O%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETX%2BhJPGTq%2BumdSKJtZ%2FEAfCaoxVq02W80yJLjgfTjOAiB7xPZ59ME%2BY19Kjb2i%2BLx0IAwBusfg5l%2BmtXY6IbaFLiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3%2BzECC9PZLN3T08%2BKtwDBqnKjVLEvHa%2BRO9zMVLQ0t4CWHoWV6NvzUmXOfzoilN13xUSp%2F%2FtzG11hf4Gc4Nst75jsCqg1jEAMwRhSJYuvX4hLgrtSlUiBRvm7LDoy106EOR%2BzLiVyXrBSv59M%2FB3H%2FJv8CZGP5RUhLSu0Q%2FUZ3zBfloy6TsOb489KqluKyGnNHr7ZNtbXuJRHFs%2FT7gIoLMaoOOPWNuFSE%2BRqJwE6Syn95viegGb%2FQe6IY6VnFOjLfz0W0WvCl5MzHWnO5rck8IMy4b53C%2F8kXabd%2FuwjDpoTN14y%2Fqv8AeGRSXIpCP8TCIXUSoZ40%2FcJzBztRc8oComlLnASCLWzTxZ2Txly%2BXbsggTZ07lUzXaKSHG4rhConagTEtqojipSuOtGlJXqyXHaJm6%2BheoXRj2hFyETR77p0WJ4TGB9xisjz1tTB7ToYKgd2BsG6M44FtY4YKpaiM29SlGOLpbpKj57KlOy1QhlqGuOm5bfLz7gjPefSmz9rNOKLqbIVTUWafLOsTAUbcaARxx0F6aoY2%2F4ppa1XtQOegiNGM5tmoiUojd6X%2FRxd8OLEVh%2FkO2AyyziKieRZ%2BDcIkE9A3EgDxLxUVejw3NTQ%2F2uuLc2LNK%2BwPXexqadbnm9Iq7fu4nnV8wwI7eyQY6pgEVcnJuLraIBCrM%2FPX3cPs0gEX9%2FV856soaXkudiPiuby3hPj6FeMkeDI%2BVe9WEViUO8z%2B2xuCXNaPFKm%2FzJBqWe91tdI%2BRmImxEf2ZnAu3Wbtq2WAMYY10eBZ2XEay70zK1lneJyuE7ztqoIygx9WFuEAATuxMECV99xX%2FhtEO1uKYoOJ4UkREOBiIQwywEwQkEfXAALK5rURI6IwOoma3LWvVI9Ll&X-Amz-Signature=a62ae6fc888e418cfb0f422f8437b5c4a288302bd9edb4f2f5837440bd0db51e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FNQLS7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFO1VuV5yfc%2FMIrdxT%2B9%2Fi8h9vR8Cbqgv%2Fg%2BFIcaUirAAiATw51rzQc2X7ayiXAXbzh8AiMVI0rXx3E6sWZxBCNc4CqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC8BMirFBMWxuq34jKtwDLflFQFurfhloFdeU7270yZp84bhTAX73V558Ujw1vNr%2FNRHP4zL%2F8i5BUGYqNkAS6uPXzZdQY2Ef6ZtfHnmuyRkSOnbca%2FgQjaHl1QOvNmR%2BM3AdrgEzQ5pU%2FYrSu16YRRvp5XBggty3pG%2BMmPZwqs%2BPWrdgJPxTEORQcsI1aoGo%2BeIDOBmhidjMYuPUINOZwmawoH55ZT00qC58jbyPSkEjsak0ig9kcgLqN9GefJObM%2F2PC%2B%2BoJHjBx6MDH0lh5TBaHBi4em7zMK4kGeua3Cd12K7xpKthtWfiMzL6oeEK1yUZlBM87kFLjZkPzsqe14ut4QTG2WdekwPhgSqjSzjlntxXnOu5JzuUfAlXOn%2FOcKwT8v7WvSD0Q2wm6RdWHoZo37WAPSD2EIg3DPkUgqrWCOhFAyZGYelAO2nmQ1ByiWhc3emGYULAV%2FPPl3s6aE20VKEOsutjmUpK3tiOKti7MJ4di2dg3BKB%2FgNGY%2FSQCLjsrIB7wzoKF1n9UGQIzdT2DFadNsrtUq33YbzbjzOAjvJFULUNCHwyu7yDCHnGRHnEsXiOD2UoQyCjM693COMyKNZa2I5Y02gpYDiGWheJ43CgHMImr2rFG1PPCRgIrqW4J7GPNGGDQaAw%2Bo7eyQY6pgH5cTK3mIDkzcH6Er8YP9d9aaBub7SW5Y2aCp%2BlViQilks2%2FNh8pHxsJgfmSu5%2FDnTlmBOCmdyNLzJHH8aUNk2CRtAEsWwMcgOdWcSrjZrSGzVeIOXL3Vwjou6SvM0pg7W1IPsoft5y8id%2BAmm9a%2B0gvmdz%2BXuyj4siU57Ni1FOBPHXQ326fG0AKDd92mp4iEKDmMRCHidGaxHovqjDNgNE0fZZDtuZ&X-Amz-Signature=bb0bdac2a6375635743c27e645302333fb1e53d782c7da6e0bebe4429399bacf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

