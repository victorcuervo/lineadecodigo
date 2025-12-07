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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GWZSD6H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvnz72xAtaxH3z%2BwBCC1PollBDZK1ydUAsk8Sko27eCAIhALhnbDKwI03UPgep%2BhqrGrT3QW2XXKI1p7ztXXLtB1YFKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFObB%2BHdIMiICTOVgq3APehezfZxOR1vos1VCDtwdLTLXyy%2FiKYhmotkKL4MZexbmDXb8dUYl%2F38MT8xSP9XtQuvJeA2UjRhG%2FpbrAsRMJQzFuVtn%2F3NgDicq%2BucZBjfgG06iaP7tcmJuW9Io%2FQ1dXTZaDxXqEyxUYI%2F7A1n3IIJsEScCnk2oMPNFIcKEtGc7E%2FzdHnholw9lyHm87NBixzwOpryGarkXTpMa9aQZJAk1s4145%2FBE9hURu2BSgZu7AJbDOxK0x9%2FqRgoqPSWI%2Br%2BiwuV4bdchj2%2B5twOWnNK4BbUaloaqa1lgYei56nt%2Fp%2FOsQSmOAgy0SJ%2FBnwLqqjgiR%2F4wu9iEf80a8tJF0gmJH7H08unEaNKZXDuCg3bDgBjP6bPjOrPF6wjictf1BCat8lNhXlDfnnjuHrJDXTNDquXWq1KH3oX5uekRDnCGwv114DbYNCb7vo0nTCQFrFH1D0HcQFH6l5DvX1aEwXvHa1py%2FUiZEsB2PkbA9MQMhK5aXDTlyW3ENKV8LMoaBalAtE0wIjuIZ4Aq28Ba9%2BXpRhwbCK1fS%2F4SEYAT0mYgLF9oGsExrYpj9OF%2FQ%2F9aABJFcIuFbzmjPRkjkOtPmkhViyD9kkPPGFyj%2Bsz6LTEQEsp2fiWG8iJwLuDCEx9fJBjqkAeg%2BqMJCe6n5OFPNyw8Wgiw1GRdp0pA2PaMNsa1m%2BBfbg3w88cA9sKh3p7uaG%2FPt8szb3DLzOCMvA3tWRgkldZ2gQudQ9KaLXevdJhzs5zFOb2T6U%2B75fdyGCsa6e0d1CjiSzeCjvzXvaBGsxtMyjGf2lKOe2IjqrMIfzZkCQbUc%2F3b6T7VjCYPqNPAqSM%2FgNS9fprLZZrEvmFeQ1fHL%2BZL0%2F%2BZ5&X-Amz-Signature=97494295801d7e57bf509f7ddba63bdaa709b27e8b4f131badfc300cec6aed28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQGJ4OG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY4NfGSSPTYMVzjPRa%2BRY1IVOfGUXyRqWkSt%2F2WfHwUwIgQAaXczpz6UBTeyQejUw6Byv%2B%2Bdr%2BU1K%2BGDBjkWoVR4wqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNgecKkHKc9%2FyWndircA0jAtQo159ho0qzpBeONW5cHscW5NthVZrkYv8wx9WdYU%2F03J9C05HpXT32JJg6r2oKg%2FP%2FAjHkZlFKRF%2Fr4B2PMkzUr2jz%2BpBY%2BrMr3AyXF8lVf8jFVDWaS2PEVAyxjwzx159ghO1XsS8%2F8bDQEAJ9aiwgQk3LZ%2FMaVvosnisSr8IsaynY6P4fiYTgFp6SxgfRXdHnJY%2FmITEixSkH6yiAtAwSykxm%2FEK4suhLIHSiGRfbiH7sQL0hdpowkz%2BTxVo90yf8QF5jcMaFLURiugZ2SGogyRqhqCyxllyj2HOQUindOLL1DrgDLKgUubg3O7Jh6T2iC%2FHKHPxZPZo%2FR22QRoLWuJC2VhbGbEUks%2F0wctqivRUr36LcA83kTJ0NBPERA1lVkZKOFH7b0NmN2eBvMB%2B%2FC%2F%2FE5M1qZWEjC5TrJsC%2B5EO%2FC3FzANHq2wsdZV6Jw9Ae6uPxCZBpXqs%2FfpxrOVo2BcWNHSh61kK9zRczktXCW2rtxE989x5P1L7ZsYzZhb1cBdCbckWkaXZ7mt2UZFHfjGsFRqERpeVYDIX7%2FzkZi6gJoUVRMC0tIRY9I9X6%2FSsjIVrlb5UFlJjgVrva6xzraAAt5X0y0T%2FFhUtAKlTCqdUxwjvBNEb%2B3MPXH18kGOqUBDyGnbNZZix2YvwRBoTok5rwxuoCN%2F1PiX8%2FDptqr9%2FlBq4d5bjqY%2FKQDD3w2YOWn8qf3wABaWqrQ0BslN8S%2FVaFluq1XLTjrM5a9aMrRDdh5l%2BBvgbjOHYew2PjZIa7UNosC4LWElDsSKQo1X%2Bq8w9%2FljfWdukSxD9CTCOn3tpGdyMTX5j%2BVwaS5w02go8tit0e2nSh8pXd53BjQqroKIixkFww2&X-Amz-Signature=81b56f8f824b3fd85cbb22f3e1704ebfd47333b2e168637693b766bdb81c849a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

