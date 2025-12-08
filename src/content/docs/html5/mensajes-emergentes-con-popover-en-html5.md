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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTF4VMC2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0a19L1%2Bl%2BkKPgIKad%2FihevWa8uMsfLvbh5RV5YMm9hAiBQdpjhiRO4DbB4JPLZ%2F1E%2F7Kl90y7QAv9uW%2F3SKAAS%2BCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp%2FtOrsuYdiWVSn2zKtwDq4u2N1aeDALMVD4b%2BHdWuYAPsR6b2Ub%2BvR2bqFKPce8aQNAZj36e3c7aVyXp02l1jfuw1gC%2FyhLEysByZsdGM2NQjdA3vEjPGQ6nTNoZU0NWAjnU9lMHkGqlbjL%2FtADRFjFWpqknta2uCe4xdlcVsWs9G3zvsiO%2BgDhXrNDLYt9Av4U8X6hpDsgFcYqFt7wU1pNJQQZEhaG6%2BJJYtltjgxMldFFJUWrj1FNcv%2BXSobFRD6bIM1IvlvRCsFMobyoRuKV52aXGSJwW%2B9DwTRFOJV6vZJV3X82S%2BFQTfshvZtlVCgpsAE8WcNCKCerFxhQdvOcgZSDYpBwe2dGvRvj3bRkWQBCFf%2FDdIXfbpOZA0I908NxawV9i95onQtbyQJ5cuyJMmABrgoeJ9fhM6%2F%2B6fLj2vN85ckNtwNDW7WHgUJcBYV0GYwh9%2FI4xcN0NIviCYeGXOhyrvc8HZE3VljnBCaOz97xpTH1peHZ%2FzIVSvrUJTCu3FERaaVeIw878hiJT4l5%2FWBo75xn%2BHTfwurDRGlJ8G89NCMI8BS%2FzuRzM3NqicenvlDPa7uW0xFk7JmOoZ6sH9xMvDbvr%2FBmaTzv6u1pEsM7eiMOPtcZYoIJb1x7knZ84ack2sp3QqLgw%2F%2B3ZyQY6pgEJGnk3ACUvodZ1SP8L%2FlO7OUalWdJLDtcYxCcn8zzZp3srYq5dDmm0EE5ZwFmp6S%2F9xKZZmsq0pTuM7PZ3oM8Hx%2FcX86FkStLswfaKZhpWOyy%2F1wgEX2EimBuVE%2FHjx2uX9LNzqIp0wyhs9u7DHRlW53hZEXaKssDDe9oxUelikWfFUg9ITCmeQXttAEzs6JkxglrjWN%2FcgX2vkET82YOXVj0iEArw&X-Amz-Signature=a9f9ff65ea993b62033b7809cd83d9fa08d781f8203e91fbaa4d52e37d2c0b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRRPE57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpmCkhuUdpNzQKwYSMY3xjJb2k6G3Mi%2FEM9%2BPoxZw%2B8AiEA2msxSCtt0goJermm%2BOiMoyUvoUPpXTfpDAfKUt4xeHkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl21ZQY%2FDkdAhF1IircA3x5qIZhJzVgUwviy6u%2FfcVqc8MDBCd1dEpl452JkOCZrw9QAMwD3FGghcjason0s4xavyRMigSu2XHiGxb9P%2FIr1AsO1%2FDDkiOIWyxd7%2FwRasr%2ByaW4QzVr3lGsZCFgqzNOrvWqLTkX2Gde8TvFX%2BEMMPGtcxVHrtERf5p55gsxa%2FVrpPKCjnq8QUR6TXJjl6i3g7VzMNsjBJldoSTbqSLW7hmlGDuLFjK6I%2BHeg3iy5iBnoBuWcVreBV7Kk10nUWH3gNKixuHKJnIYzbo%2BNPrvRt9qBMWiE4EwcnUChqiLpMz6EZONdNj6RbjfncbO%2B4mq1wqk%2BamRER%2FhXC8fy3d6GzhDvriWUup%2BXOO2kHulyXSDU0rqNZ6aVf29J3a9PWqIpv34xxWWxjqQchORsC0C4FdrxeinrzZZ8ZliUemipLvSPqHLMBFZm24jNxcgMw3lvfZLmsP9Y%2BiI3vqdRF5Tzxv%2B25ZBmKL5R%2FpAv1vY9wnxKhKdeis8Am%2BT2QWm1n3WK%2B6yow%2BbQs2srE5j0e2Fgck27oMufAcqgmPHRmTdQpro0q%2BeZEItIi6zuU2rdKBbv5hrlzdBnSMYFPLculFleA5iVqCNArt%2BfOod%2FxLNL%2BxOXo9NfJaO2DmeMIbu2ckGOqUBpddnRoJD5rlomDAO4ZdF0rXyCVBoXhEwpPHknOPL8gePpLJZJo9QyEqWrYYaxywGppF%2FMQuvirMKQv4h7AfrnA2EaOKPjatvhjS0g%2BgP3zBfST0Z1wlJZXSvO0ZvDcOXE%2BrkmBOx0eF77AcxpSLXygP8uE%2Bm0504pOA7F9050opm8Asoc%2FLzhnWIVxxDqk4ImByAtPAPOnk0vC%2B6p8iETxVJWav1&X-Amz-Signature=33bbc82e3913d86cce11dce30d78150dafe9b21b964dd905d98f13c757972276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

