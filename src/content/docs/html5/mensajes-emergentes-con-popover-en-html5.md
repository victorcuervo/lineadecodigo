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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RX4RNI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMwgGD6yJsZR6v%2FsUITQ6LT4IAcGCMHL%2F00EMAaeC44AiAyaT2x%2FhWE%2BvUEbP7VIUaa804nmd7bYTaPpvIZheMvBir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMKxmc7KGSHutcKnC5KtwDjODPrhQ0z1awnbUKt3FBBQHgjv7JKAdO9tIl2uwOMnMOr6Lm%2F9aKefiOwXco1d8IueVSBR%2Fh3H3LzwBe4MkWwRB8Cu9i2q1z5yWHpZ%2BUHoN%2Fe1Y2YsnQFJslPsM9xUMSEJ7WRUUU8NsmVEpKTabz2RhYVZhFIoISIHObDbOscgFPTSsbY66u3F%2BaqjLxsJAT0HLZ36EHjhm9EKgXqFcGGgAojJ0hF0zuEvufiHfUb%2Ft7BWUht0Q9bfxQR94gprknaxv%2B93SqtFHn5T%2B1uRW1zbNV1iHByusa65Soyz6Q514msedZ1yBgsaGpa1r%2BPFBsu3YxoWDmezEPkrtRznpmzTK7kTJk4wlfLB4N%2BgIjz77yzvSie%2FtgQaE4HHn3PcroIxykJ%2B7zHp1kGuFsQxIXNr7wfXlxcGUt45VwbS%2BqSpR%2FQpphG1UxgHZ9fWl1UKYeznwE%2BGZg022Y23J8SaFNMB18BIH8Em1tWJlGjMkzcMBP7%2B2dVV55Y2L%2FWuoLX9SZk3oXK7RapQao6VxAlBO5UMIszTRtOiNvQ4Mp9s8PuApVDZaYO%2BrqbSH2IwbUGGSSXOTOHJFtWJoXa0LrckA5wI%2B9JiecmoDqYoEP5irge8AnAyEryh8M3Sw%2B9U4wq57PyQY6pgHJ5ZrqmKda5n%2FmARjaiCaawWcWKHZwchToMePglxE6mPAzLjiJC0eDJjRnKmQpXRAVgX6axV5u6dioAzMLNUbDkJNgQY%2FLCKRD4QGWvTvQNUrXewK1LbWcjQdzNaKXMgbbj1nzxaxP1uP2wyikcSir04B6HdYMnz9W12YaigyJxTAc70r0tp57NekizTbX%2BSfa%2BbbMdMd9L%2FiunBZhk9W5HmSl%2BWpG&X-Amz-Signature=e98930b41f427bf0e8a484d505ad1342f671f139706c07bf8204a2b34372c4ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQARRISK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD01ePrjzO4DkTS7%2FR6fuwv9hieKYGWQhfxCYjPz91yewIgYwbnY1HW1ilUh1RnjRAcpOSBfTVNUCrV2aHpeN0VF7kq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNoFLZQbq79UE9F2LyrcA3OBmKMq8f1FLfmsSYREJ7fuDjTojfGL7f1pCCDYfFUAP45%2FOEctfbJh6GXCywns4Lm9%2FjMWMMH1BozCFwN42SzMlB2hq3RjyIF9mCHecRCo%2F%2FiqKt7eKOJFKZXe1KFcGFzfMd7PmUw%2F9mt4CJin1RpPrMuFyazqKRPqt4IoUiblXX7jaFmK3CzUpZ8MjqhyNZVqyvqtG10a%2FgKERKOO7muNMApsS%2FZAH%2BDlBZnC6tNYRu0qyTw1ZAuAWIhJIF%2BsAfm7EPCa36uPsDUDIj5DUGaxjogi20fQz129EUSvFQrr2TzqZJa%2FwIkD5CCcrnta9gNr%2F8g%2BVksWDVY0lVvHRbnOr%2F0QWEqrx0kuBdJKMah5xu88nCq1R6socC%2FFBnPGIdXV5z%2Fc0xG62okDtfBeTYTr0g4YFnzf4EjRfIkNsTY1ZdPnnSUzwKj022wSxgSI4mRQGLTEVjiAYx3HaZx0c9GEiv7KxeARKqB%2BiVio9fRH7x1B7JKpOM3rC1fMjh6Xt1TZbu3BbTQMakpx%2FScdSFqO%2Ffiv99GmbTNSR3VtWL%2BpxN6t99yfvZLZYQrnHYjxdg7xTlgnk7sT0I6Y14GMpPCX0Z1d%2FhjZofDnzgZ1OOJQJW3%2FxfciGpZBBtEIMOOez8kGOqUBFRLqGhZJ9iZYE1peASDPlFT2qoXCfR0sWCLixJM6W%2BDrhxhROOFFGGp9FXeDmnz2DnzINdWcXsTl4j7so6W5VGCrYSkHgYQS7SniA9CndZChmYgEdYueMOj%2BCeCZqPygEA5xqXm3ZPqXyBYwEGpvbwcZ%2BksT0IW6Dn1TfBp3K5Pmly1932zyK1hLcPYf5NAGRk02%2BXSsQi7N2p7VZZ6Nxo%2F6W9F5&X-Amz-Signature=2a902fbed1a7f2acaee7d0571de7c6f9485d9d316b0f73090d7a63fe6ef073f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

