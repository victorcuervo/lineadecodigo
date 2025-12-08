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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRF6ZPX5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDujBKgNFqab7L1pEwaANJiawBRuBpGcoM9nXc%2F%2FJaQswIhAOz0mauso2E4IqgJ7p3%2FO0qrKIJ1OeoUYgp%2F7rUnwChiKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUxilkQRO71HtgsKAq3APITug9Thx%2BRLmNbHSbXKKGM7u7ZxNJS10dOS8mGaUBqQ%2FaWSx0NZ66rbxA7AKhp3AmQb4v4Nipm5ffi2BnFAIhQesUpYyuPOfLdjeCmlCu1aFUp%2BGnSH%2FFeL8CnxsDmf%2BM9hUV2VhKG0%2FQrMBD6BJ8cC60WUuVKrYrxXbYOp2JM0QgdgR6sg2O6APYs2FHK6%2BTHwfNlbq%2FQrSW7fLNFEHk%2F1gtPcD7tdLKNfcBAoK8P8%2F0yuWRcvOO5nW1imO4UIsLqfK7v0b9VBkl3dPKEF0A2WCl4VSphBbI5egTGi0%2B5OeHVuIel%2BdVSxbdV3BanDA4lR0oW5Hn91twGrCxFqoPeBxGlvQRDvxLW0lCEh%2FVb3eqgvBAcbt30mxXCe2W1Q0sbJjbCzLltS7nmUM36Igg6L1c8dqgWvE0xiJj0BGCfHrJWI3qHkAarpAFdXBV3mfL%2Fux4TaGDyk8KrZSHzTVSG%2F4f6WR9Cv6yMQzxp8Ua6ItmjyXEmJTcbOuxF0lsRDsTw4GcjcvoAV1AzljucG5UpPAZIO2MQYk04MwiQ2q9HhIcg5aV4hczXhJ8Ik2%2FpE7x0rB8ul9%2FAGz6dhoi0GYcWooHU0zuPmv59ob8Tk7wbd4A1DJGse4K%2BB4S6jCltNnJBjqkARtGmCQeibIRWlIKY5awr0P6FK5d7jsrH36TrQZrOKdjid3pgGnKAQuqlLU3oKb0NS89fFBoMEUNRXRlnXRnms4257YrR25i4PHs9bmWbAm0%2FNNV4EX9%2BKzzhq6mYV2RbwTg1j2jFTSfSJs9igFB6ZJK0Zx13WvSqxfnCN%2B6Noy%2F4%2F1znp%2FmNLxWMzNFXv5LYbQ33ZFLXo%2BBV10M3m2KxmabA4MO&X-Amz-Signature=422a1cdbbd64e0807bb8c2341b6588b751e7f3262f838053e18969e96559f0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267JWLRH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC6fM4kwKlRkZA50vzwOqEr6ox05QGtmABrKg6yRU06wIgXQT9RJ%2B8FKqajHYqEVX3svE4ie1qx00swP2MkQ6AUHYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKs0m%2B3MdpgCXAdJbircAwrgTCciklw%2Bn29%2BOd7W14YNAVCZ7%2FVqt2qnpPASRoOmwHuV4DUKwUrHoVaFxaVi%2FEdLewQsxH5JXP8u%2BH3rzDo2CyF9Puphh70bpyKS0ChgoRLNa1GjNQEyGfffXYnMhvfHjVuOwy40wm%2FVKPwL8BHI8gCjs2niT1AjtLNW1ep0tAiljsvsHPPU%2FtOzuX1jyAI9rK%2BQFPvZUMOHlp3prf7UcYkmRvf6KIRQfbNUupYXXCjEn0XuahtJFuSGBXwbUOG8daBCi5v8E64Ym8zvK8I0qNXZ0mFO4slTtLf2DtQl1gC3TWmxOzgaJn%2FTd2UVnu%2FUOKgc8E80lSHBJ4gIdOPyrP3K6vjC13JWDKVjp3QgkVy1nVxcK%2BzWCm7ufJ%2F315o9m3RrHHtOdwtkPWVCkP%2BztwnC9hSDHAYA9h3RwvdNpNpXy4gkxTS1IXBlIQ33GS82hWL7IbPpgQMLzl0zgPx6CjW75SMcolnCb01z1MNsBJkFodj%2Bf%2BOPz2FxJarjhJ2wKzx2vP%2BNhueYtotE9K7fPlkxAA9h3ukvS0LKXqnAWEnFNzyn2jZi%2Beq1g1Q%2BRHqJM5I7T92qj%2BE%2F2k0fOzSLxrbUqFYDdEjnXDHXGBG6uj1KhVOgNK%2BdIABZMJG02ckGOqUBj%2FLcbR9Y2fRytPBRxxvcCguX0BZb1DX60vbA2VrTdhgyun0dkTPhyg%2F50yQzEXOtzg%2FOlR7VrBxNjDGYKRGb3ZzBJHR3DRpW5PB%2FWIezMwLtzrIdxEVkNGaqTsW65bMmTVT7uZmITYkkyXaUOvdhTa5ihwC2nFK3zxRUicfFIETjeSwBIrJllFcvPcsSkUqOp3FkUkIIhjNMPx23ZCtURD4NKR4A&X-Amz-Signature=183ec335503cfbb7400cf4c381346c8ceb209897e04649ab818a6b8cb629de9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

