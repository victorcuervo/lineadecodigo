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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YULLCVYT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELTCTaJjFgBpSDRHhXgCNtvwlrmVkTa7n%2FkcT2U%2BDA3AiEAqcsxzJz%2FtCbuHMX0u3gtUjCYC%2FFFxytYd0kx7ID5g%2F8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMYKSOPajXudK0bZByrcA735Um2mgtlkmzq2gRvZA4PFIGTc8KSLM9pCX%2BzIheDAlQ89EBYjOQKq%2FYZ%2BAVGhMgUnekAdCN%2Br%2FYGMwATneE%2FTHZ6bXPKUgbwUhbAC%2Fu7LpY7GZ8IRXxmDaKqBUoaq872MPQSFn8HKWQpxi4WMECYli458YiiCEEhG4hIdCmVEybY0imAM8x4X%2FxBi%2BApKz3GZnPukWsjpL2tN1qaPNQsxH2d66Gqcht9bHxWp94XwYGfBbzbmwesL1jdZMgGAl3GEjBp%2FZ7PpCLtW4aHk5TdL9J%2Bgm3%2BNtCm8w0SJApUgjqfWNEg7yszjGZu4p4oFhILGde4GpwDlHW3A0znpNrWb7VQqOvlA37HBcS9wj9Sq%2BZ%2F13BdPsIfOhsqUCSzSO4w1GCraimMS6aulOXRESq%2Bd2VR9avAowfzqeCR2h17xm2KXlYL9ZNI9bFdFJltUstQWpZJGNXK0ODpZ2L4gzASWBX2L5eCuwK8cKpDK5eX%2B041a99taKPNu1m8edXJDQ3%2FT1oML46ED56rPlzTZGJPZn%2B%2BTVgxeesj1dPY6eIYptswOIu6P6M5iqHq7qIbGwyIx0xmPVKOdCflTFvH2%2FQgnwWJW5r37e1E80WxI%2BzIQ7ygDFRuazOz5ewVCMM2qyckGOqUBunBEoH1netKpxLLJXo1R8NJ5qiC%2BWE%2F5yJarI1GDnOoqHqBD48YqTrHEeCvU3kvqfJunNyQCQl5QGUoH99%2BeYsaufAJQLJ2ydscHFiz2NWUq9I%2FNbDei59Tfyx2ym3E6g51hM9zmdC6Cl89kvITOL0iYHZR4DUMv8AN1ZkNHy%2Bpp%2FBE6MwArvzHdA4tbWdiZDNbPBUnXsIOLwEmO31Zn4hvGikbZ&X-Amz-Signature=72aa6efcf380156e983099bf411d8bde1d49b89dee079ccc65e5f192c9db866d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNBKULTD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGABk27aYRaiLBTFx3zpM1zdxtBM0SPKDtqunnR9BXugAiEA96Ajt6j2xOVKKTARID4gpk%2BesXWIpWnQOtch6uxkRc4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDN8Y1v3lBGBj2rNheCrcA6wWXb4itiXjJCc43AXwTEqQaORCcwOXDzVlFIOE%2FDN88x0PwUKAqqC9Oevp8ZjbHJ3c6gx1W1Q1NYw5oWHz6dbvmb8PS1HyjCPfDmMBhqx10xxqFn00hGLNqBhLG6tJe%2Bp%2Bp7L%2BeX6iX9NYwf%2BeAJU35qvzA65mw6W7Km5h09lKXV6o9WqegolIQxoWrqZJFWI6NAf8Vthb4WoMYM6VomwuYE9HysiDcO7JsP5sIoylPm42KE4Oa465X56VwNJaLgE0s1YGyysmFoR67Z2LK2KpvnlVgwFQMpMVG6qujDdDBEBY275Frkdr0bxyB2FXazw0tpJRyxSc5IzKGLuzP%2Bf0zVwNaBzlCNpXH8Ktl%2BY045GYrxs0t6dRuCv5nSgHxAeKMrAYcf2Beqg9RBvpVOAeo4veDo1vtfLBo8AHiRZ2UUbUs1xVD%2F1fSCh75IaduVt6aJe3N3DWnPe8r1M5AiF2rTfutRgglWgwOzaZIXwuLbs5PskV4UtSAJR7xH93BF0O4DHbyZIQpX2pdl4YlLKK8FIw12cxtRkFkOsXMM2iMjDznYcYzASDsKt3348OfC5CqXqg9XeM3XW3zIouhIGtZIEKhKizXA9k9lXsqcFTkaGTYdVJ8rgQSYeWMIasyckGOqUBSwpjLUfYMMRNha%2FUhx7%2FARHj5WlCI0BUBF9EJFOFzuEHn2sFgJA%2FcCqkF6Ryjyo%2FM6awmnU7owZwDa4iechh5WW3YuPVsAgG6f6n4ZtAT2Q18LWZMdGsLb9tIswId%2FyweDjp4EiFpWgd%2BCDFGSs8P6yM0OJqECF3KqTW%2FiupxCjP%2BnpgpRMgUspscgfjiUGDGLVGs4U%2FMgT3sDN3FD0qM1ofDv%2FU&X-Amz-Signature=afba6d664c7e94ef7b0fd1bd659c6580c84afb36b2734c580500474ff5242ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

