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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6T7VSTI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCdYOqQnrIhL8OQI98R%2FP%2BliUJeb7Bz5o7jjX2C5lcN5AIhAMFok2t6k%2BauQtsbwQfoLr6JAQLDUNW0XPjOoc4OnjpTKv8DCC4QABoMNjM3NDIzMTgzODA1Igz0DxYuKY0AhlP4AWkq3AMgaOdqwD4MTCn7LKQ2oTPlh8%2BqD0cUD0eOdlqGm5HY%2FesICp6klNujrER5UgqRCyKzM0x9CtFJgz1S%2FtOVWxNm%2FMk0gxg23jFsCc7kwx%2Fr3gYENPO%2FEblNsdzgK25HFgGHRapfstl14PPGJ2foT4GrsAVOY6F2vQfT9yX6E0J%2B1cOnwWM7JrbKO4hvXSclWfUU3aBI43T%2Bo%2B4NA7SEsWYyEBP48h2uRFKSzNQqGZ%2BfO7OfucQz98YtauZ%2BvkaTidAvB4u790exO9PqvEGE8GftZ5qqLDA5Qurs%2Bg2qAR9V%2FnJHYAOY7UeVXT9QLeJ3d68XkNz8c3cKvlUkV6bzf%2BwZtKBUQYyq1T4FJKNefa61fBb4T46WURTmu6en04jkrdml0fD1nWl2SudmOyQrf8W8cwFrRt95JyZegwbxnkJWZoaa4oASEgljS06rDoPwU1mo9gZFmgAHePiE5rOmpQCci4WXF%2B1w1GxoAn8th3cs%2FCgvI1HyWzIz%2B9g7mlu0paBekOTYRmCQ%2FLOwrrWkQymKp9lfZWuOAsEGnHYandao8PWKgmlR2yfkX5KHE4KTK4kUCvnWc8HfCO%2BSadt2gCE6VvHyUSij0g5plbirY%2BqcrevBIc%2FIoM5aBFADHTCD6cDJBjqkAT0ZzLB9gCPasGe%2BaKqxyWrFZJI052WabExpHbCCn4DQNdbNeIh2TDRgVGHX7y6MrKacL8yD4wuO5nXy%2FbHY%2Fo5tEib8sNRPZiRwyw6OpZydAvsXsrxvlqo897SoQGbET0uc%2BRlm%2BeHbtNy3u8CWbm3hm3rrK5qrRDkl3VTmQbMttQkOeLxmT5iWTOccv9aOkW4sYZrHbCQLRYscTe8Bf9CAkVQs&X-Amz-Signature=b5a680834d85c2b249fc8dce3f59ac7fa6c1ef13ebd6d62e32128ce47971b1ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFYER5JJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIC0pMyee3vNO1D8zQG%2FkfkGvsxdLDq9avd%2Bde%2B4Igg58AiEA3aioPRXaznNc8G5dBjqBXidJ2MWxLqaoKgXQNkAdR5Aq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMTABb7LUVkyLdJ8WircAyyE%2BNWqD3g%2FC%2F%2B956BOLjzEqn42IIj%2BYFfWia84JgyK4fsRzxDGMU0JfDQpCQKvcGvohA0JNqBLqYvJGZ%2F2pll8QFCLpNP%2BWO%2FerEELKBcc3Vd22sIQR1OaWWQa4vqedCjudBI5MUFBXoAzPrXdyorLCWf%2B8mZAcMrV0PN5o7vOEvoJT3i7RPtU%2FuHm1j8rAUB0ogtkVJCmXVW65ZGuWrT2Zlkaj3lan0%2FJMgj9mZnIsPT5jm4DNpwDypSzY1JXtxoxfb3h8gI1c6oiJ%2ByohHmYV40mLosTa%2F8N6KPvNWHaFrKChXgtuDF%2BE%2Fu26Ykb490musRK5s0er%2FKJy%2FYOBruTif3Urm8QTu3iOCDVBZnQurWU300jxIOurvZSAo%2B5%2BK5ikrkU7r%2B6QAvTNkLM2r0ai007Nt%2F3yX3gnVxXdkX4WoPHZD6s4J8zJVz0HxzlhdDggL4AnwVJV4RmmSN%2BRoVlBgueluRQe53OOd4OFqqvCgv2AbI20kfYs02SBQQEaGipxQ%2FgE4e6arW2bgdJUDenglKyrND0RknaD5IO9JheaduB7X9nZR5IRU88Qr4aGFuO0KOfBLQhbJH%2BLMON8d3T5%2FcvtYOA8gyZ1SqTerNV1mtmSMtwK2MniZ5ZMPjowMkGOqUBBmuge9M1vw3JO%2F%2FSNVoR%2BmJYO4bFyA4KQrNgSBVxBQkAaVqxtwYoW%2B14OChMhApXOI%2BWpG7OC8isj5agnhO6KHEdV9bJYT6XBXcaeiTRBOS5qmnBB9ILjJlMGrvOEPwYpdsBIInBH17WBMGwU%2BrLqPipY14yCN1AuhiHlPh7N9UTzGI22lzMOlEOUQm6Rb4lU7Jos6kbE%2FmVjaiYe7sfuORFRdR0&X-Amz-Signature=5ce70ee03de961ad9c79f6d8cb065c435aee09eb13b9ab871fa0bfc2253916f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

