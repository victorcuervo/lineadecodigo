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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDSP5JTX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn7X1O%2FqemykdQ4NEJLdCtUrrLqOYplL7JpZymgw5N1gIgVvwLu19d5sFV9LBpWhgEgjwfWSf714fqLnS%2BnYWfWHcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIJk9P3vbsNTeRg3gyrcA7d7xR4dc1O5nWbtYG8jo22b%2BqdhRjnn%2FzWaGg0xc0gX5TLyujQ7qOFPbw81XM2Rbnd2XYzdtEgA9EI5bFnRcJKCw8G0HWk9qE%2FA0xWFJdn5gqcTWrOpk5vRdgnBa%2BU%2FW%2F%2FVED3AYpa358c4%2BvZAlr0PZzZVUhH8k7s%2FC4H64wfE8g6UHykg5MnFEI5GSjW0DwlPE69ZvVd58Q03Ip26TRxmSQ9ifWij0QMvttxXGDrJB1fbtwddUMro4LzdmCFI5%2F6tAwkrd6EVgeZwG6hHWtaX65PNS8pY5XR7CdVrq1Uxcxb5HDHSXwgkm4xi%2FezwMSt%2BjI2M2ADfevw8jKSpac6rsqAPnPGpaq%2FyTwSgITK1VRCM9vFI9D1D00P86Tmr1ZTlifbXPAcMoZv4yrOdhXEo9aenEpoyxGjH9F%2Fyo9CSwXCGu8TnPivXXdPqW1n0MEFpwbug8DEZg1F%2FDVqMhL7NEP2jEWmxOH8CS%2BcqeQl6FHL69t%2FvBvX8vDByZBLrgF5vPv7BJ7OjdZIT08J1OVwxMDJECDXjN%2F%2FaJwplYp9XriAM7xf%2FnwSYQswZwxmMd%2B5uAlTWDqP7YfQrINO3RBZixDQrf9tRax9kdww0gVEZ77k2i%2FU2kkQbcG5EMNm8z8kGOqUBNGviaUmlXrTpY8XMSXkdcxHhV6NaDIdmG9h44JByefsUHqYkCEW3rzNMHyy2DieimlNVf66qJ5YM83xpX0qNhS%2BLpn0n6ygHax5P%2FFdy8xYwjG%2Ff8CYkk4EM2hjWdSbRTcCR3zuha%2BFkojo%2BrAR5pYObHv3H%2F5Xs9RKgYcstocOX%2FacoU9G6eXL3PYHL8y%2B6G8j5oEw2T4wWGXZ%2B%2FuRlnkLUb4xr&X-Amz-Signature=d7def78823c94b0085a0c7a0a172d1ceaf03b9a517ffe4995b2d087febfe88fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIW4RN7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUW4qXBSoLDXaFj77Tp%2BU0Gt0JdaoFXWplMnyI6Ir3nQIgTqJKOS4FSHpbGgsULIJ%2Bv7gAQ%2FyGvZ%2BCu3u0DOBtmNcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFWRRwExfCQqrFiPVircA%2B93XXtdn%2FZH%2BxZ8%2F%2B4MiLtemAl1ippncYVE%2F4qVzB%2BLylqelf6EfOhq8cnUs42mW2hZUYPTqDtZY6rNd42CBxTXT2bDLZ2UTgNZn7ZQgSVw6tDZJ9JS7t7wV0c7e7NEYXO%2BI7PmgWrxO7U2XdY8Yp1sna%2BKTVT%2BYxcX4rBZ9zb7w0Ij0QN9pXjAQS3j2ZmHhMTlosIC84FRGx41KclT5T8deQySuXpPxididGY8%2F9M2UimCOifG2rD%2FvgB9xrm%2BE3fdSH6dO7jpei0lZtIDiTR7DPoFvaMh7QUQClVp0SKY75LMcE4snvX5vW81tO4h077SOlAxH2OkixjXwNE47ziTsa1KP467GPbMZV%2Bf4WbnNSWCBM7IlClVSb0YI8Y%2BPN0yvoh%2BpioEUsHi4E5ACsl5iwCioG0Jn7eJjKeZnEqksCenojXy02GHD8qEBG1JqSniK0cXJMhM2wYJ0czC9UxVBi5qGi3vfazooaqeGBO3hbOJX4jHOno7S%2BoQbGVwUTRvE5IZyFLox8hvIpvQxCu%2BEO2zgwUgjy%2FlcWl5O7IExX0%2FD59MTv8nhoLgf3QZk0rwD6zNjDqr2hFAAnJ0%2BvJ8ULMpGrCa4cu%2FOTUQrCMxQdeaOJstvk5IwLPzMJW8z8kGOqUBiHlPm%2BppZxtsQyb2oHfY55ilb5JSZ2atp4amI0V4vwP5cFyKj%2FAzbqRWIsXeZISA7JE2i0PJ56ooSYpn4MTrgKGTw%2BrL%2BeJlxestIqB7J3lMJinCx3JjwsTafO4qJBLtsl1XiqRs8oFznBaTfUB4PoOwqJziOxhskGaD7AaR3t55Aui%2BcjQyRQLFCi1ZnoAMc4EJJ8eR4Gg2h2mut8F2UA1oVrQo&X-Amz-Signature=d6ce495d67a4734ee59e107a7400b7975a1b4c2a0559be1713df53b6ef914b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

