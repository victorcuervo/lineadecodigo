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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUOQO2VM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDEiI%2F2%2BravQXCxZFDads0V8XfmkPAmNTJpQSu%2BPnn8EwIgW%2FlSb5sbuc00yb1qcMNF1ujKbb8wsf5fZSwuOO3NsjYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDKR7OBeBxX8H0t0nQyrcAxnOnlZsjf1G%2BhF%2BYVRaGZXSCb6XzXOs0CecTmI38MOjGshIaEDIUGfxfJ7I3ZBSQZQVZ%2BqUCuNDsV%2Fhz5hN5SBZjUKjaZew9BUFmY%2BzaAzb9ecuYMtnGq2jCL3iLLTMSCJ5OZYcrz8Mlt46XzuwhS441sGR9WEBZav%2B7%2FLSWpt50Sf3LzBb%2F0Zh8yyW02Ai4FiopS8v9%2FD0%2BHjS%2BV5L9D%2FTXsNcKnyEWRtceWcfkFvRg0TaoTAqPOOviih4pkrxOeHy5nAzyIbyfJaIPZgMUaGqrROQYc66MBzUuClDlRU5ZGmJhMJ6kIn55pWcDGgoZQDJ%2B9bUnK8QYYRcDbmkir%2Fc9bMTac9IU4kx4dcf8%2BgoVpRWWPOxN%2FJAotBrcXTrq72zxtMlPCW2lovRe3LMgHV1eySCEAQcydPPeCIjLR%2Fpybh4xuyQCUFtQoPn5H5gu1w69FVNQU5nxbuZqNyHtzKjLQ6%2BfJnywT1a0ujMdWZc0GtbdfpUBn5q7HHBq1EWkcIWUWhzFt2B7CWXFDyxVbAfcM9zfoHdOILZqSfSXtneYeQH7Qu34r8APOuKb5ydTcLAlWcAGhzAZxXo%2FUj9x%2BEq4dqYtPkM6yz64dF%2BtWCBd0%2Ff64xcdJM6Nl3dMK7JxMkGOqUBacJ%2BitbUxmkfrVvTnk6DT31Nj%2BCZzjYobHrj9I7GnQ21CF%2FziEClKe0U7pOlKu2iLSSxpmjCd40ppkJJJruUJDazBI8igMAldrzuL2oYB8nFP8gjNAbbB578vWjw6LMlo5ne1EyyhitbaHMKO%2F1eBoMOrm4ln1i5x3dNs2votph9oXk5DW1OmmdKnB%2BXv%2BMjM492xhOfE4wrjj3DOaGIUTh31YND&X-Amz-Signature=c6cadc9aa46b49b5a7964ab0b164988d4b26e487f21ff9818e31a3ed5e99116e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CIXXFLI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCkIly5HfFYCvN8LHdeWLGZCo2X9ukxkctIrUgHGaEntgIgaAVtm8QswM%2B6ebTROhVoDnqs3VabXoHT7l7mhERiE8kq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBUtCycxFcH%2BYC65oSrcA0srFJGAE1WhHZYgh1nydI%2BraJp6lwo%2BGLGTyqZW7YEFpKAnXO8ip6m34INHQMGAMRMn6Y%2F3B7iKm7UtT%2FVdHW%2F9jUCVu%2Bkgi3oI%2FA4pRbe%2FeUziJhWcJOXCYyMC%2Bn1ygb7IqgB6WZgjVMLayTYH93NEIcpZbvqpawB3QGIFGyplM%2BKT5bZnWERjPo6LfQDelwdvMMf%2FTvQJurZMFfIMyjOVV2dCSrft3qBSIx7lOWtquedsWm%2F3YwMeLdXytksfCv5VUIVqScWuVh8jTJTZLZ1JtYHG%2FoyQy%2FStcIHyEKZWP%2FkKTK4oGaUk8OsqS13gKVOqy%2Fz0BPLi6Ct6zlMQOfUfQE4LrRdI5ztRdAgBSNY1pEBQO3V32rXI2Z%2BpzNXLK2c%2FcHZ9OHDkAQxkjHai07foHy3uqKcu8IcVhfLc1iTxSvB9hX2Uq1K7HozzGBL30Q2dus9sT5FCsPwcwfLoLj4blsdunsdmEESyBcKrlr1wQMM%2Fnb8ETcOLdiWKy0LYWNS%2Bz4CriCro4imGFp1Es87QkRG3fFHH7w4yDkkp0C6t6ulvKu9Cf24L5rirlwb7C1k2WydVOY5yTHoQ%2F%2BKeKFtzaFj2CgyUzZyWnxMcIsmUlOvOHyXejGG6ja6lMO%2FKxMkGOqUB88qFljSQOzSQY6aoEA8UdRbv016LXPiqCBE%2FTOrBtsHlR%2FV0PWnjrnWsQk%2BXiNeiAF7v7Cm6ACad%2FoHhPgshKY90IbqoFyYw4dReyptF%2BIc7jdeYU2BIv44LfNdQSqId7U%2BIyotX73Gu1dEoriJshIanDPo19d3r4KjPYwMW60E317ywUVcslztzzyr0aQsmn4NR0PS34eD0ooVdWjMnuzdhey0m&X-Amz-Signature=16c5398f756afba297919e13e2607685e3b42f134d233e814d4427b192430d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

