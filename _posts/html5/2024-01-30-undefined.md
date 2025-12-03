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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIMLRLEX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFFu4ocQJJY4kB4hW4JUK%2Fb7cO9nL7zpV0sqfQWxH0%2BOAiB%2BIZ35H1XUh36ahWgaNCLCj5c9PrhzODzpYKduD5iQoSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMjODKbqkGOdJsHkhYKtwDeheG0BkGcu%2FLgkZDbMydGx06FGc5px5geUpz3SCo48xuPjG7SM6CEBCInFqRzEVO2xULOV1iiO9pPOoZVLfQgTjcz7vEXbyFi%2BFt68vx2y3Qyxl7GGdeCQJqSbGhhUXbOZIuPcZE3jaZckGE3%2FAEo7EYv63gI%2F6xdWfXWBA0cZ6ChY59p45DVkI7sPxxXwb%2F%2FZMwjbUesQnV8%2FokXJk61qzxTSs3EjgpgqK5ZgBUsPLGOAfLs3%2FfboNcZSHc4tXtqk1Xr2%2B1%2BNW6RIWT6DFQb5QGiPZsqZFsrAOoUrmA%2FwfEbo0OfJEoi2XGRAS48nADXl3b%2FYInXGf%2BmU%2B6iNxEl5hmH3m5phpVREcf8QQWZ%2BroF7FdxUyA3OVqv7HD%2BQBKU9et%2Fv2u8GZMt6PJIBDXo4RZL5lgS%2FWCuKqiVuunLTxFprAhZBxoBQ0ZJt%2FLmuidwyMYyLrKfvV5lJrx5cBaSq%2BDtLejt0m8upaLeaPlRgVv27Y37P%2FVwtORb3qgAtyGtVkK3web0Q5tENYq7Wq4ER9s5t8QRFVv9%2FjgpdNkym2RgkRTogbz9MPhC%2BZhQz7thu3CZhSPClfgn03UezASSuOigHbdoMsABJZ92p7Ce4k%2Fte8C93dHZOhp4FAw%2F4bByQY6pgGBcfZNO7hQ%2BFpS6fyLNfXv%2FAvmDaljpcsyTpFiANYiPGkEuv%2B%2Bi4BRy6z%2FUgPLbuOkjTyng%2FYvySIyZsHNqSHOIDVpg4%2FfvTcFH4IgnSyw%2B3MX4vWJJoOeCgMEaIvNmsewzryocGRmA3uhYE3KZS%2FOMhgTGGXJUaUkCAGvf1FXilJvot7hqp%2B38I78xsu0m0T7UrLroZygQflA47v8mpVozvWubqvV&X-Amz-Signature=21cd8202882c22f6826c7a13565415e7a3bdf50a715a66af4aabb289de1019fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKFOEFGK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCZu06eeZNQPJGQsSiRZ5C5ckj%2Fi3FAFfpT7a0h4RKvDAIgbLCzUkPCMDlDyclmqTiG0SXYa%2FYkoAkm95RmffjJrVkq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDBUtJDV5%2BIxnqdfHVSrcA%2BAVJlq%2BhLMxgfsCW%2FaWULPsbs%2FudBFlXYiwoCShirCTZ0VNk56%2BuaJD1Rye8wnCTopvmAu%2BWuFdyFi0bRmMXHrw4xpAfjhtFtPF5qz%2FHC55ufJ7fZYGsOANOnh%2BgPKcaxUeZxpmXSVWx3FDRtKMfIpDt5iSe0geBBQkYBoq4qEPNluDYv5Q0CgcAroVFqq4mp%2F3ZisxMPGoYM96HmRXgci1N14J5b478C8KqGWJtpWgtPjv4ICs0K4jcYFX4V9MtslTkJk6DJm3J1A7I3dVhbTVuFQR2yeYIAfLpsGn2QmRyPF3f8CAHs9cKJlJnA%2BmdiNNkdZTOBpCQr1Z73rtTRpD%2FE3rq6i3H7fHpjMVrkJ%2FIw2sSR8r8YSFJUAWNHipw2F%2FS2yROWMGi7WrxlUi%2BHqy3FLizcvBRAGhiZQRsRVCU4tTle9kM6cdQEAznZU4xmxRV9mRexHAbVtnuGNjp4xaFSbKYzeWMJvrMv9PMDFTDWdjCoHzqMAAwk1mb3gimA8k7E1IHwLuoyG8p%2FtcB6tHUJWoOXCjABCeEFltA2vk4z04NcA8cHDYOXFiVTE2EL2IOz%2F7%2FHt7c%2B5y%2FHK9CCgqlvzcYU2zw87iSGxzkB7oQm15AHHNy1MlGTyLMJmIwckGOqUB8Knku%2BLz2lOTjbpmtB37%2BH7Pq2G4k%2FheCqtZI3p84RK7FhdLUsvXL2W2HNNlMLtiOYkxTYjvB3MD7QrIZiLWJdGzk5hVt%2Bkmh%2BY8OzH47Ot1wUOULaFn7sB%2BRj8p%2Ff%2Bm4UfAnFPDNMkv9AzPkc0Nq7PMDZKiRo88VL63xYDhaZxO2x1qkbzpISMvUyzh7bpn0%2FhDkiFYe5Lh%2BrUsw0JMgS83VqNM&X-Amz-Signature=43f2e751f63aa22ec732c95c3f0003c2453d3d3c8f5e73ba7dde451db962dae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

