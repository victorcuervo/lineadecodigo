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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J7Y6S6R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbYJmSbWEtg9lBVCkuqjqYV8DnZDUS83pAl9x1dTKNjgIgLzX9zsn8RbcqLxHGA5PG5w74kQ%2Fn9UXy%2B63AC38MT68q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDLrR%2Bqfa5rV9VPBTXircA9yB04BbLI6D60U83soRTV6t8ZfN54gYS0%2Bj2prRd2RK%2BcrEwjY%2F8hpxTQJhCxjAs5jkTOdDr%2BTDyDQuMuYonjbc%2BsVyl%2BYabTmYuXhCo3SwZD5ITB0d0QEEnL1t%2BdfoYxCML0xsyo7qHQSRKXnhtnxRqQqcjeCS%2BxMZ%2FHMo9GnEcCoKWl94TiLZ6vXrKZUTzMrgsqfoDyl0CpecavYQI6VLgWxeJTYVlamYN7Yx0MO8eXO7bPn85bV5C%2FZAZVZ5KegE7MZXBEVVtxXG3AzgL%2F7OGAgDk03b5FEFUxZNaKY%2F3tewe23rr73rv9F4hoFTuNoZrHivy18WgTnK81I%2B0KnquyF9QaM1Qs4PosTzWaR%2BxfT5d7AFwiht96nXbcEjDREnWLNtyqabSIQqJHkEeBKXDaB1nNDjeXSylz6348qonwpBFvAqWOZ%2BM3DBYcINAn80w6c9UXLO6POo5NJYs%2Fl%2BsJUpAADSNlZ841huNfnvRqlI1aMqw8m2fDR3Yn7DL3u6ybWP2oBWFlKuRYtHIMSvXN3IxBs0%2FnuRlGWSr34Vogms%2BdagCnA6wdfWw6R3EDBvEtNFQHhaaiy6gsfbkHq%2FptQb%2FtvSw6K0QuHSnM4mGSF79Lu7e7Km9QutMKX9zskGOqUBCcpWnaAd6WEDj0l0foA4BIvCKCC9QrCKNinYn77lr7WWQ3udheaNQaLMw5j1X5GFTnVGZW%2FDhBWn4uUA%2BbSyuGCW5cvprSdFiLvKqRys4fiH6%2FhW2L9x3%2BDKIpwGyXHys1YshrxOvZnnxuiMNtYdcgUDCjNJcK9CqIyDCRZOrsYe9GQ3Y4BxmDYsp6zNx96cmCdPH2N2aHNZWWQqOzqw6M3swzmt&X-Amz-Signature=a290e39d105e25b96b8e7b76e5dbd6418bf77c0b261d1c5a131d2c388757625b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNGQ426J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1%2F0wsBjPGTHPVhAYcW82Er926x7%2BtK69fezTPY3%2Bk1AiEAu%2F8AIfNKaBj0sR3OxbORDhApYlht6EQ5PvBW3y4SMi0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDP3VGaPLlbcEQpAULyrcAzDWTb9POmexuxw2eRIzgq%2FZI2Cn8SD%2F567F467uye3x9sjg46YsjWpIvKNoVDyxMnC2d%2FCEmM4uCWKedWQWy7EriKXva981V5R%2FU0gtoEF%2F1tdrl%2FF9cLLDJmh35N0069eDLXu4Y98u%2B4L4dRQruFUt4%2BLksjWez0%2BargBKSoAW1fAg7NCZIhWjrhP72lvPNMPyBr1DoAsR3dELxW0F7WKUyXtiyuEZ6rQaTiDqj9PXmFoqi3XmQWY9t4njT6zv0V%2Bal5TzEfXLqBFwundEI0OB136hnsnZSTN6IJpQa5Yfa2A43M%2BE65HVDutjgcdI%2FfX7H3nMUfDeis3Mt4SbppspR1Zfp1uWmb9NywBvLMf6QyFiXeURaHNtqAwOXu3a9n6hR9bYt9LKHiaerAJ4e%2FEuLhDnC2POQp8kZVuWAE%2FDZqpgx5iiPS5S%2F%2FFdg5OLtqAZlKvv47YsM4xrnezkPDxFUuwUTWQSUhht%2FPQeMsiZaZogtPw9oTz1LAH8%2BTTEFD4GjFsyYj9%2FJEfDrPTDcL3xNq6TH7fuRucfA%2FSpL1k2nELSRgMuA%2FPi96jnjQwcHYsRVxlk%2Bc%2FRqQBKf8tl8e3NveQTsLwGJtkkmTZi6q21be8fko3oao1V0Ux%2FMLT9zskGOqUBvc%2B0EyyzJSsxNgsqUlSsJ01IZAHhoQKmcYVVJHCxXyaAlDG9J46QHbBG8UFHaMgc8A%2BL%2FZ%2FGyJtFfFdsgBVuxk6HCR%2B6QpHo6z4mnkV1Y0fOt3ET2Lb0NH4a50o2FflUyvlavWNAh3i9fbSNPu%2BB2MfB31qdIBCy4wwTk3zsWHbR8YAyBRrkmYt%2F6foqJD3IK3D8S8GZoC%2FsOYxZJJgFoqNFxmVo&X-Amz-Signature=814951d1b385592a5161dceff5ece856b7eeb69c3f288759166c0ffbc1ab5f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

