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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H343HCL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ2XAKCTlzM6D%2FUFq7pP7Nk7yHePgfcH6NVqrAp%2BlbpAiBsDFgFoeRH%2FTdVxPRTTtexWZyDLJ5qQaC2Q7MU%2BTNBNir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSYKsdTiWMptVaGNLKtwDjseF%2BQ%2BT%2F4h9gf3nKBb3ghIyNv%2FrwlC53Ztqhrw0t4XTo1PWRkBEnw2l2KvWUN5Iyim0QmdQizOjoLhEnu9vHDhJA7eTd69BTHhW%2FfzWDpxCGBuq3qB%2B%2BrjNQYXFaNVgMaepIMksCrXOXV2XBNSq4eK2FD0rgmyxgj0hMCYAePiReDbf5eymf7K%2BTIEyOWkutxFJ9TD30wbAlw45PxTDrv9bbOfYFxk0J%2F4fRb5VdMIU9%2FxX3nGLxle0%2BrZf3Yv6FllbmFDgmR4L0hXxSbMxynC6UYyCETtQYP2tWdtgFSivsjeo91clAZKlG%2Fozy2WvxQjspyp687X8dWVTcSB%2BcUGpidjS%2F%2FsGTqlKesOf%2BFL%2B4NHFDJlhJMuq5AOJy1WeljNrdAbNdXttpVyd8MMGcviXtqUZFssjkdQ8bJiAchgBGOCMKCgrPkF%2BbiHIkZtAJfaTLTYii8%2FiGQndoc55Zv7TzYqRlCLArKylNDgdltMggO%2BrH4CsR5upp2qn28d2w9abKzsM3N9I8iX98hlv1W84DctI98blj1dYLptCg%2FSmntcTJd8%2BeBa5inWgluyCeDROz6Ko5hFOqZ%2F%2Fb2VzpxPJnEuz6TGBoHmUoykiZEYBuktifmOyFl3ESoUwyPLLyQY6pgGvXLqV4jUF047p9dxt7MT016SBzzASx%2Fjw4%2FhlRn4pXl5Qw6hOB1zpuRnQiVtSIn20S4pU7WMKrc%2Bnk%2BLkHRx1McBSKEtAWBV1rlJprTjioDoie4JnQCcC2Rty8AJHFdOW4x6lMR6bryhVezfEcjHLiPNA0XWjqVdjLSP9gsJW1NtpOP6zfsJeFC3%2FjbDQFov2r5xsTQLcT2DMVIrpSTEtnCMdxUx2&X-Amz-Signature=8712afbf23ba9c1b26597d1430af15a6d2e1972d84006a79601ba175981a07ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUT7WNG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFSfxHW5%2FTGo8XRm%2BGP5khww%2FeSynqZ8hQB2QEWiYM0AiAav5ls6wpYMBwIJ1Hd9JKAEQfZg87NKjW4fN1TA3grEyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM0Rk2fmIb0hOpPiwjKtwDeDVYxopPCL2sEbncXUdUiSRTyrbEWNIhOHbTLQlRBk1bXEUdiVtChJdStl0bCASxR7k%2F4ujjoKDh9Kk%2Fs4%2F6pqZ%2B5Zz3TmCwAerJxkN6iHSp6fp9Aoa1w%2B6JXO7Fia15u84EqgEf7TZ9fgwjqWTlp10%2FZfjpuCVED7Dnn15%2FbU4v3fD74gow0fZ6l7AA7g3XGHcTvQlLP%2BU9yi%2FtZV8x8%2BEr4%2FPW6FLdzuF3VluzdHRanOogVUdfCCa8ej06PD0oxtqDxKWtURqyuAlWUJyxwRRPItRctUNFqYw6OEZ1OtG1QH2v9pp3cjJ2f2EdvWBvmZPbCJYholoSFANCIyso7cS%2FJq2YdATyCAua2CCs5ont3fsAJSmSq%2BlCEIr9yedccZo1syfZyliHFtcBBe%2FblzqKLoYbo38ENUJowVDhro6Mypv%2BzE5ATXFw%2F6S6KaAc%2BjtzhL7maimt6UhTu%2FXQBGBJ2%2BWoYqmAgKcSvKVlcR4MUvgI0wjZjIi%2FwsEZnTOXzwsAjo06hIQwLumWGiq5FOT9Nza9rS2o6d0SwDq5hjxNFyGabP48hK9JONRBGdx5LOUkkYdjWL2M72g386rU0rBPUEzpgU2TR9gmfqNh9wIzZEQaML%2B%2BV8qnfyYwwOzLyQY6pgEezrIjAskKHly7g%2B4X1RxWIXPoc3yPugR1fR%2BFyeYYcfw7vKpxP3Nlq302%2Ff9xfVLzF0AkCmZIsIC8fIE0yud%2BCTPpvHxiHzUR39pHe7v%2FLsoYQYtrwfRQrnmERgnUZLaMltQ0pZ9u3Mf4cEBhd39lq%2FKJkjE9ckKSHzmYD9AO3rcxQjkZF1jpo9GpJl6M8Be7SQ2hQz5VTOtdiQV77dVVstNSpibX&X-Amz-Signature=5d99754fdb558f9150bd26191dc45da9ab474a30ffc7511f2eedc6710f99e0b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

