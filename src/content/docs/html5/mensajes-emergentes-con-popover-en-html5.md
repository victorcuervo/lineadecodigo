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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AARHAH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEXM1e5QxncjHj8GEgxU6t%2BAjxmqTYXBPCXkhEKLVRkwAiAExGoHoXG3JI1yxpXAgjYGB4IhkZ7%2Fgp%2F%2FFkJ7JyO1pCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMsjpxFl8iywFQajbZKtwDxue7JpkyaqSAdssCPaDQQUSBuIo0uTUQLUBNt8kZLiVbT9qqrj9DSZ9C7nynMLCVZf0ORz5gUWZPtTjWYE%2BNCPZbVVEPEpzuGncUspHDdzIcZCxOmjY1dMVzxXIN0OyHJGE69mWFf6M%2Fp7gQYudR%2BpG5LGaDoWdtgSmA2Qr0TdHb5NDVnIK8Ftln03VPR1lR6Y2NvuANIk9m286vf4QsZYDeOvdAHfkPOpOTMpRnu8cM%2FKDc3U6smSatKUot7m3DGUdHZscujkpdQEN1cidJPheN%2Fxl2BNYhHepJxWiTijZ2RM2UCRW%2BzjlypS9q3lzNcbP%2FbN3nw8I1qqyY0Xqgodwie4pHO10RLleELxfhsAndSekMGXrd0b17DbLrZMU%2F%2FNOmcDXzD6M0wZhZ6UYIpGdWGzCJINSLG2iv1YCYtwz2WwCvMGsTSqjH83AKHvoNf0Ukr9hPJ3E9xRlxgGyc6yXHQB5GP3WFZQc%2BspMwnA%2Ftf7lvPJtTfAk1P03Y7aoL4Nyb8ZbKVCTlAC4qfLewDPLmWS%2FGLOWTnUnJhWbDRrlVucsofmBEqdUrTWCHQ8nGrUy1uGcCGR8OP8xbhlTRg7TSP5%2Fu%2FSpz55eGPHBob0nGn5qFG1ULSZKFSOsw2fLDyQY6pgG3NpWmyWCQgpSCnus%2FN9eVqsXXBseQ05FDO98Vs3uxfPxtrJpTFNssbQ7Gk9%2B23nns9xSZi4tGBwAR0iGjlOq%2Ba1EYBDhnUQCxiq%2F6B2O%2FxJlbGRtMdsalGrSiP8lkbO%2FFzvm47D1GQCszD4IwkQvbONcOz30dwQbTPMR%2Bftg%2FfXJr8QWCSycOZjWny7yMfg1qOuo36jqLALeqhBAN29AyPtLJRpQw&X-Amz-Signature=eae5c291346af6eada1fb06e71cfe069b795ac73e1f9ac9ba5b4d58cc7a577bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCRTBOIO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICT1QZRsY9sW09U4bUWVRblZfWKV8AhGcIuB1RwrF0glAiEAqiWntvfGwgqMvIUAJ3f8F3OZZN8otVByaLRhLSbTFRsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDN6MsgMpVMNtVPbFsyrcAw1D074IfNhPXSBXMI1syzP%2FNWMrDFuBiRDqOBSAIC44StDYLGTRNwi6gSxqVMUuVU9ilrs4kz5zl%2FmzYjlGlG4iU4xW4wvSUfblnS%2B%2BWXKsk1k4Dv7E%2FwCkRltmKaTK%2FWdFamLu0%2Fs5Eszjg7SJPpEkMla8zQv%2BtlHA3xWGkxrN%2FZ8DAPooMhWnVl%2BSCLREYjr%2BucDuDcqpA3Io1PDocrJUl0%2BiI4yuh4ii1Fx0M1Y%2FqZsUDO2fopOykfgFTwjsA%2Fk3CSFXHSFz3mUQvtrgRFrhiTZwdsqSWNTOkDgQwVpyAHpF2mt1Bnn%2BjCttPVsyDBOO9l6MWe5ZLTrTbOHn0V0ZaEtTsrop3hDK81lKj17s2tBTm%2BWPXRe%2FMSucDhQAV%2BEu04%2F%2B3wXuSDPtxLlajEqzMbJpv%2F6fcqCAp45xO6vjNDXWdnOEIZWpWPDmsx%2BzkD2PSi2sEFIaJMmex%2FvtDd%2F7ZSfiTNwH2dH8%2FzCnsRWeVf5hG6ZA%2BEQ9TbxaVXPHUxk2ujOc36r1rZvSmZRXdZLYF9f%2FcA7b8qfuy9thpQpGqdZY1WD5q1GdGoVHkGQomaOWICYGB2KTP7FAMRLL7wAHf%2BfOw7zgQnThd8zA9QkOyV6FUsJOmUKIZIUwMN3yw8kGOqUBKSt2ehT%2F5hVMeNDOA1olpGcQ1pfPuHwsP1YQnaL2x%2BPaym2xy7AbunHrQU3xMljT7atTvQ49GUCpqNdK3foHQaKzoq5YMM4mwQQP4kTAhyMn8JIvHg5y1Ga5BvGsnY2E4KwkFFV%2BBbvIhsUeKXo6X3gGj2Os3sWjsmVpKvGhv9vA9x%2Bkq7ueDnT2xOgUDvgeN5bzSvtJL7RxaWrGmDFYt7idV1TK&X-Amz-Signature=1cb8b54596e25e3ec98981f94da431a7a522615db84f6a6a9ab4670710f2fea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

