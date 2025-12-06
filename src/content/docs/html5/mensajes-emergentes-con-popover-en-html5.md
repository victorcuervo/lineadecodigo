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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3BHVMPT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIlrkCUoCrn3t4%2BH%2B0s1NQwxcAnENEkgRXaTdARzV%2B7AiAr7JPpNCJrP0gYpUlnte%2BK6sd4m7RuKRpjeMrRo%2FqwZSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMjiQ4QImr2hlHwfO6KtwDEFEFg2uTzJdIx%2BdIFx7pDkwymYgcHmbKaAFBJdVq4neb8%2BXsv6qsS61j1%2BxeVEgx%2BGuRdJJ8zqJLefggTwReC8jIqSBjjiU0PS7eEpY7wJI8jPuo2nD19T8i7inq8AEIUA0e3jJMmAOKC09gig9lOXAjZQ4V9QD3Lrno2hS8C%2BPAt03yWpHYIsmHuzkIocIKyCjJbiC10YLvogfgMBViWRhCt3Wr0E9gfyhLh8XJo7hnAxg%2FCf6J2YdewI5N7f7ycgfx9Ch12tX%2FomRr9zlmGgbV1V4Txkr25Bg8hE7%2BGcHpdbmDQZmJWGHvY0HbIsVn6FS0HJhiDhXHUZrieErVl%2FlotAcWuxzPsEK918CUWttBplMxWWiiXWPOrCeR%2BkyoX1%2FBw6Gelh%2BIHsevxfT%2FYOV%2BKTOXGMql3BOvd3vpNHwhyxVvAmIiZw5x3%2BwxJsg9ZQak2qR7i46UHhHq%2FHap0Tc8CsYH2ozqf6LMhRYrXeIY8qOfP705CyhER1z21UXvMhT4ixEiYqAinROUt6YrvwbAVpgpH6iaPqX3NAhfg%2BFiH5tbJDH%2FoMVCIS%2BfBUthFcYd1lbE9uN%2BOWQM0qV69eLt8WZP5mR5NODEbcPrNMG2EaxJnkXBV%2FseKD8w7qbQyQY6pgE%2BH8XfmP1fFTubJoKykI%2B7tL3MlAYfk%2Bm8uO3JLEz6Q%2Fjw%2Bi8NiM80TWi9gS8T32NuIcmVk%2BGyyZ%2BIOyFxtjBeXe3Yhr%2BOXq0iOJv1l%2FdVRCIZr1NJwo%2FODXE5Bs5pf7YFf9rHH3%2F2le%2B%2FpxvjUpDb%2F95EeoXYC%2FlUS8gWaxUUMu7OxDQAtX1kec94vJX%2BRsQsuCS12LxxATFJOXFbaJwZE6UF%2FAEm&X-Amz-Signature=4ba48905f784cbdefdfd2616c4bea1c7efb9f76f7dc4278ce1124afbd855a181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3TFTWRN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9MRK74cwwV6Q5rjkfjhLG68WB%2FwTxw6YV8FdsLbbLiAiAKUD4jw5furZ2D75OcyZjbVdwhc1BGCeNecsceV68MRir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMvQb%2BbdHYQlZYMDgKKtwDQz7olMPAmNmc9RCZAUXpWa9%2FCcgIo1zLoSGHPN2a0pzdm9equPem25zneSkhcm4eeDSuXAoNZkuHxYwOD8xghEh5kgxUBSTMWp%2BlMNIpaPLFu1U0pMBAAJeAOZF%2FW7DeK%2BaYMvDZuL2x3w66XWzGTCPfO0j%2BWJluUF5OpHusFCysQY3O1mcS46HWzHoGUNEwWxxBLJgwFpTsMSDPXWq2xf9tueUgX1vIq7%2FlrU0ZszEjN9i%2Fr%2BMWrwJzSvYxBDAaQzqHRQ%2FADEYO3HZhBlJEH4RaYPbBw4HAK8bYRoFJZmFWCL%2BXnB%2Fy%2BUgM2sCfRgbizL9RK6Xchac7sx7IQbVkF7uVv%2BjCe6uYssxizHjthzSfKmsiuRMJsww2hAXQtInHbRW9asVpq5lTk4N%2FYOkmU6IP%2BE4h0BYsp5qYPgrtd2OdoGbsFiQgW%2FcDUt7O48ySkrY0I%2F%2BW7XCsPHlfKMNrRuZoQdykqlLVG50Kvv67%2Fz5rmJ5RbBgeryy1KXlYdQx%2FzRV%2F4WTHx4PL2bAa6362b%2F4WIW2%2BF%2F4fwtshqXKUezBEZCGhUr3bGci9ua6rZ0f50UcAcIpZsxrv%2BeW82nfixnL4TAX7QjrcgFeLocYDCAnQC92HOh0dksecyv0wj6fQyQY6pgHNesFEVL4dpFjUIeYHimdNUTDEMAzEtXsb2m7Ar8cHygmR3oR52CfhBs99wAAN0kL2yQ%2Bz%2Fl0wEVLLRnv1gnUTxh1Xjt01auZ8unWI%2FqDJ9dIX%2BIT9V6h8vknAQ%2BxCu3woV%2BXFVFtJK5wQuIyfyKXBkH6d%2BE3PDNs8mSt9uveXMHCdkt9ol8mioLHaN0GmQK%2BJna%2FovPX45O3k3B0FnflAkiru7L%2FQ&X-Amz-Signature=9156fa9c86c0f654b0855a2e1aa866b1828a4b86c37d050b85802695eebef4ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

