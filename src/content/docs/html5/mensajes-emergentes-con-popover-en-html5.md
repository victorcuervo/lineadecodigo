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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632T6PXEO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa0Xn%2B%2BFV%2FG597Q6nEfVwfdWaohcmyPQGw%2FZ0X4HcFcgIgInOZjPhB%2Fyl3cb8zu9ZKh5ugp14LXOSA0j%2FVKnRqFVcqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhtsJUnqQ5OMQBbUircA5ukPvSXwy%2FjxJIqpjvJ%2F4LdM8vnmLHxvpBCUfrAwRAQ%2BQQaTDabVnF39HSeA7gcuMnwkugO5jZmA9bpm4rkLVPbgngMcb4mfif%2B%2Bi9gXZgnIUFor6LWpBs6iUMEfnNqtOp2kSJXd0yrKS7Z9s%2BJViiDbnkx0qLUsrKFDQZ8LYU%2FvSyxO%2Fef%2FL5xoPtaxvP0E3WCg0K5DjH5rrrMdRexR0Fmv0xUIzOgAqMfLrUJTUZ6aWlbsAstJINjj8FYSUOkR%2F1aqbCHMrzizG295D5EoTbHLTsKtWp6P5%2BMwSbk3hipBbjt0qQ32FAjdua08Uj%2BKSbsnI8HkeW7J5x%2B3%2FJF27DEKoEREBLJ%2B9YI7NNxYVkk9kyLLhFjkOXxsV5XP0WUScNOdBOJrw7y0fTJaxsMRy6uZVyTZVEgIOht%2FhgofgHbJO1Ep5SrZ9Z8rUUUPrOcZvaLOaTa0M9%2FiTgQCx2yxslr4iOBBD4xvcagd%2BV0IQWFY7kJoq8BwdKtdQ47szNqFK9NzI1tNeXru8N0AtjWDB%2FMyoEykh%2BNtrKn2AUd4czCCJI8%2FJdyYxntbywrvjN%2BrKCXU7rvieKCdwUGdezFOFJOj0at3qu4uzgN9132%2Fi63yJcjDFZdQUSqUK38MPvo3ckGOqUBQF6m0XpNEE4cPjBdurdUf91wiTV5NNECU6KNNdoMkcwP02xOn8kKgppNgaFj%2B8Ff8toV2wiQ1C9Xibg%2B0QzxGZWaG3u762S6umopvcl0mCw0OHB2o2grEddGfiVdnsInWNE2opuJTMsw00JPghTZgOZU0owFfWY%2BZJIE%2BV9zADpzz3u3bOM5iNnDJdI29KbitZeTJhXijHgur06DzkIurRJq5cTX&X-Amz-Signature=56c4cc043bc411b77a7838a422a35ce5399ec6dc88b1fc00314d55772ca1944e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS5QQM5A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhjWUm3u%2BGWvE6uWl5CKWHfdjJmCKkHzcXCb2HTK4U2QIgId4E01d%2FJi1HRlSaF5GU0B4281XRXHLg%2FWHJHcCGx6cqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8Uvyh7zsnmlC1adircA%2FT0JNWdQ70D7xIDmoOSh02nWsOg7fxe4Z0YK3WMImJxkQUMu0KDxoA79Pp%2F11VrNS4v4umroJ5t%2BtiBXiYQoo%2FbLuPyY6LA66e%2BigIFl3p8Oq%2B4DRaeGuhdLLPWx8iTDtgP0zpWgpT8HNRmL12ltf64%2FM1Dw%2BqQBLElY4PKbbMY5xlAQwuBs2Qpccsx9txy0Unn0RpAZreBHBbXT%2BEerpxo3w8V5ATCHu0hNls6hCzF7aUizta2uC8M4eY0L3GN9THlRGaWFWpJPmganLfXH3fv4briaVTdUKPs%2FqyIwEH6dugyzXfnqAN0qjWFzhVGooCLKRoVEmPbr590YzHLdYtJ%2FzKtkkyzXjcEKlrmRMJM2gIgKDU7u8yayUXsRohgSb186dfd%2FnPhM4mVu4toRw3wUc87%2FU1%2FK3WZ8VDxv%2Bjt3O8EnqErfP7p%2Fxw%2BrogIJuzUkTZ150t5y6mr2raxqMA%2B0iTo9u976VbqpGG5iXkJPhovAGBa%2B1Vjq5uuH9PVt6jV6v4GjcHChcgj7APpVRma%2BgQ8Jo9D%2BrBU21iHVYTI0V4dOrG0EIXIQAgtXMG%2F%2FjxN%2Bb%2BYfcV%2BBBxK5yO%2B%2BstFfEIzXrw6bnAi0F%2Bj0oQGW4lh9Z9BgC27bE6WMJzp3ckGOqUB9cnTu%2BZWFZk9z%2FNG6X6HzVuPXrE%2FzQDs8%2FXH25qdAu6ZqOuHZ%2BVNAIDaTphiizvzJOxQ2JPvjLajta%2BWnqqLINlIeN0000f5AAryd5Viuyo2rc91gMD1he7TQjhOJQ79GyF9TS5qc99t30UZLUSjCbO6asrgS8MMdMo%2BuvewIwZ21iJrN5ttDEjhTvJOVFwsxvY%2FPVms5PmL1ISI%2F4Dv4o4gKXgu&X-Amz-Signature=067858ba167793051ef94a14a2aa0715d21256a8c856125c78054017154e9c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

