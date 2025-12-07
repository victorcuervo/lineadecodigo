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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SPXN6ZX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbtfu01QGS9eJs0rrRPfrwxAJo1vPrk2SAco7r%2FsferAiAw%2FdmKMe%2FMSL9dpyn%2BEvS5qzMXKGDsu51EZpY%2FPgHFjCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAQhbVXTZF%2FbTwK0KtwDU7w%2B%2F6RO0dOib%2BGkemZOrGFW5d6vZUqFHtWK6OtfVrzdCMsUCMUGqSPJlfd3ZtZEjKvK%2Bhjw5RzWNWE0Xwm4q9zQPytqc%2FbAau4A3WCiAmoDdkiDqDHGCppeutaDKKw39UJf5RdiDBAenC%2B%2BT58PhHy6YzDmDaE03DtKh%2Bm0vMSRGNcUAWowKb7DW0wp2p0X8A8eyKYt3xDzFvuLobrhKmojpNxrreWPZZJCD4NdyWaSMv48E66OVyeT6axpFp%2B1ZYo1NAusVBK9zTTpSWdhLUuPqms6q4ioDG%2BfIC7XPUPAILU81pWiwOFwTRWFp58IodMxJRhh1DfDE7fNXBf2VmYIskFZr6hUiJvkNzqVjFWmLvxPwHBbHeZpMXKh5eTH5mtxy6%2FPFxwlK5B7AtqMQATK2MOr6eq1o%2F5gDu4MyoVVvesajsG%2FwJZbUX4SxSlwZqjtqeQeF0X%2B1zm7N5qPprzj%2FEorsiGvdHBVfYTNStUWGmVd23u3W%2Fj3NDMFcDv52TPqyQtVCoOx1SiKWH41rfwAebAzvhqhDVRihFl%2BTjhifWrjf2tFr6c5p3fPOU3WmJIRMBZK3NLPr5%2BvHu4J2ZzG5zuzdoRV0vi6z2S6dtRiVnxWEnyJmLHSflYw%2B7rWyQY6pgF5TI5kQsisu9uarpBYQNGVm1507F%2Fbo4azI9RKVCjB06UvfToDfnHKHPK1qGXWezq5kasqSgg8p98vaTMosRP3QyKdLjgtJ7mY5U6gcQP%2FZgYgj68r4JYFvswoSeWAda3VXAWJ6L%2BQlfAiMyJPYCIvoU9omtrLw2D2fYcUau%2F2FkOvnqhwV7BUApjniTOy7aGuGEaSJEgj95Hga%2FcdPzxY1Z5sfzCk&X-Amz-Signature=820a2154b44492616bc354d1249c094637c7fecfa624de32cb94672ac781ce87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U366TFH3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9kwJnvhMjDqAywavXBd9TXI67FaHprGrkZftmAzx91AIhAJuOsCICrXe9wFHQJFQ1xqtx5DPaIx%2FQuC6Btuk4zeCFKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXj0k07Pn%2B3txjy0oq3APNQP%2BGziYdcUou8ak07jMtyKfXk%2Bk4ZRMVqfq6bBDX%2Bdj3fYLoEn02TjwbY%2FXIsa2asejjRy3uj5lOp7DvDLvJLaRLp0InSfN1BIQUW6R6tyDgbMrEwgUVpnJTssZ1%2FdC1V0zYRE1OE5Mix%2Fb7sKfELUv95hCQyHCFhaCGDmirM52g52p%2BK47Co1nb1hJrtqqS8PTgajW2FKx8msmZBSKkAbk9y112FG4t1QqFZitCoPk5yT66e2TOQ46ngX7kDpqAZJJCHDeCqcnjpO6Z7BvARgn4QwnHpQpAIUd4GB%2BwJhe3z0FYw3ERLPQRI7cSA%2BjoLcCJJ23ngCqIEJ2uwStGPHxlmkhB5kJeAqgEyX3lcOObKtmn8ihEPejcmrLD457VdPETEFNSFZJbI%2FVM3MQ1uP0rRR8dFvRK7WGgTFAObcwOW4SeTXH7Vv1%2FQpY2Eikbl6qWU9VHXAev%2FxIS11ASvNeDlN5y9YkP9qCm9PTIRIpY%2FnPD0BNSoTcF1dY1JuuaBprc4EvDYTPXWVqm9AXhU%2FXw5MlP%2BAFwSTa0A%2BuWSa0AYG3GJUKB81EJU4pWlKdCWPU13yzA6hXZV%2BGVjQJHR%2B8Z2X%2FbYKRy2jl3lwmh%2BwRYIL1mzPsvO6qWFTC6tdbJBjqkAXHmvvd72Fv%2BSnO02BC6h2dQpVQH0ZaTGrt3wgN4h9ce04oez7%2F8VrGIS0Nj%2BJ9HQ29ERw2ozK%2BvslQ5x9Bu%2BETHQYrGQ%2FToq7AZ8D1nUkeWQxO5PiG5ohslG7cj8KLLIbquE%2FZLNCBY1fhllVx4qNO%2BUsVOh878EYpsWykFSOsNqEa%2FL1VJSLrVCLhZIEqYpIAw%2Fl%2FnXp2SDrjv2g1nl55AITmE&X-Amz-Signature=0df3830eaa1720443270155f76c00a5f08fd4a6548ebcce5ae85ae2c2ef2eb36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

