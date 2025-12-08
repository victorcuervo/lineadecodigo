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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFZGNIE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0C2lqqk%2Ff1%2Fw%2ByxNtPjyvBxC5%2Be%2FGVrs98BQMe9YECAiEA5Czlz5yLq4GNdvHJJtQidzf6mETxz516gWAV1kfErpkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPqsTQN5%2BuXGKEkvircAx354X2136fbQ6Rqu1xXqi%2FWmxw2%2BM%2FMuO3AsC38x4qhiedVqKscqUlqD%2FVm1DD9RmJLlpdoX3W2xFkrQNTl9fnntebfhQrVTn9f3WP3TdufQMsYs9aV%2Fwd4uNqLy%2FxBooydC0H8uBWNgXglGaCClqS3CNuztpgSA4twumXFEqvxkftREaUw05GeNfAEmgXn0rFaVt0xxriUlks0ITWkQPnC%2BMGe5t1s7jVKFIob3B7NAOdYQO8bMYNEMmVq5RYzf8bEUzCaXU3i9A2EAjJh%2B4M7Ehxb3gjUJTgVNBO9KLG9ALnERKw04sUhN2sE38%2FRznjBAzqmh2x8ye7kPKg2lSfQtL41%2FHb5VPb62aB8df5BbtTxDXMZgQhCv3RhZj481gNLVGTxWpZMANp9pPn19vUnDTPyK%2BVojVd4j2SBiPn%2FoT7rNEEUCivGIehLNFCY1kHJQIBvMeRhYygJhjBhHUQD33Ru6Z6s893RlH03sbdvrJagvfOGbA%2BB5fjfVmSlBFCGtWIFY4%2FxY3fIWVI8E3iiayrJwE%2FmETjjNgsN2w4jRsKtDQMiwLoCB8xXteoJxBZFk62F%2Fn5uHVzzf6jcdvMgnKD6v9Yyybl5PIa777yEv1rfZjG9WwTErGDAMKHv2MkGOqUBpHS1gsjaL%2FfF9pLIxMLhdXOZXbuJag8Yc%2FlElOxaK6J5SVRjtNtrwYCxSRfO7OThIMfrjNbmoCmmjXePz132a3DztxDUQIOsmK5%2Bt7D8JwlytemfJbpqjISt5GeZqHXQzvqAnT9Hz2X%2FAGfyx%2FwvkvI0dW3LscyxfESoZdP%2BY0FujO0bquVj8D1GFW%2ByK2XVI0V6VAGWDq1bu7kXCUYofeDZAajy&X-Amz-Signature=1caabd465e4adcca02c554dfa6f297c9c1f5d3080481263075e5234f9d08c98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF5C6K7D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6N9sRBl7%2B7cINOdvlfwqSy%2FA0ZJABuz6JLkjmNo59zAiEA4vKPpprXSiIT45ijiznvWlbSWppTBlJ8%2FUWYaNQCMO8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRtkllKLpe2fNDM1CrcA7gb6%2F6uPuZ3cQs%2BQQw55FGqJ11w1NfBKS2nIyT0NHtvdv2Fg3RQteYHaraVswTH942gj4CrycuO6sJKjp9ZJlxP0b3YbIt%2Bt5Oysa0QvksgRaRnRKhmHpbuqiIJNKsDPymIudNZPasQXcjiwvuwnQPMlKauuOLTPTeEFtqnKMfNv32NZQJ2hlBH4Yp5sIep2snf5%2F0BrLk42Yb%2FaTKFJXOJH2ehR%2FvlRAKjusBImpjbDH3cf9K23lkK7xYjhazx%2FDawngsJkP7D5qZbyDmXn1LfjE0a1TU2VWGjJjlhlNW%2BFj61i23RqVxR9nImnX%2BzbUn7vJsdGfjMJ8mI6SHsZXzpQKaLbD1LdLyJcCaCj0JD0AMdjMM0UurSeSbhz%2BptRfxFAdY65Dam03EfsgvpYd0mr5oTEppVcop30bGFN7LYgZ4z0L5b%2Bauwb%2BDAGgpwvYIoHTu5JBqatjQZQr8iM6U5ZLEu05u8RbTXWOKQuM3eLZGX%2B4BitwvFa6NpHXJTZv3JJJScT2hlrZ5Jz44qQ4eLarJAMRWW4q1l4czoqXAm6M1rgMJYQXTG3LnOoGamWC0lB3iKJWxtmMjbPDVNvso0XleExujeZXy%2BKoa1JaCs8MtZcKrinm2kSjRpMOvu2MkGOqUBQ5UWvhUHJHiKpM4oMxjcBQd8H850NlH7gf311QKKq%2FwougzAEQIczgxDkBNDmZoS%2FX%2F63BzICIMhacZ8i0wAFI8uxk%2BqPrcu7dHbMCzKSd%2Fi2xfegIvB1iRVrOV02wJvl%2B4L0e9B3UmyNLnEUBxPb842VaCUpQjSaJR3LMp3Gj32BDp4qevOFvXIur47WMr1gs3UoGJz42gmp7RbYZsIUYBhbK0U&X-Amz-Signature=a724e8664a545c0fff75abb091f986e50a335796ab4d17459900ab1858a28e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

