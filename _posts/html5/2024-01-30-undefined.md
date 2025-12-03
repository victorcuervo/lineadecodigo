---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OBH3IIV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDU61o2%2Bz%2Bm9gmcfHlxoAnw1sPD24e2uVS8OUyRfWiDLAIgecsFmaX52y%2BaMCwtGeriZusfsmbE6j9ODaqQTCng1JUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBCE2B5rHu8ZxZclmCrcA9uurYLFmN%2FBRX6VtJ64s5nc0rVu80TWb7wYIVAAJ6%2F%2FCqHkZ8hs5aG5eTjaLHtG%2Fytujsx%2FmNpI3QofQboSQ3om06GAsGwrxgUvdH2KkP6zqBGg6ZIDbo42pXxQq00lotY0aZVjCqi6h2SKdy%2Fgta2d2VBSL3Z8kMh8lpG8bNMoRh%2BtaCIiwoOSzjI7VU8baPNM9Kj1o711L7tM3ugN9tex%2FhFWozVBC1N%2FDgUhkDDpzhDGsYSrPMc%2BqX4ncIQx%2FzhI6OXMKdoY0U942hgHMMnmVFHsI68SdmS9L0gEezByn8x2oOxHuUzC%2BVsd6KXzzWcJOv4lB7rhyJfhi7gZAiAxKtpdw0PzfmPB6PYj7bHlwFk6us44VvMBJajVnt2IHur6UKlwe0s75GK9RjTYRNZTFVFRto8ye0HotIZv5a%2B5UfbsGTacbOpHq%2FnsdVLiEZIXQnCeradFV6tlPGHqMBmJDKb3URvuESPlY4HcRoUCDRLSIFvx7JIbAQ3Dq%2BAQflUfNzKnfuXx3xp%2F4krtzbZ57yUmpWEMsIL2MwWJSYVLwVCKznzGvzITTzveikoKnCvT1x5gF0%2Bm6CuTBgNALu0MNfM0NvmIwm8OqkLT1k2XaFlaLxkg%2FUJDOeT8MOuUvskGOqUBtSUQMlAx4md7HK6585wu%2B%2FQWHG70wb%2BdL7O%2BeEx13vOp6vBLm%2B7SiPl9EkDzPLKTjS9eFoHshItTo%2BdiuvwZvnBfBDqTE%2Beoih998c%2FOut89SaxqEjJogNR2zCleiR364CNomAS206%2FBZFcrfUTEuZ3p3RfC9nDjJ9llQLxNqzdT54MJ9OXcX8vOzhdC1EDzDmJP2SkgG%2FjKhgryMCEA8WMDOb0V&X-Amz-Signature=ae961d5b1a2972cab90009f3a0db23fbef52d9786c0580bdbb7b2f50e3560d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI4CEBPQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDQPLXuW76A%2BCqfn7tzxtozjUV%2BgJMc4SxJlmEHgsIMiAIgEtki8Mqpoi9DQrTTrpUaNL2%2BULJVU2mv4XFv3WscGh0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIzm73gKKcOco3NdECrcAxhZ7WMLkE30WGwbYhj10JyXrMVbpAQrV74mgHWad3SfYm13UIVBwRg5mxRMWkjc7jk9RA5Jim0yPYbiXISrDNb4rBHRDHJLg60MGkFVZn8ul9FWNH1c7aqSzmsHUPopT3yLo8YWA6Mvzn5NP%2F3K0krmy8lzfMNIhfYiRjpD2QcUQ5abf9HXrWvFA9bobKRx6Cnf2kjq33sB%2F9xSEOtdwMEQXRb9xHfxt7DHe8vbbO69TGvruwWtfcQTal71EXSU97zdNwCNSCvHQKBwl7Md0q%2FNfBCDBViLNpQ7P89qHSYvFNdEgo%2F9EglWedOPNa433b5vPlxO59aUB06JDtgTgccPIzzT7JuQ0SA8zeZn0W7pwUC21VvRqq8q3%2ByR3oKUXdKzu8QQHQo4fR4ts2aO4VFIdasoRcDEEji1KT6lx7eEYMm2OwnMQqeJ2Kze57vUcLeROrFxiHQxT5t96UBY%2BRHYc%2FewqrxCm10cpFNsXMEQBtJwSviLRUEDk4oly32F%2Fe3BtcHYjsewFLiT%2FzKScqZitJ7Ly0Ty1%2BUkw0kcL3HqP4uENRCwLizolYpR%2BXuuaJC320iPuzDCBbgoV0dTz6jiY4MDwFQa%2BGTUtXS2iWmRm9ENLqDXo6nM2cFaMLGUvskGOqUBzzzNSAY1TOKTYGcMvWH2hcAYCNwv28Q4VVpj2p%2BVlul7cI4UK24M6r3fduqGt1osSMmF%2FlJwqsQgvQceXFMWupnryUvCZqj%2BMkJA8kL8MkoIRQ%2FsJxj6HYBQ3r%2B%2BQZCcjHMIJW844waiAxjfQQCV1rfhSNHinXfEHo6liXrksVq5l%2F%2BWm6T9Wevb2zi2%2FK%2F7smusDZuLAFQl9T1gxb98H%2FrAnvRW&X-Amz-Signature=5562fd35c5ed1d1e655a6b32fa66cf6499c92d27b798609165842bc70b906922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

