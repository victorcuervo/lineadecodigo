---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQCL4EL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDG8q2iY9icCamaLAIUD5lAeA0WjjO7ByDxz2yRgTJ7SAiBHJ3D2KpSUJqPd%2BoMAu2lTS1ElfHNradnSoHOt9geGySr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMjDRUjGalOMS1%2BxF%2BKtwDCv4ciIGUpf8pzcnVUNK%2BNonTo39khexx80VkT5GHa5S9NeeB9X59AXYmL0IX0dJc5MXEUT%2Bg7rdJV%2FQmm3mJztrD38eqcnjVPk8QDG5gF3XSWXGarRyu7c3gOsfC88FQXTINFQA68%2F5CWrKPuDQwAECpQKiyFGbk8Y0uM2LoMeF7ePZ9tQPhkAvXxZvsf4Nr80wwMNr42Tdlxb1EQQVe2to0pTG6HMaTPHu7nuCYabcvXK%2BjvXjM%2FYW0MkLwJcISA72JGbkQmtHei86BDCU4jLPPnbHDBF3lvoABYuw93Yx%2FgC%2BpNLqA7V0%2FHIrLb%2FMi%2B%2Ffl3oKl9s1qN%2BpwADCpMsxCLSsVDyCNC8sm%2BrndXigJiKQY8LyKA8QSwNLyjJhBa6X7srDEXM5Req22uRsjsHbtWaBqYI%2B%2FvDUjsFbPR4%2Ft1cQ%2Bs0xXRYy9jAJ9PLs4WslLHzS19kPY%2Fd7EJi1MVpXSfjflCEG8kpfNbCkbt%2B6lgNjBW%2BiqCA9LwTpl9QJYZ8UEHSeMTj%2BF%2FM%2BmxRVFfcgoUNRWKvkUeoR%2BIY%2FISrVeQ1eXs2XtFYrw%2BnGg0LnjrMhlVbJKbzCScE1EqIW8znfcJp1sYcU9A3trSB1iUsnIqmoxFae62eIbXJAwmaLGyQY6pgE5DNViYMlXH6g3jR5toZ5v1AG9xhC534JJE1QlnIcJdXJpF6c2CLIXVKRd6MY%2BTFecgEG8VLPd2Il0qOl0J3vOMyloZAwp2q9dMruAUWi%2B8%2BhKOvNXnq9JSZmdIRK13qwpk9Aez6hMJJjTB6q9gGDI41%2BBIbhBKcpC3Wk2wjpac352MbcN072rMYgLODpWrYDnY6wLpwg1epGgRW%2BQcJRa%2FZx76C1F&X-Amz-Signature=97f1c037629f698a6e9551431d0c41dfea1441e80e7c7e8d96537eaede3df534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M4P3R7S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCMVyip%2FBkASxxuZeNVBqMVW02CxeaR0X2OuYeghv1klgIgUNt3lNeB7VP1EdTa%2F27Yq3kkUZztlVF%2Bi%2FOaOVtARH0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGuFmSzva0r2E%2BxTdCrcAw3BoPxxhW5pkS5aQFyJph653zUp4JDlLb6tCAa7wpTibKmyC6faIxF0kmAouoHfBprNjvCcPLto4FLQsuqmA1CD%2FW0MfjEWPTqufQ7Lnjs1xNDoQ4TmxnZHnRvaxmC66Vznaaru9SbVjEcAmWKzjrSjqfPHsfqW1h9pu7DzzJ5bQzASe2y27DXNEUbhuWOjvwb2N%2BROjHWZX1AuPNwoxEccuYSzUhfDrw1GBpNSQImUBQfcjGzcp%2FaE6XQOcuQ7oDyVceNeDaC1CPXQE5pbI6V%2Fpci7mluUazXt%2F42unh1gcb%2FLFmnzbgazOzIrxfPrnW%2FWiBILXSeaZBGjLEE3DDEb%2By6TZezPJjZEeCGezC%2FArekeiQME6uC0RA2DSlStBiIEekxViKmVX%2BsD6DprXRMnnV2bba%2BLYbGY9DvHBCW0X5RPEcxzVoKrkEFRlbQrUejUtFkJcDycvaSSLs3LV5Sjf0Sdz05EaRyeRQ7jrGmw6uNOFpzCmE9l5ctI54EQRHJCmrmpX5qZzv%2B4seX0YqAhfR37L6jFZrRA4bT7L4AJ1HiziL3zrXG1fIZ%2FpfydofBg%2BSzDghTEoap9JQsPrs%2B3w5yvzZkl3bw5qO%2FpUA9uUQoGQtokwomRkZdSMJeixskGOqUBFEKBs4MkBUk9t%2B8QggCSjIA%2BKZnseyow6uMJAP55GsWi4ZnplnA%2BuKt1p9Z5P04f1WGpO%2BsGCbER%2BQF377nlGvJIDc%2BVrJ0rczE1fNFe6sn27XdJlzLHkpaPrNDqav2zDOFq9ESBCZnpnY8s2uPl5UKtlNnYWqvKK8Rt4fgovQsiT9zdohVlZIl1GXBfXcn4wa%2FCtFmdPdBPk%2Fz0lrUij6hXhQbs&X-Amz-Signature=22049ee7128e2d3f9710feb5e3a1a7abdbc5339d223555154e2e8b8b658c9dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

