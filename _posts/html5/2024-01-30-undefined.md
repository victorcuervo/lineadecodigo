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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFL55XSI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDUS7DS8mbcwgOk4Y1aURPkvWCbuu9rvIm4zaxQ7m0GUAiEA9FU8EausT1r7i%2BNNLECtVpUP3qRtvhcJoVDLh%2FB764cq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFGM3dh9x74Od0zl0CrcA5D268IhhpzcrOqQngId9wW7mVyaz5UmX9BgSMSXpV%2Fi6aQsf%2BBZaQ6uoslLyCZolQmeVBrREFasRfwn6ypxgBl9wnliVZXaRGqd5kKH1Q%2BQLtHDB%2B4wUcnvatXFLeD5aH7MvyrsKRuZi%2BztCdtE7Vc39zY2Ff5PI7Y96p%2FGBjq5%2FgdWlYnA6xmee6rIDV5isoOHyV4En1pifDy0eMubTa2iC5zZxifD3O0JxQXaPRzOBTXat8P9viNfsYXce0rpGjOdTrOpjOl2wY02sleCR3VphxJLKNbUl92%2BHGCERR9ZouspqNYjQJ9jCWSKmbDWVFOxKATfgpm07byP0pu718OV3dpdwVTv2KnrrFRlFTT04cyTIQr9O8dTTN0GOULteCiyOIsePSBrUBx4MXma0EZeNpB3W4aXstNTTjhxXaFNt2My31ZGI7l9V0eCKHgXPFxd%2FPczQWTMM8f5HTb0QNsAG5LKg02smA8Vksm3phNZPqwTfGUTyFK9nAS%2FvnonVoVRgKikY%2BOQeiElKgIVS2IC3%2FgY%2FHHO4NumPr4X%2FHhdKZFf49N8tAsVmZvLfyEfNEf8m9h8%2B4lzIN0ATIfy%2BrevwOXhf6Q%2FZ75%2F3KyT2RI%2FtsD%2Bn1b7yEQmRusLMJrawckGOqUBsICmV5xrF8QZGkPtawSJdkVkzTaJCQ22oGcg9ntNm24%2BXCP4rze%2BEUazgNlZupsh0rMovyX%2Fcq5WQ%2FZVNxP%2FPbq8K9Ph6KkXHGEDbc5eMYhz8bdOQ%2BjoTUjhw5yngfxP7v56ZoBHcIvlqDZesR%2BOD5rnN%2BfV%2FIepi%2Fifyc2bMwXVebxIDbBC6G1dzO5LpnRiySAPFHULylaGgMTqqSVnSwKfU6lT&X-Amz-Signature=a1edf861ce0086e0dc96a0a3b85826d1251db6f155f7ed88d656d7bb1e9f6ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4Z42BJM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDY6vKAbhoTb5AmR1ZUuUsTtHymEjaYuLwvBwcHF5M8MAIhAJjux5abpqRTJCjb8wL92SN28zqcllCyUVuL%2BC1FUD5UKv8DCDIQABoMNjM3NDIzMTgzODA1IgzC9k3M3EKmIuoPS1Aq3APmEut9kKuHwV4j%2BV1NN9DMV6%2BtWiZs6a26VpBeH8rkugFrTlyr0W6qO6ZE0L3BrRrr0qphRxbT8%2Bst%2FcgVXoXs6Ux7ET9AwTCAnryLPBO8bT870BkJQx8JenHP3abhFtbqtJiSTEvMqqFVGmI248xCxcsUWzM4FisLkfr0llQfQWddJXczIyPs%2FX%2FrdaJDFMsoWqsqtvnS2ON5hnH6BjBkM86vdRHSybOV%2B1wPSUXMRb%2BfSSm0F30%2B4Ij7XWkjpnFRSlAWQkqiKhwmCVF0VJ8uYbChkh5QPZ1TOqPsvMoNQ209et6IsXQ%2B56ONDbAtZ8sH3vc3w4h78tg2HjhnU2pGZD0nkYlo96vZ1SNeKwHJz%2BaOzRb3e1c1n2XD8smM7f4kq%2B%2BZzGAGfvkpXp81nB6qO9ZarQYg4S0rkD%2B52CNjmeiudPn%2FRKOnnjUahjuDK9lrN9rjaT%2Bq83FK%2Ftrj%2BmcwgRxoSeJnZirv6q0IGOvJfPuLWdBpwTS235kJqukFMb%2B77kG20I5Qqy6yfwJTMOjn3berSr7A67TQ3xEUAccg7kybMnLlQ8%2BWe2XMOWuTazmlZtY1cIa%2F1XoiWFoD8K6mQfT3gpNgxV6YPdNgPJgGmLY%2BUmfYReTin%2BcG%2FDC92sHJBjqkAXTLq%2By2SU8JCFeSLPas0X5HexVLa32jvaeeeFfMFuMPZHGSGqLDUH6LveGyLd4A%2Fiw%2BTXdtMXIQGlryHm8E%2F5KAus5noCFLzuwr0yKXsiIcM9NmYtzydLmYSbrTP4qrrf%2BUDaQiMTV0Kh%2B39ptjPzWF2TYbCq4dUX9%2FiEo%2FzLy1R54btE1jFPqzp1EFRQZ7Zjic76hrkYJ3xlcrmbVqCi4TXZkC&X-Amz-Signature=f0513640c207f4f50d68393df79da1890726ad94b75dde4201ef1654b644bdde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

