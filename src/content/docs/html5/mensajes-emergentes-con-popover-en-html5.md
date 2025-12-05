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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMATOHN4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOSfKCCtoWwkUUEB0BLb7%2FS9c5oOxMhGvLtL3uFgVBpAiAtVsMYuHnjHzeWKzr%2FUfdCxUahnw5Z5rDC6fq4rfEXayr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM5OwKZZEuWU910cNEKtwDGAQhOY9PqNVKJKHTTxPH0bQdqmGfFiHrUzksYusdjFr8BAfE0iZpVLtxZtkS9XUtVs3PtvwXwG%2Fyhn7CTHz5FX4Wm1IR8rcwX0%2F%2B72PaJ2Giimr2SNplpfW17klRwwsDKnTnCRMQw6HpLC3M8XHrYTS2jEYZ%2F9HHuxciGC%2Fzhg9zKPkXAH4%2Blq1WS60tZqe%2B0pWHVIEp%2FEiOuNQ6%2FxrREMqu%2F9H1ku0stMoOPuHj0g7pKXoYJIAHYnc%2FObpRLFH8xD3oIs76XwKZFRlt6JFBWxMB7MAuTlkzuyFM0DhSPC%2F4U0lozhuECFkHxkk42jav%2BJ4M%2BV5WFaRVesdfWI%2BUhGn%2B0PG9MNq01HEN651TVRxanJCa50OmuoYwDl%2BUjVBfm2yJ6QNpFC9cf5Wl5i%2F%2BBhwKguntesbNhO0aphtnv44IsmPetSSfudMSqr5aRsr2FFotF55eqT2k0J3cIdwJMuvOTFtWtuAqXhiVXzB907GpCN8%2B9X7MUoBM%2F6ST5lbK2OaL1L4kXi1LF2KPzWdwyk6crf454RiC4YbkLG7DA60ABDqiOr1c2MnknaLfQWtqXxO0tepJbVHG7Nd6nNCiHUkqPQlKme6%2BBdklzCWHcCH5cKLFFwWH1iM%2BOgAwm83KyQY6pgHBYWarwJCeBMfBg0NVyKIj9kYpWteFDuT%2FrUcrPkwItzO68uw4b4efFqtgITID%2F0nAI3Fe9I2IC8X89SmzIA2sUHLuffglgqb4JJbsQV9JVHcVZ815tOJlPn7dBwq7fAuhJ2MkHI8Y1BhE%2BmAUFg4NJ1LtHAQYOUzJTDaOaVWqOUewiuTVZRj1Typ8ESukBDY6Y%2BQY%2BphyQoKB4KuJ4hvKPxSKU1nZ&X-Amz-Signature=b484e2a02e884f62846001fc5f409da974d7f4d34c9737235a01ab009b76f99b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRLZDNL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7MMri8CSznDFHjFqejbylqqTrQyy6L%2FeFhJWtUoJSoAiEAs6yeFbI7hONWuprmMNSFMScxMO1GfMs1pDS4SyufmvQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJd1Iqm52VVJKayUvCrcA5MEkqxMRCvhku3gD6xVbKhiNKZpm%2FbqmCCnA4eoqQKdXGbA4f7r0kbXhJpgJT1fidZUi3DIC3WWR0oXyO0JlLMg1Q0BP7Xn1TIp8hWEvxEQSWy4kiJ6TVRfeJMv0D7EQqEIST1nXEysGoGVxx5yY%2Bt%2FwXbP0b9B0rgdxL6PiZSI1uTcxxRMpfAY7k%2BP2wHHTFMplYGhvaxlbmG3gYZVXrKQzz%2BV%2FRQKp9WqvQQ1yC9%2FKs7ygMjwy3Hyqo1VO%2FmaUNs3ZpnaD8XWMCzdUJh%2BPtzUS3%2FC8wB42UoPIYSRwTOVNocITM51nK2Z5%2B%2BplfQL4AvlA9mBBcxoSBgufNIlNaNzNP7aJN9mcARMfgbtViniESCFb%2Bah6bl8PXLwMuvAqa4TfOs8OSpHPlWaApQyuzMewHyqn7xxRpppK9en1134HUOBHzOlukkDuYk5YjB%2BbMIs78uB8v9UttUgJZhKNa%2FP1GKZR%2FceMnWuTfx2Shpjzw5LrBIdRVnuInrlaXTzd1h1ZwsHNb%2FtWciii3yU5t7raaGFmt2g%2BxSHJnyOpcsDifNYZbyQiCYIFRc6fDUnJh3v8Q1jr7ZOBrzhNANTyoEXUL4nAfXaNqNi%2Bq5ZqXI9%2FnOHNoK%2FpDEKMcYzMN7MyskGOqUBgoBgeNr9qwKvvjjVRdwPIEg5PgOtP7fOkgWrpZaphXk2u0dwKz1pi71o8GDKAIHezQKawu5GY3fQViM90fRWzis6nNsL%2FysNA7x2XWAWB02FMUyjmeItx0pwUsrpqodXV7bIfWDgP3ly6vzLAeEIPq7GhAuUYKMJv4ePS3l8mxyihWreuvo%2BojpOZR9s%2BTE4bBdJiFuuK00qt4G%2B6VaU2wP7mc%2Fl&X-Amz-Signature=a215f3247eff91fb92be34c27fae2a9862ca2cef86062b21d1d8fcfd38a61a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

