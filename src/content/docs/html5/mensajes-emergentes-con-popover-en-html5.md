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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NSMMBXU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7KvoxKwBs80JmMHnIM11qDiBz%2BnZgZAwcIV4rYTIrzgIhAKt0JHhVX3eS13oK%2BCAnd%2BHW7CpB2BjqNRV9m3764c5zKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbzyEQjn7tSUN1hiMq3AOW09r2104EjahZqOvlpe%2BNv07lsGbSHTrsNVoFYN0mpapQPVYsg40KHXGcSFL2g8plHAUWc0QEyKfWf9Rowr7oHC3bEoykxL0VzgJv4yTgPEYadNO0%2BKNq2Ze54tGEEVku1rajWG2BklxY0lmmm7FImLQbVy%2FRr%2Bl%2Bf9SH%2Btbl4MOct70foaknx2%2BuIuoW%2B7xKMK0e5awM0wZ2EzbDIWYARpcU4Rj0RZfOLfOMkJWKzxGOwnDVhWHxWcVdr1QNcenwXN%2F3JxEkLWWUhbi4JeOgaIyQFPg1SnynKaGSUsosmTa4bCALtSTgde2pfgOJ40jXBwU%2BQREhiaND8RFOkKL%2BiDa0%2BN9G2HUgL%2Bpc8TZGK3ey6GA3Xe7jBDISzAdpqRqCdkB3e%2Fjbp0mrLZevwh0hFkGn9J7vbjnQeBcDmNMweRqc%2FAVSYFyHvVBLCWn5MH1E%2B58dx%2FEL2JBmI6GCfZnrF0I2lG5cFnnWOlV%2FX7a5XZ26I043MCp6YLvjIZ4fiTkZWOaeJxHjSQg%2FC567vh%2Fyvg7Y1GwYG4JdyMD2SFlgZkepaBElo9MEm7NmL4C8q4IjcGTM%2Forih14WkO2eX%2B9bXYxQsPvwMbEYHSHGip%2FM%2Fs6ZbxcHbqhZaEEFxzCsx9fJBjqkAbKzStTLvETLf%2FDvMij3LwX%2F1B1N5woU6wS9bwmsMjRj80YOqnkQLvsFSejqoLZinhx%2FLwbNepcxoU2gFleQM3aU7y%2Fp5rg0JqpoMUp4eOTjB5aynBD%2FuhXhCv8gy4rdLnXSB%2B8qLYyt6X8TaPmGHH0plb7hikXprbLMJ5ct6xzhXoBACfMzfGuSgzjo4WUMX6byRsa%2F5kH9Uo1JHZ0QcPZj4FeP&X-Amz-Signature=c7c170e54e8fc698f9ed0dda0c3fac96e3bb3c724a5482acbce01204e43c539a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYBGBHE5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIluMTI1lzGR8wyJ0HW0udXt6VcH1WAMq3%2BkfzHZmeTAiAGbOE52%2FFpkfATs1i0L%2F4bgPtRs5EtgPB5n81AnpkGxSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHAJT%2BP03x2y1TCU1KtwD10UNOzmUDBdV%2FDlma%2FPJDVsdx%2Feif8DNzYr%2F%2BTD6VYG53yF2TYclJEKev0MnDGetxpvArMHCkvsaayhKdP5PN%2B18U0chL2elXzpq0dDAaDTYPQpJ09yLiwAQxXk%2Bn8lMByf7k%2B4iGOuFZTsZ7CTvbujNFhQ7aDqFRCGdoDKLWXlQZ7wnaU7k0DTsV5M%2BV5cuSQrF7SZ9lPkNP47VbOoofKvTFSmC13D5f8sYJD%2BGK8ZHNn0Dmpdw8lfHhw0S%2FsEIgA6%2FTzzhbK%2F0iFqafM5Aed4SgppQF42eF%2B8xHRAd9lj4O%2BNiyNmOuqP7tUhzVaN4Vq1q0wb9BX5hPZctdi7XdmL61%2BUkchGm3WbMdPHRaixiETN6gWuZe1IwKzif8kVyGjVD8n%2BNNkEorE94lOv9vEb4kjd58b49cufPV%2FT1U4cWbEgA2YfOAIFiEOPgIuZM2K4OawuP1gHExvERE8X2R1yKttUmXOCsukHF7EgjswRWo8ME18MMQ9YtUbIhMkS8NMQXsHLu6nq304Y72TlPLYsk6ugiq%2BcYz6%2FFgWEciq6qC9qPRNbUhu0%2FuO4q%2FXRQl%2BNalDYAWF3wemEKOrppe2ySCEevWRIfMaZr%2FXRThXW2QMWS2sbXN0fq5F0wgMjXyQY6pgETNgiAjSqzxQNYfYV5ACzTKmg463PkP0V4lKlDYwMiZFCV4yg1Bpz8TOC%2BmnV9ukBLPlkE0DwFqiBiupOe3MZP2FAYO%2FyWkmwxGMuX705rH3y80DV9ogi2b3JmoPxCXmtz%2BpyDIwDDOYsPDqYbC%2FtjH2wDciPTk3Y93XsfT9Clt3VeLGrxV0HROuqdpwiKKZrI9rX7pd0h0%2FIofI5cPMkFptm8%2FTN6&X-Amz-Signature=7fae4ddec553764e65b19af0ede6d6763b46207adabf092bb698a44c41fe611d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

