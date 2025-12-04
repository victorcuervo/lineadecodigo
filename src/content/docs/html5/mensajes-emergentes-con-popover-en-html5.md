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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7LAGF6J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCbsbmnuRtwuX9yzBDHeCnE6JWvbE%2BIsBc63Enw6CVaeQIgMpG3EbRx2mK%2FJjxKUSZUX6bvyU5dFuyC%2Fwqm%2FkmsYSoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAAlht3qgfH9KkC6eCrcA33RceHVMTjZtPoJPQ5X6U1IMKnDVwpRfxD0BOZLZNS29utOLn%2B53TEMZBkcRoAo7IGpDULwagEeBEW1M0%2FEzJ9mBJVUGr%2BeDbEDGDoldr4T8%2BDnztF0Tj%2FOBYQWtB4dzdwyD783SSNA%2F4%2BuBwYOdCWCTq1nxQnpnxHWZlaTzOVPPfoKPJSnfnKHCJKlxMOtvGCMbkKhQfpwSFg%2BuaC1FnGVabreqQkMPeAhTIOqg3o2019uQK9nspn32EWnAhhCO%2BTjB6je0CrRO%2FgqCZ7D3Hl3UcQzxXwowDVY53hOFDvG%2FQdBnh%2BIPiYXAxhvVSKjtDmnHket8fO2x4h8m30IPq3i8beRyIWqX9uVp%2F5uunrdXydHlkN%2FMeMLK4X8XWscx%2F8HEJKDcgsIlcguWhnMFaSArvRTcz659ttDN2l05uZmKVJfzjFR7I5exeNo0fSwnvrGSHhu5m3XjlGxQUp3rNV7Qv6bNKtFbsIshQTHFIvq1luSbISfpzo%2BVXCEGbhUgUbRZ0e9N21FykDPSl2B9dUKoEraNOwVTheAoj8bdzDTOCPf6yimyI0BXl2ouQyHoXQMMu6bdGPxu5uNHf8KwEqMULBGakArUqmbkxTw2VGouCWy0wzbosE2CUT1MJeQxMkGOqUBalOTSiv0JMUG4tOY2gU86Xzqv0NEDiMweNH7xTk7DxBBAfeFntTNPYLU3k1lAFrG3ZGwmwBUC9pqAG7%2B%2BpUKW7lxTR52KMbkRkKVhJsNcYi%2BKG3bN7J8RapgcGAxgR2qE2%2BtLJqRjJcB5Qm%2FvYQj3Lgp54l%2B2qM26z32NWpoaRHFF5PGI1%2FkgH3Mk%2FtuP0O%2F2RwoRGmc30bx1Ed76WKQutH%2Bs%2Fog&X-Amz-Signature=97fdd2bcbb5b6246bd2a5a69e47d6ec70e8418563e5633f412d14c12e35bf89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DKFZFTZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDO30VFEkigo1Uj0GZCrTiCkozWB0z8DKMkvz71AxnElAIgR%2B7YdcKri2tUikOSsVi%2F7zpaia3PElVviq7EFAfjmeUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHuwNt7RYnNtPTYC3yrcA5NjvGNJgbXi%2BEGQ05VO80Y3tJQllt%2FjZt14P3wB%2F74n%2Bjtrv8aI7ut3U%2FfifB0z4Ar7LpZPGlc%2Bj0pgNFmXq3sRs8wtbUKskEZP7E%2FfrwpSXXaI7DMiEuV6%2Fj8Bf9xDdzbkRy4d%2BnT%2B%2FE9AHycSu9NJcjCFQLz4Wi5lGlWWBQtY0raFyPKTSU0%2F0gyqdAbtZElzHbwtOIju0PxYyfGbrzXz9HCgBCa2hgKlCorq%2BWLjtt6mpNRq1n0tA0eli38oSg8ESFynYmZUJhVA%2FcKSbKeNpPXez3YX8RHPqX4SBMiL4IRfZANEIhSfbUbhMuOPSut6BFSO6%2FvNjv2HTnhw%2B6cq%2BP%2BYq93aTb8e4jQygTKKx%2FrgMj1u0mDRQ2%2BRtiN08huEtiECx%2FfL0I9XgIvb5P4Yjv20SJaegYLNvbDfDvFp5hUE%2FjPNvtsm0Tln4wBM3VupvArbuslsNCuIBWX9Ao1lPxgrOut3rXSZtNCmYC46eC93%2Fz%2B1hinJGh4xiNzMN3k8tO3ZcLLOC2TYG13m47lBf3ei735ij8ymzxHBcQt8KnVSCueD4B4YevzUU1xFh%2B%2BKaD1T9ZfL1FyqraZ3w6IgNTTUQ8FzUUq1zjPM1L1TK21ziw2ryU%2BqiwAfMJWQxMkGOqUBE7HSNCdwwHfsfMCMLpZbyJGNKZes0kzyZDiIAijEYZHePwNITn2Syh%2FgcRenU0POLAiuBsFJvNjco5bORA%2B22Ru7vUwadF4azQ67DHC1r4jlH0VUxg82z5T2GvQH2ghe2hlqBF59mV9cUUU2nZGin8T8qzOJrQF1H6QEbXIX9qgwyuaf0gnWTrZtZV0Srq2tQuWF3550Lgmkbpdnie7fNVpfqpRY&X-Amz-Signature=8c91c7d646428ce408e5a2c0688e5595aa46a31d13aa25de2d3dee819b539ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

