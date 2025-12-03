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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB6SWCZF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIDKT7zN5WMQGYCE1tXzLQ1GDMLNiPitxKY%2Bapll2k8wZAiEAuwqV4ieZ8D2kqnvpDVsGBhharFv8CeEypmd5v9Em0isq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBFgy5FrPcqa7SFEcCrcA8JPtciJUQ%2FZu4QPMZrSsR7ZUIt4qgSF3o2bAZ66AbmJ%2B2YptygLrKZOWM0E%2FtHqoA0TS0YjNiWOeTRlUC8YqsX3Ra7T0Mfbre62sD%2FVKRqodrOzu9h%2BPkGDuMFrn7H%2F9A4LxDd3UHBiytIkawX%2BeD%2FV6pTOCVNCItdQuFCJSyPPCEN4pMp04wJ%2FFr2XyAvUIfBul5liPk0J0Sk9tQeqygy4D4O9UApMLvscAlwZWIe5oGH%2BfGQoPUC8M0QFZ6Qj%2B0ANy1oVboL1vVmd91Lo%2BKxolTI3TdR1sDNBsxKLLky%2Bl5yeWPJgas0kpO%2FBitlNrQonYvCu24kWR6fAm7A7mlJMSVBjVU8knxgBbxw5CBfgFeC1rZO9DMzwCmq6c3LCXPrPyHgX6UiBrM5BSziDE9zCBOhbvNezMcOAXy81%2FklPecD0CyLufYNgLIHda3yXXEr8zB%2BBQjF1hNGq0c3dk0wfIFalfW4g0fdwbP8Zi3a9TRCl2DEVFyqGXu1TIsl5LTdZ35NFXAgymXYiXeTgTFBXnooBrSwJVekXKi1sPPCD9ugzzD3P8FsZptLXleSMbpLEXPrsTu%2FpbaX8sOmp%2BhwLyWya25vel3COQXthUUZeEYVfSEt8UXjtT8JEMI2bv8kGOqUBOK2sfFCQCu2UdA8hjNZeGiaBh9mNqsIXc%2FsffL%2F%2BFLMtLWi60OcTfxiwYUm1twEtaerJCPfe8MHeqtJg2lXNV9plVXiRfzCxspstPyMbqCisdnOITNasIugtA6o1Q7XNX0R1kFsmP0tSdGDBZojA86vLlurHcLG1aejCQduu42ZihmVp7QiOac3mDWN5GgzPzU04SAzrLGT6K7CtB7qzyr3WC8xQ&X-Amz-Signature=dd156f29abc66bd75bb4702f190ca3aca37ed6a71030c6347106e22f3b181f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCBPGHPZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCID1OwjqyiBFDajA0mJKIBjMKulQ36F%2BIBzC7SRUJDBILAiBX62iUnaJ1kJzkV3DEnkZ3%2F%2F0A58edKoaGkwwAFzuhcyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMQyy9%2BJSG3UnkMnl8KtwDmwWu4CvpLzbAlPZ7Ou6sFVfZPiHRT6xSowUFDXF8bA8XbdDupY6nD9aRb7IUUCJy9HEGc28ZeB7wxGBDx7z%2BeKLCHPl5pZfwKSooD3UMdAqpyNJnbG0V241gX%2FOT8bjGkGQpBzJjnfLkw6Ozic4bLonY9ix%2B60Er%2FmQ5fFPPvymLZA3C8ku7TJQNWOmV6fPvAdd3zAOqkr9pYoRR00DgD2lMEeHbQuvPSS8IRTkiR2dMeRK2SP0092saP7H%2FDPfUMgNZ731S1R6rpW%2FG9ZrbGMTwHiACqN9ou0xvotCLpuWRbpdj4TQI495Tw6A%2BL%2FSF2Xt6ZHGOqb5hoiWRI10lcEUrou31hCbTIhQRbXjnkGgelxoYSTpgAJg0kQsfIAPoWb0fOiAW%2BhoA1tSxZegJ1RmDaJ%2BuLxGKJ4HlH9WWuBeRCXE6EOtvFGoLAYsa3y2dxlnSYYpv6LfIki24He3%2FHmJYLjFjMOX30FenryxOwFiFh46kpyPpUk3AQem9qvFxMzgFdrtRNALMMFtT%2BVZpiOF3S9tmEk1ctFoh2hjQ6iTBPYmlSejsHW8hYeKMO1K3mAfmruSkKbxpsuLdjD8TjW1rNlqYanzntq2GNccw7vwu0oeE6lSjJMUJ%2Bs0wgpq%2FyQY6pgHRPNiSuQFeb59oDz5IFtxjPKdcBLANWM4gl0FstJb2%2Fw2PpKsWgMftU6PzStNg10qEPmu%2Bbch8oBwT04z0leJPvYsgi%2BS3T7K5xiSuRV1c%2F829EC9nGK5%2FAWGNQ7liTZieED%2BU96mRXaHzqFidUoENtzRwwbt0vgLwJ5avE92CEQXKa2w2uMRvdBjo%2FTxAvj67ZOgDzuN%2FYRmo9F%2BCjPpjCc79PoB7&X-Amz-Signature=accc3710aaf959b5ca8fd2388db3908a6b4cae8717a95601206679b65cf03dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

