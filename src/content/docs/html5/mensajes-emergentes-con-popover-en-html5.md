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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBVTCYOO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRuj8MQhDATb8jEPktHlbyohTVg%2FTnz4Ci9n7uI1Pp%2BAiEAjbZV5mFLkWEL5bc1VTKqqPvTjUUhZgEwlYQa0UbaBBkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCNT5zbHXzv4Yy0SlCrcAxdJoWtf2kjtG9aWQ9CgEzrI3e7WSti%2FfI8Yj73JQRB5HUyIKaRHFIZ9I2j%2BKBAZilWpms8Dg1uXyROY3aVhMMiJIZm5pgASFJNCaCOHA1VkiIKSvANyUhPcGcEwikPworvTgBbEpf1gFMf%2FOO0E1d81KA55c0D0C%2B6JqAoelBOMWziff8Mlumtc8CJ7d6sCn%2FBvchVMIrEjhHL%2B%2BBc%2Fs70xVqoEL0yuUwoVtJ6FwNikqpMurKnlqGoxUIu%2Fzvx33Rg%2FtNeq7Wi6H%2BRg%2FUZFi0yA1EkoAQHO%2BGNQ1bwRY8LsEH3F%2B6ujXdHvQS6Y35aybcQ%2By9mZ5HMm6%2FjViamHliLrKc7dLoEiD8jWPnK0WhQKecx3MGSBXXefduET15ry8%2BQYwkZrWHHWJPJH%2FuDryI%2F3vsVXkjUwAqFn28OXqgjlt1S0VHpV9A9avVse0IIrR3BL%2FC9OM%2BNuiTg0ZJIiNtuvgYJ96WTmMjOh2tIFzCaT2w2%2Fli5nSQtN46m1zXeTxl7V5gN0hl7OplXHiaoF5%2FscFVY6yjXnioq%2F4vP4q9CSuCDXUjkrVvfa%2FNvH0L6CUXskAblz%2Ba8LxHNNP0TBgFWPTSA%2B%2BeCwepvpiB%2FDtnfwdy17fFXGoTh6vm%2FRMKem0MkGOqUBHZx1XiXloFgV4haQ9tWZxjl9o%2FNRfqBe3T3q4LAYiSNcoaGsLoEAGtVNhsxrHM%2BqzuPAr%2BupD2UtL1TUxcRhO1hWLijh28lkfXlswAWehyaQY2GoyF5Ysb3nWNTx3%2BMsKIb8XyvIn3ufDPxOaTMfkTAe4dm0KTPrrBHNSzv9wxcKVUos4q3jWbpR1wZ2ljQbtZso4ZBH2PMnGWKllP6NrnQRA1Fn&X-Amz-Signature=0f26d5499f4d41917127559ee5e8a16824258ff1f53e2d66cc2b78fd90efcde9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIU67II3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiWIHymlggWQj1ZiZgms08IH3YTH2Lz7Tvn5Bz6mpqrAiEA5VydoLxyPtlNkpAcFnqrfPhV%2BozkMnNLTmnCHMftX2kq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHnwjBq6PClgWEFd7SrcA8RTWnq7WM%2BV3yGEYZqF7Tgot2DHr2skpfS1Nb%2FSyQKfW1hcP65Z1G4remtX4Za7yz1OgIcZ6ny2YgY%2FblP1nDFVG89d217HLklpw3u59fqkC5HtiBga2LlNCI04%2F5wOhHDHuNVu3zzNIgiq6E9hTyaYTzsKSeFIHnvcA0LpxDb3gLC6ixZrAXXdyDmHr7Rv%2FY2344eTxVZCJ07SQbxYhUXRj1itvsZ4og1iC8sXzYLAFF%2BUx2scugK8xP%2FRKI2rhVcvXmW40cwb0Q4zlzVPR9fJLnGOtgbva6fAoeBCT37kdh7fkfXpjpLXZvjSTvNZ5dqqYdg4hjmZPHeLRM8e3IJXWL7OWfiDNzOv0c1%2BjkZpIGmPgb1MS1lJLfWbQ6yJGEQWyYqsjO9FKPnDJwmyG9KlBGu3wb6V2YOkMbdEQ87Fu7oWYC3xFMBq6CWo8djqBoLuljRYP8VYuAGwv9B8BLX%2FTSWXMJZDOguQn1coo70m07zGNskgC2zkKeCRYSrcfJ1Mg7zi2QE%2BkwB1jS%2ByiPbq0A5lUAD0ktncY%2FoTst5CzZ00SFF5vwJI0IMfeB%2Fp9BVwCUZz3ayVdGJFgXYehH6Girjf1kd6qB9%2BqaVBej%2BCV7VFJs33yPWxVxW9MPem0MkGOqUBaZiu07dRyP84MLmr9xX%2B768l%2FlPw4lm8dZI0Rfn%2BdXFOSFBj0UHhBkufZV4njVOM6JX2A8ewuNvgzbx0s5vlluVNSOsz%2FGcxDMON84IYGFr4yuHNocDbXhzf1ud1CF6ml3BhDj%2BV%2Bk65MZcPxtxrNnPXXYV6GUYjpFN33J07CGXoD8rEYujx1q5mxI8Xl1urHo1i58JV0DtUuWJK7qNANmOtUUAL&X-Amz-Signature=c7f7a604dea74a427a81d2e66fb335968d37a95e4686d01b3bde47a7e3408453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

