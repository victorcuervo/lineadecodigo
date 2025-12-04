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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5OU2K73%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIHUBnadQZ727qSt7NuuNY5V6hLrmP1WPFquBMq0E%2F%2FalAiBp7z0VXbSsc0rkWOVwYvWnFTM6ykL0BYSRwIrvnSrbMyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMGSv1iBtCHzDv%2FLXtKtwDMFj40qS9UYYETImjCNkWwAOB2vk%2Fl4JnQdhTxgvNU%2BhXWmhHUMnXTZC1Cj35HR0keQ3IlDAV%2FcLn%2B77ne8CczMxH11kqQsmTwYdAjEyVO6HDuTHYuKxXf7hfjXe9Th1vD%2BOXDhBO28SBdXzwRriQgikJVXvZW0I14K1iW6rUzca7%2F08N2EaKq4p4VL0Qmmy9DfSRcXHYUJQT4FQU3LgtQiBMUIX2iYjv%2BYqai%2FHfid9l80g%2BEMvisUIvJWNDPN%2BIhpZJNmXsqpMpPOawqlaYST3RRRID1Bp5CHmQi9W9UBOJVWXocslIHus%2BaLv12NjO1WKqFzEwq%2F2Gmi%2Fhw29sNwsGcFUNEJvkXmd5mWGi%2FHNEFEMe3resQo3SPu3DqRRj4QTN0tdbll7UvJFMYWS4nb%2Bk%2F2SHvlyBZSYD2KLI56EovBo55Ew3igUZquEWAo7K5NFtu0zJN0ue%2Fh%2Frjq%2BwLbaFPMnjXb%2BvvfztmzXAkhkBXo6CpbAilm21bxjFUf7csIzP8TAwGZ0XnXHlOeXU5KZB%2FLmZWZGjtymfLAcgV5z3BQoygTlh9mNK2l9LIVhk6xvHPG7fhK%2Bimq9bOSbAIAKVmsHB5xAFp7LDTNTjqALB4XYFhgyHOVLAQ04wla7EyQY6pgEroaSrMwrI0mJ7DLw2CYK0Sf6fYS%2FrgOcjv7%2BTUGZPeKqgn8a3IgdrGBYR4LlmbzfQyueHnIExlvtAAPrS8cdrcGeJIQHYW6jw%2Fi1vfWYdaofoUTIPJxUFNKyjO2Gh5E76svHCxtZ5SfmEl4CmokdzP2rf48TI7wZF10gr1Uder7JaSj%2F%2FNY3litgRnUbWsYoYq%2F2XR6lMPghUHkCSkALN8%2BzIn5FY&X-Amz-Signature=03d51530b2173fa92d35d485815985a240686152617b791cab6234e0f1bb90c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBJQ4QQS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDB91FTZ7g31iZWiukFR%2FfZh17VCjAvPJaVhX4I91QyJQIgXM%2BnIxi9eHxoj7HjMRAYK9MGxrnPVfEph1UeAnb8dpUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDChV2wZhGoAX4T84lSrcAyEoMEOP3Raujrn%2F7uQTqcbtZjFxIfns03sLPsK8uz3YydO13H%2BYgZ2FfRVvNIrts2tNHynticGaPSbWJCVvXKdHHR2euffOZxP1wrUXe30dGtk3WSVxs3tt2vb4E8HYF4OTKzLj%2B3xVURh39Vux4QPj8jx9X%2FKGJR17eXmhoUkbg%2FiiVbkFfbcoCxqd8VcjYIVicbCwmxWCVfVs%2Fd9%2BjW4aMeG4bTKRnLMhp0151LnP0ijKoVK6Oh92QfC%2B0FQ%2Fyp4f2%2Fn%2FEM2TVuigqhHmJItoTyud3dJf534gAVcO6LqtVeTNTqtok4BWeIrhqkpCSZZQyYFNzbVWmuz%2FNCGg2XEFjNyvT2EUIqgjjQrguINnVK3XOVLVkgQNHV6MEltrRrCeBDe0DJJPGD7q%2BXyqSLOsWAsyqI9T5eQLF32HQeo6Yv%2BBZQk8gKrflj0kIy455UHIABp8fZvmg3tYRj0FwgNDCbc20SeGCKu7nM3ZPoHxSStCoe2WdGZD4aPhZEZrqxmwQSgZ7e1zNAMzVyYzix5Q46zdQYtCgRdD%2FyDUDB%2F7XGIu7kTi963Bu900wVb8L7yz7E6XiihmB4bl8HslMkiDB3z0x4GRFbb0OnTEazKNVwIjU0HY3ZCFQa3uMP6txMkGOqUBxezYKEioGjOKjjKrCybLYDxvYDI8VpLRTYen7wggPd7fX57Jc0BvGQXZC6Iyp24ZhCmv8R1KdcjTEW%2F9mXbE42k6TOAhE%2BWSNlQBupxpD1tHBHlNn23B19DS%2BR1Bp%2Flsvsxn6qrjgOk%2Br62NnSCMcymV0bSxb8Az9LIFq8QQGn7TjcjeGWhyaBnS1l%2FLfGGOp8xXlsisIx%2FzSZ%2BvVvU8QxERYzxZ&X-Amz-Signature=9c3d5c04eef8514f079d7a60f89b781597c7f6160b397bea1a22f8ccc2ee277d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

