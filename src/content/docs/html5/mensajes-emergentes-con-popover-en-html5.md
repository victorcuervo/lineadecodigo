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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DW6MUP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaLvmBJ4QPHAqEzpu0zNdzwW%2Fxkf1yLKtLwpEOQGQzfQIgEFHm2RbdF2fOWD5QevLbh9jbLMhLosLmvDZ%2B2XolkdsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwShxRLHKUcCOVQ6yrcA21%2B7x3Vn3j9gZAFDvPDSSDRnAbjJFZlE8EUV5us2d5Vj4wY%2FGnH20zcWLDuiHwuN%2FUbyvtXe%2FbDmvZ%2BIZrrfwebnWZ3mRF%2FaV8Wk7vRn3mVWY7WIwMOEaTh4aAPubw4ulTroKZIEC44XM566pnAaLQbVloebk7LCU2gw0KmcZNB%2BylpgkcH8c9dCOo6ZtC5nBpMoCetV7s%2BrcVU%2BK9RNzmKGH89RtDXV3WNDwIMAtOYYtZkHOXtA9H7oFGxF5rgi4X0cIwxIP4eosQC%2FfMYjWZTISdgjOrqvBq9M2LwdBFiZIjFXPvphZSvC0d9zvGGst81qPKcLBllL01JwIOjsW5mp07ZscY2w245ppIM%2FGIzJBO0omekbtlu4QmxAKoJBwAzrT8aENpQkKnAeFxJnTSrWgLpZ0O733QLdAE7rpfY9YolqRT3aBapjI4w9aSUeLoH6nKbQIM9k1TLhOSjd2%2Fj4CJfbcJuDkCIF2Ok%2BmpQ%2FWczqMfVxXXMmPiXSs80LfGgi9baXX73HtPltkQK6xjPLdw2%2FS%2F7jLRGV6cJv6A5bvB4miGvMA6ERudJ35I9%2BbWCqoxFdurj%2FcTrcsooqVMLbYqic%2FJi9R%2FWbhTabIBo0ZAA9Cd2RBeBcWPOMN3Q2MkGOqUBqNlDkCcQRABhS58kHETudrW%2FVgrpmOjoNHKyC7QTTfLaYURGF8jy7RBTTAq5CnIH0icxcv7ycQ6ItrpOnLgClxm8AnNBzxlZZ6t6QWo5LkOsK9E2%2FdiX%2FW8iUHWQwiBID2DGc5N%2FyElbXcu12yTlYKTwAw2F8fjLK5dg1C13S0pT2HGGosZphZnluqnoZf522SuGERmcfgjiQ7TvtfLYSo37%2BOzy&X-Amz-Signature=aa98876e1a90ee6605cac4941e581d057154cb0b917aafdd8b413ee13c6a6925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXG63NW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBz5HqMxeo7ASNcFCj%2FyW7kd%2FBb3vNgSm359iBzsIseUAiBkL7i7f0lRLLQoBeAxU2QUnd7KdzyoUoR4t4mqXc2VYSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpm4x5kqBjiAF%2Fvb1KtwD8TdbXGEWICnvT1pCU%2FqTpb7XAny7O%2Fgt%2Bmx6uDAUIoh1ZQBo9KybXELzsixx7L0r4dJTq5wxkof8x%2F%2BjwmzNd4nbR5A6HehSG9UWoIoq4hxOfQQIYO3RbzLPeJL3gzSjxeS59OtG6NX5tTDj%2FM6dWseLwmpIBuelU1jLrGZ%2FCf%2FwWN3sefaJC6tQ0uGXvhjr%2B6%2FxEizw9oZevMGHvYwDzkJ9TdiKv5EMpqdg5Sa%2BEn2Ua4EjYaSuWTNpqdHc54YQz73YTURLASXx54og3Hd5kMJ3fZ%2F%2Fx5NZ78g6iF%2BePU3OjuNnsPJe2vcHBvJMaM%2FbqGHAhougo7%2F%2BiJAu81C7bkHMjL6FoFPLbQoD%2BIxtY3xreqfAgcq0ayWuyaJrzel2NfKCr2YJt1dqrPKVsssFdss59kvJ%2BLeTecSKyT9X22j%2FnNEDa8SubeEfmqGZ%2Fb%2BcrLw4FawEj%2FFblsL7wf7jqhSR2%2BmVmV4Jhy%2FP4HIKjcy%2FQ%2B9w9mJvO%2BnB8F60bpBLogmrBv7oOxybMPy3JelWSDyTOXlqN5L0gBZIBMXUzk7%2Boh7k5z23go21stq7Y5YAVHRdYxjdz46QoFHQR1QCkW7fRsWnSNLtOSADt6JY%2BOiBL3pWE632k1S1oeUw69DYyQY6pgEcqeGDqevVyqsx3E8nDXF8QhN0bk6yN3VmM88Wii2GRgSKtWxKOwx8cQATI9oX4jeirPgJnwoXPY%2BiQUoeG%2F3O3R48SkUDxlPoqRaJO1kiEOJC1Ymxw2cCMLfBdzV%2BfHjmX7vP61IaT3WIvTMBEfCwwiOsfkzs%2BFhwOi2z4lfPuRhVzX1Z0pKqcaqUVlcHe6dEfGM%2FT9N9tw4CuAoFLIMbO3%2BODblt&X-Amz-Signature=935b8a5a36faa6adc6eb6b30f50117566c5824c4d453f12465678c8816995e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

