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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI55NEAH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8LaeK8uz%2FehenBKvkZ8KccgedjhZZV2XsRKYcWHCFMQIhAM4IDTJ5au7itL2LK%2B6kJx%2BYyfDiaVL%2B7pRB%2F2F6GCHMKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2C%2Bub1a%2BXhOjaMUkq3AMtf%2BQuAGXmti%2BHXF1VjJwvFB8%2FOvm5hJDC67izw4RwvevFaRvweUEmqlFptXbjQPC48sCxYnHHMlwNJ8nbx3T01XxaoMWaJ1MSNEqY9he%2F9zYkXsyQa48Jh%2F4wUMboFqgP%2F3OsQY9vxvk5SQYORv9P0r03dYM%2FDOiLXKqcrAN7tzhCVtn8Y0JxlVvn1k0p0tEsIUs%2Fmbpi2JVw41b5H7%2F7c4fEAyJRyYSr%2FTSk%2FY%2B%2FOxgNmPAp%2F4TeCfQteAcHP4SArZNn3jzTlzZu2wXF2LHs9Mf2lMXO%2BgFkzGmsBP0zZqKCMv86fUofBe5idBMw3vQoIJywvrOlWNOuSmisP%2BdXhatwVk1PSKkJbewdcD7WLzGZBq%2FT93Dy6escwbACb%2F7nMniRtFVz1ORHCiYG73MrzeE4sHuzziy1coxtzG5TkeB42PHXMUlwyHOzL734P0Ju36IWWMP6UPlHpAjyQqM3Nec8hz%2FGqFQ0kkpKG71q9Q4gNdsf2APU1Rj6dCe2rNXzbbz582iAFFgCdhcNtovc7jNPr7ZoFYJZiKV98ofEOTGBT3XQrW7qHbeUnSq5jHN8eVMu1tD%2FAyz%2BryHuEw%2Fozbop7Y5NHulUAALpVLO08%2F3JFXOIwlHsdnwfPDD7utbJBjqkAZ5Csh8u5Po%2BgsbtBUXHQVU0%2BtoYzpNNTPc8g6WKN9h5w3SvaWS89fHjnlMqsONhB%2B4YLCF6O5bJiefM2pzzWV7dOTgehNV9gs2tRrHCjIZJkHNyuVzBMVJwd2PGhU%2Bp2aC0b4wxHzLLkmFLPJ1bau%2FJbAqxAPmvCLfaeJ5d4VYNtN2Z6WGMZFrpIj38mrWW9lANGIElyWDx799uyt0AJ6nMhSaq&X-Amz-Signature=eecfe0c6f016486c91acd36a692c82adcbeb12ecc655dcda09f78b128e75479a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XRMSIFW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBlLxeOSfGTG7Ay1j1YUNesDmZ9dbpF%2BrUbrBUK0BnvAiB8uhuSYchQjdyLQeGDN0mvCAaI2jxX9zcK9mCtKSPDWiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAC1XtpHf9Tp0cRGvKtwDTWCJVMBp48ouHSBLUyLdvP5WLmutZC9W3tZ%2FtQtdoI7IJ2OIe0sgUK57tb3vcvZ%2Fp0EOofN4bf8abBqQHextFaEUy99nXTTL667EaO8qj0WHJl1ElH4IbgMQzKxsplft%2Fs1ToTHKPMsTz6uhGBECddcq7XPrk4tp4oRB5QzNJTTX4MkzXlJWbktcQViyZdJsfCz%2BYsDBKceLXUzKGqVB2a9K0Fc67fWqaK4WbbkkBwopJE2istn%2FREs4%2B3Z9OLBSn4Dye4w%2FlCFdmgUJfJWHECZ3W4hG7wNl3LMjyvWrIpXvUqcHBPNJYDX3RuZ%2F6pPZq1ErKPL1pkdgU0XkSm2Coxt4iCq8qqzp1uW1pEYlG8fSTw%2BmHY1cV7zvMdCifE%2Fa%2B4CvAznli7Xftig%2F1ugXlC%2B5OXpn15x%2BJ3WlOF6M5nAsjY41bCpnINGaA%2FGCc5zq8g4fasofjN9nw9JHYDrkY9vnMeI%2B93QyerhdRGJzDL6eRv%2BIYO42O5FUDJ2iNrbgjn0DYbTJIWvZlLOxvd1EhDj15Hyp6EnWUZNkP7hLSZJf6zYJ0TB0L4IKb5bVCmZFw6LPQKHDIQF%2Bx7OlUdhA6kNXnMSRShM7ElMjvqvsLgPKj3DzJRjZdlhSSYgw6L7WyQY6pgFul0ha%2B%2BK5InkQE6usBJYDSh4Rg4PjIGc1YX6mK1Vt2r5ZtSpw8JFDNXIm6NeMvg7FuSs80Khr2nyBo74Di1ne2PnzsKYcZFSatU45C3jVkLU7QF2hCzRnhYY6M33kDY2kwXzBP8XJPlGMDiRfLWUNqVEv0ngnY6feUYQZ9Jli413L3GebnRkS5SC8Do%2BbiVbloFG6jiXNIIQPC6hHMYtAYx9CzZpR&X-Amz-Signature=6d57aa13fc9275a954a5135012ef2b3ba32389e79d42ba74c28b4ef747e91413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

