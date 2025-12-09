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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEDXZJL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHc4KezuLfSp3b16Ta8UEHswbDZxImD3CElC9W9zPNO7AiBZUcpPDOHEqdGC9oCtJvRXdJoNcMBW0O5o2sWSDNjLzSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQg%2F7Q2o0twlosT5AKtwD6COEXe6gOZgdq%2Bc9k8f24XA1qHeUlDpAasq0WLnnw8Pm07EcYmqFQZX9jogjnEy%2BPWwgomYMAht7zBGFVaeLnH2i%2BqjY8WqnJyqTkM9jnoWzYR7488OumfjZY8WA5dpdLbeYnRaeBorfFF4qO4Pz1p0YBRFSm%2BN8RQEJbCkJaYkNsgGa9O3f1ioYxPir2BNfNExWfG57E318w2OGqC5Cc%2F%2Ff3T2oRthWJzWQpVJS1Jpd84FxqKQ9DTklbItP1WWH5wdVocDx7O4U3yTCwsXIFuo3%2FtVtr%2Fjibm0uYaLYT4HQUbOYn2U%2FB9WjR97cWeTRErPhA2w78mxcHCGohSEuXg61kZ%2FgYfl3avZQvcU3miV%2F%2F3rBzmCWXX6%2FXtcu1V5u4uA6U64zuRKx3DTz6XOrbzHcRg9hI%2FAlofmOUpPdv2Czd68MF62gz%2BUh7ND1XfHvfdYYKAF%2BOEtWATwwXtzavU71SSQT6XStMJREUNcd8bk1l7%2ByZe9VfdfDTMxWNC9Q%2Bg%2BxAj9PXC8llsgpn3Rrvz3QsEiQQyYLmF6bc%2BjsderiPP0PhNFXcigsPwtfljTdJhefge4HepstPoYFFDgL4l7Vh8R0sLhQQb0Cg6H34Q53DoWqfdw8MmE60gkw7uvdyQY6pgF5dhYjasn03Lc%2FJV2EwQhi5JMChKORdEt%2FX20LamcvLDXM5TqC4EoA50ffnUy4rYJiOd3N8u0ahPH6TWBPOOTDCxXpmVoEcpQSSYnWlvBV58Ghlrr5Qw4BtcqqzPVGnpN1LZ8lESVdjJfNb1yGzCp6unGgNt8KtT2tJv4xZ%2BMcHf%2FmIxLdj%2FDrB7W9Wr6SXOMqJRElrV3GTmI%2FH7CxSqZnNUCz4Z5h&X-Amz-Signature=2b29f91eb39ecd4fb002c64c951f68846dddd28c2b8e9219c3c521fcdc04c9e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH2K4QKP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmd5e5tLTpyuSfGJKtXe2U3yiXXRnH3vbHkFhMgfQjZAiEAjZjvHCMTX7we5O%2B7S5HqHv7NYn%2BVBLj5WJjfbaF%2FEfcqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbZueDodafl6Kl1xircA5pScdtqRY84ZwJ0a20pHCCf4WSimapO3kI%2BM%2FsN1YkkQ86gTNNAM%2FDgZJIFcnqRs2CWtcPE0vvj7DZXUfC9%2BA6BjlfWvGi8b18Ceg%2Bacp3G2jY0kSnIz5PYfK5OTYRENaON11ECxQKEJqcBhxlRZAEQhiBEiSLFuGpzWpKuFWltUAf%2FsIJS7sEXy9t53AmXarj7YPsUU9qiD%2FiJhPQcYMxjFtO33%2BeViFAgXVcJ32SoTAP1gSbxIY376D%2F8fjtj%2BAp%2FOtIVWdUSnlYuogVgGfRLGIdM9FRxptvI48nM7CaTZcD%2FPl63h62Tnfi5uuvYOCXHS%2B9zVaQXAkJlun03dEEWrz7mQ5UTXadD2Te7CKCzOSQ56Ig7TQTXE6qAUYUdcGo%2BrSH4Gm%2FwZPIEvzkonK5fhKr5LiDQnq2U1Aorz3tDKLLCS7bAMk9WHG6s8fV5zplMJvTc2l6R1ZUgzFn94Hh%2F5TJL8%2BimaxRdX53g3tOLCn70rBQfhbL%2FCiFbvNgxIHIvIiChr4qhJwBzSAarxrNGGluEr0%2FKgF8AuhZ1Roftmk3qqv1ZNOzZCcm6HjXnDPrnU7BFyUAP9A7qvEN3UB8DFT%2BxcyfHdnhNs%2BIoq9abnz%2FbWBVVOpCI7bIxMPXp3ckGOqUBXjuL%2BpKun7GgjeaSR2ydsdWrt5e8bGZEOuC%2FazJ7J%2B7cy6f0gdYSBy8Y3BpuTs5mnxBPaOLYT%2FQvrp0Vq4Y51LugIG8EclYshQe5T%2FYhNKvWJ20I4xwEq1XneKOTrXJP55VHFkPwfxwO2mdl5E5WUNShgEK%2BNysGem55BElRp%2FMae3f%2FaQp56knyvPeRV9Eh5TaO%2FoYX8kenRNCZM36%2FI0rM4ReT&X-Amz-Signature=59dcee8c8345b73da93bffbf1da6f5ee71f68bd0c0e6eb02dc7944a1192f215f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

