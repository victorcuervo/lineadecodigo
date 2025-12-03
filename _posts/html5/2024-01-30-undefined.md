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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REQQKNI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEvZcUjLm1G0UY2frSpJmlbcW%2B5N1VLIDZfQzGG0gHcOAiEAmBo8dsNEcARiWvpO92FcHUDMtVSsihiIV9LoQ7xO99Qq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDDvYk0v%2BFa8B4RIvSrcAyL0Yg1ATXYqgH5ljwG841eV%2Bqz3PVIpJTXuucd%2B2Bmwv0gm%2FQgUS%2BW2N%2B9u8688FvgzaRPf26s7ZCa9vno2xrthyAVPZjX4YXJpjiQxoG7GY9291hB3csbx7%2BPVGugJcI5KkeRch1Dj5KzcuZkZTJhvA60yH%2BF59%2F%2FFUDjITtkXF%2F0sC7Tgm%2BtTUuI6Gf%2BkN162bKJsez58wJH1x2EXeUWk%2BTM12UpkR0an8ZYnanS0jufFJicnXqoCsUmFz7X%2BsGJZIHmdQT4OzB5XNpeWvq1pbuqOB9p0i4df0d0hXD00WLKnXhvkGZkdv16X7KMkdlkaKXesUyI95LNuPsJFM91L2Apa22bgnHw55efgpF5VjxGz%2BRWE7rqCLNigBXMUsqLQuaBKX%2BWlNTQuPWdooDcfNrgdQYEY8PLfeKCJ4XK%2FiiJmUmmf6bY9wM6ka5tmqgq6KBUv95xfF6qAC2HrqlFkX56Imn5mRnK73noZDW7ftCkBqIrjXc1C4FqUPoGVP4UvSAJEUV5e%2BUXKu6IlbQ46n%2Bfq0CB%2BTQWMNwO2S4QOrGPbAvE%2F5wqQenMmHCt8%2B%2FnKcFIjOk4vebHK4A2buNteDgBFr8X2%2F9ciH7LqHUFUjyxxS9IwKJWWZMpOMMeUvskGOqUBBB5Ku5FOVgwdgqJtZe05uGAJlwx05c0OvIeSdXtvu621dxXd4zFv4XyHJfEiEhtOWztgztPGgpoU%2BXtYXpNVrdQWTWnPKJS8NAC9A9IiniqyAvBf4eFF3wRG9PhddQkwfzo525rser2IfPR8g4TyA6zQPf88umerXcrWE9R3jTyaN4LL%2Bfm1mj3uFjyNKjMFagpXrhfvdTUrjmHZj2BXjYHhVME7&X-Amz-Signature=534b4a269beaab0c450f92713f464fa2ce70a20514481502afa445b81a9530e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TL4TNS6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCEiJ432AlurYbF317IH52SRYuf1EsBNQzUZnTaa1eHoQIhAKvunpuo%2Fns2Mwn%2FffbDQvCyv%2FfnDGWm9atEdUktKw2NKv8DCCIQABoMNjM3NDIzMTgzODA1IgzlHL%2B90BbW6cFlRvUq3ANbO2%2FD0GrsGUO1h3tucYB4pKeETtbPFojWMn%2FoagybMY8vY5OPWPAmSwW6%2F8CaD4pV%2FmQMBUue4DBngOJANWllbOTZCU7SjYNP9vxAI%2Fz7tPYR4he7JGy5hpOhEDsr0YkgXnVzfIcZlSAIC%2F8oP%2FdE%2Fm1K%2BbRyXVViTCmlFtUK1pdqXQUVU39q3rTB7kCXsafFE9BYmuUOMTmsdHejjOabw1sp%2Flq92MtxT2kJpJFDEN09oSHy538RtCa29wFB6IrgRfpEIRF2VAvLeVprnST2G0%2Bp4HBvgGEL7JEMIuMCZa0vUcS%2FPJL2wVfMEiQhWSDNWmWzAi%2BTKXwbWUAxvqBGfqHEyK1cYXWIUGC77r45bM2GjDn3UYVIPT8PrPWzvq69LJrDhSUaMuFWoxWR5cl2F4hag%2Ftjkc%2BzhXThW3zdm3CXQAZPOH24rmKC2bKYip4GWlsJrWoUpFOH%2Bc3EscaRrecFdkhFP2fAQd01mdOytcRCbTqH%2BTzevugSaBwVfklZo0otrDtoOYh2VGFM%2B5ltjbXcru4w6zZmCECTQEWwnzpvSPJEnV9PNkqP%2BGc0KEcw5PJgo1tT8gRERIoQxesGYAnSzxPB4fUvbBF2Ml28Fbx8DTT1BbTkBW428zDYmL7JBjqkAUSjVLJ85qQW6m5LaSfyFSVYHvA4TKKyCNwZemjSf3bQLZBN6C9I%2FqpJ%2FcOZ40nqame6I%2BMC%2BpUsMpi1IP8x4ebr%2FLXUhW36Up%2BeqBxmPX8%2FKSX%2FdPkAF8hYu5LSFEecxJOkeCVXqgihi0%2BHEzqa2YXXTQkWqgGFo3FBcNBVmqL7T96UDHc53oNmZv9CoRkgDabngQwmTLXWZZN07TEzEa%2FuGBMq&X-Amz-Signature=72b037516c58f0ec516545e73f6a9d621851062afbf70e5e3c65483821ef73c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

