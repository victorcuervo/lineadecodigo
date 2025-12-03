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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYE5Y6CA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDdgGsINgxf7zCfCLZuj9RSRTs74rqAc%2FytLDEenHOJQAiEA%2Bm20zjRIHjm0pZYp1%2F%2BilyCmH%2FXRt0WYjOQn9Ut5Wdkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDH%2FZrwxwgh9PAPUiDyrcAyZYj82YSUhQ4yKixAs74HqDqBYdDljiGdJFftOf%2B9ql0D7S9KS8bvB9j0gVlFkLaOJaY6NyGjPORibxH66%2BF6qj9bVnfwvYPMaCwefyLGWPwqipiKpkRsfIWk2EJh99NV3kdqzx5%2BSYozZWkBoOz%2FEJCe5m2O%2FLPjrLbi6nQpUzxpfsxliQnLCJ4tGFmjhw9wYC2NGDc5SzaRlvk%2BeauXVFhcLEuTiHUJ2XR0yVpbCXSJCSnfg1CWrJDokoplSGhY0Qz%2BqG%2BOK9Dct4sZCQ8XefljovodsOKwMHZKPygJxeDYyDuEdiyjzP2unc3JgOifF28yqymNRnUzbV%2BJ1RXDa7TZxu%2B9QLzLrs%2FcJCMXUH5EyoHjTjb4k%2F0h3MEJL68EPC4KN4CDpn0pDQ5Cde5wuN%2BDqFEWb58PxpUlyP4sMQMb8moItv4kJirhEl%2FJnrWENBZ91K%2BzMWbDPc3cvhK50k4KIsVdhj%2F2OWhSUvy1R0lgfewYR1Im%2FNItZVDWdG5MD4yuwlO432ZPIDzmxlbiaWxrqjUC4tLA6J4%2BJUmeKUinWx1GsVLMOQqT38dU6JUH8K7Tbm%2Bw5mtU%2F8ZM53k8Ng6G%2Ftz4BZTUlt78gGeQrVJStiaF%2F4soSimUQNMIbNwMkGOqUBmKvKPldzedIA0T%2FswS3ZsmY8UW2nROmd5Raa0fnVyzEqcAXxig%2BDMS2jG%2B4PAfsIbkYQm%2Fk3jL6lfHjiny%2FiUsKTPLMPZQXQ3v50roDdwXvYwvGHRGqxLMerMJt1uQ%2BIzfHtabg2WKxMpm5iKQzK3aIiwsaPWYLavfZYXNglGS66PrGClY511Xmh2emikxMcacc45mF9xr1rXwojtR33rWmvtec3&X-Amz-Signature=53361ec35657b30f568e30b6686e5d67f880bc8796568e0671fd1a06537b39d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD3SOABW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDHrgcEH0c2nrez93fBKi9R6DoGEfPJkUb6waW6CS4aegIhAJRQl9%2BR3oocFlbWAIbCxLkzdi131PTGG2w%2Bsx0a7HvrKv8DCC0QABoMNjM3NDIzMTgzODA1Igz0IUEXRMbJiU%2FeeToq3AMocB1%2FrZz6masbx1CmlfNvmPx4Kr%2F%2BzeSE5hrco01gYdbot8wAK%2Bl2twvUV81B89hb9NtzHL6HIP%2FxfK4IF%2FbiqvxWJ7PI%2FnoZ7htzbcfGjvmJEV6kxSTQXabF8EYdYvDRRmL31jQgDhf4lSNzfzZfRtdRuPyHgOh736gc%2F7VEZKz1n6P%2FNqHoTVyExn2Bv8xjbPpZviINr%2Bf9Ex0Y4q%2Bh7Q3mKdyfrHyEdW3TNdGjbBgr7ioUUJodU%2B3M1Bf%2BpB6i3DCmYIb7YX8%2FWtImzPK%2FPkqNuG7LMoVIFmNCZx%2FB1r%2Bcg1Nb6xtOdhM5n9tvoNXmXTAWnMYTw1oojHSEPXtbrgpPU1jOYCD7C6tP4MKc6PC4WQ4rDXHg2%2Bd8cSwLyjk9KFrgjKfKJVF3QTWD2QfJIxZtAMher9ZEbUF9MSHp2XDk9XRn45NCRYuUXVGZaZiwK8Y3JpTZ00V9sr0NLpemAHWTqOemtsHsYk3lt5uYvBl7%2FtOR2Sk5X7rB9hrCjT2f6Q2j1cBD2Dx6WTVx8QzIf9J2s3I1jV7yvn7B%2FfoAeedXhnTEco6bdXIke%2BH6KVD4Rwo5cZVy3kyzp%2BPk4Nkd3H%2FE7smyMo5jP5sAAcCDYCBe%2Bw3lR6k3QZusgzDszMDJBjqkAXKRyAegjvIW4YXlEhOdRSOqNrN%2BRVYIqb5X%2ByguNB5q75qiz4GqLzrfIqx7wVGmnWVN1YeRJfyzBb8SrjhAld%2FtDXNsypv3AMJodx9wM3G%2BPPA5Ebog%2FFSTmmMXvSq8z%2BqG0BmrQX3WgQJDcRyn9gu4EkKhb3FrpF3DiYed977VAfhPzj4f%2BrwZoH6Y%2FQIH3n31Ikm1MjRjfthV3QDoIfs1MyXp&X-Amz-Signature=d96f802b8c0da2d033add2e1bf45426d93c05f67aa0daea24181031f5ba319b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

