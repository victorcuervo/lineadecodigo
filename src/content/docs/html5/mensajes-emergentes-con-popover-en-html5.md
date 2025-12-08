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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTUWJ4H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAcNZHE2VoLZHnIGEmVtQgrPuUbpungtgq18IcexY7SAIhAI4u78YQbQdUkWBi4Q5XYKcHwJ7eMQK2TC28M7Ziu0aqKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgxnNswJcLQsm8lMoq3AMVlmIqp6SpG5%2B9NRruuetVUcOEE55ez6GnLNfKE25rq1GSb9DNQW%2BoM5%2B3yt71QetdZYRBIW77xpjh8qzEBWR%2BFnvDfzneivP4sKisBlwvQcZ2F%2Fd%2F9gnSHILJDWPUSujnn9Fejgww02DCF2tltw%2FvTX4rrwgOYdAlc3doXnLTua8o22c3CExKGF2Zt1ECX%2FtPh1oyt%2F9kHZwq32aN%2FEXNeGUv7MhzerR4ofWwvngzMH%2BfrHaOjF4vslWiwUSWvxRBrxVCVL7vCCYs0FxgwMCOq4IQBJ4p12brYVMa%2BueyUTWfgUDEHm4%2BAqegfij9Hm5Xobub2tntCgJRXIT0UKUrmvbbZZBW0hDxFLyOW6u9DTuV1Zs8OqmWPOAtgMCb63j88oWICAjBpA8N2mlRwyd8xzWl3dAiY%2F5jOrF12hoKOCOMeA%2FkDjV3KbEmnKTBz1OBDId4BYgdMnB6mgKnymLT6L5oy0DJBwvfp%2F9xYAPlt%2FkmczAAh6Z7yUCoi5LNtVd1ZuIU2PmB5%2FrRUCtQil%2BhfiSAPsTZtQP0upynUkV4D678rSQTDSlZFQfjPBrR5mIu4YxLubYv34kAJMjeevRtoDq5ah%2BKUIpxB5VQsP2rbM18PYm6xCR%2B163M6DC179jJBjqkAYWtj45kAeDymIZ8e%2Bd8IObHRUvy3UCFZn46BGBRvL%2FMgvboVHEgtQ%2FZuRsAvR1NVHceP%2FzhhOr7szQkTiBh1xtYFR5BnYfsA9NglzxGIKw6XDq5KhjG9VGiHvQtzEQoloW2CCIfg0fRjm4IMst%2FrfTp9%2BS8HTFw9wO693LtpbJB4Yto9ggHDeCx9pgEdjTM4Xqp8ZGNrwJtfB%2BAcQ2S17IaY6EL&X-Amz-Signature=44516abcc6a2698c9b0440bceaa7bb3deca5c8206aa1f943217dd2ba069bfaaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFJ5YIL2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtw%2BST%2BOuspV1gmv2aLJdYw4hunf0yR0LOPBJ8Rq95XAIhAKcOR7luC5L%2FRffSNPCk5XNkc9evZdve%2BECWEWjatmWpKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkHYB2%2B4LOF1WP1Pkq3AN4vR3lGGzBDmghR6qjtWqEbP4pr0062nyJmKwAGwZJgFA6EumPZtxiFNRz%2FSk7YWfT%2BHzncr69cDIWddJ9plDEUr5xW4ZOudBpdWfgkFnxBEHCF96MGHZlG4fCN%2BYsJ2Qp1l1ECFi3O1TQEoDPdjs8Wd%2FgAkJfIQUuU7Ig4YBAgqrtxdZjRMLIHv2zSExSBuKUtOGE6sY6ODCpml8YzRkcJI3b1ZMXslVMlU4RywtP1V18hgpcyf13DfPDT5qaV6RtC9sEXTdUfJEYIuOMzNF7MmK01Ce1wNmAmDke5DkJJtwcVCV6acNZ6EGKh6NtSZ6PjZFg0JSJ9%2F3IBMljUBpk5D8vzHAd%2FXG%2F81utsOpH7fYg5VDY5M8L9TnxAJfkAhxtoq8XxTHtvr8wEEuBt0RebmKtHVBQu7TOVShbRzOU2zjGuJUJOIscDuUCnTDBO%2Bf8%2BWk%2BtZ4OUd2SM%2BtljQ1d2CKxjdiNL275tvWMkgwLtHX4ZZwxIKBqRHlXdHTDJ%2F9bmirEq99AVC8UuWWeC0RwN2IkD32UV%2FUod5m8pFrTphxXKvGf1xbI5r2N4FB%2BVves3sV4W305Do7mx5izl3ia6AnLnPeOqAGCdeNsczMd1801ovLIztb7co07KzCq7tjJBjqkAXyka0UOS1OIE04PoEFRvvzxXV7cftUrUeIuowY6ivPs2C%2FWAKR7at%2FUNFPOs%2Bg4TqB014%2BlnVOTI3wZaaVL%2BNgYv%2FIfjmLSsIBI9lB47XAv6Mk%2BpZ6fZVteJjFMbdY7C57r3BO4TPyHhJ2lqCQePnSDyoLH5Ci1lhcTb2%2Fj5SW%2BoMlm7UdX9anZHlHXPBGJgWi1jGxO4s4D9QtLb%2FOmj%2BZZtOGw&X-Amz-Signature=abc19551ffe5ff4d68c7d86c6eb65ad7027e239a485def18b102762af6c35e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

