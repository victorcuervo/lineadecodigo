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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GMCU4GV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUXRCT5eKFiV%2F%2B7x56pCc1D9yJzKKlbr%2BDs4s7ZYW1PAiBLp9bsMT5GH6Z18lRgoc%2FN2O5ZK3y8qyJC7HQFxvR7WSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMBZrolGS9%2FeeLYp6%2BKtwDWzaxUB%2Bf4m1ziERshI%2ByqWct7L%2FGnfEdVvwFIF6oGMG0vaEOJBwnQYzKYuaxAuorg0%2FqVm7EmOjmbgMIna4Gh92KxfjOcBT%2B36zs%2FF67%2FxG61K9yD4tG1c%2BjO%2FJAETXr9bhp2a2MaDm%2FApWzYFIWzN5Y%2BbqUXJVHEuskQwnH2%2Foj1Drl9ApWYePTFFdCIZJkPDk%2FVJhFbZHsMhSRRBjXH7L102dKb%2BG50OcNmQMIcbuLYtHythtZa8iYucgG3yJDJExkkF%2BtslRRnVyjTAXlrFVqYvJqVUBbJGd90a72Qk%2BctcIs7Ul%2BA6EPE8rzl9%2FG55QuZGpJbL9jhdC%2B9jEAFFAeJrIj%2FSPn%2BFFsfiDMWlALPBetEjnZ9yExqQfZVWy9%2BDCdDlQvUVV2mbEoRFQzolujDK9VA57P1Fe7JxWJnnIBbhFytMrZ5J1514WevRZB4fBu5GIK5g8Hb1zrXCeQtLUOM4jLhbFsll6agiIl3H4bsl0ISEEQGvgksUvQdLOqfCkG1JWmBUxZ2iSkecLvNGc2WgWzuboQxht5YCO4pxHDYeEz7ugyAZ9gmmTUb0BzJ3xa42oxi3mtKZ5KFJfQ4b3HR%2BvVYwFn0nMr8kXdxuVyjM3TJ7T%2Fk1UW1WgwlMbRyQY6pgHdnzsyREzYJ%2BuYOF9WnEgRhAMwWDDM0wkEJkKmpUKloIfuQ4jakY7QT%2Ft9n61onHsRdb2O7E4hML6BEyhgY3Ei07rZ922J97NiwbzQp%2FJ54%2BU7cKVkii%2FNwciA8rEHI6jyqEewrAkf9HTVAN47j5OLx7%2BNn5l%2F0w0lGpWK%2FhvpW9LjxOXzPHZh130EiSsAIatX1EhC6DJlS0Rj5Gpmb7qi1r8yr1bw&X-Amz-Signature=cebf309cb14d189adde1faecaf56627aeb195a420d9eade91ff5d9c7f9248289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5SNLCNM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCXu7lxoyiS4tInUgFS0XO0PQoxJVzbyCa6%2FvW5VUe6AiEAxUuF0MoBHIZgeMZPEMyrG2CYsnZs9Pe7yVfipgQRD8Qq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIKOZayCVjB%2FOo9TRCrcA01jANkj76vxr68LdoEIgxbIzFbN7yOxI08npHZsjma9OQOpf3WDS03WFXsHRRZYZNHDZNcfViJcaPLM7BPgYqtpRZcyLGgPU7DfW8e9AG%2FUgLKlVHjSTo3WAOpDnGgpeVGh%2FcK6czEx862UaqRUdfFxftlFlCktwnu8hQNu0V9pRXBelxIU0GP544VrpMfhlriO%2FoA5bj0iRK6%2BwuvAwfXjN57JXa7SmE2pavn2kLH%2BL35P6A8W8U9RnpoMqUKl1DsX%2FrIBZYH%2BLeKQB5LQa%2Bs2cRroim7fi1BOUZ5mXh%2Fc%2F7hU4yZjTs2u5Pdzv%2Bwp1uDyq452T%2BJuJru4Q4fw1fgVXOaXZ6mOzGmlr63m77GAwC4svLqSlrLVZdqzgZkDiH%2F%2BAWdABWSlkMQwim2EgkCLjJjNIE7IM6g%2FF%2BjpGnYxsQPRETV7%2BCntulJrzLF%2F4KnN41nsEcpcbDW8N40IIl%2B%2FUaV7yOG%2B3%2FBho0FQu4rRzbcIm3pjVTJ4H1SZK0bzsHGywWXsV3dHBt8JpxwaRgwWu4lT12kdxdw%2BToxHORPOgdc%2Ba8AOGqI8syaqYnj9Hy1qDBBNGDCyEE873WOAerAAC9T7NA3jONsT0dgvIMRhhdoQj6tRR7jj04AQMNHL0ckGOqUBTogGrIYeIHiIYzmJ5SzOoRYxsakEpTglpbyuwZrek0gzjDtqUyRGY92gghlnk9YEWkkrawIIfGbLbsKo%2FxXJJ2JUsqPgKpUU2oyFUHEcHvxM8FyTVCfIjeWyEJiFjvTraJE%2FQYn0V0HwlNMnUL7AjvnCKwrU7Gzkjrva67xMmobCrkUzmSPV9ku78tQJAx1rCPhX4Ood5bTOBdIr76J4U64K80vl&X-Amz-Signature=531efd715f3df68fe7f89d3c56433853196a31fee86b1c9b6d06d88eb03de516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

