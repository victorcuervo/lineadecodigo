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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLNR3L53%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZi%2FS%2Fjx8rmH9vs41Wd1Bb6MAXVzhqeMZvTtMaz7vdoAiEAq7gVru888njKYeteWO09NXrNeOhOUPIfp45Dv9YNgrAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWXuYQ47gJYrbsdHSrcA0c2sVn%2F99bKbwJOJsSfsaJKiZWPTTEuKgEWasz%2Bgh1j68NEOzhUHf%2BkMenL7xJS1YUYSk7vCJPov1W2nhDOd4yMs8v70Mz9k3scJ7v0kJgnoLX%2BPRlT1TJp%2B7Elpb%2BOhMfUXtEDso6WLdaG6EkABCY1wlCiAfVUdidnzBdhxpWFpd5bx9SppVc7bQFrHhhRarHl3LnwxLgng3SUw%2BPIAokumUd2kkYH47ajJEPegsegiyMO6cGQ6hE9USE7Y5%2Brnp2k%2FNoGjtdPLdzSZGKhW6YqwJY5micKX1LxGuz2njNg04%2BRihRSzMEX1TvTqV%2BeSAavwcg0HukrKLdoGU%2BTqme%2BCpPuh0BAA4Fk%2FSOJqy27YDsdolhWgNCJuVWZvsUHyb9oFr0R7%2FIpKTvUG9I23SxD4KqMpi%2BKUPLemY7ViimqHhEf43YB3bBmxClICxKOFifHuPeXJpnmN72XBgcVX%2B93IFsQZYAvMYqG2kfWHCLY9oqjOT4WZCtOY3QE0I%2FCnGFAPTA5s4fx9ymN0e2QQrdtRlu%2BLhJhUevsC88Q%2FnXUIzJe0hGBEKJVrvfc5K7titMMyZQGOc%2FEYR7ea2JRso20UyFOwh4jyxeVAiSyvWiN62qvd0lpvC25b%2BA6MNKk38kGOqUBLU0sVTGdqlEUC7mTkDRfy169VWL0eMMA74EIkllaeqx2fWkibafsOXKmhBM6NIpbG9zgVCZESByGfp9LXuu%2FDK36mfsyACibcyFYvmMu4gOqrtxSaye%2F1J4RxEe1kcSdsoyZFHKfA0eo6pfXOZ7EFLIKHfrmzV1xG4vsb6g7cYUUdKg2j3F1uMqTOckwgw5wrPhsDxJkc5Fwh4pMDMTHv6x%2Fl6TK&X-Amz-Signature=d072dfdac833680e65c450ddcde7d150f1cea12290e5a252790e34cd30b0f277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XSVF2C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvJq98RsqCCZu8OCszfm6DY4xwy1iXkrd4IH2RdflhFgIgEcPctRVG3HaKja4BUeKyj2Y5KN%2BRSCKsT83lGEEKPGcqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw3gqP5Vlzeaiq3QircA8oY97wh4RCv8avcJrmOhr3DH9%2FR2bm3a8Qid5M9BqGcHQBoVdHVz4d5i4SleJoI0gzQ4X3fCIu2RDk5FfLrdy5ftvHFcIuvgvxcXJurCTf%2B28lJLz8pOvEqnpee7SAZAgROnx11MOiaT9Z%2F6C4XIBwVCeQw%2BM3mqEZMfLXCmfhALQr2MZOuC3%2Bh%2BYNtbsFCE%2FqFVrLYSaDJgHrwLFxKkj8c%2FBpvbwyKL3NL%2FE6AeS2h7Bp7o4xiNiBY5XPN5QyRJ%2FtiDrTr6Lmnzk4alXdkOixPFArKqMrxx9BvoMHHZhmDATXQihf485yjRbWV5rD2p5QJpPDePHNzDH6z6C4Zx%2FlL2mnwq08S1%2FbJjJ%2B6Pipexc72IeAaqZ25htNUiNyJyDn8%2FoOB6yKtvcCvGOrbsDip70itEWcOvYiLRrztY3sQdCXa6b0Is8n0m2e8H7n6SPx%2Fs077Z6i3cLVdWqVYec5viauU%2FDH7f2F4Y23t%2FFmFvzcoOJjY4vTG3e0x1IwyEk5nP2c8oM1PGpMeEBBJUQlXOrRVOZ13cuJIF2oKWe0JV5aDA5StGYJvIKp7fWRWOxnhRdijJZICNch%2FFaka6MHKOa9mOrcGFyY4ksBO0L8sbFRsu2n6yisth%2FieML6k38kGOqUBseH6GpBCuu6PckyFVuGQzd1WlCzz0dt0ZwkmLW8HjEyToAcr91dAfWx4U2ugaFwMRyMEZW9y7kR49ksus2oUCV0%2BqDq5isZkUWp4%2F3pJmoZR8XaCuH6v4kFAhTp8LZH2wIqs8VC8nm%2FnwMNDPM%2FdP%2BB%2BvftzLNRsrQtlBxjhduwJ9EFuIzxWO9Hxau%2BvCfGMMvzT5zNLJkTIYLfl%2BwkUAJyrqqxK&X-Amz-Signature=ba25ab1ccf2e6fae1d7fb603eeb132e9c9b0e9ba0331ba81ebb8dd9d89073f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

