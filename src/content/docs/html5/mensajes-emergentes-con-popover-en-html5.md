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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2KFMHL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbx%2BsKnR5T10cJxt4jqol0LhOUReOooNYj%2BzIGi4GWEAiByyRjDqlXMU5LugKB%2FnhaFsRUkVkkwpEknEwna%2B2kxGiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJZ9q10RBr9xloCY9KtwDjbtbrufy3ic88Ait3JTeQ1PhO%2F8eqpQOQCMhOS%2BcjX7SNeovHUgNl0vl6VqT5IWS1fJuvyQzKe5U1XLbUcSVMyDZbGpFVeGY3c9Up7ZlLaYfPk094WV6kBKjUIXnICiT%2BdrCIV83e67LID2SQ418jWmsOirqR6UMtKISy3y6Vk8vYKo2QLMtKqL1tlBtMzLFwnMDeMu%2FYg9N6Q8L7yu6J396SvlkngNqmN0G9gZyy8vPrT5f5%2BL%2Bo3i1nLzKboecHISuWn%2FWnU5k7mJJN3QNpBgc1O7jZVho7p3Uc%2BOF7prA6kHBbmZ94C5m1jayiLg9glwVenLz0xxzzEZCHJgS62jR3FhtH0g3Ak0Ir08dsYlNrGqlFPKBw7j2%2F%2FTbfZO1BkxeAVJ2hijHWj1%2BK1LX9Y15TzNNlSN0E2Z8JjPC%2FUILIEbsqLsrSALK1HTKRfwrNkSX58SmMxZ7wJe1znacl6%2FX3hLfxx9n%2BbkvXn1guH9W6QhNdQT7eHWGcmT7vilbPVAX0MKeKiXRbiDf7uKubPJ8Gyhx%2FUQjqPbgM%2BN1Q2Zzl4Dmww4J%2B%2F%2Bb8cgm2Grl2X5EPAcpR%2Fi%2F9M2939n3jNiOZLnKzBtdk29Cc3ZYMnalVgBvBMwEveQJc5wwwKnXyQY6pgGLyWATxSeI5p%2Bf55kz6xQ%2FThHcvdPr7JPqditQ7lw1rrgmdXa1wCqlSXhBbaPfPB%2B2Cd31clkOy4aLRyJ7H%2B7wW%2F4XUJHAJb0ZrKCWm0gAA%2FvnJuIRJ3ujNwioojohlnFygzaIJ8v%2Bkp6J%2FhTHBXHihF9JV900IUolFQMexpTWS%2FBkGnA6lqcqo1E2dskQmm1q9S4BjqNmTJxhuE4D739%2Bpue8vW%2B7&X-Amz-Signature=62024b364c33e0be73cbef545a81f9d322c798ccefdd3efdc939c6dbcc550021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSITZSXZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQComgwC5izxez8GBc%2FqjlLKUDgXDf1HK8Xpe2ROe%2FOnSQIhAJxhXNvZ3R%2B2XGRFKPvp6WS3VbJEvCZjoCsIzvfuRb5CKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp7KHNUbeI6ToruZMq3AMUa95Axgz7iY5E1dp0qczCshORkjfSAPYv%2F7sPvhXOyOakXvIrpL0FQqr2Uok5ApsjuqBXAue4Y6%2F9tvy3Y3rRxUBNulCGp6AOrabdoyDkmCl%2BIP%2FLb5dnjsB8edPbTNvAGAgo84u1dgkBpnWOdKll6%2FXRmmelF3jJZS2b6hIr72Fw4AoAetKA%2Byc%2BZjGd3gMhofMe9kPoBUE0azLNrWACo8sqtFqlY6pRAXcSTzTqBQSE%2BplZePnEs6Z%2ByGvHw%2FP4WUr85M1My2RTxSPqznvDUS06BroTodKJxas94Xsv8a6m26xRSRSleR02GiAOf5h3VmCYskMKA14MwSUKulngR7fXBYTeGxMDPH8HjoQVO7q10yQ3voaffOVLwu87RTToRl3qJX1Psb1TNT9s5lgLFT1PfLf1qkCnxV9HH1UvgPqi9RiIDXoc4%2FPtA4s%2BT1dsAX4BNJum5KdlfvoRY8VlPBygNDzW2qt8O1dSv%2BdFFjWxJeXm4F5SaRR3Xsfu4HN0plaNeJltNKy%2B%2BXdY%2BYu5FS5BGWRa3l7D8sUAhR7RlXxuxaU1W9qTIrDe%2FDIvj2NE%2BIQt%2FxeOMUBqVKo%2BWsyRbfUZ%2BuiMn3j6Aw9DIaxxyqoNPFgxC1kd08vhpzDRqNfJBjqkAcTsvGl2sMetI2l5LxaaygsZkVfubwYD38GtpC3ncNcKRBRlOP%2B9aLsOktlLRNGuFljY5mFBerGiCLYM9rVRQV8Q28NdP3iZXd90xy%2B63jhrW6HCIVx3AvlH6WC6GHTybgN3Cl0MkAf1kkzcrZDScEJ%2BZzOo4uKxLdsoNPzKmDGkJfepIsQPBdsFwOj8mZqCAqI1NbOBKvJIowcUCIBtBA%2F8KZUR&X-Amz-Signature=b15a2950e72c175cd9b3decb189a98ac418c3ecdc1d6ab20cff52bcb36f5857c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

