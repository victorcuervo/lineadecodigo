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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHSHB5O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCHIHu86Agg39VDOWRj%2B23fTlMgzqB28t082OJr%2BcbV%2BQIhAN1r%2Ba52EOOgkHgHRw58OiCkHzB%2BNg9aTG5CmkA4A52wKv8DCEEQABoMNjM3NDIzMTgzODA1IgwCJKGdM83w63W3r9Yq3ANLrKf%2B71I%2FGgrY3tzdwwnzy2U7DsAB57u2eEmMONeximKAa6%2FsBi%2BJMJI1DBJAoSZmWirF6ubfxTpdVonG86syh%2F5NxNWfCNruTtX9Ms8YFqN2ULM9DD%2BbwMODuJsAA%2BhH0ooujSWBAfS5jMrP5bPr5c5xAIdORCkvj21v1WZDDOwAeOzGmQgHENqx6AKiCbzCVp78CngILO6Ua9oBkHIjrKHCRlNLcpho6DRAXlZgaF08GRDIpQFRSRkI2CioJJOiq9fKZeGrZPCEK7twaXEwGXaQ5qW7Hv7%2BrV6kO3nWyCq%2BzgM2mwZOg6o%2F2h4UENMyDeMhrHwm2tWsGEu0KpWEo6263JhpuJg6tqALKNWFGGHW5q%2FyOQpMbwdY8O9rn1rPdsb6z%2Fpn%2Fvysh4tbdwOAaig%2Fe5HSIj60w%2B2F4fXPBElK%2BEYA%2Fzl2MVP8CWAade6pqCvAW05769VIto4jUVZQS9Jm%2FaLaYh7oHhO9SUTdoymYgGPNEuOfkbhQ2zjh2kQCrlQKCmP75no2bzp%2BboqiHUMPFmNwmX83n%2BnpgyUIJ9AqS5T91jU26DVxPb%2Bg%2Fblqu%2BE16PmOs3jvDFPv2bc3lMGHbywLy3gtOf%2F9jZyr%2FMabuIek8xcAB9hI8DCThsXJBjqkAVYAEy56JBt9FUCdNygpNhryDlqPG%2BmMGbziN3X1Xnb5dgLzhu3Ja3vUyB5PO4VpmiTYYSCtB69cRoimIyBPlqnrHnTG7QK%2B9IkDmLz0HHjEL7nuWmwockBdJIho7zrh9HqVxwARom2vlmJNu2zeoWNMWKLdEQuJIsdCpgE1vSLcc%2B9vn5SpWRiTVIMcyVt8m47vpVbqB6x%2BDYApFYkofr%2BfEgag&X-Amz-Signature=f63691fc6f7c15fa9a180bfcf735525f9adf52dd3c5eca5a458ac82540031018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VYPV6HG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEAUqZDShcCnleQvtUkVGersIjJRpCIpbBpLoJ5Io6KDAiEA6F3%2BVg%2FH%2FCA0Po9kiU9zmQKH%2F1lgVGuuHOVutefjEx0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDER7TllvKYW%2FQfikCrcA8q6P5FTZmN2FERekgf%2FFpFEg1u2qA%2Fx2Wzx2Kg9QW1qoh8jGbOJ%2BSUB4lZOFATVLh2FS60B3Jjw0V1UE6EvB3QzHTVBQ%2FNxc1SoFhpZW7gasc1MWfX%2FH3wfrEeGdi2yXz7TvHYi0CRUhe3l%2FWee0ZX2Hrt%2BPBBSyOBdFhHv7YV3VDOhYRHx6KukC0f12F48cdtv3qmTv9B%2Bk43qcwyAgxUgrFvHeK61P6bX29S5s%2BcwVE9M5goGsyhV1ERGJn2QjzFhiyiU6rtheXAlUtv1V4kh2VNEPQ3MdlTdCRJL3htkCloLVpiF%2BOczYfWBuhl6fVol5X5dGQ%2FKcJgauxswtGCmKYFd1H49FqCRq3dhX8T12Q%2BmkFZfSc5gdolvJFZN7PRfxHL0RkDUwsN%2Fav3D89i%2BgyOT8OLekFVqum0z2YsLAKiRUA4BLg6b8PQTCT8GEeIF9qVgT5ltZolWdd0Yz5fnFzxIplBNL7SWBsIsCJm2GhlhrLYyU8V0%2Bau573tagwhXnFU6rCW4hzNPoOqYA7%2BvJlmHIG%2FxqSdFPuOxrM7mePhBDW%2FeEcD5Z%2FLOqEAVL9Ze8G7%2BkJZZaYGezWgb%2BP2uKkkYcq8Ax%2BKY%2F9vgoMcvFtNHCEgwA%2BDYPf44MJqGxckGOqUBfLWu%2BrOKDxdBIdVgqBn9at%2BKimOtDcjVJku2A%2Fb%2F%2BDii6hQ%2Fft4rPooUte11XVDqn3D%2BF1NU%2FLorVWZAnASgH2PCClmPm%2FXVpxCK1UNlgQI1lT3p24TH4FxdTLlzshemobKqfoe%2FkMNlA3ToEAmnNndhg9SgmZXwZZDq%2BVEpLYDKgGkmNvvtwLF25Wj434kYNqYcKhbRD7eZE69i1xJJ66oCroTX&X-Amz-Signature=968dbb77f6fd16ae7b8424223ba2d1c5e3f0935aee8aa9e3a95e5c68f3657f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

