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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z67LPN5H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYOMT3UBBV%2BQR%2B9rXcyWMKDrjv19rT80dHz3v0h6%2BzlAiBiezy2g2L0KE2SgndjgKbnej89fRyxGPjRk0bElISGUCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM73L71O9UNs42AE3rKtwDPgLibA5VgCJOElwE3Y0o3sr8pZC0N5bLZ2VT53pWbC3WwBaGVeE2h0%2Bcqa9tCNZ0jblGoGdhYAM%2BPSwjTEZj%2FzTzXUEhPexRbtqe2ZxXNTjFpcFOCoSFZ%2FIGr1ma6fRRkeoWLRwFn%2B31EKUIsaGgZfKFA82S0C%2FzMff9SWzk6Ee%2FDWsK1ks47ggQ%2BRnfRijFCjFzVGLxRs4Kv7gvB9XcV9fgbIe6zPsY7KHjSKDXCs%2BXY2L8Gk%2FNMKT1oZ%2B9X4l0UrWMBZBPrF4EpzrPJhGstO82PGgHTb5oAonuC99shv0Wy2VUmvQ30hrmSlD5TRNKRLiN0GFw9hxWdzPu4K5GOaQ12mM%2FagTf%2FdE%2F7ATwH%2Bm1S46JJKyyeC48ptTR2QtMRDKR%2BDlot1G09qrk0FX3EL9w2%2FQRHvUN6HMlcstf4muyPa%2F00iMlFNSAL26h36%2FaZLkJ6w3LiiQtrU8uwGHNic9zO2Wmb%2ByZg7vU2McDbcJMV69evs88W0gofxPmTGGoPVg6%2BBzYO8JRw%2BSN5wZK%2Bm6E0X7JMH4fzWYojX%2B%2F7FKS6jfQApsGljgqdS%2F0R6tH7LW586zigOpOq9EEiiWR4MFfcyBC6op%2FDRL%2FFKKYgdkMRAANCuhz2wWdo0gwmMPdyQY6pgGAO9e3b9wO%2B3TW%2Br%2BjyW4TkITQQm4CW59Qv5op4eMQiOf0z88LsOhm2dZr%2FGV%2F1%2B%2B4MVONT4u9ZdIa7uNoewksmesXFk64oaMLkfTki9gdPkQdVpdjQW2v%2FhLuA9lc7CpxhU8UJPbTJISVbVdkZQUuFikeboPWnSInCZNBJEJGbm1CWyxoPlUW9l1TvG5%2FeBBk9FwnrR9dZZh6Hdhqp5SWINeiUjkc&X-Amz-Signature=746ffebf686c64e7a388663b08778f2bf8e7faaefafc1211916036d2ecb9324d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNUNMGRE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoxlNXb79qhCj9Qv5a0aNnZLwufv1eeJXCx0LPIlcpYAiAvnPdInM8VMK9Zy2dQHlzLfmjzrOs6J7anipoqGvKUjSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FMUvxfqHsJBSrHwEKtwDPnb7h2NdGcwinSalUtB4g8QDNUCLpiU%2FZpmPxgbVk9EUWvUYy2UI5As0Y1L%2BzGFAKyJe9szLxAyvA2xbJw7RIKKUO%2FGrxNFGa7mrit2u8Cu7vRaQHc2DGvH5IVgMViVtxa4M1X51IyTLoI%2BHc5ccu4yc5A4uCav31Y2hwLVhAOk8654BaJXLMbXlWN2zLXbt4%2B49mzFtE%2BGbtr4q%2Bji%2FJ59bAikWhO1Nfe%2B0%2BU55wxKqzwIQRM%2BXRAkzIhAuZBfrA2uuGtzyzuiZNOkA8SrWRhVdKmC4ggRbvekr7AXUno0DD2D4MGTjUQ1yDjc3U0vtdMxAS3aiJHnQU39RBHzv0g%2BZcpCNu9h5kOYkkT39qRfAjWaMiUn9DE7fQNCYejL0FOfBtsQ81SrD3hg4jQVDGvSymB0aS3XqG5slBDPjSzVskMnNR%2F7Yd5bHwrZ7anQoFsjzyJA1NzRdsaar5RvQXBpIFUrt5ffa1IuN1yZZ9iWZfQhKak6JGCwQCNcEXp3onyh9QeM3BnTh0ZqQ7g5C7I7W26a4nn5heMKDK3oBfgpAfEfjQfHR6%2Bq1A6kHWGod1FvKS83xmwxWYP2lLCts2u38t0mjLiKVyac5jAbD1OzU5rSBHFNYWmNGYG0wncPdyQY6pgHLZPHRicCyZP4hIHFqCG7%2B4nNx5P8Jnq54uqyKAzT5veCitGX85JQKyxaIOS%2FlN1gJDMq1HVhnE9NXFagefFhjp%2BKGyYtoJVp2WgcYOtHGRfeSCRLnM51IYh9peuWPVbts9g6wwV3wTbQiQY8Q%2BS53Po7fvDJWk%2BBHz0IffEOJurwNYFWv%2BwHd1Kq12ebIGTc9p755yozVA8T9nc%2FWP6LCaUDBIRh4&X-Amz-Signature=0769576f8926761db4954ae9f014e074b40314b9d359f1753d6740ebc99fa47e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

