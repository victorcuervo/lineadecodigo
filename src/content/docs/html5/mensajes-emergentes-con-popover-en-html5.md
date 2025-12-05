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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDOVSOR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxBbmrhzLv%2BN0pAC9ZE0MGdLA7bhDYjuUFxAi9JrQcoAIgWF8gGt%2B%2FKu9s7ihoGN6x0CrB74moNbcqse7agP%2F09%2Bwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBSN%2FQue3JN9LinllircA2tUcNKeDYVsvvu6dM8I00nqqFMtM3aQUTYVZIrzl0ewGqr5UHk9UeQxDqEkD9pT23s0HBB4q0BWXDt1QfBB%2B3e6DXz0Y7XltL9nWe8wY%2Fx%2B2fzvhaho6B%2F8sH1c%2BxKnBN7lSSCRRKTh2tBANngpglkFbo3PMme8oEJdsWSKGaP0l1vwzCQGK1UENo7xk87L5gj2oHR%2F5y9oCVdMNI8w9GxkWio%2FTC9utXuc%2BeGwwn%2BfnjkzkTqN7xrK1%2FM805b%2BIaqMot5Kyl3njOJtaUVbmK3d5n5JNMOqSr%2Bsf4fx1PJVfSA3t25M%2B7Eo4kyKnH7I%2ByjVTGZ2Z6iaJGPnZfopYDUAdvyazX1LVWvpD8%2FAoJPu3O7YNSsvii8iMr23ChpO25YwOPTas70JXxzQjajGPuQFPfmhy%2F%2B9bA50FN1J2OI0ta5vEdSaLlUegRFfyRpj00%2BopONuLhKQjJABTXd40jD3qH7SRbtB2L0SBhS8Knfc2YjEE1Dwc680wlDZ7cGcolE%2BmO4V5ksuzbJcFcwdGPCIIudLquoaEN%2Bh10RohHe0fdXLN48ZhDYQVatz4rH3is1101%2BE5N3re5oShRVXADiVMzhql1YJL%2BibTvwpcxcbsW79GVTzCoZFAwoIMLvty8kGOqUBh926%2FLM4sbh0IGNHfAjE1IcVmvVVPypEKn%2BkwFGHd%2Bi7V1DpTUUoYQkW2Lhh7%2FENyxZO6ZxD4ZE1Dpby4NNMlSGqJnFIuK8QSfDnx0%2Bg1K6cROSn5N6oufOMEBttKjfrJOhwFK8cXOttaho6xy8ZIG5wq3B3xpHZDKQQveaAKNA%2F7lblRJhyK%2FGEVK%2F6kHxU1axC39y3fvHbiritvXKDJdFk8bT%2F&X-Amz-Signature=141f3c1ae78e22cdcf7209ba2a922d45f218a95d0648645ac07317ed2545a5d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR6FA2MB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwcgDGMgtzIG4QMqzHQgpeT1exjxaY5x6wasM2Ys4fdgIhAK%2BSQ9qDXomYWPrLaPOKKjITxkMpc5EcjvyFdyz0qzKRKv8DCGMQABoMNjM3NDIzMTgzODA1IgxCGQk9GAqfY9B0XiEq3APkHGdzoEumWSpc3tDZciaAdNYsPuuUzQJGzwtYKe6S3Gm1j4BVLjlfeA%2FCCh650%2BCVEwtdtLDqr9daUdQM2eYERpm8nJGsaQ9QocOHC77Ay1IBZrDeAxb%2BFspjG0QnTEassvf22PThVjv%2B5Sq0%2BhKVdFZHNqLl2l%2FJDGRk7cL8BuNx6voogHalyEB1mUhUoUqB2vp7NQ2FwwmOT9Xls0C6bdKGqOAHXQ92el%2BOrHrOYUEFQ0Z97WvC8mJfa4t5spNB95T%2BF7MQ%2FbigCytwi9%2BnDQTcU3UxdaDwuX6zEydtGF0c4ArrOU9r6StnWaLVom3t40KQ3d1Tde3G%2BFHNqP65x8FBU%2FwOyJYO%2FLlEsNZQ1uQHiVVmzZTdKSOxPgtrdM6pBeBDDzRsDr1siMnVXjdZ0FsMMXjESyQSBVdo4%2Fxy6DazuriF%2BGR%2FQ7I3rdnCUOz4JERlMSBqg5f%2BSw3O9XzC5zOjvDGKTWPA5YaEaD8TEiMOZbqvQN2VM759B0P%2BC5hjp45lnDYAYd%2BffywPIWLwPLSJ%2FqWACEcZvBJJOGl4Xsfxfdo%2Fkwbefg%2BpWfto7oyWToxCgRSu2mvjFlqZkiszMYpH8dhBMt1LgSiVlpngnlBLeDDPfzh3eOV3xDDOt8zJBjqkAdm%2FPpJ2D21W%2FFfjp7iY1kSmENPsh%2F1qhk3rrWiQVytq7YPTxRcPPrEwEJwqLxQ2RIWntUKPlDDJOaAgJyKtMTNGDXYVhDbVixxByLtqVVPVWRMlw7p6wIIvfb9OevIlIFPKosxGsRXytXT%2F5JmCSLb5Qgw2HeMkZKy3ZFME4XNHKrRWl0zIvuWFVpvEpgy4qKk0EpzbyvtZIbRJXZE9T683bF10&X-Amz-Signature=3020549fc6af9ca05ef3ab49cf86fd3f1783a424c3adde8901385afc8ad234e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

