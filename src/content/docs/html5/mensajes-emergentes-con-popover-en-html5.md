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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOGCKIGA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BjBidCM1o%2BzIhk%2FPHFqIn3jWQ%2BUQ4BRAaC0Ye1ZmkwAiEA%2B4bULJsosiGDd2hI2GPY0A%2FbUE%2FJSD%2BWYjl%2F%2FYBl5acqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL7wPGbjaUgbK7Y6ircA2QDwhgyCe1FFjQQww0E58zOGXu%2FkXX%2BQnZ9Q6jFNXe5fepoYArNP3cSiKFTwatENw4LGhCxbPdQXhhlfre1K0UsAsLY01wSYdJNEa8W8zYVq7WDrBvG7HfrZw44jMqyFWDxz07SlfN2KozQJx27EVT%2FJUEjK%2FkII2AQlZG9VN5R%2FXYWGE3dgM5t%2FHUUxEKMIlq34B75ND5bTt%2FVgTSBHTFQo2%2FC2L9JwU%2BnOaLkSk0JW%2F5iQK4KVg8NPZzjGPeok6vwWfxiz54X6L6Vv1USvIKZqqL55LKhGlMVZrYK8SEmqQzZTOAgXpJEpfrfRV9DPPmx%2B8fRYTOb4eVcEthv%2BqaU3n7MmRFkguQqxgGWD9BA%2BZN%2FtNG%2F9mBgqsPnOqlGOPfy1qt0PNX%2FK3b9g8vgxZvkU%2BkDhvDsj068j31Hs0W2Xp6RD9McNZM56UFLT%2FZ7re1X3gzBrZnCddS9jObC6kEtFUn5GJxlp7PqXTnrzUmmeR8ndSucV0i0wtZqbxQpLHhzaXmJJtVcfZ0VOckVAfgU%2F1Yyjcf9O5W0wv%2Feg3nBey1PHZsZ3t%2F7YOmr1nrt%2F9%2FVBpeHULgZLyuLLso%2B4FjbMB%2FK9W3KMUX4seizDRMWhtfuWgMSv%2BhE9HxjMNz90skGOqUBEv6zEbec08fUVPNn8gFo8Pe8Qx6g54KvxrWcMl6uGbEhP84jf%2FvhVHznpww7%2FoIV79aHU0991ejzO7EDjFV3UwNtmxX%2FCwcWP%2F349Rr2wbgnaaUDR9prNoRFy3VuAsvgDg4nq6me7%2Bbywdoq7XAQdsqzE4w965OlNGFw25EFWJi2QI9YxZbdZZhX%2FgLYTBKWSsH%2Bh74bmux5eb3qGukJ1ovGslly&X-Amz-Signature=bb6b2842d2d77fad300d7d89dcd5b13f65fce199f0dae3961fec4bbf5c73a182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3QFV2IE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDv6vCTmEXJFV8IuPdHle%2B7EtPPP7uL7ZQCypATYXXpSAiA7b%2BiPEMyxFzHpLrhK5kezG9hLZWLgvg6t08VO6TvuDSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fs8fJ2o0gpn8SCrGKtwDfPX%2Bqx7uNAQtSiNTgLEYFkosvuAi9S3rBAxa8CsQcfRmy48CUfgTlkJyCTHZqfd%2BMNAHO4E%2FsJEfSzYGrK2T0XoC5ds0m2Bkw1TR3qa9SzATQfy2yVVa8xgKA4GYGSaLUfaMXc%2Bn21f4ii7vV7ol%2FuA%2Fn3DuiTsmohETD581ZGNjzncBhS2C%2B8aIoqO7WVgCRM2e77r5uKwBN0DndbCElNyKt43B82p%2Fd928U04zP%2BoQAwI3zemkV%2BsW8uGV4avNTtGjGShJoa%2BVOU%2FNQQ5%2FkOM2JWlPQ9A1b6dDyXfdiV%2F2qR3sXPcxLaYV0T3vIdTnZnMiK4xxqQuD7aJzo0Q7KBdYhZG%2Fj%2FG3hKEXqBUZ1zwh7%2BihibIYfnmmoBX5Abf9UF77e2MvpqcGCdidbmrFcVtoiDo5NtMfC1l00i5sLwIkmBG4DoiXAsgDspT8ez7DS0Qh7GeQdJNSsyJh57mEbWBcov7pdBdBgcCjWJR2GozGUfTXdMTP%2Ft18c4HcO9VEqgu26iz0rB0SqV1PSGrqRMG0TOaE1%2BaMxRdbP8ZyYHxYBDTVc64CgO%2FN5uUk8FuMvFtbRffmRcSypAIRyhrDo2ACskE56CTDyhVLebjHokbUwvO8tjHuf%2BbGBMYw2P3SyQY6pgGd7uDmlII2sMXY5kvV%2BPDc1sFIAdNWNjgrQCDyCGpO%2FfEjx6vKF92avIWJod%2F%2BMcIMzl5cohvW5GSuhgJSxyw1lYwX%2BfSL9%2FBkgertdxTJX04n2oLPljyoY91GizO7Hh4F1UPX5%2BBycvYBivXMzdIvMkRn%2B4vm8O%2BzFWPvrluL9lzs7vrWSL14O5xD11iFG37HKIDgrFOXuEL%2BwIo8Kt2lUhH3GCph&X-Amz-Signature=d8f6bf62009f063dd7ca974ad398ae63bfba5dffc4d3e60eecd0da386365b212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

