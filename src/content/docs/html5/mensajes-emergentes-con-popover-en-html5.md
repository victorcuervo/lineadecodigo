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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX7HR6WS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCJETDavx4CsC8fjc2akC%2B8K%2BzM%2FjgMD%2FRJpaAqib5fBQIgJcyTP1HrnTGP%2F20QxoAkP9cYZs24SFUoNUg36J7a7MYq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDJmgyW7QXEX%2BYi3riyrcA1c71ocUkNMGH61BGNqPB9ydMBbN7FxUf7rRHYveZsgqkm0vtM9xZNeg7X3FwwytEfo0guOdKhV0BLARLlbvHKsZi%2BRGDX2sP2EwwuKUXG0OtVmPJaFmkOrkOlbmy4Qr0lu6m343v%2Fv1%2B12%2BlM8S63ppgdejqEIn06edpxD4%2BqY%2Fg3a96k2Ntm9DpQxgoMbltnwHYQF%2FNX9%2BTXQsYmLsW%2FjiReXh8YZjiwbltSP0OmHc9TDQv42E5B5pXovWpylOfOyVZ7ZIBQk1nav5gimf3wplsOOOQlCHYgGZNh%2FxZ8iqoGS6YqTayVJA3PDoOKFjtjLnz1oS5x9lmH4KO9%2FjrMblNsygFV2v2iTAHDbm%2BtVMl5vD%2BFeddSnmYcdwUcdfpKxTbicYdaaDgY4r%2B1Tr3I9Qx6hXB071voa3Nfeg%2BARxNSVl2kwkQSzz%2FSoI5mXkcbi71Z%2BuWkl5vkZoq9kADyhOt5Fqx4KeG5d8ReqMneNTjHPh9eEGHPIxjcxS0Dy4bqSDGXcXGE2TABGBZxh%2BWDr30bHV%2BskbmhvIi4okOluqzq1fHm0vBrtEWXkeXTUYEhcjHDPGslfcOfAo7ZMuJuf3IFP5D9qV0DEX1fkO5Nw0GX3Nm%2F98Ig1OwaadMLy0w8kGOqUB1AAIpGyZr0UOoEgZMnp35Csv5VAmT8oaK5ZEblNLWFcZTYdZ68U5JWdr6jlSgA5SD0NxJMn9ElmKa94fpqN82XeNQJn9VxBxW7FaNcuc0H%2FvJwKmqwB6uI1wHHd6m6WQiFAAc3FnlepjWoRE90RqenlWvzMAdgAgcGHoLlhLYj95p1XYHpDE275GV9A2iIPIVySp7JGOtnNiJhril1UGTBFMaLnl&X-Amz-Signature=ee55ecbe0e020e15066166f976ca9940809d5795edf73e0c73568b7d77d718ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7QTR6UG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIC7TQnYX7osUvm7GNttNZkngU%2Fn5yGthnV%2B1h8whNSXcAiAW%2FRkEwRtPQTBJnj%2FGvolz%2BAyKNxCbeEYjKR6yFVMnlir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMIicZmhFyupXohKpsKtwDyotJMbbBovIEpruTA6jM5zNiuHVeUARVm19%2BexD5hOUrhppCCUJ78YnAxK3dGbnm79uPTF59ZT%2BlBgd25I8aIPMe8MoUg6OZTlFdoW5kCSMJ8EnA2vDqP8mLeb%2BacyHGcRahnzgeVj2bkpXxu1hTeWwu76r%2BqROeJLhemWeQ3gZ8LvrfYh34I9v6JfIb%2FEzR0XPRjVLGladsBjIg2z%2B0uzkMYXOuUU8SqFGulMqFTgBye79YlOo5UFMY%2FCf79bfV9V8KKZsusbvwa109iZB9PIUeXiU8qjgbsWwZsc6XzhF8xgyx9y4Vrp%2Btsf1QqWjLlUpMchK1M0jX%2BK0phx0%2F%2Fl3MHd9seSOdMD9J65HRCbDI9%2BOqUvO8e1qiu7Rncc241EPUu%2B4hxsX%2F6wQUPoZF3G1j9%2BoioBYEcerbNp1yDGXoApV6Xut%2BmZjFrAawrBXflu45T4saEUM3bAHscHaZqyCyP3gmYqKghPOsiuwcswda9BeSaSYU0rSXOdAxk%2BEaJ3KB%2FPp%2FNEcwACRp3emtvfbM13be0HbOMo%2BVQA3SEwkbYvcAeiKGccKtG7qzu%2FZNdKDZZhg5jGGjLaIopjxPVOCgGqQ49QDCgC9vSW1WmkIySSmh5xKp7WBh0iMw9bTDyQY6pgECo6QOEIc8YpPodx2tgDPtuM9efGBHmad8YXdPDtXeTG26vXwJvp9yOTZIWRlkvCrrgiJ6udkmsMVejBp7kKZv8yMQj691jds2fiaVNx6jupEVYNDhZaELXAoahM%2BqC5NmHDpBD461lySvahrumv6YOtsL5Y60FKjQlJAk%2BNpUj6vuC8uQWTCAQlzY0gcE%2FSGlUycBncrVbI7rLfPzvaeCUJYKwjtG&X-Amz-Signature=113a812746b75a13a853cf086ccb6667e3289ff8b6e1f53c4e3f508ff2ddeff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

