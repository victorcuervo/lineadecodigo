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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGI24F2M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE9o%2FtFb37CTjIUTmVKu1R6TGQd%2F14WG8JhsfNthHKZwIgai%2FDlsnsQ3ResyO8P6n25e8EIzMNRUI2WZ3GIa08Mxcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOLUPw6YPisrn%2Bx8TCrcA1HTo1GiXlUT5oTR2CjuDwLtor7Xshd5NwR3EtVYeTcY9wlXysJ4KZXXBjSxFMkXZsDjm7w7RILd2NRj%2FfWd3sB9rCQC1Sl3tCzQfZDJx9B3jJLR6o1mAblf0rmKDM%2BGucSSK7xCKehpMc2yok5l42PkLByILydOTvm%2FIkWO422Xuq%2BJNvJRFDTfwPcE8ordB0x%2Bados5n1Nd6j2HCtJ09YJGIhxVseFXvd9Qq%2B6sFLwyflIRfJJX03d24csDcfqyGBiCY2tjMvGa6u%2FsK2jqJyT6i%2B5EUT5Z2mZNb2U6KYjm1Ogrml7ZD%2BTIdwC3vqRKVeaXyialDHg%2B1gjIFULwSUEvMwgijYT3dI2rNTga%2Fj3JXkT71mCakIvQprASMFe3ljd%2FCXZzXaOThSuyWxaw8fxUsPJm38JK%2FSfCLrsuM%2BfYBvKg84J2AEbNfBEpLVShI8rLirssgUF5Vjbbbrezucqzba8oYzVocXlGFVlnvw6icmy6xfti4yWiWOMO39csKHMQagwVl88ixWP0mSKy6lRXGgMGfx1Ry2DVGvS7kMKmiLiS%2B6TxBWfN7lZZAo07ZZD6qDRdhZ%2FQx93wvCXclsyYjpks8GcjIbmuHbnAafeBv9GHJXjVU%2BxPPgOMKWm0MkGOqUBrjI7upqL33DjjpLw44WfP9%2FexvVCHzq%2FAoYAhnz0SvIu6J8BE8QB8PptxmsT6GbL78pLgG79D07hUbviVUY0pQga5cXBOnYkjXXdV%2F%2FO9TX896H7AvuR%2FB1I02d0zorzK1SXVjiVLkP5g1P5vY5yhqb%2FVi33nuCmFpttATErrAbuyduguQZeifVGbmZPDMcZD7Jl1j2BRXBZyLZut663hdHiMj5e&X-Amz-Signature=9349a0efc75acf3cda9b36bafd98c89757a257673d264657189c958b789daafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTD2KTOX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0wT6suWawoxBJTmS2uEdyqsBgfXIXyoCFFQSVaHIe6gIhAK%2BkmqztdaC%2B%2BtLXpMy3irZldXqRzJMzebsf5jhOW5VFKv8DCHUQABoMNjM3NDIzMTgzODA1IgxYwl6L7KUcpmhMtpAq3APCJonHsLAKAqMZYb09ivcfqe9w8%2FL5Rp4UP%2FAb6nlVgvR51LHERi3H9nUkvTD6ojFMO7w2Qp68gbeBY46p7%2Bo0AnCSHjB1qapVFJoySFKLS7dW2C0EvZziimmoxh5sLpt9hMnBWC2wumUX7OniJNWCEpVhoI026qQ68jz19b8LdD9VerAl8Ng0OC6CQHw3aMpzKmCsrRIHVIirI1Ynxf2a7LKmjZSJcTYMjGvFKmA76u25w9M0kiywCh0h4A8xNwcGio4KgHoo%2F3t0iD5qChJhbmcsspAXshVXWcGeQZ%2FqyHWa%2FLJJuXy1qPD5SroZbrYfYKvtrWfPrtqU%2FghVliHIhEvjk7an29%2BZAlum6xpvaApm0J592FMCTCOMWkEMrgwD4W0A7unHVRdb0tqr3%2F2sYSo6Iy2T4jkRw2bNNli5cHn6yE%2FAy7tAhmzvxcu9bbPSclh0T0hK5CKhIIc4l8O8aqezQ6fjhvLQP2xK0RUl%2F%2B6s%2BPlDh5czr7DWBgeTfxOZX1SeG1NGgGjYzNQ0Sf%2FLT5nAElh1Iszkkohj6TlgZdEUmLkzsE%2F7LJablBffZGUpNrFMOVwD56oy4czxQnIXAmTa5BYt5v%2FCkhRFgZ78da2AqabwUlEZGR%2BqoDDFptDJBjqkAcA7ChtvPWB18EKqUQtn1s8KId13Ez9CCPD8druwhaFycfrhW%2Fw7cw17NoIOunXPwLMtPZQcVpyolYx4Ad0Pln%2FzB8%2F8%2FouUX%2FTy3F73mqQbD%2F8wx73TPWYK%2FzEkPAB92DYcQKUKznITnK2nbTZafQsnD%2Bj4eHlNCLB6oLUgQHPpffbxKkwLxTJg0lFhgJgrqy5EypqFa%2B%2BV9GeVoxr%2Fo7quyUDL&X-Amz-Signature=7d2fb4221d3772808114b98278a1849d20288ac5a295ee5fedb1fe9e64a59305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

