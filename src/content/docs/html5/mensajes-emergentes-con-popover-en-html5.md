---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QUY3HSM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC7HmtrKyHksJDYa6bYWEVnBlz%2B6CmY23jak9UXrgB%2FqQIgV%2FJHUWpq6UpUX3ebyqc5LEwMBLsQvBxlJE3LHxemy6Eq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAr%2B9tpH6BWPv8CSGSrcA%2FU0qrJ6EQp5t%2FEH4vjJ9DDkwbXM8BxFPA1e4IBnTL7eiDoFy4RuBgUp8dEpDDaCMe0h4q%2Fc42%2FjAQCdY1DX1AQAGU%2Bfs4eOZ3ZoLoUfoh9PMvdE%2Bw1hJhngOgO1QXXHZcujN8EyHMAyW9HwXK92fo6PFLhMUhOQPDUemShX6jMaPp1Y1hsPDFtV2%2B5BJJUdGg6oTXGRTzS%2BNe4pOcWcYpL%2BFg0GZYpvDGs0XthBk2s8MUGxMKTlt29IyLfYhhDPfsIj0E2wWPdrFSLfNqQE6X5KCDOAmlQ2GBX9%2FoywoxFVbw9ucEjc3rQBSR2hpSamh4QQnBvu5quFWNQIDMsFuO1Z8CBWKx6FWgrurBzUMxJgY5GucnL4QvlFhJN%2FBm6rtFg531rdJt9FQ%2B%2BgNXKjvjbsWZpYAQcZd4NkvNVuZMJkg3acB2orBRuddu6RwvBo0wmc%2Fb%2B6ZAv9tSOjBOiscZpNcAV7w3ZQNWIxpETzs8ey9IjC6NX2ZqM4lhein5oQ9yd4526dSslSibdCHYFpJmqsWwfVm9yqpv6dV4EKqY%2FwMyiCTWcfl1ax9SolU5p80thkUAGQ%2FCEJhEjf0Q5ClrbA9%2BVmBQX3a6YVC7ffpJ5yAgUZyzLVko7NqB7kMLu9wskGOqUBCnH5%2BC53%2BAOal2uL0sQtUKk80mixcGN1%2BVNLJiHjCoL7%2BThIsFc%2B3c5xjSIsqPcHVuLCRpoGIF%2BmoXj7oTh5gRjyKuIRet8CiYGCLwRibE5WHSLjmGLOE3070xw3Uu4l7tgk%2FIHXwZniJb9dWH240YgKMIazhJI7kdkVu8SEPmTn%2B5y80V8gcnbt%2F5XO88PRIm3vVcZQ30F2CVFhCQLIorA8erGd&X-Amz-Signature=d4432bf13166a047f95d34d681e93841a2a8ef104fb475aed2ded5cc24f0cf5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZM5ZXQ2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC81QkBetbsX4xpBOfutlIqbdIln6yjqtkN%2BwRpjsqIngIhAJmmpi1qBQ6xKAzuo5LrjvVzR%2Fe4SskHEwptyJBAGXWYKv8DCDYQABoMNjM3NDIzMTgzODA1Igz0wpJpg1dv1ugkpJcq3AOcHvDORbhHiIUojkT9pstjKplkZRp2rvFCSBAL3TV96zdCGKEKwU2wuVxJgu5z5IT586cJqSwC8Gj2o%2BhYQ4TQ1ZaTNuYJgjdGT71ENvROdF5WaZfwqa25kVWNPX%2BSn0hZ6vPQmIrwFv6aR1ZBhdsKlUar9HrE%2FfTqYVvOdL7LZU0frqxTkFfc5vGkpuGrWcosuRIszvXIPvbHHJ69y2ecvh8qcyN65qOA%2F00b2kORrzGqb9MjHKYSycldFh9ZXH1gW44Cjv%2Fo5yX%2BDn3fR0Ld8nOPMdTkVW0Ps4M1urLvn1uQf3nCTGl17zrCNw%2Bx4C6kIF7veGySWsvhXXEPbcz4Hr9ztSap8%2FxnPchFUDX9IbjqLAdepeoRF3fGFTBDGVHL68wKbqNlpZGfaJuFg9Ey47KVEBm5qreFwZYEMb0dwJ5ZPcwwSGAp5PpOAUTobQOlIIU%2FUqKdxIOKscR%2B3VSFLiyRMKaMhTQxKJ3MHdpxsX4g11CGwdWy%2BeLf5xyhQzverO6OsEcDMybtcg2w7t1wLPKE9W09Pb0Jisvc5s23y4UZwliSRVzKTLvT3o4RwBBKXtMwyRSA7ZARoJG7oGXJ1aUjPxPn2UhR2UtZu7oaB8piVD11HvF6iX682DDXvcLJBjqkAdZ1Jpw%2BdQXrGr5HIH9UdjfdoKbFXJPx%2Fbum0uDWJ0Pa8J65642qhUzN4BvWoR4F%2FEq%2BZN4RqEDHIk4rwT0VdTS%2Fl35PnTtB7mT8Z%2F1Eugg%2BlS9LC3DdLDYN%2BkZUmUGpkCCDJnJVKFqrqWCN2ZHwZfOQw8WGj8w8YeI26L1EfCUHYrFUlHAjoRymhSAXK5F%2FxK6MClOTYQCgRaQYfbjFKFdBH95Z&X-Amz-Signature=2501474ff8010ccfb5a5ec119bbec39ee85a07266eca4a60dc9b8fc42b3c3c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

