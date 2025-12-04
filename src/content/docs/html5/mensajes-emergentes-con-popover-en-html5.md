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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJDZ5CW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIAq0YByylMXL4QlZ5RTOqzOArs5kYkNZrrveAs%2FniKZLAiA%2FsH03Xl8Hu7K2TA37CoPD%2BULVsNtaE3f85Zj4IfSvXCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM5dT9bCbU1iUWPE3lKtwDWpa8sGOwlm6V0MR9ldK4H9GHPsil37EMaLavoIEbAHNAig6Iwwxwy0mfjUYWxHw%2F17UmnhUhpxmK4BhR31vgOEX3CwfpN4dUf05cpGtRSwDeLXYrCm%2FFffXaD%2F6N1Nq4jXyj2MwMEQx938lAMFRlmeb7UvHbh2x1ck7%2Fj49RRSQ%2Bqf0qC2cKIingJOQ53lNHZhkov9o6RjiILnDt%2FJb2FPo3Wa1YkfKGwMk73ZFcb%2BQFeF6bW%2FBtyPcjPBKfaZ7tE1dhfXDK27goVbYpoolbzJ%2FqEOhs0OhOejInhdW8thR5qO80GUiksBh5CYCM5U6PILpgDJdyeigtYVIbOlOQh6GdsnsB9oZfyDdXeOK8BCunYBXGmsqot7c1Vl6c63ac0bLYBsw7JLkVx1spmHMr2n71wv2F0TH5mTD8KQtWz%2F1rgPIJbCEGW%2FAxf3ra6z8xuOx3dY8SF%2F0fcH5OevEZThbaB2olD3vn9OK9zsbQlCmA83pSy5tv%2FVM2p3EwwERhJwvxLjAjbsqacyrCrVC4o5jIq77gFr5V9hgw0ELvpy3H7qtuYQLJA9gMFkV%2FCxJGFBhCmhgWX1SYaeuYmQ2FR4%2F9ykztdiJoL5FWuzzDEOnj8AkQsUR6Dy5Jfdgwyq7EyQY6pgF3u3PUpoieEqt%2FJHcP6tlNEueM2ibcaVkv%2FsDFMvFjeC3n8ycNzNJMbPLo1oaMUd391zJUhqrfozsbMluCEsRAbced4x0ADp5Z%2FlcAlEGnklkxo0mgntwVAFFPBy7tv8tvTUpE4FDBRHYmxHDFySO0N28F%2FNnrLE0Rx%2B4gOD50CP94C7KcRZaw%2F896aw1mmnTT0ZnJZa8hPipwqeXJFa7twbYqVL1H&X-Amz-Signature=14e7458e396c475fce0c2678283d5508db2b3fbb5d1df86086554da1781d6858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPRLTSU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFcJCuqYJurmyo27DwvEoCw0lPwLdxvsLWEx9bkEyWgMAiA%2BJ1n2O9%2FBuXKge%2FAzbvtYkdIlLCpOngpd45IM6mWe2yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMNRvKLPinEIpeAT8RKtwDM0NuKO2HPuvC3PouiGegQ1dhwkspDvTbDvRrePvcGjmnDfBVz3JxiAtX8RXLZIxbi1bFUPCYmdnL455gnvyhUPiYfkzOG19eOy40O7LBpBF8KjKyPe%2FHhaMyy8GWJS2KTtpMhbB8xFJTG4%2FVZr3A%2BuhWyFHtwmvZHGkDNL0HPJ64MSpbQUzf4UJ3qhGPRsVkvbrOe4Civg5Jzw8qGKq6lDjrMznAIUMTXTIIfQbZAAz7%2BhWwugVgeD3eDebL8t3q%2FuBXt1B2dl6o9OzbZpZLkHmE7dQSw0Zsr37XZtqeD83XO94zHLmWssJ%2Bqz6DEHUJg6%2FlYlG2bKfZkYKBns6aMxa3Mrw7hM5SvIoxFhBi%2FZrJoGYm7Y9gYboEwfPLTiepNEBiWD%2F%2Bp%2BNpSM6Zf57w%2BNBRuu5co1Vi%2BrcE5tuip8MnNsGqDv9zUoogTKJt6AOClOT6z6%2BgNSjbMULmzBcy8eAQpHsYpsv%2FGNQycDTHlLvPHqmk9rgzd%2F5L1w%2FVo%2BUTM1EUs7NV3nyKOVdvT7JdbWMzaxw6YPFFjkcOGUbLg%2Bk6039shi8TsvHtgpXASHgBadmm0KN858ME61LH9Vh8FS%2FD%2Fbd%2BW5j4Okkph2P97eL9XkGR%2FUzZw%2BpwTcMwuK7EyQY6pgErxS6DJGv%2FhaM0PQG9192vNOklBO3DPWqq%2FAHUNIYtLpTUAYl6SYyDkXUYsojN8BOI2OIQJ3vRqUtaHCzst2QKOKke8yiav4f1ZQsml68qPyX2S3EUjLP%2BVdHO8z3u1%2F1J17VBGxzhAdGNV1xlWcO7f4urzVaPkAgNg9RxJhMQo6nXC8OUOcIUegeLQC2m9t%2FOHOEW6Qy%2F6zRC6w2Uv7qnxNVb4w50&X-Amz-Signature=4b69ef3fb041ee7afc9bd066a057cea13fcbd7c8c95df6f561930209fb31be49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

