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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676LZVAY6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbNjKO93CR5LqtA4a%2BjNVAmo2rwRBUU9KaqX1XYbrMsAiEAwcUbiTYv9%2FjFs8WmnrtTgq%2B5wPOxMH%2F3fHwVW5stkn4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOqT7AKEAuSS89ue%2BircA6ah%2FM3yg0f0uLW8ElXpWHIq058btl5TOw21JYt5OwmRoJ2xeZn%2FO2OX6MNPaSFQYuR3jIJf2rx%2BJqbrvl%2BMttZuWRDqRXDFkbPThLFdJCsILhs0cOSoJuWNPzfhMq6UEn4wxnXQ5WdA3J6L%2B7VWulmvfpnsRpaNK0PkRRfEaQCbWh4vHBtRDEEa2aca7TXWdzr42v8gk2PhAc%2Fs%2B182GHb3zew3rlGSKaqnbOY3%2FK4%2Bc0a9zT3ZbGQsFZxGSx74%2FZmaxgxV%2FHzL4B1od9s9Q51qhioKilGp0Zjrr%2Bk2su2bVPB7XmiPcZNVRpPpWkuJnG32tPL0aAawVCxcn%2BgvOQxWtxDAy2W%2BoAWuXKP1o6Pr5mjJFJKAd%2BCQYUNClQR4Gh43MA7dndmhmussLc6IDUu2MmpJ6w%2BT6BB8gBnL6pUmQ4Lboi%2ByLEwHoYHsgm6ImAzUsuVqRCuDfxPwQ0i%2FmotBocSqaWEig5fmJo15mE%2BIXdOqZbV3x4e2AAGawZgagP%2BKoxWgu%2BasoWRTGQVpLFyZVlmFaxSK8GlfbDChMD6SfAKvIa14ElonkDf5lOIH89dcS%2BSZ7HYc16ps%2FCHi%2F9U%2F9rb%2FDrYpKoAh%2FINtXRT9eGz6dWITRL8R6A%2BIMN%2FD0ckGOqUBKi%2Fkg%2FF7HrnHEFwMcbracITYQm%2B%2FpjJLjCtHILuvKZHVTi%2BmYDryCJlz6YCG5vlEhjVK3zIF2KDkFfAuYeODIM0IdzcmlqQm%2F8JP7XEySJY8mEDuKApkGlRhwW67bRIvoND6foEiwBvUYrhqzIupPRx%2Bl9jvV8UmREUuxKfUXhRz%2BM8CAoJMBDvvcAI%2F5z5yCF%2BwrAGXiLvkNA%2BX6%2Bhc0GDwqT4D&X-Amz-Signature=d29f49278acc2071f682599f0b344bd41e822f4c739b0a20d06dc5a67f138842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDBFS3C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjU54eiKqpfE9st%2BBY31RBn7pW1JElnq%2BoiSEJyk6eIgIgVIu4JtIQDRALWr54Qt%2FaGkHiTXBB40DktBVSXIpYi4Aq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLibG7Pa7Qi0SP2lkSrcA8G%2Bxylj35lOtqeqF%2FsNOhL2ZazCucnqqL%2FPevVT6FBPGPAh39RizUZwIvA4nrYg49NtUcEwEZKxjZ2%2FPyR8OC8KfhDUvUgxGldiye2YL3r%2FUl5aRcd9MBZYon0AaGxAoVIbVj0RwqpZ5SRjGja3agbGVwkGfB%2BSI9dNdfy30VJ7yOSw0xiRhJvokGsjhFzJdu7C61qNCsss2xcHWMomDEu6szGM%2BHIRJROkp6Sn2cl%2FK%2BMH5H8Kc0Nv4dX4dCHsd9Q5LOzZTRiUfMr4SG1iaTSLEN%2BgAfMmn9Hirg3xNnwcKi8q%2BQeedk9zgJoQ2JaIeBp%2BZgHrDBlrOzELUz1nSP5xhkrR9ripQwgzD6y4XLDOc61L636GUCxj82Lm9XhCYeQSgLWLw1QNTONoK6alW1OW1%2F7RCnPE%2FAo5cqlBAt6ujtQkQQeqUYVmcNuuKvqt7%2FNaj0l%2B4GevfEUBV6%2BHVlaK3LRZjMig%2FMD%2BhKOUgcgC%2FK2KrZshF5zJvIdMTtbyDIbJcCBwmapCV7sOK%2FxeM7OP4DntNpt%2BRJQqTB%2BHSbIzByslM7X0Ie990tZjNOS9%2BJ2LF97IyxScRE%2FxV6%2BbfXb2W73hSL4kbZTriPNzk%2Fs7mhlw3qlBOXv1zuElMJvK0ckGOqUBhjSB5nlPLNgOw%2BDAbkVN1YU9CIy5lbi0rauDTThXnxehyGuMg4lT1Zb7gFWxqsfcG%2BRjhJLf5dUNj6c8%2FRjO3eFNATQD1Wxs93UlDlEqD9AJmqw6PBg%2B0z9mjgFKH%2FwDHLkNdMTPDLawPAYqQCaUs%2FF5eXLjlrIqD79JJAc%2FroPrNZPsfqVAVMQ12uQXY54MdRNKWzp5hBXjDMZ4okZR9tU7M2F9&X-Amz-Signature=f7e43c463da895847840fe8df88a96f4e35788049a15f5930d71df619f3fba77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

