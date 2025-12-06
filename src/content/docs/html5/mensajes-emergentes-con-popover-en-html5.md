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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MZFG4JJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1FtIFvJVfizrP2yJ04UI%2FSqOFr6oksftzH64IRZfbfAiEAxVg81nxlnf8JlHiwylWAAg0macQX8iTaUFnAZJ%2BkRhYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGtKWkRt7vWOfTg91yrcA2CL8mS0C7uPJZmbxzs7C0NxO2P4rz8ugUeZUtPAgxm6jmWiNYb8NmdS0ruxMGvlAr4guvZu11SfZ2Zcb2lr7B8jg%2Fs365SyVG78LlN4lRI%2BdJtJSvZF6cZlhLtw%2ByXY7JES3qJ6rafaNC1nN0pZKC1nRWjc%2BmhrZbQwTggQ4sF9uEHdufY%2BibwFx%2B9W0D522jef445Ua9kAuWtjYOxgge4sWIDfyTBYSYzp9ZBcVXYA3yiX9Yw2wBIJyFaLLpm2YRA4QxbMliv0lNhCg9ps%2BZqbg%2FTSVUavBVg4BwAJ%2BQrAO%2BUCSWFdxj3SlDTWVMOlWskem55QDfdGOuVya4zD0QvQcc3aoJXLVEp%2BHSduMno7mlvsAHVRRR9nM16SI0Uja78Tj2whYzzvBcZo2JX8Opl6TJm5YdBMOZKTwjgoecWJIkWC6vJbfs3rQdz%2FLdG1aJFx5%2Bayv0RzscIJAGU5AgipFu7Y%2FuC%2BqSNtAOQS3Lii29Odlxj8rrCTB%2FR0vNzWuf1QXHyf%2F7xnFUMdPp%2FKW2rIbqGp9FX%2F4vqSX5DSTwf5H1hxdvrjWcIPD%2BL%2FYtwHq0x%2FPcLGaBH2HDxE20MZBBqu8n5qXMMzWVsI9Ve87DcD3SZImq9hpUv8JP%2FiMMOm0MkGOqUBROWoN9Uxr6yheXXriaw0jF09fkPUdBr0OATlOM1RTKG9D4fYghs119SHJacFJ%2FRtJ1L2dsPK6NWsESrAN%2Frf1vnAc9Xl%2FJ%2FNBYVheJV6u3aW3JzsiWIoFIOQMfq%2Bxqs2YUDdv%2BlV3jq13Snhfebe4i1PmqgDz%2BIRDJTHFtJ%2Bf468Tz4c3fsonvs10aWSq9uD1aJ3wEcVPZw0lUi6gqiJQ7VI9P4W&X-Amz-Signature=76c308a8743b57e6d91323e1a05113317f700c844b067d39bf66057dc6bd6893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S45XGLZR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDqdoXMSN%2FrKfUGjgkc8x56ZvE7sDnoA9ccp4XhMpUSwIgQr7CojiWFpzMC%2Bxd7S1%2Bkq96GTvQkonJp2aYD0pIJt4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPxTenSTKraQLFqO8ircA%2BYdV%2FSLfYstePtYy18S9rH%2FryqoZDs6UAKO3yqGK%2FA6C%2F1KVt4Rudg3AiC9UupEyMYF81C7lrcV7%2FvDzrpFE2D42tPJMZGQTV%2FaJ9k%2FGtDGOtullg2h4a6WlJ8btoZclBdTEmoG72FvEMTGTUODBxVu8JhbmXAVoKPc%2F7%2FhC%2B972KHpVRNHYnxXD2J9xQTbH5P6wWxOaULhzAjD7j%2BCxbGkd%2BFG4i1a5BQkWFBIn70HsAyWK7YEa3pSL7ljfyXmfdLeeDLxMs8DTbn%2B8eJyiS9%2Fvaxb3jWQMtb2Kr6VUIcmh8YIVCZg9SrHYWyUUQg2VShRR5eg8G9LiNOckL%2B7BugIAUqUd1dlRMLCdEkyns3DG9UXFtSSFGbSyCKk38M9ddonESlxtGlCkuE7o1l8n2KJV9VsIA4ETpWu9C0rm%2FyefwGzM5P5H9laS4wl59tTUEjCzJOvEsD3vWIE3jz7F7LTQ7nmfvUOnmu9o2It6Jr3G7CjDYU7NHDv0ePnpKsNJc4dyZAg5mKFxWnowK%2F5D%2BIWGYujp5spuNbiEG5KFj4u2kWTWV%2BQC7TNTHKId3etgJA4DlS3yj3hkFvGlrpIGZDheq%2B36jWtfWHZjNG25P9Kd%2BIFIGY%2FfEguVYIjMMym0MkGOqUBGnhvnXDpy%2F7ey%2BnDOKlzieHcPGpUUj23JB4sx%2BhgVlIpsOU3%2F5mP74znbMK0%2F2g5FkTIeghqYFnkODYqQ5tkNeMJg%2FUxCGgNPhVKmcYNq9biwVQqSqZqU5CR1BkGOPT45yfBOnNKfcIBxlEE738KOseuKWVPzedM4Z%2BDaxv2TqCfYlGGTihdWowiQNpmY8r2dSUe0AV8UiGeBmIjjYyU2WSPyM03&X-Amz-Signature=98db379e3c1d68724acc0cf90ff68f935a5022d7764d1dd2b14a1445278542ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

