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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJW55XMU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7xg1mfiVmcY%2FAc5u%2F7H55lqptnAynaU88KO4iGhod%2FAiAFEqL1CCvvL%2FNDiQAEc0xp4IJ2k3A6EJsLU7L17hexfyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfJCS6Z60iOK4Z4BHKtwDSSfYIy1P8uw0c8JUkiS4mUXqvqeEJ49aqYoU1%2FqWN95uW6m%2BGUbiUUac5TIT6UCLIituHMAYjRkT9w35svoFe6Z4o1F%2F8dbiRZxUFSTSi3tZuGH%2B1Cpamke9tietbTIIpIGg6irn6dXobgRIgL7yaYDdSwevFOsnQC6fzrrqwTmHWxCDnNwltfrM3un%2BQXqyG4b6Eh7KTOgh8Hg1CuGgnkKID%2FiYmbBDDCXE%2FhBgFeDx9nMaKJ2bsaWknHDmVOhTGG%2F%2FTdXv0GaTgu%2F%2F0fdNZj8LkDLSWij7BwBzNnespqgPQlZ5Q0nVpkGd%2B5%2FkItsNRMzlOgMv7au%2Fl6xG7omygOPL1DSGZ1pv6uno%2FF8%2FK27yrQu7pdU7PNtMsEDJjbfMcev3YfdLwVTqWVFEOzgePwvOdLScHojOR%2BeDQ1tsTHXlEtLnvP%2FUTJ0IHEj%2FWgM51Z2lBvrSPmuWqzdrS0gA91TL%2BTuLzVDNqcSqkid57oMdZK6qazU8LdJ3SOnHGCWHY7JCHtJXCKvFTHPy7vfNGJgJqP7cFz24XXXPrc1ymie8TT%2BdCpodkO%2BmlllgKn%2FApy%2FtoTYrCxCeQ%2FAxZNuMlTA2TGEYGIPhryeVhYUhZzQwIbH5Fw7p3geiSwYwuO3ZyQY6pgHKDwp9%2B9QoAcEgmlgpUXrmPBVS5LqnmExEI%2FY5GKtEywGkLu9xiSbhrC7a7nv%2BYc4%2BQZdi0Tx1j1mvmb9ZU8Yuvrx9Zi1awFMQawfkxSeKWxD7AYJpXlaPANiTyFQXTXV%2B540yoEWTwq0Xkcpv5akIIhFtmtoYk%2FSZZhYhcPJrf7Sajo8jYAMoZQSz7aMmtYxY%2BWHw%2B%2BrZmhAyWeCQEn8lFQ5J4kVK&X-Amz-Signature=489fec14ac8c1a762a1bad3ccb474618dd951bb7c97a3b426a53209d7ea7a659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJ3WY56%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf4Ykg%2F2%2FAtDqePNQBaO86duToCSfXB4LshdDywR%2Fw5QIhAIVEcjQxBSjtcqEC2kckrBb38PBeuOIBbRniMJkjSJg7KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fj3Pi4OKdsMY7cegq3AOh%2B6ZOAczx7%2BeV%2B%2BunZfg1Pp6JQ9kZl0H08nnoRyZOJ1hdfTwfD2nGtejGuJB%2FBa2r1Z3hPY3HVZWZ5O%2B4CcmI1IxYRXgSNDgacqdW%2F8g1h%2BTp70TCHRwZXxG9yvZaw2gKBYmavp19uTDRAKTuW2ZqP%2FrureFpJPy8vkephMomz1ltckZpyb6s8EcraMNy8sKRM%2FyUh2pmgKxlHdi%2BmN0WqgXJlBZJb7TG7VsK796G6ueocSjuWMo6kXdHmH6CfcTosETblPEXuE%2BHROqtAc1zcmG4xSaOuNO6pG6VVSvY%2FULc2QyRO8jgR5tDljPu2oZmenu2%2BHrPvmsoxKqwzhtEpwpoWliRsfgGaw8q3qUxSStHKOiBzdEkBT6K3B6dW%2BGtXcggWgZoOrxA%2BkzrydXimXDsyo4lR9rC%2BHGXwtvW9h3Vd%2F2BUYDa%2B%2BpOzrMKTitzh9Mo1dpZvd4%2Bo%2BIeNEKtKyWRkNtGkIBkWYyOaH21pS1xXxDHne9Ma41jWr4PQSFj2%2BBTEN9CQn7U%2FY7ACl6bdM03q27dgnxm6wNKRh3vxH06KiQ5B14odyNeTGihFLa8zxq4tsnH4l40iVx1%2BPXEnTDdDaarcT0gyO7VgzQa1btglgB8ujmUGavyWzCo7dnJBjqkAeTlyVYRdZtUGaeRt8OLXR7HjZ3qOnw4fnG2dOR4VzIUsc%2B%2BqE5tYJz5A9qbjtl7793vHHQA%2F9TCoMeAYBuyMcqPclIGU%2F7lOwGhms0v61l8zSYf89MR8guil0fJv5ki868aPCM246TGKEyVLR78UNk%2Fp6NUHmgHFyt2gNHTQUBykmTpZg7Ig9b1ohJTGEnY1KbstoC3nXfxF4QalLL0P%2BSh4S%2FU&X-Amz-Signature=16cdcb0c0be8a6a75a5f757811c73d8c0f18bf92d3ec760a2450d9158f973374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

