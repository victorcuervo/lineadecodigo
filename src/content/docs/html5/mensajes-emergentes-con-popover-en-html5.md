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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHBK2QT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsL63F7KWqQS0YOoVIggqRyfkFNCqFZCfk1HqFv3lxSQIgIMiRy7Jf1oVA6ZYavc8uMJNrpg4ahXiS8dBZRM7pcaAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQ7DQppmp88OrItnCrcAxsRkgkXiif6Pm9%2BkpqixIRu9fXaZnOa%2F5ieBL1O2nRhbEvrzDVoqLQxxY3clIyrfWJg%2FXJIIwiNmAYvYkTkU9v%2BSzCmbVeLlRR%2FoFP2Bl8ThEjVkVGSkLIcfXB2OgdOArFQ9RmifuFUO%2F2NVNc9WG8WIbLIHcEnzJVEn%2FvzhJ7s1Qz1a%2BkTTTtTmqR5JLGmjyUyiWB6AWDRRSYxY6%2B5PqPp0J%2BF7Q8%2FqoXcivoUgKOdaIZguimA%2BEvznyapSoVovJ%2F010Cqm73SVkjnyaFcIHMpRPqN5jqi8T4VWMkz6IDE6Dq2Ei3gzAQslKWkQ7eo4NwhefFgxhTzk2IkWEox1j8tQ04v6zr3zFL%2FO%2BLsQELYsJ3zXpvNBAVn%2Flt%2BKLyeLJkxQ49yA9UmC7LLDiKf8Dlh2BNtDhTwh7kb8Oif%2BITNYndsyzQ4nRBv9u8I8rLV6tBpGp4U%2B68SkDKslAIGe7gGOI%2BEajSeB9mKAKO1JgkeMn%2FkOMLcITaJMdChXv4BIGEG6vqwBH7h7DkEbgLT05lU31vSteFQ75plZPrjivuZFgvN1AlxaG%2FCLTiWP4Z6NenM4WbSCo8lNKaxSLXGsVhFJfVLVh6h34TXNB%2ByRipVhFPzG5oAZSdYH7wjMLPG38kGOqUBrrsFaRclH4vZfC5TQtjCLIK6yd3NaH%2Fn3dSRWUK6TRkHiDTy3g%2BIZNIXPFyahdXAXmkKH9ZZ%2Ft2AkXVcalT0CLpLUTbT5wYx%2FLcZJI5o3U8CFv8OsliCTaHgql9V6qe4%2FOcxEMUJ5Bac3djEDsXSxAfbCffa%2Bn1nTHgMcIOYoV%2FzJwKbPKLF7BF5IG9kXVuJ9wnPTGxEHv1tt2Hqv6cHWaS9W7jS&X-Amz-Signature=f31c011c026a78b8056979061672a07bd2eb4a6a36438d0a130db18175973573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVKESQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiIM1WZFuBtAn5P4w6fbL4USVjsw%2FlSZGMBhyrzhCXdAiAgn9FrBFUQXPKlU8xbb1DWD2KE1jf7SV4r0dxv3264AiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg00HS1eEFHooouiEKtwDGZ5YLZhMWWNEwxUoiNpaTZx9poayI212zzMo8od%2BkDjo8kgXMtAd9Twi94Bnibx%2BV0oOEBkJSXxoISJVsk0k7XXRTXskCvQYNPSIl%2FrB4vgeHyubpBMujW0Y6ImFLbVqWo%2BE%2FfInK55CSUgoLusSTcyN9Fug130tOn03Bvk3R%2FHT0IWZcHOXVu9apQkoDczXXHH3FiqiGDVe0F3%2BXuzIZRFoNm9rnGCUguQYs8%2Fo3vi3pcw1%2Bj3Kzg2MxBId5LjgQDKeATCd8XZrsT28njjwk0EYly1WYPtWDhgbkKR4PwPafH3t7yI0TBNIJ3C%2FggV%2FavrrpI%2FSHYmJcjMMVm%2BAr%2FTk%2F25ID06Qcg6CgWAmtOcrabvTOuLdxOm2F9JYgiI2wN5m%2Fxy0seSRgdHIHaewX%2FIyyetL9yXYk7O42Zw7K%2Bzo0ZD5dpEyXt99CYue908YJbFYXTqsg43VVXqxP3GaUegUtGMbDHLNyg1gMz%2FQRRzpc9YAaYzdPLZvq2%2F3VnPdf1ObVfbeS%2BRzapKLyss8avuQf83gLJiV6Oke49ZD%2Bze%2FJevEek7DfJjkJ%2Bq9QPQAeBtVy26SKQ0xXUoChLYhiC6YpvHf8CF%2BVjFAtHFhVBWVUa8Xg0Q9SdTufOAw78PfyQY6pgGzS%2FW5DAXzS%2BTXLWgWPjITuqFnzm2nxy8H3gT%2Fhi0A5lZ2ZHZ1AXMgPc4bfzPrEJWKTMuz3jU8x%2FX2rzZTn7bMCBeulXOprjn%2BCQddsbGoVo%2B5CyQlRnaz%2FfdymN29INpe8PayZ8RUAHDeQZ0oabtdZmeXZ4mTnTtmhIzgW1SJJKMO6Xak9VltGiSzpSAZRgLvTijcscv3QmhO481%2FSqEolCTLJNfK&X-Amz-Signature=fa3db3844d4bd30646a721a71d0379674aafd77ac4d1a7de1586da3e0baa3b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

