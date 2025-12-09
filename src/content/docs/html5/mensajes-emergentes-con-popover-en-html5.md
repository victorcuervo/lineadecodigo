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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUAMIXYY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8tSYxXyKFIdSB4JQT1gOi8QIrvdBpKPeC8zMFQTi3WAiAKeLfx9slfOoZ%2B3Aq3jKhOoMzigCceS7kULvA%2BkiIVnyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcG1IPKYrfdUx4wnbKtwDy6QGlPbfIkMNJafTiiOvt7cUNAUAxg2nk6qzRgoZYKik9ETnnxB9snGRr7MKsXjsyss9B33e9Pe2aiM1x2WIEVDUFukto8nFbvE%2F1JvnIAx4bf%2F9SopjmKP6%2BX19qS12nGgFJrQLd8J%2B5Qmq9G%2B2TS6l%2BL%2B1QRMRw%2Fg0rcerPAKvFQhYV3qYz%2BjNqFVIGrq1VGyRDnEBXAnf23MxFPs2%2Bl73H7%2BFtXFd2GDcFl5GmOnDIusj9t9NnOoxuYZcxqlZvqqo3HQYGQiibcxQsMDynEL0MjJg0oh4pyl5f5Dmdt7pZ1t0OoS5AeDnKgT1vm1d2vTh6gwaVDj8cjl2oIu1K5qQSzFfI1DoOJ7BnJ%2FIWYVaCzalrePiF3rd0u%2FddSavL4sA7ffy%2FAE1uPTLnO5Hwem9vC4fLclrLDcMbiFQOJkLhXasf6sm4b7ZEjTlWlBu4NEHewbGh2%2BjKCEDHqgAzfndoWPfvJlagJjDLbiCeyjUYJ8MXnRyVCDUXCsJ2iyFfFchkjIw3%2F9bAWLFYmnx4sO8P3h8IJKmL6%2FzuMrh2gTjFZduQutGJtqbvPjXEvDZ4eBzbNUWnISfN74pMHQxvVRaeJHEXGHcvfl%2FtGzZhQpZTOnc5moa4miDKtEwmo%2FeyQY6pgHwSe6zkIqsw%2BYC%2FkqC3SiKmlXcmLr5b1081barN8eT%2Fae4etzs5zcVI%2BP5k8rhdnSY4IpEAb8GyIKWzdcx%2BYkQ2CYg2sSEckDyPaieMJKKh7VESQtSe8eGI1996MjRtkO7BzIRn9P8eZ9gZUUzMdIBkg50p7hxvDUAr6DaLgCm96PwAgZeFb1NawXhiAmue80XVsTgu6yZ%2BqoNnd6granFq9U6AzQ%2F&X-Amz-Signature=9f057c16e69c8aa680ee8842e0766c531ed33c1a19ecea882fa0961785dbff0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOXKA7CA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4SA%2BaqKDj0zuLEFPyQ87lQknl8GvtfPSUsPCl%2BN4EJQIgbGHj5u1g3yXlqoMyK75KzUCSUdhEEQ9wgkyhZ1m%2F8ysqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpOJBcKAmhX4aabfyrcAx4FAz432mo%2FZYJwFukxJmmgR5TMGI9lWlCWrtUExNpA10thgQX%2BLdZJ1CYkneW0aaSbpxxcRhy4pp7BLl05uzGPSwO%2F6VhY6wL%2FrcfGz4WNPKJZGqFYPRFuSQuDSYGup4%2B8QpBO9%2FllU9WR7xYlnszLKGk2R2lMHcMPM1AB0W%2Bh7Js4Kt86Yxk6FfIGESkLlTXC6cUR62ByQNEUj8psFRWRM86raLcUlIOCXvC%2BD%2BB34wjQ6zcKF5QQ9x0mGxvDhjLVe%2Bf9CiXUlTB%2B222RnO8SdOzSQjKEa3NyjP6hYJGJxKeTJ5lxhyp08C6VW1rmGOW0Xp552%2BG7dnt6IEZWVN%2Bpsqa9yOurEua0RABwTd%2B93HBr%2FY%2FUdGDIa0SwyUBUJQof%2Fj%2FVj4GPQ5KDUyw4G2Yt4GjPY9fii6LqOehrBW5hoeK6YquIankx9YMcy15rfnhPyJqgspW9OCJDxA5NyxGeSUUoubtrOvgq2cvhs%2BfYlmCahOphxKXsczL3xrHICeQ7Jc0wyH9Omu%2F5YZLsPU4JHtZ81mGU%2F2evpXuZ8b1ohyC7eaXMK7EXTugUfd%2BxvGacBd%2FeQ83VIlHc0NDrT1tKVNO05%2FtTPzgKxKjf4WiBR7t8rQD0WAGnjzG9MNON3skGOqUBUR6nN2lj6DQPdsc7QF72xyvDHaQuSi3Tma%2BMOlKDPaWJU0UQoJRUUs3E8rlR%2F0pWf5YHgkljh7Ul%2F4XN641NdoS6C%2BaN%2FkccTLxbDWkJVRQXhOxl6tWIxoXUNtfN2Fz5Hlf%2Bowgdu7KVkIJR88dwy%2BVCFmqguNbSjeGgoxTfmv2l9t3tkYBXkkc4ILX0avuW32Ikje1nJNIMqSoWY5ctWlysbdUY&X-Amz-Signature=a27826cde3ecadb4c6566cc26e91e2e4dc5e3f2fef77aa3c651ca7e492c6ed94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

