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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5SHCSP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOvigwhDGtp%2FKR%2FS%2FQwRS6ZlN1buTbE2a3aglxlx%2Fo7AiEAwQH%2F0ObN6rC%2Bzr3dZvzq9sgVM5zXlSeToPLsdGgvzd8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHH%2Fm37rxV4FMRh%2FTircA6Sckh%2BQbSjI7LhfIK1aqHS5jpGfyRunHqHfNfB05L19GqKxAST%2FYc%2FhPu6bqgmDPX1Ok0vCvxcJxsbJ2qzn7K0Bx80ZKXmDkLK34WASZkLNABwu9F0%2B93Gfx2WO8%2BcYNVX0oe7XIettxyqqgXslX%2FBP%2FiSE0qMuufcTHZFUr8UkTOIluf0CrG3wcWwWPa3db9bMQZhiS910GlWfnrfACS8hYg%2B%2BNeZiA%2Fiiqk6Zr5ziutA85nFfZvgzZQ1CtHhsB0U59XEYwLLirT51t6IJf7XcWWHvd%2FFxk5JjLEjDJUzg5fl%2BocyJwkX8cboRoeTVlee%2Fjyyab20ahuxbUWycyoXpga1K5iNElNk4Chtk4dUHW%2BLJx86awGkXr0cLH%2BQsddx7CpippC0XWm26rGa5Xu92H8bAxT5f2UZf923PBLgFjZbmmRFk3rPqjz7joAM6n9Swu1LBNDyMX00z2uH2YjyObZm5Jruyo3zth%2Bi8WGsm7eLvtEbc3L6H2JxzFbL0NJuPZvQXiWa0bK0DkOODndL90JXqSad%2BwvBLr7AD5WJ3D9XqsrVwE27xk5uU9rBTQGZ3YM0OivMfUaXH%2B%2FfTILhwSP2j9N4pWzl0OsnGv5Sd3WRbKvoRYLNZ%2Fk3QMOWU2ckGOqUBcmRbCk4MJB9aPmgtQ3RG6mxiXIgYs325ROIXvxbUzMXrysmxCPHcVktAyxsoxT1PElVQ%2Bcclv1PaW35f42j86PbzQD6FneStC8s4SYmHUKNqnJw9e9ANrbCtyBRFPGtls9Xb8tHlZDYcKP5%2F4p%2BZyeqHzptGLUTsb%2Fvu%2Bt7cWXNOpk9vgiPi4yO4Z8LDQGkFroqXAWCpwrjGM8BYwJvNqNYsX5qZ&X-Amz-Signature=3644a64ad8dd0f9339798ea5e8c04b0f31cc023a9717d86d18f81b01789906ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEELWMXN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFU1M6ZuN2u9YoNK11ZJo2wKgytHVoehG2TE6U5Q8TBJAiEAkejIfkJB57aF%2BJDMTAYu7Oc4eoNQUr876N98S9COYnQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFFvZLIfMiIOiBE6ircAzNb4%2F3RDLieBY1zo9RFYEotER8mu9Iu%2FvVF929inH%2F0EkcCbHgouIaA0YlrqqZziibgZ0x3A3xLqxCM6e8XhH0rHNODBA%2Bu6XosqoBAqsmQN7kF09dYY1zMxWG1BSkv7LBilsVGlZTGxhJxj%2FhCPwe3%2F4aDbajiWtvse14X%2BiGfgUQ4IuJyxUvJSqSf4aRRUxnTbUJTAcsrPGPVYjVl2GW7qFVOqTMB0QWcthrF2kNjVVgyHoXwMz4dTMqA0a4tbui1HJPCMHeEsYK8IwSYeJ7bJLiGLLcKi7YorL2WXNmJ7UsIAoT8iA%2FIKJSoYfn4AqiL5ka1YicpeJi%2FxyYn%2F9RK3SwaFA5%2FSh0yxWzIpdz5IIbZeFSrEQe9tAD8G4DLw1fr9nb8ksP%2BLQKw0%2BCKTylIAPmw4nIWK%2B6Y70R2OvV3WKtO9XT5IZvznn%2B6a5aRXBspRcRtduG1Holu0mJbp2D45uQGCP7nZi7wCKle0jTUaaeAq%2F2HM7Xu8SdHrEbdD5LXJBin%2BPa3BVFNVGfHJsdZFfzcdkjvyEINI1JlkXynqEm6nUrLvfxm9R4z7EJ7p0G6d9fVNRE5nN%2FtodXoNpm9YGIrdQ%2FWamD1JsWDP%2BU1Y5Me%2Ff%2Fj64%2BWnjD5MNaU2ckGOqUBAMuYCxTy6QbNCroZGwIrvG%2FzSM475tmR0N4Mt21J84YHT5ODu4%2BSWMwY3%2FwVj72GS1QEdNe8gnOIP92UNr1yAioKjHgZlpdj386tE6UepS3r2Hur60PzHe5QuwtpTkbfB69JW4QA7ogksY4ZlRmYKGwI%2FpHsKYK7TPul1iGr5ZNAlGPMi7ye2DcdppDOA40LLDJNGsMLTLaYKdrVZqe%2BBXpL0wTK&X-Amz-Signature=a2f6434b33042d6eb513706d6ba38e972f7867bb81fe871f5d8a6b9b96dc242f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

