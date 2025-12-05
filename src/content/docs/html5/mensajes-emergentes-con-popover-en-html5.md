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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ6E666C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFqI7nHGM5D68etsy8uErmznj8ApslqTVphUpkx4wN3AiAxPH5ST0pzrThd7843Ev4prjq5QufkHdgkZaZQiSPsVSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMMj02X2wG8Y9un6RMKtwDCWUYoK6ZTSZFG8ggzJuXpipXdz29SVcE0UeyDpUO6SKUcFBej8DhV7efrUs1IScprUzxVvtN71rziqF3dqLi7gBPkoZOo0obtxMGcbZIXkmaSndGIlC6ZPdESxXYbNOD7notKyhpHXrZTVwkCr1x9jw1DSgvda38OVZk%2BGr8dUwuQI4km83nNTn%2Bw3dCH7ktNz%2FFq2%2FEZwUSb6iWgq4Zez6wnohvpK9H9jQP0ldVvfgFhmbN52GfHac%2FzRCa7lnjdajWmC9FXFdbzoqmpvvHJv5x%2FiasvmiCyQ2liJ8yiOVhqH0IpWekzi0Iln%2FdjQz%2F9NRPWSI4RK%2B5yId3cZZX5TtqjbRM7kAvCXiV1CfIPjsblsvjUI3UoTIwTl15RkiywELgfCkrpRWRX9lGKMwEgfL5c72uWWhIHcXn%2Fy4L5HWCQwlEhVAcoorzT2m3aCW4eq24K5KAcsMxg7vqdv3ghjo3cq%2BUMe2Vle0Y4geKM1W1GtwJ2IBjNrCxA5Ag7t19oLBqA9%2BaOa40LuaUbiVUb%2Bp0nRWMrntJNAiXMLBqs5m%2BSSFrtecrsaumblW0J%2B15muLyd5wM70CDi4Qq2LwomQVeY%2F6LeHPjlMVLWjPT4kqjXntMgmB1UhIbJ6kwxIfNyQY6pgHCdEo1ZlkREYw6yAAd8Ca9Fz32kHq8GyLKTm6bjT40pn%2BKWwntsuFiCuyZkrbbHRdBqZMAL7Z573WV0egYTwNdRZrsvdrqRoztD%2BdiXK%2F%2FNNayXv0wL%2FLLmRlmpJ7Gwbb%2BdkVIayfknCEnnedQNBGCoLPSk4FNoOZy4D2t08ULbq2Aiq76uC3koTI0aed%2Fk8qXqTXFAdtlmELEYehExFY%2FIZfPrJo%2B&X-Amz-Signature=a0b099c620c2f62ea0cdb1983b7b83cf3c6c4cbf9398a31b40db88eaf9174058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N2TIZSN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvFb4xiJHDLBQa47j%2FH08fDXjSVTk3XE91suvf5wB0FgIgJtcDPzTgEWUfK1Z06MO9B5e5LakLR13dS6WJbw98q8Eq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGrwGm6UjD5KjikuGyrcA%2BiIdiJDwQXff1Zo%2Ft7GrczZd%2F4X0LkPmhHbiaDlLs2eAwH9GLaYQ%2Fcv2KUoU0K50jYnDWmqtsx8EtrAuKiX9cygpsrE03r%2FD1BwbF%2BSiCmy6D69UgdBRsPr7v222tcN4MNBYqGJ39Y%2F6Qs6JbP0MCD1oeYbfI%2BwQOGHlhgs%2BLGiQGGdjacoYfvB3azYDpCwoZOb6uiyX%2FkwBnsrNPMrlaln9zfB2hlAo31JDRryJazO01zZHz1e%2BuOJ7nc3x8mhKyyE0WZlDt%2Bngp5gF0m%2FZwO%2BalcvDjPASD7boRVz7sFqpHu2tjg%2FmZ4xeuWmOV3k86XB46ZX6O%2Bm%2BWWwlpXPNBcCv8W7lo1jcFUtOjFJ0Kmbxec5%2Fm9wnqt%2FszTcN1tRrDn7uovh7DalysTEcaHqYQ2jHKMxYpoLWp%2B70YwEYEDNRthAx8xRterfYLJ8ItBxus5w5%2Fz8qIBGA6cb3HyB2JevfKm%2B9Nxu6RQiAagoU3UlM9W%2Bq1F6y5hlatUgFatDJ275Ds3jfTcvV4v67IbKvWLZfTgbWYpG%2FNZDSOzUQbMGjh9e3ybKUvKvjzLS6039UfJ87Y0HgeShgUWTFl10T%2Bmp35uG4FzT%2BnK4rJGmog8tx210Jruwvz5eqPWoMMuazckGOqUB86WatEGjKq1l7i%2FtAdHGQOs3XXwxLVq9XIzmtlPtaV2mioIlTjKRsp6CYsMenh2I%2FyOslPTPk9UqxFAJSdUsO4%2BbrJTadY12KYfGIHCZtvFfI7ABVdBkwDOtOOANT7%2B88%2B42HBLVwyL84R9cCOF2bwuqHUyeV2xikS2H%2BgEgdxcWdaFCmbKaDhSaF2zuh%2BZK5tMJMksCNS4ysy1aRSxJenrz1qZI&X-Amz-Signature=c0643fa320393c29f75c24e96d6e3e86f3eaf45194d9ecf5c27c95d7dba2a7ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

