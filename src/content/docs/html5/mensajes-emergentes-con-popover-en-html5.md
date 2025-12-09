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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSOXMR6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfZIVhRXa8gDQnQqq3vkDDWE7zhnsW8aaKRImgLOOauAiEArLXBg51Le6MGGl8MHBf0Dj0k5NS0kMM0DJY6LWVzy2MqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8tJ3VWYcmmM8mahSrcA7vNmiDNe14xmtV4zdH7m%2BF2PhojIAlSBePXwlFHh5wus6CXKXdxwRn1lCMLd3KTapD2exLsvG8l3Ki9XTup%2BpSA2LHp3AvD9dQ50lsusoWk0hawChBpYj8GL3MrkU9B6IBeA00YJCTHXgyzgM734%2FAQJnxGa2jOr%2FWMWbznFo%2FUgt06OMWBg3Dhjf2w7Z8DYDsKgYTXjxfvES3EskyV5kirppXoEK5dNe0mqZUJAApF2BBqKls%2FmgWJjuyqAoNV3SDjjBZes6gvdnRJFTZvSB5h3syrhd9HgUdR2Ty1BiYDx%2F74e1Z88ACwkvCygHi4xgIVpsh%2F3c43OWDWCZ5PocWwQGd5ybzr0Zr0TLyeZruBISVfUXtmcB306jxer0MiYVvFsXLOx7c33znV9Tm3XM%2BXkqK8z53WtYpeMJFyuSJK3NkIEeHsTjAsoDNyfKKCebJI4DhiLl%2FZTWxqU48u9CQiUTrymuA%2BL9%2Bxbd82kvLbx08dg5MDzVqunhativRHFaTMPFMvyrygMItI8OyT5nMhwRLitGet3gG%2Bwb7%2B%2B2mV68Tf6y6XMnqHxFB1BdBLfhITGhHGM4CztaHHZ4VvQJBy0KkT2nMZLrxqCtsmfg%2FHFdIngi7eq9HG2%2F25MM%2Fp3ckGOqUBy5bod3yOzGUSXTYhRGQf4hAAfcPMbAyCRVrgdGcQBnt7B6NZuDahp9EvIcWlh6pl0UWcvpCXjUvQywHaq82Yg5uVe42jao1%2F2tv34S8%2FTYefQtydaV2jSNTeKdtoEjxqJIt%2F%2BKElztyodkEBGAQJuKlHub6eK9U8O2Lqwx5Q1AFElZEAfsVcgu%2FCS3Fei5T44crPaeIxITKBn5iV%2FkQYs%2F7d%2FsSo&X-Amz-Signature=27e5d158b9f3eee0d21639e20144895fae10fbfa7eac12ab82e3c0f8a0c378fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3DV7JD5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHv%2B0q9KHeokPhxJp7R%2FRfJSl55RPSD3EJTrNCAHftqVAiEA67k%2FZq2Ogw%2BIX1lKLuz2wyW6vZrfhQPZBgwsDRh1cggqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0nqwp6xbNP%2B3fb2ircA%2FEjXzYHlpbAalq7yFydOjkn0C1uCZo1rZPbIWt6T3%2FnrhprhXIumNOPcR06i0rxqzzDKf6I9%2FXwevgHE19jqDzlhG73UsbfBlPbyzB8wmnaNOlWqjrwdajkqiXR%2FtR10cVEfCm9yP7e0FH9DvJyVFVpqpOY0TCRruN186IjuCm7Zi4whCD7%2FphfDr2DB9XclAXN8E6bSNyWFlwmkf5ohL7XlWpaLsgELAuvXTl4QoxTf3X91OQ2fWBlkBW9FlvHVUSO9G5CJA8arv2el81XZ%2BcVRXWdfcq1d9OUJ0nVtqc7UWRlOOzdMy%2BzuF2TLiLxOxZPWmLVqxqzIOUIiAec1XMnVawbPwWVWBMlocrF6h93SPviwhZBU3KXx6CTyF3khu2zkNHjIyOuUHDBt6BaCgYhRj%2FxX1hFcue7HVdrGgcCy6nTdIYlKIlAaxH6B8xkNaOaG99Z3fGVeFaqjUCmJiB80RmhTc19gXADxSutDLfDtni32idbk8Yx58nLWc4oBQEeVTBf%2FH%2FuX4Nn7gwK0aO2L5xuguJ1%2FC2ig845ZTNqYEoo3c5sHw1sNVbwsh8Y1SkOwajddmuMGTclbMir6M%2FDgUxqdOCrtPDGPBqhYnaU%2BCCVKnU6MCLRJeh0MLvp3ckGOqUBJ2mvWvJoCaOFsQf58uGVqwGITLYo4qwK5kQpVXksje4ABfAUfhr3AscpQKA8aJ6z8pqOlCtv8AigwYM3RqfTUvAPnVX2G1RR4Dei51l9%2FNzK6IjnE7%2FLkiZBC7er8jWBpe370AOFOYb7OY3nF2nbbLlcavPl8LBygtdvDbmrTpxjr2QlcrwOd3JFRWgs4xw%2FNFJRlm12Bp5AZe6%2FDvAcWz8T%2Bomu&X-Amz-Signature=c14b1549163359bd3c50a077b2a48e94a9ecf5b7ba4b7573c382eff2aa98dc3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

