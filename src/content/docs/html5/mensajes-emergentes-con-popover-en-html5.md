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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M5OSKNV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD6Ri8bfbe4P0kWgBVWR0gAVHX%2F0V9p5HdbdWEKjNgv2QIgBWkvvavauzrCrFC81Y%2FiOs4AzYjzr9v2EjascDyfqqQq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDHA0p2LCCNqx31MZQCrcA0kWmz9%2FV%2BzWw1WH8WK1dEvX2MOus4%2FVfnpSpVOKypWYQ1b7rw5%2BN12H1CDXiZb7rO6kBA0qcxIMZktlcmGBUaEnpCmPz2nopVtHSVO%2BBmicN4DGHBL8XaqJyb1ZMRsdMUrV4p03tBQNdwIsKHKsDQkeuOWxnytkbYhjDUcm2J7uG4A33urGJ7kJEzTLzv3BxCui%2FBjZjuICUsZdESXu59sjfzg2XaxjqQw%2FM9o58u7DkUisOkKN008we9p2eVSa%2Bu8IYd3SWqb9CcM%2BBGGf4FcxbIkgSDM7NcQgn5H720Aa0inW9nID91pxIkWfheN3DRC8xcYlKmNQeG9hrPCMkpv%2Feo7OKz3vuwJe1e81bmYUYrJF6zPuFXJdc8Gcyl3R3j4jrYY5lJt4k5BsPwmyv2FE4OlpR4fCzuKF8ud%2FgBklEcZFyqi8kmS3aOnelkRG2KILXgkskRXzttWqnUqXa7vCdJS4aN6Wgev%2FDfUaCXDeNb%2B3dC7chUfk1KQ2lW2d%2BJcUT4Gd77AjS%2FeVuu2sXECuQTZLm1AHyGO9LlFdFQfBeCIt8deuDw%2FcNYBuIyqXTd%2BoY7d0BjGiWHKMRPbaD%2FRs3C6A8evEtuTtNgciYAsUsNnWvrmYkNLTpW80MO33wskGOqUBtpffBSL0uuVv6F4lHSPJOJvfh9Z5kk0Upv1ZofdIo3pcO5wpJaSyJBf5wHg15HnKazFylSTa5l4kGuDwwEcqVECTkYj%2B9ALEE4xAGpA1gOm6sQ1xgerxVnGU6s0abfg7wLTN%2BiTjOx6IjDxAeez2xKrQbb2EZdwRKi7OYSgQg42s8faqmSer1%2B5jxo7VrVpUW8Ah8oqirqYyEy6ErYR2Sj3FYVrL&X-Amz-Signature=aa6e6142015e3a2e532e78e65c88e07d52658d9b7fec299556c98d5151a7ba96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQX2EJ2Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCIARQwJw4b8j0AmIehxYiV6ibQa0E%2FIFxpmtNlIJhvkgIgC6oxt40HXEB2zUalhM19RD5Z1MOrG4IRpnSUSprVJB8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDHTCvYlF%2Fa4CqK1eYCrcA0pYtrd2Z6QFOOEYfaus3m2v2YQIKZfnBYeOZrkh%2FLGELAvIImfqRqXJO%2FvpvZyEB4%2F%2BHbwj%2FnJwk67ezKS54BZjl4RUuC688CXuK3doK5f46U2XZC98DGoKj5Hv7oU9aQIpebUQFZoYiICPsJurrBFLE%2BTvdnDiXNBRTR%2BdIwP%2FEecC4A5uGfsthYJaDkbh34iWNgeJMueW0i%2FL1IlRU2DeZzgSuKpSQirvWPhnwTygbhWItAnN5u3CzTMuINuiNWUx5kRxoiCBlzTA5GMQqh3aYdBzPmnoy%2Ffx4HTJ8rg4dF3QODcyBJZ9LV0kfONxW5XIMsF9aMaRk0SEqJRQi%2BrZpkP5MT7ddkkMczegjCsEMXBV5H%2BvfYHyMo4CWOTEsKbg3pCa0lfrix%2BqYNvyoEnepMDNgapW1D9ei2KHcktFakzKBRDauVV3A6vIy0IjloiCb8itSUv8zXluQdESmGBXUEE9qVDL8pqvFFFLhu7YU%2BaOom6Vo5k%2FmYISRLM0t92kifzLDJdgXT7iX41dqOMK9OZjnupoXKVE3zRFdozhTD4R7Z8nYVnBIqzd%2FT0pG9NDYiSm2T9Qj6zP2AuGtyCqzl2sNTK5DQf0CkwPxijbGEHm9qsojtBk73VIMNX4wskGOqUBFtEeL1OXa4eUTTN6GGTmO8MPEsJECo4TGwogch2MVljUYQakg1o8HVZC1%2FZ0K49xJ8bG0%2FVdGEdcGFFCqjfMQgamvbGth4C%2ByCyLLiz6n%2FHWl%2BuRYjyV7GkXKEPnLM%2B%2B%2BmEHqq1IDmi%2F5G%2BzXkN0kDTPMpO%2BEFaM13dHAgrXAAMMcuYJJ4XMNNXhAodgv4fxB%2FtHCByHHa%2F3XaThWInsiveFqAfw&X-Amz-Signature=4e6dae864549a855193b44b469cfa4eb850842e364be26d91c249c994707e964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

