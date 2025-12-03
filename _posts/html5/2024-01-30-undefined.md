---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3G7GET%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCTBgh4sJZLgdTtfH%2Fy2%2BoFxOGIYmAak9XCas2vj33XlQIgSVynAyrZkwaoFu7FE62EhCt9Ucvs2DeDlS8DqKBC2E8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDE0haKT2bqgeSDampyrcA%2FTx644OJcZr5GEXblniytn%2Fcb2E9iQpkOT1H%2BB5oSk38rABSb5ut%2BcF%2BSB0pFKEx8lMjC4DXO8thmEKw%2FwETichib48e6OGIEaQOXVY%2BysxhQ7Fk0VNmAffAFF%2FCynf%2Fqb9Nus53xsEddSyHQ6hxAt7aGLfikUIre6yBH0%2FpiHdEuo3GXjFVGOiMfm6jLLP7HCj7KbizCuYw%2FyJgBpTXKibWqbqcNRdN37jGf65Cq9Qm8uNOq4K%2FYn9qaF4GTavCyEMJjdnmPXnTsTVWvcLjJR6V7iSffmtZbLmyJ%2FM2era6EC4fm3Uv509SOOHph55uKqnwAGgZ7TK2d7x8ERiJBF7ScvPHMy3h7QTg5%2BvJRVmdTF9YsLOObZn3KN7GQdYv41gJX2Ji%2BWYynuH5iYr9153rSl3xMz6hpGtvSlwQ6uzmn0ixsJZGuOAWUxEX7JBXY0OQn7QL0S%2FZZPxUDEoIFMe7A6lSKmnL04OFFJkrGqyKz8y%2Bq0s9mm8VCFJBypaHynlIfI1wfLJg%2Byf1rwx6cFtvRkPTW0HAKXpexoeLAOqHHVPiETEBKepv4QtRQUzLn3d6JEuBAYQn1nJLCypyLkw6lPadv3wbdfWyh%2Fl%2FLIr0vMlBnD1bJghpxFlMNmVvskGOqUBr52%2BHVYXCbi6Bsd%2FjDr0HwcG%2BFu2HGroVVSxJsG6aF%2BJRL56OS3uJV7Lgqi6iGPGQbIIFbnhODROS%2Biek87LB8c5jLSQD1nHlQnMfN9AcH9T4cr9LSCOU7dFf%2Bl3DD1nEYcPoUORAkp7V7%2BAWOCiVB%2FSpvaLVuIHgZWJTKwksEPHWp2%2F0JxsVbs%2BOEsG0w68Ybl1Xrpm%2BUdKJUDXDZlSBpcr09aw&X-Amz-Signature=0971608c89193959bc0c1f9ce89f71bb1e510b37c27eddb838d4bd02e9cbbe0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YCYTIR6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDzSyzAinTQiGV%2B95cDKAgnuNzOsJ8yEKfMNAlyA3iONgIgXO5nfXxiMnKRY1bq%2FmefeIo%2FO20FhAnfiTFeWjf4Excq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGLy%2FDrhKHZYbGhD%2FCrcA2oxcjEBZEqjaFr28Do%2B2%2BvC4m8IHcbMSjihU7CQl0Tqjy8MI7DeJGklWxf4NjuUashWKPSr%2BHqp74DVqv%2FNDius2aeAvproks7H5tZcDnQuTfKfkXEHCyMZtUoEvYuOiH8NeNrWY%2Fn44xM26s7g1dFC%2BG%2B%2FtV7JhbvZImgB19rgPn1N5pwI7tG18GKFTCOEyi2diPV0SZsjAaEU4fyS61KMfvUNOM7EvOXXYXuVaINUwfXUlayTz5sJg2Fqx0%2F1kQ7yPdf3f7tq2Vvr0FcV845ZYYcbENyL5chgeHnsUcLg90VjXhhDT%2BFfQ%2BBYB6RRJgCyNIkwtTd40Hj20w%2BcKeeF9IfujZZNFsxDjDBI%2FSP4yiciAxqfHcNrCkuIkbM9spF2Vw4uc0lQ5c1%2BuvJAyvVmypP2a9rKqwDu4CyNNpGIAss7iCC%2FyuJPCuWdqeCGu4AAnnlp3bavbNhxUA%2F%2FsQ1HdW1yj1%2FL4s4cBFtU%2FmrZTJabFPo%2FUfuwYp1cX5aTEys5siZsmGUKBPrT%2BJR%2BPKuMKrquvrIn%2BP7J4w%2BbvShRzs1EeBpPWxTuw2fImbNWN0bYlxqXPIDwqJIwVPJQUVrnRQgQVaDjHfJZLgKSFnTjJxnJ1SqlZFkR1JLDMJ2WvskGOqUBoLrvhTsm%2BKb9IIFdzbQZnfm7h6PWp7MkW3m28CRVEIIgVl7%2FQhd9QYayWzHBARKoSCLoDNloQ%2FniMK%2Fk2YhUVI1yqPbmMAThmg0KXG8Uymrzmmw2Xw%2FNxucjO%2FuQvJ%2FvnuJBGH0lyGoorlOoEm53UcW2939PiyaZh9fTYbOFqbJxW2brogwh8pfLFcYNnGWQRG8Pp4t%2BagRkvTD7muJFREvGZK8a&X-Amz-Signature=2a3779cd79e2d787429742eb0fc8a164b30b79cac133c78a9cf8b26233f434f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

