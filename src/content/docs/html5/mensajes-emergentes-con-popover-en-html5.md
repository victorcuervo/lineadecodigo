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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RDZR6P%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsF4jOIgRKRC9kyq1vVn3GQyewyXCP7XJsjigbRwkAHQIgPBg%2FBUUTLGbbJK5%2FMTcoOD63jqO8q6KmChDcziQkUtQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSOYMtwhsajFtliVSrcA4YiGw9FdMVg%2BNJBRpdxV%2BXRTEg8xxoHyK%2B7yFnoOaBvqTQiVsxYEP6yRWR%2BFHGR26V8h1IYZrvIEZkRfqRu650RAnnFESLpwpQ83h2Wf5am2zhFfbsT0Fg1ls4hb0Cdxms4BOYuaqqlZjEIjbRsyblbOz2ryJ2tvKeGrGWrjQrCeSPBuASyDGKs3nFKX2MLnx29LRJPkjQ5KofzTcQXhIo7znKWse%2Fu5eS6BwgO%2BZEZKftCSho2B2CN8kt9tHlD5U4jkhXVwQIG16YtpWpDyd3vn4x7vrjD3Qm3gSN3d%2BE5IqkIlDujwd7yyyr57b5OXGPZkGxDTS0yy4keaxQV730IW9TWFRCTqyawIH6zqGTNdhLZChLYsFhFiRLrLqJpmS18uZhNrJ%2BF4OIvasMBVWHNvx9hE5QPAkh1V9gjPSyg8uz5UooOZLKbSeQ%2FpeGK5xDkkMkxTIKepvlqdrFd%2Fr5jKf2KxY4C2ZxSxUXdNB3%2BRypv6vAZiV5axuWlFfILdlGrUg2IvdfkoJYwEFK2w4C0%2F71sKRhdH54TaAeC6UKiPTk%2F9HgXjgF7talTxyEhuEK2hPm8q9QNjA6AdkHxg%2BShK%2FzPEFT14ugVDqcWLgx0Fwr%2BZLESz5%2FNp%2FmqMLyk38kGOqUB7sYq0U3LwSSm6HkwyL3rj2NxrCka6SyjgX6mwn9yoToSl%2FJjGMSiQACO1PdP%2BOZDqJxXVok4%2F3TdkNgjlModfxNLsoWEAqqK2CPuH4VHAQSjJh%2F45qD58DI79QWOAADc%2BCDDgqPc4xaXYqgZDiuHkU8GW2c%2FcsWe6ssS6%2BfegDwrnMb95uRzPAGiM25mqs1Oh2Z04CiZ%2FKqyZRMgqh0XSQg8xefr&X-Amz-Signature=22d572c96b259ce94604bc6b5662f7e38ba0c8bbfae444164f41acf7012aa7ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627XGBJ5X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRLMVdpRI%2BgpTzYm%2BkAIjsTi1axmma%2BnDjMTAvSKOitAiALoR15yFl6OnLKNGN2k6HfIeuEhPyLk4JqyeNMPFEXUiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj8cl%2FMhE%2FoQU%2Bi3sKtwDZkz6t0oyfIiXn5Kca889z4lFgKtBWi4yC1zp%2BEoAYhcJPFgOmPLYwivp4s4zA4UDgVDHeu3LU2lI9WTDpkMyvRHTy07xViGl1I1sI%2B3chxTE5KP7cShznWhX5L8G7FoPLs%2BYsE8Mf97BWuW8pjinbepBvVV8qydQBxxm4entu450DKRPck%2BNn9Nk4dOSsZie1H2%2Ft6S%2Fm3dwaWFsT%2FJpHB%2BeXJJ5RPOUI8KSjCzNkdl9bFZ0p3kTy6MIEi8H4usfw59O0ZdDGNpr3X0%2Bri8yR5yt95yB5xdg5T0yMQRxHm8NjNTk6FBT01LH0S81UawYbWNxAEhQE0KUUFIXbBUDKGINdpLGbb4lZNfHshDv%2FOmRvCS8g5B%2F%2F997ebpdQwcup4XE2iCOVg%2FnsDB5HO36gFMRRHUvMSfZEXWUQwxY0cfO%2B4dZif60wcNWMSCZwSfN3%2BDjqGCbhduNWdvcMOrg1Zo4QEUhgcksaGJR8WE8sM6ocOlW8YCIFmXSP6GjPnM17WzrrSIYeOSaKkVBQEtr1IkS4bBY4PRIryWp2%2FI6MFhumw2HcHcZ040TazDshwVwb3wcmVdupeBfUX9SNRc%2FJ0CGugH2tCWzHcLNejvDkH7%2FlBb9tv9HPUscOVQwhaTfyQY6pgEJ%2Ffq9lobP2cCKo4YBj92KsaKJIpW6neOaMKB%2FK1WIU6eGJFVCazbIsDahaZckLcHEzcf%2BkkqqphzkK1Z%2Fa%2FWLJAdTBxlq5ylyVxvd3R6vtSN0KFcujUEjpWlN3rt3YXe2avzqiGqU9o7sbTDWVV%2FAAytPbp4cynHTUrUiP9UmwLWJH%2B6jInFmAaWw81gmHGccJsk19AlLfr40G8w86vYCdHWcTV2T&X-Amz-Signature=79fd180d244d3f110bd7af0d1ef3d50328e7b89bfd96ce266fc60645acd15f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

