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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZYO36U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDK4Q%2F8Uyg4dW0sOaMpy15ot2WIEF%2BoViG5jAVYyQfT3AiEA3oafhY869TLZvE%2FHkcj2MAFxSr58rP0eJ25W9nwyp3MqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCWRg%2FbrsI7YmoAMCrcA%2FAdogyWw1WzFaklLKDxRUgPMjZptm1wiGYbRUlM0G%2BCE9jGMtiE6NA9XkbyMIGKsPYzGhvXli2VrOYnJWNU8JoU7womGJvJY%2FMi%2BxAvimrJdhEFUeEtYuPbz0Kq8IizMRh5XQ5M9krLrF9ti9zm43f3HujMhlwIjbntqsqkMoUbjvI2FMQxqbezfS180jXXF4LnPMoy6kFCQMm%2BRhA5DFk2Meh5nKvtl2L0KZ4pYv2xBvG6lRcqS0fPhGiczcYdCrBSF2SVytIyPOuXt5zQ%2FbZQ1RE5N66fuykaDF7yNfJnai3IYo7ioQgfsAejaBt%2B8AdWDDINrVmuqWEmDMtnxSAR%2ByacxmIkw0y%2BNIwrIRjYiTnSdpJOofcelZJFgGqYIvdEPqYRd3UwMML9V%2B1O4f%2BRVpSitb%2BRmVq8cboyNpNAj7JjwU1TXagHMzIS2tONqMz%2B735rQiS0tw04kXn4CiIEbyHEpI%2FtEUa64uGm9RKQi5FWK%2F1M%2BDjEh9cAF5R6T4NO4lB6p3jOWoX%2F4xxltiRpFlFKv6IgqDW8yXeB6XsTZsnNgILhW5YwfKmtyCvnmj1KgjpvqPV%2BZ%2FoGm8fFh8k5xM18EVnlv6sfdkbUWdIRITSVo1G89Sn9iJyPMPq%2F1skGOqUBngd5K3Ash8FULaZpPrkUK0ctKaEW555ijWwKn%2BDXAIiY2tU%2BGi4iI3Bx31ZDXaJR0zW1HSKOM6EnD0b5lsqeECV9kXYxrM8HT%2BaM45o4v%2FRUJj0V0HTb32jtnCoGW5GzlwRsK0%2BSWg%2FRz75LFc%2Ff%2BN%2F6zN6vy7rtVSMf8fK10n99NOWDphVUB9oSBkMRZLvlq8tRAsk21pkWSfkJN1GZRyPEsCHf&X-Amz-Signature=77b2e10a083b45c131954b855858ca05a576b2e27bf6c8d38fac4208deaa6d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUGSR4W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2Fi9u3j3qKXLwljkU8PCA90qV2%2BLPzguk3zbqzVEvOLAiEA9UDCGNZJk704CrmH6%2Bku3582Tcr4cIEUf0Zk1UW05o4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxWTL%2FFvv2v0BYTdircA3HEJSrhcCUcxwimpOfvsG3BF0y1rpoQDjo8%2FWRkSCuaGVj80uTuPuJenJrO4aNgPciXbmCr5dO57W1ZekGujKFW%2Fj6Uw47hioVwFx3NtNAhysKtCTElCcd3hVsuaJAhNzYQH%2Btm0J6Eb0lbUZSNPhof6IHqeXF6Mtb9aXFHA6DEFe6%2B7T%2BNaBxAxpQ55aWOcGWA1dsxQ7R5bkW0E1ZPjD2VTMmiKg4VFlxGGO9%2BdKtG7DfEMl5SYyBw8PFXFnACtbnGfRnEdkyt8v%2FGN%2FB6lfyeRwUpNXvaBAa%2Fi3zCyXUIJ3D%2B8pLT%2FV8k3fEc0SYDqlEUhwiGNstJP0DexUnHEg%2FDEGW0R8eGyomUf4A4jFx4I%2BI4MQaijP4%2BODMP7Dh5jUUynZXP8Jpa8%2BIEkw7DXw%2B9MTpBI2xA9Gghvc6D%2BAA5UQj3bG311PTmFie8Pji9NqvpGp5b2AD%2F0M70pwOlHHD%2BQ4jHx%2Ba6%2F46jgKhH4B6x8PSQMzoF2noGRP%2BbDXfgGwmDybWpu4HiTl7910ivls5nbUfekz9GQ6LTNkB%2Bp2EwIbxyWgU3WZRlvCPgU9R6cbYy8oOyIF0xJ0GJYK4H3pJWVwxZ3sAF6xmnTUuQo9Mnay%2BHkvgjJxhUOAesMO691skGOqUBzlBfFFSjllPTcjJmMxvrkbKQnakv0yskVDFl%2FM4vFLBMjUmTBOfJCdtmIZzdVH52zHP%2BpywdY4gTe54v%2B7RKyG3fxjx4wPkIqwvRbTAxx9ZoqcrQ2NNqA7ewBBN3W5D6udOdZwo2SmB%2Bz5PobM3zVSOXFvbmw3pt%2FemYc6xiwj2mRao1WUUh0ekMnFD9ZWCEIC6qrt7YhROIplIc%2Fr3aCsW9cbGf&X-Amz-Signature=32177ca59d84789ca8549b5b4d3ee484aaa2bfeb5e3cf6f3be03ada78a82e910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

