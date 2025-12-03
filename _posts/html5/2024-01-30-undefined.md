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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STHYY7EP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHlvHjNh4O90Zb0N0pIgh0NVSbz69bQDcM6RhOJTGXlPAiBV51Q%2BZzK1NLZaigKkNbKxYhj0wzsNkA7SySCdWUGSNir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMR9GUvfGSuEFMnTgfKtwDmgEzfR%2F7p5jZxeL0Y6yV%2B9bMQv9gHl%2FQmOKZCYhVplxubZcLKDYGFXx%2FLLzK2iEjcWyzjGNy%2Fx1gAIAzSNK7ulPCFlvvgzI0qY%2F8ZeFqv2CIT784ygXPDMjePAuuMDIUp90D44rike2LgxBFGG4yRaJgOjw2xiTBsW5%2FoN%2F7mrDV3LTw3fJ%2FvyZkqgQmxLJajIIl4TtlDVKQTBUasxWLhAKHSPOsatyzd%2BHC1gmobwBSYmNuEkzJv5UDsRCpjUcCbh2L7yxaVWq8Irg6EVTqVvgaK%2FHsaeHeb%2Bm6PgP09LZilRqhBzoNOQ2QjdCtERQt%2Fx0%2FBZooiUta%2FbK%2BeIxVxQ3PC5CdRNZMJPcRDzrmNeWkNkBcEHicGnyFM3W194Dy70jKrq2xH9iItdCqD%2Ba6NfnkutAKW77SBcxId%2BEtnnOsQrRPNXbcrjJS4ZPj8JAU7zP3iLLssOykxCXEnVL2e76m63XQiRWK7hl9klomuE8JyPCB%2BgNTYiIe82nl%2BCpZBgYzPb5nlco6dAhQ2wLkLjLmzKybUs%2FR5v8GF%2F53DeMVVUmqzUjlHltZFM3yku2F7lknJ%2FjFSWPuwdclMKODZ1suY4u0KPXlVOeb%2BD77DVjD9GhnSroIpjqukPAwsLm%2FyQY6pgECdECvaSARWItt6KZe1FvZlwKQvQjrbsTw0c11sUDk3mletFBfwr43Wn2PoDFp%2BVh9xxiM3lwG6Hh0iKH%2BshjDwNgQyL%2F0TEzg661IxNb0VwqQ%2BU4PmgiL0nABSjMzh5gNajREWmo1xJdEAojlyfmTjw5gHHpt%2FcKLjNtQls7Am8ZbhALwfoE5Fr2Ndcr%2BxD4G7dwZF6ZAtMWI%2BTzH2rSW7th3sKOG&X-Amz-Signature=28966a55b981cfc174e64e932d9c14caa90b44a1573efb2ed1a2d2054bd3e07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3DDYD2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDOyL4g8Z8rB1rztFGrDvTu2gnQ6HJ4rVmKAYeuAyFLrQIhAI1Ezz%2B1iZKln1WIRHxKVDIwMceeJjCMvC5ONGhbJXa%2BKv8DCCgQABoMNjM3NDIzMTgzODA1IgwwJbTd6vKcXhNeAuQq3APsQSZXZG2pWBrpSh88fAhZHrJUMsNQcB7aNiEcmQNmkEpHQOs1tx587snuxRGoXvMtx4sROwXBz7KZEOuQYRw8TdM%2BRwP4p48A3XzIPqFrU0NGGocN7dXVtmr0U8vsBXUIeb8n5y2tsgZC5AQHXcbCOHJOWVswGXJacYUlysAj31cPQQ4MgXyho1iAXt9NKM10ihjA5BrZ%2FY6voRVgetT1O3npNVl9kvHkLIGMKy75Kdm2N4yL%2FZh89VDs6rhcdQpbHILWwSUH%2Bth3YZHHbA%2FQS53bOLxJYzWhdlK%2FztvKk0e%2BrrX4k7PyMBrR49jNkiyYgA56zjZ4WpNMWd%2FFDu7vazf6dXqP7i2%2BQ%2FuVmKlHSf7%2FnNh2pkPfn9RaXsyvG5sMf8%2BXHvQQ0zy8wCn97%2Fms2I4tlx01h11rw0SbBq%2FNOiXdufzL07dvs0RtfS98xzeM7wI9hGJxT49vqtUwxayxK%2FdMKzFTMI%2Bb9BN4PJOOgsVhey70gKojUVJbIR31YbSj%2Bo1YlmFXLzzu7G%2BMt%2FbGAeNtQuM4E9xG6EW5V9RZojGNBW2pTGoM3HYxoDWVBTAS%2B8AgQDY1p31ZKF2yhxMrn5a%2FnaQzef%2FBAs0imHNt7SAAgL5A4qcRWxQZvzCsur%2FJBjqkAYGN%2FfDovKpt4wp%2FQ3Y3UILm0PtP5hAxHBTiFAA2%2Bp0dhvg4lkX3cpjwK84JtXpdhXVbWg5wSPOaxH7e%2B1V0SpTNerVR2mQErREICkYvTuJnco82o%2BSjg%2Byr34nWF%2F98upB9D015Wcl52mnGEOsQNeG0PqiZ93aznqNey9973OBiZV8Ps2eU8jLQzeWpffdsBy%2BvQDPlYTGfB%2F2oZWz6vb1GyQB6&X-Amz-Signature=f59e7fd6ddd0fca6bb9c2b767dcd9a2a7473f23438b52d8e88361084f59b4792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

