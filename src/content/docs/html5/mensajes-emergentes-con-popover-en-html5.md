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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V57R6OBB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRDjoq9JwYjJhnYZgO6mpWtOiStrhFLSJrtX4KtoRiLAiBRbwj%2BecjfRm54FcTFlBFtueEnzTnEaQq9NAiljfn0eyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMB73Arrm67uYjzPMaKtwDhTGChNME3DJcYvorGMkWOCEq26UaNeYjZadsnfDv%2FFaYxQNas4Zeu%2Bu7SrfwBJ8Vjs8rEPRjthiK2iDAA2s%2FDACfcXvpChd8XBVi1DPEO42RtDZKulzEh%2Bdwkk%2BaduukojFXgJQbowTjqwpkJP6cSCsiYy%2BGzRwXrYrCYn390KvZMypJHhKuEpTyYrr387nk2OyzyzONu5RDBNA1vEmdBeKN1wFn8Nx5VCFDRo0Ggzx7AuD0SIJ%2FHqo3m86m1zGEuom8BjTXGdHmzZ0LC%2BdzIihloQYsLfaNrTml64WKKySD4dDBLho40DepGWRXM0ZzUOoOueDIvX1VBqMKCgfMLD8%2FJu2%2B4ZE9KDhi6KqCxiFusPKPzECjcmwm3czGGz%2BkpfhhtjXC940ybJi7P5E9NIDy4lnEdzW%2FmwGkneZ9Qgtb%2FKvhR9CuOB5TvLIzdfNBQO5IiGF7VrNDQHO8wXxwfS2%2Fxfs%2B07nuROIimDnkJSL7GNsKZMyEfb6KR8QxztGlDwkbSNNqmMwx8ADc4oGuW2XongfCPM02aqWq7Nku2hFziBGEIaUayJawD1wKbHkn7D19TOE0xFQCsNVKlSZHvb1Q5xVD%2BQBHtp9%2BdfJsQhHVodoPv%2FzUQEvVjw0w66bQyQY6pgGOwcXuAm83J%2BXatUlJPTbylW3ZVcoyXB%2FELGEgTVtXpc0fJfXUyc9xmOFj4%2Bluacgg2VQKJL2whIUxNv90FfGYxCta3V1RcPmkBfG%2BFdE3%2FnPt2puhYc7b5kmU1crGffWUWOohK52pjd6AvX1XruhoQboLDxMKqd0WfjrdMryEYsGw4qNhbeGA8nz8WGBDz3OFgZUna0np9umVCpzVZv53zgAvuWZ6&X-Amz-Signature=4227f74622362bf14cce2cdc4dde1cff81f7525ccee6170c93a0763f329a2777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLL74I7C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwI2xXRfTWo6iBM%2Fa9HqNEQakuL%2BvKmLoGFnB9%2BdIBRAiBJEOGEN7Vk8OGUOb0iAzwdk757YbBmF%2BT1oHKqOjQ73ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMezxbJhuWHidco9AWKtwDK9xyXHVv3gEN3o%2F%2FPyN7AgH%2Bb0%2BMI0G%2B9wnIBvl1g%2BEDtN6HEA5hGFS%2FUoER%2BmojSkItu0ILPrac6qtZPInZNEKK9up4YG6T8D6mkepxolXs%2BXndGnuWScaFtQIH0JNO5yC5eude3gKpEJLI%2BEpEQSZ11fQ%2BMMxqXo%2By742h5nljQEsQdrA2q%2Bf8oEFk174AFm%2FjbsX3LSJXgZ1zTetBcTUtKqsI4C%2BLP0QgcmKdjJHePHCmNseThQqI%2FzTzf7bxskS%2BUkMk69oSrOvkyXxU5FufETw1EH2O6qI%2B%2BDSzhj7W9pHAwbUxyOSvk6k%2B2MIYe%2BlhuBujQmTY22UVeEIdrJmPd8P69cA5fpg%2BIG7%2BEX%2BgrH5P1j1ivK5HjexHoJrjhYrBhv%2BbPn0qgcIrPsxGsDXkxBiyKUYkOa1DsQXIVHHoz2qo%2FREd1tTHuGJgWvCOpKhXsuy7CoIPgg32ZXoZEx36SyQSMjrd51AONPPrELIAqFyiv4CPIMEnrB3qTSGjXRdg2dbVUyg8iktlDj2SkMXd5LhdmxDmPGOAJTZzmlTMsXTy58W5aTr9e0g5WHEG4T%2B20plvEr%2F%2BZbcY5YsYQAIXf69n%2BDotRSwRKIvWnBDIHaeTjKfG2AJhgZEwgafQyQY6pgE4e70Y0rBqRJuSUXnpIARuHAVaxg7MAusaTrC55W8z9QZMO5n570%2Ftl3an8BbosFehUMqVMLLJTiuw0wmRZ8dDSeMAZTGCuKv10%2BredbtBfApnVhtcc1xrvjJqIzv8Cia7wZ6Go6etMWxoTC7wxFHNb0v7PETS%2FTyoM7dwimVOxf2rlfwcEk79E5DyDD9lgZFcZ%2FTqldAJVYGG3z%2F3qiMzCuBhrSKt&X-Amz-Signature=22e8cd40fc14379610d8f24d1ea286823cf8f6919273a327f7f78ced2802477e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

