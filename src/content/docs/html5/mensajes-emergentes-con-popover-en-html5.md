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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UPPUYBK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLlaf3SNSdUnL34lEf4209kuBdqZclMfIR%2BGrSll7q7QIgSsbNkStc4X1rV63dZVKAD0scAoUzKtDHlrESw4cz0iEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCxXDKTd1Ea5i5aybCrcA2xA%2FHr35ZV1AqAsqAeLE80bPJtEfazn2cXA0YV76wsmofSudU%2BXx4skj%2FfZfEsJfFkyqqxut9CNySqjWxtgaFxQVhGQal35PmPHFpwQpeIOut6RP7NHQJ1quteP8Ns9fgl%2FlHchgzplcoJjBa4BzfUP5yjew70E8Ex0H6gEThwXpTuu4I3QWisjKCgaRj3Lw%2FSvEy3S3%2BkGpdOSjoBQelPm29kL0n3l0rRhuekhMQ4MLrkM3JK2EO5yeFENZbecYvB9A894aqVEwk6pBOfRDr%2FdcIQi1lE7K4jTNYF71nG%2FMHXrbNeSXBR96neIMpEbMLy9PrLmx41HpRdpcfFX%2FVdYRZTYmqGOKcvfadsRbJRc1wFORXGBrmaXievi3ev%2FMu62miff62BmJNz7za4WOcG%2F1aVqoTwZv%2FmXexH9SyiErCHDLUBUUmLds%2F9LjNfrWLGoX3jN26RwYuErvsPXO1%2FVnrrI1bNYeTiK2NeC80VaRaw5O29QBU1%2FPenWGoTbzxEGFqufSOpgvu6Hsdm%2FCHEBbdAG%2FgIMRz5xv0Z4VB5AhxjEaFrtCpwuuKBTzoEVMEKVF2TLVlKkWP1HYhO5lKeu3YYFaH6PQkuPCMhc9PMvPEtw4vG5pQaVbpeCMJ%2B8z8kGOqUBfiTmm29G63OskHWTyR4M7pWXYQe%2F3LunYgbPmsa9Wv49efMQhaL0kTsETo9NG7DYbNWLtjEaJDPWnQvAEpLWQ9HGgjzUd5yGHEgLwSgVZOtYYfHVpqi1kfrXc6Y7EAJwGf4aTzGdPLeUJ2JtDRcEQrPy6v7LngKC5KptxW7WhAPUgxKFmPRXT2vzu5ZWeDVKLnWhsTOAZ9EMwW3ezGfB7gR5463K&X-Amz-Signature=0acb29080506b7c7edba2016fb755ef96e8ad6a058fee15f4dab8c12ce1bc2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PGKZBBY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFrOxSBY%2FQOMivxxGOr4jsxhl8eEFgum4EKtAqzOv6uAiBRLmPbhAB3XT%2FRrIrpuE89O%2BsXCjFmqQPPoEUpJnoR5Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMAg%2FUpm1J3G6sUXCeKtwDSH0JAg2utjD25Az6gWTpkJLAAnORhxhsJpV5WDJgb16D9jPW2vCrKbjQFT33yeHQsVwJSudcIH%2BPqbTlSrDgCIQxh0KmJMTQLuUwGX2CaiD6XHkCYmxOA7Y2W8CARVbZONzfZycqVOmVGgbTSMSEE3nrJ%2Fe5BklW5k9fY5CQ9ZEqGGI9WEaOfJCNkvV%2FGWiZkE%2BhZlLdasgBMxD0OogrdpWdJdVb33k8YmnejQhxCjQZiybzCRx2EEIBvbq38r7LjcuFeZ6sp5cO2oZ%2FM11ZAoydE5MH3rQ%2BfcZnQqbI1iaAdyHmjMKV7P3kQYvcP5u8O7Fd6d%2BGJVFyQGcDsdtQN3w27iu9Ac8P1VrgD1D7rUUCKlIMRcVLjYqPqMQJri4qC23B6r4oDPSC75Lg2d1lw4NpLxa24rBv4Kt%2FXSn8xsZabqwNSQtdvAf0A0u%2B5BhOgzqrJEHI2tw%2FIGTGaaQo8LZQwZObWXw%2Bf3WsFZDu%2FB1WTwRMNl5d%2FS9rYJig8ltFMRilWuJznyjcNOpyaYw0NmtW%2F1IPY30Gx6%2B1e9HZPIjzf9HOwHdEVOiina3phkOhPM9LtorMiu1ANaAYJN%2FxHsz2QEKac4SqTzW4uyWwjSDZJK7cekQg8kMv4ZMw97zPyQY6pgEvwZfWj%2BkpMwZSPxcNWFiwi8MB4fWY2HprmHykE%2Fehz6aznwJbK029Ec9i%2B6DcOzXPq4a%2BptNjNSw4koHmGteB8hOsqzGvtQ7RuK%2FzVBaGC4oop51NsSDREHKHKxdTqoCo5xxcO3QQqnYB8%2BDp%2BSqLpexSfnufQ14I70IuiwFGzMt5IJM3QnIdk7%2FWCmdmy0W2oMjSFKx3%2FaKHOXdLtc%2BWC339o27H&X-Amz-Signature=b609581ced875479bc73761e57aad3e9ad7a7fb709731ff7481bab5015bebdf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

