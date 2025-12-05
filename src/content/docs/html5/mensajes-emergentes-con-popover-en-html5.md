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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GKYYHN5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAKCS2Sr37DBnmFQ%2BFdJyccgfx3HJscpCpRwypnzOQjwIgayxPNWH31i0XlztX6e%2BytkOIynM9H9tXAXNJk5QLfd4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJjySjnJgIgBaJvM9SrcA5DRZirZAUOCZlFiBsN6MnFdIHjm5RcZtE9t4eD1VOnlaBKLPhu2%2F7cGBZzDAp86Wzx1UySJ4wLfatOFIZodpmxsvwG4eYsV9J6E5btQZoV%2FHJmXAetXY6RW7ts8Vd4hGOWWDFppDMRqi7TnNgz6Zim0n%2FqL%2B8KjZpwUrDkHtO18UaSDMidAyrWDYfc7BKIsVlzuAukhVUnRTdo4aVPZ9U6p0YoWQtRnnmCkKD42Esi%2Bt6MYVlWMyKjbjYZa6ILvwdsnsZNBGprUttkxov0TM9uKozlgfkb%2F2Twdlp9Pk6l2x5mEcWxx0FFmRu3GKdd7jPoEUUe4YhjyigZ4EzsNDALe9on0h%2BaHyqVmsRHe7%2BEmJWcEl0XmIk8a3BzC%2FAYlLXvwaGy%2FYziMqQyFPx4Hm%2BFiLaC200KXUxNQiKqGOv2TnjGjPKENbMdYqjcKd5Wf1jp24FRBUXznNOhdyZgxSsrbQUvttbCcqQYcH32B80dTfloL4p48a5UvTo0LNu7lpZ7cHCl%2BYUmlh4ZdhV4rEI8eK1dYgemPuH0F%2BwSRqbxvmrqjaeF1jX%2F8uWLuF8b835BKVqE%2FqnalzpvaszARqL%2BdaLYDzFDpjxEU21CZA57Vmr%2FICjf2BfwJMX5PMI7YyskGOqUBAGTHBr7CQvOqSmiK5HhKpRBl9XwGSq%2Fj0g4CSyTUYF3pEvD0s5%2BSG%2BhQUes3r8c65QD9EphxCLP7BK5ZjY5cuYfey1GX1dIfF%2B5BUbXZA9DPHJT6S9uDJLhfX2dQ1HFuHviEw2pDG2oH1wKHcjQgdoIVK%2B7YST0LOz7wcj4wYC83u1dBM3yOqdHzr3un5iBUAvfxY6SjKS%2BPID8VeSdpam5zni%2Fd&X-Amz-Signature=34d676c58428a5a21dd5e536ad142637b693715877324cc5cf45d530b86817a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HI5CRNC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDunlhBaKvpH7WOPkUU7wOqMvze%2BBuCfGbMYfOIFZBbhwIgcVFtQDf5LahlpywnDaxL%2B1Pdz2P8LFDKeseHngLaxVwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMZcv7GciOvyHyhqwSrcAyzFX9k9U5Go9UsCxsGSn2LelB9tSF6V4nsvcfQhWPg%2FpnQ1duJ6DlAcSEbjQHOUwXvakoTURAuKlPy6l40NgRN8PtJSTwKn8RSZv1uLvYo9B3xcFjyHnIml7p01rEZBV8AbW5EhDXt6pomeMRzXF8FWGdTC%2BQAPhTNxFauyGz2vSHB84f7Fuqxu1rh4OkMA7IVB%2F%2BrV7C1FzxGHiYtzejH5kSATGuW1iuYa4cPit%2B9YTEVDKrg97mPKw39fx6Ieu33oXdqH0Oxd%2F%2BGB9CUnMZ3leC1i8r%2B0yZEPaWFVbR%2BCsNT0yFCUuJOlEoqu%2FYkwMvJ4yiRFqeh2CJRdHR5kgqrdZLeBJWGPR2%2BaOBkG%2BnaLa6F2%2FbDctDh6Uj9V8yA%2BUKze5aWn9duwCOfsd1qk1FTXVyfPnIS8lmMk1MpOWhQ1jB4XYPmcSlvlAilAlufjws4i9Y5IHIuBpx%2FopzOUHJe8yT%2FM6eNeXLN7%2F68Ypv9IhTMHgrbdNoWQSiV1fgeRyj%2FFrV%2BT3XUsuZF2yseGn%2FPJHFFWpdvFvNDMMVlIAERKyxQzfL%2FRI2Lnv%2BoQM8xMHeMbeqXlbY89qlGjE82ivrkuizJr3Wfc3f%2BCaBP4pvzO%2FHRhz2idy41PTr3yMMrIy8kGOqUBQ1ESh6cJ4%2FUXHcvUayE0b8A1dJz4WvcHGrN3pUxDnf9VnGHh6RnCfHpdoDo9IAA1ASDf3C0b%2F5A%2FlrN47rw1JOrkg%2FhEmxb319bMep6yIemGSpTisnefD9qk6t0BLsxyKnQjOG9Hi%2FWN2LvYxZjX1vvwS8v7Y2wN9fJ96%2FfDqew3TStjA6rwnpR2DJbN%2FVP7Pnj9YPllyLn8F0kSj32d9BFPKZyS&X-Amz-Signature=38f698eaf6c49cd10e63a8c3e9d7fd93c2087311faa178ffae080e8c1813fe73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

