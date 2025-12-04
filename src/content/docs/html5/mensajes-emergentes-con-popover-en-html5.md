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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JPUURWZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHRoIHZk0xG%2FE0tyB2ruec3kO4jbLnwbB%2FP%2FyojWfBx4AiAy9%2FbgOcrm4CDMPP1Mpo1WmNV9C7C39qAwiJIYUa7YwSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMB%2FRWTxVWK2cPLh5kKtwD4FtE%2FFUn8PyaDj%2BVjdkfELRNLMCJWtgaS7zdtoWzUPRmwzSYL1b4HBx7zLxWeS%2FezKbTdfK%2FVRNcR%2BhzZJ6%2FN50PGx9S2AxV5XuEeaK1HNwl0%2BjkoSPPONN53HqROCjeZ84hBKsWQx2lO4p9QYjIhkzDtwzjYQB4Piq%2F9BXGUqL7qOwKw6%2BLHAAofUN88qC0LF4rdX9n5NtvogK80d7t5i72YhhPY3Mltm98zH%2FGIP50vJgEE7YU8P3aw0cOlInvtwbAz20vFfjUrpIJzxV0VEAhaov7laXgfc1pcdEXeCqMOpemLNmdOCikufmh5%2Bt44oz7GFI6oQf%2F0AjVJdkyyOnxby4DRU%2BAPH1Rzt9EYEiKboCL0EXgViOE5XRocaSwpc70U5On3WCbN5VCJ3EE4QjbHRlD%2B4R4AHy15f4cePueAgD12qPI8%2FeSLkBt5JlPjq9x8IHztVvozfi9Ub5ooI73xtJkhOdhMBVLQOUxMRFp%2BebKW1nkfbzVsga674znF7PPtrChs3kVVRroveNuAjRAQVMgIamI0JRsxg3Ez3%2BwGbszFzmkbCEJ462WeSZ1xAQDyyJka%2BLAKADN81CIvxH59pnlK%2FI1s0JlqSJwVo21Awcrw2T5WQW7ya4w5qHGyQY6pgFNt%2FOBweiOdzLktQzpY2p%2BhRoOtDrAHi2qZ0Al3MIJ9XAHFmIQ8SxZwMFqkoaMT%2FsMcSEObI2%2FFaj8u%2B0xBvOJ2tCMEgNQLpwJlkenRA11p%2B91EFIQH2cG4W07woXllt%2FdBgOvRNnNZyNKwIVBjv4ucbj9DG6KRShQENGypJmtEKr%2FI4LVLR5mgDhQ3Wz1xJ5vg687NkbVch2nNIvZlt1B4oROBme8&X-Amz-Signature=f17f20edc9058a1e3699fe264b5db833cc78821632bf72f62a83a3c8f8e09094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JSX2CL3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCh4eRD9vZoIQK0fOiQUgNq1xQPCLLDSotGqx7WiY%2BNTAIgDWyR5dkwoM7Bp0VOd2%2F1ZrS2sdztsf5SGj8agk2aM2wq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDq3yQc4wC%2Fp84wRFSrcA%2Bv2ArBK0RA5hdLIrARIuKlciDqahHSrieI30%2BFOHYnxvdwZeVz%2FWzwTYiWG4SJWZU4XHLU%2FE7IOmB9FCmn3IxYzwJEZEuoa9dhjQfDE9Hlc%2Fsl30H72UWvvxWCQ2CoWB04H3X0av6LYkQ6CZYGD4npdnxhvPOaxwXWs2Ifl3EFYbK2Y6iC%2FCh6%2FaOL3Yxbixg%2Fpkv%2BydqWlJl1SSvLt0v06WNbkfp3sDkOL%2FRFbzFp1lq%2BTMCletygvgywZ9qS2XuU3GR5rtxvsoesJvhjLMONM7%2B1b%2FmmbYRaTfVznwZxvayrrmeUgYmcjlTCGDFE5E3NSQqh7dU2675GIl3R7h7aF21mQCI06INg1j%2FSCeyjb2tvAMlcgJeXn2dA0Ur6YBCb21xeQnJHcsl3yzneXwCRhvBIf2iJfJHJm3pyApsmJWPqJkZMaArOIK42czoU0FDGKqXyym5pDHSEfhJcxNk85O7RNIUNFQ4OAqa1W5LmwPofxny7gdsE88%2BUC8TCgwbmXoqgR54jCq4lx2xhaNeel3hUfrH6r5aZLwIgZyZrxh3jT4kS9wfKBCyRq4R2rUUFfpU5A1PSepVSJGhdRbBl%2BDuKotZ4eZrNp%2BkS9QHwRSAq2L2ni03qDWxEbMJKixskGOqUB1vbCvHKf6LlzEpKo3BDdWkCl675yoBZs7MYbfbDuROJHgdmeMRGKRA3aLqt%2BB0zyxbO3RHKxRSacAiE1oLt85Mqd0IQJ7dTM3yG4YQ5ACGWSVu2VznTkEFOObk%2FejXqlSV3cK5Eg3yTkeNnRjkRhTp7OXIPDiEb%2BJlAVVHr18UB27ve1sivUEWTS00XOrGkALnzq8uXBFb7n9M3zvRFh29gEdA58&X-Amz-Signature=bf641e6a28cc57f4eb5f031318539ba5a27f24cb6c46b1568de2379dd0ee1782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

