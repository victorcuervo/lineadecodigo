---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ANNCQYX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCKaTTwVDtUC4O9TGL1woKRc0aiz0rFAIo63yGFBqgnwQIhAP%2F7q2lMxNI39MKBsq1KOlhf16zKsQ5JblXnCylAUPs%2BKv8DCDAQABoMNjM3NDIzMTgzODA1IgwQA%2FwaN0AV0ZNLcYIq3AOteppJJwZExbLtpaEC8Ji7JmwY0xnvS8ljyxFqrSvF0MKiyXRhTcIhRc9sTh0KoNI8aTd3LEkLolTTaEDJL5M%2F%2FoI1JbVxxxrED9FYme7SpAXctDMKjitNTXgkL38pg955nduD2jnA1pbyEkNyeWz1fBMmBqEBxA6DoWqu37wCEsxy5RKigTqnuDnP%2FryKFLMUB7Bl38wt5V0%2B6vBB8vU6wvBFziIgBddaK0hjyiL5GlhxDdj1Sijv1sxeSkpOnep7J7nxXjAiqZc1D7gcEkMI8N3j6pZRLQgpc6T00J8uHP2YTEULJK5aD1KY0Ofil%2F8IscDMfkAPmh4qYM3Xw%2Fg7hvONVCDQB5oML4TGvNRLsh%2FzcoHpxLpmAmMH%2FNMden09Kr69M%2BLYX1YKH2sfBWHvYDaa4QmgHlQML7sTL87iBpIujpZwrd1YqxwQsMKoGVNTZT9MVXmC%2FkGkNCn9l7KfyWqCRkf4PY6V%2BGNAxY6h1Iko3DygGWOA2aJ7sWHNSZ0iThZmYMWdGLL3a7tbDMqtiNTbjROvXTpV8q%2FDL%2B1%2FtssCca9nSww2qqM5oO83%2B%2BjIxCOyko1%2BadrEXF%2B%2F%2Byy0%2BXsdtY9oVGKazItvcLP1jhFeTNIvFhCpKCeA4jDppsHJBjqkAbd%2FLoz6NwaKn7b9C5%2BBo6l9Y44PdhQ%2BAAIDmE4AgRBmf8S9BtVWFyi2KR58h44xpS4TjMA8T95ubLlWd304DWFcuO4X2BsU4JfmcvkplgyuZDzFGlBppgTrYu9qBKUAaEnfywwlJJYrsRts8Hkxgj0Vu6FONKU1lhqC9OskFI0Hb1aHYekacLFEnXYK1U5n3Szli6cCoiDqa23kJmRySnFy1h1F&X-Amz-Signature=034a85d60941acddb7fbcec24d3d1f4737f90e319e522fcbefb1340153a477cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBIS7AB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDveRSUn9fsXTskHOkqTdRilEIubCqnQ3Z0dNDeunisNwIhANbbcCm%2F1ID0g8E9Y%2FJvU5oj7FedU9IMoG2PmeeVB67rKv8DCDAQABoMNjM3NDIzMTgzODA1Igx1J5SKpGS%2BgytiOkIq3AN1ZmZjTPm9rPry3lmP2bxxztlHw2KnzwXhPo78GRcOXi8nGE2fMS2WGvB6xqUx7b2DtPfzXDmHsPFTlYyNy2hH2dsYE6mwyQLjKjsVWLEWdOZCbL8bi%2Bdn7dt%2Fm1npLGSGnywHJ0Q8oYHaP6atubiVoTL%2F3rXAAWRumeO%2B7xXyyOUOSRsvUMhQpC%2BGGGij3IxK6Hype73P6Gx4%2FeyYgYsx3eHuXNEouR2GNbcciexu3um2gp8DAUaXaG%2BgLHAXxAL3bTX31RxM180b5e73pG5xDHbvMjmXSOpUaKE6Z8auzxP2gNh6p3I5UmEhMdPnee89Vl4KJVLkimSgyQY8FlwcQsPpmsiPs%2FsVWbiKojRg%2F%2F4WyHJkTPk8OjRkHTELUlOjikVevBoPmXNLurCkSM6NkUDxDvH54L6kqu%2BraJniEg%2BAzi%2FpRA5LGhS6%2FvuBag9i372sel6Il%2Bg2orzmRFrYR8VkGg9Bd8%2FJdWtnICOfPoFbglCTG5PY%2FZ%2B%2FSbT4B9kyKChEYenNDZSYK9bRJEyDPlVj3OQ9hDRKorvo8cYb8mJpah2baS6dsdYh9lhvPKFMzJ8nzvHcCjPjNuOgnp8IjpKQS7CbpRH3WMlvnohz1I%2FRO9EU3GB0nwYo%2BTDipsHJBjqkAZyQx0zm%2BzTl2YlIEPlDu1iq6e8E9uZEJxOkNtidvRjMZSQ5cl5vnDwfrxyfyAvNH%2FdV47tCz4Vuv%2F7HdL3ZT15gzXbi1sR%2Fd0gOyPaFlyp%2BbbOlk5%2Fl8y9s1f5RZhkRJh6RUXnjEeIRiGaGVsK%2BWOdJx8Wm6vfOJB%2FSXPMKEHUa%2FBqM594MsEtwnOexyUp%2F48NnWsnTdQUyJDxmOKw%2B7jxp4yTF&X-Amz-Signature=ab06d6595edb8c02a0e77ecc7c04c3b5e99a6981823c28db4a4a497955f44fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

