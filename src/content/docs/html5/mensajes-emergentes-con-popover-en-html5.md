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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G5SMEXW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCSCsOgQXzt8IQE8ncQXOcZPs5297ghG66xTIg3VNg63AIhALr0Ay5IMbRAd%2FF%2F9SNdMHmF0OxzHS4eiIsE0hHjgXIiKv8DCD4QABoMNjM3NDIzMTgzODA1Igw73kiY7Nn3oF1WQuQq3ANN4%2FZ655Cv9rKolDCO9yiLJhqlNY6iDqT9IW%2FfQm7OeDsAHnTaDd0SpWyNnSHE6B%2FpxNYqzssnDWRfyaXxZqbv8fMt9Wvarek0PZrll90WNIVwCmXTNROboVxKNpIy2%2FWDj4klGaSq1hwdxWxsDZuAdYeoZ6%2BZJSNGpeL53F%2BAFBij1%2BQ0BVmLdW1i9tEYTGesydrp8H3axrwjv%2FPZWm4HsI1SrgfcLeHyQgxheCevBFIH%2BhmlG9iJDF11Z5XBxlEHgqlEY6b%2F3CWKmDG4FAUUYgOvsoKq%2BUR8eN%2FHktMs%2BrKnUMLIg%2FP6Q3yd5SxZQGK%2F%2BdJAPDhMiuiO1dgFaNb8p8gem%2FUR9M%2FXZZkS5q9rkVGVzhbUTLTfTkwXaXG%2F8mfGf%2Bn2MVRXIwfOXakToS0kOIbpFllj6gl5GLEHWOfc%2FKuwLxKtXOaHZJ3JfMl%2B5XPSPiMQgKgXwvA%2B0KiJaXaApBkxcRzFrR32UHo1m4PlTeKMm%2FM3bB2xcRueJdNLa1G8qqz6vgCE7InWaAJTYS8UXSBNFU1c%2BadrnlU1Ox0H61Nr1V4wvZfel%2F3vr8rOUe6SmEUivS%2B3iWv3UjbIojTEAUJI%2BG1ZzdQmR3jDd9ghNibJX%2FGfxFF1FreLVDC5rcTJBjqkAfjskWdjc29sf0aEPqKIrHgi%2B1dKQSUwMsbMPhuNtR0bSo%2ByuOI%2B96bqSo%2BG078dt34CgIQ55%2B2QXM0ZI6dBLWqmwofRphXETH0p3mZ6UENBQVrzwkMSaqWiPC2CQD9p15mqGKcUz3HYurUAsQ5rn1%2BOveciUqWZWppN4SuYqyx5AmiusidvTCIEsDySp7wf5U3FxzKFE2p3XzAgmtlcC7GtIHJ9&X-Amz-Signature=a8001d7e8c08b13a28e5208c6fb24e7bfb23296d634bddc938aa9fb82158e931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q3PXHWQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDGunx7ufMvusisigNqxPGvFvIdq806PME8RPoMB5PCgAIgNka0CIDkaHX6EOQXmigub%2BxDRrOJFJcjDw46vbkAg%2FUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGaiNojGWfQFSJW5JCrcA8pDJeoZRN5yG3fXg2LOhXPUen6u0dcglR644tUe9ViBO502RyoEtX9Slt9W1bKBFSuB5iZoNtHBo0iI8U0onUqhaAzc3%2F0vSw%2FHIsG4ceWRaNdgy8XIXhrZ4%2F42sYfFTgB3mk1GIEsDl%2FVUfxCJ5TtTvCx2%2F%2BPiNAm1C%2B90xyeIykfa1iVUhXt%2BJCMqa%2FQRhlTSrmub9TPSfVlxet4FT23e8xNXtmGeHGSkyeg500AEhx7r9bumUZKND%2BnA%2Bkko0WP9sdjoedTBl09rkbOLrKCe2W3A0nwaDy9jWhfDoOYU5AK9I%2BjaJE%2BZh1nmaRH8X2d%2BpaaS66qtA33urN%2B%2FZx0gamMN0gCYKVxp446InloeXqNoqkyoFbKU8uHaImlKM1SznB8uyMA6x41gO5F7RYA79mxUWQwKSwSJvMeBUy4LJNsZuYsmf7bduMkCTpIpOqCdz2XfrhTlhCahYM%2BnXqWvNaniRhy9%2F%2FMm%2Fdts9fuu0501Pv1zmeiW4aovucBvXsXdqg8vJ%2FgYEkG%2BdzFNZXJp9lFKwZq35H9lR%2BAYEdTgtHXXhjRs5VcgUh3gBgoSWDH2l8IA3%2FJoBd26cHilnJbOU3rtj7kBTsFuvogG9si1FH7YF5ASbUQx85giMOatxMkGOqUBRvmjc2P6JQEuDUSLsS2oK4sXr0nTbLO2rSt12ORLNJaJHjKpWLrq%2BVmKoRS5ozkUtBKL5ZPRtPB6C3VvWCsqGxZmTCq8QO3QoA%2F44b9Gt3KfonMrVCb4r0ea8MoEU6%2BhZQmtrgnYA6CAiuCFbFUdfAEIfF2Iyc2m12E0Sjt0fJ9jqe3O3ucxg5nr1EWJwFFdgDEj4%2BmZ6X1F7bp8rltwZZ6vMSlT&X-Amz-Signature=b533ad0bc0df236bbde8bc08d5604b0235002fdecc48731a08cd7beeae85ed6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

