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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVUMFWMB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGusJumFW3qm8wEEjXpMH6qs2R18AbbboSq4vFqiLMHKAiEApzwyNrVXK%2FszPEzl22i4a37OCBKwvGMthTv63HVlwBwqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2F1hCO7BVWc1eOCZSrcA%2F8MYpqHvWiZUezZUjjIQM8V7J0s%2FXSmZksxVMSvX6cp0K70dcLtVh0ce3ZfaUIDk0OcPmehY2P4AX7eyhrBL6dl8tydULuDpjZJlfs31Yd05lIBSGUfUaqveUeVa3FQMEJ2uZq%2FVPohQGn%2Fd5JFbOn9wbqZ4PdhSQa4hVWlh%2BgqnR4B4J1ejHxzDNiLnK71JT0dPkircP0Z7N3OkRVgZwBFyYh3fQUwgxOUBsHqsNldzowk6fnCY4%2FM7gVtVGc37pHllRbbRFu3P6XbGpUdZIKQfZ6xolxAalMcEm6%2FyttZ%2F4Rbgv7U0Ceud48M7ZN6gz3Zw4WdGHf550rfcpuPd7wo6i6gV2nmiMEQcWupFSYCkxw7D33Tuoj5IeR5EyD9qzEIXs4BkkwqAmo73DEi86oswybarAGKKEh8y%2BAzubafm3m5g%2F2zRvmEup0w%2BSV6CKFTRtG87E6wAc626HPOHZvXiUwSVAAb%2Ft4Cl8jXQGIbITOwasjmcOL62oeF4j%2FoN6tJw19jo%2F8MPh65BivVCaGQefqpnRDVFM7XNoruo8R8g4e5LBsAEZ31EQ%2Fq%2BJheYWYcBoOZ4RIi5uMBEDhy%2ByH9apmxgHEbb1geSvMJPo%2FN70Oifu8%2FNwJna7jIMOW81skGOqUBey4Ur54OzHq8fvSS7QlIDiZEgr6%2BCUhj8sKwlTGOTNn%2Bqb6PynSlR3egY6PxdZkvlhqJvusectyygKwRgLXQKZzon9Sd9UsV%2BL4zeMqYsiDFfWShqDOb2hf3AfqiBv3iHB2MKchAkJ%2BaLVmthVSUbzWaYFsrUYkL44BOnNbNno9pjG2s4iw%2BelYFJpRrl8OODtfW6%2BPyLAGU%2BSZPByj%2BNXotqV0u&X-Amz-Signature=9b5524661ebc2ce4065aedc22e81e1e0481124a1308d4fe21f4a5610e19c8bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ZKDA4U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B%2Bu%2FP7I9buV1202AUpa22gWpb8o2cqQYeY7CJ7NI49gIgWhA3s3aUGgUxeC5cfThAFHdZrpVl6r3VpYzpZkVkhRAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXwTpLx2r1ITbK%2BIyrcAyZjROrGY57TIJCCfVfiRArJ9sJIs1aS1TKpWEYiyB6IG%2BzYfGs5wzj1ZttfxUj333%2FgWmcREGCwLx6CSqaOFCC0nL%2BGRIKOjUaZqyO%2BBUALtzyC%2BLCnxc86ezwNbWq7gLs6JowXLdlOInOIEXP%2FaYoPWKFIdB8ma%2F1ApR7eW68oqfZ3pXX0Rwc9eeix8TJvxPqHuRs36i9d%2FiVBhBtaVSG2hCqY0OMvITGm2rFU%2FMkWMLmHkKm1hyEWErq%2BCGxVtSj%2FUQkzcJkpolPcTBp0hEKgH8D5kIttC27SlZPKubmowTjBjekxFflAQ5Mk3eENoli7KyEA5n%2BW2471j1hC%2BXXGVIOYTlKIbAWe3ADbNXXfkwLrbtqeUQPO41kL6HowOn%2BpnS30h90BMv86TIV3yUuE7c79mLSg%2Fy6RQPWaQFk2uTq7w4OrNuNXPz8ZWPXuPLvhqPpO0j4WpR5rJmoE51QYjWkhJCnAUaM8d1Jds8VTz74JG3rzZLEKP4wXLka3Q%2BwFFsZoh1DchZEZ73SMFxSqCQZxhkJ2HV9pT9SO1yWfSLyHDNJ5KruMzC%2F%2BkZY%2Fy2N3Ki4DHM%2Ff%2BTUWq9ER3UWcJEKcTrR4JKOiZBBfjje575%2BceTsBTH77HuPmMLe51skGOqUB8NizViKce7LdGPTAqzk0dJk2hA2Vi53unPklKd2yitYTAdzQvRQq0psyn%2FcF1n3R%2BpS8KqXqzXHIDXxwYM0TeUdSNl1s3ihRN%2BB49PLj0%2B4pEfQ8MqYzaB4TtaDzHUbZrRizRHcwDfBoI7rKxkYVOaXBCJUm0tsCSAbUEd7sePcGFLErz1jYF%2Bnv6U8zbfiScZ%2BFpZQT8nB7EbVssMItPT2q42iS&X-Amz-Signature=09a7c67845d5403d83d4e0c39929841c1eedeee2ad66d4b363b42b7c19f30f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

