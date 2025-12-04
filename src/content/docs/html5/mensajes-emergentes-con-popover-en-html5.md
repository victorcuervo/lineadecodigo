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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BBZBRG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BiLz6XBNFQ2Jw2Tr6ffwMsmxEH%2FsVMIa1gmiUaisq1gIhAK7d7m4Ybb0mqJeqRzPpjqrzG1rmMDuXx%2FFup1L1MeWZKv8DCEkQABoMNjM3NDIzMTgzODA1IgyAh%2Fgif04Zyj28b74q3AMYNlGMmnQpN083bnEH5VXtzbwnHiOp0vdjfI0tn5Kc71EWE8PR06fZI%2FKgbC77mK70uX8wtQKmpyX8fHPSrQh6D3gMnEDDwRE0voCUX0N8DP1mmc%2BhtoukZf2lzBzIiZwVaqPt0RlkIky288%2BBbAVjqImgASCQAb%2Fm6EQiTHNTFJ5ON8PxBL9xtx0XhvUI%2B0jwdRv1tVq51NnOi1Qd8S0cVRqgPnIK7evJV5y1MYFsvAiyZwfdlL7pq%2B%2FtsPbECN6Uwt86uJdT85HD%2Bdunl%2BTEChTfvtZ0u2FXjUMl9DcdYnPWr1uXEQ2QXbkw5zTiL6GIJ0mmLEigOzPysrZdNBDWh7OJZjOd5H%2Ba2PZKrGGx9kSU9wCfhFey357b3PDK2gxyvQlmrTNHEUhE7uZ9Ecvuzp4fhVtAI14KoWpPjIf4muS6auZSL0fLUggBaiwfuMH3vv9t%2B8LlrIvJacgv2qpYOe%2F4E0KAZyrodmFx4FeR%2BpfgOXIlavk9vMGY0pUHD9rQd1hIc4H2TkcK717JWswq%2FCmCzyElh6O0zupUCxKB4ExzvNdUSplurnFj2QGOqbzR2MWgeqh8M7PkIKbqogSkqtTb174kw7Y9mbAdy1yv4FlMazide6mui4KUGzDB3MbJBjqkAXD8hU8VPmLESCHBrYuXdicmI32ezi4lgQVq0DFJvu9XKRgRp7dtvLW3YbfIHECNGh1jsLTbHkAY6yt2Tg3D%2F12OtjFRYHOPd49W9VFmpEmFfzague27MMxsyrujSIxz%2FCqDRDxCBdULc1WU1CGEtpIDop%2FabrS5uP6omGdeXh%2BKbIyVYWGVAy7rqAdIcr6rHiFrDuvb%2BZKG%2BbiPdRdMI9RY8Jre&X-Amz-Signature=94dbf26c0506293ac8a250b870d8bacdb7f32ed2869e73b23efc1e2ce66a51e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKFTOF6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIgf2Gj58Hf6VPqhdUci2LW2Fi6YGBJuIW7H5fNUSWkAIhAJScwU0uFGKjr%2FQWkgDq0F%2F3BCxSLTM4hW%2B3Vg4O7JP0Kv8DCEkQABoMNjM3NDIzMTgzODA1IgxW%2Fz3u6gzah3sgnjUq3AOpT2cPXveaP8Q5EctU%2FvQgkef1WOet5olhIZy5X3KSsV%2FCGG9mC2iY8II%2B7wzYUEM0weD2%2BkFlTn1Hx91WuNeDZCwMMqlsa069weuwysqZwmrzZhfZcQ9Tz1qO3rWSDPNazE99Mt5%2BzscYKwilRgm7d9WCke5pX4x%2BxgVBeP%2F%2FXIblcFFctsQP0gKWcc3jNGl5oO%2FoSzkz8f9%2BlA0R58E0M5F4Fg6Zr7VnmQNAy5oBSu5Z0p2usClZL%2FqPbIV%2Bmz85himMAbxfuNHPC3TonOExBAWiFD4f3lI7i2YyysAPsjzQXZcTFRytucy8ZZp1Dt5WxVJSxBwqdJeKjFgdSQ%2BVlwXqSf74ysH0ezU37KV2eT1%2FoqBztmez0uL%2FIlajcMB6IT1E53C4Uwd%2FSBAdY%2FTVZxcdyOQ2QWI7pviGl7Y2dLf2bnP%2FPHVl0JJQKU8oRsPzjCixOOnoYPpT1mW97bUo8gMRtvbAGIVfaOvJWIYgs3RdPxXNACMaBHlARx6vV%2Bml9StraxqnqhRuTmWNRcotuVozW85fDjmeRijg1k3JPHJT1bjWVWqIGBaFsEOJgWv9dBrpf1ulcATo3YuqmSqLBNiN78a2i4kj%2B3O5xc3JUTfNdklWZNTQDNobADDU28bJBjqkAV6z7cIM1xDMEOqrvpifRkWefhslmf1Ce5Om0k7lTGrhn312TH3Ly%2FdVG2J%2FM1Ar3JuwhOW5ovD0YFFUjzggXFkmB4wnILgzR2AcVXDcZ%2BNrETqZbT1uPpV3do8HfBquIwkraC1yYjeCVtxQHi%2BLWaSQFLhZOmOmSCNTyGHYTNLg5SHFnRUwDEY7ZVn5Bo58RKrtAKmd5t3eEg%2FfI3mpdAayg9aa&X-Amz-Signature=a7975efd36ecf28ac433c73cab5eb59a44ac743aff3c18214ae18ebb6ec119a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

