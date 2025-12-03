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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IR3XEA2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCICH3fhBLh5tB3%2B%2B%2F9I69LbBPspOWDz7SI8xMFHGuvaAPAiAvCdw12lFRuAXbgilhz4t6%2Bn%2Ba5HoWt%2B95X9PRZ2T2jSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM7HvUxFs6%2BF7MA%2FRCKtwDc7ISEGRKKDtLTUSfYf4gUtnr%2FAA02BDlVg%2BGky5U%2Fq3EXIxSXBpr4deRj%2B4jDlLYYHk8luQsGYGv45CAmuiLIvT%2BBOULs%2FEyUgSdxnorge2rPWzKfcaiHrpd36A0zHxEQea6L69Z9W8UXanvxbsQ2%2FOISMb3YtwMJXSfGD30yugEnyykgSI6zFR1%2FV2T2%2FlAdfevb2sZZRL6nUxv6zHGzxUZ2%2Ffm2n1u2PINWvJrPmr%2FdQVeCubEnOu1k3J8ZakbGTKiFQkZ7NAby918MsNSEHfsbj%2BBOiULW2%2BqsoijXsW5pGDsxheRE0uN7glYrq5HBtXwAaWHgKFN3jRPzS8gkw14ZxwftzIcFtkpiT6X8d1cazdxUihWbhkWZcl8Tevl0SxCL30QTMDgPDHtGW8cX%2BrmW%2BKO10hTjz%2Ft8JrOBnm7ZKGBXW25JcKxvxiVeu5GEiB2JUiPc12BO7t8R4lMpklcD7pQjlip2W9eExkRTlLNF51iJyTq2Yw0Ug5uYJ5znlqhHmMF8H3prr9IM7CJ7dl14bV38VV1Mx7%2BmmPTshgXCnJ4CzqPLBjrD%2FOv0muGa7wnRbNfUhagtiIn0HzNsn3fCuqcpgsCA0mFJt2%2FFfSirEKTdOjrySCKszIwyJTDyQY6pgHLST02nz5GwTm0b3zJUjZuG3sM1yje90teCNGy8E5TLZwA65tu%2FKrbwWNKPhnccHtUoWhHKRNG34Wwxpi1b%2F%2BhrcyLTIqT7OxfEGsuJIrkbFqygZBBCEFqfsXSDAsk8ID087rhg0z5Xzk2HIrW0BmtZGom6%2BcQJNfRgH3YM%2B%2FbhUQg86z5pjA8nIBzhBZ7tH4iOXZeY3aKURdsHZW6nRKS8Uf0uVEL&X-Amz-Signature=51c62540715558d145d8026226e3acfa0c994c0eac81f7e0e8637fca1e5d2c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVJ2Y2H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIALQaG%2FX2J4hwzS0aJc1tsLlmeuumaI7omsxVRF8KUGzAiEAu7wUtuirdtZQW3pfM0dXKGs5Q%2Fx3xwVin9r5q8isHAoq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPWVm4O9m5SVab%2FsVyrcA0xqM2d5QaDz7z9WMusLJbanD7WZM43VK5lWC7lFRTnOyvHS1Fj%2B4FK6EdHzXNNLKnr%2FoxX58naPLPo74zbyBVC8AVicGWrlsumvJfd%2BRSqUiFAbKikydUoSTxgMbF%2F%2Fscd%2FcqtBqXvMMwDYaBdouriy4z%2BPZ8lL19gYxWj%2BiNv%2BET8edFWWdoZevCx2BimQu6L8DQajpcLh%2B3O8vQHKjjtbbJoLUVJfP%2Fg58PSOQvkzBmV7EkciOvDSdJizrPKHKG6tHZBjgVANxqTMOOXNBzlmEL03j1z6GZckMWn6b1BGDk5hYS8usb%2FRTdwlTfHzvh2EUvmY5MysB0uJbxGhqLaY770lCwclcEKB4hPCS4P1aRr7G2b687x9L2wHVlqCtiXPVTawhLSxrHCHQhiXvMj8pTAX7uXRteSRal8IZ3NqOvcUO2%2Ft9B7XOSUFAqaFvRvJK1yyq9ZKJmn691zpndVtjxip%2FCNeNvx6XIHruA%2FObD0xkb9hBBVxc5kOC5utvzxMbUTUP0wRWhmxez7uJ16YP65%2FPfUHP147zdQvMlnQ0V9qaMq0jSiJCT1%2FaGS3l0d0DClRmODzY6mQl9i%2FoIK1Z4pg9c7sy7fimrIVnaZCE8gyXymk7BEfmKMgMID4wskGOqUBMtU1nIKukAccPY1XZBDQPbFf0akmsREQ5lljSpL5QhHsqkgroNdBJznO7hkTcN9SFxUDS3HFGZkof9Qgt3ywXQIC0llqZvDyjomcLucHJyaVrdvhQGOaJhtz4BNvLwEC1oGKkAUX8Dp1JmyhPsfx4jXDIEfLiDivGlPws%2BFDePBv0q6OdxXrvHhn4SIvYJjsSt3UKkyKhE2tbwsjmIWxU3yNVafc&X-Amz-Signature=bcd4faab2b1cc3d08c1a0b8c4ca6f7f34bc2686869468391609c907717be7212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

