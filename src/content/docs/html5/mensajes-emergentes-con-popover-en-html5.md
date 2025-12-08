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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HV2WXAT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv2Yi%2B7eRg1RO27VPotWzt2zUbfHrM%2FyuFljhcpekuuAiBpLBJkbJXU8Yeid96iExYPXRvOxMC4HHR5%2B0NyiKgVliqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2FV8q%2B4MKUw6QyEuKtwDIQ%2B0qthzAoKL8b0nObMqa%2BFFloM7dsodU8ku86zF1a1TdpF40OWUjGYMD0AytBDAUwXkQr97c2%2F20%2F3l7aZySbmsAESIX%2FHZK7xGqoyPA0BLZ1COX7b2FzbQYm9GlpqJ%2FFAbuHkXxOhF0kbvRsfiNqSLnuiuMwi4aou58CZdciXq3lzfkMqiAL%2BTHhaShtQ1XDsDKT50%2F0TkK%2BnwKGwJvZdAAhsj8sr0%2FpM4ymT3mps5NJBfUXkO9HlbFx%2BDWzK9pR8Smx7Z4HaCV7EHR%2BI9vvbNziKeZ0jHFdoYI3eSJzxrprJALSkCf7p3idOD5NXdejyNUY4p1Ft4w7pod6yMvpVuI01PH4v%2FElCPexpIOHY6RrJGTHheVHXFXiUvtciXG8WWI8JD%2Bx6YuuosuA2biov%2Fxe81SRr0SRL8PS1vkal80yyJXCp2qn77Xg8JMeUccMWZ3EuoSjtR2cMNbtTQ%2Bf%2Fx%2BPu37ANnc3iMeu3m4aQ8yGzPOoYuw1DdeH0r04yOxpRjzHtw%2FjxIC%2F00FM3axc6dgxoOvSpYjdwXnAfmV%2BcHdf2zwws253W27c6d7QqJqAUiks%2BypzH3IqCgD4qRfn3XAU%2FzxsNopktb1%2B4NuP9ylG%2FFG0m5npXSz%2F4wytzcyQY6pgEMRxMRfK2YqnkcRJ%2B7%2BZemEaaCoJ8EdmH9UmPKZGwjUjuDoYomroIkcDwf0sopxlfHV8BfeAhKjdClToeRDy6VenHqKz5QfuaswnFRhEEd7tFluzEF3%2BfpJ7UxwssuGNMSU6r6gl4J8DLr%2BEeARPd8Tw9ajbPB7Ev9BxJjhdCQLB3Fek3oQrn2a%2FT9kGVa9uISZx4fo1iNUevcTgUBa7VM1qm5iiIi&X-Amz-Signature=fa87a9421f1d024c07db8defcdabec8454699e251a5cbf4e7df84efea1068037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4R5O56%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEkQOpP4xMBErx6kWSehKKS2rthVggLau%2B3CEbV8T27AiEA44CNUmyTYyzQua%2BK6TAbC6FaYOdbMCgg2%2Bd1veAPwOIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH47iUA7u1qprD8mSSrcA05FFefgVz%2BPOUaf8%2Bd5Hv5wUsQLKre3fz1k4ZfC5TX3FNqCRvq0JlfxlPhKnEYYCyfxQ4%2FWjr%2FBMFv96UT4OoVElgfyvl6HqLJJYKQSRo0uU9wSCkgiUtVRBd0i4cULgT8MKcrtTTOGGgyMlWp%2FjQSLB8ueitvvHDUBKy4OTjA07yXqn880MKdO13q81QO0ce7Gx3cgMPJKlZkbs3MRvDbfdrdHCgqgLGuzafRJdl0O8Qn94aRNfcbwx2Jk9INBGNdH0V0sDIR05sw2qhE%2FZfx2Z%2FWNzxIt4q0jokjKYzRoJ%2BVTv%2F4gd%2ByqVrBT7DrVutftYBjFpuwcsk1jfxrGHZ1CQQXYwu45fX6QkfvRZhhuYBfz6OgINMQq%2Ffebi7%2FZLcNz5s7v9J0iHsdMO1DPyMXogL%2FPO0djqiSdmiN8eBsYYSVeq5pxpzXgB1Wi9r7BCIAzYtpZ73qVzq4LFkZD01d9Mowp2zCVdb3hYZ8sKuGXZUaNcZn2Q%2Bab0KfrpETHtZTAyXcr0G0zmoA1fp3%2ByRs5rz0q2GpW8dtGenGuxzSLRvSOxPTWNvBb8j7jGtVrvF29qjXBIaioGfgbfPHECO8HCzK%2Frp5EhpSc9qmRkwQDx08THjj%2FAsTwIku%2BMK7d3MkGOqUBf0%2FQh7KwWTAVnbbQ1sGIO4THdjCXQ62EMdYn%2FFcLnMA2kjN4l%2Be2x725LpZh0DP07kZnUGyPQN7QVAqrNe%2FWBU6bHLae9KrY7Azw8ea3bwkRsZ5sA2NRy6%2B4iubmh0Q7vJjte3WHJtaGo0XMj0oXHivTSzObhLYvQeSEQvSgEAgpBtZLxRrDwG9eRmIMHqzCiN%2BRqVNFB%2BktixdrurM9Rn2H9K4g&X-Amz-Signature=fade9740618c8ca7fadd2848ae5512685e0660978aa479e3e24db6f3349e3bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

