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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3GH5KIF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNcZrfqwOhJNQUCErV3tD%2FwND34LavlQzWxPzhqXvdGAiEA00RXHNEQ%2BFBaVRpcvgfvxTmePoOV4IZIAFywlUuLcDIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDoKm21EHoSfey%2FBRyrcA4ai6rThKbIO7MwC%2FLDR49%2BZ1I7QtmhiXr9nBQGtV8faZ6%2BzcyigD%2Ba8JJTUslpclp96GhcLQYanSMtIXBDAVcQhrFIar3%2F50di1MID4m33%2FCKPCJ97WbMvcEQl%2B%2BgV1CFTySWJCyJhqz3HZ%2FNfuxMdPrnEawySz9TzQomyNSXT2AY7%2Bkkin%2BozoZrBw%2FYRScuwrWcbr5qSfvdrxczd2npA02vtEwcfohKBXkvddFA%2F8UHUZwAUZlx7JLMRw3zY9Iv6OLCCXl4sD1ljKIgELrrtg1MT52nYyCSnG9prQXUs%2FsNgJrq%2BK1hKQcyKKKnk8H6Dj27AI4g66fyibVkXdWv4ZBLZrfvBOPPSJGdGL9cuL5pivqSLLQe21zyf0XSlgzfZB2jFDrkeB2onkQJvskIDldhvfKkmjKxn3X40zy%2BPcerseXOLz92KGF4g5JvqT7oJm6VvVVh12vh0uhe9n%2FTiLJyM9D%2FJnIOVl20X5YZGbsmAHX6vSPOznGGkJs%2Fykbira8ljVc%2BEUtsfFPTT9l%2B43VQk92ItGMp%2FcwvC%2B8yWqB6%2FztoVdaelQDbwrdGTJM7nn0ax%2BzjEZpfsICddYfNUaSwxupya%2Fuul%2FMu7MqxUAi7xm%2FraaKvq687iDMO%2BMyMkGOqUBIukR%2BdJuIF5%2FEhOwZWDosYU%2FpW3p9Pp%2F6KAa%2Bp2L8HT6KFNMeBn%2BQU6cXRwTp8WHfyk2vlJMCju4VxIKLkD%2FPL6Sk%2BuFiLo9aPkMZv7ZLwr9kJ1AlQhuPOK%2F7JOKIihWBuiJk8RzIM%2FpXuGVVJoU95jBJQ3vZsNhVCN4U3OzWmavpbMEYq9XmDm2aK3R8cwXxMeIU1o1wsSrsZ9OI99mRFiQJJ9J&X-Amz-Signature=8d20665b9ade8bf0b2f60b4b059b339928e0d0619cebe5d1b7e4cfa819107931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAD4L376%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXc5uPZ3FAWE%2B9XGMDBSmgk1tmm8CHd3xi5FzXtuDpFAiEA7FAy07uGqOboIafQgXcdiUW2jE7nDk383MIJArZvI3Mq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEuOCtnD6FaD3XddmircA89SdZ3bUytcxgWjF8BRCwu%2BQ%2FfszxfI%2Bxjp2ILwakRy3iS82Lqavs7jL1FtcZAXTnU0f6fittHRajeV64GpWwNPAuFWBSdmOejnvlAQUmFWONoJ5cqUjUysS4CZfvm7igBp6vC38m5xuRzO8uXs4c%2FeJbpDDAWiU8q%2B0aZp8N5PS5DgeL8Re2nh5TU317q24gl4%2FAFdiSRRHlJthSwrEtfgfTE5EaHg%2BLH3Oo6WohXdQokdStV9SVwRSlzglIL%2B0ttBHWQ2nP2Nq35C%2FH5FZex%2F3jYzUtFYCvJpKnVpys3YdIi9rYPn2JFxKzSlGkZAUJIVqosUMu7fDjfux4g1tt0NwqAc7G0riLhmDdZy%2FoAODXBRLajy0uxtdLHTuBur6lVNUPSdj%2F2jeV4mohKk5OFhG1eCr2ST5M3jsgpAunCaXjz9Lk6wj83Gie8FL%2BGUv2MI5M0iJ0TyFernax8qMilJc5Zcv9Wi3ThYL4y5UN%2F3iC9I8yOGy1wh%2B2KkSaRkyiJqEioo8S2Ln%2F%2BLMKhscymaCL5q8gX3ZKEQsEqPJnjI%2BqySA735BPIdxBAO6qbcGfghNyYK9X%2BKWR7XzYxX3IBgZSpBCYmN%2BbDkvdOp7IE%2FspBQjNVRa3GzWbYCMPGLyMkGOqUBawNgvoVaXFUURBVV%2FZVGM4Mu2nCLTx6Dzd%2BNqH2F589hHCrjVoc3r8mhVhq55TfmpI%2Fzq3zL8czW7qd9T%2FZ49TAw1iA98dZNjNFZ2gq0QBZyCFGujH9jPXJoEJiHu%2FmYZ0krxnTXu2XEBY2Ro4OMluJZeDCcTZcdrh92%2BaLyAH6zxWdTx62q2T1bgddQyJ7NUBvg%2BwFOMfjt6BGI7N%2FPrrvf3ayu&X-Amz-Signature=610a6a57d4f9287770a5eef2728011064f6e71e92fa8f9ba22835f861c56b764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

