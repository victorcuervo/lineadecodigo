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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536QBTLB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQ28qZE0KBuQO4sPluUfOVuz7cZrdN9PZyhQEhiJwdQAiEAt7K5RJbFRq%2BDgd65NHECFHiePjuOwmD1qdsScpiOEasqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIf5pWVB2EyByeqbSrcA0zcfOCc0ga2EaIDGDOHhFlRQtgILx%2BpwZd3D18KO9so2ucLwTchY%2FgxWPE06%2Ftz2QmvaY04qOqSSbo6LKOO81VFXoJNHALvcWuSB9tCN5C8vb3UqMOTLY%2B2jnNtjNFOJ74xUhkr09eKr8kBTxBxEOASrLkc6AT9DTcWzLtTMRjI4K03RcHrSxCnxRypPflx7CN0uaNABnEh5vzXuC9CzHF4o0%2B4WRGmCu1j8KTUlmI9v2MwzdiNwuYGLwSJTyPvD9UMz25ogYh818mbRxdwRERh7gJLTGBX9N9smwl8lXaMe3OlNWc0tRQrre3EMULbCS6l6u%2BisVo%2FtDTkvKyd8pPxH3OWgVFDusCfF5NNaRnX%2FjsJOFhf%2FqLlwaJ67lFEHhx4jqnFDbxP71zxWxpXKqByU6CNpHhvgIaMYkNp9MfR%2B%2FW9S8CYC%2FxquoKcKc%2Fkx1S7qy03jdOTvwgoYFvNW%2Bn6u6YjXNIxU38y6zgIb1GTd6HIeIE1L%2BIjfmYmAibwq%2Fva%2BMmZC%2Fycyz9ZI9Vc2V4GKaOs1giCN%2BIc770SzWKvnn3jOMBHOzFJXEC1h576BR1a7xIH%2BLfnfHwAcEkO2nm3blf2yu5fCHUx4pV3VRmLK7B4tfxjtHmBkHuoMPfD38kGOqUBaCSUJEJilTiRbdKGgiPj7QXIAw%2BlD5Pxmmywn2wgL%2Bu711rq%2F6t2wgNXBvXvHn%2FdSVuBBW1MEXMfXmyrzIoKtFQ67CHDu4WzT1r0BQ4A0MkcKpDzaGzksnFL6vA0WN7KfnyvqG8OVBkASKcIritcTIKjuB2KgClrWstDDCIx88pruRPEGb532V4Fyq4lKJ9MiRZcfV%2BXqRxslW%2BozO01hgdYFqgw&X-Amz-Signature=3bc243c69e5d74a60dc7c0d08362605fa4b93f99cf14d639e6e821979e8695dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6UDNHFF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfuQsQOGCMcUFWmc94ZghI%2F0tnFEIlorcGWZWwHxteyAiAuAmEKLLmUM57op%2BThxcPJeA1uLzACRDcO%2B%2BXUEFQ9lyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC5yJ1%2FIa8oVn5BpNKtwDzicorc2pgQQKyWjOhjJ8fXXeHWhTnzOG%2BK0RcapsL0sVGTMwkmfeTIDEShvq%2B%2FPaF2hwaMoQLpcQQm7W7DvNZH3yc278fnCikQegHXsZvdEt1j%2FJ2LDB9tMWY9fM3uZaF3gOKRX9lUMJvvg8MmgvXFDItSehaO6WirRUn1%2Flyw0E%2BhLEiPQp23Kfnj5%2FFsRNuak1oCfR8YIFRGXtrLSxKt2L8hFTS%2FyT1wmP7m9ZFTv%2F%2F6SIl6C3X%2BXFiymWaLTt1kqfd0e7uVZDTwUssEyaHDSY1lF%2Bw3pyabw5wbI%2Fr7tqMbFG4aKnXtL0xS9RPhnF9uJct2ukecBhfe3uaV3t3b%2BXvXIODiS3WT94el3p41PC79zTgfCyktdorIUQ0MqSnj%2BSy%2F%2B9pALUNFW6h0X7eYy2jgDgb7MdLd0tpA%2BEle9zbQwK9MyBf0rRGw3rcYIw2%2FKuXJueKF2jc5Mhoo%2Fc2SpRs5fjZbFs0Nc5uTNlylgGLYGTCm3IyMhiQu4rUc6eWEWZi%2BxTBpiXetLVkWA2qRS12cWmmY18iqkWap8rSu2Nog9FQIfX0GpeKT0FW3fx7V7J6%2BVvrvaWfQUn1o%2BgIG3TPdRupLC3KXkiVFggrbEKmU5UyWnRkqSPQpIw9MXfyQY6pgE4qFdvKCR8F2UXpj9i5Sw1iYBjz%2Bhnlo4noqPG0z7m1aQ%2Bo8IFrANo4KW3eKb0FhLgTJdAPlvc%2F0ZoWPww2O1SpIyl%2Bt0%2BerR06WXO1CDpOuZDODqry%2FLHjGuQUrQtKqZQlDyzVYu1U%2FU3Iw%2F33Mp9LSGVAVsQLsinOIHVP3jvbcvyv22TsV5qUbtyK4BDjsUdzreWUp1UoN5EYDtmQTS%2BdBi%2Brg1W&X-Amz-Signature=8a11f440a512ac27b7e806384d9ac93638239736c66f24287817e8c92d2dae6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

