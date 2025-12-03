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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KK7OWZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDNnIdkrsTVCQQPkYxt66HRe829rWluO%2BQ6rEsqg6Sq0AiEA25z42EtWpwMkqhpCBb9AOAjn3AGlzjHizX%2BGvSfiktwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCytDNl%2B1m%2BoMiJoUCrcA00DtkbGeUIuj%2FZCjWiej%2FOXOawSWwWe%2B3FeyLL0GX4gcHR4MvtEPHFY8NKsQ1iqfSfb6zywmmBeeO4tcsWW%2BF9QVFNaOOlZJRyLQO08OufTCLh7Kw6ZGbdKBt2lTlncypNBcmdm%2BRCKlgYjCuHLGf5HMGkHS4%2Binas2KtKwX4aYrL%2BMrgGz6r5UYbRyT7N02fpbzbiG600%2BfzA7Mb%2Bic32GpvMb%2FsUo8uVvy4FfMSm5raFDPSgL9HdutVL%2FYm36kBC6zbyDkZgJ3v5vczsxY6v46k7zItR1jaY11r9hREQFbltsHUukC%2BSsy8ezPqzlBbiMMRBaNrGy7VjGoGlOi7Xew%2FyUVRPDLNFX5JAywGhYNQtrhrQV9%2FxV4B%2Fzj9oXIY%2FkZt4ALjMuBqUXMyr7ukVIXXF5gf7Bcb61eYs%2Buiq0Voh0F6ssj3Y%2F%2B4L%2BY3%2Bd7WctkadmguNZgB7sc8Llqlnpxds%2BBtSyqyfZSYUUJax%2Ba0xrEtUMhbAA8Jk9kWc%2BTcBAbd%2FMqX%2BeZygO9yk4U33EDjrPuHV%2F38vCWM9yX4Mbu14A9pqitRS3%2FS7oxued1VIzqxrxs5McxXvKTTeXEXcF%2B31u6mbSkL9LwK%2FAsNN2nzvBowFKHw9zIdtSMOqRwskGOqUBD%2FAKrZdQfanFztdyq3kgfaKkt2yaB17ENTcva7c0RAA8DaVbEnbbFmy%2Bs%2BSNh3iKdKeXLzKj36HsBvbtu%2FEZoOc94gJXbTXXntsIKsW0aQc11bCtUtI2GfphjILyYIKyD84PQyMTE2UeuxxO%2BRo7VBhngfc1WiPrYZEyeLKAQ37b%2F9QCGZQ3ZyZEgAWWqJv%2BMsSToZmFPwaGYo5llO6fVFi3Vv02&X-Amz-Signature=e9eca4c4449406b4fbaf45bd05bacb790abcec30337b47f58130f5946b21208e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCRWI5AS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDQrZIR3b%2FGOPcPhNB0kJQiw2p1YVLcqTkR%2B%2BW%2BIBsT3gIhAKWHDqzmg6iloUbNJHTWw1uBlO7ARxm%2Bku2MXkfGp1HnKv8DCDQQABoMNjM3NDIzMTgzODA1IgyNJCIvGVdrWC0hz2Eq3AMVUTt2EDiMyDFpQswPkhB%2FxzDYXC0gG9%2BWJaHhl06OSdWH5x%2FTAHyBT6eSq5s4hMXD8DlFiLtS16oe9DIk%2FU7%2Br5NM6kSisQk%2Beb33oe1ueWx6ezRAcabohouSACT%2FF1MHmdg%2FDFYQTe1lcNl17lV7UknJWzOEvekXw6f8zFTrnxPpuEhw0D59L8KEfMDnt%2ByPrhJ7JGIRjXrQoGnYiAGKiLwEEfq%2BcoBFEr95rVLhbxj7Sj9VRD5%2B1cesox4vAfLrJbPWIR6EWfsVwM6ZmSgl0DDT6du5VvoX%2BtWd1FzmwATU6r8Ytiozoy71ucHU3JoUPsS7i%2FJtmkX9qDhqGTp9cPaOgTqUyEQBjyA%2FOJv8nfWBMQSx%2FBifKQeVjoIVlS2THF2AFQCPCVd0062MYC20x3sYUPl4x2Ng%2FEO%2B80B%2BHlhXz9orJre1ne7viXtRJ47kGhZSBF9x1kacqAZEF1DaHpmPd8DeBnozjGbQFKfIzsKkRujXna%2B8gXtkBfrD7pSWFQBRSM40ag6slcW7ekMQDxKbsOD%2B32%2BzcxDLSWjI%2BKH0i3PfIA222YjZfx%2BfyKET6onmXnoq8IzzwHXW1oo%2Bkwg%2BoPdF7x%2FjMO4pmGymLulqmVyevoWNxRue2jD0kcLJBjqkAWHFPlNZsWTWZoEXqN8Fq6oGKhL4Z078GhKvlIoXm9t0efmywNl1NbtWHaTvaG9nhinbW3dwxpJYeVorfhOfhrPkPs6tNfJIB2%2FUHvhiCY2UaRDIgRJl9WKu8dlWav0ivYxYnPq5Y10JmJUtBw8kgG4mJN3JMdPEw8KHhnrKlFOE2hhwBfr0xV9Zz5W7lWyJkFoDbnanYwMN81UmnCB4hiBYD2Yd&X-Amz-Signature=c676935bdf2a390810ddf97567ace5c2bb772192f80f3b0d474e5c92d2a117e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

