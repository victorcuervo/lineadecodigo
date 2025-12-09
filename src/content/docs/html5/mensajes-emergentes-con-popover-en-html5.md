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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXSQD7X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiBykyCzGmtC6FFSdUOth1HmA34VVgqWtizxkIJ2knIgIgFufNXNt5yTBhdgIKcf28Cyb9O9wHAHsmj1NLbi5gWysqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRyyOYHNnOaoAGooCrcA%2B2sTLBiSusZP7TwVhECVXsJipGF1CWPl8nos3ixRURE25nI7mardt3KXEgF1uFIT3tCrNOkRapPIiY5PLBnIk%2B3fnxOq1uIFFPjKyj6fhcIrR5QVK5X1Ww7ng5SseM3r7mzM4tQcANQcZr08jfL1RRsFMy%2BBiW4tgbvLkiRXhCB9GGZmB799CwWusQs0XDilxh7wbMYngkOcHkHXfw6BUZq68mxS%2BsH07lJgulddFBOa2CHCinlcSmfLU%2BpGYutYlZ97OMpYJDO%2BnEDorxsiI%2BQdJ8j0vFtKBB71Dpn5NIVHSvA6TQOdCMbx%2B5nVqtIbqY8P%2FIBekJBIY0BR00rvYnt2ecTYB5GIavtdSoJcferUuFj4rFQ8%2B1pr6XR9sxVM0BpCOQ6WmvpRpjxiCcifHtGwlvcqEGL0QRd1dRATb2NG4J6%2FwZx25a%2FEG6VtfFY%2F%2FW%2Bzg9haNbtakN8EX6geVs65JI3xxQ%2BVT19Jek6Mwla7LSmlCR4LIXtoklYXuV923srgJyUKf3j6ZNuIwQDWLDNkA4c7k%2BiMKDwJqmIiahvjtvmibRntB%2BFJrD0xImOaG4R0cmcCTt9FzbZUuG5UJGssemJx9WD4hL5jPkqP2TE8kgIlNXXht1%2BK8dzMI3D3ckGOqUB%2FiZJuWfRwSE5dymQviZz1hneG9xqZ%2FqUdZwXJFi6WiQxh4WX9E47cmEZmB73HGWeJWWC00igUFEgyVCj%2B4gKoT1tVyVTM1vXmWFBBhEhG8%2BOGmEjcJmjCytT6E8hiahvudX21Tr7UqkSxMtEXhx6kyksaDG6Ns0E638UMhAOIwKBrHoqh1qgD7NvVa1lgtjVDycc%2B7z7g4UjY2GK5nNxpkMNkBbi&X-Amz-Signature=8a38d9f19d5724c300484fb4617a540ccff99ba12f7da737be81f9b9f5705f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWHAN6Q2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvTbwHQcYJ91vGxht%2B7OuoXXiyNK5gWJOSvamGxJ8OFAiEA3UXDZRObhJ3%2BBeU2n1JjZgcqT66T5jyGOAeAwz6SA%2BkqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHB%2BJ3o77WATXvyxICrcA%2FwQmNT7FV44guIiWqiSag5NkPA%2BviEJvHnlPxkTiFa8RqVfatov3eD%2FHYKpni%2FO5s1sUXAH%2BDhBCtNn8v9bW8SIxzkHH5YMgVNJLwUgbrAEGGvAJ0tEIzp5A3qaQ7vhicmDkcg63HpWxM6sbsLF3ClVsloZPKCFHqzjyAp5hDhNxYdfz%2BQH0MAQQVdZqp696Z0DHQX30V0enCv9y%2BPmBKs%2F5w%2Foh%2BqFh66btVzTe%2BAPfv4muzeZfg5PoYrikktXZJvN7T6sh7rMLU7USR4U68iiGETcUPSLkG%2FNdgMI7S9UNqQ4KkvotuLFzKPJ5LtxrElcZ%2F99E3FsmkKSOK9ElejR8Drw0%2FOZYvbJNyNvV6wRKydTSBFIxMHAjlY1MR8uynhTOZcU%2F4Wbm7UXgeqE0vhO1hHLlI9O8SoLW1azwIReYZZa%2FUSzO8xoNn1RxznjmxGAs53kW9dTyFBhpu2SG%2Fg9BfX6%2BP5hNTavviqeuH%2B8mL2vPRkyN9Vtfku5d6%2Fmlkp4iMemf38nUMPtl6Onnxzu5a3N%2BV%2FPkokJ8VjXJD6Gs0h66k%2FzZvPrjjkFTlXRO6oxvqLdWK%2FVbZzfoclRvi3YgAGEZUmYsaaA7BNhIaeJScHMWBajE5DhqQ6KMOTC3ckGOqUBNaDQTA1BNZaOqrEx%2B1CMRxCragmh40nFm4SJdXHxsym%2FCCCM42fyxSnXy6KCn64p2sEeY%2BOtZgkmP%2FGdr7ZI38Yve3mIznXo1XsHUwJU%2Bsu2DMhG4YKHgf%2BJlOOO50m2NvUWrqZlyEy7rxPLdNwItVMr0sS2Kn%2BFenOEKT557o75g18F%2ByliNcKbw0wGDJawDnY18hrE2ptJbaM9NzxLs%2Bf%2FKR0J&X-Amz-Signature=98d038fd08f9f14f0620fe7613a2653aedaff5f0bc7820d2e57b5f2851f3deae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

