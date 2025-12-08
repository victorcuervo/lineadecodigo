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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PIN5LBN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO1%2BBKzPzfshbd%2F7YLKMwrgCjij5I7QkzYIlMOcQzifAiACAMhxPqKgD4NFGgZP0Of9imoq7Kv6wJ67%2B8pPekghNCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbyJNHywHzAoYgu%2BUKtwD6wZb7aESAatUkLZ98F3wQvlT%2BwR7VLBwmHbhlgOvZG6RTa88Op5VYxn%2BJXvff7UL3H8UxpBzdZ4%2BGwqenWPTAG24CClx17hlK3rSBhUnzfyKM6vOvNvCFutl33oeSuV1qziAnvi%2Fe%2FY%2BbNYbWORQSY%2FHzwNE0UkVAipz2qXBXC%2F0EENJPZEv%2Bqd132kkvQKTcyNn8lsvJRA0YRFJlB0Al7PzteTe2y38lnJdHYHTeVjG6HO9wmQQr8omHcCUlNDuEjyE4DgZtEVj2b2AEne6o7LDshmu%2FQr3fUzeQcMn3HjMo9fCoL6NuXOGODDVxHgnv%2FVqBpYXq7dmw9ajP%2FNBczDNXiqOxGlvqs3dd0kcEz1FqEPsY1wAd%2Bbiy9BSThoiAHNBcVj0HsKQ%2BeIR9DGcnmexZEkBarj4gLZGkeghPeUoFSf4PdKGbScWzivAKPKbRW3f3e9XNJ2Dyy1pVaoIYRz9BSD7B0jfqMMdzGs8Y7v%2BTkjP%2BXAi6VsgCX5ahCXgotb3tjSPR5DestRkiQlaUPeCHJ3Vica02by%2BcdFLDdG6lniaHOfkP8NawFGBDMAPisy80ROSkv3Z8a%2FTioZgw0HdekJtdWpECNFWGX3NQYfrFt%2BYPRotCfhw5bEw1qHYyQY6pgH%2BhN%2FqnXP%2BmwEiFxEDK9kuJkYDeJgRQyCAHDtC7XSkkxv3HfO1Z301JnKH9Ze8%2FSKiMK%2B98RpO3vvJ8S%2FhjxIGKWcqGQ9w%2BG2ykdgzeCQ9Prr4deIHr9S7J5vmyBA0N9N9VwMseSvTB%2BXLVq8XEYPS8j64UZbgrt3n%2BiUOuhbsk0dvqdfjjXAbaal7cWANvu5G%2Fg7ycV3Uz1lbEjYlK8uoQtb4SmIW&X-Amz-Signature=93812c06d5f7c591460a1cd1556418cdaf1d66cacbad4f18294b20120034d412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6WA7NOK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqInazrdNI0WrNsEZBL5GqvVpYrEsJEO48y3Q0TlvImgIgTd8Cr8FpvbjAA2ubfNzcmk4uMyntP9KlLIuIEZMc53QqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrfN3dR%2BVmxc8O28CrcA4%2Bcnm3rum6wjf9I9KlRsyw1BiHh%2FtPOGzNXIWaclepJN78yX35A%2FLWK8npdEn6R9uOrOZueDNDPufKQMLwweoSbXwn157Cquib4UwuXGX1yrFvPUEblx3uzkLQwH5zWEP6S1PkJK5J6vRO8YMI20IiGpZwwCez5%2BAsGSg%2BPfEDMVsyxtXQKKykuce0FCjxai66E9vQ3KZCEId%2FPUm7%2BIUzZNEYXryPwBHqI4sFaUFUcSG0%2F%2Fe98eRJ6nTe2JUTSV%2B4rzlffcdiTyOkRGRUXOzi3FoxCilGon%2FdJYzMr3kmkZNllYdBtAZ8b9n4zh6kUizCVFj4N2aYA%2FZXz5SB%2FbDDEpOoOCrQNUkLyQMjhkY0yT0UV3devF9Ij3OpONH3ZY2X6akcOSQ8daubyZCGWDCr%2B%2FwdxQkfT5Gac2rzOenxTPpJJwI3C%2BPTt88nKkYsQbbKrG1KLzao2n0GqEgC9Str9Fe6WCVRBf2HWZkipyXsAUh66SVotA0Kvt6cSpb6Pl0q4FjGMk50koAzUBed2q7uRvhTWv0SYtwj6AaP%2BSHrBZhAA44Oh%2FJ7IP64QBAIx6AXPrF9eSOHZJC295AZH5rI4rsXJnT3XDSo%2F6audffYgMcow73UJH28h2bpdMMyh2MkGOqUBVa7TxHK1OEfjI0CqWiHXoNQR34GdBybkHN0F08X2tngolB6in%2BA1Fx0uM%2F4D4hG5%2Fp%2FWGNopkClPwP5a08MfI7EYLEo1SwDMBy5yFzoew3Hx1j7RjnjJX%2F4HjYgVA9vzVd1LCWWKw4q6KCG69zAYCIpfkIrcIufmu6XZOPpSoVEQMmveud4Gt73YbF7EArcmv%2F87478jU7HEfQxa08BfBnZhFaZt&X-Amz-Signature=05ed43db2b4c1ceed0cc83cc89cf00a7b08f726012212a968deeb9034df0ad11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

