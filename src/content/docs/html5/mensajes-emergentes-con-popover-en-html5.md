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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MUMQSRN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp9mRfONuwe461wPkMVkSXME4kv2a2ZHQG3s%2Bgz%2FN9OAIgcuC7KwsSIKTTquEtRn3i%2BMOmdeBw5b0%2FBBD%2FDP4M2CIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3G4Vyecjhba9FiIyrcA428PZLxMRThSFE1Un9o48s20vMZXwrBWZyIHX4%2F9LzqgUM9kM8imVQwXMdqrZzuaL%2F%2FNWoI4v5WYbs%2FpeR0LLRhAPoIJPOKXu5uHmGbbnc48P3NzOPpipzlN3VXG2jTCSS5K6kv2Tocyo6sSRqaimofjviFOLXBoUVjKonbNmFCBWmknHb3DPwcaQlOmK7woBv%2B5thExeaORN0wEeTGuMmvGgWQ%2F9ddBg%2F9yT5xTdlRJHCL4r32wcd7EyzpRlmbdJsaKhIl6dvoPyNZWhWVev2E8v7hvfdOT5G36taNwj2v2cP5CLXVW%2BVZ5kZ2ITZUOK7mLQ99bL%2FQZsFM5NpSW7R%2FfRobjM3N4mj9henyj%2FN9fWF1tf5J%2Ftx3DBjXNwSwXoXXvUQrbJqJ2MOJ9C0EWGX%2B7PXpqGApw0hZ2CJ9x2mbzoeYjBU%2FUroH0%2FVc4IWbETAhJQIe44HhLm%2BBQ%2Bl4Hj%2BfzzTYH5HCV3aBVkj5nnB3qw%2B2dG8NZTtxQDf4yVpeOL3mLIy%2FlDh4jaRws%2FLyaXXoF60dUvxOQLF3b4w81sBlIBqeakL9haWujyW9ORZJqBPxy%2FOXCwd8GZz4Fy2T9qkMELCyPqBtgig327jbH4uRqJFksv7maAnxYxDoMKTd3MkGOqUBi4hEByQHZKOt7716l8YYXpdnFET78hOsmmOkru89n9srsuGW2cmoBxQq6ox8RBYgAYgc6LLqssO3%2FzMD73z0qaXeAAj3Po2XPeyKZenIF3H0jDJNUXUYtGUmt56wzJTy9upqKEhTnTdDQvj4lgGlfZ1SsNWY1E%2FRy5e2j%2BWlDTfKenrO96LiVFEp28RZwi8VYVMTz%2F8H7qAsJzetEbw3VKrHzD4g&X-Amz-Signature=05ad9ca5fb7e4b05e5cfa704dd231b2762f11750951adba8a17649ee4ecf055f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RXOAMZ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD453BS3BZGyvXtB1tXQvf5UJZ%2FqA0SorTp6lhlQ6fuKwIgcf1SFZX1TcsCbcNjJzSOxt%2BBcT7zGepSG9fm8XyUELsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKY1%2BMAwq5SBX1vSCrcA37QVMk2VdfIISZyNgjXHhhhFxFexopxRYle3o%2BCPr7sxOdqehxZCmYzFFJZcUFAx2OyGSgr2bvUqVP%2F7LlDEElhQsGTKfTjVpAFq6K4AxUAAQhHxJGsr7Qgak4a2NNYwPY1MkDGb3YqKQ6LkWvazb1rXlDXNgmn7dd5rHPFJ94Fm%2Fh9PPSCFmboMY4jVlUTpOg5%2FsoGSOmk8gbr6yCaGp2QJu7IfNWkOYvOcpaaL%2BUveOoBogWY%2BiBkMgv6YqRfxRDeAkVBmYdOljcFH51rUFJxURpC4n%2FG6ZPXF34lW8gM1NnAP2yFD1cX6vRCc9%2FAUwa7sAuovDPn7l%2BlEKM9823HS97G5xwSNRJP3X%2BeTZwNUHpoAYKTV%2BN98HQJrfqbdH5QW84Ha%2Bg1Z8yWhimp1ZBfMPGVO7Cq4Vxnpi26%2FXhPvUf30fiQL9K%2BTdTlIgvKZdq6fHnCCz6gzSEa%2FRCity9UOXPPoRyi4He9w%2FiNyRzIvqL1XUkrwRwnarV3ho8J0OIqB4ZWO%2BNRDG7%2FRx9J6wreDQeMG5UVkpA6w0eSuwdqkS%2FUZLJ%2FnhNCuw6dJSOQWSvmCBL9B6BBUO3%2BnH9AKeEXnFxTLO5o2ZX%2Bu0SsgAo5oWvEsId70Qsx1o5IMI7d3MkGOqUBG7TcDk%2FC5iVRA0JwleAi58VFNLukmv2mYC6Wn5QcRMCci7UiAuxgofa6MS9MO7r367pzEssjGBbD2ByxsNfRiEHbTrI%2FGVqmXBS4ZDqD5FkofurxHZj1JecLmfvdbikiaZ8h97TAQADlAFGyBuAt%2B8nQ%2B5OngEBRVoEMz33pdxF8bhE1LLZ8VsE7Z76Soctbwv1eRSFlz2MvvvlE7ZRq2ssey4mB&X-Amz-Signature=8198aebed919481b958aa89ab954101cb214b8ac1663a0c98115ddfa701c3201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

