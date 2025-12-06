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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GYGB6JN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvXTUn1a%2FoirxtSjoAoCnJBbDf4PuJaMzdm0ppSURUHAiAUehpcJPi9W82dMe4Dq0PsKv4sNRdYiBrAA2N9jzVbHSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM332o9smY61ntzx2LKtwDh66kSWB80%2FGzrU7sCkSyCBJGoQEjdDRuD%2BIlgJdrGFbFcScNUp07l4nN9QMDPvQwoU5V0FJd0hXAV2vQk99iQS%2Bp4tdIB1vTPPwur%2Fgv1BqOnMowQSHGnlb%2Fipr2Pcr8hW2%2FgEdH3HA2W8d2i82qJtMmVBA5NKS1XrC7tX4Bozmt%2BTXuDzsNk2xrpJJoLZvxATIWJPR8oVJCYDPJrDUll2bikA3hCwcVILBPqb0ge7wI1cLC2a1IAz58RnYToBO6iEx8DkhzeWSW4gkZuu5RYoCD%2FmZWPYE9HhmoBL9f75t5nK7PkS0uvyNiOHOyOY553rL%2B3hRrE55uZHaIzNgNXQ0fvpmQKuJl3351gaqu%2FdsGBmvdEYfmgS6gRv0w%2FAESJURCiD%2B5xwDsrxJ1AT6UDc0J7yh7fChUBlKsgyg1LPYO4ojS87QOdkOVfYR7rFFsGecmEaNKPIdWtbyy11azVOhvIl8jo%2FnnwbkiPogFQOk0K3wyzwTR%2BfdkBSKJQtSXi7n9uHhOO9S2zeCLh%2B7tAXadqmEZka0REAgicCPN57U%2B4%2FogAi8YmiGH0n7qCHylRlPH4Qg7a%2BVE24IoX7%2BbBS4sUetGO6RFJmdvpw3ye1bL1HSqpeS9CF%2FasB8wiN7OyQY6pgF6ZMLhcAHO7vpk3yGXMDEF%2BB48mGlHDcr9cNzGW2WqEXnHVTPhkjgvy17nX3bj%2B03hxwjwElgHdhSE3MavNTciAtgHlBLh3LQ162HUuZ6UT2PDIACIRhYyfi8ULZQxssS%2BYgGQ7Ws4plSB1dd0la29ZWbO8xlC%2BDeVgHQ%2BauKfp3K6UbOcjiKMb5xmdYe9uS5ae3jjNz8237oaeIYy%2BENQVlUmWh0%2F&X-Amz-Signature=3e05596a6f8d7d122b0e9733e3d3cf1bfbe560c1a30f184bd515546e98a67dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666677GB7Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtTjV1Am1abBWszPdZ2hzeNmuxAjonMMfCNeMCSXLr1AiAVF3V7dCShg6rNxnbCLPnDG7JvVp%2BjcpTlFzaVcA2e3Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMKW%2BAejFeDoxftfunKtwDTUkD1IaE0ovgxDXuGoRdPDCF0nsxYepPRKplwQVJgyVMWITcDofyIsIdwurMorB3xU4VGdVDVr22CypYBCBGmr8Rpu4wgkdV9TTfr3Qz2%2F%2BwtUXoMb5ic1ge7lOjRHFSmAeOCNKru9rwkIhew95kg%2Fe6gr%2BjgGIodoRXG0ZaLAfp0EX0Z6K8u2jCiuFLY0hCCwR99XATFwanIGeg9THzTKsYEKG%2FIE%2FCVDGjYtz%2FDo%2FXCJzyAoHN9wwzdOo3dCvPIa1Qoi74zlP996VAhXQLA3qGa%2F1oijKJ1Vb5Db4KKoXwHxHVvr1r1CnoTz2XJeOIX9f5vC7VET6xzq%2BmNvDzlJCRvn8ewC6NrNPmDjky23i6mTPYY%2FUuleU7QX3MXwvWO8Mz0IdBhO7LnzheNyCiX%2FGHV9mEKmpprhJe3zupuC0w8upEv4EMVwSdsmM%2BoZyM4QhKHV%2FqzXHpjprKs%2FxGzPGduKb%2Fm3TbiXjmQrxVao5cVJDn7%2BDngobnynvSQSUAtTyvIXeQXxjN8DUkF4UMNMrudMwx9AvdbhtnmmVl5A3IYYG%2BkIaslswvjYkNFbIYq1jhEJo19RtYAcL9HYr65w%2FvlfYuw2HKJUDr06PxtcRvKOacKmRSBue9kVMw393OyQY6pgEDdHlvyjAYlJ04YBo22AxN%2FBW7EVSsGnrT2BmU2YE1k4yp6MFLHrBErQgXtZiBO99lTOEC8QpQE5d7%2FKHaLURWd%2BF5rncIBurVoDSpw%2BnmAyY8PYOLske13qkrRt%2FXtZgZ0qXshDeYYrY3gqPYIZQQm0Frx%2B9GbDRpFzLrZdAw%2FdeeBW4M5V1IQHXJo%2Be%2FFf58YmrNP0jPNkFtwTnXWmyeyatEWUFM&X-Amz-Signature=4c096202b7b314cc2b6c2cce90576eaf7876ff73a358962038046c83462897ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

