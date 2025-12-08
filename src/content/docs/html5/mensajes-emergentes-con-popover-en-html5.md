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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EM6GP3Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWBEVpMIpxq1DHnOsfJoZHZduPReqIsk%2FXNEpEGBKLAIgShZ5sn8aQFex1y3tBoLtwXpoxlmrPWOgHDz8UHVUSMUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2PNIZokgT3XbXRICrcA0YgVGOEBTimrQghmJ3w3cuQUtsv3tM8fR5wjCCjm1ojAGw4CsoovewG%2BhcO2%2B68vUmRqxKlv8EqX4tezevXEBUDig5d7K8x2oBTcMLmVmHD%2BojRHnjUM2O0NQayAufAB7CtnOU0ElqudxvyHZ3Cj22OC0%2BlxQNUn%2FiKaFrz0Sucr7JPb7AGVOvm2BahIeiJR5GDKwzxGBcXr5LgdACKdSg5RqpEfSnrXbtzFfaMOY8LhJ7myTU4iJjMj7jfIfBsD1RAiH03Cx5ucVTLgPFVGue4ZSgR5RMvEp%2BjV8giTdxncCvgUKHCpW4ipj24HfzL2U5SgkRkpzT2OJAcd11kKfKpCaBb8U98aE2lvSsVIXdWBOxSVKjE27LbM0b3NVoDm422DbMjL2cyqhE%2BnHRJRsGxqJ0a%2BzEsHZgGlOX3L7r1c3%2Fg86tuwg8eSVGNGV2LbrUOKPiMQGpXEj0ONrXQUhCInicFrnGwl67oDAxS5ceH7v1YBkndSYj2vtY6yPQPNlJyZDIpBrpRDSIdoRN%2FIb4ghmq2VO5OnhleugZIz2slZgx31UdSjb6%2F1%2BceBhe%2BcReZoUYM7nkRKq3%2FlD99K0yb2yJksu8e3kNKJLc6p8%2BcEOpwTmrkAlcPZ%2Bh%2BMJXv2MkGOqUBw3yCTS2UYW2lQsMbbRLt43mcZd7DSE4PP9BkwfZ0UnHWPNa8q%2BpG49V3oy9%2BUSg9BfxRikbiFW9HV4N6aAtL66bJSyyp5W572XqSGzU6dCCmqeZ2IW0%2BTQhT3bEFvAXUA2dv8f1X4qyM71WzQjsgov4kSkoIIbQzMGirQT6f38NnGncEZAumKtWYjGe6qcVeMUI8q3hfZnK38AAI7349CCgKcqYm&X-Amz-Signature=3ae1ea5ce68d929e6793954e88d909cd65e3e2e1ce195f5ea4ca4cfc9e5d40b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S2DNREV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTcFXriHauEUioDdhKeGr1uUo6QjiaRN2GKtxCKo4mpwIhAMkmZMvmtVEhhepSd%2FN3Q%2BnhaPRBG3que0xXOlzDHx0DKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCwylZzkIjAruEykkq3AMZlHmqcqrkuvnFAzf5fblBs3LjLTi8EywUqbrCBuTcyxCPHGC46GWpWx%2FrZx7Y64Jnnjngma2Qk7mRbV9g%2FJU6PHqrwgPH4De4LIEMvE9yHPMP53UkNFpOjC2yd6kIVl0R1N4tFHr0h%2FNwS6G52O76h6j48KX21gOwsTDkk83LNlG1cGc998iygsdN9ewSAy%2BCBqRzCWgK4ss%2FpoMIe%2BYh2pGhqLJr5zcqMRHtbZYHZkBYt1iqBBa%2BNXgFe9mr47YY2vQaVe5PBKbCz6jQma%2ByCSlkYTWExtb4mKzH%2Bp66pOvhu%2BPfooEEY0g9dPGdqcmtTYKOyQIvcmkw1O7E7snM0SYVbTWl9%2BGhEv3esIpeOUNCko2h7PErQ04F8WkT96mN8pyhzgFNxPo8CZiQ2yd%2BIaO%2BH7SEpxfZ4ffDqVS0wOEBP80kmfHDfFCAIUrk9EsIVAnFlLtWYwzjDrrObNbkdGaZlBEi%2FcDP9PNv5d95YmxnQGe5tJFYq7NkC8XmDPz5yjJ%2Fu1Nk7xPbDQ%2FxiFekwoSQY2jNpF6ZxKdfmCCLk0HwxU6Dd2uHqxYJgdhBkY0B4KOOOCvDsQsNZDcJuZluv%2BIa4pQ3z%2FY%2B%2FTpIZFVGDGiO27TrfZ87JMSPsTDd79jJBjqkAdU8xzlystDJvDQX%2Bzm7lY2ssMT9%2BeVftuyXwjiYPCTSbTE1N9%2BP6uT%2FLZ8kg0t%2Bgbq4Hvx6hSFabSv58BgxpcDJLqoJ4KSnf3MxWjQeuRdHS%2BD6fKa%2BHm38hqlAkuhduoMZHypL9kKT1YacuAIxfRDa1qMn1o9KZVFhDCErQXRQh18bHw%2BmOtiwM8BWux%2BSULERruOQa%2B%2Bt3MATDEhrw%2F%2FhJo5g&X-Amz-Signature=c9826c7c74764bde19f7c6d1512a87cb62755f24d3eae0b78d641ba3a5d97ed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

