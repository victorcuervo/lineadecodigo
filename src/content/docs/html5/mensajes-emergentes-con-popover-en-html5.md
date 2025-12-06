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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BLTKR6O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQzhEcuZ3UdDliB2c2AosEh7%2FZn0%2FTgD001AGcEo3DkAIhALIwp1l2c8ko%2B4Lrkvepa6ZvqQWiV%2FdXjpgoD0usZOtrKv8DCHoQABoMNjM3NDIzMTgzODA1Igz9I0f6YhpKr3sSmxEq3AOIHKpLlREwTIMRO9%2FJl%2Br5zOvn%2BNBQGppyjrStYlNxQoeNzyJaq7efJp76fPFVec2%2FpDb4wQeK5YXZ4OqkN25cc8jMNdCRZaOV1aOdDnjE77zBYpOALFA8Z9MzBFc484rbYTIcUcMuRqY01aYbJ6%2FLJlUqt5cqB0PNxBbPwd1z6UnGw%2BzwM5md7nxbMa0Iw5f%2BvCkcGalq%2B26deFc4aorkO39CByJ%2Bj7AmfK4A%2FAuMIMHM14YDCE1Rv%2BpBAh7phsiJr2G0pkfkCZlEfi9s9E0DX%2BO%2FSZiGKijOZ5G69bDtVOC4f6Swvcg534I844%2BHrm7ZxfoH14HFtSGlf1bB6FT0cM67rAJLrhs5O%2BglrQetucA19MOG8ulqSUEgH6A49glNvlRTxesl3hm44ZNuo%2BDokypOdHTWozNg8WTF5yHoZKinb1s0tetePLumVh%2BfkJl72%2BkzAlPK%2BUqlYJlXG5KVfh%2F1SIiiXhrmJ4r8H2IFYaCChYVNijhhq9bPp9wrvn2fMbAVDj2mlyYRJgFQXbYy6R2q1oWoWUFNbV%2BYRumBQsASBZ8764bDzkcf9nkN%2BP7XTiYZlMcXAb8pGaMYnAMhul57XabFsAxUMGNOcbzR6lGX%2FIR%2BfQGYWqNM2DCTytHJBjqkAfCeh7WhA9B6pUYD60daix%2F7kZwlPCJKw9Mrzd%2BrYt5%2FKdo4kKwzI%2F4lb3FMVbzz77VMwUD8PSIFI0Ic3rRJ6JGXZ4qmmbrpYMi5539RX3NGOmLIUTibkA%2FNPOve5zOi4vxWcIdTOkd4Z%2F7ZuDgaBOMCA3kJvqyGfFjfeEQj81z5Y45Xywun%2B8pogBanBLKqPsQOWqGRwRkphyUkrEssSE4w%2Bswv&X-Amz-Signature=238f4030d819f4f3b9e0c52b06205ea31a826a46fca3b479a1352f6857422376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVML77DP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlpbNhAOf83e%2FbEpQu78vf4AYPylnAIAxXoriNj6go1AiEAs%2FN56RChYOdd6tGvgBqogg2MZnbZlDz%2FjTTjLN6iSEQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDL22Oi88CVFll72FyrcA4EQWSVJTG2xBgkfcfZSi5IVAX4zZTcX4ZCq4H%2Fth8ncucnH1roq4Ke6YeY6UMpPFGHUCl4rKnkJ%2FtCDte5GIX7iSkShu8WZjiLBniSURVR1lQqQyo89dmdEAjp8Uk2Bm0PiRbUCuQNY5YyjV36MXZ4xfooaIiWcwJ4ArtEBmnjIDBYpQ%2F740BPOQ4ChpOA4yUPtfdfZUp3Jx%2BXWMgApTiVL%2BXY1IDMgwgYlEVIVzt%2BevxMHpjOSm0L0FDnjQmkCO78Zqfd4cehBHZtwB%2BZTmKwiYBJY5uxt6G16xt6vNwe%2BR5tLUmEVmtKLnEvuL3Kov9ea1YEqzDrFFJc%2FNlGsFoTzRHaZ84HzbSZbgS8oCjk%2BAzWi6IuiXSizYeIqRnJtktYXz9OS5wmE07HnpKYGM6ePe6wnWIQrAK0ya2rZ0xZ8zsq%2B9mmHi5izyXSzw7AYzVxMK5%2B9%2FIov8roqdLrVroZpT%2F85CHdqA%2FYyM3u45TJLjiggsCLwz3Pl9LcJB6JFWm9CK6t6AdH1V3FwmViDD1klWYx6EdMfFgSWBVORzZIMXtYrz0PbagAJhQvA6StbrnyIGsn3vJzJc%2BTHR0vTDAT0Rr5GW7%2FjaOqbqLrOW9uEDIg11qdqYpG2N1tcMK3L0ckGOqUBqDodZ%2BYjpEbdbu0ebkOyVg0ftJyiihQHpFkxr42F64zlWdgeoYqJGbMZa8Az8rK40wnXPr5h7EyM3wzh4oA9mVZcdRXllsIxAb24C6MnmCSw%2BqXPbmMEbfd1UNlVJJQX%2F%2B%2FRC6V8vO%2FbwAwhguSkI8caprC7FIb2oFF8VhsuPJ2VVAZgUO2WG3ikYPVm34mMBjEQbln7FOS%2Bp0bZeTJbtnykuUyS&X-Amz-Signature=aea30db1a5082a8bc8589d6ff0590294c03de6b9e5c091622984eeac59e61b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

