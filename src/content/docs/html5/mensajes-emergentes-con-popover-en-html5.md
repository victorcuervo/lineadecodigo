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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSPBECZR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlj8vjh0K%2BnGJb7bju1cabTiFrT0IWiUwxBT4tnhtgLQIgJsRlPF%2B9wtyaNsv2aW%2F56I7apy1mz8uFVcrhIpbDP8YqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNhEkTZWNXT6YhKQircA1cOE8TdFd6baqynYm3j4l%2F2iVyxcuJGvQk474iBZQZSDSz5ydxxx%2FvMrUKddu%2F9dx3xWOHK2DqfsoMauBWkOiQ4xdwDjasA%2FuH5sHuDo3pxTCTLQrWPL%2B1pRbzYMb%2BXhAPSm%2BahLkuXZY9JEg8xq%2FYT3ygN5ViCuwOcen8UBgulzqY94ihmenv9C2BjtT2%2FGJsbKY5i4FTvfL1JtS5YE337AP6e9sOcON%2BRarCcBBFSpun3Yk78OGiALxlv0KpcCjYK7QP3%2BxlKDBrRLkgkbOfJqlig6lsv1b4j%2FjMe1OMrmPfNb8KHlGedtBx3yaFf2bUf9%2FWdFvYS0X9ZpmMq9x%2F4aOBIdMkp%2BYccPzLHzOYcHBnSJU%2Fc1cy7jeBeNA3chZePGpe%2BTVen6roOSOtoh0bMxWv7YI5cEqO2hlIikYTI1xEgBg5mi6TkM%2Fetb%2B5TUah6aSuof6w4kCHxP8HHcP0FA3o730mQjrLiq2vQNxufIy2Duv5Swav01slpwyLhekeD2F%2F2Fv2w0XG1q01rg30gcIobKAhx955Z2w3UQ0r2BAtF1JVnCoN5xpCp4O7cKlb2qyPcZFAOxH1b70HUT3CxQ1NCmj359ERy5xeP%2FD2Ey%2BIk4e%2FRxcKzrmXPMJuH38kGOqUB0PBb%2BTlZKgTxT%2BlGImQCo4TeCYxWu3XJD1CLrAc9hv%2BRMS%2Fuu6m5T703a0asCCKlWkWtlY8jbv89ywfBnSIs%2FQ797njeZzuXE34QgbgJOcMD6Xmh7L60PxVOfEVbdwJy8FlHyhFU1mHR3OqKIHd5G4m4pcMZJ4hRH3WKz7fu3lA5QUNV8N%2F5s2jDuAxWouiwjnLqptcnc97grkvByiMulzlBI3jj&X-Amz-Signature=f2458a95639a2239bb54bdd5287c419652ae6089712d96ecb8f5ea56dd7fd3ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYRTYHMM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBBH3TqBrfUJLOFPMtxo3FbUs4zZoFCKbWcxuXMf7E2AiEA6yS7HSvXsmBk%2FPGOVJWTmGoAVDVu1GhnnpZHVoaCWFoqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5TG5NQRSlkJb07jircA4Ojc1zMmsctPZVbGPH0xoQTrm42s7Hk%2FcON2eetSJCN4Wk7Rs8TR2tFauafsYXJ9TYEqdpMyXNIWOZCItyA6KH4nplVwOmsRbpGwbMroNub3x4j0rRMOlUe32%2Fjrirg%2FSRHgIoPNPZwGnAfeqm1ArwZkvj3jFqLfdluLwBu94ADg7VHWPboQ0qOjeAfQTJ%2FGs0kvWF95s%2FaIjRkJJJ4FxsYlxfBf5U0BLGwhmybnd7qv76JEoVGGQEyRWXJq5MyMYai1KBQonRm0MdCSKwGU80dNKt9Ts2TFbeEzWdbnof8cUTUwLfFVDqt32SO6FGnSqEliyR2c%2FbVWz1plRZEf5G6LpQjpP7eSLxZkcHuc%2BelmBOvw4BU1kpiVa7ZPNtwIR2Opr3%2FKZm%2F9xcaoDyy5F6lxHCft2E%2B5PqSbdZNOWkj8kV%2BFLlpeyfOGHZ2qfbSvOhCkDRhbHyAcRv3vLqmp8hr9syzNwpksjRZVA2tna5P0wCoS6GAH2U3ZadksjKW9R%2BsjztT7clDo9LWEwnfSghq9EhN2cVw8qKjMGEePF37%2Flk5sXhsfiG2wMMkG1OQuBuoJ7%2Fv2Ze%2B7JD8vZFg6VgFOwpu%2FRKV4fVn5hhiRL2wPQYOS0ZHUsTrApaZMOaH38kGOqUBR5Nx8ezcmmsliMhIjk3ehgfdKQzULQnMCPWAFx2Btl%2FpJCHyR2E6zH3Xp%2BNXQfF3%2BGaLi1eG%2BrJ3ilCXuTP%2BAr%2BE0Jt7lxFSibzg2DuTMWz%2FixdVOHbeh57Vxc6k%2BgH%2BAn11jr%2B1scTpNerFutgZRbs0qGe4vepwKpjZ%2Bs56TRtDKX1OQcIt10LYcOvWCsFdohWSvdn4dGqFqOohKyDKx%2BFNKVUj&X-Amz-Signature=07ebf4141a999bb55ed3eeae33861d746ed8c2eb672ca8dee4469ba95db35b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

