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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHA6INVI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN4aT%2B%2FpRM%2BIi9wX8cWxfWCTdm4W3PXBi2T3eNLyUXwIgRqAqXbx7POSJpfoIR%2Fl0r16EDihW4VgljpqE74B5G0cqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNilDKg4VSO7TcZ2SircA4x4QkSxKcYLyyZ0U6%2B41LmNM8YK4R%2F4hYiGNvEYSDPj64JFDb%2F0jvylJnJVakJwEyDyDpOnmyP85Dlz%2FcKyXF6LTcWCwvSruXDDAfIhMR2eurZfHc3tgBgVQBOG%2B9IhdqbEv0VS90sMC3y11PmeBg8RRCE0bHEymz0thBogOQW3m4EOEZur1VeJ1nnWAMJxMBgQ1VaC5sIogPiHPAyab5xLbjbrSkB7q1yCZwY8mDJJk135tVtuCCQ3O6z%2BHRQRlIo4mksg626bj40Kzq58mIGVnGu5hBrEdjJD5J5XXBsCn1lSYnE%2FZGsLGVkfg9iN8NGZ1xzWacYAk%2BnsBF4eJ9009XqlLkim1lpjDgpy4Ru448q84k7txddv9iAgtZprr6tWgN1UqiIlMEAp7VXHdAR4ZDXdAR9SlqXRLgpXUKzd1nRkdhGcc2XfUntAIZudX%2BSiBPIJH1EUIzkmOvMkDmQH8cMazrBmTITWyjl9gF%2FNoLD9SYudjF76%2FdhKfief3l57LMgL2Rc3n28xv89BQ57dvepiP8kDwKObY3Ss8oQ%2FDY%2B5vKulxld3E2QN1%2Bd6OE9kmcPTt9o2lMJZ3sJhbfddHL4Twr9w7%2BMwTwKLtGYY4vKq4omaq1YbIfrrML6g1MkGOqUBat5GxdlWIoWWXoP6x6Cwj03k9d0V151IldF8e7HAOnO2z4l%2B%2Bo00OGDyWpT%2BCy5wSG3hq4p3vypNzCxMxnhmqzgcf%2Baxw4K1ODvP9W4bxtSoq8EAOfBczSVzyhbtoPSLAOiNRKBYNeLTF6Zi1XoRnwo%2FGc8DLEk%2Fb3WlEdQ4r0xSOabuAjYS%2F1Jn7fJvZVvOKnliYKUxPlqUtcEYSjm9WjIGh4j7&X-Amz-Signature=68af3fda3292a942c8dacb94d6cc89f6c025aa15dcab4eee2a49e59aa5ad7749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDFM3YO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZJwXxRvt8wRYaB74JIkyQCue3i3Ei%2Fig8AkytdXjrIAiEAg6diiFmriqTkzBEqhd4scV59kKz7iBdhm6%2BIWuaCB6IqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHT%2BsRaO0yXiEjw%2BircAyrhr7iMu2b0X2ZLBP02%2FFJiloTuBN48WntsbYM3k%2B0%2Fh3hqsQ3Nssrjf6YiP4BKszJo4BKT9W7UJizcsK%2FTfX1cqcxm9omv%2BGwOpaB0J7xkYUOCMXVDhKqAWeYbGqkvD9q8XP3TVaxJSiXR%2F0YAIUQchCKz%2F0nsNYRHaXVU8SUbrH%2BbEPRMCSIvoGtRCB%2BWR%2BNInp3s2pbSWT%2BI2Rqs1WdsFwQsreu3nP%2BMHfNxgI0DuZVK1tRc3V2ff4moTEhwX3%2FZm1R2XdL5t3fiA1pEaaA%2F647OjRcnKsd8BL3be7gota0fnHgU45N00NOYDQ7y%2FAU%2F6KkDo6fjSwM4cx79cwPqrUca3yf7TRjC3sGrqA%2FlOAulvTqfVyJqzzJfv0k9brcUpWgmkgM03ls2o37DpTDLMBkv7KCq5Z%2Fy94qhjqqWD88Z1uQPZiMlSJfcZRhgNHCQjOZng6LmhXiijCb71qX2NM0f9WZ9fWH9V%2B4KfiOjGXmKhdGfTPwbddvxww9HOkIHS50q32K9ZfDosgdWPJdF19o7t4pZvkVv8lbQcG2CJA5TeCyt4dVWt1QRpQvOY0amd7U9iQb6Or%2BWMQIfc5ej12a18149NWETGlmwM%2F8ro3OFsFr%2BuxMiYkLmMKui1MkGOqUB9xMNLR7OB%2BUX3ConLnGbRjjav4PvAPbbirnTRX2okzKwBoqiKQput%2F1TSI%2BjgYjRXwAn8bCaVU2S%2BgM1NhAt65OiaHmEE04w5XSF6mi%2FAkBCXnvXN1cGCoFj00YFdat1HwpUZenWLQdX9DUI7MX9q8T3gOA9TcLogAAlNKjPnjz3QjfimUEtRBrsUG7n%2Bn%2BDH%2BZ64aO8l%2FY00kC%2Bs6CRIkwI%2FK%2Fi&X-Amz-Signature=036a6f9b0e6722f95aafbc527f3bf2de9b4766d44f40860c9af100e1b7b7ca67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

