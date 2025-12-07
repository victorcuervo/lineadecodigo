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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XX6KRQD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2J435cDF57YQlvQp8N4jHc3uhFkGRqcvXLXs5oszrBAIhAOFN65V%2BrBFnALMJRRgP%2BAGz8W0jIvRfsXaT%2F%2BCwweacKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt6ykO%2BkKFJf1lLzgq3AOIAIBdzrHFZo8kb6S8j1xhMfFFc0x%2B%2FQ8WJjZV7%2Fnw1nvqbpD6vYrBH39odCcbg90%2FrIDL0HQzlv0Q2VtmBzXZ2nqnvk%2FVpcgvgdKcRIL0%2BflEou45308kHd9Cm8Macr8A%2BiKPRW1%2F%2FuP3Q7afmAeQ8dVfUn2lJy8My21ocftuzkNECwz0jnY3xjGS9WLlQM%2BGlGjxVRas6EUVxuOO24a%2BeIhpJ%2FG%2FrGnVmzO10eyjuNvQWteKlNLZxSteBFJcO9BGDWXxni4LMK0X%2BuXStM7Dygu6ihtTxMl5OSxF4ztrddum6JdR5%2FM%2BjOCRlHZ%2BM4szpyfrXLBeYn2nIZ4Tt8WqJJ6gWk1uW5hNHWyJXbC0E%2FPQ%2FXP9YU3Xkb%2Bfp0PLtDxZZOUJaOg4QBwnKBqD0RqLA5iZmQkkEAJuQMuS66tK35luOKl3lhrOJVwIEs92HLw9Fim17u3U1jhnSJzONEpL8Zf%2Fcqd2%2BS32GWTrAUHpx6QTFCLBotu3BSCUdLcAnnZGw0GxSkIG4N8vvq1TOAToEuAiY8K7N7lLDiyEw1wOAh%2Bgfjxbll0rm03BxbFavwHXqmOnkWtYnwwqe0fxm%2BKpa621OfXCmkykOw9qBRA8AMoYb0wcTs8ib8F6kjCen9TJBjqkAT2ZPhBNkExtJs0mvDqCjq1QVO2uMr7Dqjikzlv5BBfhBUS9a9Hg8DPUwnT%2Fg4XtwVGfDUVuPusKh%2Bt%2FJQk8pXV6FOblpeak%2Byo334yf8nazy4oQwv9Qgx%2FYzwboDDFEKkhIKwU2GaZO8BblmClWjvcbPoRJAffdh6V0N1aHmXLWukxamC0RwcFbdSJd4ZufJnEIOGxvoOQg5inQm5evbZbrpbao&X-Amz-Signature=6a15a2e1654029e120eeded8144e5c6d030d23b2e0cf41487e496ce5ebdd2042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGIEDE5A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqX3KtuAPEN9XgHqoxVQew0KSrSsuEfCxel4Z3R04HvAiEA1uEvy%2BO%2BwIo92VAAY3KeIfuiQH0jePMvOpqBIjfVnTkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHcwANzDb2OeX1DBircA4GJS%2ByBHwj2yGQG7m4nXJvCS2Ue6LSAf%2FEt3ik7ZdVMo8KGQxscDn6QuWjuSctusjvNgJ0TLjs4nES7ovsSTZE8%2FHCp56Ij3Mox3bofnqwSjD5T2PscI0J2lC%2B3xerkb87ALeUDwc39po7fsCcA1Xv4suRmshObs9aSdyuLyuMW%2BzW%2F9lY16D7XdIA0ixej3%2BL%2FFRa%2FUMnteNyvh%2FiY0yd%2B0HlRdxEU93QiRcq7ibvLMytHYUX763Cml78b7iyqA7CTg2P%2FY0fGc%2BoGOTzSFfNBNU2IQMRzQAx6qmBVtccizsOfM3%2F9sM78OMzu7KqWwni4AjIvOPmZTM2JCXdxEDWNOP34yICE%2FmJel3hR9El8TQMUs8C8Q%2BHc7VQMQB%2BwBHcBJDpjzMcXynQ1xbJFnKklT2hYYKSzDAnGRxV0vFX2%2FdOvrPHa%2BoNQtSGJWgTWiXqkKbMsdUOb0uJDuPfOxbHkTCEOj5lkCaoZZvPiPVhuaqjkORGwAfEcPDBkIjtWRqk459N2ThvvOWG633K9m3%2FGZsxLuqcwx8aQRqSSKqjt2rSkTvXxfk0D7Lp5RJ33gsYqDXHZZ6lafkLJUfF8u8HQ%2Fz3Rb0vt3tTioMnfsImZnpwEtHzDPLtKnHr3MKui1MkGOqUBmgSoKCe7dn3dByEJnQT7wcD6SH36NQHz2tOsoI1fZcObh3Slg47rgdyJFZWN6FmYbFQJ1X0tEvOgE0Zvok%2FkldyEjTZCmDeYWsawxK2Pt4m8q6KiJ5ezq5PGiiXkkcu467JDW61wkAPdN6XYiDJr%2BvD8nV8k6x%2B0An87PXhd2CitPOtx8QK8lDDEgA0XeSrwVcuhmiQAKv23gbX6fQoE7%2BpUjCvJ&X-Amz-Signature=9d363dc7459aa27d0f130bf1bc25e064e9753ee65d271a157516d48b3ba274a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

