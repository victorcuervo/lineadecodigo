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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677TL7JHC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcYTm13krmXrInvSjfEbLYE%2FZGzL4rql6UJ%2BLCCaq0gAiEAm1cG52A4CZ1k28lNkBaKNsDTEZTWjLczEEOT6zho2A8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDK3r16rM0GV6MmZRuyrcAxS2vt6%2F6Rs32bcugho7vq4rX9WdUAu7DOjRJhEddeho0h9lX447D0581jRPnfwaLODYyaJ%2BqGM297ZVDZSLcw1JgmwX8eDrovodISjC0NL9%2BzQKxXjKp9Z635ILr3QsP3B6PmcqBhpiUdkCoJztQb13GRVdZ5TpkfMz9abyHQere8k%2BVJmj3yD4TdV%2F55f4g3HL6pfPSyCMu9SbzadPlRVjTUS9wMZ9JMkKB2BNvgDUCLfha2swDoAs6%2FxXeCHNTT8rQeMJURo9B%2BPzC4wqJymJEwK%2B%2BCy3dFACcW1viKTUssL6WCU5xi6G9jb1%2FUo8lMwX29U1gw9rtzFpvBwpVhnofhVRfDLrpXvxg%2Fyc7gXxfSoU8pivNfTJ8efkWjayAEOdR20Ij40vEAWxl19bTNpCdXbTiLajYQP5QJEsAiUxl1l%2BoiJPNH52ozAJ4CfVUcL2l9GCmqgYPaac2h3LGxIupu3XnbVq0dtb7K19Qjq9MneaCWdunOjxuh38yQk%2FJe4SKO55Z2DWGeLXIV77wBrzd4gF%2FuuDBTjZPhtTyBNCkfPHOwExYkOWlxR%2BtIlrcbATtyXSRuNjH5ri3tSuy6%2F5YTT7oj8Sacxwt9NEL0VMV54IW%2FiCHvmXeIFUMPbD0ckGOqUBN8w%2FVPqvY6vXhZ5QS2PQ94pBBwhlMYkDcN1XwOxijQ1Zm%2Bgc5IJDjD2xYUNQr3zydJoIx4vv1%2BtInpZLJfSi7l59sT4%2BVhuxpXkyTrOYfCf61ZEzJT2Dd7fB3Z8nitNmDArWA5HKGFMY90lR2HE%2BbO4jrd1C5CZcSmX0cx3tffaVCFoZcaZxKZZ0MyXenAvVvr2J3eTo52%2FMW1obtJRvMMAePJuL&X-Amz-Signature=87dcd233dc3c9945be68e4c5835ba7c0ee85ef4e3147189ae045b42b0bde07e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSE3SNPF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiPsMWGPos253hjco6RiwpOR5pPf9EDZzKKWW1fcVzEwIhAMMtQ5U85rsm18MsPwx7A0jVK%2BkpzPyFvKsmvcLe04JHKv8DCHoQABoMNjM3NDIzMTgzODA1Igz8k2WQS%2FBxH0CfTt8q3AO66vJYz2%2FZjx6djX7%2FrmiyCQRbGcqYfPk1J5IvR6BH2fFH839XfoTgEbTueT3VYA5%2F8Yw6CJQV%2F3FCYxiKlSviOqcBdeBYj%2FzNO3XQzcpaNtfLfyBibq%2B6SBViYmbekGVXxaBHEggjJu9%2FAkU6%2B1%2Bk%2FE5aNWrJabj8kvODq1437OYpVHCooZ36aTaenDxsnUx5dO87texTIxfk2y4ed8Px%2Bq2yYqd2cWG9w1WNLCxOddx8ozPIAoM9JX%2BkTzkSHSDzQei2OD2DMSLrA1FxiVBEJP12hTfFoqlvFjFyJaZYwFN%2F2cO6NKsIlp2thxNMtoHPv5ThzD7kIhIHHu8CX2yKipEcxawz0kWH9FqoxiHdylDI3uE9yQN7srfheHRT%2FXpD7iMb8p%2BGs5wQ35HHNH%2BPs8wK5gdFo4%2BrW48s6DcyppCNJADrmSFM4f5wDRv4xssEcE4guxeAihTcpYYfl6ISszd6rEVNVV%2BOsq1wWwGaH6%2FEccomjn7Q8Yrk8AJOMgDvbq%2B5gp6nCqBIEqogWjzqWGwNe9XHk8IFU8YAqRTbMtRgqdEGwb0V%2Bq1MqY49o%2B8eLmHa92CFyYFLroKxQbimnNruZimkcX%2FhRYlzwX5mNfqVlPZzg%2FDDWZ27UDCTwtHJBjqkAXZ5oOI%2FYdsgQ5tWNnYtzy8igHTzVxS6DwaZrnhjUEgA5%2Fnq7bvwFfBl1W9UhKPGlWENFDgM1tY7u40%2B%2FE6oN%2F5ndKhjaanac%2Bf1TRpQySyqEh9sk0%2Bkp9RA3pRDUhf7GVBg9QTfDSNP4KywTDXCpscr4gQGJavDJiDvU7FZVSO1Cqdfpm4Y7G7SPg99d18qMnL%2Fcaw99J9YhP6WgRoeJgv9t%2BKo&X-Amz-Signature=ad66363cad5e609376029d4b3c388d2fbc691bc0addc9c6e364b04ae0a4c4e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

