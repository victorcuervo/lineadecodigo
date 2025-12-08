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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCNNOVL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICN0pNhuRoXfqCkXKF5CBvCxLoGmOfZoyaDiHowcPTUNAiBROugX9TY8jb5ybl3Akv8MV%2FITX%2BDcB%2BTC%2F7pXMGbzwSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEJvBKWDBXTRESbfVKtwDDKpZT5pehoxis8emEY37CMvhgi6e%2BN2f4e5v3%2FMN5L%2FUgVCS9hgnSyuZtBg4n%2FLilne2VZ2i%2Fhxazyi2STpBJoDPjbv6ADv5JrttR%2BfQPN%2FuAlXUZOFtulFGlRs%2BpRUuRk%2F4nJYOJkhyY6HiL0qSh9zGvl8pmt%2F2a6HJPUsMrJOKf3ySzlQ0l7sUKf8z8vtJxWkLw%2FoEPtlE5C23jQ%2FjX0XZ%2FA%2FI5Qg2cTEO4fZeRl0b3zGcrUVGM6Ol4J58NZBopDrkdig856pbwRcf7opE6hZyFr8hFVfQUOzf9qxV49Dp%2FWtpPZ360oI0GUUAGQ82WNoFOc5LggA9rC673hyK5ny9ZQYRgQ4zrWRbQcMKfia%2FG7YN25kjR9J958dX%2FG5C4DeWtYfRb%2BN%2BH07pfRuY1ShGLmmzRJV6nPpZrUiFqX2TC7%2BXRqLJPC6KloqE6e17VjTMNNnmSbJYkENyAb6wtYdfLDyfG7vx7oOXsYMlLIisKjaVBq5MLrqBX73FT4uj4JH2OxjV99dpNA68zkutQGnO%2FCzEPXeMlr7VLG4ODRN%2FITD6JHaYYzFe2Ur5axjAX%2Fa0OKSvuUGxgV1O7VBFsxIM7O6f5Z%2Br7MTBftkjy38ib2Cz19k1yQrE9Fcw7%2FLayQY6pgGomt6%2FBuiNV15xFsoHUEXRqZEa8WempzefrAqE91OpU7HI52qyQjAuSmBKi07Ay5AaTwUL%2FsUpxNuyeKF%2FKO8PIsHqbBNrS9n1m3tXknzxw9WLfPw0ZHFFd%2FCNRqR%2FYKiJTRRxyofhnXBtaviCWs8AOR1YySmSww5gqO8DVICz75LEXycg3wa0xN2%2F4iS5ywhOD3%2BJ9Njv6bGjiLKViqsVe2Y2Q9iu&X-Amz-Signature=cb30b92618a3e512832a64f73924a17a1c6a2509c146153c0643ed09e9290010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZQODCF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbj8R1HJsywCMCtbhFItDz2L1a6CkVDmaC%2B4CmaUx6%2FAiEAnxBNz9Zy4QRgeeRS9j6ofFC2gEyfzSRQmJ4DnSwmo%2F8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdNIMlE%2FB%2FM1xNi4yrcAxQwP5pE0DWmzhM5CgTq0%2FFZ52qNxaaq13oqsRTZKxRY0Wx3hf7pxLvUEBUhvr2twCQuXGnzJlvR7mdOHNxYva10bqXWyOKs4mQq3LQBesHtde%2Flyt1B6RzDm%2Fv3hL9LO02kVIWeB51Dpf7T4HxTXltJoh73QxXQeVBRYfouS4PTSepfsbPsiE6MyHMQIb7tAbFjn4LgQW8lrkaZqwo%2Bn9VPSJn1BmiOk4CKENugefTJS1tHs%2BQrUhvC5di1PobWxQsKQW2ViTo5vL%2Fv2Nt9BKDE%2FDz3G3H04TOonPMLFVENxsniCOmCu6Nqh3b%2BwnTJes90PubMfGn2IeTjsHkc1BzTPR4FNVpgXcbG6c%2F1oSGsSd1Io%2BOgJLoRTWIhSgvhqx51R0O875GqwF7xrUN9bSGAd7Cw349PrR5PRbbwknPluJbeXAxJKWFvMER3%2Fss1eSIRw6xUfTsVV7jXqEOUOyMctr1ofBugDpYgflzh3WdEmjIzLIrAqrUxVcitGq0tGwSOR6fx8NvbI3OI0VcK4i4lnsG94rpaW%2F2huFD7BhW9Z0MPv0hatGy6r5zVvn4s4%2FwRRE%2BG4QW8gjZVCKbgU0Z%2Fjzn1Y9bWZm%2Fd22wBSmkEmZB4XlF7RzllQ%2Fc7MPby2skGOqUBdQmWhFCnsYsUVRf3MwQDZgQpe6TOHypp5x274KTG2%2FqVvoJHKFQ5AZDxtnlVdwtu5mfKkCWZUw3BQzfG3rXGPUEdd0TpV3d5fomeEsdqqS%2F9q3JBbP%2BZraseVLZWxlogcEdkQ73Jdq%2FBL0KKTgNiQW4K%2BVbW4X4gX07u8hgrWbZNM9c753nPgVsXIuLMmbQw4rq6d9%2FYKKP0KC70df%2F1VIjk8yTR&X-Amz-Signature=103a541e581d4ff89294ea5e9d64bf474cce029f8b3af78ebab918105f8b1f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

