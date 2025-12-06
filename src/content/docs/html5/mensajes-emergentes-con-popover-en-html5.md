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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGTGGSI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP5ytqs28ZEpaLZt5Rb8XiHv3ryoXFtLGhSubwaMuzWAiB4z0M7U8c7dEsexgiD4OfIesHWkc6%2BnwxtK0hb%2F3ewLir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMa1xl0QwLcE9wOuM5KtwD%2FDLzBD%2B0KN1mN0QZ402nNWCIF34n9gn16EcF87u9nzltWxPQI6iPastr5OAinQKgGWga11UmlPh3wSyj%2B4LR8RhK1TeGUlWPK2pWy%2FjYG%2Fc2Kp6XSlQ1SQg%2B9D27Tdw%2BnQxPF9ggpNW7s7fx3bgLyJcQvYFdqmf6y8ng8PDaT2jy%2FmqwKIoilrrXEZvimUrXC6XgBpmXpbXF8eW275VW6%2FHmNTGPpLt5zb%2BYT%2Fy%2BNq%2Bj7bWs5IDdFYHBEiRYTIEoG%2BlAybCx5otA%2BuXmCMluyoCuNTQddzcWirV9r23u0msjMYm7dS23mw5IEsqNBflu6Uu%2BfTrvB3CFw1nDI5jwnxiXxw2tnCCeIjhq%2BXkSfQNT5%2BM4d8UHYdBYPcP14SAwzpk2Kwgc2ladBTsl9qSXLWZmx58nZQ0rc%2FlK8GYxmp8d6h2fA48XO%2FJZZHBriMC5HDFTCflZEZlO3G0EyejiwMe7RLNOaQSOxljpyPU3y23u0Iv1qq7wTQGK%2FCW%2ByEVjyhwqhPCdzV2n5Y157jy%2BK1kVm0nu9HkqGTOmGk9c%2FwnP3YSKibe2tOdcieIk%2FqiXkONuKtFs%2FySAELf9sw1L4v9%2FoUiln6NquQhqVjmWn4wxNUijYj7EgM3PfHAwkKfQyQY6pgEPWDpCeUnFpl7FDuzHLGCCMljCnW%2BJecbyLnaTRouvSSYtdbjwFxn8PbuoIHNHbiuOYQzOd91%2FU%2FqTgbZiGDQhaXUphxkj8CGjraLqAVHOx5DQqJ51NsI5WhCmtIngdH3Kb02%2FWhevvSyhkmwGHn2RVWOFqONKEyi4AvxVx5VLD9JmGWhwzTPj9PpHp5dnv%2Fjs5OwFNGL7lV4iAx%2FPeURCAOOi4%2F8%2B&X-Amz-Signature=5eb69d0f730635e50e0e4af775c6aff87b8398c71ab76b70877c14d73d8e6532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466533LULEJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW5TDNItG969LwfTV5lLr6h%2FHjb7h42XAosm2W5dSXLgIhAIReQNcn%2FpJCvTf74o0msRRRBija2lNjMhqZpH0wqT9cKv8DCHUQABoMNjM3NDIzMTgzODA1IgxnQkCNQ3SM3I%2BSnSwq3AOCxb89d08JXzaMBml3P91G5JR4kc6XCA0L%2FMTKb%2BX2sWjVFS%2Fpsdf9ebdv52XEGcQbMnkKtiADMWDPNhTGBOu73a5yhvfo66NILpm%2BiAgL30yLezchNEENVtKeKseAoQ2Zup%2FSDsmHscApDaVOGil%2FrlQgpbcAnebMA7%2FPbGDlXTjStWHw%2BxI1n%2BXixWEJFsWVngNpTREFnCH5jQcbj%2BnEDJwBXImyF%2B%2FtpPq9nn%2B2pNOPoxxB5h%2F8CP2UxPUzN%2FF5Qy%2BZOsnLA4xgDoAiavIx6W1GPbb0rvmhTvByPn1aoP5gDS5boqv61GQOjr3ZRWdIUNKv%2FBukJjpHqUCeBwxe9G3UX9NPYmBxkcZdXc%2Fx5uLMBQCSEfQjxC2ahGd83THVMs54jOMMKMyRCP41HoVtDCigOaipuYMMUsQTPURJalIJH7digVAM8dYHH85IQp9WKoSYw1X1ujlGCV%2BAZzFXSru%2FFSxD8KyYkbDbfx13S%2BLBPUSHauGznNGNYvNyUjuNz%2BNyHmd%2FPh7JW2JIoshAH%2FyGZkWnV9sSV%2Flmq25pR7dJrzBp%2FlwqfbwEQcL0SVialn4mWGe4ikApnmAy8MMbjwXvZj1vb32IuBmIIUlWGSWLa17bXGGZP2IPRzDYptDJBjqkAd7SGc%2FAOc0Thk%2F1iCBs2LENKX4j6wwKzZCnN8dtzZUUT%2FetFr00OMI1wuI%2BzmeUiPJWps7XETeZYItzNLuPGVIH23p44528AQwhAfcMY5m4impETupOph0O0sc3mE9wO6yjyaC%2FHqRIXGqYwEl7kxWGiWBD5QvmAjkvgABeVk7a2UoCL3co0bPG6EGuYFsVGd1drK0qhCBrsHBB9JbApNjU3y1p&X-Amz-Signature=0de30ab2bfe551218c27bbef74a8747c8258c50b57ccc2d8c70925fc9cbccb93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

