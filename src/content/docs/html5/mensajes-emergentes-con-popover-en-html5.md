---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK324POE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC09gpnTkxshPluy%2B6Pj8sQZ%2F%2BOqCxcZqM0UvQuyfE%2BqQIgHcbWCArN0L60R%2FXIu%2FmDMT%2B%2BMTW3vCZtRIiklqPBr7gq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLr7CwNt9pJoSYd0GyrcA9z5FrZhUMV4ewITPcmXQFeijTmjShzDrwsJ6wuM79EifIcwkYgUzrDk6mIvC7L91M0V24%2FlCKSgJsFiByAYEWUGlwDxI9d%2FRv8hene0lcJ5onIX%2BLvSHn2lfbYEIdHlDTLKTz1XIRa0s8jX0yrcJ3hKcIfJwr6YYvWWwy%2Bdws3j4CjmVAH%2FkpQ3aKQGVWb6dl9sAnljvbf5DbEeNb0Ds2T%2B%2B4QKiEaQZcQc7p5HNudrekZGGqirsCtPDEjr6yD3cTxhElBpi5TVUtcMllQT2M2A2VQxrS4S%2Bbr2FEWkMUH6z%2B4YSjcrqUDgWgZ4WcMU39KR4ZmNHANkT8lT2squKSi4KMHjvMnmamnQ6570Tgj8YjJxnqGQNj47BwGRmsR4VupIfwPW5hMewPlHNvrf9iyk%2By12Xx78FUPwdvnvSLl99QYhA4jLm8TySPf80e50ch6SpO4t2s6zlimWNVSyV%2BQVOAbHoQPy8qUO885yX4NV1zetbx6mNb1KZt%2BXX58zMptXPQK4BVu98%2B3bs6b7Ihi8rtiaVB848tC9J5AT3WoMvlgPIZemm%2F3MofMiHw9pKswgozJImu2w%2BlYZ2YJUWh77fU5PRBrFBAYFTyE%2FdkJzu5N3yrPxeofm3DsCMJDcwskGOqUB%2FuLBGZARaaJeQQueKrYqXlCwV8nO%2FROo7HJqGiWg%2BNbPhw%2BJNgMDH%2FvDY2bucFvyRXg7S9Xs2dlmugqYdYYCdKxIt9R4QoGU3QS6ZPlNYJPFD4qaNLNLhYuc9rmFpIi3dhUK2PvLYo02ON5XMbwFwYxf2a%2Fr6NkThQn%2Boqu7lduD4psOTwctJp92VxII%2BPb9ooDYA6b5OUIQACufFtar%2Fm4fwir2&X-Amz-Signature=a5cb75f9382d349b9e714a238730d529db83de5760b72760a7557e4be71293a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUBTWKN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCGsHHDzR7WhgcYeW2h9yCqzpxlk9afEv%2B%2FBzAWQ3%2BArwIgYmkPQicwW6p1iCKx0RpsgSQR35Q1lEcbc37WBNfZJsoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPw9xlmjtjop4TT9USrcAz%2FlgD36dFwSWEmgDe7pnx9YZ7YgMtXzVOysmh4wtqVUUQl2uN3rFAdoRvE5DkC3raho9sVnERZwkI0zBerCDJFdIXlETbPCtRAVDEKuCRCjL2hERHygpMouDNUmM44AmHhV04jgRCCuLuNIymuC8P8%2FafAQSDMfSORpn%2BRjgsBq%2FjKin75ifrCzNaddTJM%2BJ33LQ0ZByL6Nom5JrF8R4uZNP%2FwwCp9hWFkPPinLlsdJRTUoQZB5TwSYGTRMUREQmvLT15n26701sZ1JKRiMwrrQAlUnH1jumEvWpDbFG7xcLkbZOi41XMLvJQInAFBM3uQomtBHoFNzJM5KDDDX%2BovRlnZawAf%2BjD06XXe7Ep5mDHwfDqFAF1w44k6s5YsrJecKsCYUuMSSZmlsFReHQVu1unryc8YjbCGG35x1pW3zCCKvqx6tZrEmTWhE%2FUIHEhFGUwzoCe6HBqh1wxwmFFjRnrPZ9F1DAptRAQGwKhHaHPKSx9s%2FPczykZfc1iRbXrbOgWNTUEX%2F5ZaAUV0LtjxP80NndGYz7vPBqVWJbFfFyc%2FIuqu8FfbgAdgjdAz265amJdtTtD%2FCtPHf%2Bq1c3MGBTvwmxaE8QkZi2J%2FHrfJ%2BOCKYxdTU5CcxDvC9MPTcwskGOqUBIfwJYURgb635XX3QeFGuOE%2FbHFA%2FYMMvFVAXsp81MscobQFHk%2BbDMYlnoM0KBIq5e7cDKZYxKbJFTlg48GhlnH6F%2Fenjr2Tt4ElRmFpCMEWoZz6W4ij2Ye%2BkTnpsBwTsbeaE1EI7Rg6O5Hfs6Wi0AVZv3RtxCk5AdEkUA1djag9Tfcz5iISlQyCRdkWShq6AOUAXkZXzzdtlHle3cL3f57Loroey&X-Amz-Signature=f800b73b4eb26b52ddd75e0b3e7e66dda68b784e797c45a7de5c16a313f8de52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

