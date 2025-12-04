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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR22DUKZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCZlR6jOnSJjrwJNL2ODnGSlbCVLb%2BkCZSjf7%2BB1hSoBwIhAO1n41bgu5mfoIufcFc26Bn6GqV8%2BWKOlDZwygA5eMJyKv8DCEgQABoMNjM3NDIzMTgzODA1IgxGul4p30nP%2BRFXEOgq3AMabRPPqQ33TOivBZlET5r7V3knDhoJm4K0GgxRCjJPWbMAM8Gh4lcpWp792F%2BkY02l%2F4T5%2F6sma2w3YJ0dplQEyIsBLyNbOi6cZCqWBmk9KJwYqZak8EJJHrvy9rx9y9dO3FzggyH6hHdQ3V6Rv%2Bv5Faqhh94zQeLXZ3GlxnUIPiAJW%2BYA1xLw3KTHJVO2XUOiDmM7yNHTvy8GCp1veR2x2Wj9NMOzi%2BIyrlCbbQLz8eQ%2Bw%2F1F8X%2FdlAz1YP6UHWokJyBnJxAbpTyIH43btZN%2FCJjNavOZCl%2F0n9akITte4b8zxfwEjYQRJENAjZcPfAspKUyTp%2Fvjm%2B1X7P7LRhgecOHnYU8spn2bBej5X3JuhynVT1gA%2Fa8GAJbwshZg0hfyfy3Sxngs6nAcB6j4bEG%2BYZgVc3lWn6DhNRbnLrHGk0TZG9t9ZrqHz%2BMckanS%2Bjb3BKh5c0zLbvp1ipykhGNmqSZ8DNmZJjAop%2Fukb1rz9iu%2F3e4bekVqx0PPug%2F4M0WEpXFiGx%2FQUFedXT222Fv41DkUhts5MHQ0b%2BGVnVfH8NYe0ClFcYXo2z1rImIqqv0%2FTu0lKfsSUXJn9m6EBCXeQLtXCd%2BmHr7uHY84H9z%2BOa0whb3ZCU%2BPy89iVjC5v8bJBjqkAQpX%2FWGwIzsCsVVXAGt39hBAZEB6Za8bypwA8c4ZIvWbX0AgxR3OD%2BukIZOeVqOw7i%2B1EqQqUK5K5vYGe4BK55ek5R%2BxLMSn1YaAsj1o5eOL9VQWwfJogdjgisAeyKa6BAtBk61fD0UluL4uFrEgo3OW2%2BBMP9jpjlnlmxr1bp9EVTJuqHNiW3JD0vtrkARUv3tWWCMUj1PmBycPmyRyOpX9XJv9&X-Amz-Signature=a7b9cc6046a087caafb36aba162723c6643e45c4fb0c104cbbb2c843701293e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UP43XRQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDX7yA971JyMnV42bsYRLcIxz0nC2ssgXL4HZyYaM6SzQIhAOr1I3ADdpISa08CTQoE5qfyZ9l1AHQqGqnTR9s%2B7Zx4Kv8DCEgQABoMNjM3NDIzMTgzODA1IgwC%2BlfsI%2BBoalA%2BNiIq3AM3RyRUGzNBKk6e1gkRMf9A4qQ1Z7meRa1bsHVT3%2FXmyhyqF28%2BPamYEKhkqDKYAD8d%2FqRpFXKTWjwj6qpQT5vap1lrBRro%2FC5iz3XjGNvkOsYoVQMsBGVXUDgPo36CBsrEpMMvan4V6vzPySL9u1cwUQQfx69B%2B8SIfm2rLRjPTWg8tTLwDPFFFjSdvc7CSGJzrT50c9BchDZF3bUBoOW3EGgvrXd%2FFtz4cBe0P7ncheESa5KQGsp1Q1zLBdu%2BJ4OZxEH8518mY20B1B180PRKI6rPuEqjfGGTwjT001Puw5sl0Wn%2FEFBVKTOSWk0L1Lb2z7%2BrEthTlUuSW4tAbGZRNrMiW3GRJADjMxGwcva2slXwkgcZq%2F%2BhpX5TifJcoDbAoH0CxEpgaNOPbcMy4r7XKZ2vxpmF6Jm2ylVeYSqQN4vJY%2BjtNqlSA%2B%2BU0i7eNEoIPG9UvZKkvS8HwHVqf8ESjPAOxPRXPgDNaZCNOv%2F0JUR%2B0huZ8NotYlPffLx9tgZzCTI0nGQCam9BYqTiRBuJyQ25yUNY9QSsSX11gCb%2BtQPBss%2BJEtTh9aht%2FoNYoN1q%2FpznQYvKeNnvjC40digEcgOQHPxrKbaQpNmZyto2sOefiSZZd7OIlDV9dTDJv8bJBjqkAciRNxyG3rHWIIfxI9wX4%2Bzps%2BilRr%2Ba8ItkBh8BY4KVxJVxEFfxsEli2m%2B98pDt6IQxxLA8nvGm3lICKcgXgkvDduFpNO2AGDxB6owMRLYv1ZKpIv030%2B4hylVfyEYLuE%2FZIYe1wUEJHv5k03t7AI4XxuzNNPGL340C0ZnZ3pKueNO5Njx4j6kA4e5q78QM%2BuwkMm0xCorW%2Fss%2BpkcJRv1J7%2F7M&X-Amz-Signature=567b1068af8768c15b83833ff157cc7748afd0a5c4676c9ff52ccf8e7d612362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

