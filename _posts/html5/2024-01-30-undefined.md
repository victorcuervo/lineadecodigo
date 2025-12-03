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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJNXQLB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDVcVBexWWgJhMPw0dtDXuySTNySvGRhB3IcW%2BEoU0F0AiAuz42%2F0PCmQpggnajx4VaHulCl9loIPfShQK2kEXhqwCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMEXJCdpWBZMPBBAVzKtwDVifQLD3qCj90dyNrCkaaFZp78WuTIWQWrfqti8fy%2Bb%2FoMewOF54bJdjWBZeqA9caG1MSL5DAvIvO5jAcYKV2GxQSToF0sWslfGPIAqiTtp0VLVNex1LUj4VjbpJQQH75SglOfduy3OjNFNF9SFYone1CZfPepfUOhC8NIGM9wddS4nb1rMaQlFvSl2DTLN70C6pQ3Pmn403c5LXHmJUPc8RLrUVM65Kr%2FLXuf%2BPaJPJnPjBIgCpeirpG%2B86KAsU6yVJGs72pwyUnT73w0La1CNwhyjUf0C5fGg%2BfJtQqlTwv3JMy7jqcv1ZlWzsjpG6Cz2QLVKP%2FmAKP8xVSsI6R%2Fs75wBgL8FbFQoJxZ54DsgTuPsJrDb5NI3rB%2Fq%2FQb7HDRg0UnkOKrklLTVAWprpGAEBTQDagt0%2FyGQlUAz1K%2BfMk2lbbJ9uoenWYhBKuqJH01ne26AVYcCFS1cnvxJZy%2Btcdqb%2FOEJwWlbpg41GdmsZv99NPU%2BbxgT5hlZa1bU3DQ9qDj7Op6NTm2LEV21POpPXy%2FUNOhGFEodllQ%2FTyoGYCnGM2wz246MWfEqB6kuOCsBGAO5d51%2BRyCg4MP3lh%2Bl7WomC1TiGszk56r0SyKfsAFRxR%2BxMD%2FVD3hKIwk67AyQY6pgEqDgqCRnMxq918dtX5bZajGDohggObD7Wo7kOAdl8Zm%2Baejlc%2FSS9FjMrD7RTB4NbhyyU9C2W7j36IEaOCgk7%2F2JbdqKNfo2r0iCafEiYWDW%2BmARE0C00kVsjKEzk6UsGRUF4b8Xze3hK6kA65zk8rM1dxgPhc7h11YXD8CfY4BJp0bEX3kqDfcMi9DxLnbf%2FA1%2BSlfNHbZHUNM9xWzpkTwlyHXQFT&X-Amz-Signature=43c9723e72ef9902dbdf5a35e418ec28b727df75d208baee7ca952bbb241374c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRGIMMV7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAQThoAJDX9HEF4FMHosvxE5UcrEUdiipztK9R3AvBf4AiAkSNvbyMjfyUfNip2vE58nqqflaSuE7wHJwHDKrNLYoSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMb50KAjaCIHyg82D1KtwDtu00tAz53S3XVpFP3u7OOlmShg8eYX9UrrTfFnGNRH8cFvMHZFYmUBB3czst5FNa0AX03twYDncvsyW1EvXI7y1XvvgwBUMkDZVNUf0yH7mgVnsHS1kIfGWx%2BH%2F2%2Bx5YFmOzgZNZz%2BsBEPbFZB8kwrqtyuzTDB2dnA3VW027h0cdov%2F5stMp3ZO7LtZBzSLHSKMROKMXD%2Bcb64EXbS0%2B%2Bf2N9I3I5qoEkmgJvx8hFQHF5IvDJZb%2FqVbtBsvelGf9RZPlfd07ktAd2wtupluncLOeqlXmV%2F%2BDNNBCPtxQFny7m%2BSqn%2FhoFQdOemaMG5MTH%2BurdauBIvdJgGz6KrXo0IwTGPFh3qPsApMT8YeKpEWSN%2BUF581suWTPZu9W8SN0aQB1H6cW%2FQwTqd3JDizHKJbb8T8sCxCd03m9GoxdmEABJhxuJNY9gkx9TTOHMT69OmRX%2F5KWAM8td3p6vt%2BgB93dVJj%2B8Wx1yAlbDhsAzvzpR%2FI3KmM78PAC4AZzRH4nN6%2F%2Fi%2FA%2FF3XgE38z7DXZNmuqTi3fpN27MrTwFSega4gZ8F40rcNMTw%2Fq%2FZayb6IEGYO%2FJzDIICS8GYqwgUPs2NZYqsaqRfNiBLzme3Lv9AjGXNg%2FVMzk9ZxRH3owia%2FAyQY6pgE1z98u%2BGI9f%2FGtP%2F5mVbjN1wKnd%2BzlZ2NtNnfVjgNPnRd9hPqpAO7tsexRKeY%2BbmuWJ1GEru%2BIH8aOJ2ZpzLFag365RvDJs0k5mgE6JhhiKf8XVQ8v3lQVBp36agNOHPuC8DVzSVaGpW8oqi%2BUblWzLOb43CEIbF6M8rP5f7UbQJf%2BjB3dDhGQmMJ121sNSXRnenM616dP6oMxqHAcYT5TLptz0t%2Bt&X-Amz-Signature=ac37c2f46460018e853c9d8aa5157c794423bd2f2645d335846bc240d9cc500b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

