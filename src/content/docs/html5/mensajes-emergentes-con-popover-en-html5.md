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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5VEN47C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD1xBSQJSLoeIAosSU%2BTMs0mu9gRhARyYTtlU36YELLmQIgE%2BJ1LAHuCdZcc6ZukiNYRY3sz5OFiVSQSocBpNy5f8Aq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIYe0z77fDGralb8CCrcA9oYjNvnpHf8oWYO3pyqg%2BkNJCi5uNjOHFg0pR4psbCCwrNKdUxuo7HqLD%2Bsaq%2BmPLLBK3DgXGsVC81imSHHvCiAkM3uw5rfAT8tNJKZbX%2FknRzb0F2Xz2oiIF%2BiA%2FxCOtjz%2B6GfAod%2F5oCVjMiVPsf2XvM9uAB1msa5rSEagYypfIHQRRFQly7QIzZKgddqrbsnBTf7E5QZZY0lVwKufNe5XykzQnzvax1%2Bphdf3ek3KaCMkUkbt2ocqn2FNVTrrUmWSqN3Ue3I5Txc%2FBY8iWTTZwYCVmKOtwQtgvlRWNq00qjJW4Rpc2TQLiVzTXdHuVl84YXVV4o8abXKhage4kp8LyNIZUHqUmmJxy6m5VPPymzKzGlEcENqffvbcPzsraX2bqxXOJlY9LYw1OHdlHroOW2xjGBqp%2B2ce8Z8kyOSlsNP5nhNEJbbHJNqmXiI4UHQIc%2BA%2BRmxG3zbVY44968qyTVmA9eSbZUB8HeF6BwN6v4wQwAf7zABdtIkhxxlTr2y6yV%2BBwqHqEN2%2BqyhSdcnMuNSqY9F1Aetkyk4b30WHhVsz5CmQGOBFPiYFwinQ0q%2BJcWhdsGuRYnA%2BR0AE1EdlibyV%2F4guvtOVlFvzWgiKHu%2BSUjAQyau%2BLIkMMm%2FxskGOqUB1baqFUJqc2q0EgjUBfAW28gXCnn4gcJ3lCG%2Bj%2F9IAtn9glJ5vtbAOd3tu6r3g2Wm5k7YEG3BMSvsxc%2FbgKBhLut%2F844r1wS56MEoXpNo4fwgCqly37%2BgwR7tRyvJYdM2W8ulA%2BvDsDw8SDz7bn%2FRBgbb%2FDMG9k573302SkRfaNzHmOhF04x4IZRpEFFvYmoQDL8gxAuJneHk%2Frw9KLfDIoT1Yw9W&X-Amz-Signature=2a8f06c46365766d15fb5bd72ba00dfb4004c12435361187935b9ac903693b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WANRRCRM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD4Er0NE%2FBtmyExZZEXLSlgcJkNQoIyPh3%2BXiC2pjj1MAIgQV968VrmWtBsONV8EZA6ybYqdPGOL3USsGc8QAMAO1oq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOuL%2FzOLhc%2B0a0Qw0CrcA4cOqFVsKQ9UOcoCDjQPS2CuPYmhw4OT3bnJQIG3NsO44%2FRu3PpIg67BS%2BiBYC5sF7NpIzUvMZS1e39m9gaW7PlOkwHv5F01CjiDBwSHDS%2F6aikj8%2B2ROZ6hjK1OyQLFrfDUS%2FHyXq%2BdlYaQOdxVLXplwT4X5xOziBHbw6qMqMXEB%2FyM%2BN1lx5k6GPqjscMGUdKsnfzhNVEShzzTGjeNGW%2BJsFHnq2wYpBbmpgpeQ65mPC1k4JG0ENGkZ06LGjXD%2BBXN890u%2FqZqYfpjxRu%2F8hSPPuxPf6AtqIrZdz0nhclzfyBEprYmK0u920C%2FVaOMJfAItJez8F5Ncj1TQBH7aYl4vMVj1BTGS2XrExaqVthERz2%2BGfetPKPBzO7cj%2Bb2fQnDsr4Vpem0MW9BXgRpcCLEyWSCNaqGU3R4AlCxWYaDv82iRfRD2lroZigl%2B8nsJS%2BweWt082Vu4vvXTIbD3tqywItWdssNfR%2B4jKYA%2FrV847i68UAp2L7yoCl%2F%2B1cRUdf9bwzjnIgjMbjM6Sfbadvt9U0OitEGKl6XjgVZT94btce50I%2BmpLBUyOws5WqcECnuBJFgCglv0UQgY1B2wkhXE2GJfPv%2BNEvuE64%2FCdyH%2FS5IPlUnkrrQx67AMJPAxskGOqUBzYhCzfd%2B9ulrr8I8ya9RFgvER7kC%2FdYDryWv1wQqVV%2F1YffT0L36ekqG9IwZJza1lkUuvOBvN5Alp7lIcjeJwPteircSGPhBP8n%2Fg7qnm45ZvA2Rf6D2x1hHla%2BGP0rB0goIs%2FFMs0I88IVF%2Fz%2FD8tsFobBzFHwgprySUZWYyZvzH2H%2F2wf%2BoV%2BrLaHc4EdpvEe6%2FUl%2Bq51zF%2BrCXC6JYPWdIm4J&X-Amz-Signature=fd6f98c1c70cb7eacded9794967c4848c27af939357326d0a2f98d2006268ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

