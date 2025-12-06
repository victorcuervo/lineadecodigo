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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6Z47EDZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEayeg7PykYo108%2BabEDJiVGEP6%2BtTIVCpGxNTl16G%2BNAiAAn%2B4RvyxUu%2FrOBop3rb0R2zxEQIsKH81ZWTv83rg6WSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMlzOyA1xtQBFyYDHAKtwDX8%2B6bxD1Tw95YKBg6g94w4FjKdG%2FmyK4DRUelHDDPlybKVusjufRd0PTwTbyK9RrwuSgN5jbGYlH3FnQ8ZUaShA9yjRaz4QlwDwCtlLWOZUQaBs%2BwI5%2BiLUEkQ2EcBuDleDwOPPgxoeaFd6MKlMXF5CdFNdh0c0Gv%2B3GRj7Lgdv%2FoLzz8OiUGg3Z88oAOJVe97s0DYOMHsOECc9LAsqI5931HZGgfymHy%2FLMjEGFvdE7NW%2FE2C2j2B9U6%2F7oBLtH8CK24LMYBrFvkHDkJ1ZWS2ItiWV1eoW%2Fb9eMA9sLRESS8AbdMZGVnNyY3IbLFT1y0o6O9K69O1g%2BOKYJ9B%2B%2FGjS9YMUl2fygcDVRiEHlpYE2ro7Dvol%2FzCbCp6wml6YSNpNpmZkTK07jQfXmD7wrbfSQyfqBJdiV7v7ndnpdS2tzclxQ28AKnsEjW1XaKMO7AWHrOhmFbmfB8hpdY3gjFyrmH8VPCGNwYrkHePoVwLwBjBO%2FjSypsfdqlw%2Fer3yi3Q7Jhfy2NdSwyHDCEAVYPDI9W5w7kOE6%2FlUCvBvRkBGL0WyNoKTK5dMS3FBnyWyOLzusJGr4%2BE6ErYJ4tyDmKbK37TDnjUjIbFXe3buQeVOwA40RLFpEoLxlTsMwx6bQyQY6pgHRFo1YwP%2B52HZryYkDky%2BHt5gLJnyWYX9%2BivQnrj%2FjPUIY1H3d8%2BsnxOiXivAZmExe2Z3yTk0irF1u8BwTAY3jZhwKGsWUl33p9cL4OtMTo6rgUyUv7alI6pNBRSwha2Yuo8judVY96G5qGx2hfUpEei4qb3kDusytqOhefX83L7qXpBo3BcJfEzatt6XZ78sGM97f1RH6Ao2if1Sv2YAf7O8guOwW&X-Amz-Signature=07cec9bd996b0ee1d13df99b4299fb1fad82a87d1e76795b6860a2cc52275ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAY6EC2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAX4GQQsrTCHFzrG9g5P2F%2FQeFv7vjEo1bZB9AuyEg7AiEA3us5wneBCGsiHq1dBdxNSnHbB2G2bb1Iqjbli6vhClkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMogi7b1HatvtOFQ1SrcA%2BXhIMChOdOs8yRPttwkHHrzbrdAd5zrT6fB2c6dzX02qOMNEdbfCQHL%2FDPANlceMgtqKjRE5Q6Qrt1XdDMPZvNxjxnMoB2KkOksWDiSe5EKqIicAWpny4T9L8aFkErX4LxrBIzGoGPZHe5%2B8u2WpCAvkfL9qSGejAXcfwCZGZ66c4vN4gMKQTXrmh6fKbGnwZiVlBhhagBTenA%2BOsFFmosHJQBuTgOdSTo%2FY9RoQ28VEiKOTjxl%2BfW6scWYdSpjgk0t2kEIFSQHBtB3hMO2koBsxU8VIBTALVIuL37L7auMO6RuxklSK%2Fx7CgWxQoUgHkaghtpsJX%2F1g72Mxodrp49jyPTH947IExVnKidq%2Bkjw9BTpQfrUIpLYcN52VDAJ29FIqpNf09mu0NvpR42IvEICz2LiJesL92saiDDrSEQQ1T65F6fzA7lIQsdbq0gxqfsJj6Lb0b%2BSDDo0Y2t80IRFzd6xY%2BhbIDNS0SUO96r2xV4Z7WobfWX%2FMkmJGwpZJagRi3ASxKfbW%2FzseIyVaZY%2FLtO6pSXrS9fK1s2hVBF99MFHVnnWzBApD3%2BgGMf03XBXfMULGGlyrQw6SOcWJ0ATWfcPaQ%2FKfaDOZNQQhlEQhsQaZkQ%2FvDpME7DsMMym0MkGOqUBUXg%2FxHpoJ2K4mRLlE70xMQlDaTJGiEb6IbGqcu1LSZzvE2VEU3FG%2ByLnpasvPs3yOTr5tQrSZBWUGdHobA6Ew0yVMnfDGWQhGY0poqK1gmxY6ZtMTuit8yz720tuRGHnVVUhRXD13tzkW7s5FRHz0pBrk88iOHhIh0yQ6GQqHSS3P9wOgekO7k3yiUZITxfZ3AvHZMA2Er78ECLH9eBtvYYTSf%2Fl&X-Amz-Signature=56abb8a74dc4156998abc91466d4d4c4d2524086d657aca72d0e05ac1fd51b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

