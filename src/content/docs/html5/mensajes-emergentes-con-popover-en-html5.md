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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PPVITFW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWpTp9EEHrq%2BMaltGcaLkaP2z4%2B7ahdE86OAjGr0ft7AIgQacfphsqA6AKKr0gy08JYnga1r6VvJq7VZkdNBzH8CIq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGP3klB1El9oyoUdESrcAx5fUWoMPzUxncqMO5ZHS2Lpz%2BpZ4ccUiLZ1frnHPsL50ugZ7Nec05KE0nlVIqPdyZ6laauGehk8Jl3NXpPmNof1kXyPS%2BZaanubCPBNJIRjswIJFwlsx1StaCe3jonK1WKichEE0aRUNb%2BI8HOYVWvO3VoTGu87%2BzyYTIOVR77m9h1KdQobqX1sxAkkm%2BbOVmZwtrn%2BvlgZ9vlaqsii6bLx9HGfunj8oe2MX0W%2B2eCM2Hz4ZQQUDECnTArDRMshLrOmqU8FvdDaQReAYr2gtI2Ot3G3mb%2B4SDHy2Idk4uTZCB8nQ2KhgSdLC4BGm7%2FEe5a8nEg1kRg2LnGo9%2FXtbgaFd77XGIE4eqWr73yG1WVfAdOTGityXhFmLJMleYq%2FpmWib3lVA1QEPZ7XPQv%2FlRlOzsyibU94J9OUMYasyEXqQsZr8rGNnGc9AU0ff%2B6faSDvTA6uYZBand%2BAjMlau087vnAyuqQCwuvIyIW7IIchI1f5ARtytkJqeESpKbR9ND3%2FZLAon9Omf6iHSxVJSYVqohDl6yMSjAtpKKYNuMHw%2FNGw2IyeoGoVgyQvqcUuV1QF%2FKf28lmpBZFQs7Dd5XcU%2Fv7V2LH3FNyqmlXb6UIrO8yspiNXdu65FFCWMO2J0MkGOqUBQVm08Ffp8fw1BEejyRHmAnPVDnfuA0Gudv0ulGro75aRK1IxzWrRaorNtC5KAlUKKQP6udsQ%2B7DAxZimPRDGVNJBWgsBA2DmQ1ASRzDDsdD1qx%2BJQZaNOY5jg5pXg7SNGDsJ6VOnP2mgU%2FIZ3BBCLqzsLBPJ388y4Wob5xob49j43v%2F%2BFEp9Yd67wieMHbR7VwSwAXaB2YidCOclMyGVYSGoZolp&X-Amz-Signature=2f94fa6a00a289a871bb3a8d579b2190d57a69b6fb3d49b4d834d2b4a3a4e9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFWPWGGL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHwAU0yRXqAasHL1rMH2FF0A2oKP7zQ5%2BNe7%2F%2B3Fb3MAiEAwHM3zYf5NJCJVwwdFoQALNO7ViZ2dSvc8O2nzog23%2BMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGMnubVzUdSsfc9kwCrcA0KQg%2BGRb0wE10tCC973UuJj8dbb1fUJVk1OxTA7QxwdaMwHb5buo%2B%2BKFNhJtVUoS31qzQj8G%2Fbk9nXCgE4vX6gt3DC9E2O7mMyu2VOQdleVVeTrUUkd7gE0tVfNQTxIrNOgI%2F%2BJrb6OOR50CTX%2FoFffp9%2Bpypmi%2Br77FzxTJRn5eDPL2hPH%2BL%2F%2FDq%2FaIRQd9%2FadpBPwYBYl%2Fby9zAETRHVhYmB6PRKiqiNcbTuzGWBOsmLalL34e40gsRKukuTtL5P%2F76soaNZpamr9kQcg%2FDZBM96bylMeMHImCzg2zXbGCLZdMWGoL%2B3sl7juW6fZ%2FykayLFLnFgP0P3%2F2RNbjuePyKEUwYJIJHdguYH20MjLl3haLeki43T0ylU%2FHOgII7%2Fy%2BfefSLq3RyaqpSvDCnbnFIkI%2BfjykzVpQV0FSoIaKnqjbLNNSrD26dppp9TDs0bJhbpYQGGF4dP%2Bcc2yAKqJOLKMyGJXwMIDQREy%2F5TUAe82k9xwi3ooKh1FuM7E10N9eLh%2FDwVvCGI%2Bwufy3y7aA8svlAy4MScNi%2BvLYmp3Jc2PZcTvheKgjllZ6Xuxgj1PXMT1kbtat5VjKznL7T6zttOrnyXJf8i4vUn%2BrcMfq1y2pmevDGto%2BkriMIGK0MkGOqUBLa72BohPRzUF8jIlbGa2rWI%2FjpyXS0UKwUC2WO3RIJ%2Fq5qnxDl%2FdHh2vuqU%2BdWsriCiY6y6GUHTFg0ZMfNBwM6OiQPhTf8sYY92OQ5c5zBgffUmW3RzY8slrUkg4LNz1XLGGBIR2jxUj3ykn4ZxsViw%2BkTAbWnqyBJPWUN3AtrkSRqpfzN%2F87LEkI9QyhZQ2REvQ29J5dGJeWBskl1gbXNvepOh1&X-Amz-Signature=6382f51d47c5d0bb6937c92ad00f0e401a6553b831aeffc8e94f1a0fe58a5055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

