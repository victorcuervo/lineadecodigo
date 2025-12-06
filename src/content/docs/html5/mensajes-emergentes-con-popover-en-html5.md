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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667GKW7B5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRqu%2FI9FoEhVaJD0fcIj%2F21O%2FNtfIPPG3jjqEYtV%2FoXwIgTl0DdcayVwvje9LNPDK9BjCbCvctgRPWyMM%2BNMZ9d4oq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN4ek4M4Fwjb0xfyiircA62Bw3BKibCpaze3cZ6%2FGtmoZswMsv37%2BWn8vW%2FCjd8PJ4wUUTaphIGaCymcRJHWADODYl2E3wkvsFiBeRC%2BKzPqwk6%2Bkizm7W7sLxgWxTtyUVV9HHmVTPCyPn1j75nP8%2F9EGkcc%2BfenjlxnNAI3CFf4ZmWgHipBZTsi53kmHEyQ0jgtPm34oJekfaB5acW%2BmQomOejF51r3e6yDuCRCJAZBRormmhCLpvZ6v1ZTcndOBlas211OVGvli7pMg0XHTlLDDSdTCHmcHqqUIaOWPqqE8zIBrmAA1%2FKD%2FDPUagm79VrQkRs68KPLUBVIPpdLjAh5Fr%2BZiIhKe9fVgsTrq4jKbn3gG4lTfVqbeS%2FkVfpl%2BvjRXG1lV0yAkua7lzmThhNpkrhdYmfeQTmL6uBhpGIeNTwkhcvnKR2FApZhJCw4KOZ1u3apUaMYSPugSmOY7xWdnC2shrHqTyPowOvJtazktqiw4HTvGFiJkmnbHMja9MmoVb1SJdd1uIDn1oDVDCHvMBgCFw%2BQmj6gqWZeh9QBAi%2FKioVz6Mf%2B8WBIWZkT7hE3oZTJq2I7aNu71jUiy7O2KsDgPh4qIxehmxP7C%2BafOC5kBwV%2B6NC0IxoWXYiq209Wky3VdWDh2ZMsMMfCzskGOqUBETLFmCvgm8dafThPBlQ8PRjjXhZ1F2OSONW3cbHzp4OpkGEKvb5UQD5N9101vX60cKzk1hBqabY%2FLeyyZXF4iZvT%2FlKBnjyLNh9%2BB60QDPEWKAoVHf%2FsqJOrJOfNr%2B9JMjMHTjitckGVOXDsNwylvn%2F6Ric0II2ti4dQixeLLOaTMxhcHxenvVftHfy5xCcARl5sRvwTzg0nIA5zCf2V%2FdbpqllL&X-Amz-Signature=e99529e070b0f9b94a4e0915ebd1f0da37a3784d63ac29cd7776b2fb1ae39022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633DRL5G2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvLu9gNemDXSU8psgdTAtQ3GKhHYYxVhjE1wvCsDkuHwIhAKVzCSo6QOHtTgUR7PQ5iXlLqp%2B%2BJYi2QLIxr0UZuUe4Kv8DCGwQABoMNjM3NDIzMTgzODA1IgyMTlUAIrlmbHnGwIMq3AMgFmpcUmadcwX%2F0u4eM9EBSvKUAs8UfW%2BFvZ%2F1vv3AERrCe5A%2FsjAzDpbPeFV%2FSJg1xi%2BYiI5mwpVY4SleZUar21XSzAN32On1LkQJpMAvQkUP0b3Q1C95Pwdnrfl%2FROqsYQc%2B%2F62QxsZ4ZrZ9n7XBIttxuo6gaW4wzYKT8ZzIFIBapeNnRoaeBvmt0oW39KOCoybdDLm1%2Ft9Hch84BKfN7AYAFKLlJ3FFE7jc7HdX91Ny79o4RLDCz7f6i%2BOEHe95c9vFqeZztYJDmAInZyCpXsHxpR6dhZ4QrN6IkK9DfH1f2Dr%2BgaCCzoWAVan0gp2YUNk6uEUOjFQTRghzDFjse0frzlA7s6LaMfdDCAWwbuzXT3QIpAAzeKk4J3yKC9mMr0z0Q4nmBSwspcqQaj2yC%2BgYO%2Bv4GrY8L10U49CC%2BrnxStmoUUza%2BRMQadLopH6KlcprQQAZxup3uaZdppiKEnSU%2BiJ%2BKekdqqnSr6F1EsKpc5mjU5d3L%2FzAjlTWQg0uAS6MeEwwewFRRDw1XEDaoW7nxJih6kWPfSQpMPDLG3L1YI6%2F%2BLkcSEM759iFQefH3axcMzNO%2Fs6ke0HFwOCUsBKJby%2Bf9Mz9ONBlnpxrhfPxcQT8U%2FmMZHWgjjCew87JBjqkAb2sfvuc5vfKt%2BTza5TZjA1Jx18LMdBQj4Sfgx141e0c7lspz71ySQ2Zjxa6eat6SWYftK9gAHGddaFHw9jS9Atb9W1kUeb7EsuVdq4yRT%2FaNN9%2BGSqg%2B1wpSbljzyD%2BB0PKWthlJrN804v72kHvksmi4xvJ3rfW8iuO6Bk4pqul3ZKeU0WDGKeOfL%2Bg8vAkLucEWxL340uND2UAwc3ZGZda0Ju8&X-Amz-Signature=fbb8a9c1737174c3b86aca35c3298e656a49b623330503aa3bc57d2bfd00b71f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

