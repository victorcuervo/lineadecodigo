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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PMX2VTN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsmbrduCv5wKkwomXF8vStWmGr%2Baj8prxVQluH14QIsAiEAy7vRR9uNIlLCwRFtIWBYkpt7npQwU25xfPabwrvxuQgq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDDkq0vTNlPxRQloJ%2FircAwWspBGi5h5hgIOEKjKPIb%2FF0plK31Q9wmPKxefL44k6GFxfzvCNovqBJD8h8iLkX7YWP2BMoReEDXNzTZauEydNjRCLYZST%2FzxqProFdkS9cFh7ArwbaorAWwbdnTay%2FwEaB0eeb6BQLZRp4OrmsxM%2BilEAnBd3Wr6fzJaGYRhwOzOUPDqU%2FAEUJSj%2B3U0kfh20peQgiX3dxO2cg46E3gBOp7QeFpIJYIcfvymaTrTzsItO2EVcgQLp8YyJo0DZKn7hpgNq0O%2FE%2BhrmrNsMj0dQuRPMB82x44y%2BsuScUQjgBD1H7H1j7ahyJFptHLBbwIQeM27u%2FZ5mkGIw8btm22LiPq%2FjZ3Thxx8vpGV4yKgsDH4NCjmg0MXlhIvQL55VZeG6Kwt8dxW1xe9wL7X8ri7WPilZ97hDps%2Fx48IESiDmivy0wxtVQgF6RO9dsDCt8DWmrwJPSfQwuUptIRjbVQOugTJa%2FMYW9fgCnXyEGQTDQusTSRCos1g0FznijKIWecFbYMGTeJhtTzEJP95hjIgJWezz8wXvt0eYFDq%2Bg0iyCCOopugZO0KB0hYzj9mM9%2BgAxNHUjTcpURLWt8noBMpV%2FsPA7GkfCMZu5vAf4g6NZ9id%2B4tw9mNpZEflMKqnzskGOqUBFgsh6C6NamFVA9Njkv58eNUl%2FDdYTNirfXsX49a81gf%2FIJtlxZ%2BSYSocufDgB26l3XCEkaCVMpgl7rQj4NH7uGbz9a0NwAnYng5a1lEH6XkQ8E0%2F9M4rqFKnqfr7LUL1GHe804anpJBeFkBCwvrqwFuzhX57Xc5GgzWp7TeRNlZJQI7mWzMTqeejEXM%2BfZK5FsA4dyFnrphKy2HxZSYyq165jyqg&X-Amz-Signature=24b71b927964474e3f58ea5cc41d7c6f974e2d26474297ae72f0bd45ef44619f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2KOIORX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX18aWn%2F8VXXVsyVngCiKRsKC3MxHlN6kcjTJmlwU4MgIgYBcTO54paHg4P0MS%2FRU8ax5rBB6GPfbxgMNCqUSR0DUq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDIjhQqoChrIC5NY0WyrcA7UWHDQ0py%2FcLJvjkZP7Til3nMWZxQTkaA%2BudVUGsUJJXnQhsbVGbxlHIpbpAiHeG%2BWegag%2Byrz6ZpiZmNUeEwFY0cld%2FcKmCgrYiZmZLeRodHTFfjM7slxka%2Bnlv9Ax5GiztKpSSasa94anYj4pq4leD8uH55l4LswU2tKzKx6KI2ZNifyM7zlJTC5XJcJ25%2F1iEpKyZgzGdaZiJxrAspIWgAQf3Ff6rz%2FQIV6amLtjpZpB%2FbwlPuQlaw%2BovBt3ZN%2BK9E97sDBiTRZYrvln3Nw3bhtjw6QMcJJW8Wlgw3nzRobXpSycKYcQnOUWQWoRN%2FoF%2FhUH1UpAZVgaEu36kOG9PcPRWSFA9eky851cnOSVAvBOki4rdo0vfJn5JXckLj2xiwMBI3yIGc5SeO%2B7f%2FMeA0dtIRxWs7D9SjFWio8U8Jkszqo1GfowC20lexeNnAuuzSw0yz44WJZXkX86R5EIR9u5DF0Hfy9uwGHHJKtnCGgXm2dG1lINmfhExKkDKgb2jPZIJU1gpViwhlcZeXfMOh7%2BUtteHe3Liz%2F6alALS%2FwPVnI%2BYOGumUAVOo92Mu3XwiNj7%2Bz2Esnlfy8As%2BkZgBX8U4QkdniEC8Imt5fQb%2BTBaspJcCRt2Y%2FFMOqnzskGOqUBduDD40I0mfGpH%2FL4ZQ%2FJGKRworLwjDdBkgI%2Bhneyj%2Fbw7atgdm%2BJr70tn8IGjYtvTDb66i3iKqd7gnZnnkaa%2B9kf5A4dsFHJThJpvi0rmjGXyO%2FE448qJXPgHaGg1or1COMHGtSPRQj3ypmsl%2FLfGYo3PwuB0zZ0ezLpWeMz4kny39dCHs5d8%2BH43zSgoKY3ciseZH%2ByreuvnhuZmiEeKKrM07Ql&X-Amz-Signature=b923f3c4d794fdaa65e66f3785f4fb9fb51308db60925102e144c67b715147f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

