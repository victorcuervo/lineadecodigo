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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466426XIYZS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCNno9Ms6ozlUIw9fIN%2FgdN8qMpBvEV35CJfCp%2By%2BVI4QIhALrtm35rablV%2FwEoM4ohvYEViDfkKwCJaeN7I%2Fk3jP6ZKv8DCDgQABoMNjM3NDIzMTgzODA1Igz1jf2Odvag2eBm6Kwq3ANk3AGqqeemd9tukjSCmymMtRir8uMJ%2ByGPddIK%2BC4d2qytldUhFKiQeIRKAPM665eWwb4Kpr0Ftq1jtZEswda%2Fd%2FqyOrnzOaVOU3pesI9aQhqRW8%2BrNwcmVKSuge7HFm30o3oe3wsTewnaiKN6rXLGXOisgMa2Y2lFz%2Fxmd2woxHmi2Skq8xuPlCPFZJ6ZRdPphKxW1G4hUk6pmmG2J%2Fit1YHgKQdl0AbrqERnqWP%2B9zp6Or%2FYjKFTwtbBzazhPVZ0eKXR7XKU%2Fq%2F531AC0%2FMWzyjZJZGnNCWG0r5MpQoOa5%2BOT2uNtDiEXgVuPgq%2BMNx7ORFSRV1PFEnhAOrIV4Ct1tx8SV1WfKRoe1wuKl97GR5cg2WU6KSPCwQl81zcqvn59E0XmbXtS55krm4JF%2Bj7E%2FFK62MALtlRvvRBxK%2FDFTF9hSgaDC%2FT8mWczcA9Z36om4e4s8rAJjtljyLh88ozRqY%2B1fYM16QRImlgiG%2BxftGX%2BZtCFDSDrdA16EHCgkYKd8g7fORKeXa1p6Ccmuh3fLX7FT3%2FxhmU3IARyfZjZahhcy9M65KaIYESuqQFOtM72I9wSbNbiLf1XxIEX84yb7I2OhalLCgiLHqHI2LdwOm%2F9%2B1o8LFRRPuO2TC%2B%2BMLJBjqkATXvnbzCe5Zv84iEu7E0oWacsqWgsDPrsug%2FRzAzZEned7bjRKWT%2BXX%2FWnEmqhZtSkWLBKSTpXIjtOb7ItCSPu5mtcBT5GKE6nvmOn5MY%2Buk5dnXtUgDbvDjFQtfgM0abglz7Kw8hx3LnWZ%2BNWUG1kygWj851YOjpR6H5B5P%2FkXTXcpbE53wu085nyhaXZ3UWv9PbmYadMFRJp6h8Zspc3eoKyiq&X-Amz-Signature=edefbc7244a75f83894688c8ad9a1b02612b50d3786485e1eb0f5049f9737825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZI64PWF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIG7DyYFefsd0SeFB62mNU34OFaP7%2FdIq4sHOQ2mYR3UyAiBjTlYFul8jeFw7KCatsT%2BkP3A%2F0zO%2BpbRdsinNs9TWHyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMTXdQKwe7NZeJQZn5KtwDmh02%2BByzQqbvGAmIfqj80KgxgntsG9jjFvLTUslDTLk6oPWDXy3xK7RvMNSwob%2FRS68V74BQLRoYYL3l5Uk1MPByz8AsYbT66DIVO%2BXfXa1xjv%2F8AGNfSgx0%2BcEQeG4CMiOM8LmbQfN8t%2FchoVz4M1QrTMCJq%2FeUtBlDyutf9rcPlCR9BAChMVTpKDyl9B4gn1ooAtYWk1MTKXx79H3xFkKjgHgFT5BwudK3GTpWOiYenRoJDaKl4NExzcDET%2FUPtpyXf6bZYtV5VjRbGCcEZYRMJqB7CiiW2%2FiWdao8D2TJLuvtGf%2B7dHk%2FyHn0Df83DHPx7WcVPJq81KQK6xDq8JdVH7nPzssu%2F%2FOSjCl0vC0H0Zu4neaAIE3%2FKxzNjbijPLH6rJJQAEcAVpkijWK3%2B19ln7QPdj%2BiZkSiLwdWiDmk8iicpbYtOSoxZZI2jv0LpClHqnkVFShHEfkfmqU7Kk4KSqvmHRA8eEruvLL5gVCYLwVM5qZGu8a4lP1ttJvMGGVA9sSJy9GVjNe2AOp8NFzrPD2wC2hfG%2F2qQJMPhl2Po5lvwzVKmVYHGg4Oh1GNszYIjlG3WstKxZ531NnEK16ofi2uT9O5WjmuneX9Go5KLYIyEMGioVTEea8w1PjCyQY6pgEo0MeTQ6ZdrdQgXuVA%2B8ayv4fAvQl%2FeedZSlN1iOt1tatAsmiR2UXK2pyY%2FuyXjazj8NEsthMpziGzQJaqgX2K%2FMKsQc9y4a10p9sREM3CIbOq6gqhjVldFwWQDSMniMySUcu7mTNWWzFthUypRbOxTzETfDH0ukOUXEHyV0wgeIuvUin72RVtIk7XklRnj2XWb0HTVSFYWSGXkbdAacBlGzlrRsjA&X-Amz-Signature=967c4d518b8b3c9fe6b234dc320e8f3a2573db2ebda8e772f9839ef49a10d8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

