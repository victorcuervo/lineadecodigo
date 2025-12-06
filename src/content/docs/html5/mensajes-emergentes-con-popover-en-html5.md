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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LOISKJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxHkgLM1%2BhirOMaQPZHv2qNN7I3oBg1hK19VKYOC4WhwIgGEPoMOgJ5WvpfwStT36Uex%2Fzjc4d%2FLQiflRCiyT2k4Yq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPXvy2R%2BnRZXyuaBMircA5QggJoY3j3CBxx1L1OO6l2HLBnMCGIVOFBMHIz5zJ1Ye3kKonH4zD8OmCmlyB8IWG%2FgbyEwjEOiIJckincBEbqJzjBkVPuc6BPm4197vUTU7U9dY%2BTr5qjSmRRS5IEQLOuStYkoBAOfmBFWdAceOTEcDe5a1EX81lNkZORkxtpvNkk%2BVuCax5bf%2F29f9ENUDZfKfxtgeJz71r3Ci0y1IBCsZRj8yjeIlICzMo%2FP2KVgI5PjkXavaenktSi%2BvX9oH3pl%2BPhHJxwwyF4nLds1RLZctUU1WiF%2FE%2FWMJxAe8EW9T0cZCDVh5VW0ecWvsKBPFvy6j0zAeGuezpcicFsNHWH6yPkkHrsc6rPeMMyTTqia%2Bhxy0jfiUPDlDSsBKcHupR1mpEI75pMbNyhVSe3SBt8ZsuJa00IuMtIFoS7hKTNTMa4FEcUViEWbK7EUFSepIMoO%2Bu%2B7uIPs6%2Fz%2BBXrSizWovNsKHhO%2Fi8ohXSX6K7485UKeMJC9QO%2BcBHzRo%2F5Tm3OmeYEugudRaGbyuhg87XZS3quwr%2Fbz7OcAJNLnTSrWIIkD29qTkVobAu%2F29z73T%2FpR%2F77xmup%2BpG9fg%2B7aKH%2BTMsz3wTLgivUsZGago9UDhh412nbrzwPF1noXMKnH0ckGOqUBJ%2FRMqHcUDozVczYdaM3B4uqR0Jp1a1DfkxDXAHBJMzCE7liusETtO%2FQCBhLsfj4abkiNPB0W3WdLhBzys5YEc926uIaO85im9xk2shBqc3lcOjm1FlJ%2B%2FN744jLOJWJkrlII0iQ0qcHlrdq0Lb8hyYH4qCqLG%2FYNJEqr9ZoVwBoVqQpdirZbSw69HbFswGsJdlcf9jp%2FxLlPURjJWg9zume6IqRl&X-Amz-Signature=5d629fe950900e2a5411dd8452417ea097706051d85b0fc69a3c7aebf29b753a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677PBRQPZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNXPfWPu9s6Ar7pEpYAQM%2BCRGrSmAcXzt2UyD90eCwhQIhAKT4%2B7dVfrZtdqv9Rf4ixKG2zKJDXePDLOYPak%2FJIUDyKv8DCHoQABoMNjM3NDIzMTgzODA1Igyl1a4Wg%2F6cWDMHo00q3ANEvn2CllmBNoG8vDKzWMd%2BNPVE52eh3cQhe7YE%2Fsa1G27paktz9yeQRNDWIZW825BklZMxmdR1ORZSF42pEPPlJJBnAPNLB5SeG8rVn2JXISdCIwECgbVBt07ZdKbuJpsiAisyqLXhmg%2FJwU4yCaLDTQcAYmuh0AbkpKNUphddTwdGJes18y7cGKLCV3Ool6L%2BTdJA8ydjYJ9qSjeIqC8Bd2cuh1pNuO%2BZmBE%2ByQfkbR372JiGeepLZLoBjOHb25PRMmch0%2BKi2FIXMGzpgub0crFvoJ0BdzglVqwnafWhrtNmY5QnuS0fJyy%2FJPUg12v1diBzzznBBUpfLsLJOhxHubAxL9WhGinCnwTxZVvvOBP3%2BMh7mUATtSv%2Bc%2FaPoWk0lPYYtPZF8INm7Fo3ylY7YSxmdS60i4Zxo8B%2BOqgXmLa%2BjlwLAEVgvdVeO%2BlXRl4hqUwZd5n8VKsH1cUwOMLfta7b%2B7aqzp0P2TQ3GU0nxpkEXzSjR%2FtLLvqze8GL%2B7jXJpSxQsYlb05OQlJU3cEKLZg1O%2FEkeWMtWKhGBU1TFNKRxMcTBkiVvRDr%2Bx5cgoiufUT8tD%2FOdpu%2BKqn0BrLiavve%2FvSgdo98ge%2FlpasjgKKIBIK72EmCVtZtZTC3y9HJBjqkAXOq%2BFSq9w%2FCAkmiy1GIcdBwYS6NLAvXGvywgIVxMwM8ULMFKMssmzbINvlXpIoG6tuG6KBuwaYfLdSVPoD%2BhGAglnracWqr4EkmaU3u1mg18r%2BTz8bDpiu0gJYCMRUuxSy6AjswL%2Ba%2BjakKtnogQUNEdM5MumVBVwd%2FO7qr%2BOAj0eVJVlZ3syO3Q%2F1f%2F6nmJNQgWBb9%2BTnRGQEWX%2BWgUkrCR5sL&X-Amz-Signature=8f36ac05aee7833ca54898b17a3ab038caae5a5d6264a607a1a5c94999bc0eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

