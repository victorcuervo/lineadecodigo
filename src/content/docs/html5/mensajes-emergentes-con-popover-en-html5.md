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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBEGDXAM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBF014Cyay%2BD%2FVi4lfwhkchfRlddwjtrObcesx30aDogAiEAqMZHlUSrHoYiYqp7q%2FxK354RgwspZyxVIZ5UYUMwdkoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMM8oBPKDRWvAK5FmyrcA5IYZQGErmEOTiHK1Jm9mIWKDxRGxiiKqKRWZJGn5xR7fTub2lHolWhnxH1f84XphXCT13ISG7JzjbB3RhjbrBVFzZ%2BPBbCP3devSrQNGttRkYo3ma9uWn%2F0JWm4mbwkay7ciH0uoaePHY%2B0weK4mDXLwsgb%2Fe0YVROCe48nJisEy%2B21PwM1KrY0vj0sNy1w%2FC55xLUl67GdfJI3FMts6rvi6P0AU3duQ4CxIQSinoxVIPJYhBkeGFz17RGja%2FykIqyeydwpwKUXl0ugWG6N5oqBTAZZFFlLR3bNAT2ICGq80joV%2FQfo4C24VjCsjEPoGvNTu1o%2B5eHsGAGxXMx063i9L7qIFMcPqw8zNzx0hXO0yE3NPvsI8CuK5%2Bkh%2BPTcRi68iCT88qX%2FEboDzw%2BX2fxsWwOsU4XzeMgy8FgoIrFru7yopFYKpVSMquFfrQCQLXAyPwbq8ggiFDaYfxJCqbPuPGwEFosWVGyJKiLvlkVo7fR8NGyDlUUGqqyl2rae5v4X8x9zevrLr7%2FKUepb0iWgG8iPW0EdYsldQMMJdFkHOl1IH83XdoLaQyyBxM0%2FXMuiYhf9bq3Zggz1JIhLu566H9zmX5ZcRwJBDgOtnaDDjVsNfYep9TZOiFQJMLiFxckGOqUBvPhtu1haTJ7B1DeP8MEEw1j14qE5Y%2F9VQCKPD1W0XRwc7o4%2BgabBI9%2BxF4e%2B6zoNqxSbsbOKIezmeaxyLmJ12j1LarkHA%2Bqur4oi05SeQGjaMaXEECB45%2BC8JGgQVb0JPZlCH08aCIK4faE2HSskaMOCycmsNm7MxCdHyuq5H6VAS6Vv5AEDQfT745gRXAJF7ZJbv1zN%2FPBYc42RFK12bNfXXrZh&X-Amz-Signature=6a7cf243553eb016dd05d87f6f39acf4ecad172c96579e62c2408388d276435a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SJ5GZXT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEWvHSNrkW5r4wrxhFuKeLgBQl2%2FDV8cAS803U%2F6VS2CAiEAzgvp2qDDfwBVBeFbMcYE8pmnJzKNwE4qlRLBMotwL6Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDG9%2B0RrrpdMQEF6HMCrcA%2BusAK8ONyn491SWdPura4WoAehs8zeZO9FDKlxmG0hbAp6L20cv2Iix11lWcISyNFGOp%2Bni6ZbzqvP50mTi1J1dUQGSGldDYKCUU%2B2AdkQBKcG%2Fj5KvAFoMIAoMK5JeE2Qn8xKoZpT%2Bomzdc7z4FJCh%2FAFYAE74HRNQJXofRuviHhfW74T86mjXNCj3J38QVAWf6Cy%2Fqv1pE%2BiJpFQK%2B1XokdkV6NrKFBmebo5w59FCHltbFcPwo5pmzuFBdz54b89VQ6sdaka1VQl4Dd%2Fc%2FqX4mYVv5nw23Evlx0B%2F8Nh%2FitImPh5NHlC4rZ0%2FE2OryWpHT9sbOQMUfIK8%2BA05X4KG6oI1AFVb5JO%2BDkDsDPM43REM%2BeSJKhCcsLvKHbdxFwfkYP3loyyco2dlU1RxZufoCQPAFh0L2RHYOvEOvMP382Enyo7YE1YrJPY7%2F6%2FSTPSxm6rG1IzniW3JM2qAL3oL4xcLf1PYXlen%2FFejEMJrtf8yn7a%2By%2FJfZAyYEzDM23AUbgMD0JApl4rOUnJRq68aGDfajvaGI6qzdkJNf0BJ9WURe%2FpGkagbVM1386gvuoDS6DViEifNGrRL33%2BhFsHytqiCM55oZraOWLZRz3GCHM1PFX%2B57Un1AwezMP6FxckGOqUBDTawxWuoVL48%2FOHxH%2B%2FJtd9H1w%2BjNLeMIdJOY1tV86bMtk6LIfKcjFCpSXP3YofvpQlLZPFaCMoocJ%2Bpg8C48Swn9f7KpzqwEbH9gPYE%2BqR5lC27u7X7JiiNArItVnP%2F8hjmI5lfGC6AadS%2BBokiMq7OfsIYMKkppT9Pe%2BrjpewIp0gXnlajSH5pyx8Gyi0tfZ2C6%2F6XnspIpfdvvQQXdgHisTyj&X-Amz-Signature=db974f1c4ddceb8ceac557a2149d7a047a0028c16332c4b687b1b38f89943cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

