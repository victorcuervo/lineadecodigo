---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKKR5MBC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCXwLqrZAGqy0GOV5p4LDVEAonon6R2nQzxFqbWS0R8mAIgFFqMdVp%2BMJsmGtpQxT6FAr2DzfyEmRPSVPE%2FxfpxbWwq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDIx45ECleBJpO%2Fm%2F2SrcA56ViohC9Lpgd%2BJ4KBcF2uF8PC1FNskGjUktd30uSUU%2Fp5kBq7WtJNWLkrDfpz6vFMhTBU13vrlwHRcRNZDZAj97McI3iAGOvT8Fd1cTneLNIkT3vvSxqdtflIGCTSJfM%2BUi%2FnXVDIIvl3mQsu8JCG3%2B6lk3W%2Bqz32VDq6f%2BX52Ra4dvxu2Pjv57LakJmi8uYKeCqU%2FdNG9yjTq03wGuFHLtS%2BxHBNW8hzhxF7lTG8TPa%2B2nuzOjug%2F%2BxXZRUSavYgZpyJ%2FW6la11Ga%2FSwdy075lRrxW1AsA3ZKcXdevFL6p70nEIQD4N%2BHsWqfHl84PYajLfhXI%2BEiHNQQUutnA4xITCP%2BDPkSJl%2B%2BkqiKVe1hD1qNzzQZ3Pla0nnRqpOOpKYOaoQfvUAcMumW0y1bWLtgs54g3K5lYrZCttnFTDpmQMmid%2BSXVQ7mjwK2z6y4HGpB0iw8zQ0gT41VCqbfgrvHPV0EzR2zXtlR635PGlQuL3Sw1QjM0LWN4tAgscW7VqdOUL29O6qsvoQjVzFDmG1YCagGi%2FwhfRdXmYmU%2B8J4LVWa7%2FSqgxw338ofECO%2Fa0cGmLQQj7bEn6sdXwfmX%2BjmFxo9mGA0sqZ5xCU%2FjaNpWAPhAqOIkGm3UGl3TMPiqxckGOqUB7UWlMKjJ1oWUWwxv4Idu1MlU8GhlnUiIEj2ZhJA4XrDVwUmRYs67FoMX%2FGhUddPZdu96OVfzmEr3pN6DhEsKJk2bUGpRBNGWWWZqWARnN3Q9QgyWdE%2FLOVkBO06rGh2PuKytE0RujkHuany2sFr%2FYmfXPS78Q4OXk%2Bvmx4L9%2Fwm7CkxnpXMk5pkkG7DVxkPSNUQ%2FERAiRrh8FjywCub%2Bhe2Jwy4W&X-Amz-Signature=77674a57f97fdedeef0e4b9c4573745f308ee004c50c80ec72cece38291a02b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX7UTKF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDylEcBiXKCObNcfL73BiHXq7FA8z0fhATmA8Ls351XWAiEA25OuzGHHgDhX6lOs9ao%2BTRQ5enZ1y1lk0shn9aKnIz4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFh%2BoV9g38wUQlbfYSrcA292D2JAK0wf79RThhZzZTzbqz1hzXonyBoJxJ3k%2Bqv%2FBtYaOoKnxx2%2FJZEcgJSIXwcwu1SOAFFNBKNAhssk%2FxLwq9ZmwT5ZSroDyI6had5WolaLdIpdQPtp15VIicKaU4%2FM%2FH9ck7y0LLMBab6x8Do4SvEtgt4kGrjRbXmryShTslgA8EgNbM0nEtbR35oTj6mVRIOn4aYfXvzO%2FKtcmURrSTAqedcaOOR0tM6XtXM%2BoQGHAYzCBSpQXr3bgJ2oE5GDyzw2Y7o2oEdeYsf4dELgIHy%2FeouPEbETHt4LwzOop6GWi3OeO4W9sMeAUBMkcT%2BEt8Y1oW10OtTdfS6C9qQEZxVA1ehzOBBfQ8SWSAAR4gB5r5evi5d4clg1HQUWUWW7Q1yKWWTvEyvanSW8zm059HGOwW%2B2o1%2FTvcZFEvEHMgZ3m%2FIWj9p3zyq6FSuKfgrE6Efb%2FGB3ZCgGNyOf7Eg3lQtkFsPX%2Bzc92ONuy3KL2ARhfUohq6zfrymKTZVrk1WMA4RGJJVF%2FqoEEzGnvjmi%2BFR9tbyV4TduUwys3YLADt3UAi6lgzQHoPgF5ur7MrcZJp170ewYP3aSYaUeTQTAeg4xb1fYUOCcsKImvYwhfD2hCmVfZzAFiKI5MNyqxckGOqUBK7pe5BU%2BVCaj%2Bi%2BUTgKrza97Npnghx%2Fr0jVanmtKpEylKp66ttLf6jQB80EEmX66CWMUX%2FjJsI467r0MA5qV73EtHTKPuBBd87%2Fe8F3BVJU9THh84xHzOQ2o6rTPvO0VO68pdp42bY3zUm44v71sL%2BT5jaoFMbV4EqCKbGqMlYB%2BKI4LdDkVrlueBd2A33QRa4v0LgnGazui%2BkeGc7WEe28BN7gh&X-Amz-Signature=cfd530a344e22ec5f749bcfd2bbf237ba91a15b751b3b50711b2649b0e544ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

