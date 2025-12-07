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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD6Y6SQN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkHd%2BXY%2FBAp9%2BcbEHPaEOQAu4GR9WA2saYr3%2FAgEaC3AiAhvELt2s5EhJd6IFMV7p3jbBfAKWRdcChcqonaWZk19iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6kN05oaR6mZa7yHKtwD%2BpH8%2F%2BRNCVrm3uhNpHsvo5JYzbnu10npuwEhrx99Bkdh3i3L6D7kg3608PXmaWFzN3avl9GMK%2FSY%2FpWT1Vmz7levl%2F2fF0t25ZBAzgYNnySSqo0M1cVI22jlT0EvXgj7X1wpuT1MlmTpM8lLAyCKXDgNSYxNhVe%2FjnE7jBSBenJQULV2cK7vd%2BExypFVvi%2BMx6BqsiXq6NA%2Fo6Jd80i4o%2Fdtf22gP49ibrGdIPrBvL39u3d7uxxP0QTH%2BrLIz3YcC8cX6N7rL91xPgztXv1kPGbVmGhVt8kSY15cuedv%2B2p%2BO4cbbdIhLsEO4OWyzBqGQmiiHOowhkiLtBDSZ9fkICMKvwK86rC%2FbTNL5M1T%2FWQXjKbKlfNtuH%2FWIA8cNBfrtU1%2BYcL4QAkoAxWa05s4xFqrYOBFrVjZnvfjUVy1QfWbBE8qbRfFoMfhmf7UG0YdpqhB3LOy5mLbgvMFRO9YxIOG17%2FIpEORHs7tf9WrkrFIstM8SXV4F8ovj7gOKNDHr2EowiHubd4wh%2BC07XURchsCjlBXnrsCsOEJKGaNE7XI1JIu%2BgFM8UA1jnmfgGJpo%2FcxOo1ttnEmiW2Jd%2FWjqARG50UqI2phNKwWypkYn66D44nnwe1MLbxrLjkw%2FJnVyQY6pgE%2FVXkc9gmiEAUXHVvhPFBprlk6zbOJ7dv1Olt3ptRhUafClRFQWIwZIpQepqDQmSOSrpDY%2FG8OzlhJPts1bVa7GhtPYAGKQrxOEb552HH8D0Y6FEsZo%2BHpLx9cI46xQKViw602%2BxCW7J%2B4Zhy38DyxL8amQ4DEnTXIpCg0DsxNoC%2B7C3JKkbE2kh91K9bcRxdf5FWtOhe6XEJZQoy8wrIJcKgrkHZP&X-Amz-Signature=f965b40b34d6d68ef6c7a877f80b31ef48493a18c0482e26b5caaf14dfaca429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMZG5FMG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FJOeZhGd9Z5bIGhNY%2BXnGKwIu2h%2FRPWoE0cwZCIZ8QAiAV%2BJAIM24ckMKB61x8ZTWOuggOPQIO7ArQNnGX%2FA4MeiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLfLEtdKkuH5PuVehKtwDhxuQL%2BJNkPLgmKLW4xsJ7uuHCfR5KYKOCh3op6JMDfyn%2BawDAgalBk0jV4NuvilgYSSdObmYIRLWorlbGB2%2B%2BhGW92zXVYTd7SVGOVU6ugGA7QmJOGMRvF%2FDheHzX5kZyQiP%2FQd42vuUyuwwaltJLbEK%2FdASP9IlFqsjn%2Ba3nUCYIGLRA6vQd15e%2BGPXLebjQFXiwc%2BJ1vEMaylCB74toRyq0vzW1ThPU9ndXzFfYuhOilSjr9VZWUgNgIlqy%2BAdDcS%2B6NGfHrr0F4mtLcBT0GggVejgPHihFGTMEAe%2Fjvynlt4d%2BfB71ERflIxUkgB%2BKW4f7nSKLaxpROXNy3pRFTmAQB25t%2FSqkNkiCSMQz7lfyTo9v0wMo4WAfLw448UfmFX1%2FgAIAlkzuSnvse8uJgQysw4A96e%2Bw5ajX7l6zmb3X1%2BM24m2w7vx3TLrmj3fs%2Fjt6iXamCSiSSZQBGZVxulHiIu7kSw5omxGporM9IvxhhUt9IjSf6Dd59NdVkJq5sd%2Fw2D%2BE38xDjBa%2F2RFSPGP8b%2BhLSOQ6Eg%2BiWEJl7bycNf6LBrqoI%2BvQZoIn%2FgWA2BoIiRPvYbx9QrNZYNGuqXnvcJjp9Vuq09WMFN7Y45UeXZphfgPmJKjCyUwzZrVyQY6pgHr6W0kzYnfly3RyKJD8RYVbatssqi2W0%2BWKjsVFp1PPQDYwX9CHHkLXtK4cSSeWMRIpc2WTDlv5ZADeEuJte9Ka%2FU2LMtco3yMmt7AzIhoN7DEdyPlNsYU4T%2FzjiMw3HlOtOcQC5jhr5ASgcYKW9m%2Fyuvq5S4Q0zVUfghu6LvBQUtXEB8UECRi%2B0MymP0%2BfjXDepYgHgKNosqpmd31sa7rcfz%2F9JGl&X-Amz-Signature=1bba6f0b15c9e36449bb3ee443e3c26fc9eef7e1a8b0d2b5c74b0913be569a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

