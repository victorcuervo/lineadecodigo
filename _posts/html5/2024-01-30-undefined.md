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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUTQ55ZR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICLaE%2FgbM8%2FUao2ZiDLIPDaJI8kzj5nMMC%2BXRcESrbvAAiEA%2B83XYc79iadaIIFOtHov4XQcY2WbXLUacTU363zcyOYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKiiwKsyjkjDCnsbUircAw7gX9cey%2Brnvcjg07HIRnI5zEod5GA5Xwm9DfcqRE5gGa3bMEKpzrOIyojXrRgXtwygPEvP65oM6d1wIl2fQBf%2F2OXWmqmDDHYwBbfLIGGvmQdGpJqBbm0KHKbiHpTjKsuipPYvv03VEHZ%2BXzmnirwD7ARv%2BU%2B8AER4psV8w2DM420noILoUAI%2BVVZv043%2BIYYxY7k4kFhsymFe8KPOdgl42NuCNiPoleH8dUf89Ue34S84XkDXWC2XydKvosDdTyvQMSUNzASsommqo%2F1gvQR4FbEqD47jMbx5zRgXDY8k6%2BWErGj5RBZzHwa5nHVyunFj4xpy1SAS%2B%2BG%2FGg1JwFInvKCAWhvkKpbsTx1kzqe74pV1h1rvu3NbCFuKKsPu4oz%2Fwsu%2BJrdy9mS6RwiVjQh9XWrZ1%2BKvdRLIWVkzyxA3TJxOsePas82rPdSoSsdEWDMOBXbk5JPbCxhZ1zoPSRMl23yDkJ6dhLDLrjDarkVaoOSpJgsdI27iF%2FzbrGLZS0fClE20JR6OubbvpMW0nVLzQ8Q9PhNXk7E%2FpiboO5FCa9SoOlWECVbFzmTpY3wkwscEH2bljeWfpmahIrCrT2%2FShhSdK8HCzcKRuQGvxkFGUfA31833GuRzEXSRMKTBwckGOqUBj1Drbr6sklOz7nHcOH5h1PdklFE8jaYf2Rb3fRqtOFr9omZXh4FVpfGFDuBvid%2BKMGd0rWDFIaOhxMAFl8zkrULCrc3qOSUiyMSYn4EXEQiIYwao60tcwuD1t27CRO10W%2BQi6Z0bQH1WNW9W12LiogAIYpP3G29jOodMY5idXfUa%2BrquCSUS1NLAGqPyWas3FwpLBnDl%2BrOOh8QdXk9E1t2Z3XP5&X-Amz-Signature=ce7a8930233ef3fecc2f17e86be5543473067aa9d8bcd00601e3d35a7323d4d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZFU22E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCO9TJuwnupvOkzNonzYb4M7RgLW7mAf0TqtMYrMQc%2FUAIhAJvb86ULF3ombaCS919VZ%2FN0VYpEx2YZbJeCBzrxB%2FCtKv8DCDEQABoMNjM3NDIzMTgzODA1Igxtu648SneB%2B29w8CMq3AMGgAfKoVkwi1aLcGXJM72gkZrUtH4e2RTeHF9Tmo9hndnXioerfLiw3FfajsV02Q0pTNqbit6tPLOZDZcDdIQ7LLcbMOtfMWzOKqeIBA7F4hZ3j%2FR%2FDDnl8TOt%2BZrrGdFf3wVs6gLbhiUiQ1YePXk0GvMpzMLtURAOTXkk4bpjklMmdAra%2BtcNwhsfrhyCrJ6lo9zvfDyarPnZDfQxYZsnZmQ2wGtEgZjl5a90JkGtJfPdlc%2FChsPEkdy0rRUsIgkDSdWwedK7eFrMOyStT0BVHzo7ECa1xrYBJr8qAd942JlxzFQ7fz20Cowb58qIMuUbtBjBq9ClawNUW6qdC30yohXyRxr%2FuE5cvuSv5TrhijYG1a0QaR3erDBxwrUY7dEuavdUN3GX79i9uvTRao%2Fa9obH29YCYfHBIwNw%2FhO9y1M31%2FecJkQpmdPIlPRG9WKTYHenPrtcsjy23vyDTIcltqkCRwTe%2Fbf8OBTimWa5yM1kIiCPtwaKqSC5LD%2BlS1AyQLfbYDShgrMqfZkuTi44ll1sRYMzUz6vJqCkcQv8yFvTZXsuhFnSusF1sL8T0a3Wc1UHyHiZ9Vl%2BvaomYhqXd6pqx%2B5TJ5xVus1E%2FZX%2FegYj0cXGbjYpHyAHfDCmwcHJBjqkAbL01%2BKOzaEbfSswo7hibUOirVkZFo68hYVUhJjF0HGHBgD%2FeLhpMFzxuzU%2FS%2BFR3W4i29dtISkfmGIkYGgdZXDUng4sXArYvTFBFTbTUJB%2BLOhgVLeplv5ItcCLUcOdIVMM5doLDfnqxr6jaTZMN7Kh6LZXz5YfrsELb5DAC6zVEeLb%2FWqI3EmzJlsfRfb3%2B6y7SApe3dANsuGnOxsrxXDV5Gm7&X-Amz-Signature=e605373b683bab12a7e441bfb95fb2bf6e7563e29509ae101f7b54aba115c8b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

