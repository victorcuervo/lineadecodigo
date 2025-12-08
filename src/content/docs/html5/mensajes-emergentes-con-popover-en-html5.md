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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2IF6PF4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4ZLVzhpfmTQszVSEm9VmqWHFiB1QcWBiKgflPZVQzbQIgKJa%2FUfQK6Vgo8aJl2AHdsmV9it0%2Ftbt0cFXjDNs9SK0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoOnPSMou2FQOjlKCrcA0ie%2FVy7OQ224VO3apugISBEV8ohADmfUIOsexjKQ5fSwINzAJh9It6PC0OWbAHfpc4TfORbXxNjaf9Ia7Uai9E10%2B7GZs%2Bu3qDeS9H035DY7Dnd2cd2G9DwHVYQLN45PA9%2Ba2Fdm%2Fi58omVJVHOpQ%2B1jn8aKExo7hG9jF8Qjq%2FL57bbYH9c9itBgqIGKQmCP2%2BBX%2Br4PYAe5AgCUCUx%2BPSEfrkrAbNF%2Br%2Fxwta5TzUoK9atot8gAaKpzbKKD7Gf1aDCnG%2FCKU1XngwOVh8SoPxV09kZeDj%2FGch6dVMmXvuASk3CrpVTJuuh2TfCBXskooOud%2F5Nj47u%2B0aaTcYhhnWYjF%2BhHkIM3unEdDlKPJl7ghrDL0X6mBwcs4fMxjDvwONNuRXC9qmfsdv%2FMqQi9ef5kH2AMuhfP90r4YE31MkWff3pGuARIJUe9WdGFCkP3X2Vqrh%2B93l7nPx9tHhA%2Bzb%2B1PZp7Oz1M8AmSshHUOxwUAx2EZlwWYSfVM0nc6pGyr2V52512Fx7Kd%2FzsmdaspRumipKPOoVIITNrlkexWmztdoTLQinbOiT5QgwHdOVb6OU0Eysdclizar9hkshRx%2Fwh3Mjq%2FFLFtmV7aQX4wXFdgJPyA2ZvQlyREjaMPqU2ckGOqUBKkyjejQll6VEUTOTgXCFSi3UrJtiww40cq0FAWnUf%2B0mxlhyK1GtMtU9kBGzL3Gdr8RnW55qaockgpUws60yn%2BIXFqF%2BDv2OvDxWmwQFgyX2ht8Cee8GqIaa5vUj%2FYGLSqjMpLZHVC2CEKnfXcG3VT76tNo3Pw5sQmQEmg8v4v26Z%2FQ0j%2BvTZo4QPyxUn7lNYzEsjkTn0n9XZ%2FgQ7a6nJKxx5%2BaD&X-Amz-Signature=6d9100e0a0b517cb7d591e010ee844e471c0878a63f95d6c996cea1d53ed6e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2XWYI4O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqdq2vKXdDzfe24ZYbwSncl8S%2FLu04avFG4EixKd2%2B9AiBoedu32vm8O%2BRhhFSzN%2BdU696VOp4q6YR4yzmZzE49jyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTrHy9VnzwAOBcQAFKtwDjrOrufq6DpG6h4P87drG4KuCRukqkjh7Q%2Bq58Moy%2Fc03c%2Fu8mZ0B0cG7B1Ms5QoFc4n%2Ft0xbmis8MTS7MGCl%2BXlVmyTBe0YKmTI6uGRoMmccXjfKznvN32kt4752IjPRQc9qA4%2Bx%2BzeZ7s%2F4sSj0uhcvJwj%2BSEIaptbvDVBIxyLgY2fbsNFf87Ms35Gf%2BG20674%2BinJzFIHT47Z%2FPufA%2FDEx7YANqI3rU88odudg%2Bl8qNNoZWo%2Bje3B8OrVK9eJmmMbRZY0n3fv8sNSWwD4mEur4P8ByaPVojo7Vb34o%2FY7fSWV14%2FB7aQyPB4VGPZnwWkWjaIUeZ4z1S4VDYumAlUqQ7A1gpcSvVw849rSAk%2FagxPrnJI1HgekUgwTZ3EkDPzy4%2F6L8Au%2BHc4FRhhYyWAa2msr8ktf2gu6PFh2EyIbYOKkRnL9RpViLy53zZrIymBQ%2FKa0%2BmmGruHcpNavWUAlGh5j5esFlF%2BOBSOUJmp43ukK0ewgNAGxp75jZt9JYmJsgKB8BTzW6c8m3TXuW26i5jkBB8Np%2F%2FS4t%2FacvH4n%2B9sRrPTyR6noqj81IesdZDdB%2FI%2F%2BdphQROKkb3kGBHYiQJzaUQmeAeH0GtG6M%2FO39zp93kotmTTtm%2Brww%2BJTZyQY6pgFboe78mUccgC7wqvaVcoDFX8RRUEXxFsrWCtUKqT3FgL9Ow8CBqfi3TUq9UWkW%2FJAaWEz5svs2vhJpKz11FsoJjVi%2BJWmDrxq4OS%2BuN2I0aUJKlS4TTKR%2B%2F3ALhn52U%2BESjnGdiX37p8XOGRrzfb4CO7za64QiYXIDeQ%2BWHqJ1ZbjYMdCvuKMe1yBMQDZBVCBwiN%2FwHTHfmSvhNoCH%2FFe32QnSQnZ2&X-Amz-Signature=767ad8b1b85116ab1fea8c1cae59de3975cb1b9991a3956881161750d40d2e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

