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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOERIJA3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFT72OURPtby%2F1Ek%2BStUCE%2FwG%2BM4l9p2544kx9qYebZ4AiEAgbttPvg0ii4tuq5y%2Fp71b384Rb2P1%2Frc38zZqMDlZzEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrgAwjE8lnL6gs5JyrcA0W5fbFgoVlo53bv5LFj5AfvdLYALk%2F5vAZNGrCNcRKKYkvqeB6b8Eo6JVmzpGU3DM6JrOtw1OJfmfgrgHtSYa3R7vuNw3H2vo53cQl0iZ2WymZOLyz%2BZh5bTD9GY3qjUtIoFKp5Pt05UeNDs%2F0GkknxqtfvVz%2BPLV4YIZjn6neukjliV1246UM82yeFB73DQgkblN6D3DVSrMC%2FXhxzo6oe1L1pNurWEQxMDGPgtuuhblKbW7bbnGQFm80f2VAinJwRI4QRWCDNOfEZtdqPwNYAxEAyCNjrXH1u68AmaOGRxF7Ya4B6iiF%2B5ET3BBwDQ8XL2qb9FYffbzgZJXQZRDK1jEVHPblfuKvhGUnQv9GUAVzRTs7UAL8h6cdQQCHr2Xu7KgiJ9VUfKFGIcgk95GWEYWC%2FiTPgrjmnizx46OatrruJVrgiDHTpi6yZ4laIdGHLNNefRj2lQTqN7xHU8%2BWM%2BQbCmYJeay%2FHy9o1eNlAd2WKpUtawJHMMQ%2BQdqD2ROQmN20aEYGd0nxM8LObg628X2eM3qPliLUUsGsmnqYoEgGiwqBoEQqr2kgxFLDuEkEpErSnYWXy1WPOVkbA%2F%2B1q8DF7W2aRft1vf3z7yO4pRKBnaTUrftNX%2B%2FmRMOiP28kGOqUBPW%2FJ0MjioCunfObwzUu%2F6%2F%2BcBS385GZI%2BSlq3%2FcbXcO00RI56yuo4xFUG8uRpWU%2BsIVyOdMz55D64itp4BZXSS8uF2WpqKp6cKLHdvdTTdXNzZnNSE7eEUS%2B5VoJ0z7PfTnIZGyHcfXBa3W2yxmDadAz8E1zeAvg%2FdPeK%2FBoqTFo5lIUE8jyvlzc4V3Jd8rF694Uv4F%2FhQwat85mabHdfTrVjCDV&X-Amz-Signature=898a9fa35b1a441a6786c2ccd4a6f0a676f4eed94dd7ca6eabcd87a3209e5a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVUGVPCL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn0tiSq1Sz9tVwZdMJPoFYBfISMt%2F5L69EmqCPRGKceAiEA3Ak0oDMzRX7zi7gAPEA9YORtPcob%2FEsHn4D68Qpk19QqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnjRBrEDtR2faLGSircAxxqGbsIPJFcqFMwgtRG7yyVbiyvtJ%2BMDp%2FrklZ7l%2F%2Faz181zFv27hvQZ9qpOHDcn6NS55rZWQel3mATLZM0Ky8tByD8Xy7%2FyKdwhx1mCpEHLijDG3FF4xfi3TmQU5XFU2mPsDJR9P1zIUAM9uuM8Y9BEmu5At8f0f7Kr9CchfHMtIyP2K52kSoVoGIlPf7nqPIAejNJpGXgi7eSjWjpObPtxzAHrF%2Fmv24AEPf3AR1mQA%2BFpx39djcAUw3y8ddG63JXkiaezCA3Oj5%2F7OrgojKIXqQxOSMcIAOnXLzFf8%2Bx3Qe%2FP2QwVPXVkgQVwqKGlOmtv1RQV1R866b9OA3PGYYFNSqDpDTt%2FuEJDO8pAseBjs0icY3%2BAp1FUKhygtH44DtEw3JpmQTt12gln%2F6abGXRMs3dB6yLdY9uNF2LIia8T%2B1Z5MXkoQpsQ50xqPSLsA1UgOjEIvKQSj57UhpiV0bX9P0LGAHan2g7YABPx7WsMatvfayEOnytwUMwabYbwHttVHPclQbKks6szfXG900AiM65rRoFn8hT3deZcVKrPHafj624OhRxmnfWZbR%2B%2FfpJXMcTSVDIWmLe5ViNRBEiTA0oyuF4b3utP9CrSQzyjCJuMU4YuooDqckyMO%2BP28kGOqUBDvAo4kZMztkxBPCjrE%2B6LpdoN2NqjGukBJ7xbhK79Fz%2FLYppuIuR5r2f2bPeyV%2BFN14%2B2334y1AoHDX98yXhukzsz%2Buzqo%2Bdk%2Fcz5%2BpwIxo0HsZiNpWl3yjibygV5syD0ox0TJi8cSwp0I0rOq%2FvIP98SO5d5o7oAYERjM%2BWY114psuJ7IMZ1HpbOu9%2BPdGaGBvgCNuUqYmClofOQ1y3UoZORs1S&X-Amz-Signature=bde514f9d5d879f26b5c8f32c4559813c9aed6ab8702efd3344eba86bc9aed20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

