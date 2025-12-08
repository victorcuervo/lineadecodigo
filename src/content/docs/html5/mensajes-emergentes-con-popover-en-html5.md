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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RBNMWLM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCanq8Y%2BVH6sI10kDXdavekVmF5ChloVcF0g3VFGKsSwQIhAOraCxKEVbd0siJMrd4fNC%2FBc5RGR1pferoylJnKScpqKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeyVpiZQKh2A5MEmUq3AP6eiPRIga3wuDmWf07cQFCvPeM7wyWsKEmw70qEMyFI2ruS7GbSACLvX%2FMLo%2FHwNKP%2BMH661jxbhtxDTH0y0XMnjOWNPpMbagyFeZ8QjbrylKfLS7z3w7f5aZ%2BUYRHfNR9M151IwYYLgHgG6%2BRoomwL3UmuIefS9SeUzZl%2F92zwpVNH0A80fcmm469vQBGoyUhf0%2F8XiKvxbjSwLhVWov9CrM6BEEVd0ud4mgfRC2Vt8vd5AdPHPnptcbeFTpF0HI2JLkUxW0P0rsVYn9E%2BdS1S3O%2FN8HOBxps6X%2FT1LXYcCiy%2BtwVs%2BHAHU8tR07VJ8%2Fvhq27T32dk9GVyXoQ8RSKwUp4FJ%2Bs7Mq6VugHxo%2Bw3MB5K3c9bCXTmJMXAOXNImR6OhTISnYovFfFw4%2FKqOnubFvq2HjKlI8DSw6ughXqdfMuvf8o%2FNc7%2BDyHOrTd%2BQCZgdCr03e0jVeRyk53HHCGuj6%2FQdvnASIS9S9nrX51%2Fnr8mLj6S1%2FUF3fJ3kf1w5enuRhsel5%2F5%2BBwz1pkrvpJRkd8TTY%2BqPvcQoetLeFhf9CP3hzp76gG2nFqXt3uzltZU1qhLkX1lB0uXqrP58vN1pi0ePs%2BwrF%2BFbu2pMEyqrWvttNJ4J7NoVSPkDCntNnJBjqkAarDrtl8%2F2Gud6aounRRo8JTe%2FUFwKU9lnP%2B8BQen1RyVe6tGV%2F4mrwZVOwhhapO5Rd7F1hxOxUWcFFZMsPBXtJRNeSPGUKsbjJ5UovNIeWNlcb8VR8WKg7tP8q6ODP6H52gZbEv%2B12%2BeyOyx2VDi99ixRtqDyB1WUL5WlqPND5F1Sqn7ZT9AIDrPdGTdG5yWx9lM6dIGSrjBOmV5%2FbUtWt9utYk&X-Amz-Signature=8c56163f831545f7a62a6ace32ed94971f9c342143960b3967744bb1462e2b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6QEAWAN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA30U1i%2B6gfZRlEm3iKawHAUbf2SfOyCUTQh2ivIEr%2FuAiEAmE2S%2F%2Bd%2BrgX2npIpKu3Fqp9ZAmYi7pgv4ZDauNMogxgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2JKT0vkPlXjT1eFCrcA4nZyHLcvNZIqsaPAcP9wEVxrqQ4kJBwPpEjCfZxgGr3%2F9SOPmloD0ENZ4Rdo6LBual8lPBqYLU%2F73H0B3YMQIrg3B4D3Ljw7%2FT6alMD4%2FDRe02%2FzXCFNGur1tVBPFs%2BoR5Ln9a%2BsDDAf1k4ipxrn%2FB0AyDU8SflT7daXhX6Ca9C%2FfWaahODuGukjcwMJAt2b3uSbKfAtJKZI4wa6%2FgWgzeviQ%2BWvTsHylrZhuoWXnYTeZAMY%2FRGwkLf4s5ijG2qJeW11YVrCSBbTerNa4NxDXwsGSYBUegX9bmcejCfzk4M71KgEZGzlKRa9FTTcHt1plTIITlgGkokx8254fImoum1FU%2F3B8UjZKi2VMWpNr4sYVUYz0CQ305gzPHpNEMxqsUdRKLRaNM8%2BnmdYMZngoBgwqKukJvTnkXP1SqOGpcJ0Qnovb8dSd9CFb%2BEZdxuhrPQbAD6lhBMRG79J9eKZX4UjplzelJQI8q038x0zBFp%2BVsPNC3%2Frf0pTFpn2Z7uxVUYO8fBCGzvuDnh9sDEitjDiStQ1PoSmkKAW%2BJTuOXZSnAt74I7QAYpi9SU0ErK6EfkO2ssRTsWBtBxiaBZOZnbUOzUbC4%2Bf6rHElHnPLtRwO0lQ4kfqRXz0LWWMM602ckGOqUBU9xQLorkJE2uRXddLV9OcNGzdohmzCjHulmKPAHdQ5l7WlXIzY76sjSdKIKDUHVWdRRsmkQu5DGHbzNKhWPl%2Fbs1xsyq9JsQ3m3zKKTdK2FoHFKQFoReZQsIytH5k2PnYvyiIC9DopQGrcgBxNLjXTbpAIWJUvXS71f9W9WF9dDkTtPimPulBVmZx4Wj3jYZc3W1jOfmDrlJvTXAi5cCp0%2FNjMqJ&X-Amz-Signature=20c6b8fae799b0afd89737947a4e19d2c1fd3ad8c22cff3d1038280a3abd11f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

