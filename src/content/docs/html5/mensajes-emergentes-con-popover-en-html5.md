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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLLCYGU7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6GcgZVay6CaYm6t3oeI%2FlC%2FGw1SYoF954T3%2B75BUCLAiEA7NT%2FdEQek%2BiSjzPetuzWXOokQry89FcVl635FdRekS0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8h40sH6AR6G8Pz9yrcA4%2BEo0WPNkzNepxfGsM9v2I1ZZJtYgdfp29S6nZGBJeS7HGRV2Gfu9%2FN2kqIyS%2BENtfBOBR42qvRP9kjLGakGlgsPLuNX1T85q6W5Rq0AX78PKxEEbyR9j6t7ST594v5kErIJlbygSukzGvV7E50ROhqSyT4%2BD4Z8jbJpG%2BJXuUNi%2F%2FTJJnGUyBVn9I7rcrrRpWbp9LrZcET5tDUdtYwfuDjlraRIZ5z4nSWk%2Bj2S%2F0CNG8WkeFgXjxhuAJUk%2B7rQGL8S%2BD%2BUVy5nFP8168dvN%2BQ1RjcH3EHcxWU5XEKQsWZa7t9J6cn4Y4DA%2BcNPWzbuFkVCCGX9nRNgaW0%2BWeSCGaiBFYug4%2BJsmO6rLrrFhhRMTngD6GlwMbXX7j76NfNI%2FYMOgc7YIT8cY8pCflr6Nkd1B6BhvAbb70laSVhv4ml7cA3CuH6hEOrMWR7aloG7PHBaM1liPzq%2BSzfW4TPfMPQE4bpzDVXC2lCdeEaEuLggJ%2Fl%2Br5lp5Qcn8oQ3vW1BjXK%2BrmBjJVW65kDoPwdPzGVqHBz4fA2Gq70ic3%2BMUjcG4Cm4fGe1IwC6SkexhPEVqnwa8d%2BJv2PKNIU0W3JDX1xkwoiV8FybT4IskbCBJXbuZJUsL5h02ex4CllMJbv2MkGOqUBmIFxhyEFic5vxoZCR5kRJaSb1PT3TZ2OZLD2IKZ%2FH3c0CKuQiGiM33RAiAbOVeXMejq8Li0ndKLG7vc3tKATYwvBZSpur1kUIl6l0rDmw%2BSAmUuxBJ0S%2Fski%2FU%2BD4IbgOSsJaYHPDblWWcydtBjk93TQT2RHZd0cucZzSX7fahATGYqcArs9NdoXCiPc64%2Fgb2qzDCTPHJ%2BqdkcoYrX0Hw%2B2Rwu%2F&X-Amz-Signature=e34b059f17873019a8d42aa7197fcf999b868e94ac99049bcec01ee61ef0cff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXFQHO7X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMuqHARYxtxheIZtcmeaBSBY7x0czBXwuGq%2Bxv9aiUoAiBHdhg7ONkJvZOZOUAyb%2FTrrjKO0IwIt3aeeMaowza5cSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKG%2Bt9hV4D45UtmlxKtwDcRqBZm3l39RHlP3BavfCx%2FX8TGTvrB5AylA8G7%2BHE2US7s%2FcpIpX3neI99SF7Td1arQQYRuRLBde%2BGns%2BTrxdHDjdwHplDqYS%2Fan5zA2FJWhYK4KYxvowsRBLwJPIxv3cQz7B2rRhmPseIWL8CmS3qxFVNjoRe2%2FjHOfLveRtDPeP%2FSMITK2bl5NVjfXSDgL1%2BEhfbDPCeBm594rFJjt6vP1mUzl5SCh%2BAoztFoe6sVx1WqPbpRzN49q7opcYlojkvDWcGTq7iOP5RZCHTOpHBcXxct1fG2%2BGojzcSlBtbqieG30dUBYPlOBuIbupKBLslPCkvrQ%2F73Lia90wtZ6qxcTqvVzeYCg3D8%2B%2B09Kay%2FGXYfikASOI5UpeHnicotAkAZXR83xNCPbp8GibHZdJiu%2BIICAVXETHFcEA6adGkS7QR1wLH%2F21asSDKKr4cGOAWr1P7u%2BV3jhjDG5Rbu1Fm%2FnHHduDNnymFCF2mWqWsbEtmbZNL90iekiguImTiyUuvPb%2Bc85YC0aseZw2Iw2f1RW5cV8lYES2dfT4xmNXfwpCxbUhuSaFndN5lGB6wr%2FxnJ6%2BKf4DG%2BRkjOwWeG9cn5tLfxhHqV2DxK9HAFlWUvEIoP3B0u4jT%2BnunYwre%2FYyQY6pgGA6yU7dr0ANtYi5sz5flq0RNj4HxnwY0zdBtFyzb8nwUVMZEEFlCS1D1xjSPj7M4SqlFCkz7%2Fi0ZDz4FgPZAd1z9ENKPzEFtlw32zPKL7CZfIjapuyl%2BkHNCD6XKPU7Jpis4H6ZNzIOCAJuZx%2FXTqKC9ZHWZTf1V4fRo%2BuVuQ%2BUU9wFwpvKTypcZXOPYxuD%2FVhEC4J%2Fj9XrenBITY2myhjjsSD%2FWgg&X-Amz-Signature=4d8066859fdf541f1dc49c8ec0769fb0b6a3efd1f19dfe26da99365ca47968a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

