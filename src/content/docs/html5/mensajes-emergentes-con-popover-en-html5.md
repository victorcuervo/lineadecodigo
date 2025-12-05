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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466452OTYYK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3%2FG9Qc3rudB4vp39IkAEF3PBUdAJQ9fNquDELTl808AIgKSvGmw2gEm6iB98x3O0JM%2FY%2BLyiZ%2BP%2Fn8R9AKQ3Bp9oq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDERA0sh1vALxPWD0GircA%2F4%2Br%2FmezXgi3kuT31xc9zPZVOqRQ7rsHCu%2FhyBOVgPIiltKShLlMUKo1stIzM1RAdpVSqT4VX0tiT6X%2BR9ll9kUsbV%2FCch0%2FQMAeu8u7D%2FkAdbcmkszHKggzBn%2FBSnFo3vmCCe171Dsq2spli8L4bQXLi0EGrtwpMKDOvCr%2BZ1bTSJiw7fbkgTGb%2FRzDZvf1LgPomiVY5kCT%2BsWso93l296sk9tY71ROpputG%2Fi%2FoL13%2BgGM8S7QHrMODOYRDhk1Q%2FAo1yEBPnkiSrulegf4bVX2rtl%2BdtPyx0tRSYzrzy%2BWvARAf8S9TvaXjgdSFHLmgzGp2leDNlXgWgHlxpYD00WLPGnSK4jquSbNX957gLqPH671RyO2AOOYH96TO%2FOCURCeU%2Bl5yyBn6PCNamddSnETLG7fBWC79%2FSqmDT0IhpresLoQQrBD0dO0IR7vZmVKvEyHuBIeb90ybeHnL8DKbaSA38u3p8YWIihvttcbRgyiqK5w7CQfguLin%2F7CpfVrXdFWdzHeEQL8govXfu2hC2HEaHf3Gexz45yiEpOSpihOobI6TJxRJCbaHtmrILvU7639IpkLi0ZFhAD5mwr%2BTaOq%2B%2FV7ezltrR8zw2CeSMYbrtcELgQgGJYzfvMOXqy8kGOqUBen0yFNJRe5yLX72pHZLoZs9DgnPtfBCaoVDqYf9jGUUbofr0sZdqXLtL4N8xCrfdq0me8Mkz5Sx8MRCV6c4OPU0x5MeQckRjiwLlum4F%2FUmezFKuIkTwqJTW223vlFSuFAp0APUE9B8%2B9fXAmrHp%2F4uAokE65rMpADv1Y4E2NeW5FNmzyndDG%2BxLOrvmQYTEapPjaG0htLRcluVL9LAHBTBCd8LX&X-Amz-Signature=9c66f9c0372fffef1764f7bc96db2d14c0311b8893a9e698240ef3668e58aa15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTNZNCN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKEFRgZcQoimduu6QiN7Yw0zMOcAEZLoicOa4CgMVzBAIgK5TfBYlUjg5eGDxidJ0ZooskonxzUR5Y5cRdsWy6ogsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKAFVgPvpuDenxeDeyrcAx%2BdEw%2Fv793wYIyyEfg3zfngGBQV1zMNZyRGCvXHO3DA0P0bCOwNk8AnzWDYLWAq%2Fi8i2mzm%2FUsKHhnCUhLj7gGhZ%2Bm%2BqLkXA78DI%2BYw23ST2IsHuvy6Iwu3jXWBzgXl5OrSCuMDwDL7ZHDgk%2Fei1sNn4jHsLVLiXA2GBQaXlecswZ9l8qqHRgVO1kyuvXpsO7qck9IzOMbYHyp2mjgXFkOWIFrm%2FzoJGD4lGxcJlcbj1uucZd9o2H2PGFKO4bAydL%2FW5Hea7OS5NrQc2urdeI0V6GnZqgSQoaX57d%2BnJ3agYlmd3su%2FZe1pR81Z4pEHQsRXHw60g2o%2FwRIj2u89MaIbH8LoK9MD7ql16ToL7rY%2B4GCsr68hY1cdL%2BPC44EshKV8a09igwu5FaCjQ9K%2Fy8n22oGSq0d8l6U%2FMVbA%2BUWc3m%2FIOJk%2FzZuL0fqdhi8MCkGy2FbvOC6y3aT2eTy7cE%2F5%2F44jjBFOSAAYtqa1IZbewEb%2BZZCJjxMWYFk8bZehdatef2pVjlgDWiZNoJoX%2BEi09GS1x5QoajVxEgRCuav8sH%2BxJZ7zLAvlu0WzYajOAVbChyYbRXwbmbsMceLY8YfBchsaJziuwNMnPxL6ysjwp7vH2WyWfW1E9aUjMJDsy8kGOqUBZuHYGRcRNw3CsxxXiIdGCF4xswHJgwziI9wBq3PddVhAwl17xA04yG1DiShqkf0AxP04FEEtgqNj%2FVwBls1bPtHangJ7m4ScwYTa2JEL20pPCRevxcDZsNMNW0cba1%2FWNkFAuUnk03yv2g3VmSr6s0cNJJpiA2Welt9f9x1TKBQsUJhKHxnVzTnMjNa7Oh7qQ%2BWgayLk0Pmhi0bCtT1GqobbPaiQ&X-Amz-Signature=f648cb142f613ae32ae189046ed0cb81e50988417c5b05d8ab660e568e609078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

