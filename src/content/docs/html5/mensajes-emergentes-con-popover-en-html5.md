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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FWMTTN2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BFq6tFAbDJ2vnJVQD2jUd6ZE0%2Fmwzq%2FlrETMW834XoAiBexm3VeyvyjK355FMi7xvHEcLQMH4AkfgLKCfOOoLqOCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM9pzoUUEaRKjs66y5KtwDvJ6pZtVXFWqfHJwDIhWUatR7xnO94%2FVqMm3sdvJY29iqmZU9TEqWHTNefmyXsODgXbm5ond00VvOBr9JEd5iKws3SCRlVf0SpAhoifYz4RyWIBRnNrJY3fAMdm6ldr0IvbUEP15rw8EbYC0rjrc5cum2ltEYvv68lOzyzdjtakuwNEbcOUBOij4NmsVjkUo4W87PFpZOrGOOOi0L2vXt%2FDX%2B6dwsMk5Twm6ctL01QIN9bdR9AAF5mIuM66OW7bsvxZ3GfohqbV3ZwCaSCXaI%2B6d0wIShX1OQnYMP%2FsDZid2rKE9CV6KGgxGMfbbnFJjmawIyYjYDfNRhpY90WjgV%2FXoapq%2BKFoM%2FxaAkRqDip4VYT%2FtM1m3fyQiaw2ygORJKqAE41oR5vbMS5%2BtlQTPMV5PqDUgGimCAKyJL6vJSsbJE79naKk732tRomFNddTIDsudubj1b325RJ0BWmt0o7NFY2v7yoA4pKtYThcz%2B5ksYUWOpziXkL4XtERptrwewsoceIQgNeul%2FAy3bNyu5W2VG7SRpd%2FCQbCgTqo9eK9rzfbmZqaWl1ySpiPxnRPqdaua%2Fyf%2BBpmV6MOEr%2FNgTBxxZMdtnwvOq0StGTYBR6pqkppauB40J4Tv42%2FAwrvbLyQY6pgFRpDSJFLzZduzI4tB4vGogXgyZhPcWnLCrDZ1eM6KtPE12BOn29%2Bz%2Fbz8FHMO%2BUUb%2FO%2BADXKx17Z2wPaVamRGLuwPYnj%2B5%2FwznYKf5i9KmOUjvHcCHE8%2FlVD9lqFlJp1ZQ52tCVwLTDLfz5L4AS1YTADu0ogDXd3t%2FarYdtmzZrZAOFboF4csUTT4QbgkQVl9MnQUvPEM7ruzF1hkoJQWkTVwDX7fT&X-Amz-Signature=a8bc6a84a6cffde82d0ff32fcaa3a958bd3ead7aacec58a3d295d0d12442bdbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXSWKQU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw7yrSPDq9dDicrVA8BcDQjxFqgoLMfaQN86%2Byk1oCIAIga8JODXXZIpuJpyVApfz9B%2BfEkvgNTshNTOc4iIT4qQ4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDIuj6oHebXZQ0ZNjhSrcA6u9B99iREQcrhcQ1C49wc7DLue35UkF1rjsaRzgtdbjU%2F5AOoy%2BOI4QWuvJ8MPJHpW0nXiRRq9l3F4hyXOLpbMMq%2Bk6ZM3i421EmjkIqXRrW5oyOOhCBGExfBXp4qcZfBRUfvodJiAncPKfWg%2BzzE26BGZk3K6jmGQa%2FAn2ktUGcHU1jQ9aUdnyF9v%2B8Q4xyxS6aTFX112%2FPrl6I6BNDezTz6Lv6yY%2B45tHSrmZI%2FzQ9eyMLBAvQiAaMWAWTk9tEGMaTTMiOXALguRvQuX0uQGdCEsYoBZMj%2FeVQ6eOhKFuZByoRk2FratOpc7MqBjlyf5yW4g4YxDdCOwD1zfFJbpOtC6Q%2FxtMwGKBkZZuJokxPT9E0QX7h3szvLMUvyWN7vOZeKbBVLZlzYVFlj25W5IR2l3q%2Bj3cYT8V0s3WPKGhnSGcjipu2ulJ%2Fuw9hs8EVh656F3T7cvaiY9tN0H0lmphP2L8vkoz6nYkFEJVZJgY%2BU0l5q58o%2BcKgogc25ngP%2BR2DOTzl7WxWKW6iC18%2BS4%2FkJJDM2SZiqVCSTNxtJ%2FgCB82aWfqEW5WjWsLemyQXiq4GeXOg1gvB0dWVsKpzrpJ%2B1kCIhcKVxnfbBT3oS%2BAzUsZD7p6qwL%2BpuNzMIqazMkGOqUB%2B2Rp1%2Bn6KhOq8jSNAHbItJusNffcEctqXWg24Y9qR6DLNJirZ30JRBEFQGpotnMHqbw9JXtttt%2Bwiexykb5LzXW7f21wTYi0CGxSvtRvsfvKtsUn1doOurlA%2Fsx2pyTrGQ0uvOHsh43OymGyMFdtZO%2FHg5dMZKH50O4OsOBg9yHQo%2FHv1GjNIOx1aXYXAj8a2NeYbOt4Q7xsRihhfdawaB3hRW%2B2&X-Amz-Signature=53321b6ed9383f3799091caa6f232fa7ee0291b43c18f2903aa8c36fd59ca232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

