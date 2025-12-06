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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF3BMITI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG79bd0NlIPFf2bf%2F%2BdytUOTA2HIRXOkPHer9q1eveAVAiB%2FqJ4RiYv5y19fI0Cu62s4ztKjYPAjLZFtI3b79pmuRir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMqhwdYENdfjqT%2FB5yKtwDGteFN1J1rrkbRxTl8m5gdKIsa%2BZm3TwLYYXP3UwIbzraCiv28gw0gFR%2B6kuPOrYwq6dZnyluJLmoxzNU%2FnF9oZaprc4B%2B64ul6FbtTIiWvadbwF2Wz%2FVE5dHS%2FLTooK9bcwniAPkEH3IebKvjWGAlJ5TW4ZU2DS%2BTWRt36y8NYr7vaEL4KEOjIL8PZL2vAuRUeY%2FHw%2Fg9Sugyg3RcIOHxqIagX0jAibRQnw1YHuSagqA4KEsEbW0M7h4foPQUpT9esrZjXpkqgwRFOegYtbJd%2FLemNXSYAwVE9Pkqau9jMarQZXQlz5P1GZHZBV8Tp5FedlNCdY4AyHvSIutqV1kCMfnqWUBUkwzUs1LUj3hrfOU2tZG6Y3OfyITKTXTKa1U9Wmt4wHR6m8biFBOXNzqdKel3MPm3HL3kwsa4cj%2BWpTNlyjUFB3fuYFN3%2B4hSIoXSjxXNqjwucz5FeIquXIUISsj1CWIliRRAPz6pHRQ%2FGmVjVS5IvyNLbVXKDtvm09wuVD%2FJs2L6YSAd486fXg%2FoGLB0cdHchj1bzSZHgp7c6GxY1RCrzU0169EfHsS8kuiUT8egVsx0lLKC%2FP48bfrnBc00fcRCqSoKA9lMy7ykv86%2B6AE%2BXEmP77y0JcwpKbQyQY6pgEB7CdqZN1lCR2MazAGUCgCdeb3xykFzhosOPr5HoXNkR%2B%2Flwi5OvIf8rZbazRWIVEDXDtWR4l2Uh0z4RU93yfRHf3qGESblIXdGUZOxilTuKv7bpLgbs5LMYN3mPRltu%2FKj2ytUjkUi8LpeTF0wl9544togdhEHSZ8LEHVrh5fwmSO2Au5N%2BYH8UUpMQuEDftpKINPQ6HoaRiwXtmbGS4a0AdCAtSA&X-Amz-Signature=dbf652ae54a62e98e894f9bf12fad77ff3e57b2f812f0407dc024bf3150d15a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLVYC4S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKlk%2B9SqiYlgFRaseydKO%2FVU3nJCgyShBoeg187%2FMDCAiAzFxfLXXPAv8JHk%2FJfBORerWmtxN5jumfHrOD7h%2FHwNyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM5lsw1edXB1YeV0dOKtwDqLw1zppgMtwoWRuIc7wF6nQEFsYjYCyDcbOyDeAPgHMRHMTpOUOYDUT8OrLi29urQGy78buCgzxrfbM5Pm3VPbLAQXoR%2BnpwI5H6IvSfZQwCzSmwiyOO0RhVV5eRJU%2F5%2FGf3R446T5DGWr%2FPwoJIe6PXJPGRKXvwuwMr4Klag1qC7hU2rzW2zo9o62O7rBmR08mXkO3v83JLJHe1K3Zrt2%2FcJszbffVT7sefqZFVujLhQHwEjWddmlFfha8spcdGO84KmaL6f05G0Ggs5Kyvsy%2FVB%2BZw4919Hw%2FhChIrUgZ3TcVlAKSfeQVVFkd9Uvindog4MieBjZNoE7ZqwclmnRndErF8YXtkyrj81dEw%2FA7b%2BbX7XOPgKZhFWiOp3FT4eA1hSHuhQ0bMxKfHcswvG%2F7gpNodmaAigqtJQ%2FzyMFuJmVXc64sVYSVbSJpve0dRwu%2FESLW%2FqtpFBt6JWDW6YYAvOblI9Svva%2FgTYVW6b6hSyuSOvjLTZpmSJWQjXS4u9DwFHIXFQ5w7i2%2Ff24iV2AB3Xz403bGbukHkonhpGoSsSUpGUJBt4bIuMfHq%2FhLtB4%2FvSMfQPvnxTXF228cn%2BEQ2EIHZD%2FW7DNFWx0eSvMfyxJ81a89jbaV1Fbowu6bQyQY6pgEDd6adSSmdZj96Buypek9F80yYG0L5skhVXBMNcRzYrWnIhGDuQOXvIiMqE9ltoy7MRjZAjy%2BaIusDgxO5oj6ZRJGrmdPVQHuxtZbgKwP0XQfU1CpH%2FubzREKgwzBVwaM8gdxk5A6jM1klT6nKYTVx3%2Flfw10WzN08OgPUWB%2FAklXYMVH8bqEl7RDKOxBBTiRQ%2BhBYHPBTnentp0mRXzvD48DWpR3Z&X-Amz-Signature=8f4fcb17025e4598b1e0f1fbb757e28706bbd0c7114f2eaeb91081f0e55c6f81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

