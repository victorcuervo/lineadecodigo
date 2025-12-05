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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKNIPOU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlw8pvHoDWF9g0jLOjryI4kcxpX3Wz4m3sspbmDdVNIAiEAxSMNpOA8bkPhKp4plkV6nvr2gnD71qX4Nsu3qAgHGawq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHvmn0uilPGr%2BawGmSrcA1SaGCAPPEKG%2FAhd2W4OCgYDk7a1gNO8QxGX3q2XCDrCb9MxymFCZG5zulvsgEH2TQUnHtu613sGff52R8P%2BwB6IdxwyWi%2BqJhG4MDO34bBy79mREz4mkD07dg4XP72J2%2FAX5wVcQMR5TidgyzISCob3J1K9oVHYfaOIqVmWuJh5EaoeWvBj236Cn8SXxO6x4RPPnaXXnaxKrCoOE2EvbfGRofbi2342o1CQL06koaWgNM7Xn%2BGBms%2F1AYv293i9LrEf2NwPAiEWxsYDluZTu7iUwm8VkN7LlJCaQsBRCh%2BF504Sz4lKoRENih4bDAEDgAkMqxdS80l8rBqBi4Q5X4mOQ3NeD78gxu7PaeAqmwb22dOoBlrWMgK2OZ6MIvJvRWYIURojATqd7YmZpuSxdqeNDveOgr3UxiJO%2FyykRtG7rM9GX%2B3jTNCtCgb7aNi0%2FmGd9fEkTVjyIQzbGpup%2BtWin%2F7QqZh%2B48tuVaUWKB5Y3aONiPOnEqKS4PbgJxegp6n5oPjsfxr4eF0ITsXflR3VYU7o1wU5uZKR1Fuge1GTbpuD3RUQFfMym95SpjSFYYFgveVeo8mgGdWMN%2B0IPzbktGBzhiGhv6SlhYZyU%2BpexwszBMmEw87%2BW7d6MMqyyckGOqUB%2Bmp7yM8L7BiKfQN%2BolYVcc1PbhbxRE%2FxV%2BqehpFUBx%2FBFPMKyl%2BBUglze1xJyMaO0hitN663V%2Ba3ucIzGV4%2BzB5yZ2Dzdz4SiFmoaSH7E23zUEmbrrTRXJBNaz0pkRv3%2BOTMuc0LbGg1RnF%2B82n4tkTwiUS68z77uLlhnX%2Fy8TkVcS1vtV6ZVVy6eEPcp3sjzE8IkOq%2F7tu5PQWV1J171l1jQmK9&X-Amz-Signature=454dded65d5a9da7c812284b043f8a7c9ce2635174ca53b140bede7e1809b5a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZUKSEB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRY5lDzQ5a44wb3P6HxS4FedkoP1ut2YR%2Bo5NPlZh3FAiAyRhXnK4A4aHcbdLaNhkjMmEAoMBWamBDDdwScHOa8jCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMZDMvAMv55e4Wpo3PKtwDC8UO%2FWl7pRrUXnt03DeoV2pFZy6Bz9Qn50X7Ucjinf8LEkfqUvudNETYB2iCPbc27HKDKejLqadHLlyronredKUnF1MRFFFYv6CBrMCpmUUx0sbnB55hQFXq04XpYaKG2Yqee2cqU%2Fk8un%2Byy0etLxdn3SUiHOGeYmtk8o5ZyGHuV%2Fw9rFa%2B3d1ThOu%2FaHXq5C%2B0nC27Jlrrfv08d4%2BIMwUvQWU9WRx%2F3zwX%2FGty%2FabX0CqihtIJ%2BhS5mFkfGnp6KLA9D0gpuwQ%2F6YsBw9nZYidt7BWeSIxMFvmhA8xNCTFtOKB5pQeZcrmcVvRBtSog9UFaxnlz%2FMGDvSySxuhblnSnbnfyULs3SfMS3m9xlb5vbWLt1mkBmc2ZsC9GEj9%2BDY6ZHk0uoXFDhIZ0Hd3%2BaiJewGyK3Uze9yUQl%2BGDr971UWDDnaJJ1fhjf0bhPYlb%2BdrV4qo9ygeyzPpXh8V5yTbTW6Q1Q4f97ZiNkWv7R5D%2Fb9xvlqMHclb93jIDyeM8UT1oBz%2F8eGiDoUmvjcH0eBIYpUMFkhzgtVHa0VH63zQF57Ci59i%2BnLpPR7gCjp6jPhHnyLIjnHsJK6zU%2B32D5auBq7FRsRwE3S7aiV7POkWSYDcHA1RcXRQB4YkwrrHJyQY6pgH32wNDqv8k8tnjvmyiGnII9o8%2BdxT%2FONgVOKBpqUna4%2F2qR3M5FUeQICUTtYmRTPvs3N%2BIhdLne9oBNFtls%2BuNUnhz8s3naFObT3ZW7CsGCOhHlpSv6vsgANgPCHW1IdHeys9veSbdiydtusUhStH5U0w2jth18jyUb5jeAg%2F5vRGN5WNxh6oo9Im9Pc6lNuZsdGNJNnwQvUG6cz%2BaNGoSkhlPE3OJ&X-Amz-Signature=367e38a6e979557fe40f5cd9fa78eb835646ccffb5bb5b697daa1fccdb8556b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

