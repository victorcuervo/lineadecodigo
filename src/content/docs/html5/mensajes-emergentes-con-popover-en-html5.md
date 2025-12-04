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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646VE3PLZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHPpQsiFIhMqSS4ZzlVduer0x9%2BgG5b7vAbNvW39wWP6AiEA9QwdPKXQxnMbm9Qnq2hm%2BsvM3a0zSpJmwqThC39Dvasq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN9rWbtQxRWkiFng3CrcA%2FRjGChZkSSW90VEIbuAUNhWsJBwjAx13KA8ZcKw8UcmYrxbXr6zh8j2tvzM%2BAhbAEwSnkOgAjzot6WrOvdlVg8EUlqtSr%2Bcnchu1FzDEgwydqm50BdYy%2BUgY12A5BN39fESLKJePRos09im7kPeN%2FBIM90cIUNESYcfZmZad8hkIfHXov24gZ3xqaFL1nkCgVPzCUnpvk2vdt6IfZ8zmLlJ73tYCrV9QSdKhtaLRUwUNGVe5WN7FILFzOrZ9Bhxwl2HX3ubHUm8sW2IQF0Lb9EMnjsdXpKwsvqGfyUZrQdtOK5SQXPgAzsxuhhNnfnpraNU4OFcoMnkzdqw7bgjNAdXwduPP5dPoAuez%2B%2FEdo5wFMSPQczcnUaSz6K8uxKsiu%2F4aHUumCeqr9cuIq5jUoYdQnBqMoWUVXi5dZmswiwHDnI7IKNXBtE62NH2%2Bsnvzbpq5Y%2F%2FTtPN4N6V%2FTrSlXbitv7m3SJ1jRbFAHY5VEc%2Bp5mcZGEuww1PebVvl953t1h%2FC3uzP3MNy3p6%2FNoTtKx6%2FSucj%2BjR6a1jNLzUADY5weUxG4JBCyr%2FGj%2FLTAfBauPA%2F1kZDE4ujiyHhy0WpEsk8URm83tGZFd1WCqwIIe0X2pkxP%2BJx14Qf%2BoSMLXnxMkGOqUBZEYvbigauVO2HZ2CB4HaYAFjZCeFjUCnKb%2FwzoRN33rGA%2BKwguAo1NpAYef3vPlmStP%2Fk3tT0V2ysMqhnkzpH4ZklfJkmPqHs%2BlFRxWaJAgPIgx%2Bz4BP2rcD4zWGaR4tdw4ukTQ4JawFJpt9puGRDcEmf5SbMcuUpeEjpdcCHxNNQhPiw4yIC%2Brh6pye4VBibzMaX5PIKnQxUAqb0tESCGIe5kNu&X-Amz-Signature=21a10094e06053c75c75c74b47c6634236b03f944c5331cb2ade5237f9c1eba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCMEHNSM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFM4d2m4XLlZZImdVMnWuKHjZz5WWD9NCvV1shZXGXLjAiEAlGxFBKPBnKMs8wRoXxboisNlAy4ScKeTCHxtnB2ZCa8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDG9c7yu99mV%2BxHLugyrcA8lpwYD%2Bn6djuiFujDT7khbkBoFeiTW7blXoSWA5Hnb6nvTQRHwNW8JRiyxW7dnbOT8Cr9ufXHpFI8oL3tP4OltxBcoFuEhs33w7dPe%2BviWs34Z%2FG4oZ6kqznkCYYL5W6znDKjqs4cJZm%2FBKBcwHpJ705vNriBYAY2wuL1wRFuK14iuzX7YUOv3UFWoGtAvz5ihGH3r7eKwfrXpUk50V14hipCcjyRGP1Mrr4twA8%2Fo%2B3sfl%2B5umFKNp7gqrV6y0tHFZre71AcMYEAt7H3fttViPNdJN6TIQj1zmqbLflStODGfzuuwWozZMxXC89ISBIMAZFBlCK4ednaRCEhV90vU9FnmnyOdJgjR9yK8iZ4AtrNllItZ0deoFG8GDFZ4MVnW8Qppz2RqhGmYT%2Bx%2FkpnQ2eTfKzYBnl6QgFw1r4LXO14ohLfj6xBqMtLrlwJG6Na3Brev0%2FDaVvdmVmhFcMt8Cvu6Qvhp0B8hYg7Ng3XmV39mb0fE4D4p9Z%2FElGkt6PG6KdNPtyuJmOKpqLF9Yr8vYI%2BOh19S%2BEmLKUeuisiNzKh8k4r%2B1Cf37UiJpc5BBMjR2vg72YCgWe0HF4NmtGFqGvzgT80cQTZ2WTbNjiU%2FdcmDQbPQmo59WA4tfMIfpxMkGOqUB6JaymU3%2FRQNRb%2FwCFCLfhlejNniXM96dSF5MNF%2B7ta%2FOCcWw7UnqbWoKCy2WHTnuezGArYN9nGMSEYb2IVGfCSWmJp1b7mHz8IJRNjkHrzhd5%2BYKVGEoUH13EJT8VIdnnlwprU5DWrfrtO5eUuOp5abZtkE1oPvqaW9%2BZAGDs2pMil6fPOHwO7YlgXUJJvOPr6%2B7fSuFvowrG0htl4iBoiLUr3rx&X-Amz-Signature=4ae9b09d846fdedac3dd8efa71723f002f92bbfd927ea9739c9ab56c7276f2e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

