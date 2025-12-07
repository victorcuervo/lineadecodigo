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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TDBFB3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7f7MOSTp2SFcGKmmQqkUsuZyefnIbr6qR2111UIb8OQIgXahqh%2Fd7%2F1kGNjY2pYiKidrx9NZEqxdJOTjJ3to7NVYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4BPV7kYl5SRloSQyrcA6MdcEbFzbTdoex5CAQOS5jxjTdmEO5uG16UiaG2M7q%2BenKez5DBXwi4ScAUVNMGmjkbvBgp3sPXsltKojdAj%2FQNBR%2BITyTYhiHH8NfllzZHHBrKPNOHmjiEBY9efQHPlhdTOdRwTEwLtf0LmBu%2Fh5o%2BA8mhayjL4YlK2oJdeI4%2FM%2BU7sSD6NB2AFB5aGeUEJCPe%2Fbg%2Fc9ry8zmVNL1aBqrf5gb9ncmytdto9Y7svKFaz797XhGp5zMdDazK6wJa661yDlwDKZdhgLCyUPXs8kiIoRet9lEvFfWFf3uYyHHdRnpPKZOtfct903L4LIWpDVZ9Pe81lJUKNjMJAgHZbbNoqAAPaRd8R6eUXNlOZbZUcywozCuZZOlhngAHQBfKKGcTL5wXyEwaTALOvuprRmT6D%2BANc7qVBijV0zsfC2yLpQDJKXVmyXSKpopo%2BNvVa1J1ax9KSjWtlM0lifI32R7eIx%2BCZ3yHly4liLmD7m0nGauFgadCo1YVAWItmeCIRI3UzXtMAuc%2ByhWBLmZ7f4t1NWaGX44MTYHX%2BNm4mxQlMfinpgGeL72RbrbuOxCSnYwht9ebKEGFtOsmc0p0Z4VDA1zHNqY34BYZXdo0KaCvYrkuNSf%2FJTkr6jDZMOCa1ckGOqUBTYm9r6zmXJfCsWSef403Zyl%2Bn7BGE4Y83nGVeoTBMK8aF2z0MJeKfAlRIX1nOEausqfCJJE5o0zzV6PkvKYPylXIqp31IzMBkwS3EwkQTZkqPjwYvzdpkzn5wNAVuPagG5YHA408yOdirXxug5fUslCorrEP2IVYRH1Ym1x3khFQgVCBHmCka%2BL48q08aVNdLDyLcHrH%2BujOs%2FMniwt%2B3LAtdB5V&X-Amz-Signature=92f7ebbe413c850c1a8062e61ada420f894948fad95d2ab319cdd162f2eee974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT5K3QC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmXwORVUKS0niN3d6ehcUWQceL%2FdLt0jaYzKPp2TYgvAiAozukLZRGqH2T76%2BE6fm7ahP%2BExSVkhkYFhiiQeBDr4SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGrS7H9gkCfRCCq7QKtwDI0TQ1LvD78zehE%2F%2BWKA84qXilY4gNq0zfSfRp%2FXEeZPxuNs86M%2FwLU2HnQKxvhUefwCBGpDaO2s42rKsxCSW0us5amG9RodNOEbLl6rr%2BlP3NzNjCIZlxLA2GNpyb2LVPnm1VFR4qnJWl3i9uYm%2F0gTqP%2FEwHsRk2SPfswV5GWE2Hd32yasyBtbiw4GBgdqKMrVy8%2BHzp1LHy8SkoGDIl%2BHFBqr%2BQ0%2FO5HDJnbeK0r44o%2FxmZhJm9y2DUeNC036ot2IqcFvfeoleJXr07BDa6IpPdLI5vZo78pvkDMFGODSSEo2TIcqnypB4Rdi3b1KIuIoZqABNym5UButTL3cII%2FZK6aWntcaI7lKd7fUG5EpPtYzzcNZKEO2XZ7v%2BXcgTudSEOOKnHN92uDI6xbmt%2F16pleCIwEZypis%2B5olQhNmVr9uWzjjAIyNDNR%2BgnhM%2Fe69ktJar%2FeprMj6zQYQsxO5lH4Sv2eaq%2Fcp3hwBgLcuu2v7R%2F%2B27G9e4wV93rbFcsjQgv%2BW90H0bhMOivI9CrMmvQ7t3mS9r%2BIXXdK7RcJ2O%2BvwC8LjE5yxJCcibNeErNwgUFmkh8yX3sIyfcD6cEA8sWSfal%2BE%2FPIotmAQA0k%2FTRLQcBl4gy6G8cf8wzJrVyQY6pgG8xXohO9IL0LTaDSv8051yIZnVWqs1uHs92KLyxtu5Ef2v1Ehs0mItKwtJaiBlOBF9VrHXIKQNpVj6Nhyu5nWfDP%2B6pHiZq542SlLyJzpsW3Qt8GyiJJ3b%2BYnZlB3nZ6c01gbQjtS%2FzJks%2BRx8L7mlK%2BHV6%2BxuiGr8t%2F2XFyYmK6LypeNJda36dQL5BQEWISxX53YqnxoxP6Ecthfk6h02T8icg8ch&X-Amz-Signature=624383cf1a19e5ab4f9fd6ba4ca895338dd9271e46268190fa0ae43c679f924b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

