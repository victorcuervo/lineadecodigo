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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO46VWX3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKJ%2Fb2i9MQwa9G3YyZqt7K6VUGcLvxmJ1V4LDwn%2Bku4wIgauue6jd%2BMpqc3KHPNAyd9GCFIuSQOvN%2Fp3LfZW%2F5zRwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSzAGw8B2BYP%2F7dtircA2gDn94WEovuHRLMQytPbhZcbUq3RcCx9omUQ%2F56m6gt6JbFeYnTPLUolf64BxwiGYUzwpK9C1cnlV0nTacb3T62fmWOG7z60D0Euq%2FsLvyRz1ZsAF%2F6o6dI8uMCVjF1ATSLPq0vvKitZ%2F0V4kYv%2BL6FsYZ1dPowygW8EWvYypR2VBTjpak%2BmjCObss0vcYdps0AW4zHTVk3s2z3qjxmfNr3HgkUopq2m%2BEAn0lnGhhmt3RlD0AjtoAOhi0S3mL5lWZvHU%2Fx45Nl89AghkxiRdRGYtep7E55HUJggff7INTN73%2B3%2F4Wng2MAII%2FR1XNFG%2BDFDpXvTePcnB6lhZEHKp2LLrsRQHyusKN4DaFIdtFPtRybg7g8O6sOWIRLzcGo%2F2QOZjth2q0cU6qBBAOUPvcQvvoVjr0d91J84PUdlj7dwPWr5OD4p9cNOAtd7KA2LXSFjGzmVWduPkfbUi9AVkSrZPPnw11ukGBlBehO5r0o5FEt1oMPnA2ZQvYqeR76KFNDN%2F75T%2FZJmBNHoDeeegjTO9E3O9T1Z81Tai10WAoMShLGpw9hUw2DPTJIkUP2SDtOm8MKjtHLjAl9O%2FBAbKFDnA7XwuqIcomAxH5uEGC6o16d2XP%2Bsz6yJZMnMKTC3ckGOqUBKvjX8nDQJqoRrjp6qTmS8vmTYSsPBqxgkuKLZWjQi%2FxCSqNchs856G0g3REPhBLzbmePYHCXbm%2B97dqk1K%2Ftnu%2FbF0CG9Vpk2eP9JAGxI%2BIQTt6mroXCNOVLpVdePi1aaf%2BIrq9PbX3%2B10B330MqIfWMP2XcQa%2BtfWDvgE6BHM4DL3IVC%2B9UtcN8En%2BeuHJWv54jwbusgNhmez0mT70wf%2Feq5kyD&X-Amz-Signature=170430d85693b50c63a85fc01804c1c244f930db80ac2ca2ee27817caedc4653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBA6G572%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRso3Ry%2FrtFn3%2BSmtoCBwjYhwQDTqxBfF%2BOgLuXaOLWAIhALwccsDrNxznFThGD%2BkEI536l%2FbbUplcpLGA%2BYne9BMrKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMUIVOTrNOolw2w9Uq3AO%2FdXbglP4vamJQ%2FuuPGfk5shE4aKJlYPovh4oZJFXcb%2BXICiy%2Fgso195f7fBy5VfDqfCL1cNwgmNHi%2F1IQm2cONPAWRXbAYqFRK1zhGQ1%2BcHux1OgI%2FdI2BsB1BRpYonfcjLdxiS%2BK%2F256Uo6ubU%2FAP9oHsfcMwnHEWhWu5z%2BB3RLrumxywgM0Y5gFyUKYLU9q32EUDTRGfkUnYSit9OGjQhTGeoQ39FFkCgdalHZoPJUFHxnzFtsIYDKh%2Fubw1wXQAsLCn7quVmm4%2FE5NUool%2BpStMAha5Ov4GbF2xHqhv0yScw3oIlifmHSty0tGFeVLmAGl2wiqJfElkGf5SUfLOn%2FKeRq1lAzFvYVL6oCNZ%2FQi96xT76ja9q0uwC9IKbQlq0%2BwBG%2Fqo52FasHrMjYWQYT4YHkeR9NgEXJosJ1YTTCSs50Eg3uS66c2EbKMo7wynIzjfcR%2BGyr4tsDWa0%2BreK4wj%2BQ883TIzhoEfdM3unvXYzane6X97vVf9HUuIOZj3cXg2OyNxo2Ig3Ih2u3fBtLrTooE222g5gwr1chYIUPrxzfuO5C9l5meWOhv%2BTmAf5Ffw7nYOzcARYbIcxjYlnUFRSLfgLWRYcyRwjZtePVQz3iXet%2F%2FB%2FFEwjCnwt3JBjqkAXCHdGx7THLWEU7ld7rBJMrnaTkxvXjtvrejVBWCbd6%2FY3qVT2Fe49Y3a0h9gVCPjt3fpK74mn7VcTUYdkDpQTV3%2B8cBvTdmQoS4OXH7esENPDXzqbscP7EyMR%2FblLfHnWCVKPup8%2FgWcOXlYyOmIVMHGaeSuPmkJz0LRxvhDX%2BrS4CHjb2d2Kh%2BgBCV4NRzqqmF38YgXFmdnvqr0BENofuzw%2B47&X-Amz-Signature=147d9fec3190cef4b855830d0cbbdfbcd77769a889a5741babad920abcc4f491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

