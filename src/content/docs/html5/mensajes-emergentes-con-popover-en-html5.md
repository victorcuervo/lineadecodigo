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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQN3UGL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvwObMcE5Gqqcy9tnrUffceVOfd7sLOY9Q6oB9MNPxlAiB1SomaYR4P7I%2FBDJvjPL%2BaAt5iE9skrnQmtBSGQfq9Xir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMu0ZToRYJ%2BMjkVus4KtwDDXRKsVK5kIIImlUWP9v1KBoEXpqrisO9hZzFODnvISlKp8dI7fvPMwURXLeN51I9cUvjWPvn%2BcD4kV2hJDAyI9x4cIziZrFVtMdEhz02hefP5oSN7GGUq%2B3FOUA6Xfx9gYX4qRHTl9AvAKURyjaow1llWyNna9tvlkf1gR4fBCBk1CpUfTcnlJCL5WqnW3uC7MirJs2Qp7QGb5qruikY%2FGfIKfwu3SSpMNRgoiL1Tz0v3MsqDjX%2BKFZxPkNx50H0XlKNTajPIuOmMZinqrNEYUlRxPJ2%2FCgoMOWzAl3Dk9Qd0Q1NymJS631x6uX5gYPpb8Xg7xZrBfuj3ei3hc2UPBRnOZupVTG4rFNc%2F3Ayo%2F%2F9vIfCn306mF4sW7Gqw1mFsiIFTbc2VBW962kE6QG6nSMB1sENduyxYSzn%2BKK6S4dWSau%2FWwreFQ5%2BKZ6CJBU8xjyKh6bobmxR7vglh0zWYtmwDJXr4pmPJM6WA03GealE53NaRGXKNw4lIT92P3YCIOLkTpH%2FACftkY8z1RBfoNEVQ%2B8Mq%2Fdx9UPx%2FlulRZpUyHynMUDWHnH8RyDx%2Btvmy8bUKxnCx9giko2%2FXXhXOo%2BF%2FpMFJu0tuPVS3d3UyUYjKquHs%2FeV7KSWRjEwzfrGyQY6pgHNlGP6vaEQ3IpXRE%2FSC%2BbBOvS5MDKXw%2BBEh8QCdKbi9MVxAbcWagKQp%2FJtK%2BrPrSrqjjFcWmX%2B0b4dZ9Hu5Y%2B65wdg9mdeyV2cg%2FQ92haN2yzKNCwyyKlgXyllGfq4nKBowxXXsc0A924wcJmr8alZLZUJ3IVJuLidgQZ6FyISfRjuGwfrcGfk1X%2BbVA5dS8RZZR%2FrRKBoLXiF%2BmKgUcxJIqaGsSGS&X-Amz-Signature=cd903812984ca67542091683b81fc9f2e72e8192120f60532bb6cae3e3c6e7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623DXJLHQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECMRPmzq2ntKaaTnsWuNTr8uzouX7WCbTlmvHdAgoB%2BAiEA6UJDb8Xy4Cbdk3D6jq6VtnQ7CwCiqYlYRrt%2BfAe3Spwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBXoYgeZflmaeblfqSrcA3gZVfAf%2Bjao%2BMbTlK5ok38ToVibBUtwj9E%2FzevSc8nWyRqJrtr6iWFdLy7M53ePPV3O59kb116diK3a59PXrIrSUwM2kHONS65unvmfFeiZfvk%2FbGvMvUpDzrQUb7C7J6o1MgSFfezM5S%2FDrFWfd7aYyAgWkxgEkxayPJohan%2BQB6KuZZjy7IePERlyN7MJlA0OH0ALk0nmP565e5EoKM%2Fy86XaAZx%2Fl%2BwihMDZMg5U%2FUcY6UC5rZPszAnfRLYNjT84R5ucWuWjXrsBRJK0U67iXg27bBkx6Bcr2xS4FRCr8zpAMdsa4jaR%2BLxfrPAzmi1IKU2jhuahBjGOfT3phpgVll%2Buk3WPRIDBU7Rzgd3jGDZJHCI8RHoz4sa4yQOymfSG4BvgqcXDknpY9HBP2hV5o7Ix9FfCAekYx0FQO%2FLg6KUrqCqs%2BMS3%2FseVIOk2ShYlRy02gq6wbfm2mtgGPqBUQPSWIu9M2CMtLkKZQTdpobCZWA12iHts%2FmdlOxthbi9scJ2tPcbVpHkWqwZ%2BCmnUGIsG9J0UW4fXwxvo%2FkRx12cN8V7TOHbJF5PpUCKXC8KoO95VqbYvY7Wgw10gFumzqnoYVcnabDAuJwgUMb41oZ9UiMTOE9esp1MwMN76xskGOqUB8AC08FS9je7AkqqtH7lPMk4yC5a2pNKDaPd1Owo86XkAcqZrV%2Bb0LeyEDCSKn1MUHvpXc%2BUqAwmpH%2FLk69vRq%2B3va5Z8Zz0dQcdfjx75xDsGCfvhLQ22NzK9zVvy63aLt%2BhsWZ0DlC5IgwzRkxFkzFLBv8XaS%2BdBJtM50ui15VUquY3xSz6k19Ihe8qjpgjaE2jeTJs4y1PP9wSk2aZAYtAr6UMr&X-Amz-Signature=7ddd0ba05b598f38cc05938f38c0b1844aeab877062f16bfb6ba50094eed6e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

