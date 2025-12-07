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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAJTQ7DW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2A%2F0RCtMT9w4pIx7n9ETPHFZnUxTRUZIFEEfHvMlNpAiB67QLnZAR15asjttP800ET5Uq480D7l0GYW%2BeBcg5L2iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYq06Y16O%2Fu2zuUD%2BKtwDqSA%2F4AFx3vRKSAvWYdoWT3ypEIZny8Rz9akJYmHriw3U%2BPZPuZz8I6I4ZoaTGuXOeGNx25ZLPZQCfTt66GIUNAOxP1lXdis%2FCdOIBs7BfFeiNXmcPSfPNDuoiGng8cb3lDqXCzoVOWZNLyVtogg0QH%2FsToHQazZIY%2FmaGFlQMc1NuOGPK5AcLskTeyGtgliFb18MC6K96SdOuNmGyX3CHJWvGpUCobd%2Fq1NK877Bys2NGLlvIRgJkDqzrSaEjPN0zcDr4DN02XLZBwd7LTDh%2FBSm1yMv1r8pdulPWccL7x4uYhcGl%2F2YKM2%2FqR5L72zt%2BkIxRDIbVMOvHqGqJnOIbMzFCZLX6dCbuLY7ZVqkAJSND4tqcEQIe5cdDYtsOOgOjRJS4GiLG13QpTsV84dU6lUOeP8aiyqA%2BbOxcT6%2BRp%2Bu%2FzXsTscFJi30OfRk83n0ZBg%2BIAF2kZCoZmXHR5Bm3HnMobeqj8tU5gzKS0JRUgQOu8XFRNizWfEFP5er8FBI67EJbth6fP%2FtuFvuV3rqtN8e8091JC00XJgNpkkqo6BJwtkOqJ5CpEMGkTVReVQ9ZgEQfLktymA6IDvIvydGtu6Nq4yKCkHQNwdCxiwQ3QA4o4sf1AVv2bWV2scwu6HUyQY6pgEjoG7pz8E9O95fPkg9bT7uIrFzGV%2BpwPv0A0chU5L1kkjXRrkw582VcvEuWEnyY0I16sW19RYI5nuj9pZrI%2B0k3lIWKGR539VgXyUNATmf3PrW686QZbIfSKE61lZM9WgK4xQYAwmVzYWM7aKoTssFSreWEjWvUMIhQRSuZbW1QG2inv2OAzqsHQUh6HFkIyhwY7bE1KoQa1X6qUafvmx3LMk9IBYi&X-Amz-Signature=64c54efee0806e2f462053fa2ff898743ccf287545be54a58c7e4891228bf788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFCOG5HY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrXaLt22X%2FnAGLsPKXu3fkjeD7om69aIMPhADwt1KTNgIhANmBGMolIMRjskzXAvVBtcCQTnTItU7alkn%2B29pM%2FEyYKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynEWn8jUWZodlovWcq3APBY0hwxRoi%2BkTtynh6UsrFcsNOqUx%2FE5ud20cGalcq60%2Bdh8pwtgtudJmetsys%2FJAVvFFOwxaIpIfKBGKD3pJf%2BPzGX5VwMUqBUCHFt1GUgOnfBZg1DU7izCSCFm%2BF29oEBwk89ixeaLGpCU0YiFgoRy5%2B7QPixDOmhhHJXPqUYHLL1hlqoLkxE4eBhGo0p9oX%2BNun%2Brw%2BJ49YGA3OJxPa%2BCxiHnURjxhrLmsMH813SvDIqzDi%2BrlcttGYqfgb2W4Qln9QkTB370B5un7AMjLPra1YJiW0SkN2LwMco%2FVghZ59xliXMyxNz5TilQVSa%2FlKu45RryTcIffEB%2BEz0yOUjbCJ8KLR1B3KTa%2FzqFGYlA7gxIIw5z2UbhN%2B6%2BIHuh%2BItole95iQTXz%2BR6fQ%2BmYLLsf1MF4%2BekyjLy6QgK6VU%2BLzti48XTJ%2FMPur6n4ZVeokBGK%2B0plQwRVxakZ7UdG%2Fz5GpEpPB6zzMAnvHoeFV166Y8%2BTJBVN4tlN7dfvEPdfDTS%2FW0%2FJPea%2FVhZTZjkP7SyX9O4Q7OcRJXx9r9RC%2FZ9nptxi2cnoegO4DGdt7yKzEzgP8XMYUp%2B%2F5Bq6NMHGuAvdp5C4feOfyjUDjvuGxCgQuVR55tN2K6NgEoDDim9TJBjqkAQfHKRGp3bwYbn4GfhOCPORvHCMm%2BOpyNkf3oQjRCfhxZcBPlbzUMb4sEhO9zLXGM3UDLnBVj17xU1ey8T3qu2xTaxdmdd%2BOkhnLHLySZ%2BBqLgBJj6%2FQUr6MERFGCitf6TDgNAANas3f579uqPw23dBiwbxeh2nHFit5OZIz1%2F%2BDF0avBlCqES%2BXcSftBLQtm%2FP0PNkfwTQ221f7EHMcJm4nieit&X-Amz-Signature=273ab3cdd9e87cf0775f590fafd90b753d6819a85fe61dc50594bfd0fd5ab8b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

