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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5YF7JS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqbdaJQKaJkBJCmZgT%2B47Pj3Ve0QYixiqrlfflF985UwIhAJo1t7qCDxdlO%2FrE2Tggp6j2qxEz6%2BOgO6YLNKBMMopqKv8DCG4QABoMNjM3NDIzMTgzODA1IgyRrLClKdscYqnoROsq3APiAcMo98kxVelGYZHHo9luavPmaZw5ptn%2BEluxYpV80sjEWVYfY3wFvrlBA7UKIGtMxxW1H%2B3dmginwkniPFVqHrxXGHBPESMf%2ByUMNl%2F49NIj2QLRQAHlhaGcRGh1WNrH4mIwl%2BNDq3mP5nxhBfuuf4cvUNG8NEiz0TQKhYsJ1iNbGijInaXVBiYKOg6eg4BWozKk99Qpjr%2BZMiooWxdsHNCAuUVirnrirOTmZSN08Zw0T8BiRHXO%2FFSEzoPEZSmoLf0K3BWWLIEkC1Nxvc4v3NovVspS9JPHuZQcQcTT3MfwJW4oijnu1Iso82EwBcqzS2GlOQ2S5rAcW6n1Xj0HPL5mC1r8I5fwhShQzC%2FuxE6RPXsnRjC0j2FWZ5EW1KCwpMiu0OMat4WuchuHEdH2r53nXVhWE%2FZ%2Bk13IPjo5Cq2EklCnqjlJ6Ww7U5PT6DbXDRhBRTHNbHMcJ4PxOVZeTN5f613tMVAwbqnsfmtA6OYiAuGoTYaVwS9PUr6sTYJWMi0DlQlF2EmsyOXgMDTImZ3hGiNgw%2FuRL7OIR2XsfSJShytkyCgfGZDg0QBFcDra%2FCaKDrtWk24aoio6rrxfdF%2FWNMz2M97oQ5bKbwfH3WNV8qneohPYgxbJ1TDk%2FM7JBjqkAfhjv0GOSbqY02SW7E%2B5rpePLsP2IhzIyg7tN6FK1jJReD%2BNUcd%2FuKITGE9IPvkttP25V9AqfVuI18%2BQ5cAsG5rz9ry3a7lAHCZRCk2T4mY8ZHW0ShpW6YFNFhlAkhHpeAtlAH1D6p%2FukheP9xKWjW7rGxsyt%2B8VAQPu%2BrHrynwts3o9Sup0%2FP9W8pt4dR%2Fs7TZTREZRztmAvlqWA8dgpudSfhBV&X-Amz-Signature=476fdfeefe3c8efcc1043cdd060842b89c1e640ac73a0752e6e17f5d2e4d8f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKV5OK4P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiPuLCT%2FbDO2dhKlps%2B19ZOkWcPM97kukVgp6whFsE2gIga%2F57x6r6STuC12i7asj%2FFhYfFBqN33Xu5Gfhdh4hW6oq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDANC6BhHpVYWtUOPgircA6syEPJ9d5m2hub0lbKr1vPCavnypC%2FePGzuGWy%2BFUGYCYEiOGEqP9i8dhbknzzA08iL3Tkh18aaTQgO9CW0EyNAprYUPtIh2lMeBgE9IliPU7OulbPq3YlPkljIg5xsFq56tXVN1fCxKVUQJYPg0t0TjBFs8SyRN%2BI3PiGdTV1khV2h1q3dUttL4GDVaFFpWTEIwrOediXguFzqDoj3qOBDVLx3T7EeBaEQhPjYaP3MIRot5lEDFcpYlbipjaqRdC4Yt%2F%2BMqXWFdSr%2F3la0zJk6jeJb5uQxjJLr%2BZT8nQ1J5Z%2FuQ9jH42%2B9ixrRw9BzwL7iRB0L9v1juCxut5LrOlJZgF5BJou%2BCkBHMr%2FETs2f8stwlSWENmF0DNepjBWZmsoXPLzi1LiVdq4QR%2FNiSq6QU3twMHkdNcMpzO%2FPflJS1d5TYqYIkSNmT%2FQ12Cz2rMjRGGmFt3abrHLkZba9SNu4NMKD8WfZgh2lJjpp2czHW4elxMiU%2FHl9VqZCER%2B8tMv4g9muXqjlytlRpK0UhsoH7TvdpPfkaQBfD%2BYqgAdnPHXi4hs8sdhM%2B592S9mpS5T9LjutfmdeY%2BJG2KEbX1J5H4eQkNDmE5LfPbgDE1KrtvhbBVAeIccmUeiVMNb9zskGOqUBRnCGKj9bLmD4CJ6KXFDIb4ipSqnYR8v60bXFagVEJn1ipmYi06KFvAejJHyKQoQBSZNnhn2OCDnAV%2B4bePtwK6tb09SHdAMaYlCW21buXmQ4KUWNzNxIfc%2FNK70qkqHtLWVaW3d8%2FZQwdI0%2BmKa4AuUvY3uWH57qNp3ZI%2F2S5%2FmxjJEnTd%2BdhZMszTTHpELvRLYSotTEdMke7QCe4IH%2Fn8fJQcN%2F&X-Amz-Signature=1516bca012b4d76837f653a00d8fa0be3340ef73654c19e92de429d5956157f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

