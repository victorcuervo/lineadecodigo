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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ONSLA2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3uZ2KwX7jdMBgL5Z6NFz2TP%2FhA8BB5YOANI8QVT3PAQIgE3A0OjRAmhTwxOaUhyZLoJGpy8dNWCLj9kaGhTRMv0Aq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDB%2BsJMxlUMS5HMOMfCrcA51ypgQfud0RndHPu5JS1VHjyDnqgb0%2B%2FtCQDbbBP%2Bgzj9jibAFshmwciuz0x8OUA1nQ5ejr0bF%2FhJmFS%2B7qYCvH%2FHk0u463wk2sENdmPC5I8WcvvWzDYFJnNpF2JLbfVyFgnVHJraxesEPiZrvwI%2B4E2ll9960vUOzUOK%2F7pK%2BYyoVsdVGZDGFs5c6khRYbujjmTYem0Wo97F%2FDrDGLzv52fspwHqseuzg3k2sHIMZzPNj8zkMeTLP6tBYQIXYfZk1EOmZEaQOtdpukp16zJSKDhdvZJe59RAxFSSlBzl9vugGNRk4vvInThafvSjrnqgc65fKEKJ%2FLj3GYtgD0p7MJMaeRxg4KZuly%2Fv6dNwutwlg7G9%2BsoPoSLIS0Ddt%2FjmANh5Zr7HIUQA5LVoFafP3ywyRqDHVVE3uyTfoIjaXAPZvPpa1eYyvbS8lj6YfF5How7zbyp79SGCB6y5vjdlD%2B87mXH%2FTcsIqsQ8HuNRX%2FQLbmgQdX9YsZF9kobKxRr6NyxHA8bqAohY7oVBp0cqSSI34NKbPwG4c2evsTCYjhYrJutPd%2FzQylEWBB8ORWSnk4AZCq%2FlF60LfWOtzC80fy3E9%2FVWjjOdHhYev0Bl4uZL5GpQKtaAYnXYawMNawyckGOqUBbpcxHsM9OT07puYM2pHTDqOJVlb9XWg6lJ0D7zMhMduoXJBP87kh%2Fe617IRDV0crhIHfZBGYEu69QMD2Wn4FDbX2Dd8e7oXDIING65n5cPFGS884xcDQ1SPIIO%2BwvVynF4u9mQnfQtutoeTOxFycHORG0B9xaCEXpcoI6qoUGpPGpHRcFjV2eZJXfGpplMTa25NUhJSGSS1%2B5kgW2EKLYNlMvWMO&X-Amz-Signature=6a72d40e3eab8c382b2d88974be8b27863e0cb2ec6293e721d1bef8c2f1e0cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2LEKXUJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCycU8ODBR9%2Fv3Vg7p%2FyylOno7y%2B4fANWwE5T2oODDrHwIhAOnV%2FEZd3gr5%2FsMX14e4zAbOQ14KMnqvJimoBMKM8%2BEWKv8DCFUQABoMNjM3NDIzMTgzODA1IgxQF3T7oKPusULcus0q3AMkWxyc3PhOIMnH4QvT7Ph7kdMNFj5XjYfd2uwtoMG9xaQ1deZ4fdJ74sINo5822t1VyutosK%2BDahm7UIk87EpeYdWy66F1j01rtGdn88kVGEz7BfCD0FfHy6Xa%2BkQe2ThqHhVHa%2BAKqI03vNUyjx1lKbpAmjI4WC9Q5LtEphOOv66TZFrNMq%2Fm03RfDeTxre9wZoZNODcHffvYunBow8RB%2FBEmVh12j4ACbC%2FN2ZvDFe%2FUYYDUZZLHgURhJebXoSuR%2F9m7EV9mDFIX00rv5P8rPxDHx4y7guLmZ83gdPOVaMZyqCcrodAyZmY4pg6boY9lrudHlu6jnwEYiuQFpYGWPrN16E8jsL6RDLUtqoVQo569dh3CGGZ2zE4zVIXe9gyGKeT9WkQ736kFKCsuVei06QkXLUzUYxtW9wFdt2lgO2K8i3JI0OTU76ipr5JHUlUsdpwzwfRYm4XYrdvs%2B8WgvWZ%2FuNKR9SE8Wtiw3m5C1RqEaLrM5P1ldcUC6tWkMnZc4CrrpUocAfmNlQRw0A%2F2KxCcdzJCzf0rbMXRRa3UjsfPYSu8wYZfSFr1Eh8k1vo4YmrikTdZJtThrl7z%2FwkCiAbInEwSCzwNP0%2BvljCve0PVwkHzKI1p2yPDvDCpr8nJBjqkAZHxa7%2BUpygA1z5%2BvFOqiS27vD2DrEEJGCycrlFnva1EFzazsArCOFLE5J8CuR14oG2GrTXwOqM65t6LbvtcNmLI4uaRqn2034%2BPcti8PB6w8PlSnQuwbgbOpgmgesCgT6N0T7DwC5QSeT%2Fu3ZDA9iJaZjW1k1qt9q7RjxduLA2R7X7CJKdWlVki3V6QYDurN%2F7eDtj7SoRj2%2FgeihggYfuYTCeb&X-Amz-Signature=4b9aea94d9e486744b0919fd5c0988e53056f2593b96655fa70ec086687a28d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

