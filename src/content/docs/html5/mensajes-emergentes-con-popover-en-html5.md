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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OFXLH2T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCUv4Y7QncRxka73xLv21dMJPtDjFh1yiHkot%2FDUqsUSwIgdIpyNqMtl2kesZnjRAwtgR6jWQX%2Bux%2FcgrYeaDlY%2Fzgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEAfYC2wNt1Z7y%2FDvCrcA7zOybo4a5qBFBHKEbhca5ftZgsGXTlkEg2ELKeppkSkL%2FkXKROqCCjN%2FZtc1atOSchD9PYvKo5ULX1E2NuM8jW9JQQaVWgKOvgA43bbLAhX7SMW9X0%2FRfwQNWsJTs9cHbg6FJDUk%2FjiIFn3YtqRoW2UQ1X%2FFyQDx2sDwn%2BwoyVuW6kCmD0ymaDd00%2BGSB%2F6nIUGeTWVfXXrpCJby2hCILEhCDPWLhOajsIU3b7MOPUX28doPaoKLNKKfjrezcW%2BCIHpCKBe7KhLT0hLY5kLWYVrUPgXE6VnRlhGeGb9Mem9jzS5%2BB6f2BZXA4ZhsHc%2BaGNC1ta5qTmfQe7T137PTj6kkFiF0ZlwhxtHAoGsgqOtf8QNxocTn%2BLpavDmWfmQaPx8O%2BXF2pXUGHrXduZh04izGKPYrKyzXmUJPTYHpCrsPhWo7tEUlsDK91GjAszcOPo6rxS4iwFIJ5lXoAZsf4A3U3MIKMltFeRNb456qc6el0QG0p%2FVQyv7TJx1LyqJWxMOP60dEPXFFNwV26WSeOHJgCo%2FhhFFGlXPLy3jERzGOyQHLKrGbKoDwaxrch8ntd2MTD%2BK%2BKTZaqEWh95a16PRepwyQVqHYVhY2Pn%2BdX9zZAXtk4d0s4I5Wic1MI6RxMkGOqUBBFDx3ab2XOSZ7%2FviYXrjXQRCZ7loix6wALmYyLZ3fvnwWx6XK2FCqKzytU2hseZSzLMgjGdEwp%2BT5uihQYHOjz6R7%2BmFCUR76eqwh%2F0Q77i52%2FXk%2FJzzIPGNayM8nykQeeClKEzj6tA9CLO39itCv%2BVJlRoQvo1ReHAGpQrkFWrNAENfSe2Imeac70zgW8W1b9i%2B562G4jfVLBccv8Ptbw6xOeAv&X-Amz-Signature=394e6c23086ab2100ebfe09e76b54095fd5b2005786b6b41a07d55fc9eaf9eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YA6XXRM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFjNe%2F97M21YwC2iL%2Bo0WcUbddiSgBnOyF6XrV3isOcfAiBzpTNWSMzBdj4bGqq9iuRZ43lLGfGBfQqIPTf0gPcJCCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMYNUXxKNw9r4VMVUHKtwDzQcALSE6abhea7xIAaviW0Sv0HMitjL2CBaDb%2F%2B6BymGbgQMyXQZbWWQIjJs7naSLRBV6zErSFlbj0u1bsdsVA6jn3cTPjbXVCfGCxrSasiFWB8Fucf3H0SOjnmJNzu%2FflH6eEmYwFlW1b8UWuOzdRk7uqoRi9hqrbBd%2FBfaN8h9097Tlc%2F8ejfOhZ58ygNXm1TKqYI0pyFe3k2ZR%2FivmE2MHM%2FfzUORdavWtrxb33MR031ZTwzXgwn3XXaejEZWksGqCie53b%2BQZM3qv9zUHZTZ6jmUNd%2FaketTnww%2FxqXcMqR1X16%2BtYJmXUexV%2Bjwk7qjNTISUw1WinCxOeIyUH1GEQnBNUpq4Y8rDH7bhOEh4oPLRjdU%2Fg6ZZG%2Bcv2cDVAKtkRHE6x1u4CpqsuioiCoPQDahggRCLa0Up%2Bq37O8g2jzT7W7Cv0M8kqHx4QsEylpPfJXsonXS19jm3EiJLPHpwKGiekxCmYWwJiBA3DnDjVFoYE2nBWnnJWJ5IQN2XnexniYXhwU0%2FVS8wmcM%2F6ARTUJ3IHTq6g6u7%2F%2Bo1H5RlhJaye%2BpMWHxMHNRgRkG8n8ihQXrpgDldSrBPnhlvBETRC4Uv3dp9x4GXJOtKUnh1kmF%2BAYiJDwPuY4wnJDEyQY6pgHX1OdmyQr2VY5sCdyC6sKAahXyVmpTuK2K4wFynpNAlsq1VlLEVxn5G8EQs52VCowUhz55XW3Hg9sGMfsOGf3JUnGiGmGXL9TE8UtWPtKbnFS8Ae1YekBU689TDIm1%2BaOfDmx90LWtrvVTgv77SseMV%2F48i2IBElhFN%2Ba9HlIH1xdWpqzbhixY3hhwosBEQiVAunSPn7SiBwf8LVQRjd6ZiWID3dRb&X-Amz-Signature=d8d655450126fb3046844ebcbabad9af8c04340f09a45228b2ddaebd5d353fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

