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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V4KDLPZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDDYhaQMczBOdsL4jHPscDSp4x4hOoq3%2FiXxqWuAXlahAiEA2YtGl8LqWekbuAgEUUilSbizg%2B1fhLbFs4grucs0gcgq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFSdiDXZ0NIC%2FEMWSCrcA2irUhq7VKpNUL9eHL7MPGpyPS2l1vkxE40DUmvZ3YpW1fPvFAwzaEBHMbgtYqS%2BpcL2vPpJF%2B9UknkmwneKvTp8m90dE6MTVfF5exkg2O1yi1T7wG%2BV5HnFHf96ZNrmLzU2D4oTwqUYfqLU579si858UNvSAwR6Q48NtZ3SMmnE6YEt2LuaUdtGBUzCI%2BJzqowuTT%2B9mrVjUY%2FILPL584uRFsOXg9MIWrCC8QOUPFBBLVi2Q%2FbE1%2BGrjE80xbXW8W%2BpKLywKCgYbceRKL6fEu9kxjvpsl8PkIjneTX94v%2FYPT%2F3IwMFk4Q3%2FvmQWc0V%2BOHYiFOaBQVkiCUN%2B1WSWO09A3wqPihYwnuQA6ccVvZHYH5KWbhby5b9hinmXJWLxoD5cte%2FXXWRgGv46pgOdSDcA%2FsWIcXDLexUlGSD5hy6V2Sx4S40eTQsQekOsTfF6jCnLo0FjYftlMcfkBrClAX7i54h7hPQqfQ3rAWb8%2FazAdL%2Fcct65Rd43eIIAz5yz0smY1jiT9491ycDiFPqAT06dXxIY89tUj4kfCMo1%2FksNzaszTMfESv8DMk2m70yp6lcrOLVMDVhrPGrwYIsQBrlj%2BDXoWR9VaCCyF0rM1sGDPdhKkIQf72mGyWcMMCIwckGOqUBL1M4tQSbmjbavLAT12oZB%2BMoNvH8cTSRtTASV5MaWHqvQRQCuBLYvq56J54QlWlyTibM4RSIRdNa5lwiHiU3Y810A000k6fpltPznuixbXW6vsbjksSYBr%2BpMYo5FKs3qREaP124zIoNIgdaqJpthhqXj8hi07dUHzd8JO%2Fuy1Uu1VEKCs5A57yNr2Y9OmqkkoFbReHVACtsEt20FbuNIL6Uo2s2&X-Amz-Signature=756a00a7b1fd32ea8bcb936978477a02c30dee7b50ed7a6b0273132f4eb1e003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622EOTFLT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFwq2VbVw5IS%2FXP5XE5z5bIUErhp%2BNASt2orJ1qJWk8aAiEAhDksNsTzQhZKjFXPg65tipcuf9mhcveE5GNBA%2F9%2FCO0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGUZfJH1XwyYQ93q4ircA19gC6wqvR4QmddBqFWGZ%2FhtnljqtF0SL3sHFKRF3g7hbImXNmSJLHCOG%2BLGuSGcBIHyIbbdgLKTUPne%2Bm1dFNk9%2B2Wd1zMHmvgqgFBC5CRksJkP%2BZkkmw47HWKVjIa01nHxMIekcgcAmovSiSvTboA%2FM5hkp1aOcGrDeYJb6xHRlrTqLcKrnJzuDDC8sr0kdOnaW0PIizgEwyq7MdWBmEAr4w6CVB1hvlArfglCdr3c5cyB5%2BMUw0MhYhJo2FRJYPr7OoXQW%2FeeIHq1wDZ4Qnnuekj4KXl2sPmqt1KygtHiCnFK1deTYfit56tcXQdtqw6p9xw%2BAmkqbmp%2BRFRE8Dta1p%2BTsiLFQKY4O1Jh6WZXrA90%2B95nF6WsfOOHRDK6LEQcE8%2F6%2BVmx3trol7%2BLWdvarC4Uw%2BHi8DRB99OdBQf0OwhajNW0MEQ0dCjJKRJAChwhT0812f2b9BxaGuakbTX8uHtcnKHzL28tFu2d8DxNCNkfwHnPghmt5ctMFUaYI1P6KjzJs6SZrrCplZ6QGzKLNFFncHMRfMSTLh2TlFfq5uecW%2F7UHvXZ0LVkF5ZZRRNrFMhthYKqWK%2BKMUiWm%2BW30EgFcT4hasCtVcCtGW75p3ZtBsfFNYkGkbZNMJCmwckGOqUBQNfGujfDEVRo49fLMQoU082X%2FtSExZDxkDVKOlwk50qqz2FBV0IvGY6g%2BIiLP9i%2BQtONP%2BOi5emHaDkdpbdg1OseDZpw87Ls70ICTzWVUDY2EFUXdcjwkDeFVwi%2BPzloAJfTEMCF3cEhLF49daOZnax3ojv7eMvzcuQX3vQ6BczU9ReJUbIQD2z7aSeOOha7TTb%2BJyVELCpeQ3ybHXd2aXTFxQI8&X-Amz-Signature=92070761f59a922e7f3efc4802a8d4c90890da3be08a5f282925e8784f8efdfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

