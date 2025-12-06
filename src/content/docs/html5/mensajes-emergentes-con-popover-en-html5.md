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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPXUU33%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFF1YZnEe8dbSfPIQeB4uzo9ylem7L8pZ2yJ%2B1wzgQFgAiEAv8foZQ1e92FpSYa7T5ojHWxA4R%2B79E0hyeWTlO9xxcIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAeo6g%2F%2FT5Nl5pU7zCrcA6eylsjxYSHI4YvD6qd7T%2B4lmHEWoes4QDaQwTF4JpSMlkcuFHyJboGx9AmXu1VNavlI7pTfbCYUAxpmaYh%2BawttXy2hXesLYOq%2BGX1A7ym1C2hImS4TGLxqQolP%2B2EHSvzh7enlpgRhi1fJhGig6aL3vmzkahyvZKdXWtUhaqYQxwb1eXiWzxExN6qf95z%2FTT99P%2F2kPFkUKBusdreUcVgUMZ%2FIk6leVxaTRmdCOilsYR0zko7kWE%2Fd8BOuGF0Yqzf14Jnd5rPadjApE%2BxSwbgingOo8P9QvLk1IjH3Z39AxSnBb0qykyUHHZ5CMs%2BSxjoeYt2QA2%2FnjtS5ptMk4b7FqVuS20JiLK%2FHmfK8XPn3X3o8ykr7Jezv0A4z62qoV9BziXt97%2FRm4xE3M670Q%2FONJJV22hYa0yoRI4%2BdJfdPySSSudud8VrLqKTScx0mhioIqF41DqwYb2xKCLXylWDJkc7RoX4M5MAO9yjhWMSQVFe%2BMz8yi1wg%2FgsP4fkPBcWwLKS0mtLJmkskxOdxrirDksBk0B2FgnNNxCFDXrweboZ5wo%2Fax5%2F4jKzEOugrPu0R8Ivt50N8bM3yC11s5p1oGkNmdLLCUWP9CeW9d%2BELeRHPyGa8qi4YCQkkML7E0ckGOqUBerKkG4rw8vqsid8MUrMotWe27lDxg39YjAVmBA2Up0bH3qORtaLHcQhT9LR5mu8ash7anfNATCCT9md1dDJPDXE0iTjknvIEyVuLavCacPoCe8t%2FH7NfOio8mxQ0B9cFYssjBKKeYoeRdqoWX6%2FGSdVR%2F6mUtDlNlICcjsxYBkLR8BF5hWt543KAsH1apwyFhwnCW8q8THTiCmUt%2FUkpvXG14qrZ&X-Amz-Signature=fbf9ce3c2c149840eb2d356b23b162620030b51adc754416560ef53c82eb000b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5EA75FS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHpog6lpck%2BrPK6NpBsm4tYCxqWhac3r8YIsiHDmWu3AiEAjc3bz5vCz2aDXVxkDJqNGgckwNiifSUGwWWuNK10nxMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPqTU3eKM45V932qFCrcA%2FNRJx5qE2fmvEY9pR7%2B42DcfN6uKcdl7qTefikwYBwXz2S3Ld7cqvIIYzONweTj1WVT29ShCdoVdzHas3ddigOSH5MMWqjOdAKzIWeej1af2Yos7HhyHX65qK%2B9s8h8hX5a0Z2dyGm6MR0NN6kZGKWrAJcPLPN%2F%2BMxP%2FY3E2Ivx3LHGMIG4HKTrl5FGwTeP7iwN8SdLh%2BBYOvKYKb0kQA0pd4AvWUXauXejYloGKdIUgBBhL1VFzv3g%2BngJBdIS7ACU6wawdwJTQEUFM7RBFVcEl6ZIrjQtdkbgUBtT2OMSxVDqmHyZJBmunT5VVJW1%2FFEXMoRnZHLQl%2FYneJr3wT6Z0GqAJkwLt8YXjDEES2wQ%2B74SdFQFQYPLw6XP0j3pXobJhHcaBjw6B5WfvvUoZlJYx6NeZeNknq%2BIm%2BUDezlFTuBuV%2F0HY7t4mx56617nwTJlRqzbnQ9LZ70B5T6Cjf23iImkeuYkmVihoSZuj5fwtIbaTyWH3nanG8absRL93neorXYHUtoUbxH8TT1Eqs37KQ%2FGi6pESHgKt2Ob9dmiR62Gs8U8vhDifoyIpYW1yQQC%2BElHy0bYdCkGWtejBtbJfnK6sTUD3nDeHCLP11nIjL2lF%2FNHpW6pr3ruMLLH0ckGOqUB7XKu036mycIrq62A%2FujoJfFgzPsFGxi9PiNzA1eLruQa2%2BuKk6VUubF%2FBEKfk7JIWm7ZPzeSkuhLsr%2FEYHH5WXBrd1FJSNeUWUWJdl351MxH43TffXuIUcHVFru7RSq6WR8OVoPtjIvEebnL%2BnFspzPR4EnbBAL7ReQB%2F9rOyeJ4Wkq2xWDfR01aI1Lhrd6xEKvETFLrmZ8YBRVsoy%2FzEKgtS2Bp&X-Amz-Signature=24c99b0b365304aeeca94c248eef5f1225c37a4396fd0397bacd192010abfbfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

