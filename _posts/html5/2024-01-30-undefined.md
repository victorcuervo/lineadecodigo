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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5GTJKYS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDXST%2F3j1%2BL3GYw%2FYEZOAww2WY2fOLLxCPHEWOgaIaR8gIhAOrOvxEw5uhAy9Mp9djb6dl2ltNmY5cxCcQUzI%2FBiuraKv8DCCkQABoMNjM3NDIzMTgzODA1IgyYu2wuDtiJr0C%2FCF0q3APaiESy5dGr32e8n0srlnbp5CjtdO%2Fx4oBQedKSrEATYSolZHj0HGwuhdQRtQiTQ6FW2%2Brb7iPW%2B4ruddDNIGe%2B05Y4DpqZciEH%2FkyyJq0215WHeB4powU1PLjwk8sfyPou%2F9%2B3cak7yXs%2FMVeRM9eAYMdqyBn5NToWjMIK%2BkMjKF5BvSe%2Bqn1qrdRr%2ByavWJ8wG%2BX10enydVwPDCvrXyjMZ%2Baw60gUi3f2OrxfG42MPn3LoE9szvC4nBS%2FayIzkSwbL0suks0RSBsEkm8gGRtRI80AlSSelTexM2d39HjK7NunW7ld55vnQ549fM63k%2FGAfN23nYvfcadatqE4GD8yvpVFBHbcYtIm7%2BIgysLdoW%2BDTRm7rXqoSYjYsNgqBU68UIbJDjPMw2%2FYcppdWny2tQzjgOrMXiPBV7SgHi%2BKFu%2FAh2l9Y75AHM9qT%2FBCyjpQ1%2Bw5CrNvkRI7pG4jYlLmpFL7ETTaT69rcsHtq9WcA5k3WXHp1mCjEh5GXKWWEATzOzwUrUlxyNHknBx%2FGM5iQTKVcAnmnMUBrt3OZjlbTcJpWyFaJwQ2uVm5bpP2B8Q3B9Kie1rx%2B%2BGfKhyPgSOtDT%2FcUtXRONK%2BC799D46r2uJj4aOu1gwmxmhdJTDf1L%2FJBjqkARH9sxO8VXmin8mslWFhRK1mB5UufaeyKyb%2FdG4aWZBTjCSZCfFdrynxMK%2BXsILCUPAOa7RScKfU3GD8h49a4OQor83MzgNgDQPdlopj84UTsP434%2FWMtCouBZTGjIJIBXi97w%2FiYIAfE90XThfHnsuDCXVV9oa5Iy5Z%2BAcbXCcKorvfgF93x621wlOhgpFGhOJ%2FlP5acpACcNB5gdbCkccSJXts&X-Amz-Signature=601a17c05dd9b49fac5d40713405a5237f4061df8a894f8f0520c0b64c08b0ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCJJWHT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCh1Z%2Bpp61hRQKAem%2BNshTqOfwDtuCYWYqPsxmYuWIIEQIgfZJ8MJufuyqFb85QI0An642oytP3piPjXYDl0HFaUEEq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFwivr7rhgcJcc30uircA2jYsFw4yZyTPXlqOrOQcGdT0Zd0XARTusDWsZJ9p3Vtm0D4%2B%2BCSzWQL%2BDoqSQOdrKAXBdquN57B4qVleocbfiXjbkRK3zbUmENjfjlMW1BrVjyPuZAV6hubcj8tGoKyuSyv2RM58yRMhQZIB1eyCpiJ%2FHZcDMoi0qRMPx74ZTe40UO6poupMGQdckGtcx3VC46DY10CEJtuyX2JnWQRa%2FMp94tFDcatQtFHiIDC5pxCeNa2VySouDzEqjhKJhl9RgnptyaiRqBftHHMvR%2B%2BGoZApDKdY2LOpjlMy4cS1YphP6AKO1FbqNMva7zxl1BkB9GlbbbjgfTNUHYTyPr9ph7inyjc1b1dgEvYDruEYXlB1zmVcYj%2BqnjHuY6wfeu8mj8T%2BbiaVAp78%2FfHGhfcXaj8mXhNHiwpyLLeb2DLFzi2qeAugbbxJ6f30MlSh6NFaV8pGAbDPWdKhnl1kfaWZcIQuv23HRdk%2BbE1Zxw7MFgmewJCBoYTz%2B%2FsU8HLNbe959fg0WGttDs7X0PIgBipUNM5HRVKj9dHXpwuG4FxUmXhN78%2F6tPan4w9MCtOUTtc0I7fTnL%2FcML3NN1T1oWcv3uHJPEwoCbR9ipxYB37iGjz2udoNkvbc%2FO7pT6xMMvUv8kGOqUBwGB%2BFV7Er6HxaYLXcrTePlnvyznCxUKIDhFbOdehjLFcaEU9oLawXoR77qh9fwKDSIDo%2BhJOqImxzN1TaeMCh0V5VQnCjavrfHRbjakMKJWYEYwElrPPyKIUfrfdXBT8YAw0gRxxd7pBdbIWtzdViaKCwd0%2BYqYPoyOoOYJIxJAx7AmK6LfSXFlc%2BCpSveV9xC9cYpMakD2WevEaXOXWe%2Bx7SfbK&X-Amz-Signature=7f60be8226c6d9cfae65dab0d5f7eef3b7540472ea7a4772a5a2dd50b794dc10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

