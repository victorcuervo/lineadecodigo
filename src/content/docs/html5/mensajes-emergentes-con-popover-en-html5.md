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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZOYS6CE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGf0dmbmDGwWbdlf1336BAiL9KZNU%2FEeOGPooKtNZirAiEAn27OvDvmn1igzocrmL4SdVBECNYgN0GwS%2F3ZNPQr5HsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYjgYsGtaFMS6g5ASrcA3uAK%2F4BlAcz3GgzlCExOkBDtWQtVptVKLrqM1XiTagY6x84QrQhMKhqnfixjKkF8%2FC7E4%2BGBMLS8%2BsA9o5xq2bzy%2BVaMiIWSHUZt9VEXppY6iZxv3Gt2spTGnzduqtiOcUS7Hc4mcQO2mY2cMYHY9CfOT2SjrHwWVbMJsS8iAEJJzkOBwWY1DKzf3BecNtkS37BXecc3plUH%2B6u3gcjKcJBqdvUmkSjwsQJ53mx2csvTrVyeUAHRNZDY%2FcUrMKW9u9z7x9RtLJBcIE2J32ehrzJ7AoF5vCKRn%2FnRkZPrmHFpoInwddSeb3CR92O9YXPr3%2BFr3gEgnawFN89F7ZH8JQ6JXMAvVpzre1ot75h9txhlYRHXXZkKDxKhiyR5uwO5y%2BOcEno9v6MFd5yJ%2FKgCZMKmOg%2Bia1%2FcJBrpKYX3Ih4xW8irBpPhh845iHnYxJQ13qukIZp%2BZhAC0YAzNEoyzoXBi3W%2F4Y7Yo%2Biv1KYxe05ucIAA8DtJrUceadV%2B1OH%2BmhC9x4z31KorT4gxFvX2LPJ3%2FWbrMwpvWCfW31U%2FVRSFmKnEklDu7O7HNY0BUo69t7mtNW5vZuH%2BOzFNy3lx6qtENg8u4XSjJ9uJcwCx3nCnwy23vlgOxBJsm4QMLqA3ckGOqUBaDUmD5uDb4iGzXp9dbG38SjcPtjeMTIKOLCKbw5huIPZK0yZ99jn6tFU1Jd0P10eReSKTSolwM4qLjRbVf5yB0f8Zk02ne64fGnNwHVprNCwHcEJP0BuJ%2Bq4764szcjbQaU%2Fl2uMb6L0Ghv%2FDI7iMq0GkKAott1YK%2FSMmnNzMX3JXTqM5mzlaSeDDi1FYTrUByAT2WGwQ%2FdYJxJ9AL6ylGhW4QIP&X-Amz-Signature=22c872f3c86f48835c3beffd0842383415828938d46dbbb206f75e8821607211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC76G7KD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs1LPEBXApywAQmFbu5tq7Qm9WELmhjUixodHydy4O2wIhAIT9Zyp2LmM2kd9lnvSqZeXNbxpPEed58u45nTndjhFvKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKhC3KVqmExaXsfvUq3AMichhgTlkB0gOhxtANAlpoZ%2BUMGrp3x6x3upadATbUVoh0nJCb2inbhdNfcH%2FgK1jA6k2rmqmT22qmPsK2bEw4mKXi7RF13jkFKFhTxsEX0fq2%2FpgD%2Buw%2BOVsmXQTlqLGnP1r8FJ8cbcy%2Bk%2FKEXQudPjXQhuFJw3KulZcXfTUkpjS0pXVpMMDPF8W%2BUagb4uNsPL3Osk3bG7vuUxzYibvbEYSkgA0WYFDewDSOAHFo7cXkb5YsoiGy2w0DVDdD7CkWj9WSTW1V38NlJAeBK1tplJ1U7XDIBYhda64%2FMfGYaXQYWrenuVr04NxjJ9%2F%2B8BUhVjXkv0Q2IkfCteg26rm6V0NG9qneA40cb4CM%2FkP45i%2BhvmqIBASMnNAD2bBktSlSKvpqrc9%2BQWHVU%2FH1WfmYsheMgC7DQ2wD%2F7QIC9RE0HPhq57PsMD6jjBwXC%2Fs93MjYCLp4PaTR%2FIpMOzFkNUpPlfBhzJgVSBqKincWfzT%2Be2CfNhLReFbh43p0Q%2BfwCsd17jK7dKbMX5yDlE5SpIHkvg3WaqA4uCnR1vQbtQ8JFhvEERMkOCUqE8eEAK6ar98kmUPygxnqf09uwBlZ7M3DhhbjXmR6Wh4%2F9l7iXkMXctf%2BPtWChdEZz%2FcyDDVgN3JBjqkARv%2BNCfE0rnTZHlFDWS3q7cYfZtiOSYHK%2BQYfuYtLS%2F30QKVkjjhF7o3t4Gn1AZgJgX464cN8pAIunKmSs3dr12464c3A8%2FHqomX7Qy4w95xb27tek7f9pI6QB0Hq2YToaGsOt0aUaYhKZVvj6pipQa4IZiBYmL0Z3qgdcc5DMY8F0b11iuOYV%2FE3Rbgzq2dVEilScna11846uEmhK%2FEZckTZbIA&X-Amz-Signature=73c40887b9b37d162bf58ef7058893880618963dbb99fc8e7e99fce2943c0705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

